// config routes

import {
  useLocation,
  useRoutes,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import React from 'react';
import { Helmet } from '../../exports/head';

/**
 * config routes
 */
export type DefinedRoute = {
  path: string;
  component: string;
  redirect?: string;
  title?: string;
  index?: boolean;
  caseSensitive?: boolean;
  children?: DefinedRoute[];
};

export type DefinedRoutes = DefinedRoute[];

interface IConfigRouteProps {
  redirect?: string;
  component?: any;
  loading?: React.ReactNode;
  lazy?: boolean;
  title?: string;
}

interface IConfigRoutesProps {
  routes: DefinedRoutes;
  lazy?: boolean;
  loading?: React.ReactNode;
}

const DefaultLoading = () => <div>loading ... </div>;

export const ConfigRoute = ({
  redirect,
  component: Component,
  loading,
  lazy,
  title,
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
    <>
      {title ? (
        <Helmet>
          <title>{title}</title>
        </Helmet>
      ) : null}
      <Component
        navigate={navigate}
        location={location}
        fallback={(loading as JSX.Element) || <DefaultLoading />}
      />
    </>
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
            title={route.title}
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
}: IConfigRoutesProps): JSX.Element => {
  const element = useRoutes(
    transformRoutes({ routes, lazy, loading }) as RouteObject[],
  );
  return <>{element}</>;
};

export default ConfigRoutes;
