(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_runtime_model_use-static-model_mdx"],{7683:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return t},toc:function(){return i},title:function(){return c},default:function(){return d}});var o=n("12151"),l=n("21447"),r=n.ir(n("82153"));let t={sidebar_position:3,title:"useStaticModel"},i=[{id:"example",text:"Example",depth:2}],c="useStaticModel";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h2:"h2"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"usestaticmodel",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usestaticmodel",children:"#"}),"useStaticModel"]}),"\n","\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsxs)(s.p,{children:["If want to consume a Model in the form of React Hook in the component，and can get the current latest state at any time，but you don't want the Model state to be updated, which will cause the component to be re-rendered, we can use ",(0,o.jsx)(s.code,{children:"useStaticModel"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"useStaticModel"})," API is same as ",(0,o.jsx)(s.code,{children:"useModel"}),".For detail, see ",(0,o.jsx)(s.a,{href:"/en/apis/app/runtime/model/use-model.html",children:(0,o.jsx)(s.code,{children:"useModel"})}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["To ensure that the latest state is always available, be careful not to deconstruct the returned ",(0,o.jsx)(s.code,{children:"state"}),"."]}),"\n",(0,o.jsxs)(s.div,{className:"language-tsx",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ❌ Do not deconstruct state，but can deconstruct actions."})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" [{ "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"username"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"logout"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useStaticModel"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(userModel);"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ✅ True Usage."})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"logout"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useStaticModel"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(userModel);"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".username;"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" []);"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.h2,{id:"example",children:[(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,o.jsxs)(s.p,{children:["The following ",(0,o.jsx)(s.code,{children:"App"})," component consumes the ",(0,o.jsx)(s.code,{children:"userModel"})," state, but does not use it directly in JSX. It can be found that changes in the ",(0,o.jsx)(s.code,{children:"userModel"})," state do not necessarily cause the component to re-render. This situation can be optimized using ",(0,o.jsx)(s.code,{children:"useStaticModel"}),"."]}),"\n",(0,o.jsxs)(s.div,{className:"language-tsx",children:[(0,o.jsx)(s.div,{className:""}),(0,o.jsxs)(s.div,{className:"modern-code-content",children:[(0,o.jsx)(s.button,{className:"copy"}),(0,o.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(s.code,{children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useStaticModel"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(userModel);"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// 统计 UV 数据"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"send"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pageview'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { user"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".user });"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" [state]);"})]}),"\n",(0,o.jsx)(s.span,{className:"line"}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Hello</"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(s.div,{className:"modern-directive info",children:[(0,o.jsx)(s.div,{className:"modern-directive-title",children:"More"}),(0,o.jsx)(s.div,{className:"modern-directive-content",children:(0,o.jsxs)(s.p,{children:["\n",(0,o.jsx)(s.a,{href:"/en/guides/topic-detail/model/use-model.html",children:"Use Model"}),"."]})})]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},82153:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return t}});var o=n("12151"),l=n("21447");function r(e){let s=Object.assign({div:"div",p:"p",code:"code"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(s.div,{className:"modern-directive info",children:[(0,o.jsx)(s.div,{className:"modern-directive-title",children:"information"}),(0,o.jsxs)(s.div,{className:"modern-directive-content",children:[(0,o.jsxs)(s.p,{children:["\nBy default, the export package name for all APIs in this section is: ",(0,o.jsx)(s.code,{children:"@modern-js/runtime/model"}),"."]}),(0,o.jsxs)(s.p,{children:["If Reduck is integrated separately from Modern.js, the export package name is: ",(0,o.jsx)(s.code,{children:"@modern-js-reduck/react"}),"."]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}}}]);