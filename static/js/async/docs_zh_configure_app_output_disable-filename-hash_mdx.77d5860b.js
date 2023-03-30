(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_output_disable-filename-hash_mdx"],{48942:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return r}});var i=n("12151"),l=n("21447");function a(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"类型："})," ",(0,i.jsx)(s.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"默认值："})," ",(0,i.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"移除生产环境的构建产物名称中的 hash 值。"}),"\n",(0,i.jsxs)(s.p,{children:["在生产环境构建后，会自动在文件名中间添加 hash 值，如果不需要添加，可以通过 ",(0,i.jsx)(s.code,{children:"output.disableFilenameHash"})," 配置来禁用该行为。"]}),"\n",(0,i.jsxs)(s.h3,{id:"示例",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,i.jsx)(s.p,{children:"默认情况下，构建后的产物名称为："}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"File                                     Size         Gzipped"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"dist/static/css/187.7879e19d.css         126.99 KB    9.17 KB"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"dist/static/js/main.18a568e5.js          2.24 KB      922 B"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["添加 ",(0,i.jsx)(s.code,{children:"output.disableFilenameHash"})," 配置："]}),"\n",(0,i.jsxs)(s.div,{className:"language-js",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    disableFilenameHash"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsx)(s.p,{children:"重新构建，产物的名称变为："}),"\n",(0,i.jsxs)(s.div,{className:"language-bash",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"File                            Size         Gzipped"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"dist/static/css/187.css         126.99 KB    9.17 KB"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"dist/static/js/main.js          2.24 KB      922 B"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]})]})}var r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},44313:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},toc:function(){return c},title:function(){return t},default:function(){return d}});var i=n("12151"),l=n("21447"),a=n.ir(n("48942"));let r={sidebar_label:"disableFilenameHash"},c=[],t="output.disableFilenameHash";function o(e){let s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"outputdisablefilenamehash",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablefilenamehash",children:"#"}),"output.disableFilenameHash"]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\n该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisablefilenamehash",target:"_blank",rel:"noopener noreferrer",children:"output.disableFilenameHash"}),"。"]})})]}),"\n","\n",(0,i.jsx)(a.default,{})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);