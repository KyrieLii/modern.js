(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_tutorials_first-app_c02-component_mdx"],{89436:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return o},title:function(){return c},default:function(){return a}});var r=n("12151"),l=n("21447");let i={title:"编写 UI 组件"},o=[],c="编写 UI 组件";function t(s){let e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",img:"img"},(0,l.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"编写-ui-组件",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#编写-ui-组件",children:"#"}),"编写 UI 组件"]}),"\n",(0,r.jsx)(e.p,{children:"上一章节中，我们学习了如何初始化项目，并使用配置修改 Modern.js 的默认行为。"}),"\n",(0,r.jsx)(e.p,{children:"这一章节中，我们继续沿用上一章节的项目代码，继续完善联系人列表。"}),"\n",(0,r.jsxs)(e.p,{children:["为了做更好的 UI 展示和交互，我们引入组件库 ",(0,r.jsx)(e.a,{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer",children:"Antd"})," 来开发，使用 ",(0,r.jsx)(e.code,{children:"<List>"})," 组件来代替原始的列表。先添加依赖："]}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm add antd"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["修改 ",(0,r.jsx)(e.code,{children:"src/routes/page.tsx"}),"，在顶部导入组件："]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { List } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'antd'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["修改 ",(0,r.jsx)(e.code,{children:"<App>"})," 组件的实现："]}),"\n",(0,r.jsxs)(e.div,{className:"language-tsx",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"List"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"dataSource"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{mockData}"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"renderItem"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{({ name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" email"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" avatar }) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"List.Item"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"key"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{name}>"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"List.Item.Meta"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"              "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"avatar"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"img"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"alt"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"avatar"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"src"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{avatar} "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"width"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"60"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"height"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"60"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} />}"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"              "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"title"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{name}"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"              "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"description"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{email}"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            />"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"List.Item"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        )}"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      />"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["执行 ",(0,r.jsx)(e.code,{children:"pnpm run dev"}),"，查看运行结果："]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c02-antd-result.png",alt:"result"})}),"\n",(0,r.jsx)(e.p,{children:"可以看到 Ant Design 导出的组件，已经具备了完整的样式。"}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive info",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\nModern.js 会",(0,r.jsx)(e.a,{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"自动按需导入 Ant Design 组件需要的 CSS"}),"。"]})})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive note",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\n我们也可以使用其他组件库来实现同样的功能，例如 ",(0,r.jsx)(e.a,{href:"https://arco.design/",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"}),"。"]})})]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(t,s)})):t(s)}}}]);