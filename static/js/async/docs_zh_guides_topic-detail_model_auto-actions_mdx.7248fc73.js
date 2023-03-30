(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_model_auto-actions_mdx"],{41427:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return r},toc:function(){return i},title:function(){return c},default:function(){return a}});var o=n("12151"),l=n("21447");let r={sidebar_position:6,title:"自动生成 Actions"},i=[{id:"原始数据类型",text:"原始数据类型",depth:2},{id:"数组类型",text:"数组类型",depth:2},{id:"简单对象类型",text:"简单对象类型",depth:2}],c="自动生成 Actions";function t(s){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",div:"div",button:"button",pre:"pre",span:"span"},(0,l.useMDXComponents)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"自动生成-actions",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自动生成-actions",children:"#"}),"自动生成 Actions"]}),"\n",(0,o.jsxs)(e.p,{children:["在 ",(0,o.jsx)(e.a,{href:"/guides/topic-detail/model/quick-start.html",children:"快速上手"})," 中，我们实现最简单的计数器 Model 也需要 10 行代码。\n实际上，Modern.js 支持根据声明的 ",(0,o.jsx)(e.code,{children:"state"})," 类型，自动生成常用的 Actions，从而简化模板代码量。当前支持的类型有："]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"原始数据类型"}),"\n",(0,o.jsx)(e.li,{children:"数组类型"}),"\n",(0,o.jsx)(e.li,{children:"简单对象类型（Plain Object）"}),"\n"]}),"\n",(0,o.jsxs)(e.h2,{id:"原始数据类型",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#原始数据类型",children:"#"}),"原始数据类型"]}),"\n",(0,o.jsxs)(e.div,{className:"language-ts",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"countModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"model"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'count'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".define"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({ state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" });"})]}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.p,{children:["如上我们仅用一行就完成了一个简单的 ",(0,o.jsx)(e.code,{children:"countModel"}),"。使用 Model 的示例代码如下："]}),"\n",(0,o.jsxs)(e.div,{className:"language-tsx",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Counter"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(countModel);"})]}),"\n",(0,o.jsx)(e.span,{className:"line"}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 增加 1"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".setState"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(state "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []);"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.h2,{id:"数组类型",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#数组类型",children:"#"}),"数组类型"]}),"\n",(0,o.jsx)(e.p,{children:"当 State 为数组类型时，自动生成 Actions 的示例代码如下："}),"\n",(0,o.jsxs)(e.div,{className:"language-ts",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"countModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"model"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'count'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".define"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({ state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [] });"})]}),"\n",(0,o.jsx)(e.span,{className:"line"}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Counter"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(countModel);"})]}),"\n",(0,o.jsx)(e.span,{className:"line"}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".push"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".pop"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".shift"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".unshift"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".concat"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".splice"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".filter"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(value "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" value "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []);"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsx)(e.p,{children:"我们可以使用 JavaScript Array 对象的方法，修改 State。"}),"\n",(0,o.jsxs)(e.h2,{id:"简单对象类型",children:[(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#简单对象类型",children:"#"}),"简单对象类型"]}),"\n",(0,o.jsx)(e.p,{children:"当 State 为简单对象类型时，自动生成 Actions 的示例代码如下："}),"\n",(0,o.jsxs)(e.div,{className:"language-ts",children:[(0,o.jsx)(e.div,{className:""}),(0,o.jsxs)(e.div,{className:"modern-code-content",children:[(0,o.jsx)(e.button,{className:"copy"}),(0,o.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,o.jsxs)(e.code,{children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"countModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"model"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'count'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".define"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    a"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    b"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    c"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,o.jsx)(e.span,{className:"line"}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Counter"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"state"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useModel"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(countModel);"})]}),"\n",(0,o.jsx)(e.span,{className:"line"}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".setA"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".setB"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"actions"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".setC"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({ a"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" });"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" []);"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,o.jsxs)(e.p,{children:["根据 ",(0,o.jsx)(e.code,{children:"a"}),"、",(0,o.jsx)(e.code,{children:"b"}),"、",(0,o.jsx)(e.code,{children:"c"})," 三个不同的字段分别生成 ",(0,o.jsx)(e.code,{children:"setA"}),"、",(0,o.jsx)(e.code,{children:"setB"}),"、",(0,o.jsx)(e.code,{children:"setC"})," 三个 Actions。"]}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive info",children:[(0,o.jsx)(e.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsxs)(e.p,{children:["\n当用户自定义的 Action 和 Modern.js 自动生成的 Action 名字一致时，用户自定义的 Action 优先级更高。例如，\n在 ",(0,o.jsx)(e.code,{children:"countModel"})," 中已经自定义 ",(0,o.jsx)(e.code,{children:"setA"})," 这个 Action，调用 ",(0,o.jsx)(e.code,{children:"actions.setA()"})," 时，最终执行的是用户自定义的 ",(0,o.jsx)(e.code,{children:"setA"}),"。"]})})]}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive info",children:[(0,o.jsx)(e.div,{className:"modern-directive-title",children:"补充信息"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsxs)(e.p,{children:["\n相关 API 的更多介绍，请参考",(0,o.jsx)(e.a,{href:"/apis/app/runtime/model/auto-actions.html",children:"这里"}),"。"]})})]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,o.jsx)(e,Object.assign({},s,{children:(0,o.jsx)(t,s)})):t(s)}}}]);