(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{459:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"matman-config-js-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matman-config-js-配置"}},[t._v("#")]),t._v(" matman.config.js 配置")]),t._v(" "),a("h2",{attrs:{id:"_1-文件示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件示例"}},[t._v("#")]),t._v(" 1. 文件示例")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("目前仅支持 JS 配置文件")]),t._v(" "),a("li",[t._v("在项目根目录下新建 "),a("code",[t._v("matman.config.js")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rootPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-含义介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-含义介绍"}},[t._v("#")]),t._v(" 2. 含义介绍")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("字段名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("rootPath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("String")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("__dirname")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("项目根目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("caseModulesPath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("String")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("path.resolve(rootPath, './src/case_modules')")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("测试对象的根目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("crawlerBuildPath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("String")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("path.resolve(rootPath, './build/crawler-script')")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("爬虫脚本构建之后的目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("crawlerInjectJQuery")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否自动注入 JQuery")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("screenshotPath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("String")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("path.resolve(rootPath, './build/screenshot_output')")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("屏幕截图保存的路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("coveragePath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("String")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("path.resolve(rootPath, './build/coverage_output')")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("覆盖率文件保存路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("matmanResultPath")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("String")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("path.resolve(rootPath, './build/matman_result_output')")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("matman 执行结果保存路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("isDevBuild")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("false")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否为开发模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("setupOptions")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("Object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("[]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("供 IDE 使用的配置，目前阶段大家不需要关注")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-类型定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-类型定义"}},[t._v("#")]),t._v(" 3. 类型定义")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 供 IDE 使用的启动项目的配置\n *\n * @member name 启动项目的名称\n * @member cwd 运行命令的文件夹\n * @member order 需要运行的命令\n * @member auto 是否在初始化时自动运行\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SetupOptions")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cwd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  order"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  auto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * matman 的配置类型\n * 同时为配置文件的结构, 当前对配置文件的解析只限制为 JS\n *\n * @member rootPath  matman 项目的根目录\n * @member caseModulesPath 测试案例的根目录\n * @member crawlerBuildPath 前端爬虫脚本构建之后的目录\n * @member crawlerInjectJQuery 前端爬虫脚本中是否注入jQuery\n * @member screenshotPath 屏幕截图保存的路径\n * @member coveragePath 覆盖率文件保存的路径\n * @member matmanResultPath MatmanResult 执行结果数据保存的路径\n * @member isDevBuild 是否为开发模式\n * @member setupOptions 提供 IDE 的启动命令\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MatmanConfigOpts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rootPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  caseModulesPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  crawlerBuildPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  crawlerInjectJQuery"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  screenshotPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  coveragePath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  matmanResultPath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  isDevBuild"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  setupOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SetupOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);