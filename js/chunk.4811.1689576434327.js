"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[4811],{4811:function(t,l,e){e.r(l),e.d(l,{default:function(){return x}});var n=e(73396),a=e(87139);const r=(0,n._)("div",{style:{height:"12px"}},null,-1),s=(0,n._)("h3",{class:"text-center"},"湖南星邦智能装备股份有限公司",-1),o=(0,n._)("h4",{class:"text-center"},"订单配置表",-1),i=(0,n._)("div",{style:{height:"22px"}},null,-1),u={class:"order-page-table-index1",cellspacing:"0"},c=(0,n._)("td",{class:"lable"},"生产订单号",-1),d=(0,n._)("td",{class:"lable"},"序列号",-1),f=(0,n._)("td",{class:"lable"},"物料号",-1),_=(0,n._)("td",{class:"lable"},"物料描述",-1),w=(0,n._)("td",{class:"lable"},"使用国别",-1),b={colspan:"3"},g=(0,n._)("tr",null,[(0,n._)("td",{colspan:"4"},"基本配置要求")],-1),p={class:"lable"},h={class:"lable"},m=(0,n._)("div",{style:{height:"62px"}},null,-1);function v(t,l,e,v,y,z){var C;const k=(0,n.up)("AppBarPage");return(0,n.wg)(),(0,n.iD)("span",null,[(0,n.Wm)(k),(0,n._)("div",null,[r,s,o,i,(0,n._)("table",u,[(0,n._)("tr",null,[c,(0,n._)("td",null,(0,a.zw)(null===(C=t.bufferRow)||void 0===C?void 0:C.aufnr),1),d,(0,n._)("td",null,(0,a.zw)(t.bufferRow.sernr),1)]),(0,n._)("tr",null,[f,(0,n._)("td",null,(0,a.zw)(t.bufferRow.matnr),1),_,(0,n._)("td",null,(0,a.zw)(t.bufferRow.makt),1)]),(0,n._)("tr",null,[w,(0,n._)("td",b,(0,a.zw)(t.bufferRow.zgb),1)]),g,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.list,((t,l)=>((0,n.wg)(),(0,n.iD)("tr",{key:l},[(0,n._)("td",p,(0,a.zw)(t.atinn),1),(0,n._)("td",null,(0,a.zw)(t.atwtb),1),(0,n._)("td",h,(0,a.zw)(t.atwrt),1),(0,n._)("td",null,(0,a.zw)(t.atnam),1)])))),128))]),m])])}var y=e(76496),z=e(37184),C=e(20868),k={components:{AppBarPage:y.Z},data:()=>({bufferRow:{},list:[]}),created(){this.initFunc(),this.initFunc2()},methods:{GlobalTooltipFunc(t=""){(0,C.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(t="",l=""){const e=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),n=e[t]||[],a=n.filter((t=>l==t.value))[0]||{};return a},async initFunc(){const{sn:t="",orderNo:l=""}=this.$route.query,{code:e,data:n={}}=await(0,z.i)({url:"/iiot/orderConfig/getOrderConfigData",method:"get",url_params:{aufnr:l,sernr:t}});200==e&&(this.bufferRow=n)},async initFunc2(){const{sn:t="",orderNo:l=""}=this.$route.query,{code:e,data:n=[]}=await(0,z.i)({url:"/iiot/orderConfig/getOrderConfigList",method:"get",url_params:{aufnr:l,sernr:t}});200==e&&(this.list=n)}}},F=e(40089);const R=(0,F.Z)(k,[["render",v]]);var x=R}}]);
//# sourceMappingURL=chunk.4811.1689576434327.js.map