"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[1031],{14614:function(t,e,i){i.d(e,{m:function(){return s}});var a=i(37184);const s=async t=>await(0,a.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:t.payload})},88575:function(t,e,i){i.d(e,{Z:function(){return v}});var a=i(73396),s=i(87139);const l={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},n=(0,a._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},c=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),r=(0,a._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},p=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),m=(0,a._)("span",null,"总",-1),d={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,a._)("span",null,"条",-1),g={style:{position:"relative",top:"1px","margin-left":"0px"}},f={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(t,e,i,w,k,_){const x=(0,a.up)("v-icon"),y=(0,a.up)("v-btn"),W=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[t.paging&&i.pagingShow?((0,a.wg)(),(0,a.j4)(W,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:_.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:_.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",l,[n,(0,a._)("span",o,(0,s.zw)(t.current),1),c,r,(0,a._)("span",u,(0,s.zw)(t.page),1),p,m,(0,a._)("span",d,(0,s.zw)(t.totalNum),1),h]),(0,a._)("span",g,[i.showSearchBtn?((0,a.wg)(),(0,a.j4)(y,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:_.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(y,{onClick:_.refreshClick,style:(0,s.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),t.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(t.items,((e,i)=>(0,a.WI)(t.$slots,"tableBody",{key:i,items:e,_index:i}))),128)):((0,a.wg)(),(0,a.iD)("p",f,[(0,a.Wm)(x,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var k=i(21801),_=i(37184);var x=i(20868),y={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:t,url:e}=this;t&&e&&this.initFunc()},methods:{previousHandle(){const{current:t}=this;1!=t?(this.current=t-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,x.LJ)("第一页！")},nextHandle(){const{current:t,page:e}=this;t>=e?(0,x.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(t=1,e){const{url:i,params:a={},children:s,method:l,formatData:n}=this;if(s)return this.items=s,void(this.paging=!1);const o=(0,k.Z)((0,k.Z)({pageNum:t,pageSize:10},a),e),{code:c,total:r=0,msg:u="",data:p,rows:m}=await(0,_.i)({method:l,url:i,payload:"post"==l?o:{},url_params:"get"==l?o:{}});200==c&&(this.totalNum=r,this.current=t,this.page=Math.ceil(r/o.pageSize),this.items=n?n(p||m||[]):p||m||[])},refreshClick(){const{refreshFunc:t}=this;!t&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((t=>Object.assign(t,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},W=i(40089);const b=(0,W.Z)(y,[["render",w]]);var v=b},91031:function(t,e,i){i.r(e),i.d(e,{default:function(){return T}});var a=i(73396),s=i(87139);const l={class:"font-weight-medium text"},n={class:"font-weight-medium font-weight-light",style:{color:"#00E5FF"}},o={class:"v-window-item-table"},c=(0,a._)("p",{class:"text-truncate font-weight-light"},"点检项目",-1),r={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},u=(0,a._)("p",{class:"font-weight-medium text"},"判断方法:",-1),p={class:"text-truncate font-weight-light"},m=(0,a._)("p",{class:"font-weight-medium text"},"处理方式:",-1),d={class:"text-truncate font-weight-light"},h=(0,a._)("p",{class:"font-weight-medium text"},"判断标准:",-1),g=["onClick"],f=(0,a._)("p",{class:"font-weight-medium text"},"目的:",-1),w={class:"text-truncate font-weight-light"},k=(0,a._)("p",{class:"font-weight-medium text",style:{position:"relative",top:"7px"}},"结果:",-1),_=(0,a._)("div",{style:{height:"52px"}},null,-1);function x(t,e,i,x,y,W){const b=(0,a.up)("AppBarPage"),v=(0,a.up)("v-icon"),C=(0,a.up)("v-col"),R=(0,a.up)("v-row"),F=(0,a.up)("v-badge"),T=(0,a.up)("v-switch"),z=(0,a.up)("van-field"),q=(0,a.up)("v-card"),$=(0,a.up)("TableComponents"),N=(0,a.up)("v-btn");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(b),(0,a.Wm)(R,{"no-gutters":"",class:"text",style:{margin:"8px 4px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",l,[(0,a.Wm)(v,{icon:"mdi-message-text",size:"16",color:"primary"}),(0,a.Uk)(" 点检设备信息:")])])),_:1}),(0,a.Wm)(C,{cols:"12",class:"text-left"},{default:(0,a.w5)((()=>[(0,a._)("p",n,(0,s.zw)(t.bufferRow.equipmentName),1)])),_:1})])),_:1}),(0,a._)("div",o,[(0,a.Wm)($,{ref:"table1",children:t.tableData,pagingShow:!1},{tableBody:(0,a.w5)((t=>[(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(R,{"no-gutters":"",class:"table-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"1"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{content:t._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[c])),_:1})])),_:2},1024),(0,a.Wm)(R,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",r,(0,s.zw)(t.items.checkName),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(R,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",p,(0,s.zw)(t.items.judgmentMethod),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(R,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",d,(0,s.zw)(t.items.processingMethod),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(R,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",{class:"text-truncate font-weight-light",onClick:e=>W.GlobalTooltipFunc(t.items.standardJudgment)},(0,s.zw)(t.items.standardJudgment),9,g)])),_:2},1024)])),_:2},1024),(0,a.Wm)(R,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",w,(0,s.zw)(t.items.objective),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(R,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"3"},{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)(C,{cols:"9",style:{"text-align":"right"}},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{modelValue:t.items._switch,"onUpdate:modelValue":e=>t.items._switch=e,label:t.items._switch?"合格":"不合格",color:"primary",density:"comfortable",style:{top:"-8px",left:"18px",position:"relative",height:"48px",display:"block",width:"104px"}},null,8,["modelValue","onUpdate:modelValue","label"])])),_:2},1024)])),_:2},1024),t.items._switch?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(z,{key:0,modelValue:t.items.checkResultContent,"onUpdate:modelValue":e=>t.items.checkResultContent=e,placeholder:"请输入",autocomplete:"off",label:"不合格描述"},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1024)])),_:1},8,["children"])]),(0,a.Wm)(R,{"no-gutters":"",class:"text",style:{padding:"0px 4px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{color:"#00E5FF",onClick:W.onReceiveFunc},{default:(0,a.w5)((()=>[(0,a.Uk)(" 备件领用 ")])),_:1},8,["onClick"])])),_:1}),(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{color:"warning",onClick:W.onRepairs},{default:(0,a.w5)((()=>[(0,a.Uk)(" 设备报修 ")])),_:1},8,["onClick"])])),_:1}),(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{onClick:W.submitClick,color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("提交")])),_:1},8,["onClick"])])),_:1})])),_:1}),_])}i(57658),i(38862);var y=i(76496),W=i(88575),b=i(37184),v=(i(14614),i(20868)),C={components:{AppBarPage:y.Z,TableComponents:W.Z},data:()=>({bufferRow:{},tableData:[]}),created(){this.$root.$emitter.on("update_examineHistory_page_index",(()=>{this.initFunc()}))},methods:{GlobalTooltipFunc(t=""){(0,v.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(t="",e=""){const i=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=i[t]||[],s=a.filter((t=>e==t.value))[0]||{};return s},async initFunc(){const{ttCheckTaskId:t,row:e="{}"}=this.$route.query;this.bufferRow=JSON.parse(e);const{code:i,data:a=[]}=await(0,b.i)({url:"/iiot/checkTask/checkTask",method:"post",payload:{ttCheckTaskId:t}});200==i&&(this.tableData=a.map((t=>Object.assign(t,{_switch:"O"==t.checkResult}))),this.$nextTick((()=>{this.$refs.table1.initFunc()})))},async submitClick(t){const e=this.tableData.map((t=>Object.assign(t,{checkResult:t._switch?"O":"N"}))),{code:i,data:a={}}=await(0,b.i)({url:"/iiot/checkTaskRecord/submitCheckTaskRecord",method:"post",payload:{checkTaskRecords:e.map((t=>Object.assign({checkResult:t.checkResult,inspectValue:t.inspectValue,judgmentResult:t.judgmentResult,ttCheckTaskId:t.ttCheckTaskId,ttCheckTaskRecordId:t.ttCheckTaskRecordId,checkResultContent:t.checkResultContent})))}});200==i&&((0,v.XA)("提交成功！"),this.$router.push({path:"/examineHistory/index",query:{}}),setTimeout((()=>{this.$root.$emitter.emit("update_examineHistory_page")}),1500))},onReceiveFunc(){const{bufferRow:t}=this;this.$router.push({path:"/replacement/index",query:{activeType:"check",row:JSON.stringify(t)}})},onRepairs(){const{bufferRow:t}=this;this.$router.push({path:"/equipment/repairs",query:{tmBasEquipmentId:t.tmBasEquipmentId,equipmentNo:t.equipmentNo,equipmentName:t.equipmentName}})}}},R=i(40089);const F=(0,R.Z)(C,[["render",x]]);var T=F}}]);
//# sourceMappingURL=chunk.1031.1689577235749.js.map