import { RouteObject } from 'react-router-dom';

export type DefinedRoute = Omit<RouteObject, 'element' | 'children'> & {
  /**
   * React.LazyExoticComponent | LoadableComponent
   */
  component?: string;
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
