import { GeneratorContext, GeneratorCore } from '@modern-js/codesmith';
import { AppAPI } from '@modern-js/codesmith-api-app';
import { chalk, getModernConfigFile } from '@modern-js/generator-utils';
import {
  DependenceGenerator,
  i18n as commonI18n,
} from '@modern-js/generator-common';
import { i18n, localeKeys } from './locale';

const handleTemplateFile = async (
  context: GeneratorContext,
  _generator: GeneratorCore,
  appApi: AppAPI,
) => {
  console.log(context.config);
  const { getGeneratorPath } = context.config;
  await appApi.runSubGenerator(
    getGeneratorPath(DependenceGenerator, context.config.distTag, [__dirname]),
    undefined,
    {
      ...context.config,
      isSubGenerator: true,
    },
  );
};

export default async (context: GeneratorContext, generator: GeneratorCore) => {
  const appApi = new AppAPI(context, generator);

  const { locale } = context.config;
  commonI18n.changeLanguage({ locale });
  appApi.i18n.changeLanguage({ locale });

  if (!(await appApi.checkEnvironment())) {
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }

  generator.logger.debug(`start run @modern-js/ssg-generator`);
  generator.logger.debug(`context=${JSON.stringify(context)}`);
  generator.logger.debug(`context.data=${JSON.stringify(context.data)}`);

  await handleTemplateFile(context, generator, appApi);

  if (!context.config.isSubGenerator) {
    await appApi.runInstall(undefined, { ignoreScripts: true });
    if (!context.config.pluginName) {
      appApi.showSuccessInfo();
    } else {
      const appDir = context.materials.default.basePath;
      const configFile = await getModernConfigFile(appDir);
      const isTS = configFile.endsWith('ts');
      const { pluginName, pluginDependence, shouldUsePluginNameExport } =
        context.config;
      console.info(
        chalk.green(`\n[INFO]`),
        `${i18n.t(localeKeys.success)}`,
        chalk.yellow.bold(`${configFile}`),
        ':',
        '\n',
      );
      if (shouldUsePluginNameExport) {
        console.info(
          chalk.yellow.bold(
            `import { ${pluginName} } from '${pluginDependence}';`,
          ),
        );
      } else {
        console.info(
          chalk.yellow.bold(`import ${pluginName} from '${pluginDependence}';`),
        );
      }
      if (isTS) {
        console.info(`
export default defineConfig({
  ...,
  output: {
    ...,
    ${chalk.yellow.bold(`ssg: true`)},
  },
  plugins: [..., ${chalk.yellow.bold(`${pluginName}()`)}],
});
`);
      } else {
        console.info(`
module.exports = {
  ...,
  output: {
    ...,
    ${chalk.yellow.bold(`ssg: true`)},
  },
  plugins: [..., ${chalk.yellow.bold(`${pluginName}()`)}],
};
`);
      }
    }
  }
  generator.logger.debug(`forge @modern-js/ssg-generator succeed `);
};
