(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{461:function(t,s,a){"use strict";a.r(s);var r=a(42),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"matmanresult-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matmanresult-对象"}},[t._v("#")]),t._v(" MatmanResult 对象")]),t._v(" "),a("blockquote",[a("p",[t._v("Matman 运行之后返回的格式化的结果，提供一些便捷的函数，帮助大家进行判断。")])]),t._v(" "),a("h2",{attrs:{id:"_1-结果对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-结果对象"}},[t._v("#")]),t._v(" 1. 结果对象")]),t._v(" "),a("p",[t._v("处理之后的数据如下：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用的 Runner 的名称")]),t._v("\n  runnerName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面爬虫返回的真实数据")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局监听到的请求等事件")]),t._v("\n  globalInfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    recorder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      queue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MatmanResultQueueItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      allRequestUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    isExistCoverageReport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 名称索引映射")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" dataIndexMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" queueHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-内建方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-内建方法"}},[t._v("#")]),t._v(" 2. 内建方法")]),t._v(" "),a("h3",{attrs:{id:"_2-1-tostring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-tostring"}},[t._v("#")]),t._v(" 2.1 toString")]),t._v(" "),a("blockquote",[a("p",[t._v("将对象中的数据转化为 "),a("code",[t._v("JSON")]),t._v(" 字符串")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-1-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-参数"}},[t._v("#")]),t._v(" 2.1.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("none")])]),t._v(" "),a("h4",{attrs:{id:"_2-1-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-返回值"}},[t._v("#")]),t._v(" 2.1.2 返回值")]),t._v(" "),a("p",[a("code",[t._v("JSON")]),t._v(" 字符串")]),t._v(" "),a("h3",{attrs:{id:"_2-2-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-get"}},[t._v("#")]),t._v(" 2.2 get")]),t._v(" "),a("blockquote",[a("p",[t._v("通过测试动作名字或者动作的索引（"),a("code",[t._v("不推荐")]),t._v("）获得数据")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-2-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-参数"}},[t._v("#")]),t._v(" 2.2.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("actionName：测试动作名字，可以是自定义的名字，也可以是数组索引（"),a("code",[t._v("string")]),t._v(" 或者 "),a("code",[t._v("number")]),t._v("）")])]),t._v(" "),a("h4",{attrs:{id:"_2-2-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-返回值"}},[t._v("#")]),t._v(" 2.2.2 返回值")]),t._v(" "),a("p",[t._v("指定的爬虫数据")]),t._v(" "),a("h3",{attrs:{id:"_2-3-getqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-getqueue"}},[t._v("#")]),t._v(" 2.3 getQueue")]),t._v(" "),a("blockquote",[a("p",[t._v("获得捕获到的请求队列")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MatmanResultQueueItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-3-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-参数"}},[t._v("#")]),t._v(" 2.3.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("none")])]),t._v(" "),a("h4",{attrs:{id:"_2-3-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-返回值"}},[t._v("#")]),t._v(" 2.3.2 返回值")]),t._v(" "),a("p",[t._v("请求队列 "),a("code",[t._v("MatmanResultQueueItem")]),t._v(" 数组")]),t._v(" "),a("h3",{attrs:{id:"_2-4-getnetwork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-getnetwork"}},[t._v("#")]),t._v(" 2.4 getNetwork")]),t._v(" "),a("blockquote",[a("p",[t._v("从结果队列中过滤出网络请求")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNetwork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ResourceType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MatmanResultQueueItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-4-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-参数"}},[t._v("#")]),t._v(" 2.4.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("resourceType：资源类型，定义如下：")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * nightmare 资源类型的枚举，详见 nightmare-handler 组件中的 RESOURCE_TYPE\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NightmareResourceType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mainFrame'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'subFrame'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylesheet'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xhr'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'other'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * puppeteer 资源类型的枚举\n * https://github.com/puppeteer/puppeteer/blob/v4.0.0/docs/api.md#httprequestresourcetype\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PuppeteerResourceType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'document'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylesheet'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'media'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'font'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'texttrack'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xhr'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fetch'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eventsource'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'websocket'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'manifest'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'other'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResourceType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PuppeteerResourceType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NightmareResourceType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-4-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-返回值"}},[t._v("#")]),t._v(" 2.4.2 返回值")]),t._v(" "),a("p",[t._v("请求队列 "),a("code",[t._v("MatmanResultQueueItem")]),t._v(" 数组")]),t._v(" "),a("h3",{attrs:{id:"_2-5-isexistinnetwork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-isexistinnetwork"}},[t._v("#")]),t._v(" 2.5 isExistInNetwork")]),t._v(" "),a("blockquote",[a("p",[t._v("通过传入的参数判断是否存在某个网络请求")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExistInNetwork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  partialURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  resourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ResourceType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-5-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-参数"}},[t._v("#")]),t._v(" 2.5.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("partialURL：请求的 URL")]),t._v(" "),a("li",[t._v("query：查询参数（可选）")]),t._v(" "),a("li",[t._v("resourceType：资源类型（可选）")]),t._v(" "),a("li",[t._v("status：状态（可选）")])]),t._v(" "),a("h4",{attrs:{id:"_2-5-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-2-返回值"}},[t._v("#")]),t._v(" 2.5.2 返回值")]),t._v(" "),a("p",[a("code",[t._v("Boolean")])]),t._v(" "),a("h3",{attrs:{id:"_2-6-isexistpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-isexistpage"}},[t._v("#")]),t._v(" 2.6 isExistPage")]),t._v(" "),a("blockquote",[a("p",[t._v("是否存在某个页面")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExistPage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("partialURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-6-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-1-参数"}},[t._v("#")]),t._v(" 2.6.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("partialURL：请求的 URL")]),t._v(" "),a("li",[t._v("query：查询参数（可选）")]),t._v(" "),a("li",[t._v("status：状态（可选）")])]),t._v(" "),a("h4",{attrs:{id:"_2-6-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-2-返回值"}},[t._v("#")]),t._v(" 2.6.2 返回值")]),t._v(" "),a("p",[a("code",[t._v("Boolean")])]),t._v(" "),a("h3",{attrs:{id:"_2-7-isexistxhr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-isexistxhr"}},[t._v("#")]),t._v(" 2.7 isExistXHR")]),t._v(" "),a("blockquote",[a("p",[t._v("是否存在某个 xhr 请求")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExistXHR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("partialURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-7-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-1-参数"}},[t._v("#")]),t._v(" 2.7.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("partialURL：请求的 URL")]),t._v(" "),a("li",[t._v("query：查询参数（可选）")]),t._v(" "),a("li",[t._v("status：状态（可选）")])]),t._v(" "),a("h4",{attrs:{id:"_2-7-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-2-返回值"}},[t._v("#")]),t._v(" 2.7.2 返回值")]),t._v(" "),a("p",[a("code",[t._v("Boolean")])]),t._v(" "),a("h3",{attrs:{id:"_2-8-isexistimage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-isexistimage"}},[t._v("#")]),t._v(" 2.8 isExistImage")]),t._v(" "),a("blockquote",[a("p",[t._v("是否存在某个 image 请求")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExistImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("partialURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-8-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-1-参数"}},[t._v("#")]),t._v(" 2.8.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("partialURL：请求的 URL")]),t._v(" "),a("li",[t._v("query：查询参数（可选）")]),t._v(" "),a("li",[t._v("status：状态（可选）")])]),t._v(" "),a("h4",{attrs:{id:"_2-8-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-2-返回值"}},[t._v("#")]),t._v(" 2.8.2 返回值")]),t._v(" "),a("p",[a("code",[t._v("Boolean")])]),t._v(" "),a("h3",{attrs:{id:"_2-9-isexiststylesheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-isexiststylesheet"}},[t._v("#")]),t._v(" 2.9 isExistStylesheet")]),t._v(" "),a("blockquote",[a("p",[t._v("是否存在某个对 CSS 样式表的请求")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExistStylesheet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("partialURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-9-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-1-参数"}},[t._v("#")]),t._v(" 2.9.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("partialURL：请求的 URL")]),t._v(" "),a("li",[t._v("query：查询参数（可选）")]),t._v(" "),a("li",[t._v("status：状态（可选）")])]),t._v(" "),a("h4",{attrs:{id:"_2-9-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-2-返回值"}},[t._v("#")]),t._v(" 2.9.2 返回值")]),t._v(" "),a("p",[a("code",[t._v("Boolean")])]),t._v(" "),a("h3",{attrs:{id:"_2-10-isexistscript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-isexistscript"}},[t._v("#")]),t._v(" 2.10 isExistScript")]),t._v(" "),a("blockquote",[a("p",[t._v("是否存在某个 script 请求")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExistScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("partialURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-10-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-1-参数"}},[t._v("#")]),t._v(" 2.10.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("partialURL：请求的 URL")]),t._v(" "),a("li",[t._v("query：查询参数（可选）")]),t._v(" "),a("li",[t._v("status：状态（可选）")])]),t._v(" "),a("h4",{attrs:{id:"_2-10-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-2-返回值"}},[t._v("#")]),t._v(" 2.10.2 返回值")]),t._v(" "),a("p",[a("code",[t._v("Boolean")])]),t._v(" "),a("h3",{attrs:{id:"_2-11-isexistjsbridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-isexistjsbridge"}},[t._v("#")]),t._v(" 2.11 isExistJSBridge")]),t._v(" "),a("blockquote",[a("p",[t._v("是否存在某个 JSBridge 的调用")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExistJSBridge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("partialURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-11-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-1-参数"}},[t._v("#")]),t._v(" 2.11.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("partialURL：请求的 URL")]),t._v(" "),a("li",[t._v("query：查询参数（可选）")])]),t._v(" "),a("h4",{attrs:{id:"_2-11-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-2-返回值"}},[t._v("#")]),t._v(" 2.11.2 返回值")]),t._v(" "),a("p",[a("code",[t._v("Boolean")])]),t._v(" "),a("h4",{attrs:{id:"_2-11-3-使用注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-3-使用注意"}},[t._v("#")]),t._v(" 2.11.3 使用注意")]),t._v(" "),a("p",[t._v("因为一些实现的问题，在使用中这个 API 可能会对用户代码有一定的侵入性。")]),t._v(" "),a("p",[t._v("如果在使用中发现此 API 的调用结果与实现不符，那么请检查结果文件。如果在 URL 列表中没有捕捉到指定的调用，我们需要大家在代码中添加如下语句：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("[e2e] ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这样输出在控制台的这条 URL 将被认为是 JSBridge 调用。")]),t._v(" "),a("h3",{attrs:{id:"_2-12-isexistjsconsole"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-isexistjsconsole"}},[t._v("#")]),t._v(" 2.12 isExistJSConsole")]),t._v(" "),a("blockquote",[a("p",[t._v("是否存在某个 console 输出")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isExistConsole")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("partialText"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" RegExp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isFullMatch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2-12-1-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-1-参数"}},[t._v("#")]),t._v(" 2.12.1 参数")]),t._v(" "),a("ul",[a("li",[t._v("partialText：需要匹配的 "),a("code",[t._v("string")]),t._v(" 或者 "),a("code",[t._v("正则表达式")])]),t._v(" "),a("li",[t._v("type：console 的类型，如："),a("code",[t._v("log")]),t._v("、"),a("code",[t._v("error")]),t._v(" 等")]),t._v(" "),a("li",[t._v("isFullMatch：是否采用完全匹配模式")])]),t._v(" "),a("h4",{attrs:{id:"_2-12-2-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-2-返回值"}},[t._v("#")]),t._v(" 2.12.2 返回值")]),t._v(" "),a("p",[a("code",[t._v("Boolean")])])])}),[],!1,null,null,null);s.default=e.exports}}]);