"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[3395],{88575:function(e,t,n){n.d(t,{Z:function(){return L}});var o=n(73396),r=n(87139),i={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},a=(0,o._)("span",null,"第",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},l=(0,o._)("span",{style:{"margin-right":"3px"}},"页",-1),s=(0,o._)("span",null,"共",-1),c={style:{"padding-left":"1px","padding-right":"1px"}},d=(0,o._)("span",{style:{"margin-right":"3px"}},"页",-1),f=(0,o._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},p=(0,o._)("span",null,"条",-1),w={style:{position:"relative",top:"1px","margin-left":"0px"}},h={key:2,class:"text-center",style:{"padding-top":"12px"}};function g(e,t,n,g,y,x){var _=(0,o.up)("v-icon"),b=(0,o.up)("v-btn"),W=(0,o.up)("v-card");return(0,o.wg)(),(0,o.iD)("span",null,[e.paging&&n.pagingShow?((0,o.wg)(),(0,o.j4)(W,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:x.previousHandle},{default:(0,o.w5)((function(){return[(0,o.Wm)(_,{size:"28"},{default:(0,o.w5)((function(){return[(0,o.Uk)("mdi-chevron-left")]})),_:1})]})),_:1},8,["onClick"]),(0,o.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:x.nextHandle},{default:(0,o.w5)((function(){return[(0,o.Wm)(_,{size:"28"},{default:(0,o.w5)((function(){return[(0,o.Uk)("mdi-chevron-right")]})),_:1})]})),_:1},8,["onClick"]),(0,o._)("span",i,[a,(0,o._)("span",u,(0,r.zw)(e.current),1),l,s,(0,o._)("span",c,(0,r.zw)(e.page),1),d,f,(0,o._)("span",m,(0,r.zw)(e.totalNum),1),p]),(0,o._)("span",w,[n.showSearchBtn?((0,o.wg)(),(0,o.j4)(b,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:x.searchClick,variant:"plain",color:"primary"},{default:(0,o.w5)((function(){return[(0,o.Wm)(_,{size:"24",icon:"mdi-magnify"}),(0,o.Uk)(" 查询 ")]})),_:1},8,["onClick"])):(0,o.kq)("",!0),(0,o.Wm)(b,{onClick:x.refreshClick,style:(0,r.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" 刷新 ")]})),_:1},8,["onClick"])])]})),_:1})):(0,o.kq)("",!0),e.items.length?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:1},(0,o.Ko)(e.items,(function(t,n){return(0,o.WI)(e.$slots,"tableBody",{key:n,items:t,_index:n})})),128)):((0,o.wg)(),(0,o.iD)("p",h,[(0,o.Wm)(_,{icon:"mdi-emoticon-sad-outline"}),(0,o.Uk)(" 无数据！ ")]))])}var y=n(50124),x=n(95082),_=n(48534),b=(n(21249),n(37184)),W=n(20868),k={components:{},emits:["searchClick","refresh"],data:function(){return{totalNum:0,current:1,page:0,paging:!0,items:[]}},created:function(){var e=this.auto,t=this.url;e&&t&&this.initFunc()},methods:{previousHandle:function(){var e=this,t=this.current;1!=t?(this.current=t-1,this.$nextTick((function(){e.initFunc(e.current)}))):(0,W.LJ)("第一页！")},nextHandle:function(){var e=this,t=this.current,n=this.page;t>=n?(0,W.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((function(){e.initFunc(e.current)})))},initFunc:function(){var e=arguments,t=this;return(0,_.Z)((0,y.Z)().mark((function n(){var o,r,i,a,u,l,s,c,d,f,m,p,w,h,g,_;return(0,y.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=e.length>0&&void 0!==e[0]?e[0]:1,r=e.length>1?e[1]:void 0,i=t.url,a=t.params,u=void 0===a?{}:a,l=t.children,s=t.method,c=t.formatData,!l){n.next=7;break}return t.items=l,t.paging=!1,n.abrupt("return");case 7:return d=(0,x.Z)((0,x.Z)({pageNum:o,pageSize:10},u),r),n.next=10,(0,b.i)({method:s,url:i,payload:"post"==s?d:{},url_params:"get"==s?d:{}});case 10:f=n.sent,m=f.code,p=f.total,w=void 0===p?0:p,h=f.msg,void 0===h?"":h,g=f.data,_=f.rows,200==m&&(t.totalNum=w,t.current=o,t.page=Math.ceil(w/d.pageSize),t.items=c?c(g||_||[]):g||_||[]);case 19:case"end":return n.stop()}}),n)})))()},refreshClick:function(){var e=this.refreshFunc;!e&&this.initFunc(1),this.$emit("refresh")},searchClick:function(){this.$emit("searchClick")},resultData:function(){return this.items||[]},selectAll:function(){this.items=this.items.map((function(e){return Object.assign(e,{_checked:!0})}))}},props:{method:{type:String,default:function(){return"get"}},refreshFunc:{type:Boolean,default:function(){return!1}},showSearchBtn:{type:Boolean,default:function(){return!1}},auto:{type:Boolean,default:function(){return!0}},pagingShow:{type:Boolean,default:function(){return!0}},children:{type:Array,default:function(){}},url:{type:String,default:function(){return""}},params:{type:Object,default:function(){}},formatData:{}}},v=n(40089);const P=(0,v.Z)(k,[["render",g]]);var L=P},93395:function(e,t,n){n.r(t),n.d(t,{default:function(){return ke}});n(92222);var o=n(73396),r=n(87139),i=n(35010),a=(0,o._)("p",{class:"font-weight-medium text"},"供应商信息:",-1),u={class:"text-truncate font-weight-light"},l=(0,o._)("p",{class:"font-weight-medium text"},"产品类型:",-1),s={class:"text-truncate font-weight-light"},c=(0,o._)("p",{class:"font-weight-medium text"},"产品序列号:",-1),d={class:"text-truncate font-weight-light"},f=(0,o._)("p",{class:"font-weight-medium text"},"提报人:",-1),m={class:"text-truncate font-weight-light"},p=(0,o._)("p",{class:"font-weight-medium text"},"提报时间:",-1),w={class:"text-truncate font-weight-light"},h=(0,o._)("div",{style:{height:"16px"}},null,-1),g=(0,o._)("span",{class:"font-weight-medium"},"检验信息",-1),y=(0,o._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),x=(0,o._)("p",{class:"font-weight-medium text"},"检测类型:",-1),_={class:"text-truncate font-weight-light"},b=(0,o._)("div",{style:{height:"12px"}},null,-1),W={class:"font-weight-light"},k=(0,o._)("span",{class:"font-weight-medium text"},"检验类别: ",-1),v={style:{color:"#00E5FF"}},P=(0,o._)("p",{class:"font-weight-medium text"},"检验项目:",-1),L={class:"text-truncate font-weight-light"},D=(0,o._)("div",{style:{height:"12px"}},null,-1),C=(0,o._)("p",{class:"font-weight-medium text"},"检验人:",-1),V={class:"text-truncate font-weight-light"},q=(0,o._)("p",{class:"font-weight-medium text"},"检验时间:",-1),R={class:"text-truncate font-weight-light"},S=(0,o._)("span",{class:"font-weight-medium"},"整改信息",-1),Z=(0,o._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),B=(0,o._)("p",{class:"font-weight-medium text"},"整改人:",-1),U={class:"text-truncate font-weight-light"},z=(0,o._)("p",{class:"font-weight-medium text"},"整改时间:",-1),F={class:"text-truncate font-weight-light"},O=(0,o._)("span",{class:"font-weight-medium"},"质量处理",-1),$=(0,o._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),N=(0,o._)("p",{class:"font-weight-medium text"},"是否上升:",-1),T=(0,o._)("p",{class:"font-weight-medium text"},"处理人:",-1),I={class:"text-truncate font-weight-light"},j=(0,o._)("p",{class:"font-weight-medium text"},"处理时间:",-1),J={class:"text-truncate font-weight-light"},Q=(0,o._)("span",{class:"font-weight-medium"},"技术处理",-1),A=(0,o._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),E=(0,o._)("p",{class:"font-weight-medium text"},"是否上升:",-1),H=(0,o._)("p",{class:"font-weight-medium text"},"处理人:",-1),M={class:"text-truncate font-weight-light"},X=(0,o._)("p",{class:"font-weight-medium text"},"处理时间:",-1),K={class:"text-truncate font-weight-light"},G=(0,o._)("span",{class:"font-weight-medium"},"工艺处理",-1),Y=(0,o._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),ee=(0,o._)("p",{class:"font-weight-medium text"},"是否上升:",-1),te=(0,o._)("p",{class:"font-weight-medium text"},"处理人:",-1),ne={class:"text-truncate font-weight-light"},oe=(0,o._)("p",{class:"font-weight-medium text"},"处理时间:",-1),re={class:"text-truncate font-weight-light"},ie=(0,o._)("span",{class:"font-weight-medium"},"放行信息",-1),ae=(0,o._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),ue=(0,o._)("p",{class:"font-weight-medium text"},"放行人:",-1),le={class:"text-truncate font-weight-light"},se=(0,o._)("p",{class:"font-weight-medium text"},"放行时间:",-1),ce={class:"text-truncate font-weight-light"},de=(0,o._)("div",{style:{height:"60px"}},null,-1);function fe(e,t,n,fe,me,pe){var we=(0,o.up)("AppBarPage"),he=(0,o.up)("v-col"),ge=(0,o.up)("v-row"),ye=(0,o.up)("v-sheet"),xe=(0,o.up)("v-icon"),_e=(0,o.up)("van-field"),be=(0,o.up)("SelectComponents"),We=(0,o.up)("v-btn"),ke=(0,o.up)("v-switch");return(0,o.wg)(),(0,o.iD)("span",null,[(0,o.Wm)(we),(0,o.Wm)(ye,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,o.w5)((function(){return[(0,o.Wm)(ge,{"no-gutters":"",class:"custem-card-title"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"12"},{default:(0,o.w5)((function(){return[(0,o._)("p",{onClick:t[0]||(t[0]=function(t){return pe.GlobalTooltipFunc("".concat(e.bufferRow.partNo||"","-").concat(e.bufferRow.partName||""))}),style:{color:"#00E5FF"},class:"font-weight-light"},(0,r.zw)(e.bufferRow.partNo)+"-"+(0,r.zw)(e.bufferRow.partName),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4"},{default:(0,o.w5)((function(){return[a]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",u,(0,r.zw)(e.bufferRow.supperName),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4"},{default:(0,o.w5)((function(){return[l]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",s,(0,r.zw)(e.bufferRow.partType),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4"},{default:(0,o.w5)((function(){return[c]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",d,(0,r.zw)(e.bufferRow.snNo),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4"},{default:(0,o.w5)((function(){return[f]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",m,(0,r.zw)(e.bufferRow.productBy),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4"},{default:(0,o.w5)((function(){return[p]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",w,(0,r.zw)(e.bufferRow.productDate),1)]})),_:1})]})),_:1})]})),_:1}),h,e.showLi1?((0,o.wg)(),(0,o.j4)(ye,{key:0,elevation:"2",rounded:"",class:"custem-card"},{default:(0,o.w5)((function(){return[(0,o.Wm)(ge,{"no-gutters":"",class:"custem-card-title"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"6"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{icon:"mdi-file-edit-outline",size:"16",color:"primary"}),g]})),_:1}),(0,o.wy)((0,o.Wm)(he,{cols:"6",class:"text-right"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{large:"",color:"error"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" mdi-alert ")]})),_:1}),y]})),_:1},512),[[i.F8,e.readonlyPage||e.readonlyPage111]])]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[x]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",_,(0,r.zw)(pe.FormatDictionary("test_type",e.bufferRow.taskType)["lable"]),1)]})),_:1})]})),_:1}),b,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.dataList,(function(t,n){return(0,o.wg)(),(0,o.iD)("div",{key:n},[(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"12"},{default:(0,o.w5)((function(){return[(0,o._)("p",W,[k,(0,o._)("span",v,(0,r.zw)(t.inspectDetailName),1)])]})),_:2},1024)]})),_:2},1024),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[P]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",L,(0,r.zw)(t.inspectName),1)]})),_:2},1024)]})),_:2},1024),(0,o.Wm)(_e,{modelValue:t.reasonDesc,"onUpdate:modelValue":function(e){return t.reasonDesc=e},disabled:e.readonlyPage||e.readonlyPage111,autocomplete:"off",label:"不良描述",placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue","disabled"]),D])})),128)),(0,o.Wm)(be,{modelValue:e.type,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.type=t}),ref:"select33",label:"不良类别",required:"",disabled:e.readonlyPage||e.readonlyPage111,option:e.typeSelectOption},null,8,["modelValue","disabled","option"]),(0,o.Wm)(_e,{modelValue:e.opinion2,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.opinion2=t}),disabled:e.readonlyPage||e.readonlyPage111,required:"",autocomplete:"off",label:"问题描述",placeholder:"请输入"},null,8,["modelValue","disabled"]),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[C]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",V,(0,r.zw)(e.bufferRow.productBy),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"14px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[q]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",R,(0,r.zw)(e.bufferRow.productDate),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"12",style:{"text-align":"right"}},{default:(0,o.w5)((function(){return[(0,o.wy)((0,o.Wm)(We,{block:"",color:"warning",disabled:e.readonlyPage||e.readonlyPage111,onClick:pe.submitMessage},{default:(0,o.w5)((function(){return[(0,o.Uk)(" 确定 ")]})),_:1},8,["disabled","onClick"]),[[i.F8,pe.ControlBtnPermission("iiot:*:productFrom")]])]})),_:1})]})),_:1})]})),_:1})):(0,o.kq)("",!0),e.showLi2?((0,o.wg)(),(0,o.j4)(ye,{key:1,elevation:"2",rounded:"",class:"custem-card"},{default:(0,o.w5)((function(){return[(0,o.Wm)(ge,{"no-gutters":"",class:"custem-card-title"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"6"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{icon:"mdi-file-edit-outline",size:"16",color:"primary"}),S]})),_:1}),(0,o.wy)((0,o.Wm)(he,{cols:"6",class:"text-right"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{large:"",color:"error"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" mdi-alert ")]})),_:1}),Z]})),_:1},512),[[i.F8,e.readonlyPage||e.readonlyPage222]])]})),_:1}),(0,o.Wm)(be,{modelValue:e.department,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.department=t}),ref:"select99",label:"处理部门",disabled:e.readonlyPage||e.readonlyPage222,option:e.departmentSelectOption},null,8,["modelValue","disabled","option"]),(0,o.Wm)(_e,{modelValue:e.opinion3,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.opinion3=t}),disabled:e.readonlyPage||e.readonlyPage222,required:"",autocomplete:"off",label:"整改结果",placeholder:"请输入"},null,8,["modelValue","disabled"]),(0,o.Wm)(_e,{modelValue:e.opinion4,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.opinion4=t}),disabled:e.readonlyPage||e.readonlyPage222,required:"",autocomplete:"off",label:"处理措施",placeholder:"请输入"},null,8,["modelValue","disabled"]),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[B]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",U,(0,r.zw)(e.bufferRow.repairBy),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"14px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[z]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",F,(0,r.zw)(e.bufferRow.repairDate),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"12",style:{"text-align":"right"}},{default:(0,o.w5)((function(){return[(0,o.wy)((0,o.Wm)(We,{color:"warning",block:"",disabled:e.readonlyPage||e.readonlyPage222,onClick:pe.submitRemould},{default:(0,o.w5)((function(){return[(0,o.Uk)(" 确定 ")]})),_:1},8,["disabled","onClick"]),[[i.F8,pe.ControlBtnPermission("iiot:*:repairFrom")]])]})),_:1})]})),_:1})]})),_:1})):(0,o.kq)("",!0),e.showLi3?((0,o.wg)(),(0,o.j4)(ye,{key:2,elevation:"2",rounded:"",class:"custem-card"},{default:(0,o.w5)((function(){return[(0,o.Wm)(ge,{"no-gutters":"",class:"custem-card-title"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"6"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{icon:"mdi-quality-high",size:"16",color:"primary"}),O]})),_:1}),(0,o.wy)((0,o.Wm)(he,{cols:"6",class:"text-right"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{large:"",color:"error"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" mdi-alert ")]})),_:1}),$]})),_:1},512),[[i.F8,e.readonlyPage||e.readonlyPage333]])]})),_:1}),(0,o.Wm)(ge,{"no-gutters":""},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{position:"relative",top:"13px",left:"14px"}},{default:(0,o.w5)((function(){return[N]})),_:1}),(0,o.Wm)(he,{cols:"8",style:{"text-align":"left"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(ke,{modelValue:e.switch111,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.switch111=t}),label:e.switch111?"是":"否",color:"primary",disabled:e.readonlyPage||e.readonlyPage333,density:"comfortable",style:{height:"42px"}},null,8,["modelValue","label","disabled"])]})),_:1})]})),_:1}),e.switch111?((0,o.wg)(),(0,o.j4)(be,{key:0,modelValue:e.conductor1,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.conductor1=t}),ref:"select777",label:"放行人",showSearch:"",required:"",disabled:e.readonlyPage||e.readonlyPage333,option:e.conductorSelectOption1,onOnSearchChange:pe.conductorSearchChange1},null,8,["modelValue","disabled","option","onOnSearchChange"])):(0,o.kq)("",!0),(0,o.Wm)(_e,{modelValue:e.opinion7,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.opinion7=t}),disabled:e.readonlyPage||e.readonlyPage333,required:"",autocomplete:"off",label:"处理意见",placeholder:"请输入"},null,8,["modelValue","disabled"]),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[T]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",I,(0,r.zw)(e.bufferRow.qualityEngineerBy),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"14px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[j]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",J,(0,r.zw)(e.bufferRow.qualityEngineerTime),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"12",style:{"text-align":"right"}},{default:(0,o.w5)((function(){return[(0,o.wy)((0,o.Wm)(We,{color:"warning",block:"",disabled:e.readonlyPage||e.readonlyPage333,onClick:pe.submitDepartmentQuality},{default:(0,o.w5)((function(){return[(0,o.Uk)(" 确定 ")]})),_:1},8,["disabled","onClick"]),[[i.F8,pe.ControlBtnPermission("iiot:*:qualityEngineerCommit")]])]})),_:1})]})),_:1})]})),_:1})):(0,o.kq)("",!0),e.showLi4?((0,o.wg)(),(0,o.j4)(ye,{key:3,elevation:"2",rounded:"",class:"custem-card"},{default:(0,o.w5)((function(){return[(0,o.Wm)(ge,{"no-gutters":"",class:"custem-card-title"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"6"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{icon:"mdi-wrench-clock",size:"16",color:"primary"}),Q]})),_:1}),(0,o.wy)((0,o.Wm)(he,{cols:"6",class:"text-right"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{large:"",color:"error"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" mdi-alert ")]})),_:1}),A]})),_:1},512),[[i.F8,e.readonlyPage||e.readonlyPage333]])]})),_:1}),(0,o.Wm)(ge,{"no-gutters":""},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{position:"relative",top:"13px",left:"14px"}},{default:(0,o.w5)((function(){return[E]})),_:1}),(0,o.Wm)(he,{cols:"8",style:{"text-align":"left"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(ke,{modelValue:e.switch333,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.switch333=t}),label:e.switch333?"是":"否",color:"primary",density:"comfortable",disabled:e.readonlyPage||e.readonlyPage333,style:{height:"42px"}},null,8,["modelValue","label","disabled"])]})),_:1})]})),_:1}),e.switch333?((0,o.wg)(),(0,o.j4)(be,{key:0,modelValue:e.conductor3,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.conductor3=t}),ref:"select999",label:"放行人",showSearch:"",disabled:e.readonlyPage||e.readonlyPage333,required:"",option:e.conductorSelectOption3,onOnSearchChange:pe.conductorSearchChange3},null,8,["modelValue","disabled","option","onOnSearchChange"])):(0,o.kq)("",!0),(0,o.Wm)(_e,{modelValue:e.opinion8,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.opinion8=t}),disabled:e.readonlyPage||e.readonlyPage333,required:"",autocomplete:"off",label:"处理意见",placeholder:"请输入"},null,8,["modelValue","disabled"]),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[H]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",M,(0,r.zw)(e.bufferRow.technologyBy),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"14px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[X]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",K,(0,r.zw)(e.bufferRow.technologyTime),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"12",style:{"text-align":"right"}},{default:(0,o.w5)((function(){return[(0,o.wy)((0,o.Wm)(We,{color:"warning",block:"",disabled:e.readonlyPage||e.readonlyPage333,onClick:pe.submitDepartmentTechnology},{default:(0,o.w5)((function(){return[(0,o.Uk)(" 确定 ")]})),_:1},8,["disabled","onClick"]),[[i.F8,pe.ControlBtnPermission("iiot:*:technologyCommit")]])]})),_:1})]})),_:1})]})),_:1})):(0,o.kq)("",!0),e.showLi5?((0,o.wg)(),(0,o.j4)(ye,{key:4,elevation:"2",rounded:"",class:"custem-card"},{default:(0,o.w5)((function(){return[(0,o.Wm)(ge,{"no-gutters":"",class:"custem-card-title"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"6"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{icon:"mdi-minecraft",size:"16",color:"primary"}),G]})),_:1}),(0,o.wy)((0,o.Wm)(he,{cols:"6",class:"text-right"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{large:"",color:"error"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" mdi-alert ")]})),_:1}),Y]})),_:1},512),[[i.F8,e.readonlyPage||e.readonlyPage333]])]})),_:1}),(0,o.Wm)(ge,{"no-gutters":""},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{position:"relative",top:"13px",left:"14px"}},{default:(0,o.w5)((function(){return[ee]})),_:1}),(0,o.Wm)(he,{cols:"8",style:{"text-align":"left"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(ke,{modelValue:e.switch222,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.switch222=t}),label:e.switch222?"是":"否",color:"primary",density:"comfortable",disabled:e.readonlyPage||e.readonlyPage333,style:{height:"42px"}},null,8,["modelValue","label","disabled"])]})),_:1})]})),_:1}),e.switch222?((0,o.wg)(),(0,o.j4)(be,{key:0,modelValue:e.conductor2,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.conductor2=t}),ref:"select888",label:"放行人",showSearch:"",required:"",disabled:e.readonlyPage||e.readonlyPage333,option:e.conductorSelectOption2,onOnSearchChange:pe.conductorSearchChange2},null,8,["modelValue","disabled","option","onOnSearchChange"])):(0,o.kq)("",!0),(0,o.Wm)(_e,{modelValue:e.opinion9,"onUpdate:modelValue":t[14]||(t[14]=function(t){return e.opinion9=t}),disabled:e.readonlyPage||e.readonlyPage333,required:"",autocomplete:"off",label:"处理意见",placeholder:"请输入"},null,8,["modelValue","disabled"]),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[te]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",ne,(0,r.zw)(e.bufferRow.technologicalBy),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"14px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[oe]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",re,(0,r.zw)(e.bufferRow.technologicalTime),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"12",style:{"text-align":"right"}},{default:(0,o.w5)((function(){return[(0,o.wy)((0,o.Wm)(We,{color:"warning",block:"",disabled:e.readonlyPage||e.readonlyPage333,onClick:pe.submitDepartmentCraft},{default:(0,o.w5)((function(){return[(0,o.Uk)(" 确定 ")]})),_:1},8,["disabled","onClick"]),[[i.F8,pe.ControlBtnPermission("iiot:*:technologicalCommit")]])]})),_:1})]})),_:1})]})),_:1})):(0,o.kq)("",!0),e.showLi6?((0,o.wg)(),(0,o.j4)(ye,{key:5,elevation:"2",rounded:"",class:"custem-card"},{default:(0,o.w5)((function(){return[(0,o.Wm)(ge,{"no-gutters":"",class:"custem-card-title"},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"6"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{icon:"mdi-file-edit-outline",size:"16",color:"primary"}),ie]})),_:1}),(0,o.wy)((0,o.Wm)(he,{cols:"6",class:"text-right"},{default:(0,o.w5)((function(){return[(0,o.Wm)(xe,{large:"",color:"error"},{default:(0,o.w5)((function(){return[(0,o.Uk)(" mdi-alert ")]})),_:1}),ae]})),_:1},512),[[i.F8,e.readonlyPage]])]})),_:1}),(0,o.Wm)(_e,{modelValue:e.opinion5,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.opinion5=t}),disabled:e.readonlyPage,required:"",autocomplete:"off",label:"放行说明",placeholder:"请输入"},null,8,["modelValue","disabled"]),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[ue]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",le,(0,r.zw)(e.bufferRow.releaseBy),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"4",style:{"padding-left":"5px"}},{default:(0,o.w5)((function(){return[se]})),_:1}),(0,o.Wm)(he,{cols:"8"},{default:(0,o.w5)((function(){return[(0,o._)("p",ce,(0,r.zw)(e.bufferRow.releaseTime),1)]})),_:1})]})),_:1}),(0,o.Wm)(ge,{"no-gutters":"",class:"text",style:{"text-align":"right"}},{default:(0,o.w5)((function(){return[(0,o.Wm)(he,{cols:"12"},{default:(0,o.w5)((function(){return[(0,o.wy)((0,o.Wm)(We,{block:"",color:"warning",disabled:e.readonlyPage,onClick:pe.submitThrough},{default:(0,o.w5)((function(){return[(0,o.Uk)(" 确定 ")]})),_:1},8,["disabled","onClick"]),[[i.F8,pe.ControlBtnPermission("iiot:*:releaseFrom")]])]})),_:1})]})),_:1})]})),_:1})):(0,o.kq)("",!0),de])}var me=n(50124),pe=n(48534),we=(n(57327),n(41539),n(21249),n(73210),n(57658),n(76496)),he=n(88575),ge=n(2243),ye=n(37184),xe=n(20868),_e={components:{AppBarPage:we.Z,SelectComponents:ge.Z,TableComponents:he.Z},data:function(){return{bufferRow:{},dataList:[],type:"",typeSelectOption:[],department:"",departmentSelectOption:[],switch111:!1,switch222:!1,switch333:!1,conductor1:"",conductorSelectOption1:[],conductor2:"",conductorSelectOption2:[],conductor3:"",conductorSelectOption3:[],opinion1:"",opinion2:"",opinion3:"",opinion4:"",opinion5:"",opinion7:"",opinion8:"",opinion9:"",showLi1:!1,showLi2:!1,showLi3:!1,showLi4:!1,showLi5:!1,showLi6:!1,readonlyPage:!0,readonlyPage111:!1,readonlyPage222:!1,readonlyPage333:!1}},watch:{switch111:function(e){var t=this;this.conductor1="",this.$nextTick((function(){t.$refs.select777&&t.$refs.select777.reset()}))},switch222:function(e){var t=this;this.conductor2="",this.$nextTick((function(){t.$refs.select888&&t.$refs.select888.reset()}))},switch333:function(e){var t=this;this.conductor3="",this.$nextTick((function(){t.$refs.select999&&t.$refs.select999.reset()}))}},created:function(){this.initFunc(),this.typeHTTP(),this.initRepairman1(),this.initRepairman2(),this.initRepairman3()},methods:{GlobalTooltipFunc:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(0,xe.CF)({message:e,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),o=n[e]||[],r=o.filter((function(e){return t==e.value}))[0]||{};return r},initRepairman1:function(){var e=arguments,t=this;return(0,pe.Z)((0,me.Z)().mark((function n(){var o,r,i,a,u;return(0,me.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,(0,ye.i)({url:"/system/user/list",method:"get",url_params:{userKey:o}});case 3:r=n.sent,i=r.code,a=r.data,u=void 0===a?[]:a,200==i&&(t.conductorSelectOption1=u.map((function(e){return Object.assign({text:"".concat(e.userName,"-").concat(e.nickName),value:e.userName})})));case 8:case"end":return n.stop()}}),n)})))()},conductorSearchChange1:function(e){this.initRepairman1(e)},initRepairman2:function(){var e=arguments,t=this;return(0,pe.Z)((0,me.Z)().mark((function n(){var o,r,i,a,u;return(0,me.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,(0,ye.i)({url:"/system/user/list",method:"get",url_params:{userKey:o}});case 3:r=n.sent,i=r.code,a=r.data,u=void 0===a?[]:a,200==i&&(t.conductorSelectOption2=u.map((function(e){return Object.assign({text:"".concat(e.userName,"-").concat(e.nickName),value:e.userName})})));case 8:case"end":return n.stop()}}),n)})))()},conductorSearchChange2:function(e){this.initRepairman2(e)},initRepairman3:function(){var e=arguments,t=this;return(0,pe.Z)((0,me.Z)().mark((function n(){var o,r,i,a,u;return(0,me.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,(0,ye.i)({url:"/system/user/list",method:"get",url_params:{userKey:o}});case 3:r=n.sent,i=r.code,a=r.data,u=void 0===a?[]:a,200==i&&(t.conductorSelectOption3=u.map((function(e){return Object.assign({text:"".concat(e.userName,"-").concat(e.nickName),value:e.userName})})));case 8:case"end":return n.stop()}}),n)})))()},conductorSearchChange3:function(e){this.initRepairman3(e)},ControlBtnPermission:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="/processDisqualification/index",n=JSON.parse(localStorage.getItem("bufferGlobalBtnPermission")||{});(n[t]||[]).filter((function(t){return t.perms==e})).length;return!0},initFunc:function(){var e=this;return(0,pe.Z)((0,me.Z)().mark((function t(){var n,o,r,i,a,u,l,s;return(0,me.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.query.ttQmDefectId,o=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),r=o["qm_process_dept"]||[],e.departmentSelectOption=r.map((function(e){return Object.assign({text:e.lable,value:e.value})})),t.next=6,(0,ye.i)({url:"/iiot/qmDefect/".concat(n),method:"get"});case 6:if(i=t.sent,a=i.code,u=i.data,l=void 0===u?{}:u,200!=a){t.next=63;break}e.bufferRow=l,t.t0=l.defectStatus,t.next="10"===t.t0?15:"20"===t.t0?23:"30"===t.t0?32:"40"===t.t0?38:"90"===t.t0?45:49;break;case 15:return e.showLi1=!0,e.showLi2=!1,e.showLi3=!1,e.showLi4=!1,e.showLi5=!1,e.showLi6=!1,e.readonlyPage=!1,t.abrupt("break",50);case 23:return e.showLi1=!0,e.showLi2=!0,e.showLi3=!1,e.showLi4=!1,e.showLi5=!1,e.showLi6=!1,e.readonlyPage=!1,e.readonlyPage111=!0,t.abrupt("break",50);case 32:return e.readonlyPage111=!0,e.readonlyPage222=!0,"1"==l.issueProcessDept&&(e.showLi1=!0,e.showLi2=!0,e.showLi3=!0,e.showLi4=!1,e.showLi5=!1,e.showLi6=!1,e.readonlyPage=!1),"2"==l.issueProcessDept&&(e.showLi1=!0,e.showLi2=!0,e.showLi3=!1,e.showLi4=!0,e.showLi5=!1,e.showLi6=!1,e.readonlyPage=!1),"3"==l.issueProcessDept&&(e.showLi1=!0,e.showLi2=!0,e.showLi3=!1,e.showLi4=!1,e.showLi5=!0,e.showLi6=!1,e.readonlyPage=!1),t.abrupt("break",50);case 38:return e.readonlyPage111=!0,e.readonlyPage222=!0,e.readonlyPage333=!0,"1"==l.issueProcessDept&&(e.showLi1=!0,e.showLi2=!0,e.showLi3=!0,e.showLi4=!1,e.showLi5=!1,e.showLi6=!0,e.readonlyPage=!1),"2"==l.issueProcessDept&&(e.showLi1=!0,e.showLi2=!0,e.showLi3=!1,e.showLi4=!0,e.showLi5=!1,e.showLi6=!0,e.readonlyPage=!1),"3"==l.issueProcessDept&&(e.showLi1=!0,e.showLi2=!0,e.showLi3=!1,e.showLi4=!1,e.showLi5=!0,e.showLi6=!0,e.readonlyPage=!1),t.abrupt("break",50);case 45:return"1"==l.issueProcessDept&&(e.showLi1=!0,e.showLi2=!0,e.showLi3=!0,e.showLi4=!1,e.showLi5=!1,e.showLi6=!0,e.readonlyPage=!0),"2"==l.issueProcessDept&&(e.showLi1=!0,e.showLi2=!0,e.showLi3=!1,e.showLi4=!0,e.showLi5=!1,e.showLi6=!0,e.readonlyPage=!0),"3"==l.issueProcessDept&&(e.showLi1=!0,e.showLi2=!0,e.showLi3=!1,e.showLi4=!1,e.showLi5=!0,e.showLi6=!0,e.readonlyPage=!0),t.abrupt("break",50);case 49:return t.abrupt("break",50);case 50:e.opinion5=l.releaseMeasures||"",e.opinion3=l.repairResult||"",e.opinion4=l.repairMeasures||"",e.opinion2=l.scrapReason||"",e.opinion7=l.qualityEngineerD||"",e.opinion8=l.technologyD||"",e.opinion9=l.technologicalD||"",e.switch111="1"==l.isUpgrade,e.switch222="1"==l.isUpgrade,e.switch333="1"==l.isUpgrade,e.$nextTick((function(){setTimeout((function(){e.conductor1=l.upgradeProcessBy,e.conductor2=l.upgradeProcessBy,e.conductor3=l.upgradeProcessBy,e.$refs.select777&&e.$refs.select777.setValue(l.upgradeProcessBy),e.$refs.select888&&e.$refs.select888.setValue(l.upgradeProcessBy),e.$refs.select999&&e.$refs.select999.setValue(l.upgradeProcessBy)}),1e3)})),e.department=l.issueProcessDept,setTimeout((function(){e.$refs.select99&&e.$refs.select99.setValue(l.issueProcessDept)}),1e3);case 63:return t.next=65,(0,ye.i)({url:"/iiot/qmDefectDetail/list",method:"get",url_params:{ttQmDefectId:n}});case 65:s=t.sent,200==a&&(e.dataList=s.data||[]);case 67:case"end":return t.stop()}}),t)})))()},typeHTTP:function(){var e=this;return(0,pe.Z)((0,me.Z)().mark((function t(){var n,o,r,i;return(0,me.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,ye.i)({url:"/iiot/reason/list",method:"post",payload:{reasonNo:"",params:{reasonTypeList:["MS","F"]}}});case 2:n=t.sent,o=n.code,r=n.data,i=void 0===r?[]:r,200==o&&(e.typeSelectOption=i.map((function(e){return Object.assign({text:e.reasonNo+"-"+e.reasonName,value:e.tmBasReasonId})})),setTimeout((function(){e.$refs.select33&&e.$refs.select33.setValue(e.bufferRow.tmBasReasonId)}),600));case 7:case"end":return t.stop()}}),t)})))()},submitMessage:function(){var e=this;return(0,pe.Z)((0,me.Z)().mark((function t(){var n,o,r,i,a;return(0,me.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.bufferRow,e.type){t.next=4;break}return(0,xe.LJ)("不良类别必填！"),t.abrupt("return");case 4:if(e.opinion2.trim()){t.next=7;break}return(0,xe.LJ)("问题描述必填！"),t.abrupt("return");case 7:return o={tmBasReasonId:e.type,scrapReason:e.opinion2,dataList:e.dataList,ttQmDefectId:n.ttQmDefectId},t.next=10,(0,ye.i)({url:"/iiot/qmDefect/productDefect",method:"post",payload:o});case 10:r=t.sent,i=r.code,a=r.data,void 0===a?{}:a,200==i&&((0,xe.XA)("提交成功！"),e.$router.push({path:"/processDisqualification/index",query:{}}));case 15:case"end":return t.stop()}}),t)})))()},submitRemould:function(){var e=this;return(0,pe.Z)((0,me.Z)().mark((function t(){var n,o,r,i,a;return(0,me.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.bufferRow,e.opinion3.trim()){t.next=4;break}return(0,xe.LJ)("整改结果必填！"),t.abrupt("return");case 4:if(e.opinion4.trim()){t.next=7;break}return(0,xe.LJ)("处理措施必填！"),t.abrupt("return");case 7:return o={issueProcessDept:e.department,repairResult:e.opinion3,repairMeasures:e.opinion4,ttQmDefectId:n.ttQmDefectId},t.next=10,(0,ye.i)({url:"/iiot/qmDefect/repairDefect",method:"post",payload:o});case 10:r=t.sent,i=r.code,a=r.data,void 0===a?{}:a,200==i&&((0,xe.XA)("提交成功！"),e.$router.push({path:"/processDisqualification/index",query:{}}));case 15:case"end":return t.stop()}}),t)})))()},submitDepartmentQuality:function(){var e=this;return(0,pe.Z)((0,me.Z)().mark((function t(){var n,o,r,i,a;return(0,me.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.bufferRow,e.opinion7.trim()){t.next=4;break}return(0,xe.LJ)("处理意见必填！"),t.abrupt("return");case 4:if(!e.switch111||e.conductor1){t.next=7;break}return(0,xe.LJ)("放行人必选！"),t.abrupt("return");case 7:return o={qualityEngineerD:e.opinion7,ttQmDefectId:n.ttQmDefectId,isUpgrade:e.switch111?"1":"0",upgradeProcessBy:e.conductor1},t.next=10,(0,ye.i)({url:"/iiot/qmDefect/qualityEngineerCommit",method:"post",payload:o});case 10:r=t.sent,i=r.code,a=r.data,void 0===a?{}:a,200==i&&((0,xe.XA)("提交成功！"),e.$router.push({path:"/processDisqualification/index",query:{}}));case 15:case"end":return t.stop()}}),t)})))()},submitDepartmentTechnology:function(){var e=this;return(0,pe.Z)((0,me.Z)().mark((function t(){var n,o,r,i,a;return(0,me.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.bufferRow,e.opinion8.trim()){t.next=4;break}return(0,xe.LJ)("处理意见必填！"),t.abrupt("return");case 4:if(!e.switch333||e.conductor3){t.next=7;break}return(0,xe.LJ)("放行人必选！"),t.abrupt("return");case 7:return o={technologyD:e.opinion8,ttQmDefectId:n.ttQmDefectId,isUpgrade:e.switch333?"1":"0",upgradeProcessBy:e.conductor3},t.next=10,(0,ye.i)({url:"/iiot/qmDefect/technologyCommit",method:"post",payload:o});case 10:r=t.sent,i=r.code,a=r.data,void 0===a?{}:a,200==i&&((0,xe.XA)("提交成功！"),e.$router.push({path:"/processDisqualification/index",query:{}}));case 15:case"end":return t.stop()}}),t)})))()},submitDepartmentCraft:function(){var e=this;return(0,pe.Z)((0,me.Z)().mark((function t(){var n,o,r,i,a;return(0,me.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.bufferRow,e.opinion9.trim()){t.next=4;break}return(0,xe.LJ)("处理意见必填！"),t.abrupt("return");case 4:if(!e.switch222||e.conductor2){t.next=7;break}return(0,xe.LJ)("放行人必选！"),t.abrupt("return");case 7:return o={technologicalD:e.opinion9,ttQmDefectId:n.ttQmDefectId,isUpgrade:e.switch222?"1":"0",upgradeProcessBy:e.conductor2},t.next=10,(0,ye.i)({url:"/iiot/qmDefect/technologicalCommit",method:"post",payload:o});case 10:r=t.sent,i=r.code,a=r.data,void 0===a?{}:a,200==i&&((0,xe.XA)("提交成功！"),e.$router.push({path:"/processDisqualification/index",query:{}}));case 15:case"end":return t.stop()}}),t)})))()},submitThrough:function(){var e=this;return(0,pe.Z)((0,me.Z)().mark((function t(){var n,o,r,i,a;return(0,me.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.bufferRow,e.opinion5.trim()){t.next=4;break}return(0,xe.LJ)("放行说明必填！"),t.abrupt("return");case 4:return o={releaseMeasures:e.opinion5,ttQmDefectId:n.ttQmDefectId},t.next=7,(0,ye.i)({url:"/iiot/qmDefect/releaseDefect",method:"post",payload:o});case 7:r=t.sent,i=r.code,a=r.data,void 0===a?{}:a,200==i&&((0,xe.XA)("提交成功！"),e.$router.push({path:"/processDisqualification/index",query:{}}));case 12:case"end":return t.stop()}}),t)})))()}}},be=n(40089);const We=(0,be.Z)(_e,[["render",fe]]);var ke=We}}]);
//# sourceMappingURL=chunk.3395.1689576086920.js.map