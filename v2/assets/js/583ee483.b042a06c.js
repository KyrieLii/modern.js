"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1753],{44993:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(52983);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97446:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(18249),i=(t(52983),t(44993));const a={title:"ESLint \u89c4\u5219\u96c6",sidebar_position:8},l=void 0,o={unversionedId:"guides/advanced-features/eslint",id:"guides/advanced-features/eslint",title:"ESLint \u89c4\u5219\u96c6",description:"Modern.js ESLint \u89c4\u5219\u96c6\u662f\u5168\u91cf\u7684 ESLint \u89c4\u5219\u96c6\u5408\uff0c\u5305\u542b @modern-js \uff08\u5bf9\u4e8e Node.js \u9879\u76ee\u7684 Lint \u89c4\u5219\uff09\u548c @modern-js-app\uff08\u5bf9\u4e8e\u524d\u7aef\u9879\u76ee\u7684 Lint \u89c4\u5219\uff09\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/advanced-features/eslint.md",sourceDirName:"guides/advanced-features",slug:"/guides/advanced-features/eslint",permalink:"/v2/docs/guides/advanced-features/eslint",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"ESLint \u89c4\u5219\u96c6",sidebar_position:8},sidebar:"guidesSidebar",previous:{title:"\u4ee3\u7801\u5206\u5272",permalink:"/v2/docs/guides/advanced-features/code-split"},next:{title:"\u6d4b\u8bd5",permalink:"/v2/docs/guides/advanced-features/testing"}},s={},p=[{value:"Q: \u5982\u4f55\u5904\u7406 Lint",id:"q-\u5982\u4f55\u5904\u7406-lint",level:2},{value:"\u5b9e\u65f6\u81ea\u52a8\u4fee\u590d",id:"\u5b9e\u65f6\u81ea\u52a8\u4fee\u590d",level:3},{value:"\u6279\u91cf\u81ea\u52a8\u4fee\u590d",id:"\u6279\u91cf\u81ea\u52a8\u4fee\u590d",level:3},{value:"\u4eba\u5de5\u4fee\u590d",id:"\u4eba\u5de5\u4fee\u590d",level:3},{value:"\u58f0\u660e\u4f8b\u5916\u60c5\u51b5",id:"\u58f0\u660e\u4f8b\u5916\u60c5\u51b5",level:3},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u914d\u7f6e",level:3},{value:"Q: \u5982\u4f55\u81ea\u5b9a\u4e49 ESLint \u89c4\u5219",id:"q-\u5982\u4f55\u81ea\u5b9a\u4e49-eslint-\u89c4\u5219",level:2},{value:"\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b <code>package.json</code> \u91cc\u7684 &quot;eslintConfig&quot; \u5b57\u6bb5",id:"\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b-packagejson-\u91cc\u7684-eslintconfig-\u5b57\u6bb5",level:3},{value:"<code>src/.eslintrc.json</code> \u6587\u4ef6",id:"srceslintrcjson-\u6587\u4ef6",level:3},{value:"package.json \u91cc\u7684 <code>eslintIgnore</code> \u5b57\u6bb5",id:"packagejson-\u91cc\u7684-eslintignore-\u5b57\u6bb5",level:3},{value:"Q: \u5982\u4f55\u5347\u7ea7 ESLint \u63d2\u4ef6\u7684\u7248\u672c",id:"q-\u5982\u4f55\u5347\u7ea7-eslint-\u63d2\u4ef6\u7684\u7248\u672c",level:2},{value:"Q: WebStorm \u6709\u65f6\u5019\u4f1a\u62a5 ESLint \u9519\u8bef",id:"q-webstorm-\u6709\u65f6\u5019\u4f1a\u62a5-eslint-\u9519\u8bef",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Modern.js ESLint \u89c4\u5219\u96c6"),"\u662f\u5168\u91cf\u7684 ",(0,i.kt)("strong",{parentName:"p"},"ESLint")," \u89c4\u5219\u96c6\u5408\uff0c\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js")," \uff08\u5bf9\u4e8e Node.js \u9879\u76ee\u7684 Lint \u89c4\u5219\uff09\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"@modern-js-app"),"\uff08\u5bf9\u4e8e\u524d\u7aef\u9879\u76ee\u7684 Lint \u89c4\u5219\uff09\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u4ee5\u5177\u4f53\u95ee\u9898\u4ecb\u7ecd\u66f4\u591a ESLint \u7528\u6cd5\u3002"),(0,i.kt)("h2",{id:"q-\u5982\u4f55\u5904\u7406-lint"},"Q: \u5982\u4f55\u5904\u7406 Lint"),(0,i.kt)("h3",{id:"\u5b9e\u65f6\u81ea\u52a8\u4fee\u590d"},"\u5b9e\u65f6\u81ea\u52a8\u4fee\u590d"),(0,i.kt)("p",null,"\u591a\u6570\u95ee\u9898\u4f1a\u88ab ESLint \u89c4\u5219\u7684\u81ea\u52a8\u4fee\u590d\u529f\u80fd\u6216 ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," \u7684\u4ee3\u7801\u683c\u5f0f\u5316\u529f\u80fd\uff08\u5df2\u88ab\u96c6\u6210\u5230 ESLint \u91cc\uff09\u81ea\u52a8\u89e3\u51b3\uff0c\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u5173\u5fc3\u95ee\u9898\u7684\u7ec6\u8282\u548c\u89e3\u51b3\u65b9\u5f0f\u3002"),(0,i.kt)("admonition",{title:"\u6ce8",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u4e3b\u8981\u5728 IDE \u4fdd\u5b58\u6587\u4ef6\u7684\u73af\u8282\u6267\u884c\u8fd9\u79cd\u81ea\u52a8\u4fee\u590d\uff0c\u5c11\u6570\u6f0f\u7f51\u4e4b\u9c7c\u4f1a\u5728\u63d0\u4ea4\u4ee3\u7801\u73af\u8282\u88ab\u81ea\u52a8\u4fee\u590d\u3002")),(0,i.kt)("h3",{id:"\u6279\u91cf\u81ea\u52a8\u4fee\u590d"},"\u6279\u91cf\u81ea\u52a8\u4fee\u590d"),(0,i.kt)("p",null,"\u5728\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u6bd4\u5982\u65e7\u9879\u76ee\u8fc1\u79fb\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6279\u91cf\u4fee\u590d\u548c\u68c0\u67e5\u6240\u6709\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run lint:error\n")),(0,i.kt)("h3",{id:"\u4eba\u5de5\u4fee\u590d"},"\u4eba\u5de5\u4fee\u590d"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u65e0\u6cd5\u81ea\u52a8\u4fee\u590d\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u5728 IDE \u91cc\u70b9\u51fb\u95ee\u9898\u63d0\u793a\u6846\u91cc\u7684\u89c4\u5219\u94fe\u63a5\uff0c\u6253\u5f00\u8fd9\u6761\u89c4\u5219\u7684\u6587\u6863\uff0c\u67e5\u770b\u95ee\u9898\u7684\u89e3\u91ca\u548c\u89e3\u51b3\u65b9\u6848\u3002"),(0,i.kt)("h3",{id:"\u58f0\u660e\u4f8b\u5916\u60c5\u51b5"},"\u58f0\u660e\u4f8b\u5916\u60c5\u51b5"),(0,i.kt)("p",null,"\u76ee\u524d\u9636\u6bb5\uff0c\u6709\u4e9b\u89c4\u5219\u5e76\u4e0d\u80fd\u505a\u5230\u8db3\u591f\u667a\u80fd\uff0c\u591a\u6570\u60c5\u51b5\u4e0b\u4f1a\u6709\u5f88\u5927\u6536\u76ca\uff0c\u5728\u5c11\u6570\u60c5\u51b5\u4e0b\u4e5f\u8bb8\u4e0d\u9002\u7528\u3002\u4f46\u5982\u679c\u4e3a\u4e86\u8fd9\u4e9b\u5c11\u6570\u60c5\u51b5\u5c31\u628a\u6574\u4e2a\u89c4\u5219\u5173\u6389\u6216\u6539\u6389\uff0c\u5f97\u4e0d\u507f\u5931\u3002"),(0,i.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u4ee5\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules"},"eslint-disable")," \u6ce8\u91ca\uff0c\u5bf9\u7b26\u5408",(0,i.kt)("strong",{parentName:"p"},"\u5c11\u6570\u60c5\u51b5"),"\u7684\u4ee3\u7801\u5757\u505a\u6807\u6ce8\uff0c\u58f0\u660e\u8fd9\u91cc\u662f\u4e00\u4e2a\u4f8b\u5916\uff0c\u5e94\u8be5\u5ffd\u7565\u3002\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable filenames/match-exported */\n...\n/* eslint-enable filenames/match-exported */\n")),(0,i.kt)("admonition",{title:"\u6ce8",type:"info"},(0,i.kt)("p",{parentName:"admonition"},'\u5728 VS Code \u7f16\u8f91\u5668\u91cc\u8f93\u5165 eslint\uff0c\u4f1a\u81ea\u52a8\u51fa\u73b0\u5173\u4e8e "eslint-disable" \u7684\u63d0\u793a\u6846\uff0c\u9009\u62e9\u63d0\u793a\u9009\u9879\u751f\u6210\u5bf9\u5e94\u6ce8\u91ca\u5bf9\u3002')),(0,i.kt)("p",null,"\u3010Modern.js ESLint \u89c4\u5219\u96c6\u3011\u8981\u6c42 ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules"},"eslint-disable")," \u5fc5\u987b\u6210\u5bf9\u4f7f\u7528\uff0c\u5fc5\u987b\u660e\u786e\u8868\u8fbe\u8981\u5f71\u54cd\u7684\u8303\u56f4\uff0c\u4ee5\u53ca\u5728\u8fd9\u4e2a\u8303\u56f4\u5185\u660e\u786e\u8868\u8fbe\u8981\u7981\u7528\u4ec0\u4e48\u89c4\u5219\uff0c\u76ee\u7684\u662f\u8ba9",(0,i.kt)("strong",{parentName:"p"},"\u4f8b\u5916"),"\u6709\u660e\u786e\u7684\u3001\u6700\u5c0f\u5316\u7684\u8303\u56f4\uff0c\u907f\u514d ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules"},"eslint-disable")," \u88ab\u6ee5\u7528\uff0c\u5bfc\u81f4\u4e0d\u5c5e\u4e8e\u4f8b\u5916\u7684\u4ee3\u7801\u4e5f\u88ab\u7981\u7528\u4e86\u89c4\u5219\u3002"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,i.kt)("h2",{id:"q-\u5982\u4f55\u81ea\u5b9a\u4e49-eslint-\u89c4\u5219"},"Q: \u5982\u4f55\u81ea\u5b9a\u4e49 ESLint \u89c4\u5219"),(0,i.kt)("h3",{id:"\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b-packagejson-\u91cc\u7684-eslintconfig-\u5b57\u6bb5"},"\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b ",(0,i.kt)("inlineCode",{parentName:"h3"},"package.json"),' \u91cc\u7684 "eslintConfig" \u5b57\u6bb5'),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5730\u65b9\u662f\u6574\u4e2a\u4ed3\u5e93\u7684\u9ed8\u8ba4 ESLint \u914d\u7f6e\uff0c\u662f\u9488\u5bf9\u7eaf Node.js \u4ee3\u7801\uff08\u53ea\u80fd\u5728 Node.js \u91cc\u8fd0\u884c\uff09\u8bbe\u8ba1\u7684\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u9879\u76ee\u5728\u67d0\u4e9b\u89c4\u5219\u4e0a\u786e\u5b9e\u6709\u7279\u6b8a\u8981\u6c42\u6216\u4e0d\u53ef\u907f\u514d\u7684\u517c\u5bb9\u95ee\u9898\uff08\u4e0d\u662f\u4f8b\u5916\uff09\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u589e\u52a0\u89c4\u5219\u914d\u7f6e\u3002\u8be5\u914d\u7f6e\u4f1a\u4f18\u5148\u4e8e\u9ed8\u8ba4\u7684\u3010Modern.js ESLint \u89c4\u5219\u96c6\u3011\uff0c\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' "eslintConfig": {\n    "extends": [\n      "@modern-js"\n    ],\n    "rules": {\n      "filenames/match-exported": "off"\n    }\n  },\n\n')),(0,i.kt)("h3",{id:"srceslintrcjson-\u6587\u4ef6"},(0,i.kt)("inlineCode",{parentName:"h3"},"src/.eslintrc.json")," \u6587\u4ef6"),(0,i.kt)("p",null,"Modern.js \u7684\u5e94\u7528\u5de5\u7a0b\u3001\u6a21\u5757\u5de5\u7a0b\uff0c\u6e90\u4ee3\u7801\u76ee\u5f55\u91cc\u90fd\u4f1a\u9ed8\u8ba4\u6709\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u662f\u9488\u5bf9 Universal JS \u4ee3\u7801\u8bbe\u8ba1\u7684\u3002"),(0,i.kt)("admonition",{title:"\u6ce8",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Universal JS \u4ee3\u7801\u662f\u65e2\u80fd\u6d4f\u89c8\u5668\u7aef\u4e5f\u80fd\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c\u7684\u4ee3\u7801\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u9879\u76ee\u5728\u67d0\u4e9b\u89c4\u5219\u4e0a\u786e\u5b9e\u6709\u7279\u6b8a\u8981\u6c42\u6216\u4e0d\u53ef\u907f\u514d\u7684\u517c\u5bb9\u95ee\u9898\uff08\u4e0d\u662f\u4f8b\u5916\uff09\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u589e\u52a0\u89c4\u5219\u914d\u7f6e\uff0c\u8be5\u914d\u7f6e\u4f1a\u4f18\u5148\u4e8e\u9ed8\u8ba4\u7684\u3010Modern.js ESLint \u89c4\u5219\u96c6\u3011\uff0c\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "@modern-js-app"\n  ],\n  "rules": {\n    "filenames/match-exported": "off"\n  }\n}\n')),(0,i.kt)("p",null,"\u5982\u679c\u6709\u9700\u8981\uff0c\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u5728\u4e0d\u540c\u7684\u5b50\u76ee\u5f55\u91cc\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.json")," \u6587\u4ef6\uff0c\u9488\u5bf9\u8fd9\u4e2a\u5b50\u76ee\u5f55\u91cc\u7684\u4ee3\u7801\u505a\u7279\u6b8a\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rules": {\n    "filenames/match-exported": "off"\n  }\n}\n')),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u6ca1\u6709\u5fc5\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," \u5b57\u6bb5\uff0c\u4f1a\u81ea\u52a8\u7ee7\u627f\u7236\u76ee\u5f55\u7684\u914d\u7f6e\u3002")),(0,i.kt)("h3",{id:"packagejson-\u91cc\u7684-eslintignore-\u5b57\u6bb5"},"package.json \u91cc\u7684 ",(0,i.kt)("inlineCode",{parentName:"h3"},"eslintIgnore")," \u5b57\u6bb5"),(0,i.kt)("p",null,"\u628a\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},".js"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},".jsx"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},".ts"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},".tsx")," \u6587\u4ef6\u3001\u4f46\u4e0d\u9700\u8981\u505a\u4ee3\u7801\u68c0\u67e5\u548c\u81ea\u52a8\u4fee\u590d\u7684\u76ee\u5f55\uff0c\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"eslintIgnore")," \u91cc\uff0c\u53ef\u4ee5\u4f18\u5316 ESLint \u68c0\u67e5\u7684\u901f\u5ea6\uff0c\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' "eslintIgnore": [\n    "node_modules",\n    "dist",\n    "output"\n  ],\n')),(0,i.kt)("h2",{id:"q-\u5982\u4f55\u5347\u7ea7-eslint-\u63d2\u4ef6\u7684\u7248\u672c"},"Q: \u5982\u4f55\u5347\u7ea7 ESLint \u63d2\u4ef6\u7684\u7248\u672c"),(0,i.kt)("p",null,"\u53ea\u8981\u4e0d\u662f Major \u7248\u672c\u7684\u53d8\u5316\uff08\u4e0d\u7b26\u5408 ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semver")," \u89c4\u5219\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," \u7b26\u53f7\uff09\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u4e1a\u52a1\u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u91cc\u6307\u5b9a\u8fd9\u4e2a\u4f9d\u8d56\uff0c\u5220\u9664 Lock \u6587\u4ef6\uff08\u6216\u5c1d\u8bd5\u624b\u52a8\u5220\u9664 Lock \u6587\u4ef6\u4e2d\u8fd9\u4e2a\u5305\u540d\u7684\u5185\u5bb9\uff09\uff0c\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u5e76\u4e14\u751f\u6210\u65b0\u7684 Lock \u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u505a\u5b8c\u8fd9\u4e9b\u64cd\u4f5c\u4e4b\u540e\uff0c\u5728\u4e1a\u52a1\u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"./node_modules")," \u76ee\u5f55\u91cc\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u5e94\u8be5\u53ea\u5b58\u5728\u4e00\u4efd\uff0c\u5e76\u4e14\u5347\u7ea7\u5230\u4e86\u4f60\u6307\u5b9a\u7684\u7248\u672c\u3002"),(0,i.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Major \u7248\u672c\u5c31\u662f\u4e3b\u7248\u672c\u53f7\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb\u3010",(0,i.kt)("a",{parentName:"li",href:"https://semver.org/#summary"},"Semantic Versioning"),"\u3011\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u88ab Modern.js \u5c01\u88c5\u7684\u4e0a\u6e38\u9879\u76ee\uff08\u6bd4\u5982 ESLint\u3001",(0,i.kt)("a",{parentName:"li",href:"https://eslint.org/docs/user-guide/configuring/plugins#plugins"},"ESLint \u63d2\u4ef6"),"\u3001",(0,i.kt)("a",{parentName:"li",href:"https://reactrouter.com/"},"React Router")," \u7b49\uff09\uff0c\u4e5f\u90fd\u53ef\u4ee5\u8fd9\u6837\u5347\u7ea7\u3002"),(0,i.kt)("li",{parentName:"ul"},"Modern.js \u4e5f\u4f1a\u5728\u6bcf\u6b21\u53d1\u7248\u4e2d\u5c3d\u91cf\u53ca\u65f6\u7684\u5347\u7ea7\u8fd9\u4e9b\u4e0a\u6e38\u4f9d\u8d56\u3002"),(0,i.kt)("li",{parentName:"ul"},"Major \u7248\u672c\u7684\u5347\u7ea7\u9700\u8981\u7531 Modern.js \u6765\u53d1\u7248\u3002"))),(0,i.kt)("h2",{id:"q-webstorm-\u6709\u65f6\u5019\u4f1a\u62a5-eslint-\u9519\u8bef"},"Q: WebStorm \u6709\u65f6\u5019\u4f1a\u62a5 ESLint \u9519\u8bef"),(0,i.kt)("p",null,"\u7531\u4e8e WebStorm \u8ba4\u4e3a ESLint \u6267\u884c\u76ee\u5f55\u662f\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc")," \u6587\u4ef6\u6765\u51b3\u5b9a\u7684\u3002\u56e0\u6b64 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/.eslintrc")," \u6587\u4ef6\u4f4d\u7f6e\u7684\u653e\u7f6e\u4f1a\u5bfc\u81f4 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u6587\u4ef6\u6307\u5b9a\u7684\u4f4d\u7f6e\uff08\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\uff09\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u4e0b\u627e\u4e0d\u5230\u3002"),(0,i.kt)("p",null,"\u6b64\u65f6\u9700\u8981\u624b\u52a8\u914d\u7f6e\u4e00\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"--parser-options=project:../tsconfig.json\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/webstorm-lint-error.png",alt:"webstorm-lint-error"})))}c.isMDXComponent=!0}}]);