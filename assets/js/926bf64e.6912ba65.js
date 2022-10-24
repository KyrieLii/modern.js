"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2151,2899],{57522:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(29901);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),l=s(t),u=r,k=l["".concat(i,".").concat(u)]||l[u]||c[u]||p;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=l;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var s=2;s<p;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},24969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(18249),r=(t(29901),t(57522)),p=t(22526);const o={sidebar_position:7},m=void 0,i={unversionedId:"apis/module/commands/pre",id:"apis/module/commands/pre",title:"pre",description:"\u53ef\u4ee5\u4f7f\u7528 modern pre \u547d\u4ee4\u5728\u6b63\u5f0f\u53d1\u5e03\u524d\u9884\u53d1\u5e03\u4e00\u4e2a\u7248\u672c\u3002",source:"@site/docs/apis/module/commands/pre.md",sourceDirName:"apis/module/commands",slug:"/apis/module/commands/pre",permalink:"/docs/apis/module/commands/pre",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"apisModuleSidebar",previous:{title:"change",permalink:"/docs/apis/module/commands/change"},next:{title:"bump",permalink:"/docs/apis/module/commands/bump"}},s={},d=[],c={toc:d};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern pre [options] <enter|exit> [tag]\n\n\u8fdb\u5165\u548c\u9000\u51fa\u9884\u53d1\u5e03\u6a21\u5f0f\n\nOptions:\n  -h, --help  display help for command\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern pre")," \u547d\u4ee4\u5728\u6b63\u5f0f\u53d1\u5e03\u524d",(0,r.kt)("a",{parentName:"p",href:"https://github.com/atlassian/changesets/blob/main/docs/prereleases.md"},"\u9884\u53d1\u5e03"),"\u4e00\u4e2a\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u9996\u5148 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern pre enter <tag>")," \u8fdb\u5165\u9884\u53d1\u5e03\u6a21\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern pre enter next\n\ud83e\udd8b  success Entered pre mode with tag next\n\ud83e\udd8b  info Run `changeset version` to version packages with prerelease versions\n\u2728  Done in 5.30s.\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern change")," \u547d\u4ee4\u6dfb\u52a0 changeset\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern change\n\ud83e\udd8b  What kind of change is this for module-example? (current version is 0.1.1) \xb7 patch\n\ud83e\udd8b  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n\ud83e\udd8b  Summary \xb7 test pre publish\n\ud83e\udd8b  === Releasing the following packages ===\n\ud83e\udd8b  [Patch]\n\ud83e\udd8b    module\n\ud83e\udd8b  Is this your desired changeset? (Y/n) \xb7 true\n\ud83e\udd8b  Changeset added! - you can now commit it\n\ud83e\udd8b\n\ud83e\udd8b  If you want to modify or expand on the changeset summary, you can find it here\n\ud83e\udd8b  info /xxxx/module-example/.changeset/old-spies-float.md\n")),(0,r.kt)("p",null,"\u63a5\u7740\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern bump")," \u547d\u4ee4\u66f4\u65b0\u5177\u4f53\u7684\u7248\u672c\u53f7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern bump\n\ud83e\udd8b  warn ===============================IMPORTANT!===============================\n\ud83e\udd8b  warn You are in prerelease mode\n\ud83e\udd8b  warn If you meant to do a normal release you should revert these changes and run `changeset pre exit`\n\ud83e\udd8b  warn You can then run `changeset version` again to do a normal release\n\ud83e\udd8b  warn ----------------------------------------------------------------------\n\ud83e\udd8b  All files have been updated. Review them and commit at your leisure\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7248\u672c\u53f7\u5df2\u7ecf\u66f4\u65b0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1.2-next.0"),"\u3002"),(0,r.kt)(p.default,{mdxType:"CommandTip"}))}l.isMDXComponent=!0},22526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var a=t(18249),r=(t(29901),t(57522));const p={},o=void 0,m={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/docs/components/command-tip",tags:[],version:"current",frontMatter:{}},i={},s=[],d={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,r.kt)("p",{parentName:"div"},"pnpm v7\uff1a"),(0,r.kt)("p",{parentName:"div"},"\u5728\u4f7f\u7528 pnpm \u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u547d\u4ee4\u65f6\uff0c\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u524d\u3002"),(0,r.kt)("p",{parentName:"div"},"\u4f8b\u5982\u4f7f\u7528 pnpm ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," \u53c2\u6570\u6267\u884c prepare \u547d\u4ee4\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run --filter ./packages/** prepare\n")),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3\u547d\u4ee4\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u540e\u3002"),(0,r.kt)("p",{parentName:"div"},"\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,r.kt)("p",{parentName:"div"},"\u6267\u884c command \u547d\u4ee4\u65f6\u643a\u5e26\u53c2\u6570\u65b9\u5f0f\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run command --options\n")),(0,r.kt)("p",{parentName:"div"},"pnpm v6:"),(0,r.kt)("p",{parentName:"div"},"\u5728\u5982\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,r.kt)("p",{parentName:"div"},"\u5f53\u9700\u8981\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,r.kt)("p",{parentName:"div"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,r.kt)("p",{parentName:"div"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v7 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u53c2\u6570\u7ed9 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u7f6e\u5230\u547d\u4ee4\u524d")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v6 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,r.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002"))))}c.isMDXComponent=!0}}]);