(function(e){function t(t){for(var o,r,i=t[0],l=t[1],s=t[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function i(e){return l.p+"js/chunk."+e+".1630902669219.js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-12029a7e":1,"chunk-219a2f3c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/chunk."+e+".1630902669219.css",a=l.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],u=s.getAttribute("data-href");if(u===o||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var f=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"1dfc":function(e,t,n){},4660:function(e,t,n){var o={"./WisQrcode.vue":"af0e"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="4660"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("8c4f"),a=n("f825"),c=n.n(a),i=(n("f8ce"),n("a4b1"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Layout",[n("Affix",[n("Header",[n("HeaderHTML")],1)],1),n("Content",[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view")],1)],1)],1)}),l=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Row",[n("i-col",{staticStyle:{"text-align":"left"},attrs:{span:"8"}},[n("Button",{staticStyle:{padding:"0px","box-shadow":"none"},attrs:{ghost:"",type:"text",icon:"ios-arrow-back"},on:{click:e.backHTML}},[e._v(" 返回 ")]),n("span",{staticStyle:{"padding-left":"8px"}},[n("Icon",{staticStyle:{color:"#fff","padding-right":"3px"},attrs:{type:"ios-pin-outline"}}),n("span",{staticStyle:{display:"inline-block","white-space":"nowrap","font-size":"12px","max-width":"40px",color:"#fff"}},[e._v(e._s(e.pageName))])],1)],1),n("i-col",{attrs:{span:"8"}},[n("h3",{staticClass:"head-tittle",on:{click:e.toHome}},[e._v("Supply Link")])]),n("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"8"}},[n("Dropdown",{attrs:{trigger:"click",placement:"bottom-end"},on:{"on-click":e.clickDropdown}},[n("span",{staticStyle:{color:"#fff","padding-right":"6px","font-size":"12px"}},[e._v("供应商A")]),n("Icon",{staticStyle:{color:"#fff","font-size":"18px"},attrs:{type:"md-settings"}}),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"logout"}},[n("Icon",{staticStyle:{"margin-right":"8px"},attrs:{type:"ios-log-out"}}),n("span",[e._v("退出登录")])],1)],1)],1)],1)],1)],1)},u=[],f={data:function(){return{pageName:""}},watch:{$route:function(e){this.pageName=e.meta.title}},created:function(){},methods:{toHome:function(){this.$router.push({name:"home"})},backHTML:function(){this.$router.go(-1)},logoutFunc:function(){console.log("sdsd")},clickDropdown:function(e){switch(e){case"logout":this.logoutFunc();break;default:break}}}},d=f,p=(n("f2ca"),n("2877")),h=Object(p["a"])(d,s,u,!1,null,null,null),m=h.exports,g={name:"App",components:{HeaderHTML:m}},v=g,b=(n("034f"),Object(p["a"])(v,i,l,!1,null,null,null)),y=b.exports,k=(n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),[{name:"home",path:"/",meta:{title:"首页",keepAlive:!0},component:function(){return n.e("chunk-12029a7e").then(n.bind(null,"b7f5"))}},{name:"dispatchHTML",path:"/dispatch",meta:{title:"半成品发货",keepAlive:!0},component:function(){return n.e("chunk-219a2f3c").then(n.bind(null,"e966"))}},{name:"dispatchDetailsHTML",path:"/dispatch/details",meta:{title:"半成品发货详情",keepAlive:!0},component:function(){return n.e("chunk-2d22c6b2").then(n.bind(null,"f2c3"))}},{name:"receivingHTML",path:"/receiving",meta:{title:"收货",keepAlive:!0},component:function(){return n.e("chunk-2d0ae8b0").then(n.bind(null,"0b08"))}}].concat([{name:"404",path:"/404",meta:{title:"404",keepAlive:!0},component:function(){return n.e("chunk-6875baee").then(n.bind(null,"cbaf"))}},{path:"*",redirect:"/404"}]));o["default"].use(r["a"]);var w=r["a"].prototype.push;r["a"].prototype.push=function(e){return w.call(this,e).catch((function(e){return e}))};var x=new r["a"]({routes:k}),_=x,S=(n("159b"),n("ac1f"),n("5319"),n("1276"),n("8103")),A=n.n(S),E=n("bba4"),H=n.n(E),O=n("4660");O.keys().forEach((function(e){var t=O(e),n=A()(H()(e.split("/").pop().replace(/\.\w+$/,"")));o["default"].component(n,t.default||t)})),o["default"].use(r["a"]),o["default"].use(c.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(y)},router:_}).$mount("#app")},"85ec":function(e,t,n){},a4b1:function(e,t,n){},af0e:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wis-qrcode-stream",style:"height:"+e.documentHeight+"px"},[n("qrcode-stream",{attrs:{camera:"auto",torch:e.torchActive},on:{decode:e.onDecode,init:e.onInit}}),n("Icon",{staticClass:"close-icon",attrs:{type:"md-close-circle"},on:{click:e.closeHandle}}),e.lodding?n("Affix",{attrs:{"offset-bottom":20}},[n("div",{staticStyle:{"text-align":"center"}},[n("div",[e.torchActive?n("Icon",{staticStyle:{"margin-bottom":"20px",color:"#fff","font-size":"26px",padding:"8px"},attrs:{type:"md-bulb"},on:{click:e.toggleTorchHandle}}):e._e(),e.torchActive?e._e():n("Icon",{staticStyle:{"margin-bottom":"20px",color:"#fff","font-size":"26px",padding:"8px"},attrs:{type:"ios-bulb-outline"},on:{click:e.toggleTorchHandle}})],1),n("span",{staticStyle:{color:"#fff"}},[e._v("请扫描二维码")])])]):e._e(),e.lodding?n("div",{staticClass:"move"}):e._e(),e.lodding?e._e():n("p",{staticStyle:{"text-align":"center"}},[e._v("相机加载中。。。")])],1)},r=[],a=(n("b0c0"),n("bb6f")),c={components:{QrcodeStream:a["QrcodeStream"]},data:function(){return{documentHeight:document.documentElement.clientHeight,torchActive:!0,lodding:!1}},created:function(){},methods:{toggleTorchHandle:function(){this.torchActive=!this.torchActive},closeHandle:function(){this.$emit("close")},onDecode:function(e){this.$emit("decode",e)},showError:function(e){this.$Message.error({content:e.name,duration:5,closable:!0})},onInit:function(e){var t=this,n=this;e.then(n.lodding=!0).catch((function(e){n.$emit("close"),"NotAllowedError"===e.name?t.$Message.error("用户拒绝摄像头访问权限！"):"NotFoundError"===e.name?t.$Message.error("没有安装合适的摄像设备！"):"NotSupportedError"===e.name?t.showError(e):"NotReadableError"===e.name?t.$Message.error("摄像设备正在使用！"):"OverconstrainedError"===e.name?t.showError(e):"StreamApiNotSupportedError"===e.name&&t.$Message.error("浏览器没有此功能！")}))}},props:{}},i=c,l=(n("f613"),n("2877")),s=Object(l["a"])(i,o,r,!1,null,null,null);t["default"]=s.exports},d5e0:function(e,t,n){},f2ca:function(e,t,n){"use strict";n("1dfc")},f613:function(e,t,n){"use strict";n("d5e0")}});
//# sourceMappingURL=jsapp.1630902669219.js.map