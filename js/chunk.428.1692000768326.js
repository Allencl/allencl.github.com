(self["webpackChunkcaptain"]=self["webpackChunkcaptain"]||[]).push([[428],{6077:function(e,r,t){var n=t(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,r,t){"use strict";var n,i,o,u=t(3013),c=t(9781),a=t(7854),l=t(614),s=t(111),f=t(2597),p=t(648),y=t(6330),d=t(8880),h=t(8052),m=t(7045),v=t(7976),g=t(9518),w=t(7674),b=t(5112),A=t(9711),O=t(9909),S=O.enforce,k=O.get,N=a.Int8Array,P=N&&N.prototype,_=a.Uint8ClampedArray,U=_&&_.prototype,D=N&&g(N),x=P&&g(P),E=Object.prototype,C=a.TypeError,T=b("toStringTag"),B=A("TYPED_ARRAY_TAG"),I="TypedArrayConstructor",R=u&&!!w&&"Opera"!==p(a.opera),F=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},q=function(e){if(!s(e))return!1;var r=p(e);return"DataView"===r||f(j,r)||f(M,r)},L=function(e){var r=g(e);if(s(r)){var t=k(r);return t&&f(t,I)?t[I]:L(r)}},z=function(e){if(!s(e))return!1;var r=p(e);return f(j,r)||f(M,r)},G=function(e){if(z(e))return e;throw C("Target is not a typed array")},H=function(e){if(l(e)&&(!w||v(D,e)))return e;throw C(y(e)+" is not a typed array constructor")},W=function(e,r,t,n){if(c){if(t)for(var i in j){var o=a[i];if(o&&f(o.prototype,e))try{delete o.prototype[e]}catch(u){try{o.prototype[e]=r}catch(l){}}}x[e]&&!t||h(x,e,t?r:R&&P[e]||r,n)}},V=function(e,r,t){var n,i;if(c){if(w){if(t)for(n in j)if(i=a[n],i&&f(i,e))try{delete i[e]}catch(o){}if(D[e]&&!t)return;try{return h(D,e,t?r:R&&D[e]||r)}catch(o){}}for(n in j)i=a[n],!i||i[e]&&!t||h(i,e,r)}};for(n in j)i=a[n],o=i&&i.prototype,o?S(o)[I]=i:R=!1;for(n in M)i=a[n],o=i&&i.prototype,o&&(S(o)[I]=i);if((!R||!l(D)||D===Function.prototype)&&(D=function(){throw C("Incorrect invocation")},R))for(n in j)a[n]&&w(a[n],D);if((!R||!x||x===E)&&(x=D.prototype,R))for(n in j)a[n]&&w(a[n].prototype,x);if(R&&g(U)!==x&&w(U,x),c&&!f(x,T))for(n in F=!0,m(x,T,{configurable:!0,get:function(){return s(this)?this[B]:void 0}}),j)a[n]&&d(a[n],B,n);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:R,TYPED_ARRAY_TAG:F&&B,aTypedArray:G,aTypedArrayConstructor:H,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:V,getTypedArrayConstructor:L,isView:q,isTypedArray:z,TypedArray:D,TypedArrayPrototype:x}},7745:function(e,r,t){var n=t(6244);e.exports=function(e,r){var t=0,i=n(r),o=new e(i);while(i>t)o[t]=r[t++];return o}},1843:function(e,r,t){var n=t(6244);e.exports=function(e,r){for(var t=n(e),i=new r(t),o=0;o<t;o++)i[o]=e[t-o-1];return i}},1572:function(e,r,t){var n=t(6244),i=t(9303),o=RangeError;e.exports=function(e,r,t,u){var c=n(e),a=i(t),l=a<0?c+a:a;if(l>=c||l<0)throw o("Incorrect index");for(var s=new r(c),f=0;f<c;f++)s[f]=f===l?u:e[f];return s}},648:function(e,r,t){var n=t(1694),i=t(614),o=t(4326),u=t(5112),c=u("toStringTag"),a=Object,l="Arguments"==o(function(){return arguments}()),s=function(e,r){try{return e[r]}catch(t){}};e.exports=n?o:function(e){var r,t,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=s(r=a(e),c))?t:l?o(r):"Object"==(n=o(r))&&i(r.callee)?"Arguments":n}},8544:function(e,r,t){var n=t(7293);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},7045:function(e,r,t){var n=t(6339),i=t(3070);e.exports=function(e,r,t){return t.get&&n(t.get,r,{getter:!0}),t.set&&n(t.set,r,{setter:!0}),i.f(e,r,t)}},5668:function(e,r,t){var n=t(1702),i=t(9662);e.exports=function(e,r,t){try{return n(i(Object.getOwnPropertyDescriptor(e,r)[t]))}catch(o){}}},4067:function(e,r,t){var n=t(648);e.exports=function(e){var r=n(e);return"BigInt64Array"==r||"BigUint64Array"==r}},9518:function(e,r,t){var n=t(2597),i=t(614),o=t(7908),u=t(6200),c=t(8544),a=u("IE_PROTO"),l=Object,s=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var r=o(e);if(n(r,a))return r[a];var t=r.constructor;return i(t)&&r instanceof t?t.prototype:r instanceof l?s:null}},7674:function(e,r,t){var n=t(5668),i=t(9670),o=t(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,r=!1,t={};try{e=n(Object.prototype,"__proto__","set"),e(t,[]),r=t instanceof Array}catch(u){}return function(t,n){return i(t),o(n),r?e(t,n):t.__proto__=n,t}}():void 0)},4599:function(e,r,t){var n=t(7593),i=TypeError;e.exports=function(e){var r=n(e,"number");if("number"==typeof r)throw i("Can't convert number to bigint");return BigInt(r)}},1694:function(e,r,t){var n=t(5112),i=n("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1439:function(e,r,t){"use strict";var n=t(1843),i=t(260),o=i.aTypedArray,u=i.exportTypedArrayMethod,c=i.getTypedArrayConstructor;u("toReversed",(function(){return n(o(this),c(this))}))},7585:function(e,r,t){"use strict";var n=t(260),i=t(1702),o=t(9662),u=t(7745),c=n.aTypedArray,a=n.getTypedArrayConstructor,l=n.exportTypedArrayMethod,s=i(n.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&o(e);var r=c(this),t=u(a(r),r);return s(t,e)}))},5315:function(e,r,t){"use strict";var n=t(1572),i=t(260),o=t(4067),u=t(9303),c=t(4599),a=i.aTypedArray,l=i.getTypedArrayConstructor,s=i.exportTypedArrayMethod,f=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();s("with",{with:function(e,r){var t=a(this),i=u(e),s=o(t)?c(r):+r;return n(t,l(t),i,s)}}["with"],!f)},3767:function(e,r,t){t(1439)},8585:function(e,r,t){t(7585)},8696:function(e,r,t){t(5315)},8428:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return q}});var n=t(3396);function i(e,r,t,i,o,u){const c=(0,n.up)("MoudlePage3");return(0,n.wg)(),(0,n.j4)(c)}var o=t(7139);const u={class:"text-h6 text--primary"},c={style:{"font-size":"12px","padding-left":"8px"}},a={style:{padding:"0px 16px"}},l={key:1,style:{color:"#8BC34A"}},s={key:2,style:{color:"#FF5722"}},f={key:0};function p(e,r,t,i,p,y){const d=(0,n.up)("v-icon"),h=(0,n.up)("a-input-number"),m=(0,n.up)("a-tag"),v=(0,n.up)("v-card-text"),g=(0,n.up)("v-btn"),w=(0,n.up)("a-table"),b=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(b,{class:"computer-card-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{style:{position:"relative"}},{default:(0,n.w5)((()=>[(0,n._)("p",u,[(0,n.Wm)(d,{style:{"font-size":"18px","margin-bottom":"4px","margin-right":"6px"}},{default:(0,n.w5)((()=>[(0,n.Uk)("mdi-desktop-classic")])),_:1}),(0,n.Uk)(" FXCM "),(0,n.Wm)(h,{value:e.money,"onUpdate:value":r[0]||(r[0]=r=>e.money=r),onChange:e.changeMoney,min:10,max:1e4,style:{"margin-left":"32px"}},null,8,["value","onChange"]),(0,n.Wm)(m,{color:"#55acee",style:{"margin-left":"22px"}},{icon:(0,n.w5)((()=>[(0,n.Wm)(d,{icon:"mdi-bird"})])),default:(0,n.w5)((()=>[(0,n._)("b",c,(0,o.zw)(e.rate)+"倍",1)])),_:1})])])),_:1}),(0,n._)("div",a,[(0,n.Wm)(w,{columns:e.columns,"data-source":e.data,pagination:!1,size:"small"},{headerCell:(0,n.w5)((({column:e})=>["close"===e.key?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("strong",null,(0,o.zw)(e.title),1),(0,n.Wm)(d,{color:"#FF5722",icon:"mdi-close-outline"})],64)):(0,n.kq)("",!0),"priceStart"===e.key?((0,n.wg)(),(0,n.iD)("strong",l,(0,o.zw)(e.title),1)):(0,n.kq)("",!0),"priceOver"===e.key?((0,n.wg)(),(0,n.iD)("strong",s,(0,o.zw)(e.title),1)):(0,n.kq)("",!0),"count"===e.key?((0,n.wg)(),(0,n.iD)(n.HY,{key:3},[(0,n._)("strong",null,(0,o.zw)(e.title),1),(0,n.Wm)(d,{color:"#FFC107",icon:"mdi-cards"})],64)):(0,n.kq)("",!0),"number"===e.key?((0,n.wg)(),(0,n.iD)(n.HY,{key:4},[(0,n._)("strong",null,(0,o.zw)(e.title),1),(0,n.Wm)(d,{color:"#8BC34A",icon:"mdi-database"})],64)):(0,n.kq)("",!0),"profit"===e.key?((0,n.wg)(),(0,n.iD)(n.HY,{key:5},[(0,n._)("strong",null,(0,o.zw)(e.title),1),(0,n.Wm)(d,{color:"#00BCD4",icon:"mdi-currency-usd"})],64)):(0,n.kq)("",!0),"computer"===e.key?((0,n.wg)(),(0,n.iD)(n.HY,{key:6},[(0,n._)("strong",null,(0,o.zw)(e.title),1),(0,n.Wm)(d,{color:"#00BCD4",icon:"mdi-desktop-classic"})],64)):(0,n.kq)("",!0)])),bodyCell:(0,n.w5)((({column:e,record:r})=>["type"===e.key?((0,n.wg)(),(0,n.iD)("b",f,(0,o.zw)(r.title),1)):(0,n.kq)("",!0),"priceStart"===e.key&&"line"!=r.type?((0,n.wg)(),(0,n.j4)(h,{key:1,style:{width:"130px"},value:r.valuePriceStart,"onUpdate:value":e=>r.valuePriceStart=e,precision:r._precision},null,8,["value","onUpdate:value","precision"])):(0,n.kq)("",!0),"priceOver"===e.key&&"line"!=r.type?((0,n.wg)(),(0,n.j4)(h,{key:2,style:{width:"130px"},value:r.valuePriceOver,"onUpdate:value":e=>r.valuePriceOver=e,precision:r._precision},null,8,["value","onUpdate:value","precision"])):(0,n.kq)("",!0),"computer"===e.key?((0,n.wg)(),(0,n.iD)(n.HY,{key:3},["line"!=r.type?((0,n.wg)(),(0,n.j4)(g,{key:0,onClick:e=>this.valueChange(r),density:"compact",color:"#00BCD4",style:{color:"#fff"},icon:"mdi-desktop-classic"},null,8,["onClick"])):(0,n.kq)("",!0),"buy"==r.direction?((0,n.wg)(),(0,n.j4)(d,{key:1,color:"#8BC34A",icon:"mdi-arrow-up-thin",size:"28"})):(0,n.kq)("",!0),"sell"==r.direction?((0,n.wg)(),(0,n.j4)(d,{key:2,color:"#FF5722",icon:"mdi-arrow-down-thin",size:"28"})):(0,n.kq)("",!0)],64)):(0,n.kq)("",!0)])),_:1},8,["columns","data-source"])])])),_:1})}t(7658),t(3767),t(8585),t(8696);var y=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,d=Math.ceil,h=Math.floor,m="[BigNumber Error] ",v=m+"Number primitive has more than 15 significant digits: ",g=1e14,w=14,b=9007199254740991,A=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],O=1e7,S=1e9;function k(e){var r,t,n,i=F.prototype={constructor:F,toString:null,valueOf:null},o=new F(1),u=20,c=4,a=-7,l=21,s=-1e7,f=1e7,p=!1,C=1,T=0,B={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},I="0123456789abcdefghijklmnopqrstuvwxyz",R=!0;function F(e,r){var i,o,a,l,p,d,m,g,A=this;if(!(A instanceof F))return new F(e,r);if(null==r){if(e&&!0===e._isBigNumber)return A.s=e.s,void(!e.c||e.e>f?A.c=A.e=null:e.e<s?A.c=[A.e=0]:(A.e=e.e,A.c=e.c.slice()));if((d="number"==typeof e)&&0*e==0){if(A.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,p=e;p>=10;p/=10,l++);return void(l>f?A.c=A.e=null:(A.e=l,A.c=[e]))}g=String(e)}else{if(!y.test(g=String(e)))return n(A,g,d);A.s=45==g.charCodeAt(0)?(g=g.slice(1),-1):1}(l=g.indexOf("."))>-1&&(g=g.replace(".","")),(p=g.search(/e/i))>0?(l<0&&(l=p),l+=+g.slice(p+1),g=g.substring(0,p)):l<0&&(l=g.length)}else{if(U(r,2,I.length,"Base"),10==r&&R)return A=new F(e),L(A,u+A.e+1,c);if(g=String(e),d="number"==typeof e){if(0*e!=0)return n(A,g,d,r);if(A.s=1/e<0?(g=g.slice(1),-1):1,F.DEBUG&&g.replace(/^0\.0*|\./,"").length>15)throw Error(v+e)}else A.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1;for(i=I.slice(0,r),l=p=0,m=g.length;p<m;p++)if(i.indexOf(o=g.charAt(p))<0){if("."==o){if(p>l){l=m;continue}}else if(!a&&(g==g.toUpperCase()&&(g=g.toLowerCase())||g==g.toLowerCase()&&(g=g.toUpperCase()))){a=!0,p=-1,l=0;continue}return n(A,String(e),d,r)}d=!1,g=t(g,r,10,A.s),(l=g.indexOf("."))>-1?g=g.replace(".",""):l=g.length}for(p=0;48===g.charCodeAt(p);p++);for(m=g.length;48===g.charCodeAt(--m););if(g=g.slice(p,++m)){if(m-=p,d&&F.DEBUG&&m>15&&(e>b||e!==h(e)))throw Error(v+A.s*e);if((l=l-p-1)>f)A.c=A.e=null;else if(l<s)A.c=[A.e=0];else{if(A.e=l,A.c=[],p=(l+1)%w,l<0&&(p+=w),p<m){for(p&&A.c.push(+g.slice(0,p)),m-=w;p<m;)A.c.push(+g.slice(p,p+=w));p=w-(g=g.slice(p)).length}else p-=m;for(;p--;g+="0");A.c.push(+g)}}else A.c=[A.e=0]}function j(e,r,t,n){var i,o,u,s,f;if(null==t?t=c:U(t,0,8),!e.c)return e.toString();if(i=e.c[0],u=e.e,null==r)f=P(e.c),f=1==n||2==n&&(u<=a||u>=l)?x(f,u):E(f,u,"0");else if(e=L(new F(e),r,t),o=e.e,f=P(e.c),s=f.length,1==n||2==n&&(r<=o||o<=a)){for(;s<r;f+="0",s++);f=x(f,o)}else if(r-=u,f=E(f,o,"0"),o+1>s){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=o-s,r>0)for(o+1==s&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function M(e,r){for(var t,n=1,i=new F(e[0]);n<e.length;n++){if(t=new F(e[n]),!t.s){i=t;break}r.call(i,t)&&(i=t)}return i}function q(e,r,t){for(var n=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,n++);return(t=n+t*w-1)>f?e.c=e.e=null:t<s?e.c=[e.e=0]:(e.e=t,e.c=r),e}function L(e,r,t,n){var i,o,u,c,a,l,p,y=e.c,m=A;if(y){e:{for(i=1,c=y[0];c>=10;c/=10,i++);if(o=r-i,o<0)o+=w,u=r,a=y[l=0],p=a/m[i-u-1]%10|0;else if(l=d((o+1)/w),l>=y.length){if(!n)break e;for(;y.length<=l;y.push(0));a=p=0,i=1,o%=w,u=o-w+1}else{for(a=c=y[l],i=1;c>=10;c/=10,i++);o%=w,u=o-w+i,p=u<0?0:a/m[i-u-1]%10|0}if(n=n||r<0||null!=y[l+1]||(u<0?a:a%m[i-u-1]),n=t<4?(p||n)&&(0==t||t==(e.s<0?3:2)):p>5||5==p&&(4==t||n||6==t&&(o>0?u>0?a/m[i-u]:0:y[l-1])%10&1||t==(e.s<0?8:7)),r<1||!y[0])return y.length=0,n?(r-=e.e+1,y[0]=m[(w-r%w)%w],e.e=-r||0):y[0]=e.e=0,e;if(0==o?(y.length=l,c=1,l--):(y.length=l+1,c=m[w-o],y[l]=u>0?h(a/m[i-u]%m[u])*c:0),n)for(;;){if(0==l){for(o=1,u=y[0];u>=10;u/=10,o++);for(u=y[0]+=c,c=1;u>=10;u/=10,c++);o!=c&&(e.e++,y[0]==g&&(y[0]=1));break}if(y[l]+=c,y[l]!=g)break;y[l--]=0,c=1}for(o=y.length;0===y[--o];y.pop());}e.e>f?e.c=e.e=null:e.e<s&&(e.c=[e.e=0])}return e}function z(e){var r,t=e.e;return null===t?e.toString():(r=P(e.c),r=t<=a||t>=l?x(r,t):E(r,t,"0"),e.s<0?"-"+r:r)}return F.clone=k,F.ROUND_UP=0,F.ROUND_DOWN=1,F.ROUND_CEIL=2,F.ROUND_FLOOR=3,F.ROUND_HALF_UP=4,F.ROUND_HALF_DOWN=5,F.ROUND_HALF_EVEN=6,F.ROUND_HALF_CEIL=7,F.ROUND_HALF_FLOOR=8,F.EUCLID=9,F.config=F.set=function(e){var r,t;if(null!=e){if("object"!=typeof e)throw Error(m+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(t=e[r],U(t,0,S,r),u=t),e.hasOwnProperty(r="ROUNDING_MODE")&&(t=e[r],U(t,0,8,r),c=t),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(t=e[r],t&&t.pop?(U(t[0],-S,0,r),U(t[1],0,S,r),a=t[0],l=t[1]):(U(t,-S,S,r),a=-(l=t<0?-t:t))),e.hasOwnProperty(r="RANGE"))if(t=e[r],t&&t.pop)U(t[0],-S,-1,r),U(t[1],1,S,r),s=t[0],f=t[1];else{if(U(t,-S,S,r),!t)throw Error(m+r+" cannot be zero: "+t);s=-(f=t<0?-t:t)}if(e.hasOwnProperty(r="CRYPTO")){if(t=e[r],t!==!!t)throw Error(m+r+" not true or false: "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw p=!t,Error(m+"crypto unavailable");p=t}else p=t}if(e.hasOwnProperty(r="MODULO_MODE")&&(t=e[r],U(t,0,9,r),C=t),e.hasOwnProperty(r="POW_PRECISION")&&(t=e[r],U(t,0,S,r),T=t),e.hasOwnProperty(r="FORMAT")){if(t=e[r],"object"!=typeof t)throw Error(m+r+" not an object: "+t);B=t}if(e.hasOwnProperty(r="ALPHABET")){if(t=e[r],"string"!=typeof t||/^.?$|[+\-.\s]|(.).*\1/.test(t))throw Error(m+r+" invalid: "+t);R="0123456789"==t.slice(0,10),I=t}}return{DECIMAL_PLACES:u,ROUNDING_MODE:c,EXPONENTIAL_AT:[a,l],RANGE:[s,f],CRYPTO:p,MODULO_MODE:C,POW_PRECISION:T,FORMAT:B,ALPHABET:I}},F.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!F.DEBUG)return!0;var r,t,n=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===o||-1===o)&&i>=-S&&i<=S&&i===h(i)){if(0===n[0]){if(0===i&&1===n.length)return!0;break e}if(r=(i+1)%w,r<1&&(r+=w),String(n[0]).length==r){for(r=0;r<n.length;r++)if(t=n[r],t<0||t>=g||t!==h(t))break e;if(0!==t)return!0}}}else if(null===n&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(m+"Invalid BigNumber: "+e)},F.maximum=F.max=function(){return M(arguments,i.lt)},F.minimum=F.min=function(){return M(arguments,i.gt)},F.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return h(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var t,n,i,c,a,l=0,s=[],f=new F(o);if(null==e?e=u:U(e,0,S),c=d(e/w),p)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(c*=2));l<c;)a=131072*t[l]+(t[l+1]>>>11),a>=9e15?(n=crypto.getRandomValues(new Uint32Array(2)),t[l]=n[0],t[l+1]=n[1]):(s.push(a%1e14),l+=2);l=c/2}else{if(!crypto.randomBytes)throw p=!1,Error(m+"crypto unavailable");for(t=crypto.randomBytes(c*=7);l<c;)a=281474976710656*(31&t[l])+1099511627776*t[l+1]+4294967296*t[l+2]+16777216*t[l+3]+(t[l+4]<<16)+(t[l+5]<<8)+t[l+6],a>=9e15?crypto.randomBytes(7).copy(t,l):(s.push(a%1e14),l+=7);l=c/7}if(!p)for(;l<c;)a=r(),a<9e15&&(s[l++]=a%1e14);for(c=s[--l],e%=w,c&&e&&(a=A[w-e],s[l]=h(c/a)*a);0===s[l];s.pop(),l--);if(l<0)s=[i=0];else{for(i=-1;0===s[0];s.splice(0,1),i-=w);for(l=1,a=s[0];a>=10;a/=10,l++);l<w&&(i-=w-l)}return f.e=i,f.c=s,f}}(),F.sum=function(){for(var e=1,r=arguments,t=new F(r[0]);e<r.length;)t=t.plus(r[e++]);return t},t=function(){var e="0123456789";function t(e,r,t,n){for(var i,o,u=[0],c=0,a=e.length;c<a;){for(o=u.length;o--;u[o]*=r);for(u[0]+=n.indexOf(e.charAt(c++)),i=0;i<u.length;i++)u[i]>t-1&&(null==u[i+1]&&(u[i+1]=0),u[i+1]+=u[i]/t|0,u[i]%=t)}return u.reverse()}return function(n,i,o,a,l){var s,f,p,y,d,h,m,v,g=n.indexOf("."),w=u,b=c;for(g>=0&&(y=T,T=0,n=n.replace(".",""),v=new F(i),h=v.pow(n.length-g),T=y,v.c=t(E(P(h.c),h.e,"0"),10,o,e),v.e=v.c.length),m=t(n,i,o,l?(s=I,e):(s=e,I)),p=y=m.length;0==m[--y];m.pop());if(!m[0])return s.charAt(0);if(g<0?--p:(h.c=m,h.e=p,h.s=a,h=r(h,v,w,b,o),m=h.c,d=h.r,p=h.e),f=p+w+1,g=m[f],y=o/2,d=d||f<0||null!=m[f+1],d=b<4?(null!=g||d)&&(0==b||b==(h.s<0?3:2)):g>y||g==y&&(4==b||d||6==b&&1&m[f-1]||b==(h.s<0?8:7)),f<1||!m[0])n=d?E(s.charAt(1),-w,s.charAt(0)):s.charAt(0);else{if(m.length=f,d)for(--o;++m[--f]>o;)m[f]=0,f||(++p,m=[1].concat(m));for(y=m.length;!m[--y];);for(g=0,n="";g<=y;n+=s.charAt(m[g++]));n=E(n,p,s.charAt(0))}return n}}(),r=function(){function e(e,r,t){var n,i,o,u,c=0,a=e.length,l=r%O,s=r/O|0;for(e=e.slice();a--;)o=e[a]%O,u=e[a]/O|0,n=s*o+u*l,i=l*o+n%O*O+c,c=(i/t|0)+(n/O|0)+s*u,e[a]=i%t;return c&&(e=[c].concat(e)),e}function r(e,r,t,n){var i,o;if(t!=n)o=t>n?1:-1;else for(i=o=0;i<t;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,t,n){for(var i=0;t--;)e[t]-=i,i=e[t]<r[t]?1:0,e[t]=i*n+e[t]-r[t];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,o,u,c){var a,l,s,f,p,y,d,m,v,b,A,O,S,k,P,_,U,D=n.s==i.s?1:-1,x=n.c,E=i.c;if(!x||!x[0]||!E||!E[0])return new F(n.s&&i.s&&(x?!E||x[0]!=E[0]:E)?x&&0==x[0]||!E?0*D:D/0:NaN);for(m=new F(D),v=m.c=[],l=n.e-i.e,D=o+l+1,c||(c=g,l=N(n.e/w)-N(i.e/w),D=D/w|0),s=0;E[s]==(x[s]||0);s++);if(E[s]>(x[s]||0)&&l--,D<0)v.push(1),f=!0;else{for(k=x.length,_=E.length,s=0,D+=2,p=h(c/(E[0]+1)),p>1&&(E=e(E,p,c),x=e(x,p,c),_=E.length,k=x.length),S=_,b=x.slice(0,_),A=b.length;A<_;b[A++]=0);U=E.slice(),U=[0].concat(U),P=E[0],E[1]>=c/2&&P++;do{if(p=0,a=r(E,b,_,A),a<0){if(O=b[0],_!=A&&(O=O*c+(b[1]||0)),p=h(O/P),p>1){p>=c&&(p=c-1),y=e(E,p,c),d=y.length,A=b.length;while(1==r(y,b,d,A))p--,t(y,_<d?U:E,d,c),d=y.length,a=1}else 0==p&&(a=p=1),y=E.slice(),d=y.length;if(d<A&&(y=[0].concat(y)),t(b,y,A,c),A=b.length,-1==a)while(r(E,b,_,A)<1)p++,t(b,_<A?U:E,A,c),A=b.length}else 0===a&&(p++,b=[0]);v[s++]=p,b[0]?b[A++]=x[S]||0:(b=[x[S]],A=1)}while((S++<k||null!=b[0])&&D--);f=null!=b[0],v[0]||v.splice(0,1)}if(c==g){for(s=1,D=v[0];D>=10;D/=10,s++);L(m,o+(m.e=s+l*w-1)+1,u,f)}else m.e=l,m.r=+f;return m}}(),n=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,t=/^\.([^.]+)$/,n=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,u,c,a){var l,s=c?u:u.replace(i,"");if(n.test(s))o.s=isNaN(s)?null:s<0?-1:1;else{if(!c&&(s=s.replace(e,(function(e,r,t){return l="x"==(t=t.toLowerCase())?16:"b"==t?2:8,a&&a!=l?e:r})),a&&(l=a,s=s.replace(r,"$1").replace(t,"0.$1")),u!=s))return new F(s,l);if(F.DEBUG)throw Error(m+"Not a"+(a?" base "+a:"")+" number: "+u);o.s=null}o.c=o.e=null}}(),i.absoluteValue=i.abs=function(){var e=new F(this);return e.s<0&&(e.s=1),e},i.comparedTo=function(e,r){return _(this,new F(e,r))},i.decimalPlaces=i.dp=function(e,r){var t,n,i,o=this;if(null!=e)return U(e,0,S),null==r?r=c:U(r,0,8),L(new F(o),e+o.e+1,r);if(!(t=o.c))return null;if(n=((i=t.length-1)-N(this.e/w))*w,i=t[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},i.dividedBy=i.div=function(e,t){return r(this,new F(e,t),u,c)},i.dividedToIntegerBy=i.idiv=function(e,t){return r(this,new F(e,t),0,1)},i.exponentiatedBy=i.pow=function(e,r){var t,n,i,u,a,l,s,f,p,y=this;if(e=new F(e),e.c&&!e.isInteger())throw Error(m+"Exponent not an integer: "+z(e));if(null!=r&&(r=new F(r)),l=e.e>14,!y.c||!y.c[0]||1==y.c[0]&&!y.e&&1==y.c.length||!e.c||!e.c[0])return p=new F(Math.pow(+z(y),l?e.s*(2-D(e)):+z(e))),r?p.mod(r):p;if(s=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new F(NaN);n=!s&&y.isInteger()&&r.isInteger(),n&&(y=y.mod(r))}else{if(e.e>9&&(y.e>0||y.e<-1||(0==y.e?y.c[0]>1||l&&y.c[1]>=24e7:y.c[0]<8e13||l&&y.c[0]<=9999975e7)))return u=y.s<0&&D(e)?-0:0,y.e>-1&&(u=1/u),new F(s?1/u:u);T&&(u=d(T/w+2))}for(l?(t=new F(.5),s&&(e.s=1),f=D(e)):(i=Math.abs(+z(e)),f=i%2),p=new F(o);;){if(f){if(p=p.times(y),!p.c)break;u?p.c.length>u&&(p.c.length=u):n&&(p=p.mod(r))}if(i){if(i=h(i/2),0===i)break;f=i%2}else if(e=e.times(t),L(e,e.e+1,1),e.e>14)f=D(e);else{if(i=+z(e),0===i)break;f=i%2}y=y.times(y),u?y.c&&y.c.length>u&&(y.c.length=u):n&&(y=y.mod(r))}return n?p:(s&&(p=o.div(p)),r?p.mod(r):u?L(p,T,c,a):p)},i.integerValue=function(e){var r=new F(this);return null==e?e=c:U(e,0,8),L(r,r.e+1,e)},i.isEqualTo=i.eq=function(e,r){return 0===_(this,new F(e,r))},i.isFinite=function(){return!!this.c},i.isGreaterThan=i.gt=function(e,r){return _(this,new F(e,r))>0},i.isGreaterThanOrEqualTo=i.gte=function(e,r){return 1===(r=_(this,new F(e,r)))||0===r},i.isInteger=function(){return!!this.c&&N(this.e/w)>this.c.length-2},i.isLessThan=i.lt=function(e,r){return _(this,new F(e,r))<0},i.isLessThanOrEqualTo=i.lte=function(e,r){return-1===(r=_(this,new F(e,r)))||0===r},i.isNaN=function(){return!this.s},i.isNegative=function(){return this.s<0},i.isPositive=function(){return this.s>0},i.isZero=function(){return!!this.c&&0==this.c[0]},i.minus=function(e,r){var t,n,i,o,u=this,a=u.s;if(e=new F(e,r),r=e.s,!a||!r)return new F(NaN);if(a!=r)return e.s=-r,u.plus(e);var l=u.e/w,s=e.e/w,f=u.c,p=e.c;if(!l||!s){if(!f||!p)return f?(e.s=-r,e):new F(p?u:NaN);if(!f[0]||!p[0])return p[0]?(e.s=-r,e):new F(f[0]?u:3==c?-0:0)}if(l=N(l),s=N(s),f=f.slice(),a=l-s){for((o=a<0)?(a=-a,i=f):(s=l,i=p),i.reverse(),r=a;r--;i.push(0));i.reverse()}else for(n=(o=(a=f.length)<(r=p.length))?a:r,a=r=0;r<n;r++)if(f[r]!=p[r]){o=f[r]<p[r];break}if(o&&(i=f,f=p,p=i,e.s=-e.s),r=(n=p.length)-(t=f.length),r>0)for(;r--;f[t++]=0);for(r=g-1;n>a;){if(f[--n]<p[n]){for(t=n;t&&!f[--t];f[t]=r);--f[t],f[n]+=g}f[n]-=p[n]}for(;0==f[0];f.splice(0,1),--s);return f[0]?q(e,f,s):(e.s=3==c?-1:1,e.c=[e.e=0],e)},i.modulo=i.mod=function(e,t){var n,i,o=this;return e=new F(e,t),!o.c||!e.s||e.c&&!e.c[0]?new F(NaN):!e.c||o.c&&!o.c[0]?new F(o):(9==C?(i=e.s,e.s=1,n=r(o,e,0,3),e.s=i,n.s*=i):n=r(o,e,0,C),e=o.minus(n.times(e)),e.c[0]||1!=C||(e.s=o.s),e)},i.multipliedBy=i.times=function(e,r){var t,n,i,o,u,c,a,l,s,f,p,y,d,h,m,v=this,b=v.c,A=(e=new F(e,r)).c;if(!b||!A||!b[0]||!A[0])return!v.s||!e.s||b&&!b[0]&&!A||A&&!A[0]&&!b?e.c=e.e=e.s=null:(e.s*=v.s,b&&A?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=N(v.e/w)+N(e.e/w),e.s*=v.s,a=b.length,f=A.length,a<f&&(d=b,b=A,A=d,i=a,a=f,f=i),i=a+f,d=[];i--;d.push(0));for(h=g,m=O,i=f;--i>=0;){for(t=0,p=A[i]%m,y=A[i]/m|0,u=a,o=i+u;o>i;)l=b[--u]%m,s=b[u]/m|0,c=y*l+s*p,l=p*l+c%m*m+d[o]+t,t=(l/h|0)+(c/m|0)+y*s,d[o--]=l%h;d[o]=t}return t?++n:d.splice(0,1),q(e,d,n)},i.negated=function(){var e=new F(this);return e.s=-e.s||null,e},i.plus=function(e,r){var t,n=this,i=n.s;if(e=new F(e,r),r=e.s,!i||!r)return new F(NaN);if(i!=r)return e.s=-r,n.minus(e);var o=n.e/w,u=e.e/w,c=n.c,a=e.c;if(!o||!u){if(!c||!a)return new F(i/0);if(!c[0]||!a[0])return a[0]?e:new F(c[0]?n:0*i)}if(o=N(o),u=N(u),c=c.slice(),i=o-u){for(i>0?(u=o,t=a):(i=-i,t=c),t.reverse();i--;t.push(0));t.reverse()}for(i=c.length,r=a.length,i-r<0&&(t=a,a=c,c=t,r=i),i=0;r;)i=(c[--r]=c[r]+a[r]+i)/g|0,c[r]=g===c[r]?0:c[r]%g;return i&&(c=[i].concat(c),++u),q(e,c,u)},i.precision=i.sd=function(e,r){var t,n,i,o=this;if(null!=e&&e!==!!e)return U(e,1,S),null==r?r=c:U(r,0,8),L(new F(o),e,r);if(!(t=o.c))return null;if(i=t.length-1,n=i*w+1,i=t[i]){for(;i%10==0;i/=10,n--);for(i=t[0];i>=10;i/=10,n++);}return e&&o.e+1>n&&(n=o.e+1),n},i.shiftedBy=function(e){return U(e,-b,b),this.times("1e"+e)},i.squareRoot=i.sqrt=function(){var e,t,n,i,o,a=this,l=a.c,s=a.s,f=a.e,p=u+4,y=new F("0.5");if(1!==s||!l||!l[0])return new F(!s||s<0&&(!l||l[0])?NaN:l?a:1/0);if(s=Math.sqrt(+z(a)),0==s||s==1/0?(t=P(l),(t.length+f)%2==0&&(t+="0"),s=Math.sqrt(+t),f=N((f+1)/2)-(f<0||f%2),s==1/0?t="5e"+f:(t=s.toExponential(),t=t.slice(0,t.indexOf("e")+1)+f),n=new F(t)):n=new F(s+""),n.c[0])for(f=n.e,s=f+p,s<3&&(s=0);;)if(o=n,n=y.times(o.plus(r(a,o,p,1))),P(o.c).slice(0,s)===(t=P(n.c)).slice(0,s)){if(n.e<f&&--s,t=t.slice(s-3,s+1),"9999"!=t&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(L(n,n.e+u+2,1),e=!n.times(n).eq(a));break}if(!i&&(L(o,o.e+u+2,0),o.times(o).eq(a))){n=o;break}p+=4,s+=4,i=1}return L(n,n.e+u+1,c,e)},i.toExponential=function(e,r){return null!=e&&(U(e,0,S),e++),j(this,e,r,1)},i.toFixed=function(e,r){return null!=e&&(U(e,0,S),e=e+this.e+1),j(this,e,r)},i.toFormat=function(e,r,t){var n,i=this;if(null==t)null!=e&&r&&"object"==typeof r?(t=r,r=null):e&&"object"==typeof e?(t=e,e=r=null):t=B;else if("object"!=typeof t)throw Error(m+"Argument not an object: "+t);if(n=i.toFixed(e,r),i.c){var o,u=n.split("."),c=+t.groupSize,a=+t.secondaryGroupSize,l=t.groupSeparator||"",s=u[0],f=u[1],p=i.s<0,y=p?s.slice(1):s,d=y.length;if(a&&(o=c,c=a,a=o,d-=o),c>0&&d>0){for(o=d%c||c,s=y.substr(0,o);o<d;o+=c)s+=l+y.substr(o,c);a>0&&(s+=l+y.slice(o)),p&&(s="-"+s)}n=f?s+(t.decimalSeparator||"")+((a=+t.fractionGroupSize)?f.replace(new RegExp("\\d{"+a+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):f):s}return(t.prefix||"")+n+(t.suffix||"")},i.toFraction=function(e){var t,n,i,u,a,l,s,p,y,d,h,v,g=this,b=g.c;if(null!=e&&(s=new F(e),!s.isInteger()&&(s.c||1!==s.s)||s.lt(o)))throw Error(m+"Argument "+(s.isInteger()?"out of range: ":"not an integer: ")+z(s));if(!b)return new F(g);for(t=new F(o),y=n=new F(o),i=p=new F(o),v=P(b),a=t.e=v.length-g.e-1,t.c[0]=A[(l=a%w)<0?w+l:l],e=!e||s.comparedTo(t)>0?a>0?t:y:s,l=f,f=1/0,s=new F(v),p.c[0]=0;;){if(d=r(s,t,0,1),u=n.plus(d.times(i)),1==u.comparedTo(e))break;n=i,i=u,y=p.plus(d.times(u=y)),p=u,t=s.minus(d.times(u=t)),s=u}return u=r(e.minus(n),i,0,1),p=p.plus(u.times(y)),n=n.plus(u.times(i)),p.s=y.s=g.s,a*=2,h=r(y,i,a,c).minus(g).abs().comparedTo(r(p,n,a,c).minus(g).abs())<1?[y,i]:[p,n],f=l,h},i.toNumber=function(){return+z(this)},i.toPrecision=function(e,r){return null!=e&&U(e,1,S),j(this,e,r,2)},i.toString=function(e){var r,n=this,i=n.s,o=n.e;return null===o?i?(r="Infinity",i<0&&(r="-"+r)):r="NaN":(null==e?r=o<=a||o>=l?x(P(n.c),o):E(P(n.c),o,"0"):10===e&&R?(n=L(new F(n),u+o+1,c),r=E(P(n.c),n.e,"0")):(U(e,2,I.length,"Base"),r=t(E(P(n.c),o,"0"),10,e,i,!0)),i<0&&n.c[0]&&(r="-"+r)),r},i.valueOf=i.toJSON=function(){return z(this)},i._isBigNumber=!0,i[Symbol.toStringTag]="BigNumber",i[Symbol.for("nodejs.util.inspect.custom")]=i.valueOf,null!=e&&F.set(e),F}function N(e){var r=0|e;return e>0||e===r?r:r-1}function P(e){for(var r,t,n=1,i=e.length,o=e[0]+"";n<i;){for(r=e[n++]+"",t=w-r.length;t--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function _(e,r){var t,n,i=e.c,o=r.c,u=e.s,c=r.s,a=e.e,l=r.e;if(!u||!c)return null;if(t=i&&!i[0],n=o&&!o[0],t||n)return t?n?0:-c:u;if(u!=c)return u;if(t=u<0,n=a==l,!i||!o)return n?0:!i^t?1:-1;if(!n)return a>l^t?1:-1;for(c=(a=i.length)<(l=o.length)?a:l,u=0;u<c;u++)if(i[u]!=o[u])return i[u]>o[u]^t?1:-1;return a==l?0:a>l^t?1:-1}function U(e,r,t,n){if(e<r||e>t||e!==h(e))throw Error(m+(n||"Argument")+("number"==typeof e?e<r||e>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function D(e){var r=e.c.length-1;return N(e.e/w)==r&&e.c[r]%2!=0}function x(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function E(e,r,t){var n,i;if(r<0){for(i=t+".";++r;i+=t);e=i+e}else if(n=e.length,++r>n){for(i=t,r-=n;--r;i+=t);e+=i}else r<n&&(e=e.slice(0,r)+"."+e.slice(r));return e}var C=k(),T=C,B=(0,n.aZ)({data:e=>({money:20,rate:7,columns:[{title:"Type",dataIndex:"type",key:"type",width:120},{title:"开",dataIndex:"priceStart",key:"priceStart",width:160},{title:"止",dataIndex:"priceOver",key:"priceOver",width:160},{title:"点数",dataIndex:"count",key:"count",width:130},{title:"手数",dataIndex:"number",key:"number",width:130},{title:"止盈",dataIndex:"profit",key:"profit",width:160},{title:"Computer",dataIndex:"computer",key:"computer",width:130},{title:"备注",dataIndex:"remark",key:"remark"}],data:[{type:"NA100",title:"纳斯达克100",_precision:0,valuePriceStart:15010,valuePriceOver:15e3,remark:"1手 1个点 1USD"},{type:"SPX500",title:"标普500",_precision:0,valuePriceStart:4480,valuePriceOver:4470,remark:"1手 1个点 1USD"},{type:"US30",title:"道琼斯",_precision:0,valuePriceStart:35210,valuePriceOver:35200,remark:"1手 1个点 1USD"},{type:"US2000",title:"罗素2000",_precision:0,valuePriceStart:1920,valuePriceOver:1910,remark:"1手 1个点 1USD"},{type:"line",remark:"-"},{type:"GER40",title:"德国40",_precision:0,valuePriceStart:15810,valuePriceOver:15800,remark:"1手 1个点 1USD"},{type:"FH40",title:"法国40",_precision:0,valuePriceStart:7210,valuePriceOver:7200,remark:"1手 1个点 1USD"},{type:"UK100",title:"英国100",_precision:0,valuePriceStart:7520,valuePriceOver:7500,remark:"1手 1个点 1USD 有偏差"},{type:"aus200",title:"澳洲指数",_precision:0,valuePriceStart:7320,valuePriceOver:7300,remark:"1手 1个点 1USD 有偏差"},{type:"jp225",title:"日经指数",_precision:0,valuePriceStart:31787,valuePriceOver:31930,remark:"1手 1个点 1USD 有偏差"},{type:"line",remark:"-"},{type:"CH50",title:"中国50",_precision:0,valuePriceStart:13120,valuePriceOver:13100,remark:"1手 1个点 1USD"},{type:"HK33",title:"恒生指数",_precision:0,valuePriceStart:19190,valuePriceOver:19295,remark:"1手 1个点 1USD 有偏差"},{type:"line",remark:"-"},{type:"XAUUSD",title:"黄金",_precision:0,valuePriceStart:1950,valuePriceOver:1940,remark:"1手 1个点 1USD"},{type:"XAGUSD",title:"白银",_precision:3,valuePriceStart:23.145,valuePriceOver:23.023,remark:"1手 0.001个点 1USD"},{type:"line",remark:"-"},{type:"GBPUSD",title:"英镑-美元",_precision:5,valuePriceStart:1.27181,valuePriceOver:1.2697,remark:"1手 0.00001个点 1USD"},{type:"EURJPY",title:"欧元-日元",_precision:3,valuePriceStart:158.43,valuePriceOver:158.12,remark:"1手 0.001个点 1USD 有偏差"},{type:"AUDNZD",title:"澳元-纽元",_precision:5,valuePriceStart:1.0853,valuePriceOver:1.08365,remark:"1手 0.00001个点 1USD"},{type:"CADCHF",title:"加元-法郎",_precision:5,valuePriceStart:.65178,valuePriceOver:.65052,remark:"1手 0.00001个点 1USD"},{type:"line",remark:"-"},{type:"copper",title:"铜",_precision:2,valuePriceStart:380,valuePriceOver:370,remark:"1手 1个点 1USD"},{type:"USOil",title:"美国原油",_precision:1,valuePriceStart:7391,valuePriceOver:7349,remark:"1手 1个点 1USD"}]}),created(){const e=localStorage.getItem("page_computer_money")||10;this.money=e},methods:{valueChange(e){const{money:r,rate:t}=this,{type:n,valuePriceStart:i,valuePriceOver:o}=e;if(["NA100","SPX500","US30","US2000","GER40","FH40","UK100","aus200","CH50","XAUUSD","copper","USOil"].includes(n)){var u=new T(i).minus(o).absoluteValue().toNumber(),c=new T(u).multipliedBy(t).toNumber();e.number=new T(r).dividedBy(u).toNumber().toFixed(1),i>o?(e.direction="buy",e.profit=new T(i).plus(c).toNumber()):(e.direction="sell",e.profit=new T(i).minus(c).toNumber()),e.count=u}if(["jp225"].includes(n)){u=new T(i).minus(o).absoluteValue().toNumber(),c=new T(u).multipliedBy(t).toNumber();i>o?(e.direction="buy",e.profit=new T(i).plus(c).toNumber()):(e.direction="sell",e.profit=new T(i).minus(c).toNumber()),e.count=u}if(["HK33"].includes(n)){u=new T(i).minus(o).absoluteValue().toNumber(),c=new T(u).multipliedBy(t).toNumber();e.number=new T(r).dividedBy(u).multipliedBy(10).toNumber().toFixed(1),i>o?(e.direction="buy",e.profit=new T(i).plus(c).toNumber()):(e.direction="sell",e.profit=new T(i).minus(c).toNumber()),e.count=u}if(["XAGUSD"].includes(n)){u=new T(i).minus(o).toNumber(),c=new T(u).multipliedBy(t).toNumber();e.number=new T(r).dividedBy(u).toNumber().toFixed(1),i>o?(e.direction="buy",e.profit=new T(i).plus(c).toNumber()):(e.direction="sell",e.profit=new T(i).minus(c).toNumber()),e.count=u}if(["GBPUSD","AUDNZD","CADCHF"].includes(n)){u=new T(i).minus(o).toNumber(),c=new T(u).multipliedBy(t).toNumber();e.number=new T(r).dividedBy(u).dividedBy(1e5).toNumber().toFixed(1),i>o?(e.direction="buy",e.profit=new T(i).plus(c).toNumber()):(e.direction="sell",e.profit=new T(i).minus(c).toNumber()),e.count=u}if(["EURJPY"].includes(n)){u=new T(i).minus(o).toNumber(),c=new T(u).multipliedBy(t).toNumber();e.number=new T(r).dividedBy(u).dividedBy(1e3).toNumber().toFixed(1),i>o?(e.direction="buy",e.profit=new T(i).plus(c).toNumber()):(e.direction="sell",e.profit=new T(i).minus(c).toNumber()),e.count=u}},changeMoney(e){localStorage.setItem("page_computer_money",e)}}}),I=t(89);const R=(0,I.Z)(B,[["render",p]]);var F=R,j={components:{MoudlePage3:F},data:()=>({})};const M=(0,I.Z)(j,[["render",i]]);var q=M}}]);
//# sourceMappingURL=chunk.428.1692000768326.js.map