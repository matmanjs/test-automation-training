(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return h})),n.d(e,"c",(function(){return d})),n.d(e,"j",(function(){return v}));n(24),n(91),n(167),n(94),n(170),n(64),n(43),n(303),n(65),n(304),n(92);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return s.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function p(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return a.test(r)?t:r+".html"+n}function f(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function h(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:p(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},303:function(t,e,n){"use strict";var i=n(164),r=n(5),a=n(13),s=n(23),o=n(165),u=n(166);i("match",1,(function(t,e,n){return[function(e){var n=s(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var s=r(t),l=String(this);if(!s.global)return u(s,l);var c=s.unicode;s.lastIndex=0;for(var p,f=[],h=0;null!==(p=u(s,l));){var d=String(p[0]);f[h]=d,""===d&&(s.lastIndex=o(l,a(s.lastIndex),c)),h++}return 0===h?null:f}]}))},304:function(t,e,n){"use strict";var i=n(164),r=n(168),a=n(5),s=n(23),o=n(93),u=n(165),l=n(13),c=n(166),p=n(66),f=n(1),h=[].push,d=Math.min,v=!f((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);for(var o,u,l,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,f+"g");(o=p.call(v,i))&&!((u=v.lastIndex)>d&&(c.push(i.slice(d,o.index)),o.length>1&&o.index<i.length&&h.apply(c,o.slice(1)),l=o[0].length,d=u,c.length>=a));)v.lastIndex===o.index&&v.lastIndex++;return d===i.length?!l&&v.test("")||c.push(""):c.push(i.slice(d)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var p=a(t),f=String(this),h=o(p,RegExp),g=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),b=new h(v?p:"^(?:"+p.source+")",m),k=void 0===r?4294967295:r>>>0;if(0===k)return[];if(0===f.length)return null===c(b,f)?[f]:[];for(var _=0,x=0,L=[];x<f.length;){b.lastIndex=v?x:0;var C,$=c(b,v?f:f.slice(x));if(null===$||(C=d(l(b.lastIndex+(v?0:x)),f.length))===_)x=u(f,x,g);else{if(L.push(f.slice(_,x)),L.length===k)return L;for(var O=1;O<=$.length-1;O++)if(L.push($[O]),L.length===k)return L;x=_=C}}return L.push(f.slice(_)),L}]}),!v)},316:function(t,e,n){},317:function(t,e,n){},318:function(t,e,n){},319:function(t,e,n){},320:function(t,e,n){},321:function(t,e,n){},322:function(t,e,n){},323:function(t,e,n){},324:function(t,e,n){},339:function(t,e){t.exports=function(t){return null==t}},340:function(t,e,n){"use strict";n.r(e);n(169);var i=n(302),r={name:"SidebarGroup",components:{DropdownTransition:n(342).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(340).default},methods:{isActive:i.e}},a=(n(355),n(42)),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(356),n(64);function o(t,e,n,i,r){var a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(a.style={"padding-left":r+"rem"}),t("RouterLink",a,n)}function u(t,e,n,r,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l,e.level-1),u(t,e.children,n,r,a,s+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,l=n.$themeLocaleConfig,c=e.props,p=c.item,f=c.sidebarDepth,h=Object(i.e)(a,p.path),d="auto"===p.type?h||p.children.some((function(t){return Object(i.e)(a,p.basePath+"#"+t.slug)})):h,v="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,d),g=[r.frontmatter.sidebarDepth,f,l.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),m=l.displayAllHeaders||s.displayAllHeaders;return"auto"===p.type?[v,u(t,p.children,p.basePath,a,g)]:(d||m)&&p.headers&&!i.d.test(p.path)?[v,u(t,Object(i.c)(p.headers),p.path,a,g)]:v}};n(357);function c(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?c(t,e):"page"===e.type&&Object(i.e)(t,e.path)}))}var p={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(a.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(c(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},f=Object(a.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=f.exports},342:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(354),n(42)),a=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},350:function(t,e,n){"use strict";var i=n(316);n.n(i).a},351:function(t,e,n){var i=n(30),r=n(14),a=n(25);t.exports=function(t){return"string"==typeof t||!r(t)&&a(t)&&"[object String]"==i(t)}},352:function(t,e,n){"use strict";var i=n(317);n.n(i).a},353:function(t,e,n){"use strict";var i=n(318);n.n(i).a},354:function(t,e,n){"use strict";var i=n(319);n.n(i).a},355:function(t,e,n){"use strict";var i=n(320);n.n(i).a},356:function(t,e,n){"use strict";var i=n(0),r=n(29).find,a=n(96),s=n(17),o=!0,u=s("find");"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},357:function(t,e,n){"use strict";var i=n(321);n.n(i).a},358:function(t,e,n){var i=n(6),r=n(3),a=n(97),s=n(359),o=n(8).f,u=n(67).f,l=n(168),c=n(99),p=n(172),f=n(10),h=n(1),d=n(28).set,v=n(171),g=n(2)("match"),m=r.RegExp,b=m.prototype,k=/a/g,_=/a/g,x=new m(k)!==k,L=p.UNSUPPORTED_Y;if(i&&a("RegExp",!x||L||h((function(){return _[g]=!1,m(k)!=k||m(_)==_||"/a/i"!=m(k,"i")})))){for(var C=function(t,e){var n,i=this instanceof C,r=l(t),a=void 0===e;if(!i&&r&&t.constructor===C&&a)return t;x?r&&!a&&(t=t.source):t instanceof C&&(a&&(e=c.call(t)),t=t.source),L&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=s(x?new m(t,e):m(t,e),i?this:b,C);return L&&n&&d(o,{sticky:n}),o},$=function(t){t in C||o(C,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},O=u(m),y=0;O.length>y;)$(O[y++]);b.constructor=C,C.prototype=b,f(r,"RegExp",C)}v("RegExp")},359:function(t,e,n){var i=n(4),r=n(98);t.exports=function(t,e,n){var a,s;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(s=a.prototype)&&s!==n.prototype&&r(t,s),t}},360:function(t,e,n){"use strict";var i=n(0),r=n(361);i({target:"String",proto:!0,forced:n(362)("link")},{link:function(t){return r(this,"a","href",t)}})},361:function(t,e,n){var i=n(23),r=/"/g;t.exports=function(t,e,n,a){var s=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"}},362:function(t,e,n){var i=n(1);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},363:function(t,e,n){"use strict";var i=n(322);n.n(i).a},364:function(t,e,n){"use strict";var i=n(323);n.n(i).a},365:function(t,e,n){"use strict";var i=n(324);n.n(i).a},386:function(t,e,n){"use strict";var i=n(340),r=(n(173),n(64),n(169),n(95),n(358),n(43),n(101),n(303),n(65),n(40)),a=(n(360),n(302)),s={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(a.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(a.g)(this.link)||Object(a.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(a.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(a.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},o=n(42),u=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,l=n(342),c=n(174),p=n.n(c),f={name:"DropdownLink",components:{NavLink:u,DropdownTransition:l.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return p()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},h=(n(363),{name:"NavLinks",components:{NavLink:u,DropdownLink:Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(r){var s,o=e[r],u=a[r]&&a[r].label||o.lang;return o.lang===t.$lang?s=n:(s=n.replace(t.$localeConfig.path,r),i.some((function(t){return t.path===s}))||(s=r)),{text:u,link:s}}))};return[].concat(Object(r.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(a.j)(t),{items:(t.items||[]).map(a.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),d=(n(364),Object(o.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports),v={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:d},props:["items"]},g=(n(365),Object(o.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null));e.a=g.exports},387:function(t,e,n){"use strict";n(43),n(65);var i=n(339),r=n.n(i),a=n(302),s={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=r()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,a=void 0===i?"":i,s=e.docsBranch,o=void 0===s?"master":s,u=e.docsRepo,l=void 0===u?n:u;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,a,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){if(/bitbucket.org/.test(e))return e.replace(a.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(a.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r:(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r}}},o=(n(350),n(42)),u=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,l=n(351),c=n.n(l),p={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return h(f.PREV,this)},next:function(){return h(f.NEXT,this)}}};var f={NEXT:{resolveLink:function(t,e){return d(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return d(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function h(t,e){var n=e.$themeConfig,i=e.$page,s=e.$route,o=e.$site,u=e.sidebarItems,l=t.resolveLink,p=t.getThemeLinkConfig,f=t.getPageLinkConfig,h=p(n),d=f(i),v=r()(d)?h:d;return!1===v?void 0:c()(v)?Object(a.k)(o.pages,v,s.path):l(i,u)}function d(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[r+n]}}var v=p,g=(n(352),{components:{PageEdit:u,PageNav:Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),m=(n(353),Object(o.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=m.exports}}]);