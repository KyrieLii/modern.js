import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error React 18
import ReactDOM from 'react-dom/client';
import { runtime, Plugin } from './plugin';

export type RenderProps = {
  App: React.ComponentType;
};

export const initialRender = (plugins: Plugin[], manager = runtime) => {
  manager.usePlugin(...plugins);

  return {
    clientRender: (props: RenderProps, rootElement: HTMLElement) =>
      clientRender(props, rootElement, manager),
    serverRender: (props: RenderProps) => serverRender(props, manager),
  };
};

export const clientRender = (
  { App }: RenderProps,
  rootElement: HTMLElement,
  manager = runtime,
) => {
  const runner = manager.init();

  return runner.client(
    { App, rootElement },
    {
      onLast: async ({ App, rootElement }) => {
        ReactDOM.createRoot(rootElement).render(App);
      },
    },
  );
};

export const serverRender = ({ App }: RenderProps, manager = runtime) => {
  const runner = manager.init();

  return runner.server({ App });
};
