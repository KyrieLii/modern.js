(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{276:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"chunk-splitting-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chunk-splitting-practice"}},[t._v("#")]),t._v(" Chunk Splitting Practice")]),t._v(" "),s("p",[t._v("A great chunk splitting strategy is very important to improve the loading performance of the application. It can make full use of the browser's caching mechanism to reduce the number of requests and improve the loading speed of the application.")]),t._v(" "),s("p",[t._v("A variety of chunk splitting strategies are built into Builder, which can meet the needs of most applications. You can also customize the chunk splitting config according to your own business scenarios.")]),t._v(" "),s("h2",{attrs:{id:"splitting-strategies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitting-strategies"}},[t._v("#")]),t._v(" Splitting Strategies")]),t._v(" "),s("blockquote",[s("p",[t._v("The chunk splitting config of Builder is in "),s("RouterLink",{attrs:{to:"/en/api/config-performance.html#performance-chunksplit"}},[t._v("performance.chunkSplit")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("The Builder includes the following chunk splitting strategies:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("split-by-experience")]),t._v(": Built-in splitting strategies (experienced splitting strategies by Builder).")]),t._v(" "),s("li",[s("code",[t._v("split-by-module")]),t._v(": Split according to modules, each NPM package is a chunk.")]),t._v(" "),s("li",[s("code",[t._v("all-in-one")]),t._v(": Both business code and third-party code are in one chunk.")]),t._v(" "),s("li",[s("code",[t._v("single-vendor:")]),t._v(" Third-party code is in a vendor chunk.")]),t._v(" "),s("li",[s("code",[t._v("split-by-size")]),t._v(": Split according to chunk size.")])]),t._v(" "),s("h3",{attrs:{id:"split-by-experience"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-by-experience"}},[t._v("#")]),t._v(" split-by-experience")]),t._v(" "),s("h4",{attrs:{id:"behaviour"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behaviour"}},[t._v("#")]),t._v(" behaviour")]),t._v(" "),s("p",[t._v("Based on past experience, built-in split groups include:")]),t._v(" "),s("ul",[s("li",[t._v("React (react, react-dom)")]),t._v(" "),s("li",[t._v("Router (react-router, react-router-dom, history)")]),t._v(" "),s("li",[t._v("Polyfill (core-js, @babel/runtime)")]),t._v(" "),s("li",[t._v("Semi (@ies/semi, @douyinfe/semi-ui)")]),t._v(" "),s("li",[t._v("Arco (@arco-design/web-react)")]),t._v(" "),s("li",[t._v("Lodash (lodash, lodash-es)")])]),t._v(" "),s("p",[t._v("This strategy groups commonly used packages and then splits them into separate chunks. Generally, the number of chunks is not large, which is suitable for most applications and is also our recommended  strategy.")]),t._v(" "),s("h4",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" config")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-experience'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"split-by-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-by-module"}},[t._v("#")]),t._v(" split-by-module")]),t._v(" "),s("h4",{attrs:{id:"behaviour-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behaviour-2"}},[t._v("#")]),t._v(" behaviour")]),t._v(" "),s("p",[t._v("Split each NPM package into a Chunk.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("warning")]),t._v(" "),s("p",[t._v("This strategy will split the node_modules in the most granular way, and at the same time, under HTTP/2, multiplexing will speed up the loading time of resources.However, in non-HTTP/2 environments, it needs to be used with caution because of HTTP head-of-line blocking problem.")])]),t._v(" "),s("h4",{attrs:{id:"config-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-2"}},[t._v("#")]),t._v(" config")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"all-in-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all-in-one"}},[t._v("#")]),t._v(" all-in-one")]),t._v(" "),s("h4",{attrs:{id:"behaviour-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behaviour-3"}},[t._v("#")]),t._v(" behaviour")]),t._v(" "),s("p",[t._v("This strategy puts business code and third-party dependencies in the same Chunk.")]),t._v(" "),s("h4",{attrs:{id:"config-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-3"}},[t._v("#")]),t._v(" config")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all-in-one'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"single-vendor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-vendor"}},[t._v("#")]),t._v(" single-vendor")]),t._v(" "),s("h4",{attrs:{id:"behaviour-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behaviour-4"}},[t._v("#")]),t._v(" behaviour")]),t._v(" "),s("p",[t._v("This strategy puts third-party dependencies in one Chunk, and business code in another Chunk.")]),t._v(" "),s("h4",{attrs:{id:"config-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-4"}},[t._v("#")]),t._v(" config")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single-vendor'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"split-by-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-by-size"}},[t._v("#")]),t._v(" split-by-size")]),t._v(" "),s("h4",{attrs:{id:"behaviour-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behaviour-5"}},[t._v("#")]),t._v(" behaviour")]),t._v(" "),s("p",[t._v("Under this strategy, after setting "),s("code",[t._v("minSize")]),t._v(", "),s("code",[t._v("maxSize")]),t._v(" to a fixed value, webpack will automatically split them without extra config.")]),t._v(" "),s("h4",{attrs:{id:"config-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-5"}},[t._v("#")]),t._v(" config")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-size'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"custom-splitting-strategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-splitting-strategy"}},[t._v("#")]),t._v(" Custom Splitting Strategy")]),t._v(" "),s("p",[t._v("In addition to using the built-in strategies, you can also customize the splitting strategy to meet more customization needs. Custom strategy is divided into two parts:")]),t._v(" "),s("ul",[s("li",[t._v("Custom group")]),t._v(" "),s("li",[t._v("Custom webpack "),s("code",[t._v("splitChunks")]),t._v(" config")])]),t._v(" "),s("p",[t._v("It is worth noting that these two custom capabilities can be used together with the built-in  strategy, that is, you can use the built-in strategy to split commonly used packages, and then use the custom function to split other packages.")]),t._v(" "),s("h3",{attrs:{id:"custom-group"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-group"}},[t._v("#")]),t._v(" Custom Group")]),t._v(" "),s("p",[t._v("Builder supports custom group, which is more flexible than the built-in strategies, and simpler than writing webpack config. For example:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-experience'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      forceSplitting"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Split lodash into a Chunk")]),t._v("\n        lodash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules\\/lodash")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules\\/lodash-es")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Through "),s("code",[t._v("forceSplitting")]),t._v(" config, you can easily split some packages into a Chunk.")]),t._v(" "),s("h3",{attrs:{id:"custom-webpack-splitchunks-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-webpack-splitchunks-config"}},[t._v("#")]),t._v(" Custom Webpack "),s("code",[t._v("splitChunks")]),t._v(" Config")]),t._v(" "),s("p",[t._v("In addition to using custom grouping, you can also customize the native webpack config through "),s("code",[t._v("override")]),t._v(", such as:")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  performance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunkSplit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'split-by-experience'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      override"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chunks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        minSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The config in "),s("code",[t._v("override")]),t._v(" will be merged with the webpack config. For specific config details, please refer to "),s("a",{attrs:{href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack official documentation"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);