"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[3466],{88575:function(t,e,s){s.d(e,{Z:function(){return v}});var l=s(73396),a=s(87139);const i={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},o=(0,l._)("span",null,"第",-1),c={style:{"padding-left":"1px","padding-right":"1px"}},n=(0,l._)("span",{style:{"margin-right":"3px"}},"页",-1),m=(0,l._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},f=(0,l._)("span",{style:{"margin-right":"3px"}},"页",-1),w=(0,l._)("span",null,"总",-1),d={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,l._)("span",null,"条",-1),_={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function p(t,e,s,p,h,W){const x=(0,l.up)("v-icon"),y=(0,l.up)("v-btn"),b=(0,l.up)("v-card");return(0,l.wg)(),(0,l.iD)("span",null,[t.paging&&s.pagingShow?((0,l.wg)(),(0,l.j4)(b,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:W.previousHandle},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{size:"28"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,l.Wm)(y,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:W.nextHandle},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{size:"28"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,l._)("span",i,[o,(0,l._)("span",c,(0,a.zw)(t.current),1),n,m,(0,l._)("span",u,(0,a.zw)(t.page),1),f,w,(0,l._)("span",d,(0,a.zw)(t.totalNum),1),r]),(0,l._)("span",_,[s.showSearchBtn?((0,l.wg)(),(0,l.j4)(y,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:W.searchClick,variant:"plain",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{size:"24",icon:"mdi-magnify"}),(0,l.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(y,{onClick:W.refreshClick,style:(0,a.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,l.kq)("",!0),t.items.length?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:1},(0,l.Ko)(t.items,((e,s)=>(0,l.WI)(t.$slots,"tableBody",{key:s,items:e,_index:s}))),128)):((0,l.wg)(),(0,l.iD)("p",g,[(0,l.Wm)(x,{icon:"mdi-emoticon-sad-outline"}),(0,l.Uk)(" 无数据！ ")]))])}var h=s(21801),W=s(37184);var x=s(20868),y={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:t,url:e}=this;t&&e&&this.initFunc()},methods:{previousHandle(){const{current:t}=this;1!=t?(this.current=t-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,x.LJ)("第一页！")},nextHandle(){const{current:t,page:e}=this;t>=e?(0,x.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(t=1,e){const{url:s,params:l={},children:a,method:i,formatData:o}=this;if(a)return this.items=a,void(this.paging=!1);const c=(0,h.Z)((0,h.Z)({pageNum:t,pageSize:10},l),e),{code:n,total:m=0,msg:u="",data:f,rows:w}=await(0,W.i)({method:i,url:s,payload:"post"==i?c:{},url_params:"get"==i?c:{}});200==n&&(this.totalNum=m,this.current=t,this.page=Math.ceil(m/c.pageSize),this.items=o?o(f||w||[]):f||w||[])},refreshClick(){const{refreshFunc:t}=this;!t&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((t=>Object.assign(t,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},b=s(40089);const z=(0,b.Z)(y,[["render",p]]);var v=z},78555:function(t,e,s){s.r(e),s.d(e,{default:function(){return te}});var l=s(73396),a=s(87139);const i=(0,l._)("span",{class:"font-weight-medium"},"送货单信息",-1),o=(0,l._)("div",{style:{height:"6px"}},null,-1),c=(0,l._)("p",{class:"font-weight-medium text"},"送货单类型:",-1),n={class:"font-weight-light text-left"},m=(0,l._)("p",{class:"font-weight-medium text"},"送货单号:",-1),u={class:"font-weight-light text-left"},f=(0,l._)("p",{class:"font-weight-medium text"},"srm单号:",-1),w={class:"font-weight-light text-left"},d=(0,l._)("p",{class:"font-weight-medium text"},"送货单状态:",-1),r={class:"font-weight-light text-left"},_=(0,l._)("p",{class:"font-weight-medium text"},"制表日期:",-1),g={class:"font-weight-light text-left"},p=(0,l._)("p",{class:"font-weight-medium text"},"要货日期:",-1),h={class:"font-weight-light text-left"},W=(0,l._)("p",{class:"font-weight-medium text"},"发货日期:",-1),x={class:"font-weight-light text-left"},y=(0,l._)("p",{class:"font-weight-medium text"},"供应商编码:",-1),b={class:"font-weight-light text-left"},z=(0,l._)("p",{class:"font-weight-medium text"},"供应商名称:",-1),v={class:"font-weight-light text-left"},k=(0,l._)("p",{class:"font-weight-medium text"},"联系电话:",-1),S={class:"font-weight-light text-left"},C=(0,l._)("p",{class:"font-weight-medium text"},"仓库编码:",-1),F={class:"font-weight-light text-left"},D=(0,l._)("p",{class:"font-weight-medium text"},"仓库名称:",-1),N={class:"font-weight-light text-left"},R=(0,l._)("p",{class:"font-weight-medium text"},"收货人账号:",-1),T={class:"font-weight-light text-left"},B=(0,l._)("p",{class:"font-weight-medium text"},"收货人名称:",-1),U={class:"font-weight-light text-left"},$=(0,l._)("p",{class:"font-weight-medium text"},"收货时间:",-1),Z={class:"font-weight-light text-left"},q=(0,l._)("p",{class:"font-weight-medium text"},"是否上报:",-1),j={class:"font-weight-light text-left"},A=(0,l._)("span",{class:"font-weight-medium"},"物料明细",-1),H={style:{padding:"6px 6px"}},L=(0,l._)("p",{class:"font-weight-medium text"},"物料编码:",-1),O={class:"font-weight-light"},J=(0,l._)("p",{class:"font-weight-medium text"},"物料名称:",-1),I={class:"font-weight-light"},P=(0,l._)("p",{class:"font-weight-medium text"},"采购订单号:",-1),Q={class:"font-weight-light"},E=(0,l._)("p",{class:"font-weight-medium text"},"数量:",-1),K={class:"font-weight-light"},G=(0,l._)("p",{class:"font-weight-medium text"},"物料批次:",-1),M={class:"font-weight-light"},X=(0,l._)("p",{class:"font-weight-medium text"},"生产日期:",-1),Y={class:"font-weight-light"},V=(0,l._)("p",{class:"font-weight-medium text"},"是否关键件:",-1),tt={class:"font-weight-light"},et=(0,l._)("p",{class:"font-weight-medium text"},"检验类型:",-1),st={class:"font-weight-light"},lt={key:0},at=(0,l._)("p",{class:"font-weight-medium text"},"工位编码:",-1),it={class:"font-weight-light"},ot=(0,l._)("p",{class:"font-weight-medium text"},"工位名称:",-1),ct={class:"font-weight-light"},nt=(0,l._)("p",{class:"font-weight-medium text"},"点位编码:",-1),mt={class:"font-weight-light"},ut=(0,l._)("p",{class:"font-weight-medium text"},"订单号:",-1),ft={class:"font-weight-light"},wt=(0,l._)("p",{class:"font-weight-medium text"},"机号:",-1),dt={class:"font-weight-light"},rt=(0,l._)("p",{class:"font-weight-medium text"},"交货单号:",-1),_t={class:"font-weight-light"},gt=(0,l._)("p",{class:"font-weight-medium text"},"交货单行号:",-1),pt={class:"font-weight-light"},ht=(0,l._)("span",{class:"font-weight-medium"},"异常明细",-1),Wt={style:{padding:"6px 6px"}},xt=(0,l._)("p",{class:"font-weight-medium text"},"物料编码:",-1),yt={class:"font-weight-light"},bt=(0,l._)("p",{class:"font-weight-medium text"},"物料名称:",-1),zt={class:"font-weight-light"},vt=(0,l._)("p",{class:"font-weight-medium text"},"数量:",-1),kt={class:"font-weight-light"},St=(0,l._)("p",{class:"font-weight-medium text"},"异常类型:",-1),Ct={class:"font-weight-light"},Ft=(0,l._)("p",{class:"font-weight-medium text"},"异常说明:",-1),Dt={class:"font-weight-light"},Nt=(0,l._)("p",{class:"font-weight-medium text"},"提报时间:",-1),Rt={class:"font-weight-light"},Tt=(0,l._)("p",{class:"font-weight-medium text"},"提报人:",-1),Bt={class:"font-weight-light"},Ut=(0,l._)("p",{class:"font-weight-medium text"},"处理类型:",-1),$t={class:"font-weight-light"},Zt=(0,l._)("p",{class:"font-weight-medium text"},"处理说明:",-1),qt={class:"font-weight-light"},jt=(0,l._)("p",{class:"font-weight-medium text"},"处理人:",-1),At={class:"font-weight-light"},Ht=(0,l._)("p",{class:"font-weight-medium text"},"处理时间:",-1),Lt={class:"font-weight-light"},Ot=(0,l._)("p",{class:"font-weight-medium text"},"数据状态:",-1),Jt={class:"font-weight-light"},It=(0,l._)("div",{style:{height:"62px"}},null,-1);function Pt(t,e,s,Pt,Qt,Et){const Kt=(0,l.up)("AppBarPage"),Gt=(0,l.up)("v-icon"),Mt=(0,l.up)("v-col"),Xt=(0,l.up)("v-row"),Yt=(0,l.up)("v-sheet"),Vt=(0,l.up)("v-badge"),te=(0,l.up)("v-card"),ee=(0,l.up)("TableComponents");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l.Wm)(Kt),(0,l.Wm)(Yt,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(Xt,{"no-gutters":"",class:"custem-card-title"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"7"},{default:(0,l.w5)((()=>[(0,l.Wm)(Gt,{icon:"mdi-rocket-launch",size:"16",color:"primary"}),i])),_:1}),(0,l.Wm)(Mt,{cols:"5"})])),_:1}),o,(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",n,(0,a.zw)(Et.FormatDictionary("ccgl_delivery_slip_type",t.bufferRow.deliverySlipType)["lable"]),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[m])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",u,(0,a.zw)(t.bufferRow.poNo),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[f])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",w,(0,a.zw)(t.bufferRow.srmNo),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[d])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",r,(0,a.zw)(Et.FormatDictionary("ccgl_delivery_slip_state",t.bufferRow.deliverySlipState)["lable"]),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[_])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",g,(0,a.zw)(t.bufferRow.creatDate),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[p])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",h,(0,a.zw)(t.bufferRow.needDate),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[W])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",x,(0,a.zw)(t.bufferRow.sendDatetime),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[y])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",b,(0,a.zw)(t.bufferRow.supplierCode),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[z])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",v,(0,a.zw)(t.bufferRow.supplierName),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",S,(0,a.zw)(t.bufferRow.sendUserTel),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[C])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",F,(0,a.zw)(t.bufferRow.storageNo),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[D])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",N,(0,a.zw)(t.bufferRow.storageName),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[R])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",T,(0,a.zw)(t.bufferRow.signForUserCode),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[B])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",U,(0,a.zw)(t.bufferRow.signForUserName),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[$])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",Z,(0,a.zw)(t.bufferRow.signForDatetime),1)])),_:1})])),_:1}),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[q])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",j,(0,a.zw)(Et.FormatDictionary("sys_yes_no",t.bufferRow.sendState)["lable"]),1)])),_:1})])),_:1})])),_:1}),(0,l.Wm)(Yt,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(Xt,{"no-gutters":"",class:"custem-card-title"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"7"},{default:(0,l.w5)((()=>[(0,l.Wm)(Gt,{icon:"mdi-card-bulleted-outline",size:"16",color:"primary"}),A])),_:1}),(0,l.Wm)(Mt,{cols:"5"})])),_:1}),(0,l._)("div",H,[(0,l.Wm)(ee,{ref:"table1",children:t.list1},{tableBody:(0,l.w5)((t=>[(0,l.Wm)(te,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Xt,{"no-gutters":"",class:"table-title"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"1"},{default:(0,l.w5)((()=>[(0,l.Wm)(Vt,{content:t._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,l.Wm)(Mt,{cols:"5"}),(0,l.Wm)(Mt,{cols:"1",class:"text-right"})])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[L])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",O,(0,a.zw)(t.items.partNo),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[J])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",I,(0,a.zw)(t.items.partName),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[P])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",Q,(0,a.zw)(t.items.refNo),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[E])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",K,(0,a.zw)(t.items.reqQty),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[G])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",M,(0,a.zw)(t.items.batch),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[X])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",Y,(0,a.zw)(t.items.wipDate),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[V])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",tt,(0,a.zw)(Et.FormatDictionary("sys_yes_no",t.items.isKeySpareParts)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[et])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",st,(0,a.zw)(Et.FormatDictionary("srm_testing_state",t.items.testingState)["lable"]),1)])),_:2},1024)])),_:2},1024),"1"!=t.items.deliverySlipType?((0,l.wg)(),(0,l.iD)("span",lt,[(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[at])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",it,(0,a.zw)(t.items.ulocNo),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[ot])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",ct,(0,a.zw)(t.items.ulocName),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[nt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",mt,(0,a.zw)(t.items.positionNo),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[ut])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",ft,(0,a.zw)(t.items.orderNo),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[wt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",dt,(0,a.zw)(t.items.sn),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[rt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",_t,(0,a.zw)(t.items.dnNo),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[gt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",pt,(0,a.zw)(t.items.poRow),1)])),_:2},1024)])),_:2},1024)])):(0,l.kq)("",!0)])),_:2},1024)])),_:1},8,["children"])])])),_:1}),(0,l.Wm)(Yt,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(Xt,{"no-gutters":"",class:"custem-card-title"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"7"},{default:(0,l.w5)((()=>[(0,l.Wm)(Gt,{icon:"mdi-alert-circle-outline",size:"16",color:"error"}),ht])),_:1}),(0,l.Wm)(Mt,{cols:"5"})])),_:1}),(0,l._)("div",Wt,[(0,l.Wm)(ee,{ref:"table2",children:t.list2},{tableBody:(0,l.w5)((t=>[(0,l.Wm)(te,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Xt,{"no-gutters":"",class:"table-title"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"1"},{default:(0,l.w5)((()=>[(0,l.Wm)(Vt,{content:t._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,l.Wm)(Mt,{cols:"5"}),(0,l.Wm)(Mt,{cols:"1",class:"text-right"})])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[xt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",yt,(0,a.zw)(t.items.partNo),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[bt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",zt,(0,a.zw)(t.items.partName),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[vt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",kt,(0,a.zw)(t.items.reqQty),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[St])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",Ct,(0,a.zw)(Et.FormatDictionary("ccgl_abnormal_type",t.items.abnormalType)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[Ft])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",Dt,(0,a.zw)(t.items.abnormalExplain),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[Nt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",Rt,(0,a.zw)(t.items.submitDatetime),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[Tt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",Bt,(0,a.zw)(t.items.submitUser),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[Ut])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",$t,(0,a.zw)(t.items.disposeType),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[Zt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",qt,(0,a.zw)(t.items.disposeExplain),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[jt])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",At,(0,a.zw)(t.items.disposeUser),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[Ht])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",Lt,(0,a.zw)(t.items.disposeDatetime),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Xt,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(Mt,{cols:"4"},{default:(0,l.w5)((()=>[Ot])),_:1}),(0,l.Wm)(Mt,{cols:"8"},{default:(0,l.w5)((()=>[(0,l._)("p",Jt,(0,a.zw)(Et.FormatDictionary("ccgl_abnomal_state",t.items.dataState)["lable"]),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["children"])])])),_:1}),It])}s(73210);var Qt=s(76496),Et=s(73378),Kt=s(37184),Gt=s(20868),Mt=s(88575),Xt={components:{AppBarPage:Qt.Z,ScanBarComponents:Et.Z,TableComponents:Mt.Z},data:()=>({bufferRow:{},list1:[],list2:[]}),created(){this.initFunc()},methods:{GlobalTooltipFunc(t=""){(0,Gt.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(t="",e=""){const s=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),l=s[t]||[],a=l.filter((t=>e==t.value))[0]||{};return a},async initFunc(){const{deliverySlipId:t=""}=this.$route.query,{code:e,data:s={}}=await(0,Kt.i)({url:`/iiot/deliverySlip/all/${t}`,method:"get"});200==e&&(this.bufferRow=s.deliverySlip,this.list1=s.partList,this.list2=s.abnormalList,this.$nextTick((()=>{this.$refs.table1.initFunc(),this.$refs.table2.initFunc()})))},async barSearchClick(t=""){const e=t.trim(),{code:s,data:l=[]}=await(0,Kt.i)({url:"/iiot/qmTask/listQmTaskSnForSelect",method:"get",url_params:{sn:e}});if(200==s){if(!l.length)return void(0,Gt.LJ)("SN号不存在！");(0,Gt.XA)("扫描成功！")}},barSearchClick2(t=""){},async submit(){}}},Yt=s(40089);const Vt=(0,Yt.Z)(Xt,[["render",Pt]]);var te=Vt}}]);
//# sourceMappingURL=chunk.3466.1689576161502.js.map