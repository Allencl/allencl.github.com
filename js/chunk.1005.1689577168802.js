"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[1005],{1005:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(73396),o=n(87139),u=(0,r._)("span",{class:"font-weight-medium"},"基础信息",-1),a={class:"text-truncate font-weight-medium text-right text-teal-lighten-1",color:"primary"},c=(0,r._)("div",{style:{height:"6px"}},null,-1),l=(0,r._)("p",{class:"font-weight-medium text"},"产品序列号:",-1),s={class:"font-weight-light"},i=(0,r._)("p",{class:"font-weight-medium text"},"产品物料名称:",-1),f={class:"font-weight-light text-left"},d=(0,r._)("div",{style:{height:"6px"}},null,-1);function m(t,e,n,m,p,h){var w=(0,r.up)("AppBarPage"),g=(0,r.up)("v-icon"),_=(0,r.up)("v-col"),k=(0,r.up)("v-row"),v=(0,r.up)("v-sheet"),b=(0,r.up)("v-btn");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r.Wm)(w),(0,r.Wm)(v,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,r.w5)((function(){return[(0,r.Wm)(k,{"no-gutters":"",class:"custem-card-title"},{default:(0,r.w5)((function(){return[(0,r.Wm)(_,{cols:"7"},{default:(0,r.w5)((function(){return[(0,r.Wm)(g,{icon:"mdi-rocket-launch",size:"16",color:"primary"}),u]})),_:1}),(0,r.Wm)(_,{cols:"5"},{default:(0,r.w5)((function(){return[(0,r._)("p",a,(0,o.zw)(t.bufferRow.abnormalNo),1)]})),_:1})]})),_:1}),c,(0,r.Wm)(k,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(_,{cols:"4"},{default:(0,r.w5)((function(){return[l]})),_:1}),(0,r.Wm)(_,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",s,(0,o.zw)(t.bufferRow.sn),1)]})),_:1})]})),_:1}),(0,r.Wm)(k,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(_,{cols:"4"},{default:(0,r.w5)((function(){return[i]})),_:1}),(0,r.Wm)(_,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",f,(0,o.zw)(t.bufferRow.partName),1)]})),_:1})]})),_:1})]})),_:1}),(0,r._)("div",null,[(0,r.Wm)(k,{"no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(_,{cols:"12",class:"text-center",style:{"margin-bottom":"12px","margin-top":"12px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{onClick:h.orderHandle,color:"#26C6DA",style:{color:"#fff"},block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)("订单配置")]})),_:1},8,["onClick"])]})),_:1}),(0,r.Wm)(_,{cols:"12",class:"text-center",style:{"margin-bottom":"12px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{onClick:h.GPSHandle,color:"#00796B",style:{color:"#fff"},block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)("GPS绑定")]})),_:1},8,["onClick"])]})),_:1}),(0,r.Wm)(_,{cols:"12",class:"text-center",style:{"margin-bottom":"12px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{onClick:h.putStorageHandle,color:"#FF9100",style:{color:"#fff"},block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)("异常转序")]})),_:1},8,["onClick"])]})),_:1}),(0,r.Wm)(_,{cols:"12",class:"text-center",style:{"margin-bottom":"12px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{onClick:h.resultHandle,color:"#9E9D24",style:{color:"#fff"},block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)("整改任务")]})),_:1},8,["onClick"])]})),_:1}),(0,r.Wm)(_,{cols:"12",class:"text-center",style:{"margin-bottom":"12px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{onClick:h.putInStorageHandle,color:"#7B1FA2",style:{color:"#fff"},block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)("入库检")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]),d])}var p=n(50124),h=n(48534),w=(n(57327),n(41539),n(57658),n(76496)),g=n(37184),_={components:{AppBarPage:w.Z},data:function(){return{bufferRow:{}}},created:function(){this.initFunc()},methods:{FormatDictionary:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),r=n[t]||[],o=r.filter((function(t){return e==t.value}))[0]||{};return o},initFunc:function(){var t=this;return(0,h.Z)((0,p.Z)().mark((function e(){var n,r,o,u,a;return(0,p.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.query.ttQmTaskId,e.next=3,(0,g.i)({url:"/iiot/qmTask/getQmTaskData/".concat(n),method:"get"});case 3:r=e.sent,o=r.code,u=r.data,a=void 0===u?{}:u,200==o&&(t.bufferRow=a.qmTaskData||{});case 8:case"end":return e.stop()}}),e)})))()},putStorageHandle:function(){var t=this.bufferRow;this.$router.push({path:"/anomalyInitiateSection/search",query:{_sn:t.sn}})},orderHandle:function(){var t=this.bufferRow;this.$router.push({path:"/taskList/order",query:{orderNo:t.orderNo,sn:t.sn}})},GPSHandle:function(){var t=this.bufferRow;this.$router.push({path:"/taskList/GPS",query:{sn:t.sn}})},resultHandle:function(){var t=this.bufferRow;this.$router.push({path:"/taskList/result",query:{ttPpOrderSnId:t.ttPpOrderSnId}})},putInStorageHandle:function(){var t=this.$route.query,e=(t.qcType,t._pageActive),n=t.ttQmTaskId;t._pageIndex;this.$router.push({path:"/process/detail4",query:{qcType:"IPQCC",_pageActive:e,ttQmTaskId:n,_pageIndex:4}})}}},k=n(40089);const v=(0,k.Z)(_,[["render",m]]);var b=v}}]);
//# sourceMappingURL=chunk.1005.1689577168802.js.map