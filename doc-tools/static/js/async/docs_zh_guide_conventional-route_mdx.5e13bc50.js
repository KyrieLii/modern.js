(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_conventional-route_mdx"],{96769:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return c},toc:function(){return i},title:function(){return o},default:function(){return d}});var r=n("12151"),l=n("21447");let c=void 0,i=[{id:"什么是约定式路由",text:"什么是约定式路由",depth:2},{id:"映射规则",text:"映射规则",depth:2},{id:"自定义行为",text:"自定义行为",depth:2},{id:"最佳实践",text:"最佳实践",depth:2}],o="约定式路由";function a(s){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"约定式路由",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#约定式路由",children:"#"}),"约定式路由"]}),"\n",(0,r.jsxs)(e.h2,{id:"什么是约定式路由",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是约定式路由",children:"#"}),"什么是约定式路由"]}),"\n",(0,r.jsx)(e.p,{children:"Modern.js Doc 使用的是文件系统路由，页面的文件路径会简单的映射为路由路径，这样会让整个项目的路由非常直观。"}),"\n",(0,r.jsxs)(e.p,{children:["例如，如果在 ",(0,r.jsx)(e.code,{children:"docs"})," 目录中有一个名为 ",(0,r.jsx)(e.code,{children:"foo.md"})," 的文件，则该文件的路由路径将是 ",(0,r.jsx)(e.code,{children:"/foo"}),"。"]}),"\n",(0,r.jsxs)(e.h2,{id:"映射规则",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#映射规则",children:"#"}),"映射规则"]}),"\n",(0,r.jsx)(e.p,{children:"Modern.js Doc 会自动扫描根目录和所有子目录，并将文件路径映射到路由路径。例如，如果你有以下的文件结构："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"docs"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── foo"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   └── bar.md"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── foo.md"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["那么 ",(0,r.jsx)(e.code,{children:"bar.md"})," 的路由路径会是 ",(0,r.jsx)(e.code,{children:"/foo/bar"}),"，",(0,r.jsx)(e.code,{children:"foo.md"})," 的路由路径会是 ",(0,r.jsx)(e.code,{children:"/foo"}),"。"]}),"\n",(0,r.jsx)(e.p,{children:"具体映射规则如下："}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"文件路径"}),(0,r.jsx)(e.th,{children:"路由路径"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"index.md"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"/"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"/foo.md"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"/foo"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"/foo/bar.md"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"/foo/bar"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"/zoo/index.md"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"/zoo"})})]})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"自定义行为",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义行为",children:"#"}),"自定义行为"]}),"\n",(0,r.jsxs)(e.p,{children:["如果要自定义路由行为，可以使用配置文件中的 ",(0,r.jsx)(e.code,{children:"route"})," 字段。例如："]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/doc-tools'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  route"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// These files will be excluded from the routing (support glob pattern)"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    exclude"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'custom.tsx'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'component/**/*'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// These files will be included in the routing (support glob pattern)"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    include: ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'other-dir/**/*'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"最佳实践",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#最佳实践",children:"#"}),"最佳实践"]}),"\n",(0,r.jsxs)(e.p,{children:["我们推荐你将文档文件放在 ",(0,r.jsx)(e.code,{children:"docs"})," 目录下，这样可以让你的项目更加清晰。而对于非文档内容，比如自定义组件、工具函数等，可以放到 ",(0,r.jsx)(e.code,{children:"docs"})," 目录之外进行维护。比如："]}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"docs"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── foo.mdx"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"src"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── components"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   └── CustomComponent.tsx"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── utils"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    └── utils.ts"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]})]})}var d=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(a,s)})):a(s)}}}]);