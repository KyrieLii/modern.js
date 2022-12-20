"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6033],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(y,l(l({ref:t},p),{},{components:n})):o.createElement(y,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(18249),r=(n(52983),n(44993));const a={toc:[{value:"Object Type",id:"object-type",level:3},{value:"Function Type",id:"function-type",level:3}]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"))),(0,r.kt)("p",null,"The config of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/style-loader"},"style-loader")," can be set through ",(0,r.kt)("inlineCode",{parentName:"p"},"tools.styleLoader"),"."),(0,r.kt)("p",null,"It is worth noting that Builder does not enable ",(0,r.kt)("inlineCode",{parentName:"p"},"style-loader")," by default. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"output.disableCssExtract")," config to enable it\u3002"),(0,r.kt)("h3",{id:"object-type"},"Object Type"),(0,r.kt)("p",null,"When this value is an Object, it is merged with the default config via Object.assign. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    styleLoader: {\n      loaderOptions: {\n        insert: 'head',\n      },\n    },\n  },\n};\n")),(0,r.kt)("h3",{id:"function-type"},"Function Type"),(0,r.kt)("p",null,"When the value is a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    styleLoader: config => {\n      config.loaderOptions.insert = 'head';\n      return config;\n    },\n  },\n};\n")))}l.isMDXComponent=!0;const i={title:"tools.styleLoader",sidebar_label:"styleLoader"},s=void 0,c={unversionedId:"configure/app/tools/style-loader",id:"configure/app/tools/style-loader",title:"tools.styleLoader",description:"This configuration is Modern.js Builder configuration, more detail can see tools.styleLoader\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/tools/style-loader.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/style-loader",permalink:"/v2/en/docs/configure/app/tools/style-loader",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.styleLoader",sidebar_label:"styleLoader"},sidebar:"configsAppSidebar",previous:{title:"sass",permalink:"/v2/en/docs/configure/app/tools/sass"},next:{title:"styledComponents",permalink:"/v2/en/docs/configure/app/tools/styled-components"}},p={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-styleloader"},"tools.styleLoader"),"\u3002")),(0,r.kt)(l,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);