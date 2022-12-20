"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1326],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=o,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(18249),o=(r(52983),r(44993));const i={toc:[{value:"Priority",id:"priority",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Example",id:"example",level:4},{value:"Set according to Targets",id:"set-according-to-targets",level:4}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string[] | Record<BuilderTarget, string[]")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"Specifies the range of target browsers that the project is compatible with. This value will be used by ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},"@babel/preset-env")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},"autoprefixer")," to identify the JavaScript syntax that need to be transformed and the CSS browser prefixes that need to be added."),(0,o.kt)("h4",{id:"priority"},"Priority"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideBrowserslist")," config will override the ",(0,o.kt)("inlineCode",{parentName:"p"},".browserslistrc")," config file in the project and the ",(0,o.kt)("inlineCode",{parentName:"p"},"browserslist")," field in package.json."),(0,o.kt)("p",null,"In most cases, it is recommended to use the ",(0,o.kt)("inlineCode",{parentName:"p"},".browserslistrc")," file rather than the ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideBrowserslist")," config. Because the ",(0,o.kt)("inlineCode",{parentName:"p"},".browserslistrc")," file is the official config file, it is more general and can be recognized by other libraries in the community."),(0,o.kt)("h4",{id:"default-value"},"Default Value"),(0,o.kt)("p",null,"If there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"browserslist")," configs defined in the project, nor ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideBrowserslist")," defined, then Builder will set the default browserslist to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"['> 0.01%', 'not dead', 'not op_mini all'];\n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"An example compatible with mobile scenarios:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS 9',\n      'Android 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist"},"browserslist documentation")," to learn more about browserslist."),(0,o.kt)("h4",{id:"set-according-to-targets"},"Set according to Targets"),(0,o.kt)("p",null,"When you build multiple targets at the same time, you can set different browser ranges for different targets. At this point, you need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideBrowserslist")," to an object whose key is the corresponding build target."),(0,o.kt)("p",null,"For example to set different ranges for ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    overrideBrowserslist: {\n      web: ['iOS 9', 'Android 4.4', 'last 2 versions', '> 0.2%', 'not dead'],\n      node: ['node >= 14'],\n    },\n  },\n};\n")))}a.isMDXComponent=!0;const s={title:"output.overrideBrowserslist",sidebar_label:"overrideBrowserslist"},l=void 0,p={unversionedId:"configure/app/output/override-browserslist",id:"configure/app/output/override-browserslist",title:"output.overrideBrowserslist",description:"This configuration is Modern.js Builder configuration, more detail can see output.overrideBrowserslist\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/override-browserslist.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/override-browserslist",permalink:"/v2/en/docs/configure/app/output/override-browserslist",draft:!1,tags:[],version:"current",frontMatter:{title:"output.overrideBrowserslist",sidebar_label:"overrideBrowserslist"},sidebar:"configsAppSidebar",previous:{title:"legalComments",permalink:"/v2/en/docs/configure/app/output/legal-comments"},next:{title:"polyfill",permalink:"/v2/en/docs/configure/app/output/polyfill"}},u={},d=[],c={toc:d};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, more detail can see ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-overridebrowserslist"},"output.overrideBrowserslist"),"\u3002")),(0,o.kt)(a,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);