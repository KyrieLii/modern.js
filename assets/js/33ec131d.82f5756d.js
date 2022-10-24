"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1389],{57522:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(18249),r=(n(29901),n(57522));const i={sidebar_position:5,title:"\u5b9a\u4e49 head \u4fe1\u606f"},o=void 0,l={unversionedId:"guides/features/runtime/head",id:"guides/features/runtime/head",title:"\u5b9a\u4e49 head \u4fe1\u606f",description:"\u81ea\u5b9a\u4e49 HTML \u7684 title \u6216 meta \u6709\u4e24\u79cd\u65b9\u5f0f\uff1a",source:"@site/docs/guides/features/runtime/head.md",sourceDirName:"guides/features/runtime",slug:"/guides/features/runtime/head",permalink:"/docs/guides/features/runtime/head",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u5b9a\u4e49 head \u4fe1\u606f"},sidebar:"guidesSidebar",previous:{title:"\u8def\u7531\u4f7f\u7528",permalink:"/docs/guides/features/runtime/router"},next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/docs/guides/features/model/quick-start"}},p={},m=[{value:"\u81ea\u5b9a\u4e49 HTML \u6a21\u7248",id:"\u81ea\u5b9a\u4e49-html-\u6a21\u7248",level:2},{value:"\u4f7f\u7528 <code>Helmet</code> \u52a8\u6001\u4fee\u6539",id:"\u4f7f\u7528-helmet-\u52a8\u6001\u4fee\u6539",level:2}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49 HTML \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," \u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49 HTML \u6a21\u7248\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Helmet")," \u52a8\u6001\u4fee\u6539\u3002")),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49-html-\u6a21\u7248"},"\u81ea\u5b9a\u4e49 HTML \u6a21\u7248"),(0,r.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"/config/html/")," \u76ee\u5f55\uff0c\u5e76\u5728\u5176\u4e0b\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"head.html")," \u6587\u4ef6\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="head.html"',title:'"head.html"'},'<meta name="keywords" content="HTML, CSS, JavaScript">\n<title>I love Modern.js</title>\n<script>window.hello = \'Modern.js\'<\/script>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"head.html")," \u53ef\u4ee5\u81ea\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," \u90e8\u5206\u5185\u5bb9\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"meta"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"script")," \u7b49\u6807\u7b7e\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53ef\u67e5\u770b \u3010",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/usages/html"},"\u81ea\u5b9a\u4e49 HTML \u6a21\u677f")," \u3011\u4e86\u89e3\u66f4\u591a\u5185\u5bb9\u3002"))),(0,r.kt)("h2",{id:"\u4f7f\u7528-helmet-\u52a8\u6001\u4fee\u6539"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Helmet")," \u52a8\u6001\u4fee\u6539"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49 HTML \u6a21\u7248")," \u53ef\u4ee5\u6ee1\u8db3\u7edd\u5927\u90e8\u5206\u7684\u573a\u666f\uff0c\u4f46\u5f53\u9700\u8981\u52a8\u6001\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," \u5185\u5bb9\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Helmet")," \u7ec4\u4ef6 \u3002"),(0,r.kt)("p",null,"\u4ee5\u5982\u4e0b\u573a\u666f\u4e3a\u4f8b\uff1a"),(0,r.kt)("p",null,"\u9875\u9762\u4e2d\u4e00\u4e2a\u6309\u94ae\u6bcf\u6b21\u70b9\u51fb\u4e4b\u540e\uff0c\u5f53\u524d\u6807\u7b7e\u9875\u7684 title \u4e0a\u5b9e\u65f6\u663e\u793a\u5f53\u524d\u65f6\u95f4\u6233\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from \'react\';\nimport { Helmet } from \'@modern-js/runtime/head\';\n\nfunction App() {\n  const [timestamp, setTimestamp] = useState(Date.now());\n\n  return (\n    <div>\n      <Helmet>\n        <title>I love Modern.js {String(timestamp)}</title>\n        <meta name="keywords" content="HTML, CSS, JavaScript" />\n      </Helmet>\n      <button type="button" onClick={() => setTimestamp(Date.now())}>\n        update timestamp\n      </button>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Helmet")," \u662f\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u6211\u4eec\u5229\u7528\u5b83\u52a8\u6001\u6e32\u67d3  ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," \u4e24\u4e2a\u6807\u7b7e\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Modern.js \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"Helmet")," \u9ed8\u8ba4\u652f\u6301 SSR \uff0c\u670d\u52a1\u7aef\u6e32\u67d3\u4e4b\u540e\uff0c\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\u7684 HTML \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"head")," \u4e2d\u4f1a\u542b\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"Helmet")," \u6e32\u67d3\u7684\u6807\u7b7e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u67e5\u770b ",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/app/runtime/app/head"},"Head API")," \u4e86\u89e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"Helmet")," \u7684\u66f4\u591a\u7528\u6cd5\u3002")))))}s.isMDXComponent=!0}}]);