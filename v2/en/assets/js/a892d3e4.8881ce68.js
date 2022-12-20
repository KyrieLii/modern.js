"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3974],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(18249),o=(n(52983),n(44993));const a={toc:[{value:"Object Type",id:"object-type",level:3},{value:"Function Type",id:"function-type",level:3}]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,o.kt)("li",{parentName:"ul"},"Default:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const defaultOptions = {\n  // The loader options\n  loaderOptions: {},\n  // The plugin options\n  pluginOptions: {\n    // The default value of cssPath is `static/css`\n    // while the default value of cssFilename is `[name].[contenthash:8].css`\n    filename: `${cssPath}/${cssFilename}`,\n    chunkFilename: `${cssPath}/async/${cssFilename}`,\n    ignoreOrder: true,\n  },\n};\n")),(0,o.kt)("p",null,"The config of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/mini-css-extract-plugin"},"mini-css-extract-plugin")," can be modified through ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.cssExtract"),"."),(0,o.kt)("h3",{id:"object-type"},"Object Type"),(0,o.kt)("p",null,"When this value is an Object, it is merged with the default config via Object.assign. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    cssExtract: {\n      pluginOptions: {\n        filename: 'static/css/[name].[contenthash:8].css',\n      },\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"function-type"},"Function Type"),(0,o.kt)("p",null,"When the value a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    cssExtract: config => {\n      config.pluginOptions.filename = 'static/css/[name].[contenthash:8].css';\n      return config;\n    },\n  },\n};\n")),(0,o.kt)("p",null,"For more config details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/mini-css-extract-plugin"},"mini-css-extract-plugin"),"."))}c.isMDXComponent=!0;const s={title:"tools.cssExtract",sidebar_label:"cssExtract"},i=void 0,l={unversionedId:"configure/app/tools/css-extract",id:"configure/app/tools/css-extract",title:"tools.cssExtract",description:"This configuration is Modern.js Builder configuration, more detail can see tools.cssExtract\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/tools/css-extract.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/css-extract",permalink:"/v2/en/docs/configure/app/tools/css-extract",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.cssExtract",sidebar_label:"cssExtract"},sidebar:"configsAppSidebar",previous:{title:"babel",permalink:"/v2/en/docs/configure/app/tools/babel"},next:{title:"cssLoader",permalink:"/v2/en/docs/configure/app/tools/css-loader"}},p={},u=[],f={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-cssextract"},"tools.cssExtract"),"\u3002")),(0,o.kt)(c,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);