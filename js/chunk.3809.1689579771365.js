"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[3809],{14614:function(t,e,i){i.d(e,{m:function(){return s}});var a=i(37184);const s=async t=>await(0,a.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:t.payload})},88575:function(t,e,i){i.d(e,{Z:function(){return v}});var a=i(73396),s=i(87139);const l={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},n=(0,a._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},c=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),r=(0,a._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},d=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,a._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,a._)("span",null,"条",-1),g={style:{position:"relative",top:"1px","margin-left":"0px"}},f={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(t,e,i,w,k,_){const x=(0,a.up)("v-icon"),y=(0,a.up)("v-btn"),C=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[t.paging&&i.pagingShow?((0,a.wg)(),(0,a.j4)(C,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:_.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:_.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",l,[n,(0,a._)("span",o,(0,s.zw)(t.current),1),c,r,(0,a._)("span",u,(0,s.zw)(t.page),1),d,p,(0,a._)("span",m,(0,s.zw)(t.totalNum),1),h]),(0,a._)("span",g,[i.showSearchBtn?((0,a.wg)(),(0,a.j4)(y,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:_.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(y,{onClick:_.refreshClick,style:(0,s.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),t.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(t.items,((e,i)=>(0,a.WI)(t.$slots,"tableBody",{key:i,items:e,_index:i}))),128)):((0,a.wg)(),(0,a.iD)("p",f,[(0,a.Wm)(x,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var k=i(21801),_=i(37184);var x=i(20868),y={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:t,url:e}=this;t&&e&&this.initFunc()},methods:{previousHandle(){const{current:t}=this;1!=t?(this.current=t-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,x.LJ)("第一页！")},nextHandle(){const{current:t,page:e}=this;t>=e?(0,x.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(t=1,e){const{url:i,params:a={},children:s,method:l,formatData:n}=this;if(s)return this.items=s,void(this.paging=!1);const o=(0,k.Z)((0,k.Z)({pageNum:t,pageSize:10},a),e),{code:c,total:r=0,msg:u="",data:d,rows:p}=await(0,_.i)({method:l,url:i,payload:"post"==l?o:{},url_params:"get"==l?o:{}});200==c&&(this.totalNum=r,this.current=t,this.page=Math.ceil(r/o.pageSize),this.items=n?n(d||p||[]):d||p||[])},refreshClick(){const{refreshFunc:t}=this;!t&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((t=>Object.assign(t,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},C=i(40089);const W=(0,C.Z)(y,[["render",w]]);var v=W},93809:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var a=i(73396),s=i(87139);const l={class:"v-window-item-table"},n=(0,a._)("p",{class:"text-truncate font-weight-light"},"点检项目",-1),o={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},c=(0,a._)("p",{class:"font-weight-medium text"},"点检方法:",-1),r={class:"text-truncate font-weight-light"},u=(0,a._)("p",{class:"font-weight-medium text"},"处理方法:",-1),d={class:"text-truncate font-weight-light"},p=(0,a._)("p",{class:"font-weight-medium text"},"判断标准:",-1),m=["onClick"],h=(0,a._)("p",{class:"font-weight-medium text"},"目的:",-1),g={class:"text-truncate font-weight-light"},f=(0,a._)("p",{class:"font-weight-medium text"},"结果:",-1);function w(t,e,i,w,k,_){const x=(0,a.up)("AppBarPage"),y=(0,a.up)("v-badge"),C=(0,a.up)("v-col"),W=(0,a.up)("v-row"),v=(0,a.up)("v-card"),b=(0,a.up)("TableComponents"),F=(0,a.up)("v-btn");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(x),(0,a._)("div",l,[(0,a.Wm)(b,{ref:"table1",children:t.tableChildren,pagingShow:!1},{tableBody:(0,a.w5)((t=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{"no-gutters":"",class:"table-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"1"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{content:t._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[n])),_:1})])),_:2},1024),(0,a.Wm)(W,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",o,(0,s.zw)(t.items.checkNo)+"-"+(0,s.zw)(t.items.checkName),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(W,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",r,(0,s.zw)(t.items.judgmentMethod),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(W,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",d,(0,s.zw)(t.items.processingMethod),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(W,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",{class:"text-truncate font-weight-light",onClick:e=>_.GlobalTooltipFunc(t.items.standardJudgment)},(0,s.zw)(t.items.standardJudgment),9,m)])),_:2},1024)])),_:2},1024),(0,a.Wm)(W,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"4"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(C,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",g,(0,s.zw)(t.items.objective),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(W,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"6",class:"text-right"}),(0,a.Wm)(C,{cols:"2",class:"text-right"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(C,{cols:"3"},{default:(0,a.w5)((()=>[(0,a._)("p",{class:"text-truncate font-weight-light",style:(0,s.j5)("N"==t.items.checkResult?"color:#FF5722":"color:#4CAF50")},(0,s.zw)("N"==t.items.checkResult?"不合格":"合格"),5)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["children"])]),(0,a.Wm)(W,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{cols:"5",class:"text-left"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{color:"#00E5FF",onClick:_.onReceiveFunc},{default:(0,a.w5)((()=>[(0,a.Uk)(" 备件领用 ")])),_:1},8,["onClick"])])),_:1}),(0,a.Wm)(C,{cols:"1",class:"text-left"}),(0,a.Wm)(C,{cols:"3",class:"text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{onClick:e[0]||(e[0]=t=>_.statusClick(!0)),color:"primary mt-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("正常")])),_:1})])),_:1}),(0,a.Wm)(C,{cols:"3",class:"text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{onClick:e[1]||(e[1]=t=>_.statusClick(!1)),color:"error mt-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("异常")])),_:1})])),_:1})])),_:1})])}i(57658),i(38862);var k=i(76496),_=i(88575),x=i(37184),y=(i(14614),i(20868)),C={components:{AppBarPage:k.Z,TableComponents:_.Z},data:()=>({tableChildren:[]}),created(){this.initFunc()},methods:{GlobalTooltipFunc(t=""){(0,y.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(t="",e=""){const i=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=i[t]||[],s=a.filter((t=>e==t.value))[0]||{};return s},async initFunc(){const{ttCheckTaskId:t}=this.$route.query,{code:e,data:i=[]}=await(0,x.i)({url:"/iiot/checkTask/checkTask",method:"post",payload:{ttCheckTaskId:t}});200==e&&(this.tableChildren=i,this.$nextTick((()=>{this.$refs.table1.initFunc()})))},onReceiveFunc(){const{bufferRow:t,tableChildren:e=[]}=this;e.length?this.$router.push({path:"/replacement/index",query:{activeType:"checkCreate",row:JSON.stringify(e[0])}}):(0,y.LJ)("无数据！")},async statusClick(t){const{ttCheckTaskId:e}=this.$route.query,i={ttCheckTaskId:e,confirmResult:t?"O":"N"},{code:a,data:s={}}=await(0,x.i)({url:"/iiot/checkTaskRecord/commitCheckTaskRecord",method:"post",payload:i});200==a&&((0,y.XA)("提交成功！"),this.$router.push({path:"/examineConfirm/index",query:{}}))}}},W=i(40089);const v=(0,W.Z)(C,[["render",w]]);var b=v}}]);
//# sourceMappingURL=chunk.3809.1689579771365.js.map