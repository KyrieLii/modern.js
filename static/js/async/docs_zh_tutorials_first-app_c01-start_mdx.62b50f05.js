(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_tutorials_first-app_c01-start_mdx"],{75337:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var r=n("12151"),l=n("21447");function o(s){let e=Object.assign({p:"p",a:"a",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",span:"span"},(0,l.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["在开始使用前，你需要安装 ",(0,r.jsx)(e.a,{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Node.js"}),"，并保证 Node.js 版本不低于 14.17.6，",(0,r.jsx)(e.strong,{children:"我们推荐使用 Node.js 16 的 LTS 版本"}),"。"]}),"\n",(0,r.jsx)(e.p,{children:"你可以通过以下命令检查当前使用的 Node.js 版本："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"node -v"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# v16.19.1"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["如果你当前的环境中尚未安装 Node.js，或是安装的版本低于 14.17.6，可以通过 ",(0,r.jsx)(e.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," 或 ",(0,r.jsx)(e.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," 安装需要的版本。"]}),"\n",(0,r.jsx)(e.p,{children:"下面是通过 nvm 安装 Node.js 16 LTS 版本的例子："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 安装 Node.js 16 的长期支持版本"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm install 16 --lts"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 将刚安装的 Node.js 16 设置为默认版本"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"alias"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" default 16"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 切换到刚安装的 Node.js 16"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm use 16"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"nvm 和 fnm"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsx)(e.p,{children:"\nnvm 和 fnm 都是 Node.js 版本管理工具。相对来说，nvm 较为成熟和稳定，而 fnm 是使用 Rust 实现的，比 nvm 提供了更好的性能。"})})]}),"\n",(0,r.jsxs)(e.p,{children:["此外，在安装 nvm 或 fnm 后，然后只要仓库根目录下有内容为 ",(0,r.jsx)(e.code,{children:"lts/gallium"})," 的 ",(0,r.jsx)(e.code,{children:".nvmrc"})," 文件，进入这个仓库时就会自动安装或切换到正确的 Node.js 版本。"]})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(o,s)})):o(s)}},16320:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var r=n("12151"),l=n("21447");function o(s){let e=Object.assign({p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span"},(0,l.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["在项目中执行 ",(0,r.jsx)(e.code,{children:"pnpm run dev"})," 即可启动项目："]}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"$ pnpm run dev"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" modern dev"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"info    Starting dev server..."})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"info    App running at:"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Local:    http://localhost:8080/"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Network:  http://192.168.0.1:8080/"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Client ✔ "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"done"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 76.10ms"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["在浏览器中打开 ",(0,r.jsx)(e.code,{children:"http://localhost:8000/"}),"，可以看到页面内容。"]})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(o,s)})):o(s)}},82129:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var r=n("12151"),l=n("21447");function o(s){let e=Object.assign({p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span"},(0,l.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Modern.js 生成器会提供一个可交互的问答界面，根据结果初始化项目，按照默认的选择进行初始化："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择你想创建的工程类型：Web 应用"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择开发语言：TS"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" 请选择包管理工具：pnpm"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"在生成项目后，Modern.js 会自动安装依赖、创建 git 仓库。"}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] 依赖自动安装成功"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] git 仓库初始化成功"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] 创建成功！"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"可在新项目的目录下运行以下命令："})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run dev          "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 按开发环境的要求，运行和调试项目"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run build        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 按生产环境的要求，构建项目"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run serve        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 按生产环境的要求，运行项目"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run lint         "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 检查和修复所有代码"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm run new          "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 继续创建更多项目要素，比如应用入口"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive note",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsx)(e.p,{children:"\nModern.js 生成器除了在项目初始化时工作外，也能在后续研发中生成项目各种粒度的模块，并非一用即抛开。"})})]}),"\n",(0,r.jsx)(e.p,{children:"现在，项目结构如下："}),"\n",(0,r.jsxs)(e.div,{className:"language-text",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:".\n├── node_modules\n├── src\n│   ├── modern-app-env.d.ts\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── modern.config.ts\n├── package.json\n├── pnpm-lock.yaml\n├── README.md\n└── tsconfig.json\n"})})]})]})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(o,s)})):o(s)}},39382:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var r=n("12151"),l=n("21447"),o=n.ir(n("75337"));function i(s){let e=Object.assign({h3:"h3",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code",span:"span"},(0,l.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h3,{id:"nodejs",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs",children:"#"}),"Node.js"]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(e.h3,{id:"pnpm",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"}),"pnpm"]}),"\n",(0,r.jsxs)(e.p,{children:["推荐使用 ",(0,r.jsx)(e.a,{href:"https://pnpm.io/installation",target:"_blank",rel:"noopener noreferrer",children:"pnpm"})," 来管理依赖："]}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npm install -g pnpm@7"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive note",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\nModern.js 同样支持使用 ",(0,r.jsx)(e.code,{children:"yarn"}),"、",(0,r.jsx)(e.code,{children:"npm"})," 进行依赖管理。"]})})]})]})}var c=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(i,s)})):i(s)}},19362:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return a},toc:function(){return t},title:function(){return h},default:function(){return x}});var r=n("12151"),l=n("21447"),o=n.ir(n("39382")),i=n.ir(n("82129")),c=n.ir(n("16320"));let a={title:"创建项目"},t=[{id:"环境准备",text:"环境准备",depth:2},{id:"初始化项目",text:"初始化项目",depth:2},{id:"调试项目",text:"调试项目",depth:2},{id:"修改代码",text:"修改代码",depth:2},{id:"开启-ssr",text:"开启 SSR",depth:2}],h="创建项目";function d(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",img:"img"},(0,l.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"创建项目",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#创建项目",children:"#"}),"创建项目"]}),"\n",(0,r.jsx)(e.p,{children:"从这一章节开始，我们将进入实战教程部分。在实战教程中，我们将会从环境准备开始，从简单到复杂，一步一步搭建一个真实的项目。"}),"\n",(0,r.jsxs)(e.h2,{id:"环境准备",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#环境准备",children:"#"}),"环境准备"]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(e.h2,{id:"初始化项目",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#初始化项目",children:"#"}),"初始化项目"]}),"\n",(0,r.jsx)(e.p,{children:"我们创建新的目录，通过命令行工具初始化项目："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"mkdir myapp "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" myapp"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/create"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(e.h2,{id:"调试项目",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#调试项目",children:"#"}),"调试项目"]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(e.h2,{id:"修改代码",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#修改代码",children:"#"}),"修改代码"]}),"\n",(0,r.jsx)(e.p,{children:"我们将原本的示例代码删除，替换成一个简单的联系人列表："}),"\n",(0,r.jsxs)(e.div,{className:"language-tsx",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"src/routes/page.tsx"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"getAvatar"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (users"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Array"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<{ name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; email"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }>) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"users"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".map"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(user "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"user"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    avatar"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`https://avatars.dicebear.com/v2/identicon/"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"user"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:".svg`"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }));"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"mockData"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"getAvatar"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Thomas'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" email"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'w.kccip@bllmfbgv.dm'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Chow'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" email"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'f.lfqljnlk@ywoefljhc.af'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Bradley'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" email"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'d.wfovsqyo@gpkcjwjgb.fr'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Davis'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" email"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'\"t.kqkoj@utlkwnpwk.nu'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"ul"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      {"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"mockData"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".map"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(({ name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" avatar"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" email }) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"li"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"key"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{name}>"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"img"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{avatar} "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"width"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"60"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"height"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"60"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} /> ---"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">{name}</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"> ---"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">{email}</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"li"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      ))}"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"ul"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" App;"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"删除多余的 css 文件，保持目录没有多余的文件："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"rm src/routes/index.css"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["因为框架默认支持 ",(0,r.jsx)(e.a,{href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer",children:"HMR"}),"，可以看到 ",(0,r.jsx)(e.code,{children:"http://localhost:8080/"})," 里的内容会自动更新为："]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvt/ljhwZthlaukjlkulzlp/screenshot-20221214-141909.png",alt:"result"})}),"\n",(0,r.jsx)(e.p,{children:"此刻的页面还没有样式。下一章节将展开这部分的内容。"}),"\n",(0,r.jsxs)(e.h2,{id:"开启-ssr",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-ssr",children:"#"}),"开启 SSR"]}),"\n",(0,r.jsxs)(e.p,{children:["接下来，我们修改项目中的 ",(0,r.jsx)(e.code,{children:"modern.config.ts"}),"，开启 SSR 能力："]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" appTools"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/app-tools'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  runtime"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    router"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    state"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  server"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ssr"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"appTools"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["重新执行 ",(0,r.jsx)(e.code,{children:"pnpm run dev"}),"，可以发现项目已经在服务端完成了页面渲染。"]})]})}var x=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(d,s)})):d(s)}}}]);