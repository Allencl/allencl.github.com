"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[5839],{14614:function(t,e,i){i.d(e,{m:function(){return s}});var a=i(37184);const s=async t=>await(0,a.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:t.payload})},88575:function(t,e,i){i.d(e,{Z:function(){return v}});var a=i(73396),s=i(87139);const n={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},l=(0,a._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),c=(0,a._)("span",null,"共",-1),p={style:{"padding-left":"1px","padding-right":"1px"}},u=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),m=(0,a._)("span",null,"总",-1),d={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,a._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(t,e,i,w,k,x){const _=(0,a.up)("v-icon"),y=(0,a.up)("v-btn"),W=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[t.paging&&i.pagingShow?((0,a.wg)(),(0,a.j4)(W,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:x.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:x.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",n,[l,(0,a._)("span",o,(0,s.zw)(t.current),1),r,c,(0,a._)("span",p,(0,s.zw)(t.page),1),u,m,(0,a._)("span",d,(0,s.zw)(t.totalNum),1),h]),(0,a._)("span",f,[i.showSearchBtn?((0,a.wg)(),(0,a.j4)(y,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:x.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(y,{onClick:x.refreshClick,style:(0,s.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),t.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(t.items,((e,i)=>(0,a.WI)(t.$slots,"tableBody",{key:i,items:e,_index:i}))),128)):((0,a.wg)(),(0,a.iD)("p",g,[(0,a.Wm)(_,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var k=i(21801),x=i(37184);var _=i(20868),y={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:t,url:e}=this;t&&e&&this.initFunc()},methods:{previousHandle(){const{current:t}=this;1!=t?(this.current=t-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,_.LJ)("第一页！")},nextHandle(){const{current:t,page:e}=this;t>=e?(0,_.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(t=1,e){const{url:i,params:a={},children:s,method:n,formatData:l}=this;if(s)return this.items=s,void(this.paging=!1);const o=(0,k.Z)((0,k.Z)({pageNum:t,pageSize:10},a),e),{code:r,total:c=0,msg:p="",data:u,rows:m}=await(0,x.i)({method:n,url:i,payload:"post"==n?o:{},url_params:"get"==n?o:{}});200==r&&(this.totalNum=c,this.current=t,this.page=Math.ceil(c/o.pageSize),this.items=l?l(u||m||[]):u||m||[])},refreshClick(){const{refreshFunc:t}=this;!t&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((t=>Object.assign(t,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},W=i(40089);const C=(0,W.Z)(y,[["render",w]]);var v=C},25839:function(t,e,i){i.r(e),i.d(e,{default:function(){return T}});var a=i(73396),s=i(87139);const n={class:"v-window-item-table"},l=(0,a._)("p",{class:"text-truncate font-weight-medium text"},"维修设备",-1),o={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},r={class:"text-truncate font-weight-light"},c=(0,a._)("span",{class:"font-weight-medium text"},"所属工厂: ",-1),p={class:"text-truncate font-weight-light"},u=(0,a._)("span",{class:"font-weight-medium text"},"点检类型: ",-1),m={class:"text-truncate font-weight-light"},d=(0,a._)("span",{class:"font-weight-medium text"},"点检人: ",-1),h={class:"text-truncate font-weight-light font-weight-medium",style:{color:"#00E5FF"}},f={class:"text-truncate font-weight-light"},g=(0,a._)("span",{class:"font-weight-medium text"},"点检时间: ",-1),w=(0,a._)("p",{style:{"font-size":"18px",padding:"8px 0px 8px 6px"}},"是否报修",-1),k=(0,a._)("div",{style:{height:"12px"}},null,-1),x=(0,a._)("div",{style:{height:"18px"}},null,-1);function _(t,e,i,_,y,W){const C=(0,a.up)("AppBarPage"),v=(0,a.up)("v-badge"),b=(0,a.up)("v-col"),F=(0,a.up)("v-row"),z=(0,a.up)("v-btn"),T=(0,a.up)("v-card"),U=(0,a.up)("TableComponents"),S=(0,a.up)("van-popup");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(C),(0,a._)("div",n,[(0,a.Wm)(U,{ref:"table1",url:"/iiot/checkTask/list",params:{taskState:"W"},method:"post"},{tableBody:(0,a.w5)((t=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(F,{"no-gutters":"",class:"table-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"1"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{content:t._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,a.Wm)(b,{cols:"5"},{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(b,{cols:"1",class:"text-right"})])),_:2},1024),(0,a.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",o,(0,s.zw)(t.items.equipmentName),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",r,[c,(0,a.Uk)(" "+(0,s.zw)(t.items.nodeLevelName),1)])])),_:2},1024)])),_:2},1024),(0,a.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",p,[u,(0,a.Uk)(" "+(0,s.zw)(W.FormatDictionary("CHECK_TYPE",t.items.taskType)["lable"]),1)])])),_:2},1024)])),_:2},1024),(0,a.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"6"},{default:(0,a.w5)((()=>[(0,a._)("p",m,[d,(0,a.Uk)(" "+(0,s.zw)(t.items.checkBy),1)])])),_:2},1024),(0,a.Wm)(b,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a._)("p",h,"状态: "+(0,s.zw)(W.FormatDictionary("CHECK_STATE",t.items.taskState)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",f,[g,(0,a.Uk)(" "+(0,s.zw)(t.items.checkStartTime),1)])])),_:2},1024)])),_:2},1024),(0,a.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"5",class:"text-left"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{onClick:e=>W.detailClick(t),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,a.w5)((()=>[(0,a.Uk)("查看点检信息")])),_:2},1032,["onClick"])])),_:2},1024),(0,a.Wm)(b,{cols:"1",class:"text-left"}),(0,a.Wm)(b,{cols:"3",class:"text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{onClick:e=>W.statusClick(t.items,!0),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,a.w5)((()=>[(0,a.Uk)("正常")])),_:2},1032,["onClick"])])),_:2},1024),(0,a.Wm)(b,{cols:"3",class:"text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{onClick:e=>W.showDialogFunc(t.items),color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,a.w5)((()=>[(0,a.Uk)("异常")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},512)]),(0,a.Wm)(S,{show:t.showPicker,"onUpdate:show":e[2]||(e[2]=e=>t.showPicker=e),style:{padding:"12px 12px 4px 12px",width:"80%"},round:"",closeable:""},{default:(0,a.w5)((()=>[(0,a._)("div",null,[w,k,(0,a.Wm)(F,{"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"5",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{onClick:e[0]||(e[0]=t=>W.errorFunc(!0)),color:"primary",block:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" 是 ")])),_:1})])),_:1}),(0,a.Wm)(b,{cols:"2"}),(0,a.Wm)(b,{cols:"5",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{onClick:e[1]||(e[1]=t=>W.errorFunc(!1)),color:"warning",block:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" 否 ")])),_:1})])),_:1})])),_:1}),x])])),_:1},8,["show"])])}i(57658);var y=i(76496),W=i(88575),C=i(37184),v=(i(14614),i(20868)),b={components:{AppBarPage:y.Z,TableComponents:W.Z},data:()=>({bufferRow:{},showPicker:!1}),methods:{FormatDictionary(t="",e=""){const i=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=i[t]||[],s=a.filter((t=>e==t.value))[0]||{};return s},async detailClick(t){const{items:e}=t;this.$router.push({path:"/examineConfirm/detail",query:{ttCheckTaskId:e.ttCheckTaskId}})},async statusClick(t,e){const i={ttCheckTaskId:t.ttCheckTaskId,confirmResult:e?"O":"N"},{code:a,data:s={}}=await(0,C.i)({url:"/iiot/checkTaskRecord/commitCheckTaskRecord",method:"post",payload:i});200==a&&((0,v.XA)("提交成功！"),this.showPicker=!1,this.$nextTick((()=>{this.$refs.table1.initFunc()})))},showDialogFunc(t={}){this.bufferRow=t,this.showPicker=!0},errorFunc(t){const{bufferRow:e}=this;t?this.$router.push({path:"/equipment/repairs",query:{tmBasEquipmentId:e.tmBasEquipmentId,equipmentNo:e.equipmentNo,equipmentName:e.equipmentName}}):this.statusClick(e,!1)}}},F=i(40089);const z=(0,F.Z)(b,[["render",_]]);var T=z}}]);
//# sourceMappingURL=chunk.5839.1689576434327.js.map