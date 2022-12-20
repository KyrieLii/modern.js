"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3120],{90632:(e,i,o)=>{o.d(i,{Z:()=>c});var a=o(18249),t=o(52983),d=o(91392),l=o(46950),s=o.n(l);const p=e=>{let{label:i,description:o,type:a,items:l,href:s}=e;return t.createElement("div",{className:"nav-card-item"},t.createElement("h4",null,i),t.createElement("p",null,o),t.createElement("ul",null,null==l?void 0:l.map((e=>{let{href:i}=e;if("category"===e.type){const o=null==e?void 0:e.items[0];i="category"===o.type?null==o?void 0:o.items[0].href:null==e?void 0:e.items[0].href}return t.createElement("li",{key:e.label},t.createElement(d.Z,{to:i.replace(/^.+\/doc/,"/doc")},e.label))})),!l&&"link"===a&&t.createElement("li",{key:i},t.createElement(d.Z,{to:s},i))))},c=e=>{let{cards:i,ret:o}=e;return t.createElement("div",null,null==o?void 0:o(),t.createElement(s(),{className:"nav-container-block",disableImagesLoaded:!1,updateOnEachImageLoad:!1},null==i?void 0:i.map((e=>"\u6982\u89c8"===e.label||"Overview"===e.label?null:t.createElement(p,(0,a.Z)({},e,{key:e.label}))))))}},78825:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>r,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>n});var a=o(18249),t=(o(52983),o(44993)),d=o(90632),l=o(71557);const s={sidebar_position:0},p="\u6982\u89c8",c={unversionedId:"guides/overview",id:"guides/overview",title:"\u6982\u89c8",description:"",source:"@site/../../packages/toolkit/main-doc/zh/guides/overview.md",sourceDirName:"guides",slug:"/guides/overview",permalink:"/v2/docs/guides/overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"guidesSidebar",next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/v2/docs/guides/get-started/quick-start"}},r={},n=[],u={toc:n};function g(e){let{components:i,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},u,o,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,t.kt)(d.Z,{cards:l.lL.vL,mdxType:"OverviewNav"}))}g.isMDXComponent=!0},71557:e=>{e.exports=JSON.parse('{"lL":{"vL":[{"type":"link","label":"\u6982\u89c8","href":"/v2/docs/guides/overview","docId":"guides/overview"},{"type":"category","label":"\u5f00\u59cb","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\u5feb\u901f\u4e0a\u624b","href":"/v2/docs/guides/get-started/quick-start","docId":"guides/get-started/quick-start"},{"type":"link","label":"\u5347\u7ea7","href":"/v2/docs/guides/get-started/upgrade","docId":"guides/get-started/upgrade"}]},{"type":"category","label":"\u6838\u5fc3\u6982\u5ff5","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\u5165\u53e3","href":"/v2/docs/guides/concept/entries","docId":"guides/concept/entries"}]},{"type":"category","label":"\u57fa\u7840\u529f\u80fd","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\u8def\u7531","href":"/v2/docs/guides/basic-features/routes","docId":"guides/basic-features/routes"},{"type":"link","label":"\u6784\u5efa\u80fd\u529b","href":"/v2/docs/guides/basic-features/builder","docId":"guides/basic-features/builder"},{"type":"link","label":"\u6570\u636e\u83b7\u53d6","href":"/v2/docs/guides/basic-features/data-fetch","docId":"guides/basic-features/data-fetch"},{"type":"category","label":"CSS \u5f00\u53d1\u65b9\u6848","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"CSS-in-JS","href":"/v2/docs/guides/basic-features/css/css-in-js","docId":"guides/basic-features/css/css-in-js"},{"type":"link","label":"Tailwind CSS","href":"/v2/docs/guides/basic-features/css/tailwindcss","docId":"guides/basic-features/css/tailwindcss"},{"type":"link","label":"PostCSS","href":"/v2/docs/guides/basic-features/css/postcss","docId":"guides/basic-features/css/postcss"},{"type":"link","label":"Less \u548c Sass","href":"/v2/docs/guides/basic-features/css/less-sass","docId":"guides/basic-features/css/less-sass"},{"type":"link","label":"CSS Modules","href":"/v2/docs/guides/basic-features/css/css-modules","docId":"guides/basic-features/css/css-modules"}]},{"type":"link","label":"\u4ee3\u7406","href":"/v2/docs/guides/basic-features/proxy","docId":"guides/basic-features/proxy"},{"type":"link","label":"\u6570\u636e\u6a21\u62df","href":"/v2/docs/guides/basic-features/mock","docId":"guides/basic-features/mock"},{"type":"link","label":"\u73af\u5883\u53d8\u91cf","href":"/v2/docs/guides/basic-features/env-vars","docId":"guides/basic-features/env-vars"},{"type":"link","label":"\u522b\u540d","href":"/v2/docs/guides/basic-features/alias","docId":"guides/basic-features/alias"},{"type":"link","label":"HTML \u6a21\u677f","href":"/v2/docs/guides/basic-features/html","docId":"guides/basic-features/html"}],"href":"/v2/docs/guides/basic-features/"},{"type":"category","label":"\u8fdb\u9636\u529f\u80fd","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"BFF","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4e00\u4f53\u5316\u8c03\u7528","href":"/v2/docs/guides/advanced-features/bff/function","docId":"guides/advanced-features/bff/function"},{"type":"link","label":"\u51fd\u6570\u5199\u6cd5 & \u6846\u67b6\u5199\u6cd5","href":"/v2/docs/guides/advanced-features/bff/type","docId":"guides/advanced-features/bff/type"},{"type":"link","label":"\u8fd0\u884c\u65f6\u6846\u67b6","href":"/v2/docs/guides/advanced-features/bff/frameworks","docId":"guides/advanced-features/bff/frameworks"},{"type":"link","label":"\u4f7f\u7528 BFF \u4ee3\u7406","href":"/v2/docs/guides/advanced-features/bff/bff-proxy","docId":"guides/advanced-features/bff/bff-proxy"}],"href":"/v2/docs/guides/advanced-features/bff/"},{"type":"link","label":"\u81ea\u5b9a\u4e49 Web Server","href":"/v2/docs/guides/advanced-features/web-server","docId":"guides/advanced-features/web-server"},{"type":"link","label":"\u670d\u52a1\u7aef\u6e32\u67d3\uff08SSR\uff09","href":"/v2/docs/guides/advanced-features/ssr","docId":"guides/advanced-features/ssr"},{"type":"link","label":"\u9759\u6001\u7ad9\u70b9\u751f\u6210\uff08SSG\uff09","href":"/v2/docs/guides/advanced-features/ssg","docId":"guides/advanced-features/ssg"},{"type":"link","label":"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027","href":"/v2/docs/guides/advanced-features/compatibility","docId":"guides/advanced-features/compatibility"},{"type":"link","label":"\u4ee3\u7801\u5206\u5272","href":"/v2/docs/guides/advanced-features/code-split","docId":"guides/advanced-features/code-split"},{"type":"link","label":"ESLint \u89c4\u5219\u96c6","href":"/v2/docs/guides/advanced-features/eslint","docId":"guides/advanced-features/eslint"},{"type":"link","label":"\u6d4b\u8bd5","href":"/v2/docs/guides/advanced-features/testing","docId":"guides/advanced-features/testing"},{"type":"link","label":"\u914d\u7f6e\u5e95\u5c42\u5de5\u5177","href":"/v2/docs/guides/advanced-features/low-level","docId":"guides/advanced-features/low-level"}],"href":"/v2/docs/guides/advanced-features/"},{"type":"category","label":"\u4e13\u9898\u8be6\u89e3","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Reduck \u72b6\u6001\u7ba1\u7406","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5feb\u901f\u4e0a\u624b","href":"/v2/docs/guides/topic-detail/model/quick-start","docId":"guides/topic-detail/model/quick-start"},{"type":"link","label":"\u521b\u5efa Model","href":"/v2/docs/guides/topic-detail/model/define-model","docId":"guides/topic-detail/model/define-model"},{"type":"link","label":"\u4f7f\u7528 Model","href":"/v2/docs/guides/topic-detail/model/use-model","docId":"guides/topic-detail/model/use-model"},{"type":"link","label":"\u884d\u751f\u72b6\u6001","href":"/v2/docs/guides/topic-detail/model/computed-state","docId":"guides/topic-detail/model/computed-state"},{"type":"link","label":"\u526f\u4f5c\u7528\u7ba1\u7406","href":"/v2/docs/guides/topic-detail/model/manage-effects","docId":"guides/topic-detail/model/manage-effects"},{"type":"link","label":"\u81ea\u52a8\u751f\u6210 Actions","href":"/v2/docs/guides/topic-detail/model/auto-actions","docId":"guides/topic-detail/model/auto-actions"},{"type":"link","label":"Model \u901a\u4fe1","href":"/v2/docs/guides/topic-detail/model/model-communicate","docId":"guides/topic-detail/model/model-communicate"},{"type":"link","label":"\u6027\u80fd\u4f18\u5316","href":"/v2/docs/guides/topic-detail/model/performance","docId":"guides/topic-detail/model/performance"},{"type":"link","label":"\u6d4b\u8bd5 Model","href":"/v2/docs/guides/topic-detail/model/test-model","docId":"guides/topic-detail/model/test-model"},{"type":"link","label":"TS \u6700\u4f73\u5b9e\u8df5","href":"/v2/docs/guides/topic-detail/model/typescript-best-practice","docId":"guides/topic-detail/model/typescript-best-practice"},{"type":"link","label":"Redux \u751f\u6001\u96c6\u6210","href":"/v2/docs/guides/topic-detail/model/redux-integration","docId":"guides/topic-detail/model/redux-integration"},{"type":"link","label":"\u5355\u72ec\u4f7f\u7528 Reduck","href":"/v2/docs/guides/topic-detail/model/use-out-of-modernjs","docId":"guides/topic-detail/model/use-out-of-modernjs"},{"type":"link","label":"\u5e38\u89c1\u95ee\u9898","href":"/v2/docs/guides/topic-detail/model/faq","docId":"guides/topic-detail/model/faq"}]},{"type":"category","label":"\u5fae\u524d\u7aef","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5fae\u524d\u7aef\u4ecb\u7ecd","href":"/v2/docs/guides/topic-detail/micro-frontend/introduction","docId":"guides/topic-detail/micro-frontend/introduction"},{"type":"link","label":"\u5b50\u5e94\u7528\u8c03\u8bd5","href":"/v2/docs/guides/topic-detail/micro-frontend/debugging","docId":"guides/topic-detail/micro-frontend/debugging"},{"type":"link","label":"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1","href":"/v2/docs/guides/topic-detail/micro-frontend/communicate","docId":"guides/topic-detail/micro-frontend/communicate"},{"type":"link","label":"\u52a0\u8f7d\u5b50\u5e94\u7528","href":"/v2/docs/guides/topic-detail/micro-frontend/route-mode","docId":"guides/topic-detail/micro-frontend/route-mode"},{"type":"link","label":"\u6df7\u5408\u6280\u672f\u6808","href":"/v2/docs/guides/topic-detail/micro-frontend/mixed-stack","docId":"guides/topic-detail/micro-frontend/mixed-stack"}]},{"type":"category","label":"Monorepo","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Monorepo \u5de5\u7a0b\u4ecb\u7ecd","href":"/v2/docs/guides/topic-detail/monorepo/intro","docId":"guides/topic-detail/monorepo/intro"},{"type":"link","label":"\u521b\u5efa\u5b50\u9879\u76ee","href":"/v2/docs/guides/topic-detail/monorepo/create-sub-project","docId":"guides/topic-detail/monorepo/create-sub-project"},{"type":"link","label":"\u5b50\u9879\u76ee\u8054\u8c03","href":"/v2/docs/guides/topic-detail/monorepo/sub-project-interface","docId":"guides/topic-detail/monorepo/sub-project-interface"},{"type":"link","label":"\u53ef\u590d\u7528\u6a21\u5757\u7684\u53d1\u5e03","href":"/v2/docs/guides/topic-detail/monorepo/publish","docId":"guides/topic-detail/monorepo/publish"}]},{"type":"category","label":"\u5305\u7248\u672c\u7ba1\u7406","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u8ba4\u8bc6 Changesets","href":"/v2/docs/guides/topic-detail/changesets/introduce","docId":"guides/topic-detail/changesets/introduce"},{"type":"link","label":"\u6dfb\u52a0\u4e00\u4e2a changeset","href":"/v2/docs/guides/topic-detail/changesets/add","docId":"guides/topic-detail/changesets/add"},{"type":"link","label":"\u53d1\u5e03\u6b63\u5f0f\u7248\u672c","href":"/v2/docs/guides/topic-detail/changesets/release","docId":"guides/topic-detail/changesets/release"},{"type":"link","label":"\u53d1\u5e03\u9884\u53d1\u5e03\u7248\u672c","href":"/v2/docs/guides/topic-detail/changesets/release-pre","docId":"guides/topic-detail/changesets/release-pre"},{"type":"link","label":"Changesets \u914d\u7f6e\u6587\u4ef6","href":"/v2/docs/guides/topic-detail/changesets/config","docId":"guides/topic-detail/changesets/config"},{"type":"link","label":"\u81ea\u5b9a\u4e49 Changelog \u751f\u6210","href":"/v2/docs/guides/topic-detail/changesets/changelog","docId":"guides/topic-detail/changesets/changelog"},{"type":"link","label":"\u81ea\u5b9a\u4e49\u63d0\u4ea4 commit \u4fe1\u606f","href":"/v2/docs/guides/topic-detail/changesets/commit","docId":"guides/topic-detail/changesets/commit"},{"type":"link","label":"\u81ea\u5b9a\u4e49 Release Note \u683c\u5f0f","href":"/v2/docs/guides/topic-detail/changesets/release-note","docId":"guides/topic-detail/changesets/release-note"},{"type":"link","label":"\u4f7f\u7528 Github \u76f8\u5173\u5de5\u5177","href":"/v2/docs/guides/topic-detail/changesets/github","docId":"guides/topic-detail/changesets/github"}]},{"type":"category","label":"\u9879\u76ee\u751f\u6210\u5668","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u9879\u76ee\u751f\u6210\u5668","href":"/v2/docs/guides/topic-detail/generator/project","docId":"guides/topic-detail/generator/project"},{"type":"category","label":"\u5de5\u7a0b\u65b9\u6848\u914d\u7f6e","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u901a\u7528\u914d\u7f6e","href":"/v2/docs/guides/topic-detail/generator/config/common","docId":"guides/topic-detail/generator/config/common"},{"type":"link","label":"\u5e94\u7528","href":"/v2/docs/guides/topic-detail/generator/config/mwa","docId":"guides/topic-detail/generator/config/mwa"},{"type":"link","label":"\u6a21\u5757","href":"/v2/docs/guides/topic-detail/generator/config/module","docId":"guides/topic-detail/generator/config/module"},{"type":"link","label":"Monorepo","href":"/v2/docs/guides/topic-detail/generator/config/monorepo","docId":"guides/topic-detail/generator/config/monorepo"}]},{"type":"category","label":"\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4e3a\u4ec0\u4e48\u9700\u8981\u751f\u6210\u5668\u63d2\u4ef6","href":"/v2/docs/guides/topic-detail/generator/plugin/abstract","docId":"guides/topic-detail/generator/plugin/abstract"},{"type":"link","label":"\u5982\u4f55\u4f7f\u7528\u751f\u6210\u5668\u63d2\u4ef6","href":"/v2/docs/guides/topic-detail/generator/plugin/use","docId":"guides/topic-detail/generator/plugin/use"},{"type":"link","label":"\u5982\u4f55\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6","href":"/v2/docs/guides/topic-detail/generator/plugin/develop","docId":"guides/topic-detail/generator/plugin/develop"},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4ecb\u7ecd","href":"/v2/docs/guides/topic-detail/generator/plugin/api/introduce","docId":"guides/topic-detail/generator/plugin/api/introduce"},{"type":"category","label":"\u81ea\u5b9a\u4e49\u8f93\u5165 API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49","href":"/v2/docs/guides/topic-detail/generator/plugin/api/input/type","docId":"guides/topic-detail/generator/plugin/api/input/type"},{"type":"link","label":"addInputBefore","href":"/v2/docs/guides/topic-detail/generator/plugin/api/input/addInputBefore","docId":"guides/topic-detail/generator/plugin/api/input/addInputBefore"},{"type":"link","label":"addInputAfter","href":"/v2/docs/guides/topic-detail/generator/plugin/api/input/addInputAfter","docId":"guides/topic-detail/generator/plugin/api/input/addInputAfter"},{"type":"link","label":"setInput","href":"/v2/docs/guides/topic-detail/generator/plugin/api/input/setInput","docId":"guides/topic-detail/generator/plugin/api/input/setInput"},{"type":"link","label":"setInputValue","href":"/v2/docs/guides/topic-detail/generator/plugin/api/input/setInputValue","docId":"guides/topic-detail/generator/plugin/api/input/setInputValue"}]},{"type":"category","label":"\u83b7\u53d6\u4fe1\u606f API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"locale","href":"/v2/docs/guides/topic-detail/generator/plugin/api/info/locale","docId":"guides/topic-detail/generator/plugin/api/info/locale"},{"type":"link","label":"isFileExit","href":"/v2/docs/guides/topic-detail/generator/plugin/api/info/isFileExit","docId":"guides/topic-detail/generator/plugin/api/info/isFileExit"},{"type":"link","label":"readDir","href":"/v2/docs/guides/topic-detail/generator/plugin/api/info/readDir","docId":"guides/topic-detail/generator/plugin/api/info/readDir"}]},{"type":"category","label":"Hook \u51fd\u6570 API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"OnForged","href":"/v2/docs/guides/topic-detail/generator/plugin/api/hook/onForged","docId":"guides/topic-detail/generator/plugin/api/hook/onForged"},{"type":"link","label":"AfterForged","href":"/v2/docs/guides/topic-detail/generator/plugin/api/hook/afterForged","docId":"guides/topic-detail/generator/plugin/api/hook/afterForged"}]},{"type":"category","label":"\u6587\u4ef6\u64cd\u4f5c API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4ecb\u7ecd","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/introduce","docId":"guides/topic-detail/generator/plugin/api/file/introduce"},{"type":"link","label":"addHelper","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/addHelper","docId":"guides/topic-detail/generator/plugin/api/file/addHelper"},{"type":"link","label":"addPartial","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/addPartial","docId":"guides/topic-detail/generator/plugin/api/file/addPartial"},{"type":"link","label":"addFile","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/addFile","docId":"guides/topic-detail/generator/plugin/api/file/addFile"},{"type":"link","label":"addManyFile","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/addManyFile","docId":"guides/topic-detail/generator/plugin/api/file/addManyFile"},{"type":"link","label":"updateJSONFile","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/updateJSONFile","docId":"guides/topic-detail/generator/plugin/api/file/updateJSONFile"},{"type":"link","label":"updateTextRawFile","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/updateTextRawFile","docId":"guides/topic-detail/generator/plugin/api/file/updateTextRawFile"},{"type":"link","label":"updateModernConfig","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/updateModernConfig","docId":"guides/topic-detail/generator/plugin/api/file/updateModernConfig"},{"type":"link","label":"rmFile","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/rmFile","docId":"guides/topic-detail/generator/plugin/api/file/rmFile"},{"type":"link","label":"rmDir","href":"/v2/docs/guides/topic-detail/generator/plugin/api/file/rmDir","docId":"guides/topic-detail/generator/plugin/api/file/rmDir"}]},{"type":"category","label":"\u542f\u7528\u529f\u80fd API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4ecb\u7ecd","href":"/v2/docs/guides/topic-detail/generator/plugin/api/new/introduce","docId":"guides/topic-detail/generator/plugin/api/new/introduce"},{"type":"link","label":"createElement","href":"/v2/docs/guides/topic-detail/generator/plugin/api/new/createElement","docId":"guides/topic-detail/generator/plugin/api/new/createElement"},{"type":"link","label":"enableFunc","href":"/v2/docs/guides/topic-detail/generator/plugin/api/new/enableFunc","docId":"guides/topic-detail/generator/plugin/api/new/enableFunc"},{"type":"link","label":"createSubProject","href":"/v2/docs/guides/topic-detail/generator/plugin/api/new/createSubProject","docId":"guides/topic-detail/generator/plugin/api/new/createSubProject"}]},{"type":"category","label":"NPM API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"install","href":"/v2/docs/guides/topic-detail/generator/plugin/api/npm/install","docId":"guides/topic-detail/generator/plugin/api/npm/install"}]},{"type":"category","label":"GIT API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"isInGitRepo","href":"/v2/docs/guides/topic-detail/generator/plugin/api/git/isInGitRepo","docId":"guides/topic-detail/generator/plugin/api/git/isInGitRepo"},{"type":"link","label":"initGitRepo","href":"/v2/docs/guides/topic-detail/generator/plugin/api/git/initGitRepo","docId":"guides/topic-detail/generator/plugin/api/git/initGitRepo"},{"type":"link","label":"gitAddAndCommit","href":"/v2/docs/guides/topic-detail/generator/plugin/api/git/gitAddAndCommit","docId":"guides/topic-detail/generator/plugin/api/git/gitAddAndCommit"}]}]}]},{"type":"category","label":"\u5f00\u53d1\u5fae\u751f\u6210\u5668","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4ec0\u4e48\u662f\u5fae\u751f\u6210\u5668","href":"/v2/docs/guides/topic-detail/generator/codesmith/introduce","docId":"guides/topic-detail/generator/codesmith/introduce"},{"type":"link","label":"\u5fae\u751f\u6210\u5668\u7684\u7ec4\u6210","href":"/v2/docs/guides/topic-detail/generator/codesmith/structure","docId":"guides/topic-detail/generator/codesmith/structure"},{"type":"link","label":"\u5f00\u53d1\u5fae\u751f\u6210\u5668\u9879\u76ee","href":"/v2/docs/guides/topic-detail/generator/codesmith/develop","docId":"guides/topic-detail/generator/codesmith/develop"},{"type":"link","label":"\u4f7f\u7528 JS \u4ee3\u7801\u6267\u884c\u5fae\u751f\u6210\u5668","href":"/v2/docs/guides/topic-detail/generator/codesmith/run-in-js","docId":"guides/topic-detail/generator/codesmith/run-in-js"},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"@modern-js/codesmith-api-app","href":"/v2/docs/guides/topic-detail/generator/codesmith/api/app","docId":"guides/topic-detail/generator/codesmith/api/app"},{"type":"link","label":"@modern-js/codesmith-api-json","href":"/v2/docs/guides/topic-detail/generator/codesmith/api/json","docId":"guides/topic-detail/generator/codesmith/api/json"},{"type":"link","label":"@modern-js/codesmith-api-fs","href":"/v2/docs/guides/topic-detail/generator/codesmith/api/fs","docId":"guides/topic-detail/generator/codesmith/api/fs"},{"type":"link","label":"@modern-js/codesmith-api-git","href":"/v2/docs/guides/topic-detail/generator/codesmith/api/git","docId":"guides/topic-detail/generator/codesmith/api/git"},{"type":"link","label":"@modern-js/codesmith-api-handlebars","href":"/v2/docs/guides/topic-detail/generator/codesmith/api/handlebars","docId":"guides/topic-detail/generator/codesmith/api/handlebars"},{"type":"link","label":"@modern-js/codesmith-api-ejs","href":"/v2/docs/guides/topic-detail/generator/codesmith/api/ejs","docId":"guides/topic-detail/generator/codesmith/api/ejs"},{"type":"link","label":"@modern-js/codesmith-api-npm","href":"/v2/docs/guides/topic-detail/generator/codesmith/api/npm","docId":"guides/topic-detail/generator/codesmith/api/npm"}]}]}]},{"type":"category","label":"\u81ea\u5b9a\u4e49\u63d2\u4ef6","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4ecb\u7ecd","href":"/v2/docs/guides/topic-detail/framework-plugin/introduction","docId":"guides/topic-detail/framework-plugin/introduction"},{"type":"link","label":"\u751f\u547d\u5468\u671f","href":"/v2/docs/guides/topic-detail/framework-plugin/lifecycle","docId":"guides/topic-detail/framework-plugin/lifecycle"},{"type":"link","label":"Hook \u6a21\u578b","href":"/v2/docs/guides/topic-detail/framework-plugin/hook","docId":"guides/topic-detail/framework-plugin/hook"},{"type":"link","label":"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6","href":"/v2/docs/guides/topic-detail/framework-plugin/implement","docId":"guides/topic-detail/framework-plugin/implement"},{"type":"link","label":"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb","href":"/v2/docs/guides/topic-detail/framework-plugin/relationship","docId":"guides/topic-detail/framework-plugin/relationship"},{"type":"link","label":"\u6269\u5c55\u63d2\u4ef6 Hook","href":"/v2/docs/guides/topic-detail/framework-plugin/extend","docId":"guides/topic-detail/framework-plugin/extend"},{"type":"link","label":"\u63d2\u4ef6 API","href":"/v2/docs/guides/topic-detail/framework-plugin/plugin-api","docId":"guides/topic-detail/framework-plugin/plugin-api"},{"type":"link","label":"Hook \u5217\u8868","href":"/v2/docs/guides/topic-detail/framework-plugin/hook-list","docId":"guides/topic-detail/framework-plugin/hook-list"}]}]},{"type":"category","label":"\u5e38\u89c1\u95ee\u9898","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u4f9d\u8d56\u5b89\u88c5\u95ee\u9898","href":"/v2/docs/guides/troubleshooting/dependencies","docId":"guides/troubleshooting/dependencies"}]}],"Ff":[{"type":"link","label":"\u6982\u89c8","href":"/v2/docs/apis/app/overview","docId":"apis/app/overview"},{"type":"category","label":"\u6587\u4ef6\u7ea6\u5b9a","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"src/","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"App.[tj]sx","href":"/v2/docs/apis/app/hooks/src/app","docId":"apis/app/hooks/src/app"},{"type":"link","label":"pages/","href":"/v2/docs/apis/app/hooks/src/pages","docId":"apis/app/hooks/src/pages"},{"type":"link","label":"index.[tj]s","href":"/v2/docs/apis/app/hooks/src/index_","docId":"apis/app/hooks/src/index_"},{"type":"link","label":"**/*.test.[tj]sx?","href":"/v2/docs/apis/app/hooks/src/test","docId":"apis/app/hooks/src/test"},{"type":"link","label":"**/*.stories.[tj]sx","href":"/v2/docs/apis/app/hooks/src/stories","docId":"apis/app/hooks/src/stories"},{"type":"link","label":"*.[server|node].[tj]sx","href":"/v2/docs/apis/app/hooks/src/server","docId":"apis/app/hooks/src/server"}]},{"type":"category","label":"api/","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Function Mode","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"**/*.[tj]s","href":"/v2/docs/apis/app/hooks/api/functions/api","docId":"apis/app/hooks/api/functions/api"},{"type":"link","label":"**/_*.[tj]s, _*/**","href":"/v2/docs/apis/app/hooks/api/functions/common","docId":"apis/app/hooks/api/functions/common"},{"type":"link","label":"_app.[tj]s","href":"/v2/docs/apis/app/hooks/api/functions/app","docId":"apis/app/hooks/api/functions/app"}]},{"type":"category","label":"Framework Mode","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"lambda/*.[tj]s","href":"/v2/docs/apis/app/hooks/api/framework/lambda","docId":"apis/app/hooks/api/framework/lambda"}]},{"type":"link","label":"test.[tj]s","href":"/v2/docs/apis/app/hooks/api/test","docId":"apis/app/hooks/api/test"}]},{"type":"category","label":"server/","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"index.[tj]s","href":"/v2/docs/apis/app/hooks/server/index_","docId":"apis/app/hooks/server/index_"},{"type":"link","label":"test.[tj]s","href":"/v2/docs/apis/app/hooks/server/test","docId":"apis/app/hooks/server/test"}]},{"type":"link","label":"shared/","href":"/v2/docs/apis/app/hooks/shared","docId":"apis/app/hooks/shared"},{"type":"category","label":"config/","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"html/","href":"/v2/docs/apis/app/hooks/config/html","docId":"apis/app/hooks/config/html"},{"type":"link","label":"icon.png","href":"/v2/docs/apis/app/hooks/config/icon","docId":"apis/app/hooks/config/icon"},{"type":"link","label":"public/","href":"/v2/docs/apis/app/hooks/config/public","docId":"apis/app/hooks/config/public"},{"type":"link","label":"upload/","href":"/v2/docs/apis/app/hooks/config/upload","docId":"apis/app/hooks/config/upload"},{"type":"link","label":"mock/","href":"/v2/docs/apis/app/hooks/config/mock","docId":"apis/app/hooks/config/mock"},{"type":"link","label":"storybook/","href":"/v2/docs/apis/app/hooks/config/storybook","docId":"apis/app/hooks/config/storybook"}]},{"type":"link","label":"modern.config.js","href":"/v2/docs/apis/app/hooks/modern-config","docId":"apis/app/hooks/modern-config"}],"href":"/v2/docs/apis/app/hooks/"},{"type":"category","label":"\u547d\u4ee4","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"dev","href":"/v2/docs/apis/app/commands/dev","docId":"apis/app/commands/dev"},{"type":"link","label":"new","href":"/v2/docs/apis/app/commands/new","docId":"apis/app/commands/new"},{"type":"link","label":"test","href":"/v2/docs/apis/app/commands/test","docId":"apis/app/commands/test"},{"type":"link","label":"lint","href":"/v2/docs/apis/app/commands/lint","docId":"apis/app/commands/lint"},{"type":"link","label":"build","href":"/v2/docs/apis/app/commands/build","docId":"apis/app/commands/build"},{"type":"link","label":"start","href":"/v2/docs/apis/app/commands/start","docId":"apis/app/commands/start"},{"type":"link","label":"inspect","href":"/v2/docs/apis/app/commands/inspect","docId":"apis/app/commands/inspect"},{"type":"link","label":"upgrade","href":"/v2/docs/apis/app/commands/upgrade","docId":"apis/app/commands/upgrade"}],"href":"/v2/docs/apis/app/commands/"},{"type":"category","label":"\u8fd0\u884c\u65f6","collapsible":true,"collapsed":false,"items":[{"type":"category","label":"\u6838\u5fc3","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"bootstrap","href":"/v2/docs/apis/app/runtime/core/bootstrap","docId":"apis/app/runtime/core/bootstrap"},{"type":"link","label":"createApp","href":"/v2/docs/apis/app/runtime/core/create-app","docId":"apis/app/runtime/core/create-app"},{"type":"link","label":"useLoader","href":"/v2/docs/apis/app/runtime/core/use-loader","docId":"apis/app/runtime/core/use-loader"},{"type":"link","label":"useModuleApps","href":"/v2/docs/apis/app/runtime/core/use-module-apps","docId":"apis/app/runtime/core/use-module-apps"},{"type":"link","label":"useRuntimeContext","href":"/v2/docs/apis/app/runtime/core/use-runtime-context","docId":"apis/app/runtime/core/use-runtime-context"}]},{"type":"category","label":"APP","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"defineConfig","href":"/v2/docs/apis/app/runtime/app/define-config","docId":"apis/app/runtime/app/define-config"}]},{"type":"link","label":"Router","href":"/v2/docs/apis/app/runtime/router/","docId":"apis/app/runtime/router/router"},{"type":"category","label":"Model","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"model","href":"/v2/docs/apis/app/runtime/model/model_","docId":"apis/app/runtime/model/model_"},{"type":"link","label":"useModel","href":"/v2/docs/apis/app/runtime/model/use-model","docId":"apis/app/runtime/model/use-model"},{"type":"link","label":"useStaticModel","href":"/v2/docs/apis/app/runtime/model/use-static-model","docId":"apis/app/runtime/model/use-static-model"},{"type":"link","label":"useLocalModel","href":"/v2/docs/apis/app/runtime/model/use-local-model","docId":"apis/app/runtime/model/use-local-model"},{"type":"link","label":"connect","href":"/v2/docs/apis/app/runtime/model/connect","docId":"apis/app/runtime/model/connect"},{"type":"link","label":"Auto actions","href":"/v2/docs/apis/app/runtime/model/auto-actions","docId":"apis/app/runtime/model/auto-actions"},{"type":"link","label":"handleEffect","href":"/v2/docs/apis/app/runtime/model/handle-effect","docId":"apis/app/runtime/model/handle-effect"},{"type":"link","label":"Provider","href":"/v2/docs/apis/app/runtime/model/Provider","docId":"apis/app/runtime/model/Provider"},{"type":"link","label":"useStore","href":"/v2/docs/apis/app/runtime/model/use-store","docId":"apis/app/runtime/model/use-store"},{"type":"link","label":"createStore","href":"/v2/docs/apis/app/runtime/model/create-store","docId":"apis/app/runtime/model/create-store"},{"type":"link","label":"createApp","href":"/v2/docs/apis/app/runtime/model/create-app","docId":"apis/app/runtime/model/create-app"}]},{"type":"category","label":"SSR","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"NoSSR","href":"/v2/docs/apis/app/runtime/ssr/no-ssr","docId":"apis/app/runtime/ssr/no-ssr"},{"type":"link","label":"PreRender","href":"/v2/docs/apis/app/runtime/ssr/pre-render","docId":"apis/app/runtime/ssr/pre-render"}]},{"type":"category","label":"BFF","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"hook","href":"/v2/docs/apis/app/runtime/bff/hook","docId":"apis/app/runtime/bff/hook"},{"type":"link","label":"useContext","href":"/v2/docs/apis/app/runtime/bff/use-context","docId":"apis/app/runtime/bff/use-context"}]},{"type":"category","label":"Web Server","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Hook","href":"/v2/docs/apis/app/runtime/web-server/hook","docId":"apis/app/runtime/web-server/hook"},{"type":"link","label":"Middleware","href":"/v2/docs/apis/app/runtime/web-server/middleware","docId":"apis/app/runtime/web-server/middleware"}]},{"type":"category","label":"Utility","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"CSS-In-JS API","href":"/v2/docs/apis/app/runtime/utility/css-in-js","docId":"apis/app/runtime/utility/css-in-js"},{"type":"link","label":"Head","href":"/v2/docs/apis/app/runtime/utility/head","docId":"apis/app/runtime/utility/head"},{"type":"link","label":"loadable","href":"/v2/docs/apis/app/runtime/utility/loadable","docId":"apis/app/runtime/utility/loadable"}]},{"type":"category","label":"Testing","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"cleanup","href":"/v2/docs/apis/app/runtime/testing/cleanup","docId":"apis/app/runtime/testing/cleanup"},{"type":"link","label":"act","href":"/v2/docs/apis/app/runtime/testing/act","docId":"apis/app/runtime/testing/act"},{"type":"link","label":"render","href":"/v2/docs/apis/app/runtime/testing/render","docId":"apis/app/runtime/testing/render"},{"type":"link","label":"renderApp","href":"/v2/docs/apis/app/runtime/testing/renderApp","docId":"apis/app/runtime/testing/renderApp"}]}],"href":"/v2/docs/apis/app/runtime/"}],"Wl":[{"type":"link","label":"\u6982\u89c8","href":"/v2/docs/apis/monorepo/overview","docId":"apis/monorepo/overview"},{"type":"category","label":"\u6587\u4ef6\u7ea6\u5b9a","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"apps/*","href":"/v2/docs/apis/monorepo/hooks/apps","docId":"apis/monorepo/hooks/apps"},{"type":"link","label":"examples/*","href":"/v2/docs/apis/monorepo/hooks/examples","docId":"apis/monorepo/hooks/examples"},{"type":"link","label":"features/","href":"/v2/docs/apis/monorepo/hooks/features","docId":"apis/monorepo/hooks/features"},{"type":"link","label":"packages/","href":"/v2/docs/apis/monorepo/hooks/packages","docId":"apis/monorepo/hooks/packages"},{"type":"link","label":"pnpm-workspace.yaml","href":"/v2/docs/apis/monorepo/hooks/pnpm-workspace","docId":"apis/monorepo/hooks/pnpm-workspace"},{"type":"link","label":".pnpmfile.cjs","href":"/v2/docs/apis/monorepo/hooks/pnpmfile","docId":"apis/monorepo/hooks/pnpmfile"},{"type":"link","label":"monorepo.code-workspace","href":"/v2/docs/apis/monorepo/hooks/code-workspace","docId":"apis/monorepo/hooks/code-workspace"}],"href":"/v2/docs/apis/monorepo/hooks/"},{"type":"category","label":"\u547d\u4ee4","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"new","href":"/v2/docs/apis/monorepo/commands/new","docId":"apis/monorepo/commands/new"},{"type":"link","label":"change","href":"/v2/docs/apis/monorepo/commands/change","docId":"apis/monorepo/commands/change"},{"type":"link","label":"pre","href":"/v2/docs/apis/monorepo/commands/pre","docId":"apis/monorepo/commands/pre"},{"type":"link","label":"bump","href":"/v2/docs/apis/monorepo/commands/bump","docId":"apis/monorepo/commands/bump"},{"type":"link","label":"release","href":"/v2/docs/apis/monorepo/commands/release","docId":"apis/monorepo/commands/release"},{"type":"link","label":"lint","href":"/v2/docs/apis/monorepo/commands/lint","docId":"apis/monorepo/commands/lint"},{"type":"link","label":"deploy","href":"/v2/docs/apis/monorepo/commands/deploy","docId":"apis/monorepo/commands/deploy"},{"type":"link","label":"clear","href":"/v2/docs/apis/monorepo/commands/clear","docId":"apis/monorepo/commands/clear"},{"type":"link","label":"gen-release-note","href":"/v2/docs/apis/monorepo/commands/gen-release-note","docId":"apis/monorepo/commands/gen-release-note"},{"type":"link","label":"upgrade","href":"/v2/docs/apis/monorepo/commands/upgrade","docId":"apis/monorepo/commands/upgrade"}],"href":"/v2/docs/apis/monorepo/commands/"}]}}')}}]);