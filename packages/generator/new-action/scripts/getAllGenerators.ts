import path from 'path';
import fs from 'fs';
import { fastGlob } from '@modern-js/utils';
import { readJsonSync } from '@modern-js/utils/fs-extra';

const pkgJsons = fastGlob.sync(
  path.join(__dirname, '../../generators/**/package.json'),
  {
    ignore: ['**/node_modules/**', '**/dist/**', '**/__tests__/**'],
  },
);

// ajust to peerdeps
const peers = [
  '@modern-js/utils',
  '@modern-js/generator-common',
  '@modern-js/generator-utils',
  '@modern-js/plugin-i18n',
  '@modern-js/codesmith',
  '@modern-js/codesmith-api-app',
  '@modern-js/codesmith-api-json',
  '@modern-js/codesmith-api-json',
  '@modern-js/codesmith-api-git',
  '@modern-js/codesmith-api-ejs',
  '@modern-js/codesmith-api-fs',
  '@modern-js/codesmith-api-handlebars',
];

const generators = pkgJsons.map(pkg => {
  const json = readJsonSync(pkg, {
    encoding: 'utf-8',
  });
  const { name, devDependencies = {}, dependencies = {} } = json;
  if (!json.peerDependencies) {
    json.peerDependencies = {};
  }

  peers.forEach(i => {
    if (dependencies[i]) {
      // move to dev and peer
      devDependencies[i] = dependencies[i];
      json.peerDependencies[i] =
        dependencies[i] === 'workspace:*'
          ? 'workspace:^2.48.0'
          : dependencies[i];
      // delete
      delete json.dependencies[i];
    }
    // add peer
    if (devDependencies[i]) {
      json.peerDependencies[i] =
        devDependencies[i] === 'workspace:*'
          ? 'workspace:^2.48.0'
          : devDependencies[i];
    }
  });

  fs.writeFileSync(pkg, JSON.stringify(json, null, 2));

  return name;
});

console.log(generators);
