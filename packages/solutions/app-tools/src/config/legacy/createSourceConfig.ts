import type {
  AppLegacyNormalizedConfig,
  AppNormalizedConfig,
} from '../../types';

export function createSourceConfig(
  config: AppLegacyNormalizedConfig,
): AppNormalizedConfig<'webpack'>['source'] {
  const {
    alias,
    envVars,
    globalVars,
    include,
    moduleScopes,
    preEntry,
    entries,
    mainEntryName,
    enableAsyncEntry,
    enableCustomEntry,
    disableDefaultEntries,
    entriesDir,
    configDir,
  } = config.source;

  const builderGlobalVars = globalVars || {};

  for (const envVar of envVars || []) {
    const envVarValue = process.env[envVar];
    envVarValue && (builderGlobalVars[`process.env.${envVar}`] = envVarValue);
  }

  return {
    alias,
    moduleScopes,
    globalVars: builderGlobalVars,
    include,
    preEntry,
    entries,
    mainEntryName,
    enableAsyncEntry,
    enableCustomEntry,
    disableDefaultEntries,
    entriesDir,
    configDir,
    resolveExtensionPrefix: {
      web: '.web',
      node: '.node',
    },
  };
}
