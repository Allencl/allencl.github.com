"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[2273],{88575:function(t,e,n){n.d(e,{Z:function(){return F}});var i=n(73396),r=n(87139),a={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},u=(0,i._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},l=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),s=(0,i._)("span",null,"共",-1),c={style:{"padding-left":"1px","padding-right":"1px"}},f=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),m=(0,i._)("span",null,"总",-1),p={style:{"padding-left":"1px","padding-right":"1px"}},d=(0,i._)("span",null,"条",-1),h={style:{position:"relative",top:"1px","margin-left":"0px"}},w={key:2,class:"text-center",style:{"padding-top":"12px"}};function g(t,e,n,g,_,x){var v=(0,i.up)("v-icon"),b=(0,i.up)("v-btn"),y=(0,i.up)("v-card");return(0,i.wg)(),(0,i.iD)("span",null,[t.paging&&n.pagingShow?((0,i.wg)(),(0,i.j4)(y,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,i.w5)((function(){return[(0,i.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:x.previousHandle},{default:(0,i.w5)((function(){return[(0,i.Wm)(v,{size:"28"},{default:(0,i.w5)((function(){return[(0,i.Uk)("mdi-chevron-left")]})),_:1})]})),_:1},8,["onClick"]),(0,i.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:x.nextHandle},{default:(0,i.w5)((function(){return[(0,i.Wm)(v,{size:"28"},{default:(0,i.w5)((function(){return[(0,i.Uk)("mdi-chevron-right")]})),_:1})]})),_:1},8,["onClick"]),(0,i._)("span",a,[u,(0,i._)("span",o,(0,r.zw)(t.current),1),l,s,(0,i._)("span",c,(0,r.zw)(t.page),1),f,m,(0,i._)("span",p,(0,r.zw)(t.totalNum),1),d]),(0,i._)("span",h,[n.showSearchBtn?((0,i.wg)(),(0,i.j4)(b,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:x.searchClick,variant:"plain",color:"primary"},{default:(0,i.w5)((function(){return[(0,i.Wm)(v,{size:"24",icon:"mdi-magnify"}),(0,i.Uk)(" 查询 ")]})),_:1},8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(b,{onClick:x.refreshClick,style:(0,r.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 刷新 ")]})),_:1},8,["onClick"])])]})),_:1})):(0,i.kq)("",!0),t.items.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(t.items,(function(e,n){return(0,i.WI)(t.$slots,"tableBody",{key:n,items:e,_index:n})})),128)):((0,i.wg)(),(0,i.iD)("p",w,[(0,i.Wm)(v,{icon:"mdi-emoticon-sad-outline"}),(0,i.Uk)(" 无数据！ ")]))])}var _=n(50124),x=n(95082),v=n(48534),b=(n(21249),n(37184)),y=n(20868),k={components:{},emits:["searchClick","refresh"],data:function(){return{totalNum:0,current:1,page:0,paging:!0,items:[]}},created:function(){var t=this.auto,e=this.url;t&&e&&this.initFunc()},methods:{previousHandle:function(){var t=this,e=this.current;1!=e?(this.current=e-1,this.$nextTick((function(){t.initFunc(t.current)}))):(0,y.LJ)("第一页！")},nextHandle:function(){var t=this,e=this.current,n=this.page;e>=n?(0,y.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((function(){t.initFunc(t.current)})))},initFunc:function(){var t=arguments,e=this;return(0,v.Z)((0,_.Z)().mark((function n(){var i,r,a,u,o,l,s,c,f,m,p,d,h,w,g,v;return(0,_.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:1,r=t.length>1?t[1]:void 0,a=e.url,u=e.params,o=void 0===u?{}:u,l=e.children,s=e.method,c=e.formatData,!l){n.next=7;break}return e.items=l,e.paging=!1,n.abrupt("return");case 7:return f=(0,x.Z)((0,x.Z)({pageNum:i,pageSize:10},o),r),n.next=10,(0,b.i)({method:s,url:a,payload:"post"==s?f:{},url_params:"get"==s?f:{}});case 10:m=n.sent,p=m.code,d=m.total,h=void 0===d?0:d,w=m.msg,void 0===w?"":w,g=m.data,v=m.rows,200==p&&(e.totalNum=h,e.current=i,e.page=Math.ceil(h/f.pageSize),e.items=c?c(g||v||[]):g||v||[]);case 19:case"end":return n.stop()}}),n)})))()},refreshClick:function(){var t=this.refreshFunc;!t&&this.initFunc(1),this.$emit("refresh")},searchClick:function(){this.$emit("searchClick")},resultData:function(){return this.items||[]},selectAll:function(){this.items=this.items.map((function(t){return Object.assign(t,{_checked:!0})}))}},props:{method:{type:String,default:function(){return"get"}},refreshFunc:{type:Boolean,default:function(){return!1}},showSearchBtn:{type:Boolean,default:function(){return!1}},auto:{type:Boolean,default:function(){return!0}},pagingShow:{type:Boolean,default:function(){return!0}},children:{type:Array,default:function(){}},url:{type:String,default:function(){return""}},params:{type:Object,default:function(){}},formatData:{}}},W=n(40089);const C=(0,W.Z)(k,[["render",g]]);var F=C},57265:function(t,e,n){n.d(e,{Z:function(){return _}});var i=n(73396),r={style:{padding:"0px 12px 0px 12px"}},a={key:0,class:"font-weight-medium text",style:{"margin-bottom":"8px"}},u={key:1,style:{"margin-bottom":"8px"},class:"font-weight-medium text"},o={class:"custem-iamge-upload"},l=["src"];function s(t,e,n,s,c,f){var m=(0,i.up)("van-uploader"),p=(0,i.up)("v-icon");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i._)("div",r,[n.preview?((0,i.wg)(),(0,i.iD)("p",a,"图片预览 ")):((0,i.wg)(),(0,i.iD)("p",u," 图片上传 ")),n.preview?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(m,{key:2,"after-read":f.afterRead,"preview-image":!1},null,8,["after-read"])),(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.bufferFileList,(function(r,a){return(0,i.wg)(),(0,i.iD)("li",{key:a,onClick:e[0]||(e[0]=function(e){return f.checkImage(t.bufferFileList)})},[(0,i._)("img",{src:r.url},null,8,l),n.preview?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(p,{key:0,onClick:function(t){return f.removeClick(r,t)},class:"icon",icon:"mdi-close-circle-outline",color:"red"},null,8,["onClick"]))])})),128))])])])}var c=n(50124),f=n(48534),m=(n(21249),n(26699),n(32023),n(92222),n(38862),n(57327),n(41539),n(37184)),p=n(20868),d=n(9801),h={components:{},emits:["update:modelValue","onChange"],data:function(){return{bufferFileList:[]}},watch:{modelValue:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.bufferFileList=t},deep:!0,immediate:!0},initPath:{handler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&(this.bufferFileList=t.split(",").map((function(t){return Object.assign({url:t})})))},deep:!0,immediate:!0}},methods:{checkImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.length&&(0,d.V)(t.map((function(t){return t.url})))},afterRead:function(t){var e=this;return(0,f.Z)((0,c.Z)().mark((function n(){var i,r,a,u,o;return(0,c.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.file.type.includes("image")){n.next=3;break}return(0,p.LJ)("只能选择图片！"),n.abrupt("return");case 3:if(!(t.file.size>=19922944)){n.next=6;break}return(0,p.LJ)("图片超过20M！"),n.abrupt("return");case 6:if(!(e.bufferFileList.length>2)){n.next=9;break}return(0,p.LJ)("最多只能选择3张图片！"),n.abrupt("return");case 9:return i=new FormData,i.append("file",t.file),n.next=13,(0,m.i)({url:"/file/upload",method:"post",formData:!0,payload:i});case 13:r=n.sent,a=r.code,u=r.data,o=void 0===u?{}:u,200==a?(e.bufferFileList=e.bufferFileList.concat([o]),(0,p.XA)("图片上传成功！"),e.$emit("update:modelValue",JSON.parse(JSON.stringify(e.bufferFileList)))):(0,p.LJ)("图片上传失败！");case 18:case"end":return n.stop()}}),n)})))()},removeClick:function(t,e){var n=this;e.stopPropagation(),this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter((function(e){return e.url!=t.url})),this.$nextTick((function(){n.$emit("update:modelValue",JSON.parse(JSON.stringify(n.bufferFileList)))}))}},props:{modelValue:{type:Array,default:function(){return[]}},initPath:{type:String,default:function(){return""}},preview:{type:Boolean,default:function(){return!1}}}},w=n(40089);const g=(0,w.Z)(h,[["render",s]]);var _=g},22273:function(t,e,n){n.r(e),n.d(e,{default:function(){return A}});var i=n(73396),r=n(87139),a=(0,i._)("span",{class:"font-weight-medium"},"保养设备信息",-1),u={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},o=(0,i._)("p",{class:"font-weight-medium text"},"任务类型:",-1),l={class:"text-truncate font-weight-light"},s=(0,i._)("p",{class:"font-weight-medium text"},"维护位置:",-1),c={class:"text-truncate font-weight-light"},f=(0,i._)("p",{class:"font-weight-medium text"},"维护内容:",-1),m=(0,i._)("p",{class:"font-weight-medium text"},"策略类型:",-1),p={class:"text-truncate font-weight-light"},d=(0,i._)("p",{class:"font-weight-medium text"},"计划人:",-1),h={class:"text-truncate font-weight-light"},w=(0,i._)("p",{class:"font-weight-medium text"},"到期时间:",-1),g={class:"text-truncate font-weight-light"},_={key:0,class:"font-weight-medium text"},x=(0,i._)("span",{style:{"font-size":"16px",position:"relative",top:"2px",left:"4px"}},"无维护内容",-1),v=(0,i._)("span",{class:"font-weight-medium"},"维护项目",-1),b={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},y=(0,i._)("p",{class:"font-weight-medium text"},"维护内容:",-1),k=["onClick"],W=(0,i._)("p",{class:"font-weight-medium text"},"内容编号:",-1),C={class:"text-truncate font-weight-light"},F=(0,i._)("p",{class:"font-weight-medium text"},"维护人:",-1),B={class:"text-truncate font-weight-light"},L=(0,i._)("p",{class:"font-weight-medium text"},"维护位置:",-1),S={class:"text-truncate font-weight-light"},Z=(0,i._)("p",{class:"font-weight-medium text"},"所需辅料:",-1),T={class:"text-truncate font-weight-light"},z=(0,i._)("p",{class:"font-weight-medium text"},"所需工具:",-1),N={class:"text-truncate font-weight-light"},P=(0,i._)("div",{style:{height:"12px"}},null,-1);function q(t,e,n,q,O,D){var I=(0,i.up)("AppBarPage"),M=(0,i.up)("v-icon"),R=(0,i.up)("v-col"),J=(0,i.up)("v-btn"),$=(0,i.up)("v-row"),U=(0,i.up)("v-sheet"),V=(0,i.up)("v-badge"),j=(0,i.up)("v-switch"),H=(0,i.up)("UploaderImageComponents"),A=(0,i.up)("v-card"),E=(0,i.up)("TableComponents");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(I),(0,i.Wm)(U,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,i.w5)((function(){return[(0,i.Wm)($,{"no-gutters":"",class:"custem-card-title"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"6"},{default:(0,i.w5)((function(){return[(0,i.Wm)(M,{icon:"mdi-bullhorn",size:"16",color:"primary"}),a]})),_:1}),(0,i.Wm)(R,{cols:"6",class:"text-right"},{default:(0,i.w5)((function(){return[(0,i.Wm)(J,{onClick:D.checksParePart,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((function(){return[(0,i.Uk)("备件信息")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"12"},{default:(0,i.w5)((function(){return[(0,i._)("p",u,(0,r.zw)(t.bufferRow.equipmentName),1)]})),_:1})]})),_:1}),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[o]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",l,(0,r.zw)(D.FormatDictionary("WB_TT",t.bufferRow.wbTt)["lable"]),1)]})),_:1})]})),_:1}),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[s]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",c,(0,r.zw)(t.bufferRow.faultStationCn),1)]})),_:1})]})),_:1}),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[f]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",{class:"text-truncate font-weight-light",onClick:e[0]||(e[0]=function(e){return D.GlobalTooltipFunc(t.bufferRow.manitainContent)})},(0,r.zw)(t.bufferRow.manitainContent),1)]})),_:1})]})),_:1}),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[m]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",p,(0,r.zw)(D.FormatDictionary("WB_ST",t.bufferRow.wbSt)["lable"]),1)]})),_:1})]})),_:1}),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[d]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",h,(0,r.zw)(t.bufferRow.planImplementBy),1)]})),_:1})]})),_:1}),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[w]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",g,(0,r.zw)(t.bufferRow.expireTime),1)]})),_:1})]})),_:1})]})),_:1}),t.teBasPlanMcList.length?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",_,[(0,i.Wm)(M,{large:"",color:"error"},{default:(0,i.w5)((function(){return[(0,i.Uk)(" mdi-alert ")]})),_:1}),x])),(0,i.Wm)(U,{class:"v-window-item-table"},{default:(0,i.w5)((function(){return[(0,i.Wm)(E,{ref:"table2",children:t.teBasPlanMcList,pagingShow:!1},{tableBody:(0,i.w5)((function(e){return[(0,i.Wm)(A,null,{default:(0,i.w5)((function(){return[(0,i.Wm)($,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"1"},{default:(0,i.w5)((function(){return[(0,i.Wm)(V,{content:e._index+1,color:"primary",inline:""},null,8,["content"])]})),_:2},1024),(0,i.Wm)(R,{cols:"5"},{default:(0,i.w5)((function(){return[v]})),_:1}),(0,i.Wm)(R,{cols:"1"})]})),_:2},1024),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"12"},{default:(0,i.w5)((function(){return[(0,i._)("p",b,(0,r.zw)(e.items.manitainItem),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[y]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",{class:"text-truncate font-weight-light",onClick:function(t){return D.GlobalTooltipFunc(e.items.manitainContentName)}},(0,r.zw)(e.items.manitainContentName),9,k)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[W]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",C,(0,r.zw)(e.items.manitainContentNo),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[F]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",B,(0,r.zw)(t.bufferRow.implementBy),1)]})),_:1})]})),_:1}),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[L]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",S,(0,r.zw)(e.items.manitainSpace),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[Z]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",T,(0,r.zw)(e.items.manitainMaterial),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((function(){return[z]})),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",N,(0,r.zw)(e.items.manitainTool),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"8"}),(0,i.Wm)(R,{cols:"4",style:{"text-align":"right"}},{default:(0,i.w5)((function(){return[(0,i.Wm)(j,{modelValue:e.items._switch,"onUpdate:modelValue":function(t){return e.items._switch=t},label:e.items._switch?"合格":"不合格",color:"primary",disabled:"",density:"comfortable",style:{top:"-10px",left:"8px",position:"relative",height:"48px",display:"block",width:"104px"}},null,8,["modelValue","onUpdate:modelValue","label"])]})),_:2},1024)]})),_:2},1024),(0,i.Wm)($,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(R,{cols:"12"},{default:(0,i.w5)((function(){return["1"==e.items.pictureFlag?((0,i.wg)(),(0,i.j4)(H,{key:0,modelValue:e.items._bufferFileList,"onUpdate:modelValue":function(t){return e.items._bufferFileList=t},preview:""},null,8,["modelValue","onUpdate:modelValue"])):(0,i.kq)("",!0)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:1},8,["children"])]})),_:1}),P])}var O=n(50124),D=n(48534),I=(n(57327),n(41539),n(21249),n(47042),n(69600),n(57658),n(38862),n(76496)),M=n(88575),R=n(57265),J=n(37184),$=n(20868),U=n(69650),V={components:{AppBarPage:I.Z,UploaderImageComponents:R.Z,TableComponents:M.Z},data:function(){return{bufferRow:{},value1:"",wbWorkhours:[],teBasPlanMcList:[]}},created:function(){this.initFunc()},methods:{GlobalTooltipFunc:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(0,$.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),i=n[t]||[],r=i.filter((function(t){return e==t.value}))[0]||{};return r},initFunc:function(){var t=this;return(0,D.Z)((0,O.Z)().mark((function e(){var n,i,r;return(0,O.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.$route.query.row,i=void 0===n?"{}":n,r=JSON.parse(i),t.bufferRow=r,t.teBasPlanMcList=(r.teBasPlanMcList||[]).map((function(t,e){return Object.assign(t,{_switch:"1"==t.manitainResult,_index:e+1,_bufferFileList:t.filePath?t.filePath.split(",").map((function(t){return Object.assign({url:t})})):[]})})),t.$nextTick((function(){t.$refs.table2.initFunc()}));case 5:case"end":return e.stop()}}),e)})))()},onSubmit:function(){var t=this;return(0,D.Z)((0,O.Z)().mark((function e(){var n,i,r,a,u,o,l;return(0,O.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.value1,i=t.bufferRow,t.teBasPlanMcList,r=t.teBasPlanMcList.filter((function(t){return"1"==t.pictureFlag&&!t._bufferFileList.length})),!r.length){e.next=5;break}return(0,$.LJ)("序号: ".concat(r.map((function(t){return t._index})).slice()," 图片必传！")),e.abrupt("return");case 5:return a={equipmentName:i.equipmentName,expireTime:i.expireTime,faultStationCn:i.faultStationCn,manitainContent:i.manitainContent,implementContent:n,planImplementBy:i.planImplementBy,wbSt:i.wbSt,wbTt:i.wbTt,tmBasEquipmentId:i.tmBasEquipmentId,machineType:i.machineType,teWbMainTaskId:i.teWbMainTaskId,tmWbMainPlanId:i.tmWbMainPlanId,wbMais:i.wbMais,teBasPlanMcList:t.teBasPlanMcList.map((function(t){return Object.assign(t,{manitainResult:t._switch?"1":"0",filePath:t._bufferFileList.map((function(t){return t.url})).join()})}))},e.next=8,(0,J.i)({url:"/iiot/mainTask/wbJob",method:"post",payload:a});case 8:u=e.sent,o=u.code,l=u.data,void 0===l?{}:l,200==o&&((0,$.XA)("提交成功！"),t.$router.push({path:"/maintain/index",query:{tabs:2}}));case 13:case"end":return e.stop()}}),e)})))()},addManHourFunc:function(){var t=this.bufferRow;this.$router.push({path:"/maintain/add",query:{row:JSON.stringify({teWbMainTaskId:t.teWbMainTaskId})}})},editHandle:function(t){var e=this;return(0,D.Z)((0,O.Z)().mark((function n(){var i,r,a,u,o;return(0,O.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.items,n.next=3,(0,J.i)({url:"/iiot/workhours/".concat(i.ttWbWorkhoursId),method:"get"});case 3:r=n.sent,a=r.code,u=r.data,o=void 0===u?{}:u,200==a&&e.$router.push({path:"/maintain/add",query:{row:JSON.stringify(o)}});case 8:case"end":return n.stop()}}),n)})))()},deleteHandle:function(t){var e=this;return(0,D.Z)((0,O.Z)().mark((function n(){var i;return(0,O.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=t.items,(0,U.vC)({title:"删除",message:"删除后数据不可恢复，确认删除！",theme:"round-button",closeOnClickOverlay:!0}).then((0,D.Z)((0,O.Z)().mark((function t(){var n,r,a;return(0,O.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,J.i)({url:"/iiot/workhours/".concat(i.ttWbWorkhoursId),method:"DELETE"});case 2:n=t.sent,r=n.code,a=n.data,void 0===a?{}:a,200==r&&((0,$.XA)("提交成功！"),e.$router.push({path:"/maintain/index",query:{tabs:2}}));case 7:case"end":return t.stop()}}),t)}))));case 2:case"end":return n.stop()}}),n)})))()},onRepairs:function(){var t=this.bufferRow;this.$router.push({path:"/equipment/repairs",query:{tmBasEquipmentId:t.tmBasEquipmentId,equipmentNo:t.equipmentNo,equipmentName:t.equipmentName}})},onReceiveFunc:function(){var t=this.bufferRow;this.$router.push({path:"/replacement/index",query:{activeType:"maintain",row:JSON.stringify(t)}})},checksParePart:function(){this.$router.push({path:"/outPutHistory/detail",query:{_page:"maintainMessageDetailHistory",partNo:this.bufferRow.partNo}})}}},j=n(40089);const H=(0,j.Z)(V,[["render",q]]);var A=H},69650:function(t,e,n){n.d(e,{vC:function(){return f}});n(41539);var i,r=n(73396),a=n(12220),u=n(57548),o=n(21178),l={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1},s=(0,a.l7)({},l);function c(){var t={setup:function(){var t=(0,u.o)(),e=t.state,n=t.toggle;return function(){return(0,r.Wm)(o.Z,(0,r.dG)(e,{"onUpdate:show":n}),null)}}},e=(0,u.H)(t);i=e.instance}function f(t){return a._f?new Promise((function(e,n){i||c(),i.open((0,a.l7)({},s,t,{callback:function(t){("confirm"===t?e:n)(t)}}))})):Promise.resolve()}}}]);
//# sourceMappingURL=chunk.2273.1689576086920.js.map