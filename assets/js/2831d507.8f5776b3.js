"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9048],{57522:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(29901);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},15263:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(18249),o=(t(29901),t(57522));const a={sidebar_label:"port",sidebar_position:5},i="server.port",p={unversionedId:"apis/app/config/server/port",id:"apis/app/config/server/port",title:"server.port",description:"* \u7c7b\u578b\uff1a Number",source:"@site/docs/apis/app/config/server/port.md",sourceDirName:"apis/app/config/server",slug:"/apis/app/config/server/port",permalink:"/docs/apis/app/config/server/port",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"port",sidebar_position:5},sidebar:"apisAppSidebar",previous:{title:"routes",permalink:"/docs/apis/app/config/server/routes"},next:{title:"prefix",permalink:"/docs/apis/app/config/bff/prefix"}},s={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"serverport"},"server.port"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"Number")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"8080"))),(0,o.kt)("p",null,"Modern.js \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," \u548c  ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," \u65f6\u4f1a\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"8080")," \u4e3a\u9ed8\u8ba4\u7aef\u53e3\u542f\u52a8\uff0c\u901a\u8fc7\u8be5\u914d\u7f6e\u53ef\u4ee5\u4fee\u6539 Server \u542f\u52a8\u7684\u7aef\u53e3\u53f7:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  server: {\n    port: 3000,\n  }\n});\n")))}u.isMDXComponent=!0}}]);