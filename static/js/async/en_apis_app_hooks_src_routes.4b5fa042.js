"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[20405],{60434:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i,frontmatter:()=>r,title:()=>a,toc:()=>o});var l=n(97458);const r={title:"routes/",sidebar_position:2},o=[{id:"basic-example",text:"basic example",depth:2},{id:"dynamic-route",text:"Dynamic Route",depth:2},{id:"layout-component",text:"Layout component",depth:2}],a="routes/";function c(e){const s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h2:"h2",ul:"ul",li:"li"},e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"routes",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#routes",children:"#"}),"routes/"]}),"\n",(0,l.jsx)(s.p,{children:"The entry identifier when the application uses file system-based routing."}),"\n",(0,l.jsxs)(s.p,{children:["When the project structure is of type ",(0,l.jsx)(s.code,{children:"Routes directory entry"}),", the files in the ",(0,l.jsx)(s.code,{children:"src/routes"})," directory are parsed to get the client-side routing configuration. See ",(0,l.jsx)(s.a,{href:"/en/guides/basic-features/routes.html",children:"Routing by convention"})," for more details on usage."]}),"\n",(0,l.jsxs)(s.p,{children:["Any ",(0,l.jsx)(s.code,{children:"layout.[tj]sx"})," and ",(0,l.jsx)(s.code,{children:"page.[tj]sx"})," under ",(0,l.jsx)(s.code,{children:"src/routes"})," will be used as a route to the application\uff1a"]}),"\n",(0,l.jsxs)(s.div,{className:"language-bash",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 routes"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    \u251c\u2500\u2500 layout.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    \u251c\u2500\u2500 page.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2514\u2500\u2500 user"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 layout.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        \u2514\u2500\u2500 page.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h2,{id:"basic-example",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-example",children:"#"}),"basic example"]}),"\n",(0,l.jsxs)(s.p,{children:["The directory names in the ",(0,l.jsx)(s.code,{children:"routes"})," directory will be used as a mapping of the route url, where ",(0,l.jsx)(s.code,{children:"layout.tsx"})," is used as the layout component and ",(0,l.jsx)(s.code,{children:"page.tsx"})," as the content component, which is a leaf node of the whole route, for example the following directory structure\uff1a"]}),"\n",(0,l.jsxs)(s.div,{className:"language-bash",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 routes"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    \u251c\u2500\u2500 page.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2514\u2500\u2500 user"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        \u2514\u2500\u2500 page.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(s.p,{children:"The following two routes are produced:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"/"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"/user"})}),"\n"]}),"\n",(0,l.jsxs)(s.h2,{id:"dynamic-route",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-route",children:"#"}),"Dynamic Route"]}),"\n",(0,l.jsxs)(s.p,{children:["If the directory name of the route file is named with ",(0,l.jsx)(s.code,{children:"[]"}),", the generated route will be used as a dynamic route. For example, the following file directories:"]}),"\n",(0,l.jsxs)(s.div,{className:"language-text",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 [id]\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u251c\u2500\u2500 blog\n    \u2502\xa0\xa0 \u2514\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 page.tsx\n"})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.code,{children:"routes/[id]/page.tsx"})," file will be converted to a ",(0,l.jsx)(s.code,{children:"/:id"})," route. All ",(0,l.jsx)(s.code,{children:"/xxx"})," will match that route, except for the ",(0,l.jsx)(s.code,{children:"/blog"})," route, which can be matched exactly."]}),"\n",(0,l.jsxs)(s.p,{children:["In the component, you can get the corresponding parameters by ",(0,l.jsx)(s.a,{href:"/en/apis/app/runtime/router/index.html#useparams",children:"useParams"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["In the loader, params will be used as input to ",(0,l.jsx)(s.a,{href:"/en/guides/basic-features/data-fetch.html#loader-function",children:"loader"}),", and the corresponding parameters can be retrieved through the property ",(0,l.jsx)(s.code,{children:"params"}),"."]}),"\n",(0,l.jsxs)(s.h2,{id:"layout-component",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#layout-component",children:"#"}),"Layout component"]}),"\n",(0,l.jsxs)(s.p,{children:["As in the example below, you can add a common layout component for all routing components by adding ",(0,l.jsx)(s.code,{children:"layout.tsx"})]}),"\n",(0,l.jsxs)(s.div,{className:"language-bash",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"\u2514\u2500\u2500 routes"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    \u251c\u2500\u2500 layout.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    \u251c\u2500\u2500 page.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    \u2514\u2500\u2500 user"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        \u251c\u2500\u2500 layout.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        \u2514\u2500\u2500 page.tsx"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.p,{children:["You can represent child components in layout components by using ",(0,l.jsx)(s.code,{children:"<Outlet>"}),":"]}),"\n",(0,l.jsxs)(s.div,{className:"language-tsx",children:[(0,l.jsx)(s.div,{className:"modern-code-title",children:"routes/layout.tsx"}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Link"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Outlet"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" useLoaderData } "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/router'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line"}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <>"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Outlet"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"></"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Outlet"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </>"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.div,{className:"modern-directive note",children:[(0,l.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,l.jsx)(s.div,{className:"modern-directive-content",children:(0,l.jsxs)(s.p,{children:["\n",(0,l.jsx)(s.code,{children:"<Outlet>"})," is a new API in React Router 6, see [Outlet] for details(",(0,l.jsx)(s.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"nofollow",children:"https://reactrouter.com/en/main/components/outlet#outlet"}),")."]})})]})]})}const i=function(e={}){const{wrapper:s}=e.components||{};return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(c,e)})):c(e)}}}]);