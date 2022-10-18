import path from 'path';
import type { LoaderContext } from 'webpack';
import { createDebugger } from '@modern-js/utils';

const debug = createDebugger('routes-loader');

async function RoutesLoader(
  this: LoaderContext<any>,
  source: string,
  sourcemap: any,
): Promise<void> {
  const callback = this.async();
  const match = this.resource.match('/routes.(t|j)s');

  if (!match) {
    callback(null, source, sourcemap);
    return;
  }

  debug('match routes $s');

  let nextSource = source || '';
  const s = new URLSearchParams(this.resourceQuery);

  if (routerMode === 'config') {
    // path/pages -> path/routes.ts
    const realPath = path.resolve(
      bs.projectMetadata.paths.cwd,
      path.join(path.dirname(searchDirs), ROUTES),
    );
    debug('config router file location at %s', realPath);

    nextSource = `
        import routes from "${realPath}?inline";
        export default routes;
        `;
  }

  if (hasLoadableConfig(router)) {
    nextSource = `
      import loadable from @loadable/component"
      ${nextSource}
      `;
  }

  nextSource = `
    import React from 'react'
    ${nextSource}
    `;

  callback(null, nextSource, sourcemap);
}

export default RoutesLoader;
