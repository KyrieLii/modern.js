"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2992],{44993:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(18249),o=(t(52983),t(44993));const a={title:"source.enableAsyncEntry",sidebar_label:"enableAsyncEntry"},l=void 0,i={unversionedId:"configure/app/source/enable-async-entry",id:"configure/app/source/enable-async-entry",title:"source.enableAsyncEntry",description:"- Type: boolean",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/source/enable-async-entry.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/enable-async-entry",permalink:"/v2/en/docs/configure/app/source/enable-async-entry",draft:!1,tags:[],version:"current",frontMatter:{title:"source.enableAsyncEntry",sidebar_label:"enableAsyncEntry"},sidebar:"configsAppSidebar",previous:{title:"disableDefaultEntries",permalink:"/v2/en/docs/configure/app/source/disable-default-entries"},next:{title:"entriesDir",permalink:"/v2/en/docs/configure/app/source/entries-dir"}},c={},s=[{value:"Background knowledge",id:"background-knowledge",level:2},{value:"Example",id:"example",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"This option is used in the webpack Module Federation scenario."),(0,o.kt)("p",null,"When this option is turned on, the Modern.js wraps the automatically generated asynchronous boundary via Dynamic Import, allowing the page code to consume remote modules generated by the module federation."),(0,o.kt)("h2",{id:"background-knowledge"},"Background knowledge"),(0,o.kt)("p",null,"If you don't know webpack module federation, please read the official ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/module-federation"},"Module Federation documentation")," first."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"First, turn this option on in the configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"export default defineConfig({\n  source: {\n    enableAsyncEntry: true,\n  },\n});\n")),(0,o.kt)("p",null,"Then execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," command, and you can see Modern.js automatically generated file becomes the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node_modules\n  \u2514\u2500 .modern-js\n     \u2514\u2500 main\n        \u251c\u2500 bootstrap.js  #  real entry code\n        \u251c\u2500 index.js      # asynchronous entry file\n        \u2514\u2500 index.html\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," reads as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import('./bootstrap.js');\n")),(0,o.kt)("p",null,"At this point, you can consume any remote modules in the current page."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Modern.js the ModuleFederationPlugin of webpack is not encapsulated, please configure the ModuleFederationPlugin yourself through ",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/app/tools/webpack-chain"},"tools.webpack Chain"),".")))}u.isMDXComponent=!0}}]);