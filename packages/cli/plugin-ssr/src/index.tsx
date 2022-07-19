import type { Plugin } from '@modern-js/runtime-core';
import { loadableReady } from '@loadable/component';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error React 18
import ReactDOM from 'react-dom/client';
import { RenderLevel, SSRServerContext } from './serverRender/type';
import { formatClient, mockResponse } from './utils';

declare module '@modern-js/runtime-core' {
  interface RuntimeContext {
    ssrContext: SSRServerContext;
  }

  interface TRuntimeContext {
    request: SSRServerContext['request'];
    response: SSRServerContext['response'];
  }

  interface SSRContainer {
    renderLevel: RenderLevel;
    context?: SSRServerContext;
  }
}

const ssr = (): Plugin => ({
  name: '@modern-js/plugin-ssr',
  setup: () => {
    const mockResp = mockResponse();

    return {
      client: async ({ App, context, rootElement }) => {
        const renderLevel = window?._SSR_DATA?.renderLevel;

        if (renderLevel === RenderLevel.CLIENT_RENDER) {
          await (App as any)?.prefetch?.(context);
          ReactDOM.createRoot(rootElement).render(<App context={context} />);
          //   ReactDOM.render(<App context={context} />, rootElement);
        } else if (renderLevel === RenderLevel.SERVER_RENDER) {
          loadableReady(() => {
            const hydrateContext = { ...context, _hydration: true };

            ReactDOM.hydrateRoot(
              rootElement,
              <App
                context={hydrateContext}
                // won't cause component re-render because context's reference identity doesn't change
                callback={() => {
                  delete (hydrateContext as any)._hydration;
                }}
              />,
            );
          });
        } else {
          // unknown renderlevel or renderlevel is server prefetch.
          ReactDOM.createRoot(rootElement).render(<App context={context} />);
        }
      },
      init({ context }, next) {
        const request: SSRServerContext['request'] | undefined =
          window?._SSR_DATA?.context?.request;
        if (!request) {
          return next({ context });
        }

        context.ssrContext.response = mockResp;
        context.ssrContext.request = formatClient(request);
        return next({ context });
      },
      pickContext: ({ context, pickedContext }, next) => {
        const request: SSRServerContext['request'] | undefined =
          window?._SSR_DATA?.context?.request;
        const { initialData } = context;

        if (!request) {
          return next({
            context,
            pickedContext: {
              ...pickedContext,
              initialData,
            },
          });
        }

        return next({
          context,
          pickedContext: {
            ...pickedContext,
            initialData,
            request,
            response: mockResp,
          },
        });
      },
    };
  },
});

export default ssr;

export * from './react';
