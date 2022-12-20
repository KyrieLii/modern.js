"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[880],{44993:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,m=u["".concat(d,".").concat(g)]||u[g]||s[g]||o;return t?r.createElement(m,p(p({ref:n},l),{},{components:t})):r.createElement(m,p({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(18249),a=(t(52983),t(44993));const o={title:"Upgrade",sidebar_position:2},p=void 0,i={unversionedId:"guides/get-started/upgrade",id:"guides/get-started/upgrade",title:"Upgrade",description:"Upgrade with command",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/guides/get-started/upgrade.md",sourceDirName:"guides/get-started",slug:"/guides/get-started/upgrade",permalink:"/v2/en/docs/guides/get-started/upgrade",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Upgrade",sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Quick Start",permalink:"/v2/en/docs/guides/get-started/quick-start"},next:{title:"Entries",permalink:"/v2/en/docs/guides/concept/entries"}},d={},c=[{value:"Upgrade with command",id:"upgrade-with-command",level:2},{value:"Specify version upgrade",id:"specify-version-upgrade",level:2},{value:"lock child dependency",id:"lock-child-dependency",level:2},{value:"pnpm",id:"pnpm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Npm",id:"npm",level:3}],l={toc:c};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"upgrade-with-command"},"Upgrade with command"),(0,a.kt)("p",null,"Modern.js provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade")," command to support projects to upgrade to the latest  version."),(0,a.kt)("p",null,"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run upgrade")," in the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pnpm run upgrade\n\n> modern upgrade\n\n[INFO] [Project Type]: Application\n[INFO] [Modern.js Latest Version]: 2.0.0\n[INFO] Upgrade Modern.js package version success!\n")),(0,a.kt)("p",null,"You can see that the dependency in the project ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," has been changed to the latest."),(0,a.kt)("h2",{id:"specify-version-upgrade"},"Specify version upgrade"),(0,a.kt)("p",null,"Modern.js all packages are published using the ",(0,a.kt)("strong",{parentName:"p"},"unified version number"),"."),(0,a.kt)("p",null,"According to the website Release Note, developers can also manually upgrade the project to the desired version."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When upgrading, you need to upgrade to all packages provided by the Modern.js, rather than upgrading a single dependency.")),(0,a.kt)("h2",{id:"lock-child-dependency"},"lock child dependency"),(0,a.kt)("p",null,"When there is a problem with one of the child dependencies of the project, and the Modern.js cannot be updated immediately, you can use the package manager to lock the child dependency version."),(0,a.kt)("h3",{id:"pnpm"},"pnpm"),(0,a.kt)("p",null,"For projects using pnpm, add the following configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," in the ",(0,a.kt)("strong",{parentName:"p"},"project root directory")," and re-execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "package-name": "^1.0.0"\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"yarn"},"Yarn"),(0,a.kt)("p",null,"For projects using Yarn, add the following configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," in the ",(0,a.kt)("strong",{parentName:"p"},"project root directory")," and re-execute ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn install"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resolutions": {\n    "package-name": "^1.0.0"\n  }\n}\n')),(0,a.kt)("h3",{id:"npm"},"Npm"),(0,a.kt)("p",null,"For projects using Npm, add the following configuration to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," in the ",(0,a.kt)("strong",{parentName:"p"},"project root directory")," and re-execute ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "overrides": {\n    "package-name": "^1.0.0"\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For Monorepo repositories, the dependency version can only be locked in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," in the project root directory, and all packages in Monorepo are affected.")))}s.isMDXComponent=!0}}]);