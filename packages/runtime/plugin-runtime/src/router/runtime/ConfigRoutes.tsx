// config routes

import {
  useLocation,
  matchRoutes,
  useRoutes,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import React, { useEffect } from 'react';

export type DefinedRoute = Omit<RouteObject, 'element' | 'children'> & {
  /**
   * String type component will transformed in @ies/ace-app-presets
   * React.LazyExoticComponent | LoadableComponent
   */
  component?: any;
  /**
   * Define redirect path, should startsWith `/`
   * @example `/user`
   */
  redirect?: string;
  /**
   * Set document.title if match path
   */
  title?: string;
  id?: string | number;
  /**
   * Nested routes
   */
  children?: DefinedRoute[];
};

export type DefinedRoutes = DefinedRoute[];

interface IConfigRouteProps {
  redirect?: string;
  component?: any;
  loading?: React.ReactNode;
  lazy?: boolean;
}

interface IConfigRoutesProps {
  routes: DefinedRoutes;
  lazy?: boolean;
  loading?: React.ReactNode;
  basename?: string;
}

// set title
const useTitle = (props: any) => {
  const location = useLocation();
  useEffect(() => {
    const matches = matchRoutes(props.routes, location, props.basename);
    const matchedRoute = matches && matches[matches.length - 1].route;
    const { title } = matchedRoute as DefinedRoute;
    if (title) {
      document.title = title;
    }
  }, [location, props.basename, props.routes]);
};

const DefaultLoading = () => <div>loading ... </div>;

export const ConfigRoute = ({
  redirect,
  component: Component,
  loading,
  lazy,
}: IConfigRouteProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  if (!Component) {
    return <></>;
  }

  const Element = (
    <Component
      navigate={navigate}
      location={location}
      fallback={(loading as JSX.Element) || <DefaultLoading />}
    />
  );

  // FIXME: with stream ssr ?
  if (lazy) {
    return (
      <React.Suspense fallback={loading || <DefaultLoading />}>
        {Element}
      </React.Suspense>
    );
  }

  return Element;
};

const transformRoutes = ({
  routes = [],
  loading,
  lazy,
}: {
  routes: DefinedRoutes;
  loading?: React.ReactNode;
  lazy?: boolean;
}): DefinedRoutes => {
  const final = [];
  for (const route of routes) {
    const parent = {
      ...route,
      // specific redirect, route.component is optional
      element:
        !route.component && !route.redirect ? undefined : (
          <ConfigRoute
            redirect={route.redirect}
            component={route.component}
            loading={loading}
            lazy={lazy as any}
          />
        ),
    };
    if (parent.children) {
      parent.children = transformRoutes({
        routes: parent.children,
        lazy,
        loading,
      });
    }
    final.push(parent);
  }
  return final;
};

const ConfigRoutes = ({
  routes,
  lazy,
  loading,
  basename,
}: IConfigRoutesProps): JSX.Element => {
  useTitle({ routes, basename });
  const element = useRoutes(
    transformRoutes({ routes, lazy, loading }) as RouteObject[],
  );
  return <>{element}</>;
};

export default ConfigRoutes;
