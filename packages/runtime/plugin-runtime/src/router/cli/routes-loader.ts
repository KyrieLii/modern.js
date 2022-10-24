import path from 'path';

async function RoutesLoader(this: any, source: any, sourcemap: any) {
  const callback = this.async();
  //   const match = this.resource.match(ROUTES_RE);

  //   if (!match) {
  //     callback(null, source, sourcemap);
  //     return;
  //   }

  let nextSource = source || '';

  console.log('source', source);

  //   nextSource = `
  //         import routes from "./routes";
  //         export default routes;
  //         `;

  //   if (hasLoadableConfig(router)) {
  //     nextSource = `
  //     import loadable from "${LOADABLE_PKG_NAME}"
  //     ${nextSource}
  //     `;
  //   }

  nextSource = `
    import React from 'react'
    ${nextSource}
    `;

  callback(null, nextSource, sourcemap);
}

export default RoutesLoader;
