import { createBuilder } from './shared';

(async function main() {
  const builder = await createBuilder();
  await builder.inspectBundlerConfig({
    writeToDisk: true,
  });
  await builder.inspectBuilderConfig({
    writeToDisk: true,
  });
  await builder.inspectBuilderConfig({
    writeToDisk: true,
  });
})();
