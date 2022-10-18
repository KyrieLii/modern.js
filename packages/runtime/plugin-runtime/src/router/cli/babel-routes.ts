import * as t from '@babel/types';
import template from '@babel/template';

type Options = {
  /**
   * disable convert path to require(path)
   */
  disablePageModule?: boolean;
  lazy?: boolean | Record<'mode', string>;
};

/**
 * @description find { component: value } or { "component": value }
 */
const isTargetProp = (node: any, prop: string): boolean =>
  node.key.name === prop || node.key.value === prop;

/**
 * @description file with resourceQuery generateID will processed by webpack/loader/id-loader
 */
const buildRequireRouteID = template(`
  require(SOURCE + "?generateID").id;
`);

const buildRequire = template(`
  require(SOURCE).id;
`);

const buildDynamicRequireRouteID = ({
  SOURCE,
}: {
  SOURCE: t.TemplateLiteral;
}): any => {
  const last = SOURCE.quasis[SOURCE.quasis.length - 1];
  return buildRequire({
    SOURCE: t.templateLiteral(
      [
        ...SOURCE.quasis.slice(0, SOURCE.quasis.length - 1),
        t.templateElement(
          {
            raw: `${last.value.raw}?generateID`,
            cooked: `${last.value.cooked}?generateID`,
          },
          true,
        ),
      ],
      SOURCE.expressions,
    ),
  });
};

function RoutesBabel(
  _: unknown,
  { lazy, ...options }: Options = {},
): Record<string, any> {
  let id = 0;
  return {
    visitor: {
      ObjectExpression(path: any): void {
        const component = path.node.properties.find((e: any) =>
          isTargetProp(e, 'component'),
        );
        if (!lazy && component) {
          path.node.properties = [
            ...path.node.properties,
            t.objectProperty(t.identifier('module'), component.value),
          ];
        }

        const isTemplateLiteral =
          component && component.value.type === 'TemplateLiteral';
        // generate id for config route
        // add id
        path.node.properties = [
          ...path.node.properties,
          t.objectProperty(
            t.identifier('id'),
            // eslint-disable-next-line no-nested-ternary
            component
              ? isTemplateLiteral
                ? buildDynamicRequireRouteID({ SOURCE: component.value })
                    .expression
                : buildRequireRouteID({
                    SOURCE: component.value,
                  }).expression
              : t.stringLiteral(id.toString()),
          ),
        ];
        id += 1;
      },
      ObjectProperty(path: any): void {
        if (options.disablePageModule) {
          return;
        }
        if (isTargetProp(path.node, 'module')) {
          // item.module = require(path)
          if (!lazy) {
            path.node.value = t.callExpression(t.identifier('require'), [
              path.node.value,
            ]);
            return;
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
            return;
          }
          if (lazy.mode === 'loadable') {
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
    },
  };
}

export default RoutesBabel;
