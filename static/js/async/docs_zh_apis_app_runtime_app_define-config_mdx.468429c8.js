(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_app_define-config_mdx"],{25771:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return l},toc:function(){return c},title:function(){return o},default:function(){return t}});var r=n("12151"),i=n("21447");let l={sidebar_position:1,title:"defineConfig"},c=[{id:"使用姿势",text:"使用姿势",depth:2},{id:"函数签名",text:"函数签名",depth:2},{id:"参数",text:"参数",depth:3},{id:"示例",text:"示例",depth:2}],o="defineConfig";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",strong:"strong",h3:"h3",ul:"ul",li:"li",ol:"ol"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"defineconfig",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#defineconfig",children:"#"}),"defineConfig"]}),"\n",(0,r.jsx)(s.p,{children:"用于动态配置应用。"}),"\n",(0,r.jsxs)(s.h2,{id:"使用姿势",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"}),"使用姿势"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Runtime 配置通常可以在 ",(0,r.jsx)(s.code,{children:"modern.config.js"})," 的 ",(0,r.jsx)(s.code,{children:"runtime"})," 空间下配置，如 ",(0,r.jsx)(s.a,{href:"/configure/app/runtime/router.html",children:"router"})," 配置。"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"modern.config.js"})," 中的配置是构建时确定的，如果一些配置参数是运行时获取的，或者配置参数是来自于源码中的一个模块（如组件），就需要使用 ",(0,r.jsx)(s.code,{children:"defineConfig"})," API 进行运行时配置。"]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive info",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\n",(0,r.jsx)(s.code,{children:"@modern-js/app-tools"})," 拥有同名 API，用于为配置",(0,r.jsx)(s.strong,{children:"提供 TS 类型"}),"，请开发者加以区分。"]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"函数签名",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"}),"函数签名"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(Component"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" config)"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"参数",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"}),"参数"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Component：",(0,r.jsx)(s.code,{children:"React.ComponentType<any>"}),"，App 根组件。"]}),"\n",(0,r.jsxs)(s.li,{children:["config：",(0,r.jsx)(s.code,{children:"Record<string, any>"}),"，运行时的配置。"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"示例",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,r.jsxs)(s.div,{className:"language-tsx",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(App"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  router"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    supportHtml5History"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"defineConfig"})," 里可配置 ",(0,r.jsx)(s.a,{href:"/configure/app/runtime/state.html",children:"runtime.state"}),"、",(0,r.jsx)(s.a,{href:"/configure/app/runtime/router.html",children:"runtime.router"})," 等运行时配置。"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"defineConfig"})," 在配置某个属性之前，如 ",(0,r.jsx)(s.code,{children:"router"}),"，需要确保 ",(0,r.jsx)(s.code,{children:"modern.config.js"})," 已经配置开启了该功能。"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"defineConfig"})," 传入的配置会和 ",(0,r.jsx)(s.code,{children:"modern.config.js"})," 中的配置浅 merge，以 ",(0,r.jsx)(s.code,{children:"router"})," 为例，最终应用的配置如下："]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.div,{className:"language-json",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 来自 `modern.config.js` 配置"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ...runtime.router"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 来自 `defineConfig` 配置"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ...config.router"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);