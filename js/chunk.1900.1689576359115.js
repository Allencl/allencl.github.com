"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[1900],{21655:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(73396);function a(e,t,n,a,l,i){var o=(0,r.up)("van-field"),u=(0,r.up)("van-date-picker"),c=(0,r.up)("van-picker-group"),s=(0,r.up)("van-popup");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r.Wm)(o,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.fieldValue=t}),"is-link":"",readonly:"",required:n.required,label:n.label,placeholder:n.placeholder,autocomplete:"off",onClick:t[1]||(t[1]=function(t){return e.showPicker=!0})},null,8,["modelValue","required","label","placeholder"]),(0,r.Wm)(s,{show:e.showPicker,"onUpdate:show":t[4]||(t[4]=function(t){return e.showPicker=t}),round:"",position:"bottom"},{default:(0,r.w5)((function(){return[(0,r.Wm)(c,{title:"预约日期",tabs:["选择日期"],onConfirm:i.onConfirm,onCancel:t[3]||(t[3]=function(t){return e.showPicker=!1})},{default:(0,r.w5)((function(){return[(0,r.Wm)(u,{modelValue:e.currentDate,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.currentDate=t}),"columns-type":n.columnsType,"min-date":e.minDate,"max-date":e.maxDate},null,8,["modelValue","columns-type","min-date","max-date"])]})),_:1},8,["onConfirm"])]})),_:1},8,["show"])])}n(69600);var l={components:{},emits:["update:modelValue"],data:function(){return{fieldValue:"",showPicker:!1,currentDate:[],currentDate2:[],minDate:new Date(2018,0,1),maxDate:new Date(2028,11,1),currentTime:["12","00"]}},methods:{reset:function(){this.fieldValue="",this.$emit("update:modelValue","")},onConfirm:function(){var e=this.currentDate,t=(this.currentTime,"".concat(e.join("-")));this.showPicker=!1,this.fieldValue=t,this.$emit("update:modelValue",t)}},props:{modelValue:{type:String,default:function(){return""}},columnsType:{type:Array,default:function(){return["year","month","day"]}},label:{type:String,default:function(){return"标题"}},placeholder:{type:String,default:function(){return"请选择"}},required:{type:Boolean,default:function(){return!1}}}},i=n(40089);const o=(0,i.Z)(l,[["render",a]]);var u=o},88575:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(73396),a=n(87139),l={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},i=(0,r._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},u=(0,r._)("span",{style:{"margin-right":"3px"}},"页",-1),c=(0,r._)("span",null,"共",-1),s={style:{"padding-left":"1px","padding-right":"1px"}},p=(0,r._)("span",{style:{"margin-right":"3px"}},"页",-1),d=(0,r._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},f=(0,r._)("span",null,"条",-1),h={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function v(e,t,n,v,w,y){var x=(0,r.up)("v-icon"),b=(0,r.up)("v-btn"),k=(0,r.up)("v-card");return(0,r.wg)(),(0,r.iD)("span",null,[e.paging&&n.pagingShow?((0,r.wg)(),(0,r.j4)(k,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:y.previousHandle},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{size:"28"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi-chevron-left")]})),_:1})]})),_:1},8,["onClick"]),(0,r.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:y.nextHandle},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{size:"28"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi-chevron-right")]})),_:1})]})),_:1},8,["onClick"]),(0,r._)("span",l,[i,(0,r._)("span",o,(0,a.zw)(e.current),1),u,c,(0,r._)("span",s,(0,a.zw)(e.page),1),p,d,(0,r._)("span",m,(0,a.zw)(e.totalNum),1),f]),(0,r._)("span",h,[n.showSearchBtn?((0,r.wg)(),(0,r.j4)(b,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:y.searchClick,variant:"plain",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{size:"24",icon:"mdi-magnify"}),(0,r.Uk)(" 查询 ")]})),_:1},8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(b,{onClick:y.refreshClick,style:(0,a.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 刷新 ")]})),_:1},8,["onClick"])])]})),_:1})):(0,r.kq)("",!0),e.items.length?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(e.items,(function(t,n){return(0,r.WI)(e.$slots,"tableBody",{key:n,items:t,_index:n})})),128)):((0,r.wg)(),(0,r.iD)("p",g,[(0,r.Wm)(x,{icon:"mdi-emoticon-sad-outline"}),(0,r.Uk)(" 无数据！ ")]))])}var w=n(50124),y=n(95082),x=n(48534),b=(n(21249),n(37184)),k=n(20868),_={components:{},emits:["searchClick","refresh"],data:function(){return{totalNum:0,current:1,page:0,paging:!0,items:[]}},created:function(){var e=this.auto,t=this.url;e&&t&&this.initFunc()},methods:{previousHandle:function(){var e=this,t=this.current;1!=t?(this.current=t-1,this.$nextTick((function(){e.initFunc(e.current)}))):(0,k.LJ)("第一页！")},nextHandle:function(){var e=this,t=this.current,n=this.page;t>=n?(0,k.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((function(){e.initFunc(e.current)})))},initFunc:function(){var e=arguments,t=this;return(0,x.Z)((0,w.Z)().mark((function n(){var r,a,l,i,o,u,c,s,p,d,m,f,h,g,v,x;return(0,w.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:1,a=e.length>1?e[1]:void 0,l=t.url,i=t.params,o=void 0===i?{}:i,u=t.children,c=t.method,s=t.formatData,!u){n.next=7;break}return t.items=u,t.paging=!1,n.abrupt("return");case 7:return p=(0,y.Z)((0,y.Z)({pageNum:r,pageSize:10},o),a),n.next=10,(0,b.i)({method:c,url:l,payload:"post"==c?p:{},url_params:"get"==c?p:{}});case 10:d=n.sent,m=d.code,f=d.total,h=void 0===f?0:f,g=d.msg,void 0===g?"":g,v=d.data,x=d.rows,200==m&&(t.totalNum=h,t.current=r,t.page=Math.ceil(h/p.pageSize),t.items=s?s(v||x||[]):v||x||[]);case 19:case"end":return n.stop()}}),n)})))()},refreshClick:function(){var e=this.refreshFunc;!e&&this.initFunc(1),this.$emit("refresh")},searchClick:function(){this.$emit("searchClick")},resultData:function(){return this.items||[]},selectAll:function(){this.items=this.items.map((function(e){return Object.assign(e,{_checked:!0})}))}},props:{method:{type:String,default:function(){return"get"}},refreshFunc:{type:Boolean,default:function(){return!1}},showSearchBtn:{type:Boolean,default:function(){return!1}},auto:{type:Boolean,default:function(){return!0}},pagingShow:{type:Boolean,default:function(){return!0}},children:{type:Array,default:function(){}},url:{type:String,default:function(){return""}},params:{type:Object,default:function(){}},formatData:{}}},S=n(40089);const W=(0,S.Z)(_,[["render",v]]);var C=W},19018:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(73396),a=n(87139),l=(0,r._)("span",{style:{"padding-left":"6px"}},"入库",-1),i={style:{"padding-left":"4px","padding-bottom":"4px",color:"#00E5FF"}},o={style:{"padding-left":"4px","padding-bottom":"4px",color:"#00E5FF"}},u={style:{"padding-left":"4px","padding-bottom":"4px",color:"#00E5FF"}},c=(0,r._)("p",{style:{"padding-left":"16px","margin-top":"14px"}},[(0,r._)("span",{style:{color:"red"}},"*"),(0,r.Uk)(" AGV调度")],-1),s=(0,r._)("div",{style:{height:"16px"}},null,-1),p=(0,r._)("div",{style:{height:"16px"}},null,-1),d={style:{"padding-left":"6px"}},m={class:"v-window-item-table"},f=(0,r._)("p",{class:"font-weight-medium text"},"物料编码:",-1),h={class:"font-weight-light"},g=(0,r._)("p",{class:"font-weight-medium text"},"物料名称:",-1),v={class:"font-weight-light"},w=(0,r._)("p",{class:"font-weight-medium text"},"入库数量:",-1),y={class:"font-weight-light"},x=(0,r._)("div",{style:{height:"12px"}},null,-1),b=(0,r._)("div",{style:{height:"80px"}},null,-1);function k(e,t,n,k,_,S){var W=(0,r.up)("AppBarPage"),C=(0,r.up)("v-icon"),V=(0,r.up)("v-col"),N=(0,r.up)("v-row"),D=(0,r.up)("ScanBarComponents"),U=(0,r.up)("v-switch"),Z=(0,r.up)("SelectComponents"),O=(0,r.up)("van-field"),$=(0,r.up)("DatePickerComponents"),z=(0,r.up)("v-sheet"),B=(0,r.up)("v-btn"),F=(0,r.up)("v-badge"),q=(0,r.up)("v-card"),T=(0,r.up)("TableComponents");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r.Wm)(W),(0,r.Wm)(N,{"no-gutters":"",style:{"margin-bottom":"8px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r.Wm)(C,{icon:"mdi-bullhorn",size:"16",color:"primary"}),l]})),_:1}),(0,r.Wm)(V,{cols:"4",class:"text-right",style:{"padding-right":"6px"}})]})),_:1}),(0,r.Wm)(z,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,r.w5)((function(){return[(0,r.Wm)(D,{ref:"scanBar1",placeholder:"扫描或输入 工装编号",onSearchClick:S.barSearchClick},null,8,["onSearchClick"]),(0,r._)("p",i,(0,a.zw)(e.boxSn),1),(0,r.Wm)(D,{ref:"scanBar2",placeholder:"扫描或输入 地码编号",onSearchClick:S.barSearchClick2},null,8,["onSearchClick"]),(0,r._)("p",o,(0,a.zw)(e.storageCode),1),(0,r.Wm)(D,{ref:"scanBar3",placeholder:"扫描物料码",onSearchClick:S.barSearchClick3},null,8,["onSearchClick"]),(0,r._)("p",u,(0,a.zw)(e.text1),1),(0,r.Wm)(N,{"no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{cols:"4"},{default:(0,r.w5)((function(){return[c]})),_:1}),(0,r.Wm)(V,{cols:"8",style:{height:"42px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(U,{modelValue:e.switchUrgency,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.switchUrgency=t}),label:e.switchUrgency?"是":"否",required:"",color:"primary",density:"comfortable",style:{height:"48px",display:"inline-block",width:"104px","margin-left":"14px"}},null,8,["modelValue","label"])]})),_:1})]})),_:1}),(0,r.Wm)(Z,{modelValue:e.user,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.user=t}),ref:"select11",label:"物料编码",required:"",option:e.repairmanSelectOption},null,8,["modelValue","option"]),(0,r.Wm)(O,{modelValue:e.value11,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.value11=t}),type:"number",required:"",placeholder:"请输入",label:"数量",autocomplete:"off"},null,8,["modelValue"]),(0,r.Wm)(O,{modelValue:e.value22,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.value22=t}),placeholder:"请输入",label:"队列序号",autocomplete:"off"},null,8,["modelValue"]),(0,r.Wm)(O,{modelValue:e.value33,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.value33=t}),placeholder:"请输入",label:"追溯码",autocomplete:"off"},null,8,["modelValue"]),(0,r.Wm)(O,{modelValue:e.value44,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.value44=t}),placeholder:"请输入",label:"批次编码",autocomplete:"off"},null,8,["modelValue"]),(0,r.Wm)(O,{modelValue:e.value55,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.value55=t}),placeholder:"请输入",label:"包装号",autocomplete:"off"},null,8,["modelValue"]),(0,r.Wm)(O,{modelValue:e.value66,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.value66=t}),placeholder:"请输入",label:"产品号",autocomplete:"off"},null,8,["modelValue"]),(0,r.Wm)($,{modelValue:e.dateStart,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.dateStart=t}),label:"生产日期",ref:"dateTimeStart","columns-type":["year","month","day"]},null,8,["modelValue"]),(0,r.Wm)($,{modelValue:e.dateOver,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.dateOver=t}),label:"有效日期",ref:"dateTimeOver","columns-type":["year","month","day"]},null,8,["modelValue"])]})),_:1}),s,(0,r.Wm)(N,{"no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{block:"",color:"secondary",onClick:S.onSubmit},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 添加 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),p,(0,r.Wm)(z,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(N,{"no-gutters":"",style:{"margin-bottom":"8px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r.Wm)(C,{icon:"mdi-format-list-bulleted-square",size:"16",color:"primary"}),(0,r._)("span",d,"部件信息列表 ["+(0,a.zw)(e.children.length)+"]",1)]})),_:1}),(0,r.Wm)(V,{cols:"4",class:"text-right",style:{"padding-right":"6px"}})]})),_:1}),(0,r._)("div",m,[(0,r.Wm)(T,{ref:"table1",showSearchBtn:!1,pagingShow:!1,children:e.children},{tableBody:(0,r.w5)((function(e){return[(0,r.Wm)(q,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(N,{"no-gutters":"",class:"table-title"},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{cols:"1"},{default:(0,r.w5)((function(){return[(0,r.Wm)(F,{content:e._index+1,color:"primary",inline:""},null,8,["content"])]})),_:2},1024),(0,r.Wm)(V,{cols:"5"}),(0,r.Wm)(V,{cols:"1",class:"text-right"})]})),_:2},1024),(0,r.Wm)(N,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{cols:"4"},{default:(0,r.w5)((function(){return[f]})),_:1}),(0,r.Wm)(V,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",h,(0,a.zw)(e.items.partNo),1)]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(N,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{cols:"4"},{default:(0,r.w5)((function(){return[g]})),_:1}),(0,r.Wm)(V,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",v,(0,a.zw)(e.items.partName),1)]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(N,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{cols:"4"},{default:(0,r.w5)((function(){return[w]})),_:1}),(0,r.Wm)(V,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",y,(0,a.zw)(e.items.goodsMaterialsNums),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:1},8,["children"])])]})),_:1}),x,(0,r.Wm)(N,{"no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(V,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{block:"",color:"primary",onClick:S.onSubmit22},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 提交 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),b])}var _=n(50124),S=n(48534),W=(n(21249),n(92222),n(9653),n(57327),n(41539),n(73210),n(76496)),C=n(2243),V=n(21655),N=n(88575),D=n(73378),U=n(36797),Z=n.n(U),O=n(20868),$=n(37184),z={components:{AppBarPage:W.Z,SelectComponents:C.Z,DatePickerComponents:V.Z,TableComponents:N.Z,ScanBarComponents:D.Z},data:function(){return{bufferRow:{},children:[],text1:"",switchUrgency:!0,user:"",repairmanSelectOption:[],value11:"",value22:"",value33:"",value44:"",value55:"",value66:"",dateStart:"",dateOver:"",boxSn:"",storageCode:"",reqQty:"",type:"",typeSelectOption:[],type2:"",type2SelectOption:[],abnormalExplain:"",disposeExplain:""}},created:function(){this.initFunc(),this.initRepairman()},methods:{initFunc:function(){var e=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),t=e["ccgl_abnormal_type"]||[];this.typeSelectOption=t.map((function(e){return Object.assign({text:e.lable,value:e.value})}));var n=e["ccgl_abnomal_dispose"]||[];this.type2SelectOption=n.map((function(e){return Object.assign({text:e.lable,value:e.value})}))},initRepairman:function(){var e=this;return(0,S.Z)((0,_.Z)().mark((function t(){var n,r,a,l,i;return(0,_.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.query.deliverySlipId,t.next=3,(0,$.i)({url:"/iiot/deliverySlip/selectPutInStorageList/"+n,method:"get"});case 3:r=t.sent,a=r.code,l=r.data,i=void 0===l?[]:l,200==a&&(e.repairmanSelectOption=i.map((function(e){return Object.assign({text:"".concat(e.partNo||"","-").concat(e.partName||""),value:e.partNo,partNo:e.partNo,partName:e.partName})})));case 8:case"end":return t.stop()}}),t)})))()},onSubmit:function(){var e=this;return(0,S.Z)((0,_.Z)().mark((function t(){var n,r,a;return(0,_.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$route.query,r.deliverySlipId,r.deliverySlipType,r.poNo,r.srmNo,e.user){t.next=4;break}return(0,O.LJ)("物料编码未选！"),t.abrupt("return");case 4:if(e.value11){t.next=7;break}return(0,O.LJ)("数量必填！"),t.abrupt("return");case 7:if(!(Number(e.value11)<=0)){t.next=10;break}return(0,O.LJ)("数量必填大于0！"),t.abrupt("return");case 10:a={partNo:e.user,partName:null===(n=e.repairmanSelectOption.filter((function(t){return t.partNo==e.user}))[0])||void 0===n?void 0:n.partName,goodsMaterialsNums:Number(e.value11),warehouseSn:e.value22,traceSn:e.value33,bnsSn:e.value44,packSn:e.value55,productSn:e.value66,dateOfManufacture:e.dateStart,effectiveDate:e.dateOver},e.children=e.children.concat([a]),e.$nextTick((function(){e.$refs.table1.initFunc(1),e.resetHandle(),e.$refs.scanBar1.reset(),e.$refs.scanBar2.reset(),e.$refs.scanBar3.reset(),e.boxSn="",e.storageCode="",e.text1=""}));case 13:case"end":return t.stop()}}),t)})))()},resetHandle:function(){this.user,this.value11="",this.value22="",this.value33="",this.value44="",this.value55="",this.value66="",this.user="",this.$refs.select11.reset(),this.$refs.dateTimeStart.reset(),this.$refs.dateTimeOver.reset()},barSearchClick:function(e){var t=e.trim();this.boxSn=t},barSearchClick2:function(e){var t=e.trim();this.storageCode=t},onSubmit22:function(){var e=this;return(0,S.Z)((0,_.Z)().mark((function t(){var n,r,a,l,i;return(0,_.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$route.query.deliverySlipId,e.children.length){t.next=4;break}return(0,O.LJ)("未添加部件信息！"),t.abrupt("return");case 4:return r={storageCode:e.storageCode,agv:e.switchUrgency?"Y":"N",boxSn:e.boxSn,deliverySlipId:n,partList:e.children},t.next=7,(0,$.i)({url:"/iiot/putin/receiveProcurementData",method:"post",payload:r});case 7:a=t.sent,l=a.code,i=a.data,void 0===i?[]:i,200==l&&((0,O.XA)("提交成功！"),e.$router.go(-1));case 12:case"end":return t.stop()}}),t)})))()},barSearchClick3:function(e){var t=this.repairmanSelectOption,n=String(e),r=n.split(";");if(3==r.length){var a=t.filter((function(e){return e.partNo==r[0]}));a.length?(this.user=a[0].partNo,this.$refs.select11&&this.$refs.select11.setValue(a[0].partNo),this.value33=r[2],this.value44=Z()(new Date).format("YYYY.MM.DD"),this.text1=e):(0,O.LJ)("物料编码不存在！")}else(0,O.LJ)("物料码格式错误！")}}},B=n(40089);const F=(0,B.Z)(z,[["render",k]]);var q=F}}]);
//# sourceMappingURL=chunk.1900.1689576359115.js.map