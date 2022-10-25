import path from 'path';
import { traverseConfigRoutes } from '../../src/analyze/traverseConfigRoutes';

const routesPath = path.resolve(
  __dirname,
  './fixtures/config-routes/routes.ts',
);

describe('test traverseConfigRoutes', () => {
  test('lazy true', () => {
    const code = traverseConfigRoutes(routesPath);
    expect(code).toMatchSnapshot();
  });

  test('lazy false', () => {
    const code = traverseConfigRoutes(routesPath, false);
    expect(code).toMatchSnapshot();
  });

  test('lazy loadable', () => {
    const code = traverseConfigRoutes(routesPath, { mode: 'loadable' });
    expect(code).toMatchSnapshot();
  });
});
