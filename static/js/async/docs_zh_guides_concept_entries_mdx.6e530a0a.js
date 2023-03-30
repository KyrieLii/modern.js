(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_concept_entries_mdx"],{62022:function(s,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var r in e)Object.defineProperty(s,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return i},toc:function(){return o},title:function(){return c},default:function(){return t}});var n=r("12151"),l=r("21447");let i={sidebar_position:1},o=[{id:"什么是入口entry",text:"什么是入口（Entry）",depth:2},{id:"单入口与多入口",text:"单入口与多入口",depth:2},{id:"入口类型",text:"入口类型",depth:2},{id:"框架模式入口",text:"框架模式入口",depth:3},{id:"约定式路由",text:"约定式路由",depth:4},{id:"自定义路由",text:"自定义路由",depth:4},{id:"自定义-app",text:"自定义 App",depth:4},{id:"构建模式入口",text:"构建模式入口",depth:3},{id:"自定义入口",text:"自定义入口",depth:2},{id:"禁用默认入口扫描",text:"禁用默认入口扫描",depth:3}],c="入口（Entry）";function a(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",ol:"ol",li:"li",h3:"h3",h4:"h4"},(0,l.useMDXComponents)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"入口entry",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#入口entry",children:"#"}),"入口（Entry）"]}),"\n",(0,n.jsx)(e.p,{children:"通过本章节，你可以了解到 Modern.js 中的入口约定，以及如何自定义入口。"}),"\n",(0,n.jsxs)(e.h2,{id:"什么是入口entry",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是入口entry",children:"#"}),"什么是入口（Entry）"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"入口指的是一个页面的起始模块。"})}),"\n",(0,n.jsx)(e.p,{children:"在 Modern.js 项目中，每一个入口对应一个独立的页面，也对应一条服务端路由。默认情况下，Modern.js 会基于目录约定来自动确定页面的入口，同时也支持通过配置项来自定义入口。"}),"\n",(0,n.jsx)(e.p,{children:"Modern.js 提供的很多配置项都是以入口为维度进行划分的，比如页面标题、HTML 模板、页面 Meta 信息、是否开启 SSR/SSG、服务端路由规则等。"}),"\n",(0,n.jsxs)(e.h2,{id:"单入口与多入口",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#单入口与多入口",children:"#"}),"单入口与多入口"]}),"\n",(0,n.jsx)(e.p,{children:"Modern.js 初始化的项目是单入口的（SPA），项目结构如下："}),"\n",(0,n.jsxs)(e.div,{className:"language-text",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:".\n├── src\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── package.json\n├── modern.config.ts\n└── tsconfig.json\n"})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["在 Modern.js 项目中，你可以很方便的将单入口切换成多入口，直接在项目下执行 ",(0,n.jsx)(e.code,{children:"pnpm run new"}),"，通过生成器创建入口即可："]}),"\n",(0,n.jsxs)(e.div,{className:"language-bash",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想要的操作：创建工程元素"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 创建工程元素：新建「应用入口」"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请填写入口名称：new-entry"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["执行后，Modern.js 会自动生成一个新的入口目录，此时可以看到 ",(0,n.jsx)(e.code,{children:"src/"})," 目录变成如下结构："]}),"\n",(0,n.jsxs)(e.div,{className:"language-bash",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── myapp    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 原入口"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   └── routes"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── index.css"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── layout.tsx"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│       └── page.tsx"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── new-entry "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 新入口"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    └── routes"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ├── index.css"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ├── layout.tsx"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        └── page.tsx"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["原本的代码被移动到了和 ",(0,n.jsx)(e.code,{children:"package.json"})," 中 ",(0,n.jsx)(e.code,{children:"name"})," 同名的目录下，并创建了新的目录。"]}),"\n",(0,n.jsxs)(e.p,{children:["执行 ",(0,n.jsx)(e.code,{children:"pnpm run dev"})," 后，可以看到新增了一条名为 ",(0,n.jsx)(e.code,{children:"/new-entry"})," 的路由，并且被迁移的代码路由并未发生变化。"]}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive tip",children:[(0,n.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,n.jsxs)(e.div,{className:"modern-directive-content",children:[(0,n.jsxs)(e.p,{children:["\nModern.js 会将与 package.json 文件中 ",(0,n.jsx)(e.code,{children:"name"})," 字段同名的入口作为主入口，主入口的路由为 ",(0,n.jsx)(e.code,{children:"/"}),"，其他入口的路由为 ",(0,n.jsx)(e.code,{children:"/{entryName}"}),"。"]}),(0,n.jsxs)(e.p,{children:["比如，package.json 中的 ",(0,n.jsx)(e.code,{children:"name"})," 为 ",(0,n.jsx)(e.code,{children:"myapp"})," 时，",(0,n.jsx)(e.code,{children:"src/myapp"})," 会作为项目的主入口。"]})]})]}),"\n",(0,n.jsxs)(e.h2,{id:"入口类型",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#入口类型",children:"#"}),"入口类型"]}),"\n",(0,n.jsxs)(e.p,{children:["不同的入口类型具有不同的编译和运行时行为。在 Modern.js 创建项目时，开发者可以手动选择创建",(0,n.jsx)(e.strong,{children:"框架模式"}),"或是",(0,n.jsx)(e.strong,{children:"构建模式"}),"的项目。完成创建后，可以看到不同模式的项目样板文件是不同的。"]}),"\n",(0,n.jsxs)(e.p,{children:["默认情况下，Modern.js 启动项目前会对 ",(0,n.jsx)(e.code,{children:"src/"})," 下的文件进行扫描，识别入口，并生成对应的服务端路由。"]}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive tip",children:[(0,n.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsxs)(e.p,{children:["\n可以通过 ",(0,n.jsx)(e.a,{href:"/configure/app/source/entries-dir.html",children:"source.entriesDir"})," 更改入口目录为其他目录。"]})})]}),"\n",(0,n.jsxs)(e.p,{children:["并非 ",(0,n.jsx)(e.code,{children:"src/"})," 下所有的一级目录都会成为项目入口, 入口所在目录必须满足以下四个条件之一："]}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["具有 ",(0,n.jsx)(e.code,{children:"routes/"})," 目录"]}),"\n",(0,n.jsxs)(e.li,{children:["具有 ",(0,n.jsx)(e.code,{children:"App.[jt]sx?"})," 文件"]}),"\n",(0,n.jsxs)(e.li,{children:["具有 ",(0,n.jsx)(e.code,{children:"index.[jt]sx?"})," 文件"]}),"\n",(0,n.jsxs)(e.li,{children:["具有 ",(0,n.jsx)(e.code,{children:"pages/"})," 目录（兼容 Modern.js 1.0）"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["当 ",(0,n.jsx)(e.code,{children:"src/"})," 目录满足入口特征时，Modern.js 会认为当前项目为单入口应用。"]}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive tip",children:[(0,n.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsxs)(e.p,{children:["\n在单入口应用中，默认的入口名为 ",(0,n.jsx)(e.code,{children:"main"}),"。"]})})]}),"\n",(0,n.jsxs)(e.p,{children:["当项目不是单入口应用时，Modern.js 会进一步查看 ",(0,n.jsx)(e.code,{children:"src/"})," 下的一级目录。"]}),"\n",(0,n.jsxs)(e.h3,{id:"框架模式入口",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#框架模式入口",children:"#"}),"框架模式入口"]}),"\n",(0,n.jsxs)(e.p,{children:["框架模式指需要使用 Modern.js 框架能力，例如 Router、SSR、一体化调用等。这类入口约定下，开发者定义的入口并不是真正的 Webpack 编译入口。Modern.js 在启动时会生成一个封装过的入口，可以在 ",(0,n.jsx)(e.code,{children:"node_modules/.modern/{entryName}/index.js"})," 找到真正的入口。"]}),"\n",(0,n.jsxs)(e.h4,{id:"约定式路由",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#约定式路由",children:"#"}),"约定式路由"]}),"\n",(0,n.jsxs)(e.p,{children:["如果入口中存在 ",(0,n.jsx)(e.code,{children:"routes/"})," 目录，Modern.js 会在启动时扫描 ",(0,n.jsx)(e.code,{children:"routes/"})," 下的文件，基于文件约定，自动生成客户端路由（react-router）。"]}),"\n",(0,n.jsxs)(e.p,{children:["详细内容可以参考",(0,n.jsx)(e.a,{href:"/guides/basic-features/routes.html",children:"路由"}),"。"]}),"\n",(0,n.jsxs)(e.h4,{id:"自定义路由",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义路由",children:"#"}),"自定义路由"]}),"\n",(0,n.jsxs)(e.p,{children:["如果入口中存在 ",(0,n.jsx)(e.code,{children:"App.[jt]sx?"})," 文件，开发者可以在这个文件中自由的设置客户端路由，或者不设置客户端路由。"]}),"\n",(0,n.jsxs)(e.p,{children:["详细内容可以参考",(0,n.jsx)(e.a,{href:"/guides/basic-features/routes.html",children:"路由"}),"。"]}),"\n",(0,n.jsxs)(e.h4,{id:"自定义-app",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-app",children:"#"}),"自定义 App"]}),"\n",(0,n.jsxs)(e.p,{children:["如果入口中存在 ",(0,n.jsx)(e.code,{children:"index.[jt]sx"})," 文件，并且当文件默认导出函数时，Modern.js 还是会根据 runtime 的设置情况生成 createApp 包裹后的代码。在渲染过程中，将 createApp 包裹后的组件作为参数传递给 index 文件导出的函数，这样开发者可以自定义将组件挂载到 DOM 节点上，或在挂载前添加自定义行为。例如："]}),"\n",(0,n.jsxs)(e.div,{className:"language-tsx",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-dom/client'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { bootstrap } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (App"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"React"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ComponentType"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// do something before bootstrap..."})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"bootstrap"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(App"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'root'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM);"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive warning",children:[(0,n.jsx)(e.div,{className:"modern-directive-title",children:"WARNING"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsx)(e.p,{children:"\n由于 bootstrap 函数需要兼容 React17 和 React18 的用法，调用 bootstrap 函数时需要手动传入 ReactDOM 参数。"})})]}),"\n",(0,n.jsx)(e.p,{children:"Modern.js 生成的文件内容如下："}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-dom/client'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" customBootstrap "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@_edenx_src/index.tsx'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" App "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@_edenx_src/App'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { router"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" state } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@edenx/runtime/plugins'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"IS_BROWSER"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"typeof"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" window "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'undefined'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".name "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nodejs'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MOUNT_ID"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'root'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" AppWrapper "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"render"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  AppWrapper "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"createApp"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// runtime 的插件参数..."})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  })(App);"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"IS_BROWSER"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"customBootstrap"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(AppWrapper);"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" AppWrapper;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"AppWrapper "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"render"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" AppWrapper;"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"构建模式入口",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#构建模式入口",children:"#"}),"构建模式入口"]}),"\n",(0,n.jsx)(e.p,{children:"构建模式是指不使用任何 Modern.js 运行时的能力，完全由开发者自己定义项目 Webpack 的入口。"}),"\n",(0,n.jsxs)(e.p,{children:["如果入口中存在 ",(0,n.jsx)(e.code,{children:"index.[jt]sx"})," ，并且没有默认导出函数时，这时候该文件就是真正的 Webpack 入口文件。这里和 ",(0,n.jsx)(e.a,{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer",children:"Create React App"})," 类似，需要自己将组件挂载到 DOM 节点、添加热更新代码等。例如:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"src/index.jsx"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-dom'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" App "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./App'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"ReactDOM"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".render"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"document"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".getElementById"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'root'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"));"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["Modern.js ",(0,n.jsx)(e.strong,{children:"不推荐"}),"使用这种方式，这种方式丧失了框架的一些能力，如 ",(0,n.jsxs)(e.strong,{children:[(0,n.jsx)(e.code,{children:"modern.config.js"})," 文件中的 ",(0,n.jsx)(e.code,{children:"runtime"})," 配置将不会再生效"]}),"。但是在项目从其他框架迁移到 Modern.js，例如 CRA，或是自己手动搭建的 webpack 时，这种方式会非常有用。"]}),"\n",(0,n.jsxs)(e.h2,{id:"自定义入口",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义入口",children:"#"}),"自定义入口"]}),"\n",(0,n.jsx)(e.p,{children:"大部分存量项目并不是按照 Modern.js 的目录结构来搭建的。如果要改成 Modern.js 约定的目录结构，会存在一定的迁移成本。"}),"\n",(0,n.jsxs)(e.p,{children:["在这种情况下，除了使用文件约定生成入口外，你可以在 ",(0,n.jsx)(e.code,{children:"modern.config.[jt]s"})," 中手动配置入口。"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    entries"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 指定一个名称为 entry_customize 的新入口"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      entry_customize"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/home/test/index.ts'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 禁用默认入口扫描"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    disableDefaultEntries"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"禁用默认入口扫描",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用默认入口扫描",children:"#"}),"禁用默认入口扫描"]}),"\n",(0,n.jsx)(e.p,{children:"当使用自定义入口时，项目的部分结构可能恰巧命中了 Modern.js 的目录约定，但实际上这部分目录并不是真实的入口。"}),"\n",(0,n.jsxs)(e.p,{children:["Modern.js 提供了 ",(0,n.jsx)(e.code,{children:"disableDefaultEntries"})," 配置，来禁用默认的入口扫描规则。当你需要自定义入口时，一般需要将 ",(0,n.jsx)(e.code,{children:"disableDefaultEntries"})," 与 ",(0,n.jsx)(e.code,{children:"entries"})," 结合使用。这样，一些存量项目可以在不修改目录结构的情况下，快速地进行迁移。"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    disableDefaultEntries"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive tip",children:[(0,n.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsxs)(e.p,{children:["\n详细用法请查看 ",(0,n.jsx)(e.a,{href:"/configure/app/source/entries.html",children:"source.entries"})," 和 ",(0,n.jsx)(e.a,{href:"/configure/app/source/disable-default-entries.html",children:"source.disableDefaultEntries"}),"。"]})})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);