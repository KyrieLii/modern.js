(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_html_inject-by-entries_mdx"],{6688:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var r=s("12151"),i=s("21447");function l(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型："})," ",(0,r.jsx)(n.code,{children:"Record<string, boolean | string>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"默认值："})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"用于在多页面的场景下，为不同的页面设置不同的 script 标签插入位置。"}),"\n",(0,r.jsxs)(n.p,{children:["整体用法与 ",(0,r.jsx)(n.code,{children:"inject"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"injectByEntries"})," 的优先级高于 ",(0,r.jsx)(n.code,{children:"inject"}),"，因此会覆盖 ",(0,r.jsx)(n.code,{children:"inject"})," 中设置的值。"]}),"\n",(0,r.jsxs)(n.h3,{id:"示例",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,r.jsxs)(n.div,{className:"language-js",children:[(0,r.jsx)(n.div,{className:""}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(n.code,{children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  html"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    inject"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'head'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    injectByEntries"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      foo"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'body'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(n.p,{children:"重新编译后，可以看到:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["页面 ",(0,r.jsx)(n.code,{children:"foo"})," 的 script 标签会插入到 ",(0,r.jsx)(n.code,{children:"body"})," 标签内。"]}),"\n",(0,r.jsxs)(n.li,{children:["其他页面的 script 标签会插入到 ",(0,r.jsx)(n.code,{children:"head"})," 标签内。"]}),"\n"]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},9852:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},toc:function(){return t},title:function(){return o},default:function(){return d}});var r=s("12151"),i=s("21447"),l=s.ir(s("6688"));let c={sidebar_label:"injectByEntries"},t=[],o="html.injectByEntries";function a(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmlinjectbyentries",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlinjectbyentries",children:"#"}),"html.injectByEntries"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["\n该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlinjectbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.injectByEntries"}),"。"]})})]}),"\n","\n",(0,r.jsx)(l.default,{})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);