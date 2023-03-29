(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_basic_json-files_md"],{14172:function(s,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var l in e)Object.defineProperty(s,l,{enumerable:!0,get:e[l]})}(e,{frontmatter:function(){return o},toc:function(){return i},title:function(){return a},default:function(){return t}});var n=l("12151"),r=l("21447");let o=void 0,i=[{id:"json-file",text:"JSON file",depth:2},{id:"example",text:"Example",depth:3},{id:"named-import",text:"Named Import",depth:3},{id:"yaml-file",text:"YAML file",depth:2},{id:"example-1",text:"Example",depth:3},{id:"add-type-declaration",text:"Add type declaration",depth:3},{id:"toml-file",text:"Toml file",depth:2},{id:"example-2",text:"Example",depth:3},{id:"add-type-declaration-1",text:"Add type declaration",depth:3}],a="Import JSON Files";function c(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",div:"div",button:"button",pre:"pre",code:"code",span:"span"},(0,r.useMDXComponents)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"import-json-files",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#import-json-files",children:"#"}),"Import JSON Files"]}),"\n",(0,n.jsxs)(e.p,{children:["Builder supports import JSON files in code, and also supports import ",(0,n.jsx)(e.a,{href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer",children:"YAML"})," and ",(0,n.jsx)(e.a,{href:"https://toml.io/en/",target:"_blank",rel:"noopener noreferrer",children:"Toml"})," files and converting them to JSON format."]}),"\n",(0,n.jsxs)(e.h2,{id:"json-file",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#json-file",children:"#"}),"JSON file"]}),"\n",(0,n.jsx)(e.p,{children:"You can import JSON files directly in JavaScript files."}),"\n",(0,n.jsxs)(e.h3,{id:"example",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,n.jsxs)(e.div,{className:"language-json",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"example.json"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"name"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"foo"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"items"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"index.js"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" example "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./example.json'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"example"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".name); "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 'foo';"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"example"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".items); "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// [1, 2];"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"named-import",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#named-import",children:"#"}),"Named Import"]}),"\n",(0,n.jsx)(e.p,{children:"Builder does not support importing JSON files via named import yet:"}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { name } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./example.json'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h2,{id:"yaml-file",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#yaml-file",children:"#"}),"YAML file"]}),"\n",(0,n.jsx)(e.p,{children:"YAML is a data serialization language commonly used for writing configuration files."}),"\n",(0,n.jsxs)(e.p,{children:["You can directly import ",(0,n.jsx)(e.code,{children:".yaml"})," or ",(0,n.jsx)(e.code,{children:".yml"})," files in JavaScript and they will be automatically converted to JSON format."]}),"\n",(0,n.jsxs)(e.h3,{id:"example-1",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-1",children:"#"}),"Example"]}),"\n",(0,n.jsxs)(e.div,{className:"language-yaml",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"example.yaml"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"---"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"hello"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"world"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"foo"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"bar"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"baz"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" example "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./example.yaml'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"example"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".hello); "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 'world';"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"example"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".foo); "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// { bar: 'baz' };"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"add-type-declaration",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"}),"Add type declaration"]}),"\n",(0,n.jsxs)(e.p,{children:["When you import a YAML file in your TypeScript code, please create a ",(0,n.jsx)(e.code,{children:"src/global.d.ts"})," file in your project and add the corresponding type declaration:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"src/global.d.ts"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"declare"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"module"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*.yaml'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"content"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" content;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"declare"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"module"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*.yml'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"content"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" content;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h2,{id:"toml-file",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toml-file",children:"#"}),"Toml file"]}),"\n",(0,n.jsx)(e.p,{children:"Toml is a semantically explicit, easy-to-read configuration file format."}),"\n",(0,n.jsxs)(e.p,{children:["You can directly import ",(0,n.jsx)(e.code,{children:".toml"})," files in JavaScript and it will be automatically converted to JSON format."]}),"\n",(0,n.jsxs)(e.h3,{id:"example-2",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-2",children:"#"}),"Example"]}),"\n",(0,n.jsxs)(e.div,{className:"language-toml",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"example.toml"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"hello "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"world"'})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[foo]"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"bar "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"baz"'})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" example "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./example.toml'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"example"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".hello); "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 'world';"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"example"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".foo); "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// { bar: 'baz' };"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"add-type-declaration-1",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration-1",children:"#"}),"Add type declaration"]}),"\n",(0,n.jsxs)(e.p,{children:["When you import Toml files in TypeScript code, please create a ",(0,n.jsx)(e.code,{children:"src/global.d.ts"})," file in your project and add the corresponding type declarations:"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"src/global.d.ts"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"declare"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"module"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*.toml'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"content"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" content;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(c,s)})):c(s)}}}]);