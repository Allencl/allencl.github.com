"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[2087],{88575:function(t,e,a){a.d(e,{Z:function(){return W}});var i=a(73396),s=a(87139);const l={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},n=(0,i._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},c=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),r=(0,i._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},d=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),m=(0,i._)("span",null,"总",-1),p={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,i._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},w={key:2,class:"text-center",style:{"padding-top":"12px"}};function g(t,e,a,g,_,k){const y=(0,i.up)("v-icon"),b=(0,i.up)("v-btn"),x=(0,i.up)("v-card");return(0,i.wg)(),(0,i.iD)("span",null,[t.paging&&a.pagingShow?((0,i.wg)(),(0,i.j4)(x,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:k.previousHandle},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{size:"28"},{default:(0,i.w5)((()=>[(0,i.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,i.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:k.nextHandle},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{size:"28"},{default:(0,i.w5)((()=>[(0,i.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,i._)("span",l,[n,(0,i._)("span",o,(0,s.zw)(t.current),1),c,r,(0,i._)("span",u,(0,s.zw)(t.page),1),d,m,(0,i._)("span",p,(0,s.zw)(t.totalNum),1),h]),(0,i._)("span",f,[a.showSearchBtn?((0,i.wg)(),(0,i.j4)(b,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:k.searchClick,variant:"plain",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{size:"24",icon:"mdi-magnify"}),(0,i.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(b,{onClick:k.refreshClick,style:(0,s.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,i.kq)("",!0),t.items.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(t.items,((e,a)=>(0,i.WI)(t.$slots,"tableBody",{key:a,items:e,_index:a}))),128)):((0,i.wg)(),(0,i.iD)("p",w,[(0,i.Wm)(y,{icon:"mdi-emoticon-sad-outline"}),(0,i.Uk)(" 无数据！ ")]))])}var _=a(21801),k=a(37184);var y=a(20868),b={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:t,url:e}=this;t&&e&&this.initFunc()},methods:{previousHandle(){const{current:t}=this;1!=t?(this.current=t-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,y.LJ)("第一页！")},nextHandle(){const{current:t,page:e}=this;t>=e?(0,y.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(t=1,e){const{url:a,params:i={},children:s,method:l,formatData:n}=this;if(s)return this.items=s,void(this.paging=!1);const o=(0,_.Z)((0,_.Z)({pageNum:t,pageSize:10},i),e),{code:c,total:r=0,msg:u="",data:d,rows:m}=await(0,k.i)({method:l,url:a,payload:"post"==l?o:{},url_params:"get"==l?o:{}});200==c&&(this.totalNum=r,this.current=t,this.page=Math.ceil(r/o.pageSize),this.items=n?n(d||m||[]):d||m||[])},refreshClick(){const{refreshFunc:t}=this;!t&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((t=>Object.assign(t,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},x=a(40089);const v=(0,x.Z)(b,[["render",g]]);var W=v},17247:function(t,e,a){a.r(e),a.d(e,{default:function(){return R}});var i=a(73396),s=a(87139);const l=(0,i._)("p",{class:"font-weight-medium text"},"检验产品:",-1),n={class:"text-truncate font-weight-light"},o=(0,i._)("p",{class:"font-weight-medium text"},"配送单号:",-1),c={class:"text-truncate font-weight-light"},r=(0,i._)("p",{class:"font-weight-medium text"},"供应商信息:",-1),u={class:"text-truncate font-weight-light"},d=(0,i._)("p",{class:"font-weight-medium text"},"检验数量:",-1),m={class:"text-truncate font-weight-light"},p=(0,i._)("p",{class:"font-weight-medium text"},"状态:",-1),h={class:"text-truncate font-weight-light",style:{color:"#00E5FF"}},f=(0,i._)("p",{class:"font-weight-medium text"},"任务流水号:",-1),w={class:"text-truncate font-weight-light"},g={class:"text-truncate font-weight-medium"},_=(0,i._)("p",{class:"font-weight-medium text"},"出厂日期: ",-1),k={class:"text-truncate font-weight-light"},y=(0,i._)("p",{class:"font-weight-medium text"},"检验类型: ",-1),b={class:"text-truncate font-weight-light"},x=(0,i._)("p",{class:"font-weight-medium text"},"报检时间:",-1),v={class:"text-truncate font-weight-light"},W=(0,i._)("p",{class:"font-weight-medium text input-lable",style:{"margin-top":"14px"}},"检验数量: ",-1),C=(0,i._)("div",{style:{height:"60px"}},null,-1);function T(t,e,a,T,B,Q){const N=(0,i.up)("AppBarPage"),z=(0,i.up)("ScanBarComponents"),S=(0,i.up)("v-col"),D=(0,i.up)("v-row"),L=(0,i.up)("v-sheet"),F=(0,i.up)("v-badge"),$=(0,i.up)("v-btn"),I=(0,i.up)("van-field"),R=(0,i.up)("v-card"),q=(0,i.up)("TableComponents");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(N),t.isDetail?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(z,{key:0,ref:"scanBar",placeholder:"扫描或输入原材料信息",onSearchClick:Q.barSearchClick},null,8,["onSearchClick"])),(0,i.Wm)(L,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,i.w5)((()=>[(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"4"},{default:(0,i.w5)((()=>[l])),_:1}),(0,i.Wm)(S,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",n,(0,s.zw)(t.bufferRow.partNo)+"-"+(0,s.zw)(t.bufferRow.partName),1)])),_:1})])),_:1}),(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"4"},{default:(0,i.w5)((()=>[o])),_:1}),(0,i.Wm)(S,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",c,(0,s.zw)(t.bufferRow.receiptNo),1)])),_:1})])),_:1}),(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"4"},{default:(0,i.w5)((()=>[r])),_:1}),(0,i.Wm)(S,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",u,(0,s.zw)(t.bufferRow.supplierName),1)])),_:1})])),_:1}),(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"4"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(S,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",m,(0,s.zw)(t.bufferRow.taskQty),1)])),_:1})])),_:1}),(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"4"},{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(S,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",h,(0,s.zw)(Q.FormatDictionary("qm_task_status",t.bufferRow.taskStatus)["lable"]),1)])),_:1})])),_:1}),(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"4"},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(S,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",w,(0,s.zw)(t.bufferRow.taskNo),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(L,{class:"v-window-item-table"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{ref:"table1",children:t.tableList,pagingShow:!1},{tableBody:(0,i.w5)((e=>[(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[(0,i.Wm)(D,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(F,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,i.Wm)(S,{cols:"9"},{default:(0,i.w5)((()=>[(0,i._)("p",g,"批次号: "+(0,s.zw)(e.items.batchNo),1)])),_:2},1024),(0,i.Wm)(S,{cols:"2",class:"text-right"},{default:(0,i.w5)((()=>[t.isDetail?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)($,{key:0,onClick:t=>Q.deleteHandle(e),style:{position:"relative",top:"-4px"},color:"red",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("删除")])),_:2},1032,["onClick"]))])),_:2},1024)])),_:2},1024),(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"3"},{default:(0,i.w5)((()=>[_])),_:1}),(0,i.Wm)(S,{cols:"9"},{default:(0,i.w5)((()=>[(0,i._)("p",k,(0,s.zw)(e.items.remark01),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"3"},{default:(0,i.w5)((()=>[y])),_:1}),(0,i.Wm)(S,{cols:"5"},{default:(0,i.w5)((()=>[(0,i._)("p",b,(0,s.zw)(Q.FormatDictionary("QM_BY_TYPE",e.items.batchType)["lable"]),1)])),_:2},1024),(0,i.Wm)(S,{cols:"4",class:"text-right"},{default:(0,i.w5)((()=>[(0,i._)("p",{class:"text-truncate font-weight-light",style:(0,s.j5)("10"==e.items.inspectResult?"color:#4CAF50":"color:#FF5722")},"状态: "+(0,s.zw)("10"==e.items.inspectResult?"合格":"不合格"),5)])),_:2},1024)])),_:2},1024),(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"3"},{default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(S,{cols:"9"},{default:(0,i.w5)((()=>[(0,i._)("p",v,(0,s.zw)(e.items.createDate),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(D,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{cols:"3"},{default:(0,i.w5)((()=>[W])),_:1}),(0,i.Wm)(S,{cols:"3",style:{"padding-left":"4px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{class:"custem-input-index1",modelValue:e.items.batchQty,"onUpdate:modelValue":t=>e.items.batchQty=t,style:{"padding-left":"0px"},type:"number",size:"large",autocomplete:"off",disabled:!(!e.items.ttQmTaskBatchId&&t.isDetail),placeholder:"输入检验数量"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024),(0,i.Wm)(S,{cols:"3"},{default:(0,i.w5)((()=>[e.items.ttQmTaskBatchId&&t.isDetail?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)($,{key:0,depressed:"",color:"primary",style:{"margin-top":"8px"},onClick:t=>Q.onSubmit(e)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 提交 ")])),_:2},1032,["onClick"]))])),_:2},1024),(0,i.Wm)(S,{cols:"3"},{default:(0,i.w5)((()=>[t.isDetail?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)($,{key:0,depressed:"",color:"warning",style:{"margin-top":"8px"},onClick:t=>Q.onCheckout(e)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 检验 ")])),_:2},1032,["onClick"]))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["children"])])),_:1}),C])}var B=a(21801),Q=(a(57658),a(26699),a(32023),a(76496)),N=a(88575),z=a(73378),S=a(37184),D=a(20868),L=a(69650),F={components:{AppBarPage:Q.Z,ScanBarComponents:z.Z,TableComponents:N.Z},data:()=>({isDetail:!1,ttQmTaskId:"",bufferRow:{},code:"",tableList:[]}),created(){this.initFunc()},methods:{FormatDictionary(t="",e=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),i=a[t]||[],s=i.filter((t=>e==t.value))[0]||{};return s},async initFunc(){const{ttQmTaskId:t,row:e="{}",_pageActive:a}=this.$route.query;this.isDetail="detail"==a,this.ttQmTaskId=t,this.bufferRow=JSON.parse(e),this.$nextTick((async()=>{const{code:e,data:a=[]}=await(0,S.i)({url:`/iiot/qmTaskBatch/list?pageNum=1&pageSize=100&ttQmTaskId=${t}`,method:"get"});200==e&&(this.tableList=a,this.$nextTick((()=>{this.$refs.table1.initFunc()})))}))},async deleteHandle(t){const{items:e}=t;(0,L.vC)({title:"删除",message:"删除后数据不可恢复，确认删除！",theme:"round-button",closeOnClickOverlay:!0}).then((async()=>{if(!e.ttQmTaskBatchId)return this.tableList=this.tableList.filter((t=>t._repetition!=e._repetition)),void this.$nextTick((()=>{this.$refs.table1.initFunc()}));const{code:t,data:a={}}=await(0,S.i)({url:`/iiot/qmTaskBatch/${e.ttQmTaskBatchId}`,method:"DELETE"});200==t&&((0,D.XA)("删除成功！"),this.tableList=this.tableList.filter((t=>t.ttQmTaskBatchId!=e.ttQmTaskBatchId)),this.$nextTick((()=>{this.$refs.table1.initFunc()})))}))},async onSubmit(t){const{bufferRow:e}=this,{items:a}=t,i={ttQmTaskId:e.ttQmTaskId,batchType:a.batchType,batchNo:a.batchNo,batchQty:Number(a.batchQty),lotNo:""},{code:s,data:l={}}=await(0,S.i)({url:"/iiot/qmTaskBatch",method:"post",payload:i});200==s&&((0,D.XA)("提交成功！"),this.tableList.map((t=>t._repetition==a._repetition?Object.assign(t,{ttQmTaskBatchId:l.ttQmTaskBatchId}):t)),this.$nextTick((()=>{this.$refs.table1.initFunc()})))},async onCheckout(t){const{bufferRow:e}=this,{items:a}=t;if(!a.ttQmTaskBatchId)return void(0,D.LJ)("未提交,不能检验！");if(Number(e.taskQty)<=0)return void(0,D.LJ)("可检验数量，必须大于0！");if(Number(a.batchQty)<=0)return void(0,D.LJ)("检验数量，必须大于0！");const{code:i,data:s={}}=await(0,S.i)({url:`/iiot/qmTaskBatch/listCheckResultListPda/${a.ttQmTaskBatchId}`,method:"get"});200==i&&this.$router.push({path:"/qualityMaterial/checkout",query:{ttQmTaskBatchId:a.ttQmTaskBatchId,_taskQty:e.taskQty}})},barSearchClick(t){this.addHandle(t)},async addHandle(t=""){const{bufferRow:e}=this,a=this.tableList.map((t=>t.batchNo)),{code:i,data:s={}}=await(0,S.i)({url:`/iiot/nodeLevel/analysisCode?code=${t}`,method:"get"});if(200==i){if(e.partNo!=s.partNo)return void(0,D.LJ)("与当前产品不一致！");const t=s.partNo+s.sn;if(this.tableList.filter((e=>e._repetition==t)).length)return void(0,D.LJ)("重复添加！");if(a.includes(s.sn))return void(0,D.LJ)("重复添加！");(0,D.XA)("扫描成功！"),this.tableList=this.tableList.concat([(0,B.Z)((0,B.Z)({},s),{},{batchNo:s.sn,remark01:s.pdNo,batchType:"02",createDate:"",batchQty:0,_repetition:t})]),this.$nextTick((()=>{this.$refs.table1.initFunc()}))}}}},$=a(40089);const I=(0,$.Z)(F,[["render",T]]);var R=I},69650:function(t,e,a){a.d(e,{vC:function(){return d}});var i=a(73396),s=a(12220),l=a(57548),n=a(21178);let o;const c={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let r=(0,s.l7)({},c);function u(){const t={setup(){const{state:t,toggle:e}=(0,l.o)();return()=>(0,i.Wm)(n.Z,(0,i.dG)(t,{"onUpdate:show":e}),null)}};({instance:o}=(0,l.H)(t))}function d(t){return s._f?new Promise(((e,a)=>{o||u(),o.open((0,s.l7)({},r,t,{callback:t=>{("confirm"===t?e:a)(t)}}))})):Promise.resolve()}}}]);
//# sourceMappingURL=chunk.2087.1689576161502.js.map