"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[5174],{8159:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var o=n(73396),r=n(87139),a={class:"backlog-html"},c=(0,o._)("div",{style:{height:"30px"}},null,-1),u=(0,o._)("p",{class:"font-weight-medium text"},"当前工位:",-1),l={class:"font-weight-light text-left"},s=(0,o._)("p",{class:"font-weight-medium text"},"扫描工位:",-1),i={class:"font-weight-light text-left",style:{color:"#00E5FF"}},d=(0,o._)("div",{style:{height:"12px"}},null,-1),p=(0,o._)("div",{style:{height:"32px"}},null,-1);function h(e,t,n,h,f,m){var v=(0,o.up)("AppBarPage"),g=(0,o.up)("ScanBarComponents"),w=(0,o.up)("SelectComponents"),C=(0,o.up)("v-col"),S=(0,o.up)("v-row"),_=(0,o.up)("v-sheet"),x=(0,o.up)("v-btn");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(v),(0,o.Wm)(g,{ref:"scanBar",placeholder:"扫描或输入 工位",onSearchClick:m.barSearchClick},null,8,["onSearchClick"]),(0,o.Wm)(_,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,o.w5)((function(){return[(0,o.Wm)(w,{modelValue:e.product,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.product=t}),ref:"select8",label:"选择工位",showSearch:"",option:e.productSelectOption,onOnSearchChange:m.productSearchChange,onOnChange:m.selectPropertyChange},null,8,["modelValue","option","onOnSearchChange","onOnChange"]),c,(0,o.Wm)(S,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(C,{cols:"3"},{default:(0,o.w5)((function(){return[u]})),_:1}),(0,o.Wm)(C,{cols:"9"},{default:(0,o.w5)((function(){return[(0,o._)("p",l,(0,r.zw)(e.text),1)]})),_:1})]})),_:1}),(0,o.Wm)(S,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(C,{cols:"3"},{default:(0,o.w5)((function(){return[s]})),_:1}),(0,o.Wm)(C,{cols:"9"},{default:(0,o.w5)((function(){return[(0,o._)("p",i,(0,r.zw)(e.scanValue),1)]})),_:1})]})),_:1}),d]})),_:1}),(0,o.Wm)(S,{"no-gutters":""},{default:(0,o.w5)((function(){return[(0,o.Wm)(C,{cols:"12"},{default:(0,o.w5)((function(){return[(0,o.Wm)(x,{onClick:m.submitHandle,color:"primary",block:""},{default:(0,o.w5)((function(){return[(0,o.Uk)(" 提交 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),p])}var f=n(50124),m=n(48534),v=(n(92222),n(73210),n(57658),n(40561),n(21249),n(73378)),g=n(2243),w=n(76496),C=n(37184),S=n(20868),_={components:{AppBarPage:w.Z,ScanBarComponents:v.Z,SelectComponents:g.Z},data:function(){return{text:"",scanValue:"",product:"",productSelectOption:[]}},created:function(){this.initHandle(),this.productHTTP()},methods:{initHandle:function(){var e=JSON.parse(localStorage.getItem("bufferUserStation")||"{}");(e.nodeLevelNo||e.nodeLevelName)&&(this.text="".concat(e.nodeLevelNo,"-").concat(e.nodeLevelName))},barSearchClick:function(){var e=arguments,t=this;return(0,m.Z)((0,f.Z)().mark((function n(){var o,r;return(0,f.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:o=e.length>0&&void 0!==e[0]?e[0]:"",r=o.trim(),t.scanValue=r;case 3:case"end":return n.stop()}}),n)})))()},submitHandle:function(){var e=this;return(0,m.Z)((0,f.Z)().mark((function t(){var n,o,r;return(0,f.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.scanValue){t.next=3;break}return(0,S.LJ)("请扫描工位！"),t.abrupt("return");case 3:return n={ulocNo:e.scanValue},t.next=6,(0,C.i)({url:"/iiot/userUloc/saveUserUloc",method:"post",payload:n});case 6:o=t.sent,r=o.code,200==r&&((0,S.XA)("提交成功！"),e.$router.push("/login"));case 9:case"end":return t.stop()}}),t)})))()},productHTTP:function(){var e=arguments,t=this;return(0,m.Z)((0,f.Z)().mark((function n(){var o,r,a,c,u;return(0,f.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,(0,C.i)({url:"/iiot/nodeLevel/listNodeLevelForSelect",method:"get",url_params:{templateLevelNodeNo:"uloc",status:"1",noOrName:o}});case 3:r=n.sent,a=r.code,c=r.data,u=void 0===c?[]:c,200==a&&(t.productSelectOption=u.map((function(e){return Object.assign({text:"".concat(e.nodeLevelNo,"-").concat(e.nodeLevelName),value:e.nodeLevelNo})})).splice(0,100));case 8:case"end":return n.stop()}}),n)})))()},productSearchChange:function(e){this.productHTTP(e)},selectPropertyChange:function(e){this.scanValue=e}},props:{}},x=n(40089);const k=(0,x.Z)(_,[["render",h]]);var b=k}}]);
//# sourceMappingURL=chunk.5174.1689579697743.js.map