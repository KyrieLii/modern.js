import { routerPlugin } from './plugin';
import type { SingleRouteConfig, HistoryConfig, RouterConfig } from './plugin';

export type { SingleRouteConfig, HistoryConfig, RouterConfig };

export default routerPlugin;

export * from 'react-router-dom';
// multiple export in react-router-dom v6 and history v5;
// export * from 'history';
