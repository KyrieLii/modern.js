"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[71573],{54852:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(49231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,g=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(86215),o=(r(49231),r(54852));const a={sidebar_position:4},i="Monorepo",p={unversionedId:"apis/generator/config/monorepo",id:"apis/generator/config/monorepo",title:"Monorepo",description:"Monorepo \u9879\u76ee\u9ed8\u8ba4\u53ea\u9700\u8981 PackageManager \u914d\u7f6e\u3002",source:"@site/docs/apis/generator/config/monorepo.md",sourceDirName:"apis/generator/config",slug:"/apis/generator/config/monorepo",permalink:"/docs/apis/generator/config/monorepo",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apisGeneratorSidebar",previous:{title:"\u6a21\u5757",permalink:"/docs/apis/generator/config/module"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/apis/generator/plugin/introduce"}},l={},c=[{value:"\u521b\u5efa\u5b50\u9879\u76ee",id:"\u521b\u5efa\u5b50\u9879\u76ee",level:2},{value:"Solution",id:"solution",level:3},{value:"Package-Name",id:"package-name",level:3},{value:"Package-Path",id:"package-path",level:3}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monorepo"},"Monorepo"),(0,o.kt)("p",null,"Monorepo \u9879\u76ee\u9ed8\u8ba4\u53ea\u9700\u8981 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/introduce#package-manager"},"PackageManager \u914d\u7f6e"),"\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u5b50\u9879\u76ee"},"\u521b\u5efa\u5b50\u9879\u76ee"),(0,o.kt)("p",null,"Monorepo \u9879\u76ee\u652f\u6301\u901a\u8fc7\u4f7f\u7528 new \u547d\u4ee4\u521b\u5efa\u5b50\u9879\u76ee\uff0c\u5b50\u9879\u76ee\u7c7b\u578b\u652f\u6301\u5e94\u7528\u3001\u6d4b\u8bd5\u5e94\u7528\u3001\u6a21\u5757\u3001\u5185\u90e8\u6a21\u5757\uff0c\u9664\u4e86\u5e94\u7528\u548c\u6a21\u5757\u5404\u81ea\u7684\u914d\u7f6e\u5916\uff0c\u8fd9\u91cc\u8fd8\u9700\u8981\u4e00\u4e9b\u901a\u7528\u7684\u5b50\u9879\u76ee\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u7c7b\u578b(solution)\uff0c\u4e0d\u540c\u5b50\u9879\u76ee\u7c7b\u578b\u5b57\u6bb5\u4e3a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528(mwa)"),(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\uff08\u6d4b\u8bd5\uff09(mwa_test)"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757(module)"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757\uff08\u5185\u90e8\uff09(inner_module)")),(0,o.kt)("h3",{id:"package-name"},"Package-Name"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u540d\u79f0(packageName)\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"),(0,o.kt)("h3",{id:"package-path"},"Package-Path"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u8def\u5f84(packagePath)\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\u3002"))}s.isMDXComponent=!0}}]);