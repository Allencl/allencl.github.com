"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[8353],{14614:function(e,t,n){n.d(t,{m:function(){return o}});var r=n(50124),a=n(48534),i=n(37184),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:t.payload});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},88575:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(73396),a=n(87139),i={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},o=(0,r._)("span",null,"第",-1),s={style:{"padding-left":"1px","padding-right":"1px"}},u=(0,r._)("span",{style:{"margin-right":"3px"}},"页",-1),l=(0,r._)("span",null,"共",-1),c={style:{"padding-left":"1px","padding-right":"1px"}},p=(0,r._)("span",{style:{"margin-right":"3px"}},"页",-1),d=(0,r._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},f=(0,r._)("span",null,"条",-1),h={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(e,t,n,w,v,x){var b=(0,r.up)("v-icon"),k=(0,r.up)("v-btn"),y=(0,r.up)("v-card");return(0,r.wg)(),(0,r.iD)("span",null,[e.paging&&n.pagingShow?((0,r.wg)(),(0,r.j4)(y,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(k,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:x.previousHandle},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{size:"28"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi-chevron-left")]})),_:1})]})),_:1},8,["onClick"]),(0,r.Wm)(k,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:x.nextHandle},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{size:"28"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi-chevron-right")]})),_:1})]})),_:1},8,["onClick"]),(0,r._)("span",i,[o,(0,r._)("span",s,(0,a.zw)(e.current),1),u,l,(0,r._)("span",c,(0,a.zw)(e.page),1),p,d,(0,r._)("span",m,(0,a.zw)(e.totalNum),1),f]),(0,r._)("span",h,[n.showSearchBtn?((0,r.wg)(),(0,r.j4)(k,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:x.searchClick,variant:"plain",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{size:"24",icon:"mdi-magnify"}),(0,r.Uk)(" 查询 ")]})),_:1},8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(k,{onClick:x.refreshClick,style:(0,a.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 刷新 ")]})),_:1},8,["onClick"])])]})),_:1})):(0,r.kq)("",!0),e.items.length?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(e.items,(function(t,n){return(0,r.WI)(e.$slots,"tableBody",{key:n,items:t,_index:n})})),128)):((0,r.wg)(),(0,r.iD)("p",g,[(0,r.Wm)(b,{icon:"mdi-emoticon-sad-outline"}),(0,r.Uk)(" 无数据！ ")]))])}var v=n(50124),x=n(95082),b=n(48534),k=(n(21249),n(37184)),y=n(20868),N={components:{},emits:["searchClick","refresh"],data:function(){return{totalNum:0,current:1,page:0,paging:!0,items:[]}},created:function(){var e=this.auto,t=this.url;e&&t&&this.initFunc()},methods:{previousHandle:function(){var e=this,t=this.current;1!=t?(this.current=t-1,this.$nextTick((function(){e.initFunc(e.current)}))):(0,y.LJ)("第一页！")},nextHandle:function(){var e=this,t=this.current,n=this.page;t>=n?(0,y.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((function(){e.initFunc(e.current)})))},initFunc:function(){var e=arguments,t=this;return(0,b.Z)((0,v.Z)().mark((function n(){var r,a,i,o,s,u,l,c,p,d,m,f,h,g,w,b;return(0,v.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:1,a=e.length>1?e[1]:void 0,i=t.url,o=t.params,s=void 0===o?{}:o,u=t.children,l=t.method,c=t.formatData,!u){n.next=7;break}return t.items=u,t.paging=!1,n.abrupt("return");case 7:return p=(0,x.Z)((0,x.Z)({pageNum:r,pageSize:10},s),a),n.next=10,(0,k.i)({method:l,url:i,payload:"post"==l?p:{},url_params:"get"==l?p:{}});case 10:d=n.sent,m=d.code,f=d.total,h=void 0===f?0:f,g=d.msg,void 0===g?"":g,w=d.data,b=d.rows,200==m&&(t.totalNum=h,t.current=r,t.page=Math.ceil(h/p.pageSize),t.items=c?c(w||b||[]):w||b||[]);case 19:case"end":return n.stop()}}),n)})))()},refreshClick:function(){var e=this.refreshFunc;!e&&this.initFunc(1),this.$emit("refresh")},searchClick:function(){this.$emit("searchClick")},resultData:function(){return this.items||[]},selectAll:function(){this.items=this.items.map((function(e){return Object.assign(e,{_checked:!0})}))}},props:{method:{type:String,default:function(){return"get"}},refreshFunc:{type:Boolean,default:function(){return!1}},showSearchBtn:{type:Boolean,default:function(){return!1}},auto:{type:Boolean,default:function(){return!0}},pagingShow:{type:Boolean,default:function(){return!0}},children:{type:Array,default:function(){}},url:{type:String,default:function(){return""}},params:{type:Object,default:function(){}},formatData:{}}},_=n(40089);const C=(0,_.Z)(N,[["render",w]]);var I=C},18353:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(73396),a=n(87139),i=(0,r._)("div",{style:{height:"8px"}},null,-1),o={class:"v-window-item-table"},s=(0,r._)("p",{class:"text-truncate font-weight-light"},"领用物料",-1),u={class:"text-truncate font-weight-medium text-right text-teal-lighten-1",color:"primary"},l={class:"text-truncate font-weight-light"},c=(0,r._)("p",{class:"font-weight-medium text"},"规格型号:",-1),p={class:"font-weight-light"},d=(0,r._)("p",{class:"text-truncate font-weight-light",style:{position:"relative",top:"4px"}},"领用数量",-1);function m(e,t,n,m,f,h){var g=(0,r.up)("AppBarPage"),w=(0,r.up)("v-icon"),v=(0,r.up)("v-text-field"),x=(0,r.up)("v-badge"),b=(0,r.up)("v-col"),k=(0,r.up)("v-row"),y=(0,r.up)("van-field"),N=(0,r.up)("v-btn"),_=(0,r.up)("v-card"),C=(0,r.up)("TableComponents");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r.Wm)(g),(0,r._)("div",null,[(0,r.Wm)(v,{modelValue:e.searchInputValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchInputValue=t}),density:"compact",variant:"solo",elevation:"0","single-line":"","hide-details":"",placeholder:"请输入 备件编码",autocomplete:"off"},{"append-inner":(0,r.w5)((function(){return[(0,r.Wm)(w,{onClick:h.appendIcon,color:"primary",icon:"mdi-magnify"},null,8,["onClick"])]})),_:1},8,["modelValue"]),i,(0,r.Wm)(v,{modelValue:e.searchInputNameValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchInputNameValue=t}),density:"compact",variant:"solo",elevation:"0","single-line":"","hide-details":"",placeholder:"请输入 名称",autocomplete:"off"},{"append-inner":(0,r.w5)((function(){return[(0,r.Wm)(w,{onClick:h.appendNameIcon,color:"primary",icon:"mdi-magnify"},null,8,["onClick"])]})),_:1},8,["modelValue"])]),(0,r._)("div",o,[(0,r.Wm)(C,{ref:"table1",url:"/iiot/sparePartUse/getGoodsMaterialsList"},{tableBody:(0,r.w5)((function(e){return[(0,r.Wm)(_,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(k,{"no-gutters":"",class:"table-title"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{cols:"1"},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{content:e._index+1,color:"primary",inline:""},null,8,["content"])]})),_:2},1024),(0,r.Wm)(b,{cols:"3"},{default:(0,r.w5)((function(){return[s]})),_:1}),(0,r.Wm)(b,{cols:"8",class:"text-right"},{default:(0,r.w5)((function(){return[(0,r._)("p",u,(0,a.zw)(e.items.goodsMaterialsCode)+"-"+(0,a.zw)(e.items.goodsMaterialsName),1)]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(k,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r._)("p",l,"当前库存量: "+(0,a.zw)(e.items.goodsMaterialsNums),1)]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(k,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{cols:"4"},{default:(0,r.w5)((function(){return[c]})),_:1}),(0,r.Wm)(b,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",p,(0,a.zw)(e.items.partModel),1)]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(k,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{cols:"3"},{default:(0,r.w5)((function(){return[d]})),_:1}),(0,r.Wm)(b,{cols:"6",class:"text-left"},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,{modelValue:e.items._number,"onUpdate:modelValue":function(t){return e.items._number=t},style:{padding:"0px",color:"16px"},placeholder:"请输入领用数量",autocomplete:"off",type:"number"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024),(0,r.Wm)(b,{cols:"3",class:"text-right"},{default:(0,r.w5)((function(){return[(0,r.Wm)(N,{onClick:function(t){return h.submitClick(e)},color:"primary mt-1",density:"compact"},{default:(0,r.w5)((function(){return[(0,r.Uk)("提交")]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:1},512)])])}var f=n(50124),h=n(48534),g=(n(57327),n(41539),n(73210),n(9653),n(76496)),w=n(88575),v=n(37184),x=n(2243),b=(n(14614),n(20868)),k={components:{AppBarPage:g.Z,SelectComponents:x.Z,TableComponents:w.Z},data:function(){return{bufferRow:{},searchInputValue:"",searchInputNameValue:"",tableChildren:[],material:"",materialSelectOption:[]}},created:function(){this.initFunc()},methods:{FormatDictionary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),r=n[e]||[],a=r.filter((function(e){return t==e.value}))[0]||{};return a},initFunc:function(){var e=this;return(0,h.Z)((0,f.Z)().mark((function t(){var n,r;return(0,f.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.$route.query.row,r=void 0===n?"{}":n,e.bufferRow=JSON.parse(r);case 2:case"end":return t.stop()}}),t)})))()},appendIcon:function(){var e=this;return(0,h.Z)((0,f.Z)().mark((function t(){return(0,f.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$nextTick((function(){e.$refs.table1.initFunc(1,{goodsMaterialsCode:e.searchInputValue.trim()})}));case 1:case"end":return t.stop()}}),t)})))()},appendNameIcon:function(){var e=this;return(0,h.Z)((0,f.Z)().mark((function t(){return(0,f.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$nextTick((function(){e.$refs.table1.initFunc(1,{goodsMaterialsName:e.searchInputNameValue.trim()})}));case 1:case"end":return t.stop()}}),t)})))()},materialHTTP:function(e){return(0,h.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},submitClick:function(e){var t=this;return(0,h.Z)((0,f.Z)().mark((function n(){var r,a,i,o,s,u,l,c,p,d;return(0,f.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.$route.query.activeType,a=void 0===r?"":r,i=e.items,o=t.bufferRow,s=Number(i._number||0),u=JSON.parse(localStorage.getItem("bufferUserInfo")||"{}"),!(s<=0)){n.next=8;break}return(0,b.LJ)("领用数量必须大于0"),n.abrupt("return");case 8:if(!(s>i.goodsMaterialsNums)){n.next=11;break}return(0,b.LJ)("领用数量不能大于当前库存量！"),n.abrupt("return");case 11:return l={},"equipment"==a&&(l={operUserName:u.userName,operUserCode:u.userId,finishState:"N",sparePartUseName:o.equipmentName,sparePartUseExplain:"设备报修备件领用",useInfoType:2,businessType:2,businessId:o.teAdRepairId,businessCode:o.teAdRepairId,businessName:"设备维修",goodsMaterialsId:i.goodsMaterialsId,goodsMaterialsCode:i.goodsMaterialsCode,goodsMaterialsName:i.goodsMaterialsName,goodsMaterialsNums:Number(i._number)}),"maintain"==a&&(l={operUserName:u.userName,operUserCode:u.userId,finishState:"N",sparePartUseName:o.equipmentName,sparePartUseExplain:"设备保养备件领用",useInfoType:2,businessType:3,businessId:o.teWbMainTaskId,businessCode:o.teWbMainTaskId,businessName:"设备保养",goodsMaterialsId:i.goodsMaterialsId,goodsMaterialsCode:i.goodsMaterialsCode,goodsMaterialsName:i.goodsMaterialsName,goodsMaterialsNums:Number(i._number)}),"check"==a&&(l={operUserName:u.userName,operUserCode:u.userId,finishState:"N",sparePartUseName:o.equipmentName,sparePartUseExplain:"设备点检备件领用",useInfoType:2,businessType:4,businessId:o.ttCheckTaskId,businessCode:o.ttCheckTaskId,businessName:"设备点检",goodsMaterialsId:i.goodsMaterialsId,goodsMaterialsCode:i.goodsMaterialsCode,goodsMaterialsName:i.goodsMaterialsName,goodsMaterialsNums:Number(i._number)}),"checkCreate"==a&&(l={operUserName:u.userName,operUserCode:u.userId,finishState:"N",sparePartUseName:o.eEquipmentName,sparePartUseExplain:"设备点检备件领用",useInfoType:2,businessType:4,businessId:o.ttCheckTaskId,businessCode:o.ttCheckTaskId,businessName:"设备点检",goodsMaterialsId:i.goodsMaterialsId,goodsMaterialsCode:i.goodsMaterialsCode,goodsMaterialsName:i.goodsMaterialsName,goodsMaterialsNums:Number(i._number)}),n.next=18,(0,v.i)({url:"/iiot/sparePartUse",method:"post",payload:l});case 18:c=n.sent,p=c.code,d=c.data,void 0===d?{}:d,200==p&&((0,b.XA)("提交成功！"),t.$router.go(-1));case 23:case"end":return n.stop()}}),n)})))()}}},y=n(40089);const N=(0,y.Z)(k,[["render",m]]);var _=N}}]);
//# sourceMappingURL=chunk.8353.1689577168802.js.map