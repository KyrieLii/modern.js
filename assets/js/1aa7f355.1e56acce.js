"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7735,62899],{54852:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>v});var a=t(49231);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(t),v=r,u=c["".concat(i,".").concat(v)]||c[v]||s[v]||o;return t?a.createElement(u,p(p({ref:n},m),{},{components:t})):a.createElement(u,p({ref:n},m))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var d=2;d<o;d++)p[d]=t[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},81732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var a=t(86215),r=(t(49231),t(54852)),o=t(15087);const p={sidebar_position:1},l="dev",i={unversionedId:"apis/app/commands/dev",id:"apis/app/commands/dev",title:"dev",description:"modern dev \u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u540c\u65f6\u76d1\u542c\u6e90\u6587\u4ef6\u53d8\u5316\uff0c\u9ed8\u8ba4\u652f\u6301 React Fast Refresh\uff1a",source:"@site/docs/apis/app/commands/dev.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/dev",permalink:"/docs/apis/app/commands/dev",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"\u547d\u4ee4",permalink:"/docs/apis/app/commands/"},next:{title:"new",permalink:"/docs/apis/app/commands/new"}},d={},m=[{value:"Electron \u5e94\u7528\u5f00\u53d1",id:"electron-\u5e94\u7528\u5f00\u53d1",level:2},{value:"dev electron-web",id:"dev-electron-web",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"dev electron-main",id:"dev-electron-main",level:3},{value:"\u793a\u4f8b - \u666e\u901a\u542f\u52a8\u4e3b\u8fdb\u7a0b",id:"\u793a\u4f8b---\u666e\u901a\u542f\u52a8\u4e3b\u8fdb\u7a0b",level:4},{value:"\u793a\u4f8b - \u6307\u5b9a\u4e3b\u8fdb\u7a0b\u5165\u53e3\u6587\u4ef6\u5730\u5740",id:"\u793a\u4f8b---\u6307\u5b9a\u4e3b\u8fdb\u7a0b\u5165\u53e3\u6587\u4ef6\u5730\u5740",level:4},{value:"dev electron",id:"dev-electron",level:3},{value:"\u793a\u4f8b - \u666e\u901a\u542f\u52a8",id:"\u793a\u4f8b---\u666e\u901a\u542f\u52a8",level:4},{value:"\u793a\u4f8b - \u7a97\u53e3\u4e2d\u5f00\u542f Node",id:"\u793a\u4f8b---\u7a97\u53e3\u4e2d\u5f00\u542f-node",level:4},{value:"\u793a\u4f8b - \u4e3b\u8fdb\u7a0b\u542f\u52a8\u65f6\u6307\u5b9a\u5165\u53e3\u6587\u4ef6",id:"\u793a\u4f8b---\u4e3b\u8fdb\u7a0b\u542f\u52a8\u65f6\u6307\u5b9a\u5165\u53e3\u6587\u4ef6",level:4}],s={toc:m};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dev"},"dev"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern dev [options]\n\n\u672c\u5730\u5f00\u53d1\u547d\u4ee4\n\nOptions:\n  -e --entry <entry>    \u6307\u5b9a\u5165\u53e3\uff0c\u7f16\u8bd1\u7279\u5b9a\u7684\u9875\u9762\n  -c --config <config>  \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u4e3a\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\n  -h, --help            \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\n  --analyze             \u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\uff0c\u67e5\u770b\u5404\u4e2a\u6a21\u5757\u6253\u5305\u540e\u7684\u5927\u5c0f\n  --api-only            \u4ec5\u542f\u52a8 API \u63a5\u53e3\u670d\u52a1\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"modern dev")," \u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u540c\u65f6\u76d1\u542c\u6e90\u6587\u4ef6\u53d8\u5316\uff0c\u9ed8\u8ba4\u652f\u6301 React Fast Refresh\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n")),(0,r.kt)(o.default,{mdxType:"CommandTip"}),(0,r.kt)("h2",{id:"electron-\u5e94\u7528\u5f00\u53d1"},"Electron \u5e94\u7528\u5f00\u53d1"),(0,r.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u57fa\u4e8e Electron \u7684\u684c\u9762\u5e94\u7528\u5f00\u53d1\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728\u9879\u76ee\u521b\u5efa\u65f6\u9009\u62e9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? \u662f\u5426\u9700\u8981\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u5e94\u7528 Electron\n")),(0,r.kt)("p",null,"\u4e5f\u53ef\u5728\u9879\u76ee\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u547d\u4ee4\u542f\u7528\u300cElectron\u300d\u6a21\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern new\n? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528\u300cElectron\u300d\u6a21\u5f0f\n")),(0,r.kt)("h3",{id:"dev-electron-web"},"dev electron-web"),(0,r.kt)("p",null,"\u7a97\u53e3\u4e2d\u5f00\u542f Node \u542f\u52a8\u6e32\u67d3\u8fdb\u7a0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern dev electron-web [options]\n\nOptions:\n  -h, --help  display help for command\n")),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev:render": "modern dev electron-web",\n  }\n}\n')),(0,r.kt)("p",null,"\u5728 Electron \u4e2d\uff0c\u9879\u76ee\u4e0b\u6267\u884c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"dev:render")," \u547d\u4ee4\uff0c\u542f\u52a8\u6e32\u67d3\u8fdb\u7a0b\uff08",(0,r.kt)("strong",{parentName:"p"},"\u7a97\u53e3\u4e2d\u5f00\u542f Node"),"\uff09\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5173\u4e8e\u7a97\u53e3\u4e2d\u3010",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/develop#%E7%AA%97%E5%8F%A3%E4%B8%AD%E5%BC%80%E5%90%AF-node"},"\u5f00\u542f Node"),"\u3011\u3002"))),(0,r.kt)("h3",{id:"dev-electron-main"},"dev electron-main"),(0,r.kt)("p",null,"\u542f\u52a8\u4e3b\u8fdb\u7a0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern dev electron-main [options]\n\nOptions:\n  -e, --entry <entry>\n  -h, --help           display help for command\n")),(0,r.kt)("h4",{id:"\u793a\u4f8b---\u666e\u901a\u542f\u52a8\u4e3b\u8fdb\u7a0b"},"\u793a\u4f8b - \u666e\u901a\u542f\u52a8\u4e3b\u8fdb\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev:main": "modern dev electron-main",\n  }\n}\n')),(0,r.kt)("p",null,"\u5728 Electron \u4e2d\uff0c\u9879\u76ee\u4e0b\u6267\u884c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"dev:main")," \u547d\u4ee4\uff0c\u542f\u52a8\u4e3b\u8fdb\u7a0b\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b---\u6307\u5b9a\u4e3b\u8fdb\u7a0b\u5165\u53e3\u6587\u4ef6\u5730\u5740"},"\u793a\u4f8b - \u6307\u5b9a\u4e3b\u8fdb\u7a0b\u5165\u53e3\u6587\u4ef6\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev:main": "modern dev electron-main --entry xx/xx.ts",\n  }\n}\n')),(0,r.kt)("h3",{id:"dev-electron"},"dev electron"),(0,r.kt)("p",null,"\u5148\u542f\u52a8\u6e32\u67d3\u8fdb\u7a0b\uff0c\u518d\u542f\u52a8\u4e3b\u8fdb\u7a0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern dev electron [options]\n\nOptions:\n  -en, --enableNode    enable use node in electron render\n  -e, --entry <entry>  specify the entry path of main process such as: xx/xx.ts(js)\n  -h, --help           display help for command\n")),(0,r.kt)("h4",{id:"\u793a\u4f8b---\u666e\u901a\u542f\u52a8"},"\u793a\u4f8b - \u666e\u901a\u542f\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev:electron": "modern dev electron",\n  }\n}\n')),(0,r.kt)("p",null,"\u5728 Electron \u4e2d\uff0c\u9879\u76ee\u4e0b\u6267\u884c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"dev:electron")," \u547d\u4ee4\uff0c\u4f1a\u5148\u542f\u52a8\u6e32\u67d3\u8fdb\u7a0b\uff0c\u518d\u542f\u52a8\u4e3b\u8fdb\u7a0b\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b---\u7a97\u53e3\u4e2d\u5f00\u542f-node"},"\u793a\u4f8b - \u7a97\u53e3\u4e2d\u5f00\u542f Node"),(0,r.kt)("p",null,"\u5982\u679c\u671f\u671b\u542f\u52a8\u6e32\u67d3\u8fdb\u7a0b\u7684\u65f6\u5019\uff0c\u5728\u7a97\u53e3\u4e2d\u5f00\u542f Node\uff0c\u53ef\u4ee5\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev:electron": "modern dev electron --enableNode",\n  }\n}\n')),(0,r.kt)("h4",{id:"\u793a\u4f8b---\u4e3b\u8fdb\u7a0b\u542f\u52a8\u65f6\u6307\u5b9a\u5165\u53e3\u6587\u4ef6"},"\u793a\u4f8b - \u4e3b\u8fdb\u7a0b\u542f\u52a8\u65f6\u6307\u5b9a\u5165\u53e3\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev:electron": "modern dev electron --entry xx/xx.ts",\n  }\n}\n')))}c.isMDXComponent=!0},15087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(86215),r=(t(49231),t(54852));const o={},p=void 0,l={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b package.json \u914d\u7f6e\u4e2d\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/docs/components/command-tip",tags:[],version:"current",frontMatter:{}},i={},d=[],m={toc:d};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,r.kt)("p",{parentName:"div"},"\u5f53\u9700\u8981\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 Yarn \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn command --option"),"\u3002"),(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,r.kt)("p",{parentName:"div"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,r.kt)("p",{parentName:"div"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,r.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002"))))}s.isMDXComponent=!0}}]);