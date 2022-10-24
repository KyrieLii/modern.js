"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5022],{57522:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var l=t(29901);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),d=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return l.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(t),c=r,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||a;return t?l.createElement(k,i(i({ref:n},m),{},{components:t})):l.createElement(k,i({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<a;d++)i[d]=t[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},88169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var l=t(18249),r=(t(29901),t(57522));const a={sidebar_position:1,title:"\u73af\u5883\u53d8\u91cf"},i=void 0,p={unversionedId:"apis/app/runtime/env",id:"apis/app/runtime/env",title:"\u73af\u5883\u53d8\u91cf",description:"Modern.js \u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e0b\u5217\u73af\u5883\u53d8\u91cf\uff1a",source:"@site/docs/apis/app/runtime/env.md",sourceDirName:"apis/app/runtime",slug:"/apis/app/runtime/env",permalink:"/docs/apis/app/runtime/env",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u73af\u5883\u53d8\u91cf"},sidebar:"apisAppSidebar",previous:{title:"\u9ed8\u8ba4\u522b\u540d",permalink:"/docs/apis/app/runtime/default-alias"},next:{title:"Head",permalink:"/docs/apis/app/runtime/app/head"}},o={},d=[{value:"NODE_ENV",id:"node_env",level:2},{value:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",id:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",level:2},{value:"\u901a\u8fc7 <code>shell</code> \u6307\u5b9a",id:"\u901a\u8fc7-shell-\u6307\u5b9a",level:3},{value:"\u901a\u8fc7 <code>.env</code> \u6587\u4ef6\u6307\u5b9a",id:"\u901a\u8fc7-env-\u6587\u4ef6\u6307\u5b9a",level:3},{value:"\u4f18\u5148\u7ea7",id:"\u4f18\u5148\u7ea7",level:3},{value:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",level:2},{value:"JS/TS \u4ee3\u7801\u5185\u4f7f\u7528",id:"jsts-\u4ee3\u7801\u5185\u4f7f\u7528",level:3},{value:"HTML \u4ee3\u7801\u7247\u6bb5\u4f7f\u7528",id:"html-\u4ee3\u7801\u7247\u6bb5\u4f7f\u7528",level:3}],m={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js \u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e0b\u5217\u73af\u5883\u53d8\u91cf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NODE_ENV"),"\uff1a\u8868\u793a\u5f53\u524d\u7684\u6267\u884c\u73af\u5883\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PORT"),"\uff1a\u8868\u793a\u5e94\u7528\u8fd0\u884c\u7684\u7aef\u53e3\u3002")),(0,r.kt)("h2",{id:"node_env"},"NODE_ENV"),(0,r.kt)("p",null,"\u8868\u793a\u5f53\u524d\u7684\u6267\u884c\u73af\u5883\uff0c\u662f",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u8bfb\u7684"),"\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5176\u503c\u5728\u4e0d\u540c\u7684\u6267\u884c\u547d\u4ee4\u4e0b\u5177\u6709\u4e0d\u540c\u7684\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"production"),"\uff1a\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"modern build")," \u547d\u4ee4\u65f6\u7684\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test"),"\uff1a\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"modern test")," \u547d\u4ee4\u65f6\u7684\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"development"),"\uff1a\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"modern dev")," \u547d\u4ee4\u65f6\u7684\u9ed8\u8ba4\u503c\uff0c\u540c\u65f6\u4e5f\u662f\u5176\u4ed6\u6240\u6709\u60c5\u51b5\u4e0b\u7684\u9ed8\u8ba4\u503c\u3002")),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf"},"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u9ed8\u8ba4\u63d0\u4f9b\u7684\u73af\u5883\u53d8\u91cf\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7-shell-\u6307\u5b9a"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"h3"},"shell")," \u6307\u5b9a"),(0,r.kt)("p",null,"\u5728\u547d\u4ee4\u524d\u6dfb\u52a0\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"FOO=123 BAR=456 pnpm run dev\n")),(0,r.kt)("h3",{id:"\u901a\u8fc7-env-\u6587\u4ef6\u6307\u5b9a"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"h3"},".env")," \u6587\u4ef6\u6307\u5b9a"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\uff0c\u5176\u4e2d\u6dfb\u52a0\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env"},"FOO=123\nBAR=456\n")),(0,r.kt)("p",null,"\u66f4\u591a\u6587\u4ef6\u683c\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env"),"\uff1a\u9ed8\u8ba4\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.development"),"\uff1a\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"development")," \u65f6\uff0c\u8bfb\u53d6\u8be5\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.production"),"\uff1a\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"production")," \u65f6\uff0c\u8bfb\u53d6\u8be5\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.test"),"\uff1a\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," \u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," \u65f6\uff0c\u8bfb\u53d6\u8be5\u6587\u4ef6\u3002")),(0,r.kt)("h3",{id:"\u4f18\u5148\u7ea7"},"\u4f18\u5148\u7ea7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},".env.*")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," \u540c\u65f6\u5b58\u5728\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},".env.*")," \u4f1a\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," \u8fdb\u884c\u5408\u5e76\uff0c\u76f8\u540c\u540d\u79f0\u7684\u73af\u5883\u53d8\u91cf\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},".env.*")," \u4e3a\u51c6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," \u8bbe\u7f6e\u7684\u73af\u5883\u53d8\u91cf\uff0c\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"shell")," \u6307\u5b9a\u7684\u73af\u5883\u53d8\u91cf\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf"},"\u4f7f\u7528\u73af\u5883\u53d8\u91cf"),(0,r.kt)("h3",{id:"jsts-\u4ee3\u7801\u5185\u4f7f\u7528"},"JS/TS \u4ee3\u7801\u5185\u4f7f\u7528"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.*")," \u76f4\u63a5\u83b7\u53d6\u73af\u5883\u53d8\u91cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(process.env.NODE_ENV);\n// "development"\n')),(0,r.kt)("h3",{id:"html-\u4ee3\u7801\u7247\u6bb5\u4f7f\u7528"},"HTML \u4ee3\u7801\u7247\u6bb5\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="config/html/head.ejs"',title:'"config/html/head.ejs"'},'<meta name="env" content="<%=process.env.NODE_ENV %>" />\n')))}u.isMDXComponent=!0}}]);