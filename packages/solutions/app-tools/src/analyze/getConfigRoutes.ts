import { createDebugger } from '@modern-js/utils';
import type { Entrypoint } from '@modern-js/types';
import { traverseConfigRoutes } from './traverseConfigRoutes';

const debug = createDebugger('get-config-routes');

export const getConfigRoutes = async ({
  entrypoint,
  lazy,
}: {
  entrypoint: Entrypoint;
  lazy?: any;
}) => {
  const { configRoutes } = entrypoint;
  if (typeof configRoutes === 'string') {
    const routes = traverseConfigRoutes(configRoutes, lazy);
    debug(`config routes : %o`, routes);
    return routes;
  }
  return [];
};
