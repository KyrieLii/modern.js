import React, { useContext } from 'react';
import {
  HashRouter,
  BrowserRouter,
  useLocation,
  useRoutes,
} from 'react-router-dom';
import type { RouteProps, RouteObject } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { RuntimeReactContext, ServerRouterContext } from '../../core';
import type { Plugin } from '../../core';
import { isBrowser } from '../../common';
import { renderRoutes, getLocation, urlJoin } from './utils';

declare global {
  interface Window {
    _SERVER_DATA?: {
      router: {
        baseUrl: string;
        params: Record<string, string>;
      };
    };
  }
}

export type SingleRouteConfig = RouteProps & {
  redirect?: string;
  routes?: SingleRouteConfig[];
  key?: string;

  /**
   * layout component
   */
  layout?: React.ComponentType;

  /**
   * component would be rendered when route macthed.
   */
  component?: React.ComponentType;
};

export type RouterConfig = {
  legacy?: boolean;
  routesConfig?: {
    globalApp?: React.ComponentType<any>;
    routes?: SingleRouteConfig[];
  };
  serverBase?: string[];
  supportHtml5History?: boolean;
  configRoutes?: any[]; // FIXME: type
};

export const routerPlugin = ({
  serverBase = [],
  supportHtml5History = true,
  routesConfig,
  configRoutes,
}: RouterConfig): Plugin => {
  const isBrow = isBrowser();

  const select = (pathname: string) =>
    serverBase.find(baseUrl => pathname.search(baseUrl) === 0) || '/';
  return {
    name: '@modern-js/plugin-router',
    setup: () => {
      return {
        hoc: ({ App }, next) => {
          const getRouteApp = () => {
            // client router
            if (isBrow) {
              const baseUrl =
                window._SERVER_DATA?.router.baseUrl ||
                select(location.pathname);

              const Router = supportHtml5History ? BrowserRouter : HashRouter;

              const RouterContent = (props: any) => {
                const location = useLocation();
                const element = useRoutes(configRoutes as RouteObject[]);

                const fileBasedRoutes = routesConfig
                  ? renderRoutes(routesConfig, location.pathname, props)
                  : null;
                return (
                  <App {...props}>
                    {configRoutes ? element : fileBasedRoutes}
                  </App>
                );
              };

              return (props: any) => (
                <Router basename={baseUrl}>
                  <RouterContent {...props} />
                </Router>
              );
            }
            return (props: any) => {
              const runtimeContext = useContext(RuntimeReactContext);
              const { ssrContext } = runtimeContext;
              const location = getLocation(ssrContext);
              const routerContext = ssrContext?.redirection || {};
              const request = ssrContext?.request;
              const baseUrl = request?.baseUrl as string;
              const basename = baseUrl === '/' ? urlJoin(baseUrl) : baseUrl;
              // TODO ssr router needs update https://reactrouter.com/en/main/guides/ssr
              return (
                <ServerRouterContext.Provider value={routerContext}>
                  <StaticRouter
                    basename={basename === '/' ? '' : basename}
                    location={location}
                  >
                    <App {...props}>
                      {routesConfig
                        ? renderRoutes(routesConfig, location, props)
                        : null}
                    </App>
                  </StaticRouter>
                </ServerRouterContext.Provider>
              );
            };
          };
          let RouteApp = getRouteApp();

          if (App) {
            RouteApp = hoistNonReactStatics(RouteApp, App);
          }

          if (routesConfig?.globalApp) {
            return next({
              App: hoistNonReactStatics(RouteApp, routesConfig.globalApp),
            });
          }

          return next({
            App: RouteApp,
          });
        },
      };
    },
  };
};
