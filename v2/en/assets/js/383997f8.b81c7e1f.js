"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1797],{44993:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(t),f=o,d=g["".concat(l,".").concat(f)]||g[f]||c[f]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},31114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(18249),o=(t(52983),t(44993));const i={title:"\u63d2\u4ef6 API",sidebar_position:6},a=void 0,p={unversionedId:"guides/topic-detail/framework-plugin/plugin-api",id:"guides/topic-detail/framework-plugin/plugin-api",title:"\u63d2\u4ef6 API",description:"\u63d2\u4ef6\u7684 setup \u51fd\u6570\u4f1a\u63a5\u6536\u4e00\u4e2a api \u5165\u53c2\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528 api \u4e0a\u63d0\u4f9b\u7684\u4e00\u4e9b\u65b9\u6cd5\u6765\u83b7\u53d6\u5230\u914d\u7f6e\u3001\u5e94\u7528\u4e0a\u4e0b\u6587\u7b49\u4fe1\u606f\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/plugin-api.md",sourceDirName:"guides/topic-detail/framework-plugin",slug:"/guides/topic-detail/framework-plugin/plugin-api",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/plugin-api",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u63d2\u4ef6 API",sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"\u6269\u5c55\u63d2\u4ef6 Hook",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/extend"},next:{title:"Hook \u5217\u8868",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/hook-list"}},l={},s=[{value:"API",id:"api",level:2},{value:"useConfigContext",id:"useconfigcontext",level:3},{value:"useAppContext",id:"useappcontext",level:3},{value:"useResolvedConfigContext",id:"useresolvedconfigcontext",level:3},{value:"useHookRunners",id:"usehookrunners",level:3}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u63d2\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," \u51fd\u6570\u4f1a\u63a5\u6536\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," \u5165\u53c2\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528 api \u4e0a\u63d0\u4f9b\u7684\u4e00\u4e9b\u65b9\u6cd5\u6765\u83b7\u53d6\u5230\u914d\u7f6e\u3001\u5e94\u7528\u4e0a\u4e0b\u6587\u7b49\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // \u83b7\u53d6\u5e94\u7528\u539f\u59cb\u914d\u7f6e\n    const config = api.useConfigContext();\n    // \u83b7\u53d6\u5e94\u7528\u8fd0\u884c\u4e0a\u4e0b\u6587\n    const appContext = api.useAppContext();\n    // \u83b7\u53d6\u89e3\u6790\u4e4b\u540e\u7684\u6700\u7ec8\u914d\u7f6e\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"useconfigcontext"},"useConfigContext"),(0,o.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u5e94\u7528\u539f\u59cb\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useConfigContext: () => UserConfig\n\ninterface UserConfig {\n  source?: SourceConfig;\n  output?: OutputConfig;\n  server?: ServerConfig;\n  dev?: DevConfig;\n  deploy?: DeployConfig;\n  tools?: ToolsConfig;\n  plugins?: PluginConfig;\n  runtime?: RuntimeConfig;\n  runtimeByEntries?: RuntimeByEntriesConfig;\n}\n")),(0,o.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u5b57\u6bb5\u7684\u610f\u4e49\u8bf7\u53c2\u8003\u3010",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/source/alias"},"\u914d\u7f6e"),"\u3011\u3002"),(0,o.kt)("h3",{id:"useappcontext"},"useAppContext"),(0,o.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u5e94\u7528\u8fd0\u884c\u4e0a\u4e0b\u6587\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useAppContext: () => IAppContext\n\ninterface IAppContext {\n  appDirectory: string;\n  configFile: string | false;\n  ip?: string;\n  port?: number;\n  distDirectory: string;\n  packageName: string;\n  srcDirectory: string;\n  sharedDirectory: string;\n  nodeModulesDirectory: string;\n  internalDirectory: string;\n  plugins: {\n    cli?: any;\n    server?: any;\n  }[];\n  entrypoints: Entrypoint[];\n  serverRoutes: ServerRoute[];\n  htmlTemplates: HtmlTemplates;\n}\n")),(0,o.kt)("h3",{id:"useresolvedconfigcontext"},"useResolvedConfigContext"),(0,o.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u89e3\u6790\u4e4b\u540e\u7684\u6700\u7ec8\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useResolvedConfigContext: () => NormalizedConfig\n\ninterface NormalizedConfig {\n  source: NormalizedSourceConfig;\n  output: OutputConfig;\n  server: ServerConfig;\n  dev: DevConfig;\n  deploy: DeployConfig;\n  tools: NormalizedToolsConfig;\n  plugins: PluginConfig;\n  runtime: RuntimeConfig;\n  runtimeByEntries?: RuntimeByEntriesConfig;\n  _raw: UserConfig\n}\n")),(0,o.kt)("p",null,"\u5177\u4f53\u914d\u7f6e\u5b57\u6bb5\u7684\u610f\u4e49\u8bf7\u53c2\u8003\u3010",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/source/alias"},"\u914d\u7f6e"),"\u3011\u3002"),(0,o.kt)("h3",{id:"usehookrunners"},"useHookRunners"),(0,o.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6 Hooks \u7684\u6267\u884c\u5668\uff0c\u5e76\u89e6\u53d1\u7279\u5b9a\u7684 Hook \u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    const hookRunners = api.useHookRunners();\n    // \u89e6\u53d1 afterBuild Hook\n    await hookRunners.afterBuild();\n  },\n});\n")))}c.isMDXComponent=!0}}]);