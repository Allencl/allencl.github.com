(function(t){function e(e){for(var o,r,c=e[0],l=e[1],s=e[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function c(t){return l.p+"js/chunk."+t+".1630905669068.js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-12029a7e":1,"chunk-219a2f3c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/chunk."+t+".1630905669068.css",a=l.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],u=s.getAttribute("data-href");if(u===o||u===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var f=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1dfc":function(t,e,n){},4660:function(t,e,n){var o={"./WisQrcode.vue":"af0e"};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="4660"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("8c4f"),a=n("f825"),i=n.n(a),c=(n("f8ce"),n("a4b1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Layout",[n("Affix",[n("Header",[n("HeaderHTML")],1)],1),n("Content",[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("router-view")],1)],1)],1)}),l=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("i-col",{staticStyle:{"text-align":"left"},attrs:{span:"8"}},[n("Button",{staticStyle:{padding:"0px","box-shadow":"none"},attrs:{ghost:"",type:"text",icon:"ios-arrow-back"},on:{click:t.backHTML}},[t._v(" 返回 ")]),n("span",{staticStyle:{"padding-left":"8px"}},[n("Icon",{staticStyle:{color:"#fff","padding-right":"3px"},attrs:{type:"ios-pin-outline"}}),n("span",{staticStyle:{display:"inline-block","white-space":"nowrap","font-size":"12px","max-width":"40px",color:"#fff"}},[t._v(t._s(t.pageName))])],1)],1),n("i-col",{attrs:{span:"8"}},[n("h3",{staticClass:"head-tittle",on:{click:t.toHome}},[t._v("Supply Link")])]),n("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"8"}},[n("Dropdown",{attrs:{trigger:"click",placement:"bottom-end"},on:{"on-click":t.clickDropdown}},[n("span",{staticStyle:{color:"#fff","padding-right":"6px","font-size":"12px"}},[t._v("供应商A")]),n("Icon",{staticStyle:{color:"#fff","font-size":"18px"},attrs:{type:"md-settings"}}),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"logout"}},[n("Icon",{staticStyle:{"margin-right":"8px"},attrs:{type:"ios-log-out"}}),n("span",[t._v("退出登录")])],1)],1)],1)],1)],1)],1)},u=[],f={data:function(){return{pageName:""}},watch:{$route:function(t){this.pageName=t.meta.title}},created:function(){},methods:{toHome:function(){this.$router.push({name:"home"})},backHTML:function(){this.$router.go(-1)},logoutFunc:function(){console.log("sdsd")},clickDropdown:function(t){switch(t){case"logout":this.logoutFunc();break;default:break}}}},p=f,d=(n("f2ca"),n("2877")),h=Object(d["a"])(p,s,u,!1,null,null,null),m=h.exports,g={name:"App",components:{HeaderHTML:m}},v=g,b=(n("034f"),Object(d["a"])(v,c,l,!1,null,null,null)),y=b.exports,k=(n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),[{name:"home",path:"/",meta:{title:"首页",keepAlive:!0},component:function(){return n.e("chunk-12029a7e").then(n.bind(null,"b7f5"))}},{name:"dispatchHTML",path:"/dispatch",meta:{title:"半成品发货",keepAlive:!0},component:function(){return n.e("chunk-219a2f3c").then(n.bind(null,"e966"))}},{name:"dispatchDetailsHTML",path:"/dispatch/details",meta:{title:"半成品发货详情",keepAlive:!0},component:function(){return n.e("chunk-2d22c6b2").then(n.bind(null,"f2c3"))}},{name:"receivingHTML",path:"/receiving",meta:{title:"收货",keepAlive:!0},component:function(){return n.e("chunk-2d0ae8b0").then(n.bind(null,"0b08"))}}].concat([{name:"404",path:"/404",meta:{title:"404",keepAlive:!0},component:function(){return n.e("chunk-6875baee").then(n.bind(null,"cbaf"))}},{path:"*",redirect:"/404"}]));o["default"].use(r["a"]);var w=r["a"].prototype.push;r["a"].prototype.push=function(t){return w.call(this,t).catch((function(t){return t}))};var x=new r["a"]({routes:k}),_=x,S=(n("159b"),n("ac1f"),n("5319"),n("1276"),n("8103")),A=n.n(S),E=n("bba4"),M=n.n(E),H=n("4660");H.keys().forEach((function(t){var e=H(t),n=A()(M()(t.split("/").pop().replace(/\.\w+$/,"")));o["default"].component(n,e.default||e)})),o["default"].use(r["a"]),o["default"].use(i.a),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(y)},router:_}).$mount("#app")},"85ec":function(t,e,n){},a4b1:function(t,e,n){},af0e:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wis-qrcode-stream",style:"height:"+t.documentHeight+"px"},[n("qrcode-stream",{attrs:{camera:"auto",torch:t.torchActive},on:{decode:t.onDecode,init:t.onInit}}),t.toggleMasking?n("div",{staticClass:"masking-box"},[n("Icon",{attrs:{type:"md-camera"}}),n("p",{staticStyle:{"padding-top":"12px","text-align":"center",color:"#fff"}},[t._v("相机加载中...")])],1):t._e(),n("Icon",{staticClass:"close-icon",attrs:{type:"md-close-circle"},on:{click:t.closeHandle}}),t.lodding?n("Affix",{attrs:{"offset-bottom":20}},[n("div",{staticStyle:{"text-align":"center"}},[n("div",[t.torchActive?n("Icon",{staticStyle:{"margin-bottom":"20px",color:"#fff","font-size":"26px",padding:"8px"},attrs:{type:"md-bulb"},on:{click:t.toggleTorchHandle}}):t._e(),t.torchActive?t._e():n("Icon",{staticStyle:{"margin-bottom":"20px",color:"#fff","font-size":"26px",padding:"8px"},attrs:{type:"ios-bulb-outline"},on:{click:t.toggleTorchHandle}})],1),n("span",{staticStyle:{color:"#fff"}},[t._v("请扫描二维码")])])]):t._e(),t.lodding?n("div",{staticClass:"move"}):t._e()],1)},r=[],a=(n("b0c0"),n("bb6f")),i={components:{QrcodeStream:a["QrcodeStream"]},data:function(){return{documentHeight:document.documentElement.clientHeight,torchActive:!1,lodding:!1,toggleMasking:!1}},created:function(){},methods:{toggleTorchHandle:function(){this.torchActive=!this.torchActive},closeHandle:function(){this.$emit("close")},onDecode:function(t){this.$emit("decode",t)},showError:function(t){this.$Message.error({content:t.name,duration:5,closable:!0})},onInit:function(t){var e=this,n=this;this.toggleMasking=!0,t.then((function(){n.lodding=!0,n.toggleMasking=!1})).catch((function(t){n.$emit("close"),"NotAllowedError"===t.name?e.$Message.error("用户拒绝摄像头访问权限！"):"NotFoundError"===t.name?e.$Message.error("没有安装合适的摄像设备！"):"NotSupportedError"===t.name?e.showError(t):"NotReadableError"===t.name?e.$Message.error("摄像设备正在使用！"):"OverconstrainedError"===t.name?e.showError(t):"StreamApiNotSupportedError"===t.name&&e.$Message.error("浏览器没有此功能！")}))}},props:{}},c=i,l=(n("f613"),n("2877")),s=Object(l["a"])(c,o,r,!1,null,null,null);e["default"]=s.exports},d5e0:function(t,e,n){},f2ca:function(t,e,n){"use strict";n("1dfc")},f613:function(t,e,n){"use strict";n("d5e0")}});
//# sourceMappingURL=jsapp.1630905669068.js.map