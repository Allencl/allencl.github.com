"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[2318],{14614:function(t,e,n){n.d(e,{m:function(){return u}});var r=n(50124),i=n(48534),a=n(37184),u=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:e.payload});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},89337:function(t,e,n){n.d(e,{$w:function(){return f},AT:function(){return o},NM:function(){return l},ew:function(){return c},jt:function(){return u},vU:function(){return s}});var r=n(50124),i=n(48534),a=n(37184),u=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e,n=arguments;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:{},t.next=3,(0,a.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.i)({url:"/iiot/faultType/list?enabled=1",method:"get"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.i)({url:"/iiot/fault/list?enabled=1",method:"get"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},5878:function(t,e,n){n.d(e,{b:function(){return i}});var r=n(66347),i=(n(57658),function(t,e,n,i){var a,u={id:e||"id",parentId:n||"parentId",childrenList:i||"children"},o={},s={},c=[],l=(0,r.Z)(t);try{for(l.s();!(a=l.n()).done;){var f=a.value,d=f[u.parentId];null==o[d]&&(o[d]=[]),s[f[u.id]]=f,o[d].push(f)}}catch(x){l.e(x)}finally{l.f()}var p,m=(0,r.Z)(t);try{for(m.s();!(p=m.n()).done;){var h=p.value,w=h[u.parentId];null==s[w]&&c.push(h)}}catch(x){m.e(x)}finally{m.f()}for(var g=0,v=c;g<v.length;g++){var k=v[g];_(k)}function _(t){if(null!==o[t[u.id]]&&(t[u.childrenList]=o[t[u.id]]),t[u.childrenList]){var e,n=(0,r.Z)(t[u.childrenList]);try{for(n.s();!(e=n.n()).done;){var i=e.value;_(i)}}catch(x){n.e(x)}finally{n.f()}}}return c})},88575:function(t,e,n){n.d(e,{Z:function(){return S}});var r=n(73396),i=n(87139),a={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},u=(0,r._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},s=(0,r._)("span",{style:{"margin-right":"3px"}},"页",-1),c=(0,r._)("span",null,"共",-1),l={style:{"padding-left":"1px","padding-right":"1px"}},f=(0,r._)("span",{style:{"margin-right":"3px"}},"页",-1),d=(0,r._)("span",null,"总",-1),p={style:{"padding-left":"1px","padding-right":"1px"}},m=(0,r._)("span",null,"条",-1),h={style:{position:"relative",top:"1px","margin-left":"0px"}},w={key:2,class:"text-center",style:{"padding-top":"12px"}};function g(t,e,n,g,v,k){var _=(0,r.up)("v-icon"),x=(0,r.up)("v-btn"),y=(0,r.up)("v-card");return(0,r.wg)(),(0,r.iD)("span",null,[t.paging&&n.pagingShow?((0,r.wg)(),(0,r.j4)(y,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:k.previousHandle},{default:(0,r.w5)((function(){return[(0,r.Wm)(_,{size:"28"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi-chevron-left")]})),_:1})]})),_:1},8,["onClick"]),(0,r.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:k.nextHandle},{default:(0,r.w5)((function(){return[(0,r.Wm)(_,{size:"28"},{default:(0,r.w5)((function(){return[(0,r.Uk)("mdi-chevron-right")]})),_:1})]})),_:1},8,["onClick"]),(0,r._)("span",a,[u,(0,r._)("span",o,(0,i.zw)(t.current),1),s,c,(0,r._)("span",l,(0,i.zw)(t.page),1),f,d,(0,r._)("span",p,(0,i.zw)(t.totalNum),1),m]),(0,r._)("span",h,[n.showSearchBtn?((0,r.wg)(),(0,r.j4)(x,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:k.searchClick,variant:"plain",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Wm)(_,{size:"24",icon:"mdi-magnify"}),(0,r.Uk)(" 查询 ")]})),_:1},8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(x,{onClick:k.refreshClick,style:(0,i.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 刷新 ")]})),_:1},8,["onClick"])])]})),_:1})):(0,r.kq)("",!0),t.items.length?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(t.items,(function(e,n){return(0,r.WI)(t.$slots,"tableBody",{key:n,items:e,_index:n})})),128)):((0,r.wg)(),(0,r.iD)("p",w,[(0,r.Wm)(_,{icon:"mdi-emoticon-sad-outline"}),(0,r.Uk)(" 无数据！ ")]))])}var v=n(50124),k=n(95082),_=n(48534),x=(n(21249),n(37184)),y=n(20868),b={components:{},emits:["searchClick","refresh"],data:function(){return{totalNum:0,current:1,page:0,paging:!0,items:[]}},created:function(){var t=this.auto,e=this.url;t&&e&&this.initFunc()},methods:{previousHandle:function(){var t=this,e=this.current;1!=e?(this.current=e-1,this.$nextTick((function(){t.initFunc(t.current)}))):(0,y.LJ)("第一页！")},nextHandle:function(){var t=this,e=this.current,n=this.page;e>=n?(0,y.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((function(){t.initFunc(t.current)})))},initFunc:function(){var t=arguments,e=this;return(0,_.Z)((0,v.Z)().mark((function n(){var r,i,a,u,o,s,c,l,f,d,p,m,h,w,g,_;return(0,v.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:1,i=t.length>1?t[1]:void 0,a=e.url,u=e.params,o=void 0===u?{}:u,s=e.children,c=e.method,l=e.formatData,!s){n.next=7;break}return e.items=s,e.paging=!1,n.abrupt("return");case 7:return f=(0,k.Z)((0,k.Z)({pageNum:r,pageSize:10},o),i),n.next=10,(0,x.i)({method:c,url:a,payload:"post"==c?f:{},url_params:"get"==c?f:{}});case 10:d=n.sent,p=d.code,m=d.total,h=void 0===m?0:m,w=d.msg,void 0===w?"":w,g=d.data,_=d.rows,200==p&&(e.totalNum=h,e.current=r,e.page=Math.ceil(h/f.pageSize),e.items=l?l(g||_||[]):g||_||[]);case 19:case"end":return n.stop()}}),n)})))()},refreshClick:function(){var t=this.refreshFunc;!t&&this.initFunc(1),this.$emit("refresh")},searchClick:function(){this.$emit("searchClick")},resultData:function(){return this.items||[]},selectAll:function(){this.items=this.items.map((function(t){return Object.assign(t,{_checked:!0})}))}},props:{method:{type:String,default:function(){return"get"}},refreshFunc:{type:Boolean,default:function(){return!1}},showSearchBtn:{type:Boolean,default:function(){return!1}},auto:{type:Boolean,default:function(){return!0}},pagingShow:{type:Boolean,default:function(){return!0}},children:{type:Array,default:function(){}},url:{type:String,default:function(){return""}},params:{type:Object,default:function(){}},formatData:{}}},W=n(40089);const C=(0,W.Z)(b,[["render",g]]);var S=C},13537:function(t,e,n){n.r(e),n.d(e,{default:function(){return st}});var r=n(95082),i=(n(21249),n(73396)),a=n(87139),u=(0,i._)("div",{style:{height:"50px"}},null,-1),o={class:"font-weight-medium text-right text-teal-lighten-1"},s={class:"font-weight-medium text",style:{color:"#00E5FF"}},c=(0,i._)("p",{class:"font-weight-medium text"},"任务流水号:",-1),l={class:"text-truncate font-weight-medium font-weight-light"},f={class:"text-truncate font-weight-light"},d={style:{color:"#00E5FF"}},p=(0,i._)("p",{class:"font-weight-medium text"},"产线:",-1),m={class:"text-truncate font-weight-medium font-weight-light"},h=(0,i._)("p",{class:"font-weight-medium text"},"报检时间:",-1),w={class:"text-truncate font-weight-medium font-weight-light"},g=(0,i._)("p",{class:"font-weight-medium text"},"报检人:",-1),v={class:"text-truncate font-weight-medium font-weight-light"},k=(0,i._)("p",{class:"font-weight-medium text"},"检验结果:",-1),_={class:"text-truncate font-weight-light",style:{"margin-top":"6px"}},x=(0,i._)("span",{class:"font-weight-medium text"},"检验数量:",-1),y=(0,i._)("p",{class:"font-weight-medium text"},"合格数量:",-1),b={class:"font-weight-medium text-right text-teal-lighten-1"},W={class:"font-weight-medium text",style:{color:"#00E5FF"}},C=(0,i._)("p",{class:"font-weight-medium text"},"任务流水号:",-1),S={class:"text-truncate font-weight-medium font-weight-light"},Z={class:"text-truncate font-weight-light"},T={style:{color:"#00E5FF"}},F=(0,i._)("p",{class:"font-weight-medium text"},"产线:",-1),I={class:"text-truncate font-weight-medium font-weight-light"},q=(0,i._)("p",{class:"font-weight-medium text"},"报检时间:",-1),Q={class:"text-truncate font-weight-medium font-weight-light"},L=(0,i._)("p",{class:"font-weight-medium text"},"报检人:",-1),P={class:"text-truncate font-weight-medium font-weight-light"},z=(0,i._)("p",{class:"font-weight-medium text"},"检验结果:",-1),D=(0,i._)("h3",null,"检验选择",-1),H=(0,i._)("div",{style:{height:"6px"}},null,-1),N={class:"font-weight-medium text text-teal-lighten-1"},$=(0,i._)("div",{style:{height:"20px"}},null,-1),B=(0,i._)("div",{style:{height:"16px"}},null,-1),U=(0,i._)("div",{style:{height:"16px"}},null,-1);function A(t,e,n,A,j,O){var V=(0,i.up)("v-tab"),R=(0,i.up)("v-tabs"),E=(0,i.up)("AppBarPage"),J=(0,i.up)("v-btn"),K=(0,i.up)("v-badge"),Y=(0,i.up)("v-col"),M=(0,i.up)("v-row"),G=(0,i.up)("van-field"),X=(0,i.up)("v-card"),tt=(0,i.up)("TableComponents"),et=(0,i.up)("v-window-item"),nt=(0,i.up)("v-window"),rt=(0,i.up)("van-popup"),it=(0,i.up)("SearchPage"),at=(0,i.up)("SearchPage2");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(E,null,{appTabs:(0,i.w5)((function(){return[(0,i.Wm)(R,{modelValue:t.tab,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.tab=e}),density:"comfortable","align-with-title":"",class:"custem-tabs-global"},{default:(0,i.w5)((function(){return[(0,i.Wm)(V,{value:"1","hide-slider":""},{default:(0,i.w5)((function(){return[(0,i.Uk)("待检验")]})),_:1}),(0,i.Wm)(V,{value:"2","hide-slider":""},{default:(0,i.w5)((function(){return[(0,i.Uk)("检验完成")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),u,1==t.tab?((0,i.wg)(),(0,i.j4)(J,{key:0,style:{position:"fixed",top:"220px",right:"16px","z-index":"11"},icon:"mdi-plus",color:"secondary",onClick:O.addHandle},null,8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(nt,{modelValue:t.tab,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.tab=e})},{default:(0,i.w5)((function(){return[(0,i.Wm)(et,{value:"1",class:"v-window-item-table"},{default:(0,i.w5)((function(){return["1"==t.tab?((0,i.wg)(),(0,i.j4)(tt,{key:0,ref:"table1",url:"/iiot/qmTask/list",method:"post",showSearchBtn:!0,params:(0,r.Z)({taskType:"LQC",params:{statusList:["N","R"]}},t.pageSearchConfig),formatData:function(t){return t.map((function(t){return Object.assign(t,{_taskQty:"1"})}))},onSearchClick:O.searchClick},{tableBody:(0,i.w5)((function(t){return[(0,i.Wm)(X,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(M,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"1"},{default:(0,i.w5)((function(){return[(0,i.Wm)(K,{content:t._index+1,color:"primary",inline:""},null,8,["content"])]})),_:2},1024),(0,i.Wm)(Y,{cols:"1"}),(0,i.Wm)(Y,{cols:"10"},{default:(0,i.w5)((function(){return[(0,i._)("p",o,(0,a.zw)(O.FormatDictionary("QC_TASK_TYPE",t.items.processType)["lable"]),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"12"},{default:(0,i.w5)((function(){return[(0,i._)("p",s,(0,a.zw)(t.items.nodeLevelNo+"-"+t.items.nodeLevelName),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[c]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",l,(0,a.zw)(t.items.taskNo),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"12",class:"text-left"},{default:(0,i.w5)((function(){return[(0,i._)("p",f,[(0,i.Uk)(" 任务状态: "),(0,i._)("span",d,(0,a.zw)(O.FormatDictionary("qm_task_status",t.items.taskStatus)["lable"]),1)])]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[p]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",m,(0,a.zw)(t.items.nodeLevelName),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[h]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",w,(0,a.zw)(t.items.requestTime),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[g]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",v,(0,a.zw)(t.items.requestByName),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[k]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[t.items.inspectResult?((0,i.wg)(),(0,i.iD)("p",{key:0,style:(0,a.j5)("color: ".concat("10"==t.items.inspectResult?"#43A047":"#E53935")),class:"text-truncate font-weight-light"},(0,a.zw)("10"==t.items.inspectResult?"合格":"不合格"),5)):(0,i.kq)("",!0)]})),_:2},1024)]})),_:2},1024),"R"==t.items.taskStatus?((0,i.wg)(),(0,i.j4)(M,{key:0,"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",_,[x,(0,i.Uk)(" "+(0,a.zw)(t.items.taskQty),1)])]})),_:2},1024),(0,i.Wm)(Y,{cols:"4",class:"text-left"})]})),_:2},1024)):(0,i.kq)("",!0),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[y]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i.Wm)(G,{modelValue:t.items._taskQty,"onUpdate:modelValue":function(e){return t.items._taskQty=e},style:{position:"relative",padding:"0px",top:"-4px"},class:"custem-input-index1",placeholder:"合格数量",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"6",class:"text-left"},{default:(0,i.w5)((function(){return["R"==t.items.taskStatus&&"D"==t.items.processState?((0,i.wg)(),(0,i.j4)(J,{key:0,onClick:function(e){return O.accomplishClick(t)},color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((function(){return[(0,i.Uk)("检验确认")]})),_:2},1032,["onClick"])):(0,i.kq)("",!0)]})),_:2},1024),(0,i.Wm)(Y,{cols:"6",class:"text-right"},{default:(0,i.w5)((function(){return[(0,i.Wm)(J,{onClick:function(e){return O.detailClick(t)},style:{"font-size":"20px"},color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((function(){return[(0,i.Uk)("检验")]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:1},8,["params","formatData","onSearchClick"])):(0,i.kq)("",!0)]})),_:1}),(0,i.Wm)(et,{value:"2",class:"v-window-item-table"},{default:(0,i.w5)((function(){return["2"==t.tab?((0,i.wg)(),(0,i.j4)(tt,{key:0,ref:"table2",url:"/iiot/qmTask/list",method:"post",showSearchBtn:!0,params:(0,r.Z)({taskType:"LQC",params:{statusList:["F"]}},t.pageSearchConfig2),onSearchClick:O.searchClick2},{tableBody:(0,i.w5)((function(t){return[(0,i.Wm)(X,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(M,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"1"},{default:(0,i.w5)((function(){return[(0,i.Wm)(K,{content:t._index+1,color:"primary",inline:""},null,8,["content"])]})),_:2},1024),(0,i.Wm)(Y,{cols:"1"}),(0,i.Wm)(Y,{cols:"10"},{default:(0,i.w5)((function(){return[(0,i._)("p",b,(0,a.zw)(O.FormatDictionary("QC_TASK_TYPE",t.items.processType)["lable"]),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"12"},{default:(0,i.w5)((function(){return[(0,i._)("p",W,(0,a.zw)(t.items.nodeLevelNo+"-"+t.items.nodeLevelName),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[C]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",S,(0,a.zw)(t.items.taskNo),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"12",class:"text-left"},{default:(0,i.w5)((function(){return[(0,i._)("p",Z,[(0,i.Uk)(" 任务状态: "),(0,i._)("span",T,(0,a.zw)(O.FormatDictionary("qm_task_status",t.items.taskStatus)["lable"]),1)])]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[F]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",I,(0,a.zw)(t.items.nodeLevelName),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[q]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",Q,(0,a.zw)(t.items.requestTime),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[L]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[(0,i._)("p",P,(0,a.zw)(t.items.requestByName),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((function(){return[z]})),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((function(){return[t.items.inspectResult?((0,i.wg)(),(0,i.iD)("p",{key:0,style:(0,a.j5)("color: ".concat("10"==t.items.inspectResult?"#43A047":"#E53935")),class:"text-truncate font-weight-light"},(0,a.zw)("10"==t.items.inspectResult?"合格":"不合格"),5)):(0,i.kq)("",!0)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((function(){return[(0,i.Wm)(Y,{cols:"6",class:"text-left"}),(0,i.Wm)(Y,{cols:"6",class:"text-right"},{default:(0,i.w5)((function(){return[(0,i.Wm)(J,{onClick:function(e){return O.detailClick(t,"detail")},color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((function(){return[(0,i.Uk)("详情")]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)]})),_:1},8,["params","onSearchClick"])):(0,i.kq)("",!0)]})),_:1})]})),_:1},8,["modelValue"]),(0,i.Wm)(rt,{show:t.showPicker,"onUpdate:show":e[5]||(e[5]=function(e){return t.showPicker=e}),style:{padding:"12px",height:"260px",width:"80%"},round:"",closeable:""},{default:(0,i.w5)((function(){return[D,(0,i._)("div",null,[H,(0,i._)("p",N,(0,a.zw)(t.menuTopTitle),1),$,t.showBtn1?((0,i.wg)(),(0,i.j4)(J,{key:0,block:"",color:"primary",onClick:e[2]||(e[2]=function(t){return O.routerPush("2")})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 工序检验 ")]})),_:1})):(0,i.kq)("",!0),B,t.showBtn2?((0,i.wg)(),(0,i.j4)(J,{key:1,block:"",color:"indigo",onClick:e[3]||(e[3]=function(t){return O.routerPush("3")})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 调试检验 ")]})),_:1})):(0,i.kq)("",!0),U,t.showBtn3?((0,i.wg)(),(0,i.j4)(J,{key:2,block:"",color:"purple",onClick:e[4]||(e[4]=function(t){return O.routerPush("4")})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 入库检验 ")]})),_:1})):(0,i.kq)("",!0)])]})),_:1},8,["show"]),(0,i.Wm)(it,{ref:"searchPage",onResetHandle:O.resetHandle,onSearchHandle:O.searchHandle},null,8,["onResetHandle","onSearchHandle"]),(0,i.Wm)(at,{ref:"searchPage2",onResetHandle:O.resetHandle2,onSearchHandle:O.searchHandle2},null,8,["onResetHandle","onSearchHandle"])])}var j=n(50124),O=n(48534),V=(n(57327),n(41539),n(73210),n(57658),n(9653),n(76496)),R=n(88575),E=n(37184),J=n(73378),K=(0,i._)("div",{style:{height:"36px"}},null,-1),Y={style:{"margin-top":"32px"}};function M(t,e,n,r,a,u){var o=(0,i.up)("van-field"),s=(0,i.up)("v-btn"),c=(0,i.up)("van-cascader"),l=(0,i.up)("van-popup"),f=(0,i.up)("v-col"),d=(0,i.up)("v-row");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(l,{show:t.drawer,"onUpdate:show":e[6]||(e[6]=function(e){return t.drawer=e}),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,i.w5)((function(){return[K,(0,i.Wm)(o,{modelValue:t.fieldValue,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.fieldValue=e}),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",onClick:e[1]||(e[1]=function(e){return t.show=!0})},null,8,["modelValue"]),(0,i.Wm)(l,{show:t.show,"onUpdate:show":e[4]||(e[4]=function(e){return t.show=e}),round:"",position:"bottom"},{default:(0,i.w5)((function(){return[(0,i.Wm)(s,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:e[2]||(e[2]=function(){return t.show=!1})},{default:(0,i.w5)((function(){return[(0,i.Uk)(" 确定 ")]})),_:1}),t.hideFactory?((0,i.wg)(),(0,i.j4)(c,{key:0,title:"请选择工厂节点",options:t.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:e[3]||(e[3]=function(e){return t.show=!1}),onChange:u.onFinish},null,8,["options","onChange"])):(0,i.kq)("",!0)]})),_:1},8,["show"]),(0,i._)("div",Y,[(0,i.Wm)(d,{"no-gutters":""},{default:(0,i.w5)((function(){return[(0,i.Wm)(f,{cols:"4",class:"text-center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(s,{onClick:e[5]||(e[5]=function(){return t.drawer=!1}),density:"compact",variant:"plain"},{default:(0,i.w5)((function(){return[(0,i.Uk)("关闭")]})),_:1})]})),_:1}),(0,i.Wm)(f,{cols:"4",class:"text-center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(s,{onClick:u.resetClick,density:"compact",color:"warning",variant:"plain"},{default:(0,i.w5)((function(){return[(0,i.Uk)("重置")]})),_:1},8,["onClick"])]})),_:1}),(0,i.Wm)(f,{cols:"4",class:"text-center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(s,{onClick:u.searchClick,density:"compact",color:"primary",variant:"plain"},{default:(0,i.w5)((function(){return[(0,i.Uk)("查询")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})])]})),_:1},8,["show"])])}n(92222),n(69600);var G=n(2243),X=n(89337),tt=n(5878),et={components:{SelectComponents:G.Z},emits:["searchHandle","resetHandle"],data:function(){return{hideFactory:!0,drawer:!1,show:!1,fieldValue:"",options:[],factoryID:"",type:"",typeSelectOption:[],property:"",propertySelectOption:[],status:"",statusSelectOption:[]}},created:function(){this.initFunc()},methods:{FormatDictionary:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),r=n[t]||[],i=r.filter((function(t){return e==t.value}))[0]||{};return i},resetClick:function(){var t=this;this.fieldValue="",this.factoryID="",this.hideFactory=!1,this.$nextTick((function(){t.hideFactory=!0})),this.$emit("resetHandle",{})},initFunc:function(){var t=this;return(0,O.Z)((0,j.Z)().mark((function e(){var n,r,i,a;return(0,j.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,X.jt)();case 2:n=e.sent,r=n.data,i=void 0===r?[]:r,a=(0,tt.b)(i,"tmBasNodeLevelId","parentId"),t.options=a;case 7:case"end":return e.stop()}}),e)})))()},getTypeHttp:function(){var t=arguments,e=this;return(0,O.Z)((0,j.Z)().mark((function n(){var r,i,a,u,o;return(0,j.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:"",n.next=3,(0,E.i)({url:"/iiot/abnormalType/listAbnormalTypeForSelect",method:"get",url_params:{abnormalNo:r}});case 3:i=n.sent,a=i.code,u=i.data,o=void 0===u?[]:u,200==a&&(e.typeSelectOption=o.map((function(t){return Object.assign({text:"".concat(t.abnormalNo).concat(t.abnormalName),value:t.tmBasAbnormalTypeId})})));case 8:case"end":return n.stop()}}),n)})))()},onFinish:function(t){var e=t.selectedOptions;if(e.length){var n=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=n,this.fieldValue=e.map((function(t){return t.nodeLevelName})).join("/")}},searchClick:function(){var t=this.factoryID,e=(this.type,this.property,this.status,{tmBasNodeLevelId:t});this.$emit("searchHandle",e),this.drawer=!1},showDrawer:function(){this.drawer=!0}},props:{hideStatus:{type:Boolean,default:function(){return!0}}}},nt=n(40089);const rt=(0,nt.Z)(et,[["render",M]]);var it=rt,at=(n(14614),n(20868)),ut={components:{AppBarPage:V.Z,ScanBarComponents:J.Z,SearchPage:it,SearchPage2:it,TableComponents:R.Z},data:function(){return{tab:"1",pageActive:"",showBtn1:!1,showBtn2:!1,showBtn3:!1,pageSearchConfig:{},pageSearchConfig2:{},menuTopTitle:"",bufferData:{},showPicker:!1}},created:function(){var t=this;this.initHandle(),this.$root.$emitter.on("update_process_page1",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";t.tab=e}))},methods:{GlobalTooltipFunc:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";(0,at.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),r=n[t]||[],i=r.filter((function(t){return e==t.value}))[0]||{};return i},initHandle:function(){var t=this.$route.query.tabs;t&&(this.tab=t)},barSearchClick:function(){var t=arguments,e=this;return(0,O.Z)((0,j.Z)().mark((function n(){var r,i,a,u,o,s;return(0,j.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:"",i=r.trim(),n.next=4,(0,E.i)({url:"/iiot/orderSn/listOrderSnForSelect",method:"get",url_params:{sernr:i}});case 4:if(a=n.sent,u=a.code,o=a.data,s=void 0===o?[]:o,200!=u){n.next=13;break}if(s.length){n.next=12;break}return(0,at.LJ)("SN号不存在！"),n.abrupt("return");case 12:e.$refs.table1.initFunc(1,{ttPpOrderSnId:(s[0]||{}).ttPpOrderSnId});case 13:case"end":return n.stop()}}),n)})))()},barSearchClick2:function(){var t=arguments,e=this;return(0,O.Z)((0,j.Z)().mark((function n(){var r,i,a,u,o,s;return(0,j.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:"",i=r.trim(),n.next=4,(0,E.i)({url:"/iiot/orderSn/listOrderSnForSelect",method:"get",url_params:{sernr:i}});case 4:if(a=n.sent,u=a.code,o=a.data,s=void 0===o?[]:o,200!=u){n.next=13;break}if(s.length){n.next=12;break}return(0,at.LJ)("SN号不存在！"),n.abrupt("return");case 12:e.$refs.table2.initFunc(1,{ttPpOrderSnId:(s[0]||{}).ttPpOrderSnId});case 13:case"end":return n.stop()}}),n)})))()},detailClick:function(t){var e=arguments,n=this;return(0,O.Z)((0,j.Z)().mark((function r(){var i,a;return(0,j.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:i=e.length>1&&void 0!==e[1]?e[1]:"",a=t.items,n.$router.push({path:"/processQualifiedProductionLine/detail4",query:{qcType:"IPQCC",isDetail:i,_pageActive:n.pageActive,ttQmTaskId:a.ttQmTaskId,_pageIndex:4}});case 3:case"end":return r.stop()}}),r)})))()},searchClick:function(){this.$refs.searchPage.showDrawer()},searchHandle:function(t){var e=this;this.pageSearchConfig=t,this.$nextTick((function(){e.$refs.table1.initFunc(1)}))},resetHandle:function(t){var e=this;this.pageSearchConfig={},this.$nextTick((function(){e.$refs.table1.initFunc(1)}))},searchClick2:function(){this.$refs.searchPage2.showDrawer()},searchHandle2:function(t){var e=this;this.pageSearchConfig2=t,this.$nextTick((function(){e.$refs.table2.initFunc(1)}))},resetHandle2:function(t){var e=this;this.pageSearchConfig2={},this.$nextTick((function(){e.$refs.table2.initFunc(1)}))},routerPush:function(t){var e=this.bufferData;switch(t){case"2":this.$router.push({path:"/processQualifiedProductionLine/detail2",query:{qcType:"IPQCA",_pageActive:this.pageActive,ttQmTaskId:e.ttQmTaskId,_pageIndex:2}});break;case"3":this.$router.push({path:"/processQualifiedProductionLine/detail3",query:{qcType:"IPQCB",_pageActive:this.pageActive,ttQmTaskId:e.ttQmTaskId,_pageIndex:3}});break;case"4":this.$router.push({path:"/processQualifiedProductionLine/detail4",query:{qcType:"IPQCC",_pageActive:this.pageActive,ttQmTaskId:e.ttQmTaskId,_pageIndex:4}});break;default:break}},accomplishClick:function(t){var e=this;return(0,O.Z)((0,j.Z)().mark((function n(){var r,i,a,u,o,s;return(0,j.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.items,i=Number(r._taskQty||""),i){n.next=5;break}return(0,at.LJ)("合格数量必填！"),n.abrupt("return");case 5:if(!(i>Number(r.taskQty))){n.next=8;break}return(0,at.LJ)("合格数量不能大于检验数量！"),n.abrupt("return");case 8:return a={ttQmTaskId:r.ttQmTaskId,taskQty:r.taskQty,qualifiedQty:r.taskQty,version:r.version,acceptQty:i},n.next=11,(0,E.i)({url:"/iiot/qmTask/finishQmTask",method:"post",payload:a});case 11:u=n.sent,o=u.code,s=u.data,void 0===s?{}:s,200==o&&((0,at.XA)("提交成功！"),e.$nextTick((function(){e.$refs.table1.initFunc(1)})));case 16:case"end":return n.stop()}}),n)})))()},addHandle:function(){this.$router.push({path:"/processQualifiedProductionLine/add",query:{}})},detailHandle:function(t){}}};const ot=(0,nt.Z)(ut,[["render",A]]);var st=ot}}]);
//# sourceMappingURL=chunk.2318.1689576359115.js.map