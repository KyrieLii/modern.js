import { routerPlugin } from './plugin';
import type { SingleRouteConfig, RouterConfig } from './plugin';
import type { DefinedRoutes } from './ConfigRoutes';

export type { SingleRouteConfig, RouterConfig };

export type { DefinedRoutes };

export default routerPlugin;

export * from 'react-router-dom';

export * from './withRouter';
