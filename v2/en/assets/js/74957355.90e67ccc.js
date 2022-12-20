"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1936],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(52983);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=l(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},97093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=t(18249),i=(t(52983),t(44993));const o={sidebar_label:"Overview",sidebar_position:1},a="Overview",u={unversionedId:"configure/app/runtime/intro",id:"configure/app/runtime/intro",title:"Overview",description:"This section describes the configuration of the Runtime plugin.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/runtime/intro.md",sourceDirName:"configure/app/runtime",slug:"/configure/app/runtime/intro",permalink:"/v2/en/docs/configure/app/runtime/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"svgDefaultExport",permalink:"/v2/en/docs/configure/app/output/svg-default-export"},next:{title:"masterApp",permalink:"/v2/en/docs/configure/app/runtime/master-app"}},p={},l=[{value:"Configuration",id:"configuration",level:2},{value:"runtime",id:"runtime",level:3},{value:"Base",id:"base",level:4},{value:"DefineConfig",id:"defineconfig",level:4},{value:"runtimeByEntries",id:"runtimebyentries",level:3},{value:"Introduce",id:"introduce",level:4}],c={toc:l};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This section describes the configuration of the Runtime plugin."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"runtime"},"runtime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"))),(0,i.kt)("p",null,"The runtime is configured as follows:"),(0,i.kt)("h4",{id:"base"},"Base"),(0,i.kt)("p",null,"Configure in ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n    router: true\n  }\n});\n")),(0,i.kt)("h4",{id:"defineconfig"},"DefineConfig"),(0,i.kt)("p",null,"Configure use ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/app/define-config"},(0,i.kt)("inlineCode",{parentName:"a"},"defineConfig"))," API:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When there is a function in the runtime configuration, it can only be configured in this way.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import { defineConfig } from '@modern-js/runtime';\n\nconst App = () => {\n  /** */\n};\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false\n  }\n})\n\nexport default App;\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Using runtime configuration, you can solve the problem that runtime plugin configuration needs to be at runtime to get specific content."),(0,i.kt)("p",{parentName:"admonition"},"Runtime plugin runtime configuration and configuration directly in ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," are merged by default, and runtime configuration takes precedence.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"defineConfig \u4e2d\u53ea\u80fd\u5b9a\u4e49 Runtime \u63d2\u4ef6\u7684\u5177\u4f53\u914d\u7f6e\u5185\u5bb9\uff0c\u786e\u8ba4\u662f\u5426\u5f00\u542f\u63d2\u4ef6\u8fd8\u9700\u8981\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"modernConfig")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u7684\u914d\u7f6e\u51b3\u5b9a\u3002")),(0,i.kt)("h3",{id:"runtimebyentries"},"runtimeByEntries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"))),(0,i.kt)("h4",{id:"introduce"},"Introduce"),(0,i.kt)("p",null,"Add the runtime configuration according to the entry. The option attribute is consistent with the runtime. The specified value will be replaced and merged with the content of the runtime attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: false,\n  },\n  runtimeByEntries: {\n    entry1: {\n       state: true, // { state: true }\n    },\n    entry2: { // { state: false, router: true }\n       router: true,\n    },\n  },\n});\n")))}s.isMDXComponent=!0}}]);