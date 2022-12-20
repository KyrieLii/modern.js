(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{327:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-webpack-inspector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack-inspector"}},[t._v("#")]),t._v(" 使用 Webpack Inspector")]),t._v(" "),a("p",[t._v("Builder 内置了 "),a("a",{attrs:{href:"https://github.com/modern-js-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack inspector"),a("OutboundLink")],1),t._v(" 来辅助调试 webpack 构建问题。")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("由于 webpack 内部的工作流程比较黑盒，在使用 webpack 时，我们常常会遇到如下的一些问题:")]),t._v(" "),a("ul",[a("li",[t._v("在使用上层框架时，不知道最终生成的 webpack 配置包含哪些内容。")]),t._v(" "),a("li",[t._v("每个模块会经过不同的 loader 处理，经过各个 loader 的编译结果难以感知。")]),t._v(" "),a("li",[t._v("难以感知 webpack 各个编译环节 (比如 babel-loader、ts-loader) 的耗时情况。")])]),t._v(" "),a("p",[t._v("为了更方便地进行 webpack 项目的错误排查、性能分析及 loader 开发，我们在 Builder 中内置了 "),a("a",{attrs:{href:"https://github.com/modern-js-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack inspector"),a("OutboundLink")],1),t._v(" 工具。")]),t._v(" "),a("h2",{attrs:{id:"启用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用"}},[t._v("#")]),t._v(" 启用")]),t._v(" "),a("p",[t._v("你可以通过 "),a("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-inspector"}},[t._v("tools.inspector")]),t._v(" 配置项来开启 webpack inspector:")],1),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tools"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inspector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("为了避免 inspector 影响正常开发，建议配置仅在 DEBUG 时开启 inspector：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tools"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inspector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEBUG")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("添加以上配置后，当你执行 "),a("code",[t._v("DEBUG=true pnpm dev")]),t._v(" 时，Builder 会在编译完成后启动 inspector，此时 Shell 中可以看到如下信息：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("info    Starting dev server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n【Webpack Inspector】🔥 started at http://localhost:3333\n")])])]),a("p",[t._v("打开 "),a("code",[t._v("http://localhost:3333")]),t._v(" 地址，即可访问 inspector 的调试面板。")]),t._v(" "),a("h2",{attrs:{id:"调试面板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试面板"}},[t._v("#")]),t._v(" 调试面板")]),t._v(" "),a("p",[t._v("Inspector 的调试面板提供了多种模式，你可以通过右上角的开关进行切换。")]),t._v(" "),a("h3",{attrs:{id:"配置预览模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置预览模式"}},[t._v("#")]),t._v(" 配置预览模式")]),t._v(" "),a("p",[t._v("面板的默认模式为配置预览模式。此模式下可以查看 webpack 内部所有的配置信息，配置对象可自由展开和折叠:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/39248c0f-b1cd-4ea5-b522-3ebba7569497.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"列表模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表模式"}},[t._v("#")]),t._v(" 列表模式")]),t._v(" "),a("p",[t._v("此模式下会展示出所有的模块信息:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/8ff3bba0-7824-43b3-996f-7a3b5d2c4f59.png",alt:""}})]),t._v(" "),a("p",[t._v("点击列表项会出现模块的编译详情信息:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/output.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"loader-统计数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader-统计数据"}},[t._v("#")]),t._v(" Loader 统计数据")]),t._v(" "),a("p",[t._v("点击如下的开关，可以查看 Loader 的统计数据:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/c0697cd6-963f-4169-8dc3-dc178641a861.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"依赖图模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖图模式"}},[t._v("#")]),t._v(" 依赖图模式")]),t._v(" "),a("p",[t._v("此模式下会展示出所有模块的依赖关系：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/9ee30176-e993-4638-83d0-add14484b1b2.png",alt:""}})]),t._v(" "),a("p",[t._v("点击图中的节点也会呈现具体模块的编译详情：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/6f4b6cc7-94c8-446a-8b64-86ca98fbdca7.png",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("出于性能考虑，模块数量 > 100 时不会展示依赖图。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);