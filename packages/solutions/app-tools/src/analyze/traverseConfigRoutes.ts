import fs from 'fs';
import generator from '@babel/generator';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

export type Lazy = { mode: 'loadable' } | boolean;

const isTargetProp = (node: any, prop: string): boolean =>
  node.key.name === prop || node.key.value === prop;

export const traverseConfigRoutes = (
  file: string | false,
  lazy?: Lazy,
): string => {
  if (!file || !fs.existsSync(file)) {
    return '';
  }

  const ast = parse(fs.readFileSync(file, 'utf8'), {
    sourceType: 'unambiguous',
    plugins: ['jsx', 'typescript'],
  });

  traverse(ast, {
    ObjectProperty: (path: any) => {
      if (isTargetProp(path.node, 'module')) {
        // item.module = require(path)
        if (!lazy) {
          path.node.value = t.callExpression(t.identifier('require'), [
            path.node.value,
          ]);
        }
      }
      if (isTargetProp(path.node, 'component')) {
        // item.component = require(path).default
        if (!lazy) {
          path.node.value = t.memberExpression(
            t.callExpression(t.identifier('require'), [path.node.value]),
            t.identifier('default'),
          );
          return;
        }
        if (lazy === true) {
          // item.component = React.lazy(() => import(path))
          path.node.value = t.callExpression(
            t.memberExpression(t.identifier('React'), t.identifier('lazy')),
            [
              t.arrowFunctionExpression(
                [],
                t.callExpression(t.import(), [path.node.value]),
              ),
            ],
          );
        }
        if (typeof lazy === 'object' && lazy.mode === 'loadable') {
          // item.component = loadable(() => import(path))
          path.node.value = t.callExpression(t.identifier('loadable'), [
            t.arrowFunctionExpression(
              [],
              t.callExpression(t.import(), [path.node.value]),
            ),
          ]);
        }
      }
    },
  });

  const { code } = generator(ast);
  return code;
};
