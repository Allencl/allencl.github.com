"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[4199],{14614:function(t,e,i){i.d(e,{m:function(){return s}});var a=i(37184);const s=async t=>await(0,a.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:t.payload})},88575:function(t,e,i){i.d(e,{Z:function(){return C}});var a=i(73396),s=i(87139);const n={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},l=(0,a._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},c=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),r=(0,a._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},p=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),m=(0,a._)("span",null,"总",-1),d={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,a._)("span",null,"条",-1),g={style:{position:"relative",top:"1px","margin-left":"0px"}},f={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(t,e,i,w,_,x){const k=(0,a.up)("v-icon"),y=(0,a.up)("v-btn"),W=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[t.paging&&i.pagingShow?((0,a.wg)(),(0,a.j4)(W,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:x.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:x.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",n,[l,(0,a._)("span",o,(0,s.zw)(t.current),1),c,r,(0,a._)("span",u,(0,s.zw)(t.page),1),p,m,(0,a._)("span",d,(0,s.zw)(t.totalNum),1),h]),(0,a._)("span",g,[i.showSearchBtn?((0,a.wg)(),(0,a.j4)(y,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:x.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(y,{onClick:x.refreshClick,style:(0,s.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),t.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(t.items,((e,i)=>(0,a.WI)(t.$slots,"tableBody",{key:i,items:e,_index:i}))),128)):((0,a.wg)(),(0,a.iD)("p",f,[(0,a.Wm)(k,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var _=i(21801),x=i(37184);var k=i(20868),y={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:t,url:e}=this;t&&e&&this.initFunc()},methods:{previousHandle(){const{current:t}=this;1!=t?(this.current=t-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,k.LJ)("第一页！")},nextHandle(){const{current:t,page:e}=this;t>=e?(0,k.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(t=1,e){const{url:i,params:a={},children:s,method:n,formatData:l}=this;if(s)return this.items=s,void(this.paging=!1);const o=(0,_.Z)((0,_.Z)({pageNum:t,pageSize:10},a),e),{code:c,total:r=0,msg:u="",data:p,rows:m}=await(0,x.i)({method:n,url:i,payload:"post"==n?o:{},url_params:"get"==n?o:{}});200==c&&(this.totalNum=r,this.current=t,this.page=Math.ceil(r/o.pageSize),this.items=l?l(p||m||[]):p||m||[])},refreshClick(){const{refreshFunc:t}=this;!t&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((t=>Object.assign(t,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},W=i(40089);const v=(0,W.Z)(y,[["render",w]]);var C=v},44199:function(t,e,i){i.r(e),i.d(e,{default:function(){return N}});var a=i(73396),s=i(87139);const n={class:"font-weight-medium text"},l={class:"font-weight-medium font-weight-light",style:{color:"#00E5FF"}},o={class:"v-window-item-table"},c=(0,a._)("p",{class:"text-truncate font-weight-medium font-weight-light"},"点检项目",-1),r={class:"text-left font-weight-medium text-teal-lighten-1",color:"primary"},u=(0,a._)("p",{class:"font-weight-medium text"},"判断方法:",-1),p={class:"text-truncate font-weight-light"},m=(0,a._)("p",{class:"font-weight-medium text"},"处理方式:",-1),d={class:"text-truncate font-weight-light"},h=(0,a._)("p",{class:"font-weight-medium text"},"判断标准:",-1),g=["onClick"],f=(0,a._)("p",{class:"font-weight-medium text"},"目的:",-1),w={class:"text-truncate font-weight-light"},_={class:"font-weight-medium text"},x={class:"text-truncate font-weight-light"};function k(t,e,i,k,y,W){const v=(0,a.up)("AppBarPage"),C=(0,a.up)("v-icon"),b=(0,a.up)("v-col"),z=(0,a.up)("v-row"),F=(0,a.up)("v-badge"),N=(0,a.up)("v-card"),S=(0,a.up)("TableComponents");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(v),(0,a.Wm)(z,{"no-gutters":"",class:"text",style:{margin:"8px 4px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",n,[(0,a.Wm)(C,{icon:"mdi-message-text font-weight-medium",size:"16",color:"primary"}),(0,a.Uk)(" 点检设备信息:")])])),_:1}),(0,a.Wm)(b,{cols:"12",class:"text-left"},{default:(0,a.w5)((()=>[(0,a._)("p",l,(0,s.zw)(t.bufferRow.equipmentName),1)])),_:1})])),_:1}),(0,a._)("div",o,[(0,a.Wm)(S,{ref:"table1",children:t.tableChildren,pagingShow:!1},{tableBody:(0,a.w5)((t=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(z,{"no-gutters":"",class:"table-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"1"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{content:t._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,a.Wm)(b,{cols:"8"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(b,{cols:"1",class:"text-right"})])),_:2},1024),(0,a.Wm)(z,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",r,(0,s.zw)(t.items.checkNo)+"-"+(0,s.zw)(t.items.checkName),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(z,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"3"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(b,{cols:"9"},{default:(0,a.w5)((()=>[(0,a._)("p",p,(0,s.zw)(t.items.judgmentMethod),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(z,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"3"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(b,{cols:"9"},{default:(0,a.w5)((()=>[(0,a._)("p",d,(0,s.zw)(t.items.processingMethod),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(z,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"3"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(b,{cols:"9"},{default:(0,a.w5)((()=>[(0,a._)("p",{class:"text-truncate font-weight-light",onClick:e=>W.GlobalTooltipFunc(t.items.standardJudgment)},(0,s.zw)(t.items.standardJudgment),9,g)])),_:2},1024)])),_:2},1024),(0,a.Wm)(z,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"3"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(b,{cols:"9"},{default:(0,a.w5)((()=>[(0,a._)("p",w,(0,s.zw)(t.items.objective),1)])),_:2},1024)])),_:2},1024),"N"==t.items.checkResult?((0,a.wg)(),(0,a.j4)(z,{key:0,"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",_,[(0,a.Uk)(" 不合格描述: "),(0,a._)("span",null,(0,s.zw)(t.items.checkResultContent),1)])])),_:2},1024)])),_:2},1024)):(0,a.kq)("",!0),(0,a.Wm)(z,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{cols:"6",class:"text-right"}),(0,a.Wm)(b,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a._)("p",x,[(0,a.Uk)(" 结果: "),(0,a._)("span",{style:(0,s.j5)("N"==t.items.checkResult?"color:#FF5722":"color:#4CAF50")},(0,s.zw)("N"==t.items.checkResult?"不合格":"合格"),5)])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["children"])])])}var y=i(76496),W=i(88575),v=i(37184),C=(i(14614),i(20868)),b={components:{AppBarPage:y.Z,TableComponents:W.Z},data:()=>({bufferRow:{},tableChildren:[]}),created(){this.initFunc()},methods:{GlobalTooltipFunc(t=""){(0,C.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(t="",e=""){const i=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=i[t]||[],s=a.filter((t=>e==t.value))[0]||{};return s},async initFunc(){const{ttCheckTaskId:t,row:e="{}"}=this.$route.query,{code:i,data:a=[]}=await(0,v.i)({url:"/iiot/checkTask/checkTask",method:"post",payload:{ttCheckTaskId:t}});200==i&&(this.tableChildren=a,this.bufferRow=JSON.parse(e),this.$nextTick((()=>{this.$refs.table1.initFunc()})))}}},z=i(40089);const F=(0,z.Z)(b,[["render",k]]);var N=F}}]);
//# sourceMappingURL=chunk.4199.1689579771365.js.map