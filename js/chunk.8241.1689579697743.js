"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[8241],{28241:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(73396),s=r(87139),u=(0,n._)("p",{class:"font-weight-medium text"},"出入库名称:",-1),o={class:"font-weight-light"},a=(0,n._)("p",{class:"font-weight-medium text"},"业务类型:",-1),i={class:"font-weight-light"},l=(0,n._)("p",{class:"font-weight-medium text"},"单据编码:",-1),c={class:"font-weight-light"},f=(0,n._)("p",{class:"font-weight-medium text"},"物资编码:",-1),m={class:"font-weight-light"},d=(0,n._)("p",{class:"font-weight-medium text"},"出入库说明:",-1),p={class:"font-weight-light"},w=(0,n._)("p",{class:"font-weight-medium text"},"申请数量:",-1),b={class:"font-weight-light"},g=(0,n._)("div",{style:{height:"6px"}},null,-1);function _(e,t,r,_,h,N){var v=(0,n.up)("AppBarPage"),W=(0,n.up)("v-col"),x=(0,n.up)("v-row"),U=(0,n.up)("van-field"),C=(0,n.up)("v-sheet"),P=(0,n.up)("v-btn");return(0,n.wg)(),(0,n.iD)("span",null,[(0,n.Wm)(v),(0,n.Wm)(C,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,n.w5)((function(){return[(0,n.Wm)(x,{"no-gutters":"",class:"text"},{default:(0,n.w5)((function(){return[(0,n.Wm)(W,{cols:"5"},{default:(0,n.w5)((function(){return[u]})),_:1}),(0,n.Wm)(W,{cols:"7"},{default:(0,n.w5)((function(){return[(0,n._)("p",o,(0,s.zw)(e.bufferRow.sparePartUseName),1)]})),_:1})]})),_:1}),(0,n.Wm)(x,{"no-gutters":"",class:"text"},{default:(0,n.w5)((function(){return[(0,n.Wm)(W,{cols:"5"},{default:(0,n.w5)((function(){return[a]})),_:1}),(0,n.Wm)(W,{cols:"7"},{default:(0,n.w5)((function(){return[(0,n._)("p",i,(0,s.zw)(N.FormatDictionary("ccgl_bpbj_business_type",e.bufferRow.businessType)["lable"]),1)]})),_:1})]})),_:1}),(0,n.Wm)(x,{"no-gutters":"",class:"text"},{default:(0,n.w5)((function(){return[(0,n.Wm)(W,{cols:"5"},{default:(0,n.w5)((function(){return[l]})),_:1}),(0,n.Wm)(W,{cols:"7"},{default:(0,n.w5)((function(){return[(0,n._)("p",c,(0,s.zw)(e.bufferRow.businessCode),1)]})),_:1})]})),_:1}),(0,n.Wm)(x,{"no-gutters":"",class:"text"},{default:(0,n.w5)((function(){return[(0,n.Wm)(W,{cols:"5"},{default:(0,n.w5)((function(){return[f]})),_:1}),(0,n.Wm)(W,{cols:"7"},{default:(0,n.w5)((function(){return[(0,n._)("p",m,(0,s.zw)(e.bufferRow.goodsMaterialsCode),1)]})),_:1})]})),_:1}),(0,n.Wm)(x,{"no-gutters":"",class:"text"},{default:(0,n.w5)((function(){return[(0,n.Wm)(W,{cols:"5"},{default:(0,n.w5)((function(){return[d]})),_:1}),(0,n.Wm)(W,{cols:"7"},{default:(0,n.w5)((function(){return[(0,n._)("p",p,(0,s.zw)(e.bufferRow.sparePartUseExplain),1)]})),_:1})]})),_:1}),(0,n.Wm)(x,{"no-gutters":"",class:"text"},{default:(0,n.w5)((function(){return[(0,n.Wm)(W,{cols:"5"},{default:(0,n.w5)((function(){return[w]})),_:1}),(0,n.Wm)(W,{cols:"7"},{default:(0,n.w5)((function(){return[(0,n._)("p",b,(0,s.zw)(e.bufferRow.goodsMaterialsNums),1)]})),_:1})]})),_:1}),(0,n.Wm)(U,{modelValue:e.number,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.number=t}),placeholder:"请输入",autocomplete:"off",label:"归还数量",required:"",type:"number"},null,8,["modelValue"])]})),_:1}),g,(0,n.Wm)(P,{onClick:N.submit,block:"",color:"primary"},{default:(0,n.w5)((function(){return[(0,n.Uk)(" 提交 ")]})),_:1},8,["onClick"])])}var h=r(82482),N=r(50124),v=r(48534),W=(r(57327),r(41539),r(9653),r(76496)),x=r(37184),U=r(20868),C={components:{AppBarPage:W.Z},data:function(){return{bufferRow:{},number:""}},created:function(){this.initFunc()},methods:{FormatDictionary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),n=r[e]||[],s=n.filter((function(e){return t==e.value}))[0]||{};return s},initFunc:function(){var e=this;return(0,v.Z)((0,N.Z)().mark((function t(){var r,n;return(0,N.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.$route.query.row,n=void 0===r?{}:r,e.bufferRow=JSON.parse(n),e.$nextTick((function(){e.number=e.bufferRow.goodsMaterialsNums}));case 3:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;return(0,v.Z)((0,N.Z)().mark((function t(){var r,n,s,u,o,a;return(0,N.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.bufferRow,n=JSON.parse(localStorage.getItem("bufferUserInfo")||"{}"),e.number&&!(Number(e.number)<=0)){t.next=5;break}return(0,U.LJ)("归还数量必填大于0！"),t.abrupt("return");case 5:if(!(Number(e.number)>Number(r.goodsMaterialsNums))){t.next=8;break}return(0,U.LJ)("归还数量不能大于申请数量！"),t.abrupt("return");case 8:return s=(0,h.Z)({businessId:r.sparePartUseId,businessCode:r.sparePartUseCode,businessName:r.sparePartUseName,sparePartUseCode:"GH-"+r.goodsMaterialsCode,sparePartUseName:r.sparePartUseName+"归还物料",sparePartUseExplain:r.sparePartUseCode+"-"+r.sparePartUseName+"归还物料",useInfoType:"1",businessType:r.businessType,operType:"Y",goodsMaterialsId:r.goodsMaterialsId,goodsMaterialsCode:r.goodsMaterialsCode,goodsMaterialsName:r.goodsMaterialsName,goodsMaterialsNums:r.outNums,operUserName:n.userName,operUserCode:n.userId,finishState:"N"},"goodsMaterialsNums",Number(e.number)),t.next=11,(0,x.i)({url:"/iiot/sparePartUse",method:"post",payload:s});case 11:u=t.sent,o=u.code,a=u.data,void 0===a?{}:a,200==o&&((0,U.XA)("提交成功！"),e.$router.go(-1));case 16:case"end":return t.stop()}}),t)})))()}}},P=r(40089);const k=(0,P.Z)(C,[["render",_]]);var y=k}}]);
//# sourceMappingURL=chunk.8241.1689579697743.js.map