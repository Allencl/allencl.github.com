"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[6001],{88575:function(e,t,l){l.d(t,{Z:function(){return k}});var a=l(73396),i=l(87139);const o={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},s=(0,a._)("span",null,"第",-1),n={style:{"padding-left":"1px","padding-right":"1px"}},u=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),r=(0,a._)("span",null,"共",-1),c={style:{"padding-left":"1px","padding-right":"1px"}},m=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,a._)("span",null,"总",-1),d={style:{"padding-left":"1px","padding-right":"1px"}},f=(0,a._)("span",null,"条",-1),h={style:{position:"relative",top:"1px","margin-left":"0px"}},w={key:2,class:"text-center",style:{"padding-top":"12px"}};function g(e,t,l,g,_,v){const x=(0,a.up)("v-icon"),y=(0,a.up)("v-btn"),W=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[e.paging&&l.pagingShow?((0,a.wg)(),(0,a.j4)(W,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:v.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:v.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",o,[s,(0,a._)("span",n,(0,i.zw)(e.current),1),u,r,(0,a._)("span",c,(0,i.zw)(e.page),1),m,p,(0,a._)("span",d,(0,i.zw)(e.totalNum),1),f]),(0,a._)("span",h,[l.showSearchBtn?((0,a.wg)(),(0,a.j4)(y,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:v.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(y,{onClick:v.refreshClick,style:(0,i.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),e.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(e.items,((t,l)=>(0,a.WI)(e.$slots,"tableBody",{key:l,items:t,_index:l}))),128)):((0,a.wg)(),(0,a.iD)("p",w,[(0,a.Wm)(x,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var _=l(21801),v=l(37184);var x=l(20868),y={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,x.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,x.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:l,params:a={},children:i,method:o,formatData:s}=this;if(i)return this.items=i,void(this.paging=!1);const n=(0,_.Z)((0,_.Z)({pageNum:e,pageSize:10},a),t),{code:u,total:r=0,msg:c="",data:m,rows:p}=await(0,v.i)({method:o,url:l,payload:"post"==o?n:{},url_params:"get"==o?n:{}});200==u&&(this.totalNum=r,this.current=e,this.page=Math.ceil(r/n.pageSize),this.items=s?s(m||p||[]):m||p||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},W=l(40089);const b=(0,W.Z)(y,[["render",g]]);var k=b},46001:function(e,t,l){l.r(t),l.d(t,{default:function(){return A}});var a=l(73396),i=l(87139);const o=(0,a._)("span",{class:"font-weight-medium"},"维修设备信息",-1),s=(0,a._)("p",{class:"font-weight-medium text"},"故障类型:",-1),n={class:"text-truncate font-weight-light"},u=(0,a._)("p",{class:"font-weight-medium text"},"故障位置:",-1),r={class:"text-truncate font-weight-light"},c=(0,a._)("p",{class:"font-weight-medium text"},"故障详情描述:",-1),m=(0,a._)("p",{class:"font-weight-medium text"},"维修类型:",-1),p={class:"text-truncate font-weight-light"},d=(0,a._)("p",{class:"font-weight-medium text"},"报修人:",-1),f={class:"text-truncate font-weight-light"},h=(0,a._)("p",{class:"font-weight-medium text"},"报修时间:",-1),w={class:"text-truncate font-weight-light"},g=(0,a._)("p",{class:"font-weight-medium text"},"响应人:",-1),_={class:"text-truncate font-weight-light"},v=(0,a._)("p",{class:"font-weight-medium text"},"响应时间:",-1),x={class:"text-truncate font-weight-light"},y=(0,a._)("p",{class:"font-weight-medium text"},"维修人:",-1),W={class:"text-truncate font-weight-light"},b=(0,a._)("p",{class:"font-weight-medium text"},"维修时间:",-1),k={class:"text-truncate font-weight-light"},C=(0,a._)("span",{class:"font-weight-medium"},"维修经验填写",-1),z=(0,a._)("div",{style:{height:"60px"}},null,-1);function R(e,t,l,R,V,S){const F=(0,a.up)("AppBarPage"),T=(0,a.up)("v-icon"),B=(0,a.up)("v-col"),D=(0,a.up)("v-row"),U=(0,a.up)("v-sheet"),q=(0,a.up)("van-field"),Z=(0,a.up)("v-btn");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(F),(0,a.Wm)(U,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{icon:"mdi-bullhorn",size:"16",color:"primary"}),o])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[s])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",n,(0,i.zw)(e.bufferRow.faultTypeCn),1)])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",r,(0,i.zw)(e.bufferRow.faultStationCn),1)])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",{class:"text-truncate font-weight-light",onClick:t[0]||(t[0]=t=>S.GlobalTooltipFunc(e.bufferRow.problemDesc))},(0,i.zw)(e.bufferRow.problemDesc),1)])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",p,(0,i.zw)(S.FormatDictionary("equipment_repair_type",e.bufferRow.reportType)["lable"]),1)])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[d])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",f,(0,i.zw)(e.bufferRow.reportBy),1)])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",w,(0,i.zw)(e.bufferRow.reportTime),1)])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[g])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",_,(0,i.zw)(e.bufferRow.responseBy),1)])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[v])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",x,(0,i.zw)(e.bufferRow.responseTime),1)])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",W,(0,i.zw)(e.bufferRow.productRepairBy),1)])),_:1})])),_:1}),(0,a.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"4"},{default:(0,a.w5)((()=>[b])),_:1}),(0,a.Wm)(B,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",k,(0,i.zw)(e.bufferRow.productRepairTime),1)])),_:1})])),_:1})])),_:1}),(0,a.Wm)(U,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{icon:"mdi-pencil-outline",size:"16",color:"primary"}),C])),_:1}),(0,a.Wm)(B,{cols:"6"})])),_:1}),(0,a.Wm)(q,{modelValue:e.value1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value1=t),autocomplete:"off",label:"根本问题",placeholder:"请输入",required:""},null,8,["modelValue"]),(0,a.Wm)(q,{modelValue:e.value2,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value2=t),autocomplete:"off",label:"解决措施",placeholder:"请输入",required:""},null,8,["modelValue"]),(0,a.Wm)(q,{modelValue:e.value3,"onUpdate:modelValue":t[3]||(t[3]=t=>e.value3=t),autocomplete:"off",label:"改进建议",placeholder:"请输入",required:""},null,8,["modelValue"]),(0,a.Wm)(q,{modelValue:e.value4,"onUpdate:modelValue":t[4]||(t[4]=t=>e.value4=t),autocomplete:"off",label:"维修用时",type:"number",placeholder:"请输入"},null,8,["modelValue"]),(0,a.Wm)(q,{modelValue:e.value5,"onUpdate:modelValue":t[5]||(t[5]=t=>e.value5=t),autocomplete:"off",label:"维修内容",placeholder:"请输入"},null,8,["modelValue"]),(0,a.Wm)(q,{modelValue:e.value6,"onUpdate:modelValue":t[6]||(t[6]=t=>e.value6=t),autocomplete:"off",label:"工具",placeholder:"请输入"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(Z,{elevation:"2",block:"",onClick:S.onSubmit},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确认 ")])),_:1},8,["onClick"]),z])}var V=l(21801),S=(l(73210),l(57658),l(76496)),F=l(88575),T=l(37184);const B=async e=>await(0,T.i)({url:"/iiot/equipmentRepairHistory",method:"get",url_RESTful:e.url_RESTful}),D=async e=>await(0,T.i)({url:"/iiot/equipmentRepairHistory",method:"put",payload:e.payload});var U=l(20868),q={components:{AppBarPage:S.Z,TableComponents:F.Z},data:()=>({bufferRow:{},value1:"",value2:"",value3:"",value4:"",value5:"",value6:""}),created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=l[e]||[],i=a.filter((e=>t==e.value))[0]||{};return i},GlobalTooltipFunc(e=""){(0,U.CF)({message:e,overlay:!0,closeOnClickOverlay:!0,duration:0})},async initFunc(){const{ttAdRepairId:e}=this.$route.query,{data:t={}}=await B({url_RESTful:`/${e}`});this.bufferRow=t,this.value1=t.rootWarin,this.value2=t.solvingMeasures,this.value3=t.suggestionsImprovement,this.value4=t.repairTime,this.value5=t.repairContent,this.value6=t.tool},async onSubmit(){const{value1:e,value2:t,value3:l,bufferRow:a}=this;if(!e.trim())return void(0,U.LJ)("根本问题必填!");if(!t.trim())return void(0,U.LJ)("解决措施必填!");if(!l.trim())return void(0,U.LJ)("改进建议必填!");const i=(0,V.Z)((0,V.Z)({},a),{},{rootWarin:e,solvingMeasures:t,suggestionsImprovement:l,repairTime:this.value4,repairContent:this.value5,tool:this.value6}),{code:o}=await D({payload:i});200==o&&((0,U.XA)("提交成功！"),this.$router.push({path:"/equipmentMessage",query:{tabs:2}}))},uploadFunc(){(0,U.XA)("正在建设中！")}}},Z=l(40089);const $=(0,Z.Z)(q,[["render",R]]);var A=$}}]);
//# sourceMappingURL=chunk.6001.1689576434327.js.map