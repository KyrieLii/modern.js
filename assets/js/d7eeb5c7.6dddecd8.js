"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[18413],{54852:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(49231);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(g,a(a({ref:r},s),{},{components:t})):n.createElement(g,a({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90056:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(86215),i=(t(49231),t(54852));const o={sidebar_position:3},a="readDir",p={unversionedId:"apis/generator/plugin/info/readDir",id:"apis/generator/plugin/info/readDir",title:"readDir",description:"\u8bfb\u53d6\u6587\u4ef6\u5939\uff0c\u83b7\u53d6\u6587\u4ef6\u5217\u8868\u3002",source:"@site/docs/apis/generator/plugin/info/readDir.md",sourceDirName:"apis/generator/plugin/info",slug:"/apis/generator/plugin/info/readDir",permalink:"/docs/apis/generator/plugin/info/readDir",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisGeneratorSidebar",previous:{title:"isFileExit",permalink:"/docs/apis/generator/plugin/info/isFileExit"},next:{title:"OnForged",permalink:"/docs/apis/generator/plugin/hook/onForged"}},l={},c=[{value:"dir",id:"dir",level:2}],s={toc:c};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"readdir"},"readDir"),(0,i.kt)("p",null,"\u8bfb\u53d6\u6587\u4ef6\u5939\uff0c\u83b7\u53d6\u6587\u4ef6\u5217\u8868\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IPluginContext {\n  readDir: (dir: string) => Promise<string[]>;\n  ...\n}\n")),(0,i.kt)("h2",{id:"dir"},"dir"),(0,i.kt)("p",null,"\u6587\u4ef6\u5939\u540d\u79f0\u6216\u8def\u5f84\uff0c\u57fa\u4e8e\u521b\u5efa\u7684\u9879\u76ee\u7684\u76f8\u5bf9\u8def\u5f84\u5373\u53ef\u3002"))}u.isMDXComponent=!0}}]);