import AppToolsPlugin, { defineConfig } from '@modern-js/app-tools';
import GarfishPlugin from '@modern-js/plugin-garfish';
import RouterV5Plugin from '@modern-js/plugin-router-v5';
import { getPort } from '../../../utils/testCase';

module.exports = defineConfig({
  plugins: [AppToolsPlugin(), GarfishPlugin(), RouterV5Plugin()],
  runtime: {
    router: {
      mode: 'react-router-5',
    },
    // state: true,
  },
  deploy: {
    microFrontend: {
      enableHtmlEntry: true,
      externalBasicLibrary: false,
    },
  },
  source: {
    enableAsyncEntry: true,
  },
  server: {
    port: getPort('@cypress-test/garfish-dashboard'),
  },
  tools: {
    webpack: (config, { appendPlugins, webpack }) => {
      const { ModuleFederationPlugin } = webpack.container;
      appendPlugins([
        new ModuleFederationPlugin({
          filename: 'remoteEntry.js',
          name: 'dashboard',
          exposes: {
            './share-button': './src/ShareButton.tsx',
          },
        }),
      ]);
      delete config.optimization?.runtimeChunk;
      delete config.optimization?.splitChunks;
    },
  },
  // dev: {
  //   withMasterApp: {
  //     moduleApp: 'http://localhost:8080/',
  //     moduleName: 'Dashboard',
  //   },
  // },
});
