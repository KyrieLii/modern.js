"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1183],{57522:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var r=t(29901);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),s=i,b=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return t?r.createElement(b,a(a({ref:n},u),{},{components:t})):r.createElement(b,a({ref:n},u))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(18249),i=(t(29901),t(57522));const l={sidebar_label:"builder",sidebar_position:1},a="electron.builder",o={unversionedId:"apis/app/config/electron/builder",id:"apis/app/config/electron/builder",title:"electron.builder",description:"* \u7c7b\u578b: Object",source:"@site/docs/apis/app/config/electron/builder.md",sourceDirName:"apis/app/config/electron",slug:"/apis/app/config/electron/builder",permalink:"/docs/apis/app/config/electron/builder",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"builder",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"fetcher",permalink:"/docs/apis/app/config/bff/fetcher"},next:{title:"babel",permalink:"/docs/apis/app/config/electron/babel"}},c={},p=[{value:"<code>electron.builder.baseConfig</code>",id:"electronbuilderbaseconfig",level:2},{value:"<code>electron.builder.macConfig</code>",id:"electronbuildermacconfig",level:2},{value:"<code>electron.builder.winConfig</code>",id:"electronbuilderwinconfig",level:2},{value:"<code>electron.builder.win64Config</code>",id:"electronbuilderwin64config",level:2},{value:"<code>electron.builder.linuxConfig</code>",id:"electronbuilderlinuxconfig",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"electronbuilder"},"electron.builder"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u5e94\u7528\u6784\u5efa\u76f8\u5173\u914d\u7f6e\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6211\u4eec\u5bf9 Electron-builder \u7684\u914d\u7f6e\u672c\u8eab\u505a\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u6574\u5408\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6240\u6709\u5e73\u53f0\uff08mac\u3001win\u3001linux\uff09\u901a\u7528\u7684 Electron-builder \u914d\u7f6e\uff0c\u6211\u4eec\u653e\u5230\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"baseConfig"),"\u4e0b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e0d\u540c\u5e73\u53f0\u5404\u81ea\u7279\u6709\u7684\u914d\u7f6e\uff0c\u6211\u4eec\u5206\u522b\u5728\u5bf9\u5e94\u7684 key \u4e0b\u914d\u7f6e\u5373\u53ef\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a key \u4e0b\u9762\u5bf9\u5e94\u7684\uff0c\u90fd\u662f Electron-builder \u672c\u8eab\u7684\u914d\u7f6e\uff0c \u8be6\u7ec6\u53ef\u89c1\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://www.electron.build/configuration/configuration"},"Electron Builder"),"\u3002")),(0,i.kt)("p",{parentName:"div"},"\u6700\u540e\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u8fd9\u4e9b\u914d\u7f6e\uff0c\u518d\u7ed3\u5408\u6846\u67b6\u5185\u90e8\u9ed8\u8ba4\u7684\u4e00\u4e9b\u7528\u6237\u4e0d\u9700\u8981\u6539\u7684\u914d\u7f6e\uff08\u82e5\u9700\u8981\u4fee\u6539\uff0c\u5219\u76f4\u63a5\u914d\u7f6e\u5c31\u53ef\u8986\u76d6\uff09\uff0c\u8fdb\u884c\u5408\u5e76\u6210\u6700\u7ec8\nElectron-builder \u7684\u914d\u7f6e\u3002"))),(0,i.kt)("h2",{id:"electronbuilderbaseconfig"},(0,i.kt)("inlineCode",{parentName:"h2"},"electron.builder.baseConfig")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u5bf9\u5e94 ",(0,i.kt)("a",{parentName:"p",href:"https://www.electron.build/configuration/configuration"},"Electron Builder")," \u7684\u914d\u7f6e\uff0c\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\u516c\u7528\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"electronbuildermacconfig"},(0,i.kt)("inlineCode",{parentName:"h2"},"electron.builder.macConfig")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u5bf9\u5e94 ",(0,i.kt)("a",{parentName:"p",href:"https://www.electron.build/configuration/mac"},"Electron Builder")," \u7684\u914d\u7f6e\uff0cMac \u76f8\u5173\u6784\u5efa\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"electronbuilderwinconfig"},(0,i.kt)("inlineCode",{parentName:"h2"},"electron.builder.winConfig")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u5bf9\u5e94 ",(0,i.kt)("a",{parentName:"p",href:"https://www.electron.build/configuration/win"},"Electron Builder")," \u7684\u914d\u7f6e Windows 32 \u4f4d\u76f8\u5173\u6784\u5efa\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"electronbuilderwin64config"},(0,i.kt)("inlineCode",{parentName:"h2"},"electron.builder.win64Config")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u5bf9\u5e94 ",(0,i.kt)("a",{parentName:"p",href:"https://www.electron.build/configuration/linux"},"Electron Builder")," \u7684\u914d\u7f6e\uff0cWindows 64 \u4f4d\u76f8\u5173\u6784\u5efa\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"electronbuilderlinuxconfig"},(0,i.kt)("inlineCode",{parentName:"h2"},"electron.builder.linuxConfig")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("p",null,"\u5bf9\u5e94 ",(0,i.kt)("a",{parentName:"p",href:"https://www.electron.build/configuration/configuration"},"Electron Builder")," \u7684\u914d\u7f6e\uff0cLinux \u76f8\u5173\u6784\u5efa\u914d\u7f6e\u3002"))}d.isMDXComponent=!0}}]);