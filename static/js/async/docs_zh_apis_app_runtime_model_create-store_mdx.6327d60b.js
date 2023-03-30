(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_model_create-store_mdx"],{61028:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return i},toc:function(){return t},title:function(){return c},default:function(){return h}});var n=r("12151"),o=r("21447"),l=r.ir(r("51524"));let i={sidebar_position:10,title:"createStore"},t=[{id:"函数签名",text:"函数签名",depth:2},{id:"参数",text:"参数",depth:3},{id:"返回值",text:"返回值",depth:3},{id:"示例",text:"示例",depth:2}],c="createStore";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",button:"button",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",strong:"strong",em:"em"},(0,o.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"createstore",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#createstore",children:"#"}),"createStore"]}),"\n","\n",(0,n.jsx)(l.default,{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"createStore"})," 用于创建一个 Store 对象。Reduck 的 Store 基于 Redux 的 ",(0,n.jsx)(s.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"Store"})," 实现，用于存储应用的状态，同时提供一组用于管理状态和 Model 的方法。"]}),"\n",(0,n.jsxs)(s.p,{children:["一般情况下，不需要使用这个 API，只有需要完全掌控 Store 的创建时，才会使用这个 API。例如，自定义一个 Store，传入 ",(0,n.jsx)(s.a,{href:"/apis/app/runtime/model/Provider.html",children:(0,n.jsx)(s.code,{children:"Provider"})})," 组件使用。"]}),"\n",(0,n.jsxs)(s.h2,{id:"函数签名",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"}),"函数签名"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"StoreConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  initialState"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  middlewares"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Middleware"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  models"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Model"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Plugin"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  enhancers"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"StoreEnhancer"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ReduckStore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ReduxStore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  use"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"typeof"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" useModel;"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"unmount"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (model"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Model"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createStore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(config"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"StoreConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ReduckStore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h3,{id:"参数",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"}),"参数"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["config?：store 配置选项","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"initialState?: 设置全局 Store 的初始状态。"}),"\n",(0,n.jsx)(s.li,{children:"models?: 设置提前（Store 创建后）挂载到 Store 的 Model。（正常使用无需提前挂载）"}),"\n",(0,n.jsxs)(s.li,{children:["middlewares?: 设置 Redux ",(0,n.jsx)(s.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware",target:"_blank",rel:"noopener noreferrer",children:"中间件"}),"。"]}),"\n",(0,n.jsxs)(s.li,{children:["enhancers?: 设置 Redux 的 ",(0,n.jsx)(s.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer",target:"_blank",rel:"noopener noreferrer",children:"Store enhancer"})," 。"]}),"\n",(0,n.jsxs)(s.li,{children:["plugins?: 设置 Reduck 插件。",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.em,{children:"试验性配置，不推荐使用"})}),"。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"返回值",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"}),"返回值"]}),"\n",(0,n.jsx)(s.p,{children:"Reduck Store 对象："}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["use：动态挂载和获取 Model 对象。用法与 ",(0,n.jsx)(s.a,{href:"/apis/app/runtime/model/use-model.html",children:(0,n.jsx)(s.code,{children:"useModel"})})," 相同，但可以在 React 组件外使用。"]}),"\n",(0,n.jsx)(s.li,{children:"unmount：卸载 Model 对象，Model 的 State 会从 Store 中清除。"}),"\n",(0,n.jsxs)(s.li,{children:["ReduxStore：Redux Store 对象具有的方法，",(0,n.jsx)(s.a,{href:"https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store",target:"_blank",rel:"noopener noreferrer",children:"详见"}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"示例",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,n.jsxs)(s.div,{className:"language-tsx",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"store"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createStore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"load"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"store"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".use"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(fooModel);"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".load"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]})]})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},51524:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}});var n=r("12151"),o=r("21447");function l(e){let s=Object.assign({div:"div",p:"p",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,n.jsxs)(s.div,{className:"modern-directive info",children:[(0,n.jsx)(s.div,{className:"modern-directive-title",children:"补充信息"}),(0,n.jsxs)(s.div,{className:"modern-directive-content",children:[(0,n.jsxs)(s.p,{children:["\n默认情况下，本节所有 API 的导出包名为：",(0,n.jsx)(s.code,{children:"@modern-js/runtime/model"}),"。"]}),(0,n.jsxs)(s.p,{children:["如果是在 Modern.js 以外单独集成 Reduck，导出包名为：",(0,n.jsx)(s.code,{children:"@modern-js-reduck/react"}),"。"]})]})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}}}]);