"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[541],{50541:function(e,t,l){l.r(t),l.d(t,{default:function(){return v}});var n=l(73396),o=(0,n._)("span",{style:{"padding-left":"6px"}},"添加异常",-1),a=(0,n._)("div",{style:{height:"80px"}},null,-1);function r(e,t,l,r,u,i){var p=(0,n.up)("AppBarPage"),c=(0,n.up)("v-icon"),s=(0,n.up)("v-col"),d=(0,n.up)("v-row"),m=(0,n.up)("SelectComponents"),f=(0,n.up)("van-field"),y=(0,n.up)("v-sheet"),b=(0,n.up)("v-btn");return(0,n.wg)(),(0,n.iD)("span",null,[(0,n.Wm)(p),(0,n.Wm)(d,{"no-gutters":"",style:{"margin-bottom":"8px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(s,{cols:"8"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c,{icon:"mdi-bullhorn",size:"16",color:"error"}),o]})),_:1}),(0,n.Wm)(s,{cols:"4",class:"text-right",style:{"padding-right":"6px"}})]})),_:1}),(0,n.Wm)(y,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,n.w5)((function(){return[(0,n.Wm)(m,{modelValue:e.user,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.user=t}),ref:"select11",label:"物料编码",option:e.repairmanSelectOption},null,8,["modelValue","option"]),(0,n.Wm)(f,{modelValue:e.reqQty,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.reqQty=t}),type:"number",placeholder:"请输入",label:"数量",autocomplete:"off"},null,8,["modelValue"]),(0,n.Wm)(m,{modelValue:e.type,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.type=t}),ref:"select22",label:"异常类型",option:e.typeSelectOption},null,8,["modelValue","option"]),(0,n.Wm)(m,{modelValue:e.type2,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.type2=t}),ref:"select33",label:"处理类型",option:e.type2SelectOption},null,8,["modelValue","option"]),(0,n.Wm)(f,{modelValue:e.abnormalExplain,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.abnormalExplain=t}),placeholder:"请输入",label:"异常说明",autocomplete:"off"},null,8,["modelValue"]),(0,n.Wm)(f,{modelValue:e.disposeExplain,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.disposeExplain=t}),placeholder:"请输入",label:"处理说明",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(d,{"no-gutters":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(s,{cols:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(b,{block:"",color:"primary",onClick:i.onSubmit},{default:(0,n.w5)((function(){return[(0,n.Uk)(" 提交 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),a])}var u=l(95082),i=l(50124),p=l(48534),c=(l(21249),l(92222),l(57658),l(76496)),s=l(2243),d=l(20868),m=l(37184),f={components:{AppBarPage:c.Z,SelectComponents:s.Z},data:function(){return{bufferRow:{},user:"",repairmanSelectOption:[],reqQty:"",type:"",typeSelectOption:[],type2:"",type2SelectOption:[],abnormalExplain:"",disposeExplain:""}},created:function(){this.initFunc(),this.initRepairman()},methods:{initFunc:function(){var e=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),t=e["ccgl_abnormal_type"]||[];this.typeSelectOption=t.map((function(e){return Object.assign({text:e.lable,value:e.value})}));var l=e["ccgl_abnomal_dispose"]||[];this.type2SelectOption=l.map((function(e){return Object.assign({text:e.lable,value:e.value})}))},initRepairman:function(){var e=this;return(0,p.Z)((0,i.Z)().mark((function t(){var l,n;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l=e.$route.query.deliverySlipId,t.next=3,(0,m.i)({url:"/iiot/deliverySlipPart/dict/".concat(l),method:"get"});case 3:n=t.sent,e.repairmanSelectOption=(n||[]).map((function(e){return Object.assign({text:"".concat(e.dictValue||"","-").concat(e.dictLabel||""),value:e.dictValue})}));case 5:case"end":return t.stop()}}),t)})))()},onSubmit:function(){var e=this;return(0,p.Z)((0,i.Z)().mark((function t(){var l,n,o,a,r,p,c,s,f,y;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l=e.$route.query,n=l.deliverySlipId,o=l.deliverySlipType,a=l.poNo,r=l.srmNo,p={abnormalId:null,deliverySlipId:n,deliverySlipType:o,poNo:a,srmNo:r,abnormalType:null,abnormalExplain:null,partNo:null,reqQty:null,partName:null,submitDatetime:null,submitUser:null,disposeType:null,disposeExplain:null,disposeUser:null,disposeDatetime:null,dataState:2,createBy:null,createTime:null,updateBy:null,updateTime:null,delFlag:null,version:null},c=(0,u.Z)((0,u.Z)({},p),{},{partNo:e.user,reqQty:e.reqQty,abnormalType:e.type,disposeType:e.type2,abnormalExplain:e.abnormalExplain,disposeExplain:e.disposeExplain}),t.next=5,(0,m.i)({url:"/iiot/deliverySlipAbnormal",method:"post",payload:c});case 5:s=t.sent,f=s.code,y=s.data,void 0===y?{}:y,200==f&&((0,d.XA)("提交成功！"),e.$router.push({path:"/storage/take",query:{deliverySlipId:n}}));case 10:case"end":return t.stop()}}),t)})))()}}},y=l(40089);const b=(0,y.Z)(f,[["render",r]]);var v=b}}]);
//# sourceMappingURL=chunk.541.1689577168802.js.map