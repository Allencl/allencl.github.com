"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[4361],{88575:function(t,e,n){n.d(e,{Z:function(){return F}});var i=n(73396),r=n(87139),a={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},u=(0,i._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},l=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),s=(0,i._)("span",null,"共",-1),c={style:{"padding-left":"1px","padding-right":"1px"}},f=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,i._)("span",null,"总",-1),d={style:{"padding-left":"1px","padding-right":"1px"}},m=(0,i._)("span",null,"条",-1),h={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(t,e,n,w,_,b){var x=(0,i.up)("v-icon"),k=(0,i.up)("v-btn"),v=(0,i.up)("v-card");return(0,i.wg)(),(0,i.iD)("span",null,[t.paging&&n.pagingShow?((0,i.wg)(),(0,i.j4)(v,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,i.w5)((function(){return[(0,i.Wm)(k,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:b.previousHandle},{default:(0,i.w5)((function(){return[(0,i.Wm)(x,{size:"28"},{default:(0,i.w5)((function(){return[(0,i.Uk)("mdi-chevron-left")]})),_:1})]})),_:1},8,["onClick"]),(0,i.Wm)(k,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:b.nextHandle},{default:(0,i.w5)((function(){return[(0,i.Wm)(x,{size:"28"},{default:(0,i.w5)((function(){return[(0,i.Uk)("mdi-chevron-right")]})),_:1})]})),_:1},8,["onClick"]),(0,i._)("span",a,[u,(0,i._)("span",o,(0,r.zw)(t.current),1),l,s,(0,i._)("span",c,(0,r.zw)(t.page),1),f,p,(0,i._)("span",d,(0,r.zw)(t.totalNum),1),m]),(0,i._)("span",h,[n.showSearchBtn?((0,i.wg)(),(0,i.j4)(k,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:b.searchClick,variant:"plain",color:"primary"},{default:(0,i.w5)((function(){return[(0,i.Wm)(x,{size:"24",icon:"mdi-magnify"}),(0,i.Uk)(" 查询 ")]})),_:1},8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(k,{onClick:b.refreshClick,style:(0,r.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 刷新 ")]})),_:1},8,["onClick"])])]})),_:1})):(0,i.kq)("",!0),t.items.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(t.items,(function(e,n){return(0,i.WI)(t.$slots,"tableBody",{key:n,items:e,_index:n})})),128)):((0,i.wg)(),(0,i.iD)("p",g,[(0,i.Wm)(x,{icon:"mdi-emoticon-sad-outline"}),(0,i.Uk)(" 无数据！ ")]))])}var _=n(50124),b=n(95082),x=n(48534),k=(n(21249),n(37184)),v=n(20868),y={components:{},emits:["searchClick","refresh"],data:function(){return{totalNum:0,current:1,page:0,paging:!0,items:[]}},created:function(){var t=this.auto,e=this.url;t&&e&&this.initFunc()},methods:{previousHandle:function(){var t=this,e=this.current;1!=e?(this.current=e-1,this.$nextTick((function(){t.initFunc(t.current)}))):(0,v.LJ)("第一页！")},nextHandle:function(){var t=this,e=this.current,n=this.page;e>=n?(0,v.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((function(){t.initFunc(t.current)})))},initFunc:function(){var t=arguments,e=this;return(0,x.Z)((0,_.Z)().mark((function n(){var i,r,a,u,o,l,s,c,f,p,d,m,h,g,w,x;return(0,_.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:1,r=t.length>1?t[1]:void 0,a=e.url,u=e.params,o=void 0===u?{}:u,l=e.children,s=e.method,c=e.formatData,!l){n.next=7;break}return e.items=l,e.paging=!1,n.abrupt("return");case 7:return f=(0,b.Z)((0,b.Z)({pageNum:i,pageSize:10},o),r),n.next=10,(0,k.i)({method:s,url:a,payload:"post"==s?f:{},url_params:"get"==s?f:{}});case 10:p=n.sent,d=p.code,m=p.total,h=void 0===m?0:m,g=p.msg,void 0===g?"":g,w=p.data,x=p.rows,200==d&&(e.totalNum=h,e.current=i,e.page=Math.ceil(h/f.pageSize),e.items=c?c(w||x||[]):w||x||[]);case 19:case"end":return n.stop()}}),n)})))()},refreshClick:function(){var t=this.refreshFunc;!t&&this.initFunc(1),this.$emit("refresh")},searchClick:function(){this.$emit("searchClick")},resultData:function(){return this.items||[]},selectAll:function(){this.items=this.items.map((function(t){return Object.assign(t,{_checked:!0})}))}},props:{method:{type:String,default:function(){return"get"}},refreshFunc:{type:Boolean,default:function(){return!1}},showSearchBtn:{type:Boolean,default:function(){return!1}},auto:{type:Boolean,default:function(){return!0}},pagingShow:{type:Boolean,default:function(){return!0}},children:{type:Array,default:function(){}},url:{type:String,default:function(){return""}},params:{type:Object,default:function(){}},formatData:{}}},W=n(40089);const C=(0,W.Z)(y,[["render",w]]);var F=C},57265:function(t,e,n){n.d(e,{Z:function(){return _}});var i=n(73396),r={style:{padding:"0px 12px 0px 12px"}},a={key:0,class:"font-weight-medium text",style:{"margin-bottom":"8px"}},u={key:1,style:{"margin-bottom":"8px"},class:"font-weight-medium text"},o={class:"custem-iamge-upload"},l=["src"];function s(t,e,n,s,c,f){var p=(0,i.up)("van-uploader"),d=(0,i.up)("v-icon");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i._)("div",r,[n.preview?((0,i.wg)(),(0,i.iD)("p",a,"图片预览 ")):((0,i.wg)(),(0,i.iD)("p",u," 图片上传 ")),n.preview?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(p,{key:2,"after-read":f.afterRead,"preview-image":!1},null,8,["after-read"])),(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.bufferFileList,(function(r,a){return(0,i.wg)(),(0,i.iD)("li",{key:a,onClick:e[0]||(e[0]=function(e){return f.checkImage(t.bufferFileList)})},[(0,i._)("img",{src:r.url},null,8,l),n.preview?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(d,{key:0,onClick:function(t){return f.removeClick(r,t)},class:"icon",icon:"mdi-close-circle-outline",color:"red"},null,8,["onClick"]))])})),128))])])])}var c=n(50124),f=n(48534),p=(n(21249),n(26699),n(32023),n(92222),n(38862),n(57327),n(41539),n(37184)),d=n(20868),m=n(9801),h={components:{},emits:["update:modelValue","onChange"],data:function(){return{bufferFileList:[]}},watch:{modelValue:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.bufferFileList=t},deep:!0,immediate:!0},initPath:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&(this.bufferFileList=t.split(",").map((function(t){return Object.assign({url:t})})))},deep:!0,immediate:!0}},methods:{checkImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.length&&(0,m.V)(t.map((function(t){return t.url})))},afterRead:function(t){var e=this;return(0,f.Z)((0,c.Z)().mark((function n(){var i,r,a,u,o;return(0,c.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.file.type.includes("image")){n.next=3;break}return(0,d.LJ)("只能选择图片！"),n.abrupt("return");case 3:if(!(t.file.size>=19922944)){n.next=6;break}return(0,d.LJ)("图片超过20M！"),n.abrupt("return");case 6:if(!(e.bufferFileList.length>2)){n.next=9;break}return(0,d.LJ)("最多只能选择3张图片！"),n.abrupt("return");case 9:return i=new FormData,i.append("file",t.file),n.next=13,(0,p.i)({url:"/file/upload",method:"post",formData:!0,payload:i});case 13:r=n.sent,a=r.code,u=r.data,o=void 0===u?{}:u,200==a?(e.bufferFileList=e.bufferFileList.concat([o]),(0,d.XA)("图片上传成功！"),e.$emit("update:modelValue",JSON.parse(JSON.stringify(e.bufferFileList)))):(0,d.LJ)("图片上传失败！");case 18:case"end":return n.stop()}}),n)})))()},removeClick:function(t,e){var n=this;e.stopPropagation(),this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter((function(e){return e.url!=t.url})),this.$nextTick((function(){n.$emit("update:modelValue",JSON.parse(JSON.stringify(n.bufferFileList)))}))}},props:{modelValue:{type:Array,default:function(){return[]}},initPath:{type:String,default:function(){return""}},preview:{type:Boolean,default:function(){return!1}}}},g=n(40089);const w=(0,g.Z)(h,[["render",s]]);var _=w},4361:function(t,e,n){n.r(e),n.d(e,{default:function(){return A}});n(82526),n(41817);var i=n(73396),r=n(87139),a=(0,i._)("p",{class:"font-weight-medium text"},"检验产品:",-1),u={class:"text-truncate font-weight-light text-left"},o=(0,i._)("p",{class:"font-weight-medium text"},"批次号:",-1),l={class:"text-truncate font-weight-light"},s=(0,i._)("p",{class:"font-weight-medium text"},"检验数量:",-1),c={class:"text-truncate font-weight-light"},f=(0,i._)("p",{class:"font-weight-medium text"},"检验类型:",-1),p={class:"text-truncate font-weight-light"},d=(0,i._)("p",{class:"font-weight-medium text"},"配送单号:",-1),m={class:"text-truncate font-weight-light"},h=(0,i._)("p",{class:"font-weight-medium text"},"供应商信息:",-1),g={class:"text-truncate font-weight-light"},w={class:"font-weight-medium"},_={style:{"padding-left":"12px",color:"#00E5FF"}},b=(0,i._)("div",{style:{height:"6px"}},null,-1),x=(0,i._)("p",{class:"font-weight-medium text"},"检验项目:",-1),k=["onClick"],v=(0,i._)("p",{class:"font-weight-medium text"},"检验方法:",-1),y={class:"text-truncate font-weight-light"},W=(0,i._)("div",{style:{height:"3px"}},null,-1),C=(0,i._)("p",{class:"font-weight-medium text input-lable"},"检验备注:",-1),F=(0,i._)("p",{class:"font-weight-medium text input-lable"},"检验数量:",-1),S=(0,i._)("p",{class:"font-weight-medium text"},"供应商自检结果:",-1),V={class:"font-weight-light"},D=(0,i._)("span",null,"结果: ",-1),L=(0,i._)("p",{style:{"font-size":"16px"}},"检验完成",-1),T=(0,i._)("div",{style:{height:"16px"}},null,-1),O=(0,i._)("span",{style:{position:"relative",top:"-39px","margin-left":"16px"}},"结果: ",-1),N=(0,i._)("div",{style:{height:"20px"}},null,-1),j=(0,i._)("div",{style:{height:"60px"}},null,-1);function R(t,e,n,R,Z,B){var z=(0,i.up)("AppBarPage"),I=(0,i.up)("v-btn"),U=(0,i.up)("v-col"),q=(0,i.up)("v-row"),Q=(0,i.up)("v-sheet"),J=(0,i.up)("v-badge"),$=(0,i.up)("van-field"),H=(0,i.up)("v-switch"),P=(0,i.up)("UploaderImageComponents"),A=(0,i.up)("v-card"),M=(0,i.up)("TableComponents"),X=(0,i.up)("SelectComponents"),Y=(0,i.up)("van-popup");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(z),(0,i.Wm)(I,{style:{position:"fixed",top:"80px",right:"16px","z-index":"11"},icon:"mdi-plus",color:"secondary",onClick:e[0]||(e[0]=function(){return t.show=!0})}),(0,i.Wm)(Q,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,i.w5)((function(){return[(0,i.Wm)(q,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[a]})),_:1}),(0,i.Wm)(U,{cols:"9"},{default:(0,i.w5)((function(){return[(0,i._)("p",u,(0,r.zw)(t.bufferRow.partNo)+"-"+(0,r.zw)(t.bufferRow.partName),1)]})),_:1})]})),_:1}),(0,i.Wm)(q,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"2"},{default:(0,i.w5)((function(){return[o]})),_:1}),(0,i.Wm)(U,{cols:"4"},{default:(0,i.w5)((function(){return[(0,i._)("p",l,(0,r.zw)(t.bufferRow.batchNo),1)]})),_:1}),(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[s]})),_:1}),(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[(0,i._)("p",c,(0,r.zw)(t.bufferRow.taskQty),1)]})),_:1})]})),_:1}),(0,i.Wm)(q,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[f]})),_:1}),(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[(0,i._)("p",p,(0,r.zw)(B.FormatDictionary("QM_BY_TYPE",t.bufferRow.batchType)["lable"]),1)]})),_:1}),(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[d]})),_:1}),(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[(0,i._)("p",m,(0,r.zw)(t.bufferRow.receiptNo),1)]})),_:1})]})),_:1}),(0,i.Wm)(q,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"4"},{default:(0,i.w5)((function(){return[h]})),_:1}),(0,i.Wm)(U,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",g,(0,r.zw)(t.bufferRow.supplierName),1)]})),_:1})]})),_:1})]})),_:1}),(0,i.Wm)(Q,{class:"v-window-item-table"},{default:(0,i.w5)((function(){return[(0,i.Wm)(M,{ref:"table1",children:t.tableList,pagingShow:!1},{tableBody:(0,i.w5)((function(e){return[(0,i.Wm)(A,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(q,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"12"},{default:(0,i.w5)((function(){return[(0,i.Wm)(J,{content:e._index+1,color:"primary",inline:""},null,8,["content"]),(0,i._)("span",w,(0,r.zw)(e.items.inspectDetailName),1),(0,i._)("span",_,(0,r.zw)("< ".concat(B.FormatDictionary("checkout_param_type",e.items.parameterType)["lable"],"类型 >")),1)]})),_:2},1024)]})),_:2},1024),b,(0,i.Wm)(q,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[x]})),_:1}),(0,i.Wm)(U,{cols:"9"},{default:(0,i.w5)((function(){return[(0,i._)("p",{onClick:function(t){return B.GlobalTooltipFunc("".concat(e.items.inspectDetailName||""))},class:"text-truncate font-weight-light"},(0,r.zw)(e.items.inspectDetailName),9,k)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(q,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[v]})),_:1}),(0,i.Wm)(U,{cols:"9"},{default:(0,i.w5)((function(){return[(0,i._)("p",y,(0,r.zw)(e.items.methodDesc),1)]})),_:2},1024)]})),_:2},1024),W,(0,i.Wm)(q,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[C]})),_:1}),(0,i.Wm)(U,{cols:"5"},{default:(0,i.w5)((function(){return[(0,i.Wm)($,{modelValue:e.items._remark,"onUpdate:modelValue":function(t){return e.items._remark=t},style:(0,r.j5)([{padding:"0px"},"padding-top:0px;"]),size:"large",placeholder:"请输入备注",autocomplete:"off",class:"custem-input-index1",onFocus:t.$root.$utils.VanFieldFocusToTop},null,8,["modelValue","onUpdate:modelValue","onFocus"])]})),_:2},1024),(0,i.Wm)(U,{cols:"4",style:{"text-align":"right"}},{default:(0,i.w5)((function(){return[(0,i.Wm)(H,{modelValue:e.items._switch,"onUpdate:modelValue":function(t){return e.items._switch=t},label:e.items._switch?"合格":"不合格",color:"primary",density:"comfortable",style:{top:"-8px",left:"18px",position:"relative",height:"48px",display:"block",width:"104px"}},null,8,["modelValue","onUpdate:modelValue","label"])]})),_:2},1024)]})),_:2},1024),"DT"==e.items.parameterType?((0,i.wg)(),(0,i.j4)(q,{key:0,"no-gutters":"",style:{"margin-top":"0px"},class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"3"},{default:(0,i.w5)((function(){return[F]})),_:1}),(0,i.Wm)(U,{cols:"5"},{default:(0,i.w5)((function(){return[(0,i.Wm)($,{modelValue:e.items._number,"onUpdate:modelValue":function(t){return e.items._number=t},style:{padding:"0px"},size:"large",placeholder:"请输入数量",autocomplete:"off",type:"number",class:"custem-input-index1",onFocus:t.$root.$utils.VanFieldFocusToTop},null,8,["modelValue","onUpdate:modelValue","onFocus"])]})),_:2},1024)]})),_:2},1024)):(0,i.kq)("",!0),(0,i.Wm)(q,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"5"},{default:(0,i.w5)((function(){return[S]})),_:1}),(0,i.Wm)(U,{cols:"7"},{default:(0,i.w5)((function(){return[(0,i._)("p",V,(0,r.zw)(B.FormatBatchNumber(e)),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(q,{"no-gutters":""},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"12"},{default:(0,i.w5)((function(){return[(0,i.Wm)(P,{modelValue:e.items._bufferFileList,"onUpdate:modelValue":function(t){return e.items._bufferFileList=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:1},8,["children"])]})),_:1}),(0,i.Wm)(q,{"no-gutters":""},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"12",style:{"margin-bottom":"18px","padding-left":"6px"}},{default:(0,i.w5)((function(){return[(0,i._)("p",null,[D,(0,i._)("span",{style:(0,r.j5)(B.FormatBottomResultColor())},(0,r.zw)(B.FormatBottomResult()),5)])]})),_:1})]})),_:1}),(0,i.Wm)(q,{class:"global-botom-btn-box","no-gutters":""},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"5",class:"text-center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(I,{color:"warning",onClick:B.disqualificationApplyHandle},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 不合格处理申请 ")]})),_:1},8,["onClick"])]})),_:1}),(0,i.Wm)(U,{cols:"4",class:"text-center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(I,{color:"error",onClick:e[1]||(e[1]=function(t){return B.standardHandle(!1)})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 不合格 ")]})),_:1})]})),_:1}),(0,i.Wm)(U,{cols:"3",class:"text-center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(I,{color:"primary",onClick:e[2]||(e[2]=function(t){return B.standardHandle(!0)})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 合格 ")]})),_:1})]})),_:1})]})),_:1}),(0,i.Wm)(Y,{show:t.show,"onUpdate:show":e[9]||(e[9]=function(e){return t.show=e}),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,i.w5)((function(){return[L,(0,i._)("div",null,[T,(0,i.Wm)(X,{modelValue:t.project,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.project=e}),ref:"select1",label:"检验项目",showSearch:"",option:t.projectSelectOption,onOnChange:B.projectChange,onOnSearchChange:B.projectSearchChange,required:""},null,8,["modelValue","option","onOnChange","onOnSearchChange"]),(0,i.Wm)(X,{modelValue:t.standard,"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.standard=e}),ref:"select3",label:"检验明细",forbidShow:!0,showSearch:"",option:t.standardSelectOption,onOnFieldClick:B.standardClick,onOnChange:B.standarChange,onOnSearchChange:B.standarSearchChange,required:""},null,8,["modelValue","option","onOnFieldClick","onOnChange","onOnSearchChange"]),t.showNumberValue?((0,i.wg)(),(0,i.j4)($,{key:0,modelValue:t.testValue,"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.testValue=e}),label:"检验值",type:"number",placeholder:"请输入大于0的整数",autocomplete:"off"},null,8,["modelValue"])):(0,i.kq)("",!0),O,(0,i.Wm)(H,{modelValue:t.switchQualified,"onUpdate:modelValue":e[6]||(e[6]=function(e){return t.switchQualified=e}),label:t.switchQualified?"合格":"不合格",color:"primary",density:"comfortable",style:{height:"48px",display:"inline-block",width:"104px","margin-left":"14px"}},null,8,["modelValue","label"]),(0,i.Wm)($,{modelValue:t.description,"onUpdate:modelValue":e[7]||(e[7]=function(e){return t.description=e}),type:"textarea",label:"描述",placeholder:"请输入描述",autocomplete:"off"},null,8,["modelValue"])]),N,(0,i.Wm)(q,{"no-gutters":""},{default:(0,i.w5)((function(){return[(0,i.Wm)(U,{cols:"6",class:"text-center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(I,{variant:"plain",block:"",onClick:e[8]||(e[8]=function(){return t.show=!1})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 取消 ")]})),_:1})]})),_:1}),(0,i.Wm)(U,{cols:"6",class:"text-center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(I,{variant:"plain",color:"primary",block:"",onClick:B.affirmCheckout},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 确定 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1},8,["show"]),j])}var Z=n(50124),B=n(48534),z=(n(57327),n(41539),n(69600),n(21249),n(92222),n(40561),n(73210),n(38862),n(57658),n(76496)),I=n(88575),U=n(2243),q=n(57265),Q=n(37184),J=n(20868),$={components:{AppBarPage:z.Z,SelectComponents:U.Z,UploaderImageComponents:q.Z,TableComponents:I.Z},data:function(){return{bufferRow:{},qmTaskBatch:{},fileList:[],bufferFileList:[],show:!1,showNumberValue:!1,tableList:[],supplDetail:[],project:"",projectSelectOption:[],standard:"",standardSelectOption:[],bufferStandardSelectOption:[],testValue:"",switchQualified:!0,description:""}},created:function(){this.initFunc(),this.projectHTTP()},methods:{GlobalTooltipFunc:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(0,J.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),i=n[t]||[],r=i.filter((function(t){return e==t.value}))[0]||{};return r},FormatBatchNumber:function(t){var e=t.items,n=this.supplDetail,i=void 0===n?[]:n,r=i.map((function(t){return Object.assign({no:t,text:e[t]})})).filter((function(t){return t.text})).map((function(t){return"批次号:".concat(t.no," ").concat(t.text)})).join(";");return r||"无"},FormatBottomResult:function(){var t=this.bufferRow,e=void 0===t?{}:t;if(e.inspectResult){var n=this.FormatDictionary("IQC_RESULT",e.inspectResult)["lable"];return n}},FormatBottomResultColor:function(){var t=this.bufferRow,e=void 0===t?{}:t,n="";switch(e.inspectResult){case"10":n="color:#4CAF50";break;case"20":n="color:#FF9800";break;case"30":n="color:#FF5722";break;default:break}return n},initFunc:function(){var t=this;return(0,B.Z)((0,Z.Z)().mark((function e(){var n,i,r,a,u,o,l;return(0,Z.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.query,i=n.ttQmTaskBatchId,r=n._taskQty,e.next=3,(0,Q.i)({url:"/iiot/qmTaskBatch/listCheckResultListPda/".concat(i),method:"get"});case 3:a=e.sent,u=a.code,o=a.data,l=void 0===o?{}:o,200==u&&(t.bufferRow=Object.assign(l.qmTaskBatch||{},{taskQty:r}),t.qmTaskBatch=l.qmTaskBatch||{},t.tableList=(l.dataList||[]).map((function(t){return Object.assign(t,{_switch:!t.inspectResult||"10"==t.inspectResult,_remark:t.remark,_number:t.resultValue,_bufferFileList:t.taskResultPath?t.taskResultPath.split(",").map((function(t){return Object.assign({url:t})})):[]})})),t.supplDetail=l.supplDetail||[],t.$nextTick((function(){t.$refs.table1.initFunc()})));case 8:case"end":return e.stop()}}),e)})))()},projectHTTP:function(){var t=arguments,e=this;return(0,B.Z)((0,Z.Z)().mark((function n(){var i,r,a,u,o;return(0,Z.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:"",n.next=3,(0,Q.i)({url:"/iiot/inspect/listInspectForSelect",method:"get",url_params:{inspectNo:i}});case 3:r=n.sent,a=r.code,u=r.data,o=void 0===u?[]:u,200==a&&(e.projectSelectOption=o.map((function(t){return Object.assign({text:"".concat(t.inspectNo||"","-").concat(t.inspectName||""),value:t.tmQmInspectId})})).splice(0,50));case 8:case"end":return n.stop()}}),n)})))()},projectSearchChange:function(t){this.projectHTTP(t)},projectChange:function(){this.$refs.select3.reset()},standarChange:function(t){if(t){var e=this.bufferStandardSelectOption.filter((function(e){return e.tmQmInspectDetailId==t}))[0];this.showNumberValue="DT"==e.parameterType}},standardClick:function(){this.standardHTTP()},standarSearchChange:function(t){this.standardHTTP(t)},standardHTTP:function(){var t=arguments,e=this;return(0,B.Z)((0,Z.Z)().mark((function n(){var i,r,a,u,o,l;return(0,Z.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:"",r=e.project,r){n.next=5;break}return(0,J.XA)("检验项目必选！"),n.abrupt("return");case 5:return n.next=7,(0,Q.i)({url:"/iiot/inspectDetail/listInspectDetailForSelect",url_params:{inspectDetailNo:i,tmQmInspectId:r},method:"get"});case 7:a=n.sent,u=a.code,o=a.data,l=void 0===o?[]:o,200==u&&(e.standardSelectOption=l.map((function(t){return Object.assign({text:"".concat(t.inspectDetailNo||"","-").concat(t.inspectDetailName||""),value:t.tmQmInspectDetailId})})).splice(0,50),e.bufferStandardSelectOption=l,e.$refs.select3.showModle());case 12:case"end":return n.stop()}}),n)})))()},affirmCheckout:function(){var t=this,e=this.project,n=this.standard,i=this.bufferStandardSelectOption,r=void 0===i?[]:i;if(e)if(n){var a=r.filter((function(t){return t.tmQmInspectDetailId==n}))[0];if(this.tableList.filter((function(t){return t.inspectDetailNo==a.inspectDetailNo})).length)(0,J.LJ)("已存在！");else{var u={parameterType:a.parameterType,inspectDetailName:a.inspectDetailName,inspectDetailNo:a.inspectDetailNo,parameterRange:a.parameterRange,methodDesc:a.methodName,remark:this.description,resultValue:this.switchQualified,inspectResult:this.testValue,tmQmInspectId:e,tmQmInspectDetailId:a.tmQmInspectDetailId,isNewAdded:"1",_switch:this.switchQualified,_remark:this.description,_number:this.testValue};this.tableList=this.tableList.concat([u]),this.$nextTick((function(){t.$refs.table1.initFunc(),t.show=!1}))}}else(0,J.LJ)("检验明细必选！");else(0,J.LJ)("检验项目必选！")},disqualificationApplyHandle:function(){var t=this;return(0,B.Z)((0,Z.Z)().mark((function e(){var n,i,r,a,u,o,l;return(0,Z.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.tableList.filter((function(t){return t.ttQmTaskResultId})).length,!n!=t.tableList.length){e.next=4;break}return(0,J.LJ)("新增项未保存！"),e.abrupt("return");case 4:if(!t.tableList.filter((function(t){return!t._switch&&!(t._remark||"").trim()})).length){e.next=7;break}return(0,J.LJ)("不合格时，备注必填"),e.abrupt("return");case 7:return i=t.qmTaskBatch,r={dataList:JSON.parse(JSON.stringify(t.tableList)).map((function(t){return Object.assign(t,{resultValue:t._number,remark:t._remark,inspectResult:t._switch?"10":"30",taskResultPath:(t._bufferFileList||[]).map((function(t){return t.url})).join()})})),qmTaskBatch:Object.assign(i)},e.next=11,(0,Q.i)({url:"/iiot/qmTaskBatch/applyUnQualityManage",method:"post",payload:r});case 11:a=e.sent,u=a.code,o=a.data,l=void 0===o?{}:o,200==u&&((0,J.XA)("提交成功！"),t.$router.push({path:"/qualityMaterialDisqualification/detail",query:{ttQmDefectId:l.ttQmDefectId}}));case 16:case"end":return e.stop()}}),e)})))()},standardHandle:function(t){var e=this;return(0,B.Z)((0,Z.Z)().mark((function n(){var i,r,a,u,o;return(0,Z.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.qmTaskBatch,e.tableList,!e.tableList.filter((function(t){return!t._switch&&!(t._remark||"").trim()})).length){n.next=4;break}return(0,J.LJ)("不合格时，备注必填"),n.abrupt("return");case 4:return r={dataList:JSON.parse(JSON.stringify(e.tableList)).map((function(t){return Object.assign(t,{resultValue:t._number,remark:t._remark,inspectResult:t._switch?"10":"30",taskResultPath:(t._bufferFileList||[]).map((function(t){return t.url})).join()})})),qmTaskBatch:Object.assign(i,{inspectResult:t?"10":"30"})},n.next=7,(0,Q.i)({url:"/iiot/qmTaskBatch/listCheckResultSave",method:"post",payload:r});case 7:a=n.sent,u=a.code,o=a.data,void 0===o?{}:o,200==u&&((0,J.XA)("提交成功！"),e.initFunc());case 12:case"end":return n.stop()}}),n)})))()}}},H=n(40089);const P=(0,H.Z)($,[["render",R]]);var A=P}}]);
//# sourceMappingURL=chunk.4361.1689579697743.js.map