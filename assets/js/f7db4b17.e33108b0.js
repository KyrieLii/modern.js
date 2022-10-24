"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6290],{57522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),g=o,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||l;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(18249),o=(r(29901),r(57522));const l={title:"Electron \u6a21\u5f0f",sidebar_position:4},a="\u8c03\u8bd5\u5e94\u7528",i={unversionedId:"guides/usages/debug/electron",id:"guides/usages/debug/electron",title:"Electron \u6a21\u5f0f",description:"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528",source:"@site/docs/guides/usages/debug/electron.md",sourceDirName:"guides/usages/debug",slug:"/guides/usages/debug/electron",permalink:"/docs/guides/usages/debug/electron",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Electron \u6a21\u5f0f",sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u6a21\u5f0f",permalink:"/docs/guides/usages/debug/micro-frontend"},next:{title:"Unbundled \u5f00\u53d1\u6a21\u5f0f",permalink:"/docs/guides/usages/debug/unbundled"}},u={},s=[{value:"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528",id:"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528",level:2},{value:"\u751f\u4ea7\u73af\u5883\u8c03\u8bd5\u5e94\u7528",id:"\u751f\u4ea7\u73af\u5883\u8c03\u8bd5\u5e94\u7528",level:2},{value:"\u8c03\u8bd5\u4e3b\u8fdb\u7a0b",id:"\u8c03\u8bd5\u4e3b\u8fdb\u7a0b",level:3},{value:"\u8c03\u8bd5\u6e32\u67d3\u8fdb\u7a0b",id:"\u8c03\u8bd5\u6e32\u67d3\u8fdb\u7a0b",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8c03\u8bd5\u5e94\u7528"},"\u8c03\u8bd5\u5e94\u7528"),(0,o.kt)("h2",{id:"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528"},"\u5f00\u53d1\u73af\u5883\u8c03\u8bd5\u5e94\u7528"),(0,o.kt)("p",null,"\u5728 Electron \u5f00\u53d1\u73af\u5883\u4e0b\uff0c\u4e00\u822c\u9700\u8981\u8c03\u8bd5",(0,o.kt)("strong",{parentName:"p"},"\u4e3b\u8fdb\u7a0b"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u4e24\u79cd\u8fdb\u7a0b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,o.kt)("strong",{parentName:"li"},"\u4e3b\u8fdb\u7a0b"),"\uff0c\u53ef\u4ee5\u5728\u6e90\u7801\uff08\u6bd4\u5982\uff1aTS \u6587\u4ef6\u4e0a\uff09\u76f4\u63a5\u8bbe\u7f6e\u65ad\u70b9\uff0c\u901a\u8fc7 VS Code \u7684 Debug \u7ec8\u7aef\u542f\u52a8\u4e3b\u8fdb\u7a0b\u6765\u8fdb\u884c Debug \u8c03\u8bd5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,o.kt)("strong",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b"),"\uff0c\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u8bbe\u7f6e\u65ad\u70b9\uff0c\u5373\u53ef\u8c03\u8bd5\u3002")),(0,o.kt)("h2",{id:"\u751f\u4ea7\u73af\u5883\u8c03\u8bd5\u5e94\u7528"},"\u751f\u4ea7\u73af\u5883\u8c03\u8bd5\u5e94\u7528"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u8c03\u8bd5\uff0c\u540c\u6837\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,o.kt)("h3",{id:"\u8c03\u8bd5\u4e3b\u8fdb\u7a0b"},"\u8c03\u8bd5\u4e3b\u8fdb\u7a0b"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4e3b\u8fdb\u7a0b\uff0c\u53ea\u9700\u5728\u6253\u5305\u4e3b\u8fdb\u7a0b\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u8bbe\u7f6e\u76f8\u5173\u53c2\u6570\u5373\u53ef\u3002\u5728 Modern.js \u5e94\u7528\u9879\u76ee\u4e2d",(0,o.kt)("strong",{parentName:"p"},"\u542f\u7528\u300cElectron\u300d\u6a21\u5f0f"),"\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u6709\u5982\u4e0b\u53ef\u6267\u884c\u547d\u4ee4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"build:main": "modern build electron-main --development"\n')),(0,o.kt)("p",null,"\u8fd9\u6837\uff0c\u6253\u5305\u540e\u7684\u4e3b\u8fdb\u7a0b\u4ee3\u7801\u4e0d\u4f1a\u88ab\u6df7\u6dc6\u538b\u7f29\u3002\u6839\u636e\u590d\u5236\u5230\u5e94\u7528\u4e2d\u7684\u4e3b\u8fdb\u7a0b\u4ee3\u7801\u4f4d\u7f6e\u3002\u6bd4\u5982\uff08\u4e00\u822c\u5728\u5982\u4e0b\u4f4d\u7f6e\uff09\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./release/mac/test_modern_electron.app/Contents/Resources/app/electron"),"\u3002"),(0,o.kt)("p",null,"\u76f4\u63a5\u5728\u4e3b\u8fdb\u7a0b\u6e90\u7801\u91cc\uff0c\u901a\u8fc7\u4fee\u6539\u6e90\u7801\u8f93\u51fa\u65e5\u5fd7\u6216\u8005\u8c03\u8bd5\u90e8\u5206\u4ee3\u7801\uff0c\u8fdb\u884c Debug \u8c03\u8bd5\u3002"),(0,o.kt)("h3",{id:"\u8c03\u8bd5\u6e32\u67d3\u8fdb\u7a0b"},"\u8c03\u8bd5\u6e32\u67d3\u8fdb\u7a0b"),(0,o.kt)("p",null,"\u6253\u5f00\u7a97\u53e3\u7684\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u8fdb\u884c Debug \u5373\u53ef\u3002"))}p.isMDXComponent=!0}}]);