"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[5558],{14614:function(e,t,l){l.d(t,{m:function(){return i}});var a=l(37184);const i=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:e.payload})},89337:function(e,t,l){l.d(t,{$w:function(){return c},AT:function(){return s},NM:function(){return r},ew:function(){return o},jt:function(){return i},vU:function(){return n}});var a=l(37184);const i=async(e={})=>await(0,a.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),s=async e=>await(0,a.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),n=async e=>await(0,a.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),o=async e=>await(0,a.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),r=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),c=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},5878:function(e,t,l){l.d(t,{b:function(){return a}});l(33948),l(57658);const a=(e,t,l,a)=>{let i={id:t||"id",parentId:l||"parentId",childrenList:a||"children"};var s={},n={},o=[];for(let c of e){let e=c[i.parentId];null==s[e]&&(s[e]=[]),n[c[i.id]]=c,s[e].push(c)}for(let c of e){let e=c[i.parentId];null==n[e]&&o.push(c)}for(let c of o)r(c);function r(e){if(null!==s[e[i.id]]&&(e[i.childrenList]=s[e[i.id]]),e[i.childrenList])for(let t of e[i.childrenList])r(t)}return o}},88575:function(e,t,l){l.d(t,{Z:function(){return C}});var a=l(73396),i=l(87139);const s={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},n=(0,a._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),c=(0,a._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},p=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),d=(0,a._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,a._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(e,t,l,w,y,_){const v=(0,a.up)("v-icon"),x=(0,a.up)("v-btn"),k=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[e.paging&&l.pagingShow?((0,a.wg)(),(0,a.j4)(k,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:_.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:_.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",s,[n,(0,a._)("span",o,(0,i.zw)(e.current),1),r,c,(0,a._)("span",u,(0,i.zw)(e.page),1),p,d,(0,a._)("span",m,(0,i.zw)(e.totalNum),1),h]),(0,a._)("span",f,[l.showSearchBtn?((0,a.wg)(),(0,a.j4)(x,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:_.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(x,{onClick:_.refreshClick,style:(0,i.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),e.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(e.items,((t,l)=>(0,a.WI)(e.$slots,"tableBody",{key:l,items:t,_index:l}))),128)):((0,a.wg)(),(0,a.iD)("p",g,[(0,a.Wm)(v,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var y=l(21801),_=l(37184);var v=l(20868),x={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,v.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,v.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:l,params:a={},children:i,method:s,formatData:n}=this;if(i)return this.items=i,void(this.paging=!1);const o=(0,y.Z)((0,y.Z)({pageNum:e,pageSize:10},a),t),{code:r,total:c=0,msg:u="",data:p,rows:d}=await(0,_.i)({method:s,url:l,payload:"post"==s?o:{},url_params:"get"==s?o:{}});200==r&&(this.totalNum=c,this.current=e,this.page=Math.ceil(c/o.pageSize),this.items=n?n(p||d||[]):p||d||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},k=l(40089);const W=(0,k.Z)(x,[["render",w]]);var C=W},58248:function(e,t,l){l.r(t),l.d(t,{default:function(){return Q}});var a=l(21801),i=l(73396),s=l(87139);const n={class:"v-window-item-table"},o=(0,i._)("p",{class:"font-weight-medium text"},"送货单类型:",-1),r={class:"font-weight-light"},c=(0,i._)("p",{class:"font-weight-medium text"},"送货单号:",-1),u={class:"font-weight-light"},p=(0,i._)("p",{class:"font-weight-medium text"},"srm单号:",-1),d={class:"font-weight-light"},m=(0,i._)("p",{class:"font-weight-medium text"},"供应商名称:",-1),h={class:"font-weight-light"},f=(0,i._)("p",{class:"font-weight-medium text"},"发货人:",-1),g={class:"font-weight-light"},w=(0,i._)("p",{class:"font-weight-medium text"},"联系电话:",-1),y={class:"font-weight-light"},_=(0,i._)("p",{class:"font-weight-medium text"},"发货日期:",-1),v={class:"font-weight-light"},x=(0,i._)("p",{class:"font-weight-medium text"},"仓库名称:",-1),k={class:"font-weight-light"},W=(0,i._)("p",{class:"font-weight-medium text"},"收货人:",-1),C={class:"font-weight-light"},S=(0,i._)("p",{class:"font-weight-medium text"},"收货时间:",-1),b={class:"font-weight-light"},N=(0,i._)("p",{class:"font-weight-medium text"},"单据状态:",-1),$={class:"font-weight-light"},O=(0,i._)("p",{class:"font-weight-medium text"},"是否上报:",-1),z={class:"font-weight-light"},F=(0,i._)("p",{class:"font-weight-medium text"},"异常数:",-1),D={class:"font-weight-light"},U=(0,i._)("p",{class:"font-weight-medium text"},"未处理数:",-1);function H(e,t,l,H,q,B){const T=(0,i.up)("AppBarPage"),V=(0,i.up)("ScanBarComponents"),I=(0,i.up)("v-badge"),j=(0,i.up)("v-col"),A=(0,i.up)("v-row"),L=(0,i.up)("v-btn"),P=(0,i.up)("v-card"),Z=(0,i.up)("TableComponents"),J=(0,i.up)("SearchPage");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(T),(0,i._)("div",n,[(0,i.Wm)(V,{ref:"scanBar1",placeholder:"扫描或输入 送货单号",onSearchClick:B.barSearchClick},null,8,["onSearchClick"]),(0,i.Wm)(Z,{ref:"table1",showSearchBtn:!0,url:"/iiot/deliverySlip/receiving/abnormalList",params:(0,a.Z)({},e.pageSearchConfig),onSearchClick:B.searchClick},{tableBody:(0,i.w5)((e=>[(0,i.Wm)(P,null,{default:(0,i.w5)((()=>[(0,i.Wm)(A,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,i.Wm)(j,{cols:"5"}),(0,i.Wm)(j,{cols:"1",class:"text-right"})])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[o])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",r,(0,s.zw)(B.FormatDictionary("ccgl_delivery_slip_type",e.items.deliverySlipType)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",u,(0,s.zw)(e.items.poNo),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",d,(0,s.zw)(e.items.srmNo),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[m])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",h,(0,s.zw)(e.items.supplierName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",g,(0,s.zw)(e.items.sendUser),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[w])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",y,(0,s.zw)(e.items.sendUserTel),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[_])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",v,(0,s.zw)(e.items.sendDatetime),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",k,(0,s.zw)(e.items.storageName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[W])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",C,(0,s.zw)(e.items.signForUserName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[S])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",b,(0,s.zw)(e.items.signForDatetime),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[N])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",$,(0,s.zw)(B.FormatDictionary("ccgl_delivery_slip_state",e.items.deliverySlipState)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[O])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",z,(0,s.zw)(B.FormatDictionary("sys_yes_no",e.items.sendState)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[F])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",D,(0,s.zw)(e.items.allNum),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"4"},{default:(0,i.w5)((()=>[U])),_:1}),(0,i.Wm)(j,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",{class:"font-weight-light",style:(0,s.j5)(`color:${Number(e.items.abnormalNum)>0?"red":""} `)},(0,s.zw)(e.items.abnormalNum),5)])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"3",class:"text-left"}),(0,i.Wm)(j,{cols:"6",class:"text-left"}),(0,i.Wm)(j,{cols:"3",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(L,{onClick:t=>B.detailClick(e),style:{"font-size":"18px"},color:"secondary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("详情")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),(0,i.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{cols:"3",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(L,{onClick:t=>B.putinHandle(e),style:{"font-size":"18px"},color:"secondary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("入库")])),_:2},1032,["onClick"])])),_:2},1024),(0,i.Wm)(j,{cols:"3",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(L,{onClick:t=>B.errorHandle(e),style:{"font-size":"18px"},color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("异常")])),_:2},1032,["onClick"])])),_:2},1024),(0,i.Wm)(j,{cols:"3",class:"text-center"},{default:(0,i.w5)((()=>["N"===e.items.sendState?((0,i.wg)(),(0,i.j4)(L,{key:0,onClick:t=>B.appearClick(e),style:{"font-size":"18px"},color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("上报")])),_:2},1032,["onClick"])):(0,i.kq)("",!0)])),_:2},1024),(0,i.Wm)(j,{cols:"3",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(L,{onClick:t=>B.takeClick(e),style:{"font-size":"18px"},color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("归档")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["params","onSearchClick"])]),(0,i.Wm)(J,{ref:"searchPage",onResetHandle:B.resetHandle,onSearchHandle:B.searchHandle},null,8,["onResetHandle","onSearchHandle"])])}l(57658),l(73210);var q=l(76496),B=l(88575),T=l(37184);const V=(0,i._)("div",{style:{height:"52px"}},null,-1),I={style:{"margin-top":"32px"}};function j(e,t,l,a,s,n){const o=(0,i.up)("SelectComponents"),r=(0,i.up)("van-field"),c=(0,i.up)("v-btn"),u=(0,i.up)("v-col"),p=(0,i.up)("v-row"),d=(0,i.up)("van-popup");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(d,{show:e.drawer,"onUpdate:show":t[8]||(t[8]=t=>e.drawer=t),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,i.w5)((()=>[V,(0,i.Wm)(o,{modelValue:e.property,"onUpdate:modelValue":t[0]||(t[0]=t=>e.property=t),ref:"select22",label:"送货单类型",option:e.propertySelectOption},null,8,["modelValue","option"]),(0,i.Wm)(o,{modelValue:e.status,"onUpdate:modelValue":t[1]||(t[1]=t=>e.status=t),ref:"select33",label:"送货单状态",option:e.statusSelectOption},null,8,["modelValue","option"]),(0,i.Wm)(r,{modelValue:e.value11,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value11=t),placeholder:"请输入",autocomplete:"off",label:"送货单号"},null,8,["modelValue"]),(0,i.Wm)(r,{modelValue:e.value22,"onUpdate:modelValue":t[3]||(t[3]=t=>e.value22=t),placeholder:"请输入",autocomplete:"off",label:"srm单号"},null,8,["modelValue"]),(0,i.Wm)(r,{modelValue:e.value33,"onUpdate:modelValue":t[4]||(t[4]=t=>e.value33=t),placeholder:"请输入",autocomplete:"off",label:"供应商编码"},null,8,["modelValue"]),(0,i.Wm)(r,{modelValue:e.value44,"onUpdate:modelValue":t[5]||(t[5]=t=>e.value44=t),placeholder:"请输入",autocomplete:"off",label:"仓库编码"},null,8,["modelValue"]),(0,i.Wm)(r,{modelValue:e.value55,"onUpdate:modelValue":t[6]||(t[6]=t=>e.value55=t),placeholder:"请输入",autocomplete:"off",label:"收货人账号"},null,8,["modelValue"]),(0,i._)("div",I,[(0,i.Wm)(p,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:t[7]||(t[7]=()=>e.drawer=!1),density:"compact",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("关闭")])),_:1})])),_:1}),(0,i.Wm)(u,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:n.resetClick,density:"compact",color:"warning",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("重置")])),_:1},8,["onClick"])])),_:1}),(0,i.Wm)(u,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:n.searchClick,density:"compact",color:"primary",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}var A=l(2243),L=l(21655),P=l(89337),Z=(l(5878),{components:{SelectComponents:A.Z,DatePickerComponents:L.Z},emits:["searchHandle","resetHandle"],data:()=>({showFactory:!0,drawer:!1,dateStart:"",dateOver:"",show:!1,fieldValue:"",options:[],factoryID:"",equipment:"",equipmentSelectOption:[],user:"",userSelectOption:[],userAffirm:"",userAffirmSelectOption:[],property:"",propertySelectOption:[],status:"",statusSelectOption:[],value11:"",value22:"",value33:"",value44:"",value55:""}),created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=l[e]||[],i=a.filter((e=>t==e.value))[0]||{};return i},resetClick(){this.factoryID="",this.equipment="",this.dateStart="",this.dateOver="",this.user="",this.userAffirm="",this.fieldValue="",this.property="",this.value11="",this.value22="",this.value33="",this.value44="",this.value55="",this.status="",this.$refs.select22&&this.$refs.select22.reset(),this.$refs.select33&&this.$refs.select33.reset(),this.showFactory=!1,this.$nextTick((()=>{this.showFactory=!0})),this.$emit("resetHandle",{})},async initFunc(){const e=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),t=e["ccgl_delivery_slip_type"]||[];this.propertySelectOption=t.map((e=>Object.assign({text:e.lable,value:e.value})));const l=e["ccgl_delivery_slip_state"]||[];this.statusSelectOption=l.map((e=>Object.assign({text:e.lable,value:e.value})))},async equipmentHTTP(e=""){const t=this,{fieldSelectValue:l={}}=this,{code:a,data:i=[]}=await(0,T.i)({url:"/iiot/equipment/list",method:"get",url_params:{tmBasNodeLevelId:t.factoryID||"",equipmentNo:e}});200==a&&(this.equipmentSelectOptionData=i,this.equipmentSelectOption=i.map((e=>Object.assign({text:`${e.equipmentNo}-${e.equipmentName}`,value:e.tmBasEquipmentId}))).splice(0,100))},async initUserHTTP(){const{data:e=[]}=await(0,P.NM)();this.userSelectOption=e.map((e=>Object.assign({text:`${e.userName}-${e.nickName}`,value:e.userName}))),this.userAffirmSelectOption=e.map((e=>Object.assign({text:`${e.userName}-${e.nickName}`,value:e.userName})))},onFinish({selectedOptions:e}){if(!e.length)return;let t=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=t,this.fieldValue=e.map((e=>e.nodeLevelName)).join("/")},confirmFactory(){this.show=!1,this.equipment="",this.$refs.selectContent&&this.$refs.selectContent.reset(),this.$nextTick((()=>{this.equipmentHTTP()}))},searchClick(){const e={deliverySlipType:this.property,poNo:this.value11,srmNo:this.value22,supplierCode:this.value33,storageNo:this.value44,signForUserCode:this.value55,deliverySlipState:this.status};this.$emit("searchHandle",e),this.drawer=!1},showDrawer(){this.drawer=!0},async equipmentSearchChange(e=""){this.equipmentHTTP(e)}}}),J=l(40089);const R=(0,J.Z)(Z,[["render",j]]);var M=R,X=l(73378),E=(l(14614),l(69650)),G=l(20868),K={components:{AppBarPage:q.Z,TableComponents:B.Z,ScanBarComponents:X.Z,SearchPage:M},data:()=>({pageSearchConfig:{}}),methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=l[e]||[],i=a.filter((e=>t==e.value))[0]||{};return i},async detailClick(e){const{items:t}=e;this.$router.push({path:"/storage/detail",query:{deliverySlipId:t.deliverySlipId}})},async takeClick(e){const{items:t}=e;t.abnormalNum<1?(0,E.vC)({title:"归档",message:"确认归档！",theme:"round-button",closeOnClickOverlay:!0}).then((async()=>{const{code:e}=await(0,T.i)({url:`/iiot/deliverySlip/receiving/archive/${t.deliverySlipId}`,method:"get"});200==e?((0,G.XA)("归档成功！"),this.$refs.table1.initFunc(1)):(0,G.LJ)("归档失败!")})):(0,G.LJ)("异常未处理完不能归档!")},async appearClick(e){const{items:t}=e;(0,E.vC)({title:"上报",message:"确认上报！",theme:"round-button",closeOnClickOverlay:!0}).then((async()=>{const{code:e}=await(0,T.i)({url:`/iiot/deliverySlip/sendSap/${t.deliverySlipId}`,method:"get"});200==e&&((0,G.XA)("上报成功！"),this.$refs.table1.initFunc(1))}))},searchClick(){this.$refs.searchPage.showDrawer()},searchHandle(e={}){this.pageSearchConfig=e,this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},resetHandle(e){this.pageSearchConfig={},this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},barSearchClick(e){const t=e.trim();this.$refs.table1.initFunc(1,{deliverySlipId:t})},errorHandle(e){const{items:t}=e;this.$router.push({path:"/storageManagement/error",query:{deliverySlipId:t.deliverySlipId,deliverySlipType:t.deliverySlipType,poNo:t.poNo,srmNo:t.srmNo}})},putinHandle(e){const{items:t}=e;this.$router.push({path:"/storageManagement/putin",query:{deliverySlipId:t.deliverySlipId}})}}};const Y=(0,J.Z)(K,[["render",H]]);var Q=Y},69650:function(e,t,l){l.d(t,{vC:function(){return p}});var a=l(73396),i=l(12220),s=l(57548),n=l(21178);let o;const r={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let c=(0,i.l7)({},r);function u(){const e={setup(){const{state:e,toggle:t}=(0,s.o)();return()=>(0,a.Wm)(n.Z,(0,a.dG)(e,{"onUpdate:show":t}),null)}};({instance:o}=(0,s.H)(e))}function p(e){return i._f?new Promise(((t,l)=>{o||u(),o.open((0,i.l7)({},c,e,{callback:e=>{("confirm"===e?t:l)(e)}}))})):Promise.resolve()}}}]);
//# sourceMappingURL=chunk.5558.1689577235749.js.map