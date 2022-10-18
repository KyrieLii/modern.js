// // config router
import { fs, createDebugger } from '@modern-js/utils';
import type { Entrypoint } from '@modern-js/types';

const debug = createDebugger('get-config-routes');

interface IProps {
  entrypoint: Entrypoint;
  srcDirectory: string;
  srcAlias: string;
  internalDirectory: string;
  internalDirAlias: string;
}

export const getConfigRoutes = async ({ entrypoint }: IProps) => {
  const { configRoutes } = entrypoint;
  if (typeof configRoutes === 'string') {
    const originRoutes = fs.readFileSync(configRoutes, 'utf-8');
    // const originRoutes = require(routesPath);
    debug(`config routes : %o`, originRoutes);
    return originRoutes;
  }
  return [];
};
