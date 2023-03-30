(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_file_addFile_mdx"],{77952:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return n},toc:function(){return t},title:function(){return o},default:function(){return c}});var l=r("12151"),i=r("21447");let n={sidebar_position:4},t=[{id:"type",text:"type",depth:2},{id:"file",text:"file",depth:2},{id:"template",text:"template",depth:2},{id:"templatefile",text:"templateFile",depth:2},{id:"force",text:"force",depth:2},{id:"data",text:"data",depth:2}],o="addFile";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h2:"h2"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"addfile",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addfile",children:"#"}),"addFile"]}),"\n",(0,l.jsxs)(s.p,{children:["Add a single file. Use to add a single template file to the ",(0,l.jsx)(s.code,{children:"templates"})," directory or add to a template file directly using templates."]}),"\n",(0,l.jsx)(s.p,{children:"This method can be used with any file type, for file types other than binary, Handlebars render is performed when files are added."}),"\n",(0,l.jsxs)(s.p,{children:["This method is available on the ",(0,l.jsx)(s.code,{children:"onForged"})," time to live API parameter."]}),"\n",(0,l.jsx)(s.p,{children:"Its type is defined as:"}),"\n",(0,l.jsxs)(s.div,{className:"language-ts",children:[(0,l.jsx)(s.div,{className:""}),(0,l.jsxs)(s.div,{className:"modern-code-content",children:[(0,l.jsx)(s.button,{className:"copy"}),(0,l.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddFileParams"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  type"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FileType"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  file"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  template"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  templateFile"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  force"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  data"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ForgedAPI"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"addFile"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (params"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddFileParams"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(s.h2,{id:"type",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"}),"type"]}),"\n",(0,l.jsxs)(s.p,{children:["File type, specific viewable",(0,l.jsx)(s.a,{href:"/en/guides/topic-detail/generator/plugin/api/file/introduce.html",children:"File type"}),"."]}),"\n",(0,l.jsxs)(s.h2,{id:"file",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#file",children:"#"}),"file"]}),"\n",(0,l.jsx)(s.p,{children:"The path to the created target file."}),"\n",(0,l.jsxs)(s.h2,{id:"template",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#template",children:"#"}),"template"]}),"\n",(0,l.jsxs)(s.p,{children:["File template, configuration This field value can be used directly for template render files. The priority is lower than ",(0,l.jsx)(s.code,{children:"templateFile"}),"."]}),"\n",(0,l.jsxs)(s.h2,{id:"templatefile",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#templatefile",children:"#"}),"templateFile"]}),"\n",(0,l.jsxs)(s.p,{children:["Template file, the template file path used for rendering, its value is the relative path of ",(0,l.jsx)(s.code,{children:"templates"}),"."]}),"\n",(0,l.jsxs)(s.h2,{id:"force",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#force",children:"#"}),"force"]}),"\n",(0,l.jsx)(s.p,{children:"Whether to force coverage, when the added file already exists, an error will be reported in conflict by default. When setting this value to true, coverage can be forced."}),"\n",(0,l.jsxs)(s.h2,{id:"data",children:[(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#data",children:"#"}),"data"]}),"\n",(0,l.jsx)(s.p,{children:"Handlebars renders data."})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}}}]);