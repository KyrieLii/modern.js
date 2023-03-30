(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_concept_entries_mdx"],{38547:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return t},title:function(){return l},default:function(){return a}});var r=n("12151"),i=n("21447");let o={sidebar_position:1},t=[{id:"what-is-an-entry",text:"What is an Entry",depth:2},{id:"single-entry-and-multiple-entries",text:"Single Entry and Multiple Entries",depth:2},{id:"entry-type",text:"Entry Type",depth:2},{id:"framework-mode-entry",text:"Framework Mode Entry",depth:3},{id:"conventional-routing",text:"Conventional Routing",depth:4},{id:"custom-routing",text:"Custom Routing",depth:4},{id:"custom-app",text:"Custom App",depth:4},{id:"build-mode-entry",text:"Build Mode Entry",depth:3},{id:"custom-entry",text:"Custom Entry",depth:2},{id:"disable-default-entries",text:"Disable Default Entries",depth:3}],l="Entries";function c(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span",ol:"ol",li:"li",h3:"h3",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"entries",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#entries",children:"#"}),"Entries"]}),"\n",(0,r.jsx)(s.p,{children:"Through this chapter, you can learn about the entry convention in Modern.js and how to customize the entry."}),"\n",(0,r.jsxs)(s.h2,{id:"what-is-an-entry",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-an-entry",children:"#"}),"What is an Entry"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Entry is the starting module of a page."})}),"\n",(0,r.jsx)(s.p,{children:"In the Modern.js project, each entry corresponds to an independent page, and also corresponds to a server route. By default, Modern.js will automatically determine the entry of the page based on the directory convention, and also supports customizing the entry through configuration items."}),"\n",(0,r.jsx)(s.p,{children:"Many configuration items provided by Modern.js are divided by entry, such as page title, HTML template, page Meta information, whether to enable SSR/SSG, server-side routing rules, etc."}),"\n",(0,r.jsxs)(s.h2,{id:"single-entry-and-multiple-entries",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#single-entry-and-multiple-entries",children:"#"}),"Single Entry and Multiple Entries"]}),"\n",(0,r.jsx)(s.p,{children:"The project initialized by Modern.js is single-entry (SPA), and the project structure is as follows:"}),"\n",(0,r.jsxs)(s.div,{className:"language-text",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:".\n├── src\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── package.json\n├── modern.config.ts\n└── tsconfig.json\n"})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js can easily switch from single entry to multiple entry. You can execute ",(0,r.jsx)(s.code,{children:"pnpm run new"})," under the project to create entry through generator:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Action: Create project element"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Create project element: New "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"entry"'})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Entry name: new-entry"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["After execution, Modern.js will automatically generate a new entry directory, and you can see that the ",(0,r.jsx)(s.code,{children:"src/"})," directory has the following structure:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-bash",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"├── myapp     "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# Original entry"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"│   └── routes"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── index.css"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"│       ├── layout.tsx"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"│       └── page.tsx"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"└── new-entry  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# New entry"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    └── routes"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ├── index.css"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ├── layout.tsx"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        └── page.tsx"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["The original code was moved to the directory with the same name as the ",(0,r.jsx)(s.code,{children:"name"})," in the ",(0,r.jsx)(s.code,{children:"package.json"}),", and a new directory was created."]}),"\n",(0,r.jsxs)(s.p,{children:["After executing ",(0,r.jsx)(s.code,{children:"pnpm run dev"}),", you can see that a ",(0,r.jsx)(s.code,{children:"/new-entry"})," route has been added, and the migrated code route has not changed."]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:[(0,r.jsxs)(s.p,{children:["\nModern.js will use the entry with the same name as the ",(0,r.jsx)(s.code,{children:"name"})," field in the package.json file as the main entry, the route of the main entry is ",(0,r.jsx)(s.code,{children:"/"}),", and the route of other entries is ",(0,r.jsx)(s.code,{children:"/{entryName}"}),"."]}),(0,r.jsxs)(s.p,{children:["For example, when ",(0,r.jsx)(s.code,{children:"name"})," in package.json is ",(0,r.jsx)(s.code,{children:"myapp"}),", ",(0,r.jsx)(s.code,{children:"src/myapp"})," will be used as the main entry of the project."]})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"entry-type",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-type",children:"#"}),"Entry Type"]}),"\n",(0,r.jsxs)(s.p,{children:["Different entry types have different compile and run-time behaviors. When creating a project in Modern.js, developers can manually choose to create a project in ",(0,r.jsx)(s.strong,{children:"framework mode"})," or ",(0,r.jsx)(s.strong,{children:"build mode"}),". After the creation is complete, you can see that the project template files for different modes are different."]}),"\n",(0,r.jsxs)(s.p,{children:["By default, Modern.js will scan the files under ",(0,r.jsx)(s.code,{children:"src/"})," before starting the project, identify the entry, and generate the corresponding server-side route."]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nYou can change the entry directory to another directory through ",(0,r.jsx)(s.a,{href:"/en/configure/app/source/entries-dir.html",children:"source.entriesDir"}),"."]})})]}),"\n",(0,r.jsxs)(s.p,{children:["Not all first-level directories under ",(0,r.jsx)(s.code,{children:"src/"})," will become project entries, and the directory where the entry is located must meet one of the following four conditions:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Have a ",(0,r.jsx)(s.code,{children:"routes/"})," directory"]}),"\n",(0,r.jsxs)(s.li,{children:["Has ",(0,r.jsx)(s.code,{children:"App.[jt]sx?"})," file"]}),"\n",(0,r.jsxs)(s.li,{children:["Has ",(0,r.jsx)(s.code,{children:"index.[jt]sx?"})," file"]}),"\n",(0,r.jsxs)(s.li,{children:["Has a ",(0,r.jsx)(s.code,{children:"pages/"})," directory (Modern.js 1.0 compatible)"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["When the ",(0,r.jsx)(s.code,{children:"src/"})," directory meets the entry characteristics, Modern.js will consider the current project as a single-entry application."]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nIn single-entry applications, the default entry is named ",(0,r.jsx)(s.code,{children:"main"}),"."]})})]}),"\n",(0,r.jsxs)(s.p,{children:["When the project is not a single-entry application, Modern.js will further check the first-level directory under ",(0,r.jsx)(s.code,{children:"src/"}),"."]}),"\n",(0,r.jsxs)(s.h3,{id:"framework-mode-entry",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#framework-mode-entry",children:"#"}),"Framework Mode Entry"]}),"\n",(0,r.jsxs)(s.p,{children:["Framework mode refers to the need to use the capabilities of the Modern.js framework, such as Router, SSR, integrated calls, etc. Under this kind of entry agreement, the entry defined by the developer is not the real Webpack compilation entry. Modern.js will generate an encapsulated entry when it starts, and the real entry can be found in ",(0,r.jsx)(s.code,{children:"node_modules/.modern/{entryName}/index.js"}),"."]}),"\n",(0,r.jsxs)(s.h4,{id:"conventional-routing",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#conventional-routing",children:"#"}),"Conventional Routing"]}),"\n",(0,r.jsxs)(s.p,{children:["If there is a ",(0,r.jsx)(s.code,{children:"routes/"})," directory in the entry, Modern.js will scan the files under ",(0,r.jsx)(s.code,{children:"routes/"})," at startup, and automatically generate client-side routes (react-router) based on file conventions."]}),"\n",(0,r.jsxs)(s.p,{children:["For details, please refer to ",(0,r.jsx)(s.a,{href:"/en/guides/basic-features/routes.html",children:"routing"}),"."]}),"\n",(0,r.jsxs)(s.h4,{id:"custom-routing",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-routing",children:"#"}),"Custom Routing"]}),"\n",(0,r.jsxs)(s.p,{children:["If there is an ",(0,r.jsx)(s.code,{children:"App.[jt]sx?"})," file in the entry, the developer can freely set the client route in this file, or not set the client route."]}),"\n",(0,r.jsxs)(s.p,{children:["For details, please refer to ",(0,r.jsx)(s.a,{href:"/en/guides/basic-features/routes.html",children:"routing"}),"."]}),"\n",(0,r.jsxs)(s.h4,{id:"custom-app",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-app",children:"#"}),"Custom App"]}),"\n",(0,r.jsxs)(s.p,{children:["If there is an ",(0,r.jsx)(s.code,{children:"index.[jt]sx"})," file in the entry, and when the file exports functions by default, Modern.js will still generate the code wrapped by createApp according to the runtime settings. In the rendering process, the component wrapped by createApp is passed as a parameter to the function exported by the index file, so that developers can customize the component to be mounted on the DOM node, or add custom behavior before mounting. For example:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-tsx",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-dom/client'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { bootstrap } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (App"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"React"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ComponentType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// do something before bootstrap..."})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bootstrap"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(App"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'root'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"undefined"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM);"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive warning",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"WARNING"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"\nSince the bootstrap function needs to be compatible with React17 and React18, you need to manually pass in ReactDOM parameters when calling the bootstrap function."})})]}),"\n",(0,r.jsx)(s.p,{children:"The content of the file generated by Modern.js is as follows:"}),"\n",(0,r.jsxs)(s.div,{className:"language-js",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-dom/client'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" customBootstrap "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@_edenx_src/index.tsx'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" App "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@_edenx_src/App'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { router"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" state } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@edenx/runtime/plugins'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"IS_BROWSER"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"typeof"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" window "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'undefined'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".name "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nodejs'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"MOUNT_ID"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'root'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" AppWrapper "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"render"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  AppWrapper "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createApp"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// plugin parameters for runtime..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  })(App);"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"IS_BROWSER"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"customBootstrap"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(AppWrapper);"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" AppWrapper;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"AppWrapper "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"render"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" AppWrapper;"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"build-mode-entry",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#build-mode-entry",children:"#"}),"Build Mode Entry"]}),"\n",(0,r.jsx)(s.p,{children:"Build mode refers to the ability not to use any Modern.js runtime, and the developer defines the entry of the project Webpack completely by himself."}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"index.[jt]sx"})," exists in the entry and there is no default export function, then this file is the real Webpack entry file. This is similar to ",(0,r.jsx)(s.a,{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer",children:"Create React App"}),", you need to mount components to DOM nodes, add hot update code, etc. For example:"]}),"\n",(0,r.jsxs)(s.div,{className:"language-js",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"src/index.jsx"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" React "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ReactDOM "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-dom'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" App "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./App'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ReactDOM"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".render"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"App"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"document"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".getElementById"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'root'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"));"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js ",(0,r.jsx)(s.strong,{children:"not recommended"})," to use this method, this method loses some capabilities of the framework, such as the ",(0,r.jsx)(s.code,{children:"runtime"})," configuration in the ",(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.code,{children:"modern.config.js"})," file will no longer take effect"]}),". But this method will be very useful when the project is migrated from other frameworks to Modern.js, such as CRA, or webpack that is manually built by yourself."]}),"\n",(0,r.jsxs)(s.h2,{id:"custom-entry",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-entry",children:"#"}),"Custom Entry"]}),"\n",(0,r.jsx)(s.p,{children:"Most existing projects are not built according to the directory convention of Modern.js. If you want to change to the directory structure agreed by Modern.js, there will be a certain migration cost."}),"\n",(0,r.jsxs)(s.p,{children:["In this case, instead of generating the entry using file conventions, you can manually configure the entry in ",(0,r.jsx)(s.code,{children:"modern.config.[jt]s"}),"."]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    entries"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Specify a new entry named entry_customize"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      entry_customize"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/home/test/index.ts'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Disable default ingress scanning"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    disableDefaultEntries"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"disable-default-entries",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-default-entries",children:"#"}),"Disable Default Entries"]}),"\n",(0,r.jsx)(s.p,{children:"When using a custom entry, part of the project structure may happen to hit the directory convention of Modern.js, but in fact this part of the directory is not the real entry."}),"\n",(0,r.jsxs)(s.p,{children:["Modern.js provides ",(0,r.jsx)(s.code,{children:"disableDefaultEntries"})," config to disable default entry scanning rules. When you need to customize the entry, you generally need to use ",(0,r.jsx)(s.code,{children:"disableDefaultEntries"})," with ",(0,r.jsx)(s.code,{children:"entries"}),". In this way, some existing projects can be quickly migrated without modifying the directory structure."]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    disableDefaultEntries"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nFor detailed usage, please refer to ",(0,r.jsx)(s.a,{href:"/en/configure/app/source/entries.html",children:"source.entries"})," and ",(0,r.jsx)(s.a,{href:"/en/configure/app/source/disable-default-entries.html",children:"source.disableDefaultEntries"}),"."]})})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);