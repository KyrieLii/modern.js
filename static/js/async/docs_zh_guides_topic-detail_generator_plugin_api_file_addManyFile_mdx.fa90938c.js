(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_file_addManyFile_mdx"],{98957:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},toc:function(){return o},title:function(){return t},default:function(){return c}});var r=n("12151"),l=n("21447");let i={sidebar_position:5},o=[{id:"type",text:"type",depth:2},{id:"destination",text:"destination",depth:2},{id:"templatefiles",text:"templateFiles",depth:2},{id:"templatebase",text:"templateBase",depth:2},{id:"filenamefunc",text:"fileNameFunc",depth:2},{id:"data",text:"data",depth:2}],t="addManyFile";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h2:"h2"},(0,l.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"addmanyfile",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addmanyfile",children:"#"}),"addManyFile"]}),"\n",(0,r.jsxs)(s.p,{children:["批量添加文件。用于添加 ",(0,r.jsx)(s.code,{children:"templates"})," 目录的多个文件。"]}),"\n",(0,r.jsx)(s.p,{children:"该方法可用于任何文件类型，对于二进制以外的文件类型，添加文件时会进行 Handlebars 渲染。"}),"\n",(0,r.jsxs)(s.p,{children:["该方法可在 ",(0,r.jsx)(s.code,{children:"onForged"})," 生命周期的 ",(0,r.jsx)(s.code,{children:"api"})," 参数上获取。"]}),"\n",(0,r.jsx)(s.p,{children:"其类型定义为："}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddManyFilesParams"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FileType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  destination"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  templateFiles"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (() "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[]);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  templateBase"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fileNameFunc"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (name"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  data"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">; "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// template data"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ForgedAPI"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"addManyFiles"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (params"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddManyFilesParams"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"type",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#type",children:"#"}),"type"]}),"\n",(0,r.jsxs)(s.p,{children:["文件类型，具体可查看",(0,r.jsx)(s.a,{href:"/guides/topic-detail/generator/plugin/api/file/introduce.html#%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",children:"文件类型"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"destination",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#destination",children:"#"}),"destination"]}),"\n",(0,r.jsx)(s.p,{children:"创建的目标文件夹路径。由于是批量添加文件，这里填写需要写入的文件夹路径即可。"}),"\n",(0,r.jsxs)(s.h2,{id:"templatefiles",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#templatefiles",children:"#"}),"templateFiles"]}),"\n",(0,r.jsxs)(s.p,{children:["模板文件列表。\n该参数支持函数参数，也支持 ",(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/globby",target:"_blank",rel:"noopener noreferrer",children:"globby 正则"}),"。"]}),"\n",(0,r.jsxs)(s.h2,{id:"templatebase",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#templatebase",children:"#"}),"templateBase"]}),"\n",(0,r.jsxs)(s.p,{children:["模板基础路径。\n模板路径通常为同一个目录下的模板文件，如果渲染结果需要去除掉模板文件前缀目录，可使用该字段。\n模板渲染文件内容将等于 ",(0,r.jsx)(s.code,{children:"templateFiles - templateBase"})]}),"\n",(0,r.jsxs)(s.h2,{id:"filenamefunc",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#filenamefunc",children:"#"}),"fileNameFunc"]}),"\n",(0,r.jsx)(s.p,{children:"重命名文件函数，在该函数中将一次传入渲染的文件名称，可在该函数中进行重命名。"}),"\n",(0,r.jsxs)(s.h2,{id:"data",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#data",children:"#"}),"data"]}),"\n",(0,r.jsx)(s.p,{children:"Handlebars 渲染数据。"})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);