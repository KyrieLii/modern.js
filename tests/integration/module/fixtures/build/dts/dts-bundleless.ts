import { defineConfig } from '@modern-js/module-tools/defineConfig';

export default defineConfig({
  buildConfig: {
    buildType: 'bundleless',
    dts: {
      distPath: './types',
      only: true,
      enableTscBuild: true,
    },
    outDir: './dist/bundleless',
  },
});
