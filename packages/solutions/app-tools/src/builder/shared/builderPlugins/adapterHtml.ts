import { isHtmlDisabled } from '@modern-js/uni-builder';
import type {
  RsbuildPlugin,
  RspackChain,
  ChainIdentifier,
} from '@rsbuild/core';
import {
  MAIN_ENTRY_NAME,
  getEntryOptions,
  removeTailSlash,
} from '@modern-js/utils';
import { template as lodashTemplate } from '@modern-js/utils/lodash';
import type { Bundler } from '../../../types';
import type { HtmlUserConfig } from '../../../types/config/html';
import { BottomTemplatePlugin } from '../bundlerPlugins';
import type { BuilderOptions } from '../types';

const createVirtualModule = (content: string) =>
  `data:text/javascript,${content}`;

export const builderPluginAdapterHtml = <B extends Bundler>(
  options: BuilderOptions<B>,
): RsbuildPlugin => ({
  name: 'builder-plugin-adapter-modern-html',
  setup(api) {
    api.modifyBundlerChain(
      async (
        chain,
        { CHAIN_ID, target, HtmlPlugin: HtmlBundlerPlugin, environment },
      ) => {
        const builderConfig = environment.config;

        if (!isHtmlDisabled(builderConfig, target)) {
          applyBottomHtmlPlugin({
            options,
            chain,
            CHAIN_ID,
            HtmlBundlerPlugin,
            htmlPaths: environment.htmlPaths,
          });

          await injectAssetPrefix({
            chain,
          });
        }
      },
    );
  },
});

async function injectAssetPrefix({ chain }: { chain: RspackChain }) {
  const entries = chain.entryPoints.entries() || {};
  const entryNames = Object.keys(entries);
  const assetPrefix = removeTailSlash(chain.output.get('publicPath') || '');
  const code = `window.__assetPrefix__ = '${assetPrefix}';`;

  entryNames.forEach(entryName => {
    entries[entryName].prepend(createVirtualModule(code));
  });
}

/** inject bottom template */
function applyBottomHtmlPlugin<B extends Bundler>({
  chain,
  options,
  CHAIN_ID,
  HtmlBundlerPlugin,
  htmlPaths,
}: {
  chain: RspackChain;
  options: BuilderOptions<B>;
  CHAIN_ID: ChainIdentifier;
  HtmlBundlerPlugin: any;
  htmlPaths: Record<string, string>;
}) {
  const { normalizedConfig: modernConfig, appContext } = options;
  // inject bottomTemplate into html-webpack-plugin
  for (const entryName of Object.keys(htmlPaths)) {
    const {
      source: { mainEntryName },
    } = modernConfig;
    const isMainEntry = entryName === (mainEntryName || MAIN_ENTRY_NAME);
    // FIXME: the only need necessary
    const baseTemplateParams = {
      entryName,
      title: getEntryOptions<HtmlUserConfig['title']>(
        entryName,
        isMainEntry,
        modernConfig.html.title,
        modernConfig.html.titleByEntries,
        appContext.packageName,
      ),
      mountId: modernConfig.html.mountId,
      ...getEntryOptions<any>(
        entryName,
        isMainEntry,
        modernConfig.html.templateParameters,
        modernConfig.html.templateParametersByEntries,
        appContext.packageName,
      ),
    };

    chain.plugin(`${CHAIN_ID.PLUGIN.HTML}-${entryName}`).tap(args => [
      {
        ...(args[0] || {}),
        __internal__: true,
        bottomTemplate:
          appContext.htmlTemplates[`__${entryName}-bottom__`] &&
          lodashTemplate(appContext.htmlTemplates[`__${entryName}-bottom__`])(
            baseTemplateParams,
          ),
      },
    ]);
  }
  chain
    .plugin('bottom-template')
    .use(BottomTemplatePlugin, [HtmlBundlerPlugin]);
}
