"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[53018],{54852:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(49231);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(d,s(s({ref:r},c),{},{components:t})):n.createElement(d,s({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},23850:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(86215),a=(t(49231),t(54852));const o={sidebar_label:"ssr",sidebar_position:1},s="server.ssr",i={unversionedId:"apis/app/config/server/ssr",id:"apis/app/config/server/ssr",title:"server.ssr",description:"* \u7c7b\u578b\uff1a boolean",source:"@site/docs/apis/app/config/server/ssr.md",sourceDirName:"apis/app/config/server",slug:"/apis/app/config/server/ssr",permalink:"/docs/apis/app/config/server/ssr",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"ssr",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"masterApp",permalink:"/docs/apis/app/config/runtime/master-app"},next:{title:"ssrByEntries",permalink:"/docs/apis/app/config/server/ssr-by-entries"}},p={},l=[],c={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serverssr"},"server.ssr"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"SSR \u5f00\u5173\u4ee5\u53ca\u76f8\u5173\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u5f53\u503c\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," \u65f6\uff0c\u8868\u793a\u662f\u5426\u5f00\u542f SSR \u90e8\u7f72\u6a21\u5f0f\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," \u4e0d\u5f00\u542f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  server: {\n    ssr: true,\n  }\n});\n")))}u.isMDXComponent=!0}}]);