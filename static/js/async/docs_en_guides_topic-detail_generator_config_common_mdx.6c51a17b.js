(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_topic-detail_generator_config_common_mdx"],{40953:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},toc:function(){return t},title:function(){return d},default:function(){return o}});var i=s("12151"),r=s("21447");let c={sidebar_position:1},t=[{id:"solution",text:"solution",depth:3},{id:"scenes",text:"scenes",depth:3},{id:"language",text:"language",depth:3},{id:"packagemanager",text:"packageManager",depth:3},{id:"other-configurations",text:"Other configurations",depth:2},{id:"noneedinstall",text:"noNeedInstall",depth:3},{id:"noneedgit",text:"noNeedGit",depth:3},{id:"successinfo",text:"successInfo",depth:3},{id:"ismonoreposubproject",text:"isMonorepoSubProject",depth:3},{id:"istest",text:"isTest",depth:3},{id:"ispublic",text:"isPublic",depth:3}],d="Generator Configuration";function l(e){let n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",ul:"ul",li:"li",div:"div",code:"code",h2:"h2",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"generator-configuration",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#generator-configuration",children:"#"}),"Generator Configuration"]}),"\n",(0,i.jsxs)(n.h3,{id:"solution",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution",children:"#"}),"solution"]}),"\n",(0,i.jsx)(n.p,{children:"Engineering solution type (solution), the options are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Application(mwa)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Module(module)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Monorepo"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["\nSolution configuration can only be used in the ",(0,i.jsx)(n.code,{children:"--config"})," parameter of ",(0,i.jsx)(n.code,{children:"@modern-js/create"}),", not by setting the default value in the generator plugin."]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"scenes",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#scenes",children:"#"}),"scenes"]}),"\n",(0,i.jsx)(n.p,{children:"Project scenarios (scenes), when using the generator plugin that creates the project scene type, this value is the key value of the corresponding generator plugin."}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["\nscenes configuration can only be used in the ",(0,i.jsx)(n.code,{children:"--config"})," parameter of ",(0,i.jsx)(n.code,{children:"@modern-js/create"}),", not by setting the default value in the generator plugin."]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"language",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#language",children:"#"}),"language"]}),"\n",(0,i.jsx)(n.p,{children:"Development language (language), the options are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"TS(ts)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ES6+(js)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"packagemanager",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagemanager",children:"#"}),"packageManager"]}),"\n",(0,i.jsx)(n.p,{children:"Package management tool (packageManager), the options are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"pnpm(pnpm)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Yarn(yarn)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["\nIn the custom type of the generator plugin to create a project scenario, only the ",(0,i.jsx)(n.code,{children:"packageManager"})," configuration is provided by default."]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"other-configurations",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-configurations",children:"#"}),"Other configurations"]}),"\n",(0,i.jsxs)(n.h3,{id:"noneedinstall",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#noneedinstall",children:"#"}),"noNeedInstall"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether to skip the dependency installation."}),"\n",(0,i.jsxs)(n.h3,{id:"noneedgit",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#noneedgit",children:"#"}),"noNeedGit"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether to skip git initialization and commit initial commit."}),"\n",(0,i.jsxs)(n.h3,{id:"successinfo",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#successinfo",children:"#"}),"successInfo"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," Command operation prompts for different project schemes."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Customize prompt information to create project success."}),"\n",(0,i.jsxs)(n.h3,{id:"ismonoreposubproject",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ismonoreposubproject",children:"#"}),"isMonorepoSubProject"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether it is a Monorepo subproject."}),"\n",(0,i.jsxs)(n.h3,{id:"istest",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#istest",children:"#"}),"isTest"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Works on an Application project to identify whether it is a test project."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": create project to ",(0,i.jsx)(n.code,{children:"examples/"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": create project to ",(0,i.jsx)(n.code,{children:"apps/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"ispublic",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ispublic",children:"#"}),"isPublic"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Used in the Module project to identify whether it needs to be published to npm."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": create project to ",(0,i.jsx)(n.code,{children:"packages/"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": create project to ",(0,i.jsx)(n.code,{children:"features/"})]}),"\n"]})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);