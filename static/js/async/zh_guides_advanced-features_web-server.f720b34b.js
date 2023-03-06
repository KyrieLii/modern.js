"use strict";(self.webpackChunk_modern_js_main_doc_website=self.webpackChunk_modern_js_main_doc_website||[]).push([[24858],{69984:function(e,s,r){r.r(s),r.d(s,{frontmatter:function(){return l},title:function(){return o},toc:function(){return i}});var n=r(97458);const l={title:"\u81ea\u5b9a\u4e49 Web Server",sidebar_position:2},i=[{id:"\u4f7f\u7528-api-\u6269\u5c55-web-server",text:"\u4f7f\u7528 API \u6269\u5c55 Web Server",depth:2},{id:"hook",text:"Hook",depth:3},{id:"middleware",text:"Middleware",depth:3},{id:"\u901a\u8fc7-bff-\u6258\u7ba1\u9875\u9762\u8bf7\u6c42",text:"\u901a\u8fc7 BFF \u6258\u7ba1\u9875\u9762\u8bf7\u6c42",depth:2},{id:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684-web-server",text:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684 Web Server",depth:2}],o="\u81ea\u5b9a\u4e49 Web Server";function c(e){const s=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",code:"code",button:"button",pre:"pre",span:"span",h3:"h3",ol:"ol",li:"li"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"\u81ea\u5b9a\u4e49-web-server",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81ea\u5b9a\u4e49-web-server",children:"#"}),"\u81ea\u5b9a\u4e49 Web Server"]}),"\n",(0,n.jsx)(s.p,{children:"Modern.js \u4f5c\u4e3a\u4ee5\u5ba2\u6237\u7aef\u4e3a\u4e2d\u5fc3\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u5bf9\u670d\u52a1\u7aef\u7684\u5b9a\u5236\u80fd\u529b\u8f83\u5f31\u3002\u800c\u5728\u6709\u4e9b\u5f00\u53d1\u573a\u666f\u4e0b\uff0c\u9700\u8981\u5b9a\u5236\u7279\u6b8a\u7684\u670d\u52a1\u7aef\u903b\u8f91\uff0c\u4f8b\u5982\u7528\u6237\u9274\u6743\u3001\u8bf7\u6c42\u9884\u5904\u7406\u3001\u6dfb\u52a0\u9875\u9762\u6e32\u67d3\u9aa8\u67b6\u7b49\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u4e00\u4e9b\u5f00\u53d1\u8005\u53ef\u80fd\u4f1a\u6709\u7591\u60d1\uff0cModern.js \u5df2\u7ecf\u63d0\u4f9b\u4e86 ",(0,n.jsx)(s.a,{href:"/guides/advanced-features/bff/function.html",children:"BFF \u80fd\u529b"}),"\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981",(0,n.jsx)(s.strong,{children:"\u81ea\u5b9a\u4e49 Web Server"}),"\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u56e0\u4e3a\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9875\u9762\u8def\u7531\u5e76\u4e0d\u4f1a\u7ecf\u8fc7 BFF\uff0c\u5b83\u6ca1\u6709\u529e\u6cd5\u4e3a\u9875\u9762\u8bbf\u95ee\u63d0\u4f9b\u670d\u52a1\u7aef\u7684\u5b9a\u5236\u903b\u8f91\u3002\u4e4b\u6240\u4ee5\u8fd9\u6837\u8bbe\u8ba1\uff0c\u662f\u56e0\u4e3a\u6211\u4eec\u4e0d\u5e0c\u671b\u63a7\u5236\u9875\u9762\u7684\u670d\u52a1\u4e0e BFF \u670d\u52a1\u7ed1\u5b9a\u5728\u4e00\u8d77\uff0c\u907f\u514d BFF \u7684\u6846\u67b6\u9650\u5236\u9875\u9762\u7684\u90e8\u7f72\u65b9\u5f0f\u3002\u4f8b\u5982\u5c06\u9875\u9762\u4e0e BFF \u5206\u5f00\u6258\u7ba1\u3001\u5c06\u9875\u9762\u670d\u52a1\u90e8\u7f72\u5230\u975e Node \u7684\u73af\u5883\u4e0a\uff0c\u6216\u662f\u9488\u5bf9\u90e8\u7f72\u5e73\u53f0\u505a\u5b9a\u5236\u7b49\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u51fa\u4e8e\u4e0a\u8ff0\u539f\u56e0\uff0cModern.js \u63d0\u4f9b\u4e86\u4e09\u79cd\u65b9\u5f0f\uff0c\u8ba9\u9879\u76ee\u53ef\u4ee5\u5728\u6839\u636e\u9700\u6c42\uff0c\u6e10\u8fdb\u5f0f\u7684\u5b9a\u5236\u670d\u52a1\u7aef\u80fd\u529b\u3002"}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive warning",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"WARNING"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsx)(s.p,{children:"\n\u4e09\u79cd\u6269\u5c55\u65b9\u5f0f\u65e0\u6cd5\u540c\u65f6\u5de5\u4f5c\uff0c\u5f00\u53d1\u8005\u9700\u8981\u6839\u636e\u573a\u666f\u9009\u62e9\u5408\u9002\u7684\u65b9\u5f0f\u3002"})})]}),"\n",(0,n.jsxs)(s.h2,{id:"\u4f7f\u7528-api-\u6269\u5c55-web-server",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4f7f\u7528-api-\u6269\u5c55-web-server",children:"#"}),"\u4f7f\u7528 API \u6269\u5c55 Web Server"]}),"\n",(0,n.jsx)(s.p,{children:"\u7b2c\u4e00\u79cd\u65b9\u5f0f\u662f\u901a\u8fc7 Modern.js \u63d0\u4f9b\u7684\u670d\u52a1\u7aef\u8fd0\u884c\u65f6 API\uff0c\u5728\u7279\u5b9a\u7684\u751f\u547d\u5468\u671f\u5bf9\u670d\u52a1\u7aef\u8fdb\u884c\u5b9a\u5236\u3002\u63d0\u4f9b\u8fd9\u79cd\u65b9\u5f0f\u7684\u76ee\u7684\u662f\u5728\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u8005\u5e76\u4e0d\u9700\u8981\u63a7\u5236\u5b8c\u6574\u7684 Web Server\uff0c\u53ea\u9700\u8981\u6dfb\u52a0\u670d\u52a1\u7aef\u903b\u8f91\u5373\u53ef\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u8fd9\u79cd\u65b9\u5f0f\u65e0\u6cd5\u63a7\u5236\u5b8c\u6574\u7684 Web Server\uff0c\u5e76\u4e14\u6269\u5c55\u903b\u8f91",(0,n.jsx)(s.strong,{children:"\u53ea\u5728\u8bf7\u6c42\u9875\u9762\u65f6\u751f\u6548"}),"\u3002\u56e0\u6b64\uff0c\u5b83\u9002\u7528\u4e8e\u670d\u52a1\u7aef\u903b\u8f91\u76f8\u5bf9\u7b80\u5355\uff0c\u4e0d\u5e0c\u671b\u989d\u5916\u521b\u5efa BFF \u6216\u8005 BFF \u548c\u9875\u9762\u65e0\u9700\u516c\u7528\u670d\u52a1\u7aef\u903b\u8f91\u573a\u666f\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c ",(0,n.jsx)(s.code,{children:"pnpm run new"})," \u547d\u4ee4\uff0c\u5f00\u542f\u300c\u81ea\u5b9a\u4e49 Web Serve\u300d\u529f\u80fd\uff1a"]}),"\n",(0,n.jsxs)(s.div,{className:"language-bash",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u521b\u5efa\u5de5\u7a0b\u5143\u7d20"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" \u521b\u5efa\u5de5\u7a0b\u5143\u7d20 \u65b0\u5efa\u300c\u81ea\u5b9a\u4e49 Web Server\u300d\u6e90\u7801\u76ee\u5f55"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.p,{children:["\u6267\u884c\u547d\u4ee4\u540e\uff0c\u5728 ",(0,n.jsx)(s.code,{children:"modern.config.ts"})," \u4e2d\u6ce8\u518c ",(0,n.jsx)(s.code,{children:"@modern-js/plugin-server"})," \u63d2\u4ef6:"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" serverPlugin "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/plugin-server'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"serverPlugin"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.p,{children:["\u5f00\u542f\u529f\u80fd\u540e\uff0c\u9879\u76ee\u76ee\u5f55\u4e0b\u4f1a\u81ea\u52a8\u521b\u5efa ",(0,n.jsx)(s.code,{children:"server/index.ts"})," \u6587\u4ef6\uff0c\u53ef\u4ee5\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u7f16\u5199\u81ea\u5b9a\u4e49\u903b\u8f91\u3002Modern.js \u63d0\u4f9b\u4e86 ",(0,n.jsx)(s.strong,{children:"Hook"})," \u4e0e ",(0,n.jsx)(s.strong,{children:"Middleware"})," \u4e24\u7c7b API \u6765\u6269\u5c55 Web Server\u3002"]}),"\n",(0,n.jsxs)(s.h3,{id:"hook",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"}),"Hook"]}),"\n",(0,n.jsx)(s.p,{children:"Modern.js \u63d0\u4f9b\u7684 Hook \u7528\u4e8e\u63a7\u5236 Web Server \u4e2d\u7684\u5185\u7f6e\u903b\u8f91\uff0c\u6240\u6709\u7684\u9875\u9762\u8bf7\u6c42\u90fd\u4f1a\u7ecf\u8fc7 Hook\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u76ee\u524d\u63d0\u4f9b\u4e86\u4e24\u79cd Hook\uff0c\u5206\u522b\u662f ",(0,n.jsx)(s.code,{children:"AfterMatch"})," \u548c ",(0,n.jsx)(s.code,{children:"AfterRender"}),"\uff0c\u53ef\u4ee5\u7528\u4e8e\u4fee\u6539\u6e32\u67d3\u7ed3\u679c\u3002\u53ef\u4ee5\u5728 ",(0,n.jsx)(s.code,{children:"server/index.ts"})," \u4e2d\u8fd9\u6837\u5199\uff1a"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { AfterMatchHook"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" AfterRenderHook } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/server'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"afterMatch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AfterMatchHook"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (ctx"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" next) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"next"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"afterRender"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AfterRenderHook"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (ctx"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" next) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"next"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(s.p,{children:"\u9879\u76ee\u5728\u4f7f\u7528 Hook \u65f6\uff0c\u5e94\u8be5\u6709\u4ee5\u4e0b\u6700\u4f73\u5b9e\u8df5\uff1a"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\u5728 afterMatch \u4e2d\u505a\u6743\u9650\u6821\u9a8c\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u5728 afterMatch \u505a Rewrite \u548c Redirect\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u5728 afterRender \u4e2d\u505a HTML \u5185\u5bb9\u6ce8\u5165\u3002"}),"\n"]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive note",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsxs)(s.p,{children:["\n\u8be6\u7ec6 API \u548c\u66f4\u591a\u7528\u6cd5\u53ef\u4ee5\u67e5\u770b ",(0,n.jsx)(s.a,{href:"/apis/app/runtime/web-server/hook.html",children:"Hook"}),"\u3002"]})})]}),"\n",(0,n.jsxs)(s.h3,{id:"middleware",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"}),"Middleware"]}),"\n",(0,n.jsx)(s.p,{children:"\u5bf9\u4e8e\u67d0\u4e9b\u9879\u76ee\uff0c\u53ef\u80fd\u5728\u670d\u52a1\u7aef\u6709\u66f4\u591a\u7684\u9700\u6c42\uff0cModern.js \u63d0\u4f9b\u4e86 Middleware \u4e3a Web Server \u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\u3002\u5b83\u53ea\u80fd\u8fd0\u884c\u5728 Node \u73af\u5883\u4e0b\uff0c\u56e0\u6b64\u5982\u679c\u9879\u76ee\u88ab\u90e8\u7f72\u5230\u5176\u4ed6\u73af\u5883\u4e2d\uff0c\u5982 Worker \u73af\u5883\uff0c\u5219\u4e0d\u53ef\u4ee5\u4f7f\u7528 Middleware\u3002"}),"\n",(0,n.jsx)(s.p,{children:"Modern.js \u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e00\u5957 API \u4f9b\u9879\u76ee\u4f7f\u7528\uff1a"}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Middlewre } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/server'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"middleware"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (context"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" next) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { source: { "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"req"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"res"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" } } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" context;"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"req"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".url);"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"next"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive note",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsxs)(s.p,{children:["\n\u8be6\u7ec6 API \u548c\u66f4\u591a\u7528\u6cd5\u53ef\u4ee5\u67e5\u770b ",(0,n.jsx)(s.a,{href:"/apis/app/runtime/web-server/middleware.html",children:"Middleware"}),"\u3002"]})})]}),"\n",(0,n.jsx)(s.p,{children:"\u9879\u76ee\u5728\u4f7f\u7528 Middleware \u65f6\uff0c\u5e94\u8be5\u6709\u4ee5\u4e0b\u6700\u4f73\u5b9e\u8df5\uff1a"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\u5728 Middleware \u4e2d\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c\u539f\u751f\u7684\u8bf7\u6c42\u3001\u54cd\u5e94\u5bf9\u8c61\uff0c\u505a\u6570\u636e\u6253\u70b9\u3001\u6ce8\u5165 SSR \u6e32\u67d3\u53ef\u80fd\u7528\u5230\u7684 Node \u670d\u52a1\uff08\u6570\u636e\u5e93\u3001Redis \u7b49\uff09\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u5728 Middleware \u91cc\u53ef\u4ee5\u505a\u7c7b\u4f3c\u529f\u80fd\u6253\u6807\u3001\u722c\u866b\u4f18\u5316\u7b49\u529f\u80fd\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u5728 Middleware \u91cc\u53ef\u4ee5\u65e0\u89c6\u540e\u7eed\u9ed8\u8ba4\u6e32\u67d3\uff0c\u81ea\u5b9a\u4e49\u6e32\u67d3\u6d41\u7a0b\u3002"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u603b\u7684\u6765\u8bf4\uff0cCSR \u9879\u76ee\u4e2d\uff0c\u4f7f\u7528 Hook \u57fa\u672c\u80fd\u6ee1\u8db3\u7b80\u5355\u573a\u666f\u7684\u6240\u6709\u9700\u6c42\u3002SSR \u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 Middleware \u505a\u66f4\u590d\u6742\u7684 Node \u6269\u5c55\u3002"})}),"\n",(0,n.jsxs)(s.h2,{id:"\u901a\u8fc7-bff-\u6258\u7ba1\u9875\u9762\u8bf7\u6c42",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u901a\u8fc7-bff-\u6258\u7ba1\u9875\u9762\u8bf7\u6c42",children:"#"}),"\u901a\u8fc7 BFF \u6258\u7ba1\u9875\u9762\u8bf7\u6c42"]}),"\n",(0,n.jsx)(s.p,{children:"\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff0c\u662f\u5229\u7528 BFF \u6765\u6258\u7ba1\u9875\u9762\u6e32\u67d3\uff0c\u8fd9\u79cd\u65b9\u5f0f\u4e0b\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u4f1a\u5148\u6253\u5230 BFF \u7684\u670d\u52a1\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u56e0\u4e3a\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u901a\u8fc7 BFF \u7edf\u4e00\u63a7\u5236\u6240\u6709\u8bf7\u6c42\u7684\u670d\u52a1\u7aef\u903b\u8f91\u3002\u56e0\u6b64\uff0c\u5b83\u9002\u7528\u4e8e\u670d\u52a1\u7aef\u903b\u8f91\u590d\u6742\uff0cBFF \u548c\u9875\u9762\u9700\u8981\u516c\u7528\u670d\u52a1\u7aef\u903b\u8f91\u7684\u573a\u666f\u3002\u4f46\u5b83\u6574\u4f53\u8fd8\u662f\u4f9d\u6258\u4e8e Modern.js \u7684 Web Server \u8fd0\u884c\uff0c\u65e0\u6cd5\u5c06\u903b\u8f91\u8fd0\u884c\u5728\u5df2\u6709\u7684\u670d\u52a1\u4e0a\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u9700\u8981\u5148\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"pnpm new"})," \u5f00\u542f\u300cBFF\u300d\u529f\u80fd\u3002\u7136\u540e\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,n.jsx)(s.a,{href:"/configure/app/bff/enable-handle-web.html",children:(0,n.jsx)(s.code,{children:"bff.enableHandleWeb"})})," \u914d\u7f6e\uff1a"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  bff"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    enableHandleWeb"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.p,{children:["\u5f53\u8be5\u503c\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(s.code,{children:"true"})," \u65f6\uff0c\u9875\u9762\u8bf7\u6c42\u6d41\u91cf\u4e5f\u4f1a\u7ecf\u8fc7 BFF\uff0c\u5e76\u4e14 Modern.js \u5185\u7f6e\u7684\u9875\u9762\u6e32\u67d3\u7684\u903b\u8f91\u9ed8\u8ba4\u4f1a\u4f5c\u4e3a BFF \u670d\u52a1\u7684\u6700\u540e\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u8fd0\u884c\u3002"]}),"\n",(0,n.jsxs)(s.h2,{id:"\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684-web-server",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684-web-server",children:"#"}),"\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684 Web Server"]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive note",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsx)(s.p,{children:"\n\u656c\u8bf7\u671f\u5f85"})})]})]})}s.default=function(e={}){const{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}}}]);