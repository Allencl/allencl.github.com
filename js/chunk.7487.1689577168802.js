"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[7487],{88575:function(t,e,n){n.d(e,{Z:function(){return F}});var r=n(73396),a=n(87139),i={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},u=(0,r._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},s=(0,r._)("span",{style:{"margin-right":"3px"}},"页",-1),l=(0,r._)("span",null,"共",-1),c={style:{"padding-left":"1px","padding-right":"1px"}},f=(0,r._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,r._)("span",null,"总",-1),d={style:{"padding-left":"1px","padding-right":"1px"}},m=(0,r._)("span",null,"条",-1),g={style:{position:"relative",top:"1px","margin-left":"0px"}},h={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(t,e,n,w,_,k){var y=(0,r.up)("v-icon"),b=(0,r.up)("v-btn"),x=(0,r.up)("v-card");return(0,r.wg)(),(0,r.iD)("span",null,[t.paging&&n.pagingShow?((0,r.wg)(),(0,r.j4)(x,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:k.previousHandle},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,{size:"28"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi-chevron-left")]})),_:1})]})),_:1},8,["onClick"]),(0,r.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:k.nextHandle},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,{size:"28"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi-chevron-right")]})),_:1})]})),_:1},8,["onClick"]),(0,r._)("span",i,[u,(0,r._)("span",o,(0,a.zw)(t.current),1),s,l,(0,r._)("span",c,(0,a.zw)(t.page),1),f,p,(0,r._)("span",d,(0,a.zw)(t.totalNum),1),m]),(0,r._)("span",g,[n.showSearchBtn?((0,r.wg)(),(0,r.j4)(b,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:k.searchClick,variant:"plain",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,{size:"24",icon:"mdi-magnify"}),(0,r.Uk)(" 查询 ")]})),_:1},8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(b,{onClick:k.refreshClick,style:(0,a.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 刷新 ")]})),_:1},8,["onClick"])])]})),_:1})):(0,r.kq)("",!0),t.items.length?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(t.items,(function(e,n){return(0,r.WI)(t.$slots,"tableBody",{key:n,items:e,_index:n})})),128)):((0,r.wg)(),(0,r.iD)("p",h,[(0,r.Wm)(y,{icon:"mdi-emoticon-sad-outline"}),(0,r.Uk)(" 无数据！ ")]))])}var _=n(50124),k=n(95082),y=n(48534),b=(n(21249),n(37184)),x=n(20868),v={components:{},emits:["searchClick","refresh"],data:function(){return{totalNum:0,current:1,page:0,paging:!0,items:[]}},created:function(){var t=this.auto,e=this.url;t&&e&&this.initFunc()},methods:{previousHandle:function(){var t=this,e=this.current;1!=e?(this.current=e-1,this.$nextTick((function(){t.initFunc(t.current)}))):(0,x.LJ)("第一页！")},nextHandle:function(){var t=this,e=this.current,n=this.page;e>=n?(0,x.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((function(){t.initFunc(t.current)})))},initFunc:function(){var t=arguments,e=this;return(0,y.Z)((0,_.Z)().mark((function n(){var r,a,i,u,o,s,l,c,f,p,d,m,g,h,w,y;return(0,_.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:1,a=t.length>1?t[1]:void 0,i=e.url,u=e.params,o=void 0===u?{}:u,s=e.children,l=e.method,c=e.formatData,!s){n.next=7;break}return e.items=s,e.paging=!1,n.abrupt("return");case 7:return f=(0,k.Z)((0,k.Z)({pageNum:r,pageSize:10},o),a),n.next=10,(0,b.i)({method:l,url:i,payload:"post"==l?f:{},url_params:"get"==l?f:{}});case 10:p=n.sent,d=p.code,m=p.total,g=void 0===m?0:m,h=p.msg,void 0===h?"":h,w=p.data,y=p.rows,200==d&&(e.totalNum=g,e.current=r,e.page=Math.ceil(g/f.pageSize),e.items=c?c(w||y||[]):w||y||[]);case 19:case"end":return n.stop()}}),n)})))()},refreshClick:function(){var t=this.refreshFunc;!t&&this.initFunc(1),this.$emit("refresh")},searchClick:function(){this.$emit("searchClick")},resultData:function(){return this.items||[]},selectAll:function(){this.items=this.items.map((function(t){return Object.assign(t,{_checked:!0})}))}},props:{method:{type:String,default:function(){return"get"}},refreshFunc:{type:Boolean,default:function(){return!1}},showSearchBtn:{type:Boolean,default:function(){return!1}},auto:{type:Boolean,default:function(){return!0}},pagingShow:{type:Boolean,default:function(){return!0}},children:{type:Array,default:function(){}},url:{type:String,default:function(){return""}},params:{type:Object,default:function(){}},formatData:{}}},W=n(40089);const T=(0,W.Z)(v,[["render",w]]);var F=T},57265:function(t,e,n){n.d(e,{Z:function(){return _}});var r=n(73396),a={style:{padding:"0px 12px 0px 12px"}},i={key:0,class:"font-weight-medium text",style:{"margin-bottom":"8px"}},u={key:1,style:{"margin-bottom":"8px"},class:"font-weight-medium text"},o={class:"custem-iamge-upload"},s=["src"];function l(t,e,n,l,c,f){var p=(0,r.up)("van-uploader"),d=(0,r.up)("v-icon");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r._)("div",a,[n.preview?((0,r.wg)(),(0,r.iD)("p",i,"图片预览 ")):((0,r.wg)(),(0,r.iD)("p",u," 图片上传 ")),n.preview?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(p,{key:2,"after-read":f.afterRead,"preview-image":!1},null,8,["after-read"])),(0,r._)("div",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.bufferFileList,(function(a,i){return(0,r.wg)(),(0,r.iD)("li",{key:i,onClick:e[0]||(e[0]=function(e){return f.checkImage(t.bufferFileList)})},[(0,r._)("img",{src:a.url},null,8,s),n.preview?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(d,{key:0,onClick:function(t){return f.removeClick(a,t)},class:"icon",icon:"mdi-close-circle-outline",color:"red"},null,8,["onClick"]))])})),128))])])])}var c=n(50124),f=n(48534),p=(n(21249),n(26699),n(32023),n(92222),n(38862),n(57327),n(41539),n(37184)),d=n(20868),m=n(9801),g={components:{},emits:["update:modelValue","onChange"],data:function(){return{bufferFileList:[]}},watch:{modelValue:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.bufferFileList=t},deep:!0,immediate:!0},initPath:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&(this.bufferFileList=t.split(",").map((function(t){return Object.assign({url:t})})))},deep:!0,immediate:!0}},methods:{checkImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.length&&(0,m.V)(t.map((function(t){return t.url})))},afterRead:function(t){var e=this;return(0,f.Z)((0,c.Z)().mark((function n(){var r,a,i,u,o;return(0,c.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.file.type.includes("image")){n.next=3;break}return(0,d.LJ)("只能选择图片！"),n.abrupt("return");case 3:if(!(t.file.size>=19922944)){n.next=6;break}return(0,d.LJ)("图片超过20M！"),n.abrupt("return");case 6:if(!(e.bufferFileList.length>2)){n.next=9;break}return(0,d.LJ)("最多只能选择3张图片！"),n.abrupt("return");case 9:return r=new FormData,r.append("file",t.file),n.next=13,(0,p.i)({url:"/file/upload",method:"post",formData:!0,payload:r});case 13:a=n.sent,i=a.code,u=a.data,o=void 0===u?{}:u,200==i?(e.bufferFileList=e.bufferFileList.concat([o]),(0,d.XA)("图片上传成功！"),e.$emit("update:modelValue",JSON.parse(JSON.stringify(e.bufferFileList)))):(0,d.LJ)("图片上传失败！");case 18:case"end":return n.stop()}}),n)})))()},removeClick:function(t,e){var n=this;e.stopPropagation(),this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter((function(e){return e.url!=t.url})),this.$nextTick((function(){n.$emit("update:modelValue",JSON.parse(JSON.stringify(n.bufferFileList)))}))}},props:{modelValue:{type:Array,default:function(){return[]}},initPath:{type:String,default:function(){return""}},preview:{type:Boolean,default:function(){return!1}}}},h=n(40089);const w=(0,h.Z)(g,[["render",l]]);var _=w},47487:function(t,e,n){n.r(e),n.d(e,{default:function(){return M}});n(57327),n(41539);var r=n(73396),a=n(87139),i=(0,r._)("p",{class:"font-weight-medium text"},"检验产品:",-1),u=(0,r._)("p",{class:"font-weight-medium text"},"订单号:",-1),o={class:"text-truncate font-weight-light"},s=(0,r._)("p",{class:"font-weight-medium text"},"工作中心:",-1),l={class:"text-truncate font-weight-light"},c=(0,r._)("p",{class:"font-weight-medium text"},"产品SN号:",-1),f={class:"text-truncate font-weight-light"},p=(0,r._)("p",{class:"font-weight-medium text"},"检验类型:",-1),d={class:"text-truncate font-weight-light"},m={class:"text-truncate font-weight-light"},g=(0,r._)("span",{class:"font-weight-medium text"},"检验数量: ",-1),h={class:"text-truncate font-weight-light"},w={style:{color:"#00E5FF"}},_={class:"text-truncate font-weight-light font-weight-medium text"},k={style:{"padding-left":"12px",color:"#00E5FF"}},y=(0,r._)("div",{style:{height:"6px"}},null,-1),b={class:"font-weight-light",style:{color:"#00E5FF"}},x=(0,r._)("p",{class:"font-weight-medium text"},"检验项目:",-1),v=["onClick"],W=(0,r._)("span",{class:"font-weight-medium text"},"检验明细:",-1),T=["onClick"],F={class:"text-truncate font-weight-light"},D=(0,r._)("span",{class:"font-weight-medium text"},"标准值: ",-1),C={class:"text-truncate font-weight-light"},S=(0,r._)("span",{class:"font-weight-medium text"},"最大值: ",-1),q={class:"text-truncate font-weight-light"},L=(0,r._)("span",{class:"font-weight-medium text"},"最小值: ",-1),R=(0,r._)("div",{style:{height:"3px"}},null,-1),O=(0,r._)("p",{style:{"margin-top":"8px"},class:"font-weight-medium text input-lable"},"检验结果:",-1),N=(0,r._)("div",{style:{height:"80px"}},null,-1),I=(0,r._)("span",null,"结果: ",-1),Z={key:2},j=(0,r._)("div",{style:{height:"60px"}},null,-1);function U(t,e,n,U,V,$){var J=(0,r.up)("AppBarPage"),z=(0,r.up)("v-col"),A=(0,r.up)("v-row"),H=(0,r.up)("v-sheet"),P=(0,r.up)("SelectComponents"),B=(0,r.up)("v-btn"),Q=(0,r.up)("v-badge"),X=(0,r.up)("van-field"),E=(0,r.up)("v-switch"),G=(0,r.up)("UploaderImageComponents"),M=(0,r.up)("TableComponents");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r.Wm)(J),(0,r.Wm)(H,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,r.w5)((function(){return[(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"4"},{default:(0,r.w5)((function(){return[i]})),_:1}),(0,r.Wm)(z,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",{onClick:e[0]||(e[0]=function(e){return $.GlobalTooltipFunc(t.bufferRow.partName)}),class:"font-weight-light text-left"},(0,a.zw)(t.bufferRow.partName),1)]})),_:1})]})),_:1}),(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"4"},{default:(0,r.w5)((function(){return[u]})),_:1}),(0,r.Wm)(z,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",o,(0,a.zw)(t.bufferRow.orderNo),1)]})),_:1})]})),_:1}),(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"4"},{default:(0,r.w5)((function(){return[s]})),_:1}),(0,r.Wm)(z,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",l,(0,a.zw)(t.bufferRow.nodeLevelName),1)]})),_:1})]})),_:1}),(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"4"},{default:(0,r.w5)((function(){return[c]})),_:1}),(0,r.Wm)(z,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",f,(0,a.zw)(t.bufferRow.sn),1)]})),_:1})]})),_:1}),(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"4"},{default:(0,r.w5)((function(){return[p]})),_:1}),(0,r.Wm)(z,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",d,(0,a.zw)($.FormatDictionary("test_type",t.bufferRow.taskType)["lable"]),1)]})),_:1})]})),_:1}),(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"6"},{default:(0,r.w5)((function(){return[(0,r._)("p",m,[g,(0,r.Uk)(" "+(0,a.zw)(t.bufferRow.taskQty),1)])]})),_:1}),(0,r.Wm)(z,{cols:"6",class:"text-right"},{default:(0,r.w5)((function(){return[(0,r._)("p",h,[(0,r.Uk)(" 状态: "),(0,r._)("span",w,(0,a.zw)($.FormatDictionary("qm_task_status",t.bufferRow.taskStatus)["lable"]),1)])]})),_:1})]})),_:1})]})),_:1}),2==t._pageIndex||3==t._pageIndex?((0,r.wg)(),(0,r.j4)(P,{key:0,modelValue:t.process,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.process=e}),label:"工序",ref:"select111",disabled:t._pageActive,option:t.processSelectOption,onOnChange:$.onChangeProcess},null,8,["modelValue","disabled","option","onOnChange"])):(0,r.kq)("",!0),t.tableList.filter((function(t){return"1"==t.isBatteryCheck})).length?((0,r.wg)(),(0,r.j4)(A,{key:1,style:{"margin-top":"0px","margin-bottom":"12px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"12",style:{padding:"0px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{block:"",color:"warning",onClick:e[2]||(e[2]=function(e){return $.batteryHandle(t.tableList)})},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 电池曲线调试 ")]})),_:1})]})),_:1})]})),_:1})):(0,r.kq)("",!0),(0,r.Wm)(H,{class:"v-window-item-table"},{default:(0,r.w5)((function(){return[(0,r.Wm)(M,{ref:"table1",children:t.tableList,pagingShow:!1},{tableBody:(0,r.w5)((function(e){return[(0,r.Wm)(H,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(A,{"no-gutters":"",class:"table-title"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"1"},{default:(0,r.w5)((function(){return[(0,r.Wm)(Q,{content:e._index+1,color:"primary",inline:""},null,8,["content"])]})),_:2},1024),(0,r.Wm)(z,{cols:"10"},{default:(0,r.w5)((function(){return[(0,r._)("p",_,[(0,r._)("span",k,(0,a.zw)("<".concat($.FormatDictionary("checkout_param_type",e.items.parameterType)["lable"],"类型>")),1)])]})),_:2},1024)]})),_:2},1024),y,(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r._)("p",b,(0,a.zw)(e.items.inspectName),1)]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"4"},{default:(0,r.w5)((function(){return[x]})),_:1}),(0,r.Wm)(z,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",{onClick:function(t){return $.GlobalTooltipFunc(e.items.inspectName)},class:"text-truncate font-weight-light"},(0,a.zw)(e.items.inspectName),9,v)]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"12"},{default:(0,r.w5)((function(){return[W,(0,r._)("span",{onClick:function(t){return $.GlobalTooltipFunc("".concat(e.items.inspectDetailName||""))},class:"font-weight-light",style:{"padding-left":"6px"}},(0,a.zw)(e.items.inspectDetailName),9,T)]})),_:2},1024)]})),_:2},1024),"DT"==e.items.parameterType?((0,r.wg)(),(0,r.j4)(A,{key:0,"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"4"},{default:(0,r.w5)((function(){return[(0,r._)("p",F,[D,(0,r.Uk)(" "+(0,a.zw)(e.items.parameterDefault),1)])]})),_:2},1024),(0,r.Wm)(z,{cols:"4"},{default:(0,r.w5)((function(){return[(0,r._)("p",C,[S,(0,r.Uk)(" "+(0,a.zw)(e.items.upperDeviation),1)])]})),_:2},1024),(0,r.Wm)(z,{cols:"4"},{default:(0,r.w5)((function(){return[(0,r._)("p",q,[L,(0,r.Uk)(" "+(0,a.zw)(e.items.lowerDeviation),1)])]})),_:2},1024)]})),_:2},1024)):(0,r.kq)("",!0),R,(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"3"},{default:(0,r.w5)((function(){return[O]})),_:1}),(0,r.Wm)(z,{cols:"9"},{default:(0,r.w5)((function(){return[(0,r.Wm)(X,{modelValue:e.items.resultValue,"onUpdate:modelValue":[function(t){return e.items.resultValue=t},function(t){return $.resultValueHandle(e)}],style:(0,a.j5)([{padding:"0px"},"padding-top:0px;"]),size:"large",placeholder:"请输入检验结果",autocomplete:"off",class:"custem-input-index1 custem-input-big",type:"".concat("DT"==$.FormatDictionary("checkout_param_type",e.items.parameterType).value?"number":"text"),onFocus:t.$root.$utils.VanFieldFocusToTop},null,8,["modelValue","onUpdate:modelValue","type","onFocus"])]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"12",style:{position:"relative",left:"-14px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(P,{modelValue:e.items._urgency,"onUpdate:modelValue":function(t){return e.items._urgency=t},ref:"select4",label:"不良描述",class:"custem-select-big",showSearch:"",option:t.urgencySelectOption,onOnSearchChange:$.productSearchChange},null,8,["modelValue","onUpdate:modelValue","option","onOnSearchChange"])]})),_:2},1024)]})),_:2},1024),(0,r.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"12",style:{"text-align":"right"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(E,{modelValue:e.items._switch,"onUpdate:modelValue":function(t){return e.items._switch=t},label:e.items._switch?"合格":"不合格",color:"primary",density:"comfortable",disabled:t._pageActive||"DT"==$.FormatDictionary("checkout_param_type",e.items.parameterType).value,style:{top:"-10px",left:"8px",position:"relative",height:"48px",display:"block",width:"104px"}},null,8,["modelValue","onUpdate:modelValue","label","disabled"])]})),_:2},1024)]})),_:2},1024),e.items._switch?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(A,{key:1,"no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(G,{modelValue:e.items._bufferFileList,"onUpdate:modelValue":function(t){return e.items._bufferFileList=t},preview:t._pageActive},null,8,["modelValue","onUpdate:modelValue","preview"])]})),_:2},1024)]})),_:2},1024)),"1"==e.items.isRectiify?((0,r.wg)(),(0,r.j4)(A,{key:2,"no-gutters":"",style:{padding:"6px 8px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{block:"",color:"warning",onClick:function(t){return $.rectifyHandle(e.items)}},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 整改 ")]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)):(0,r.kq)("",!0)]})),_:2},1024)]})),_:1},8,["children"])]})),_:1}),N,(0,r.Wm)(A,{class:"global-botom-btn-box",style:{bottom:"122px","padding-top":"12px",background:"#fff"},"no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"12",style:{"margin-bottom":"18px","padding-left":"6px"}},{default:(0,r.w5)((function(){return[(0,r._)("p",null,[I,(0,r._)("span",{style:(0,a.j5)($.FormatBottomResultColor())},(0,a.zw)($.FormatBottomResult()),5)])]})),_:1})]})),_:1}),t._pageActive?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",Z,[1==t._pageIndex?((0,r.wg)(),(0,r.j4)(A,{key:0,class:"global-botom-btn-box","no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"5",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{color:"warning",onClick:$.disqualificationApplyHandle},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 不合格处理申请 ")]})),_:1},8,["onClick"])]})),_:1}),(0,r.Wm)(z,{cols:"4",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{color:"error",onClick:e[3]||(e[3]=function(t){return $.standardHandle(!1)})},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 不合格 ")]})),_:1})]})),_:1}),(0,r.Wm)(z,{cols:"3",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{color:"primary",onClick:e[4]||(e[4]=function(t){return $.standardHandle(!0)})},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 合格 ")]})),_:1})]})),_:1})]})),_:1})):(0,r.kq)("",!0),2==t._pageIndex||3==t._pageIndex?((0,r.wg)(),(0,r.j4)(A,{key:1,style:{bottom:"118px"},class:"global-botom-btn-box","no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"5",class:"text-center"},{default:(0,r.w5)((function(){return[3==t._pageIndex?((0,r.wg)(),(0,r.j4)(B,{key:0,disabled:"B"!=t.qmTaskData.processState,onClick:e[5]||(e[5]=function(t){return $.shiftToHandle("C")}),color:"purple",block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 转入库检验 ")]})),_:1},8,["disabled"])):(0,r.kq)("",!0)]})),_:1}),(0,r.Wm)(z,{cols:"2"}),2==t._pageIndex||3==t._pageIndex?((0,r.wg)(),(0,r.j4)(z,{key:0,cols:"5",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{color:"cyan",onClick:e[6]||(e[6]=function(t){return $.submitHandle(void 0)}),block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 提交 ")]})),_:1})]})),_:1})):(0,r.kq)("",!0)]})),_:1})):(0,r.kq)("",!0),2==t._pageIndex||3==t._pageIndex?((0,r.wg)(),(0,r.j4)(A,{key:2,style:{bottom:"64px"},class:"global-botom-btn-box","no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"5",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{onClick:e[7]||(e[7]=function(t){return $.anomalyInitiateSectionFunc(1)}),color:"primary",block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)("例外转序发起")]})),_:1})]})),_:1}),(0,r.Wm)(z,{cols:"2"}),(0,r.Wm)(z,{cols:"5",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{onClick:e[8]||(e[8]=function(t){return $.anomalyInitiateSectionFunc(2)}),color:"error",block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)("例外转序关闭")]})),_:1})]})),_:1})]})),_:1})):(0,r.kq)("",!0),4==t._pageIndex?((0,r.wg)(),(0,r.j4)(A,{key:3,class:"global-botom-btn-box","no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(z,{cols:"12",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(B,{color:"cyan",onClick:e[9]||(e[9]=function(t){return $.submitHandle(void 0)}),block:""},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 提交 ")]})),_:1})]})),_:1})]})),_:1})):(0,r.kq)("",!0)])),j])}var V=n(50124),$=n(89584),J=n(48534),z=(n(21249),n(70189),n(78783),n(33948),n(47941),n(40561),n(92222),n(38862),n(9653),n(73210),n(69600),n(57658),n(76496)),A=n(88575),H=n(2243),P=n(57265),B=n(37184),Q=n(20868),X={components:{AppBarPage:z.Z,SelectComponents:H.Z,UploaderImageComponents:P.Z,TableComponents:A.Z},data:function(){return{_pageIndex:0,_pageActive:!1,bufferRow:{},qmTaskData:{},tableList:[],tableListBuffer:[],urgency:"",urgencySelectOption:[],process:"",processSelectOption:[]}},created:function(){this.initFunc(),this.remarkHTTP()},methods:{GlobalTooltipFunc:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(0,Q.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),r=n[t]||[],a=r.filter((function(t){return e==t.value}))[0]||{};return a},FormatBottomResult:function(){var t=this.bufferRow,e=void 0===t?{}:t;if(e.inspectResult){var n=this.FormatDictionary("IQC_RESULT",e.inspectResult)["lable"];return n}},FormatBottomResultColor:function(){var t=this.bufferRow,e=void 0===t?{}:t,n="";switch(e.inspectResult){case"10":n="color:#4CAF50";break;case"20":n="color:#FF9800";break;case"30":n="color:#FF5722";break;default:break}return n},initFunc:function(){var t=this;return(0,J.Z)((0,V.Z)().mark((function e(){var n,r,a,i,u,o,s,l,c,f,p,d,m,g;return(0,V.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.query,r=n.ttQmTaskId,a=n._pageIndex,i=void 0===a?0:a,u=n.qcType,o=void 0===u?"":u,s=n._pageActive,l=void 0===s?"":s,t._pageIndex=i,t._pageActive="detail"==l,e.next=5,(0,B.i)({url:"/iiot/qmTask/getQmTaskData/".concat(r),method:"get"});case 5:return c=e.sent,f=c.code,p=c.data,d=void 0===p?{}:p,200==f&&(t.bufferRow=d.qmTaskData||{},t.qmTaskData=d.qmTaskData||{}),e.next=12,(0,B.i)({url:"/iiot/qmTaskResult/getCheckResultList",method:"get",url_params:{ttQmTaskId:r,qcType:o}});case 12:m=e.sent,200==f&&(t.tableList=((null===m||void 0===m?void 0:m.data.dataList)||[]).map((function(t){return Object.assign(t,{_switch:!t.inspectResult||"10"==t.inspectResult,_urgency:t.remark,_bufferFileList:t.taskResultPath?t.taskResultPath.split(",").map((function(t){return Object.assign({url:t})})):[]})})),t.$nextTick((function(){t.tableListBuffer=t.tableList,t.$refs.table1.initFunc()})),g=new Set(((null===m||void 0===m?void 0:m.data.dataList)||[]).map((function(t){return t.nodeLevelName}))),t.processSelectOption=(0,$.Z)(g).map((function(t,e){return Object.assign({text:t,value:e})})),t.$nextTick((function(){var e=JSON.parse(localStorage.getItem("bufferProcessDetailSelectProcess")||"{}");if(Object.keys(e).length){var n=t.processSelectOption.filter((function(t){return t.text==e.text}))[0]||{};t.$refs.select111&&t.$refs.select111.setValue(n.value),t.onChangeProcess("",n)}})));case 14:case"end":return e.stop()}}),e)})))()},remarkHTTP:function(){var t=arguments,e=this;return(0,J.Z)((0,V.Z)().mark((function n(){var r,a,i,u,o;return(0,V.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:"",n.next=3,(0,B.i)({url:"/iiot/defect/listDefectForSelect",method:"get",url_params:{defectNo:r,enabled:"1"}});case 3:a=n.sent,i=a.code,u=a.data,o=void 0===u?[]:u,200==i&&(e.urgencySelectOption=o.map((function(t){return Object.assign({text:"".concat(t.defectTypeName,"-").concat(t.defectName),value:t.tmQmDefectId})})).splice(0,200));case 8:case"end":return n.stop()}}),n)})))()},productSearchChange:function(t){this.remarkHTTP(t)},onChangeProcess:function(t,e){var n=this;this.tableList=JSON.parse(JSON.stringify(this.tableListBuffer)).filter((function(t){return t.nodeLevelName==e.text})),this.$nextTick((function(){n.$refs.table1.initFunc(),localStorage.setItem("bufferProcessDetailSelectProcess",JSON.stringify(e))}))},resultValueHandle:function(t){var e=this,n=t.items,r=t._index;this.$nextTick((function(){"DT"==e.FormatDictionary("checkout_param_type",t.items.parameterType).value&&(Number(n.resultValue)>=Number(n.lowerDeviation)&&Number(n.resultValue)<=Number(n.upperDeviation)?e.tableList[r]["_switch"]=!0:e.tableList[r]["_switch"]=!1)}))},disqualificationApplyHandle:function(){var t=this;return(0,J.Z)((0,V.Z)().mark((function e(){var n,r,a,i,u,o;return(0,V.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.qmTaskData,!t.tableList.filter((function(t){return!t._switch&&!(t._urgency||"").trim()})).length){e.next=4;break}return(0,Q.LJ)("不合格时，不良描述必填"),e.abrupt("return");case 4:return r={dataList:JSON.parse(JSON.stringify(t.tableList)).map((function(t){return Object.assign(t,{remark:t._urgency,inspectResult:t._switch?"10":"30",taskResultPath:(t._bufferFileList||[]).map((function(t){return t.url})).join()})})),qmTaskData:n},e.next=7,(0,B.i)({url:"/iiot/qmTaskResult/materialsApplyUnQualityManage",method:"post",payload:r});case 7:a=e.sent,i=a.code,u=a.data,o=void 0===u?{}:u,200==i&&((0,Q.XA)("提交成功！"),t.$router.push({path:"/processDisqualification/detail",query:{ttQmDefectId:o.ttQmDefectId}}));case 12:case"end":return e.stop()}}),e)})))()},standardHandle:function(t){var e=this;return(0,J.Z)((0,V.Z)().mark((function n(){var r,a,i,u,o,s,l;return(0,V.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.qmTaskData,a=e.$route.query._pageIndex,i=void 0===a?"":a,!e.tableList.filter((function(t){return!t._switch&&!(t._urgency||"").trim()})).length){n.next=5;break}return(0,Q.LJ)("不合格时，不良描述必填"),n.abrupt("return");case 5:return u={dataList:JSON.parse(JSON.stringify(e.tableList)).map((function(t){return Object.assign(t,{remark:t._urgency,inspectResult:t._switch?"10":"30",taskResultPath:(t._bufferFileList||[]).map((function(t){return t.url})).join()})})),qmTaskData:Object.assign(r,{inspectResult:t?"10":"30"})},n.next=8,(0,B.i)({url:"/iiot/qmTaskResult/materialsCheckResultSave",method:"post",payload:u});case 8:o=n.sent,s=o.code,l=o.data,void 0===l?{}:l,200==s&&((0,Q.XA)("提交成功！"),e.initFunc(),"1"==i&&t&&setTimeout((function(){e.$router.push({path:"/process/index",query:{}})}),1500));case 13:case"end":return n.stop()}}),n)})))()},submitHandle:function(t){var e=this;return(0,J.Z)((0,V.Z)().mark((function n(){var r,a,i,u,o,s,l,c,f,p;return(0,V.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.qmTaskData,a=e.$route.query._pageIndex,i=void 0===a?"":a,u={},n.t0=t,n.next=1===n.t0?6:2===n.t0?8:10;break;case 6:return u={inspectResult:"10"},n.abrupt("break",11);case 8:return u={inspectResult:"30"},n.abrupt("break",11);case 10:return n.abrupt("break",11);case 11:if(o={inspectResult:""},e.tableList.filter((function(t){return!t._switch})).length?o.inspectResult="30":o.inspectResult="10",s=e.tableList.filter((function(t){return"DT"==e.FormatDictionary("checkout_param_type",t.parameterType).value&&!t.resultValue})),!s.length){n.next=17;break}return(0,Q.LJ)("数值类型，检验结果必填！"),n.abrupt("return");case 17:if(!e.tableList.filter((function(t){return!t._switch&&!(t._urgency||"").trim()})).length){n.next=20;break}return(0,Q.LJ)("不合格时，不良描述必填"),n.abrupt("return");case 20:return l={dataList:JSON.parse(JSON.stringify(e.tableList)).map((function(t){return Object.assign(t,{remark:t._urgency,inspectResult:t._switch?"10":"30",taskResultPath:(t._bufferFileList||[]).map((function(t){return t.url})).join()})})),qmTaskData:Object.assign(r,u,o)},n.next=23,(0,B.i)({url:"/iiot/qmTaskResult/materialsCheckResultSave",method:"post",payload:l});case 23:c=n.sent,f=c.code,p=c.data,void 0===p?{}:p,200==f&&((0,Q.XA)("提交成功！"),e.initFunc(),"2"!=i||t||setTimeout((function(){e.$router.push({path:"/process/index",query:{}})}),1500),"3"!=i||t||e.process!=e.processSelectOption.length-1&&setTimeout((function(){e.$router.push({path:"/process/index",query:{}})}),1500),"4"==i&&1==t&&setTimeout((function(){e.$router.push({path:"/process/index",query:{}})}),1500));case 28:case"end":return n.stop()}}),n)})))()},applyDisposeHandle:function(t){var e=this;return(0,J.Z)((0,V.Z)().mark((function n(){var r,a,i,u,o,s,l;return(0,V.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.items,a=e.qmTaskData,r._switch||(r._urgency||"").trim()){n.next=5;break}return(0,Q.LJ)("不合格时，不良描述必填"),n.abrupt("return");case 5:return i={dataList:[r].map((function(t){return Object.assign(t,{remark:t._urgency})})),qmTaskData:a},n.next=8,(0,B.i)({url:"/iiot/qmTaskResult/materialsApplyUnQualityManage",method:"post",payload:i});case 8:u=n.sent,o=u.code,s=u.data,l=void 0===s?{}:s,200==o&&((0,Q.XA)("提交成功！"),e.$router.push({path:"/processDisqualification/detail",query:{ttQmDefectId:l.ttQmDefectId}}));case 13:case"end":return n.stop()}}),n)})))()},shiftToHandle:function(t){var e=this;return(0,J.Z)((0,V.Z)().mark((function n(){var r,a,i,u,o;return(0,V.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.qmTaskData,a={type:t,ttQmTaskId:r.ttQmTaskId},n.next=4,(0,B.i)({url:"/iiot/qmTaskResult/turnAdjustmentStorage",method:"post",payload:{qmTaskData:a}});case 4:i=n.sent,u=i.code,o=i.data,void 0===o?{}:o,200==u&&((0,Q.XA)("提交成功！"),e.initFunc(),setTimeout((function(){e.$router.push({path:"/process/index",query:{}})}),1e3));case 9:case"end":return n.stop()}}),n)})))()},anomalyInitiateSectionFunc:function(t){var e=this.qmTaskData;1==t&&this.$router.push({path:"/anomalyInitiateSection/add",query:{sn:null===e||void 0===e?void 0:e.sn,ttPpOrderSnId:null===e||void 0===e?void 0:e.ttPpOrderSnId}}),2==t&&this.$router.push({path:"/anomalyInitiateSection/dispose",query:{sn:null===e||void 0===e?void 0:e.sn,ttPpOrderSnId:null===e||void 0===e?void 0:e.ttPpOrderSnId}})},rectifyHandle:function(t){this.$router.push({path:"/processDisqualification/detail",query:{ttQmDefectId:t.ttQmDefectId}})},batteryHandle:function(){var t=arguments,e=this;return(0,J.Z)((0,V.Z)().mark((function n(){var r,a,i,u,o,s,l,c,f,p;return(0,V.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:[],a=e.$route.query._pageActive,i=void 0===a?"":a,u=e.bufferRow,"detail"!=i){n.next=12;break}return n.next=6,(0,B.i)({url:"/iiot/batteryResult/list",method:"get",url_params:{sn:u.sn,orderNo:u.orderNo,partNo:u.partNo}});case 6:return o=n.sent,s=o.code,l=o.data,c=void 0===l?[]:l,200==s&&(c&&c.length?e.$router.push({path:"/battery/index",query:{_pageActive:i,row:JSON.stringify(e.bufferRow)}}):(0,Q.LJ)("没有维护电池曲线!")),n.abrupt("return");case 12:return n.next=14,(0,B.i)({url:"/iiot/batteryResult/batteryList",method:"get",url_params:{sn:u.sn,orderNo:u.orderNo,partNo:u.partNo}});case 14:f=n.sent,200==f.code&&e.$router.push({path:"/battery/index",query:{batteryCheckType:null===(p=r[0])||void 0===p?void 0:p.batteryCheckType,_pageActive:i,row:JSON.stringify(e.bufferRow)}});case 16:case"end":return n.stop()}}),n)})))()}}},E=n(40089);const G=(0,E.Z)(X,[["render",U]]);var M=G}}]);
//# sourceMappingURL=chunk.7487.1689577168802.js.map