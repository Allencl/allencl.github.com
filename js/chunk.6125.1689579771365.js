"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[6125],{89337:function(e,t,l){l.d(t,{$w:function(){return c},AT:function(){return i},NM:function(){return r},ew:function(){return n},jt:function(){return s},vU:function(){return o}});var a=l(37184);const s=async(e={})=>await(0,a.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),i=async e=>await(0,a.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),o=async e=>await(0,a.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),n=async e=>await(0,a.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),r=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),c=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},5878:function(e,t,l){l.d(t,{b:function(){return a}});l(33948),l(57658);const a=(e,t,l,a)=>{let s={id:t||"id",parentId:l||"parentId",childrenList:a||"children"};var i={},o={},n=[];for(let c of e){let e=c[s.parentId];null==i[e]&&(i[e]=[]),o[c[s.id]]=c,i[e].push(c)}for(let c of e){let e=c[s.parentId];null==o[e]&&n.push(c)}for(let c of n)r(c);function r(e){if(null!==i[e[s.id]]&&(e[s.childrenList]=i[e[s.id]]),e[s.childrenList])for(let t of e[s.childrenList])r(t)}return n}},88575:function(e,t,l){l.d(t,{Z:function(){return b}});var a=l(73396),s=l(87139);const i={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},o=(0,a._)("span",null,"第",-1),n={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),c=(0,a._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},p=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),d=(0,a._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,a._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(e,t,l,w,_,y){const W=(0,a.up)("v-icon"),v=(0,a.up)("v-btn"),x=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[e.paging&&l.pagingShow?((0,a.wg)(),(0,a.j4)(x,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:y.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(v,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:y.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",i,[o,(0,a._)("span",n,(0,s.zw)(e.current),1),r,c,(0,a._)("span",u,(0,s.zw)(e.page),1),p,d,(0,a._)("span",m,(0,s.zw)(e.totalNum),1),h]),(0,a._)("span",f,[l.showSearchBtn?((0,a.wg)(),(0,a.j4)(v,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:y.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(v,{onClick:y.refreshClick,style:(0,s.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),e.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(e.items,((t,l)=>(0,a.WI)(e.$slots,"tableBody",{key:l,items:t,_index:l}))),128)):((0,a.wg)(),(0,a.iD)("p",g,[(0,a.Wm)(W,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var _=l(21801),y=l(37184);var W=l(20868),v={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,W.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,W.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:l,params:a={},children:s,method:i,formatData:o}=this;if(s)return this.items=s,void(this.paging=!1);const n=(0,_.Z)((0,_.Z)({pageNum:e,pageSize:10},a),t),{code:r,total:c=0,msg:u="",data:p,rows:d}=await(0,y.i)({method:i,url:l,payload:"post"==i?n:{},url_params:"get"==i?n:{}});200==r&&(this.totalNum=c,this.current=e,this.page=Math.ceil(c/n.pageSize),this.items=o?o(p||d||[]):p||d||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},x=l(40089);const k=(0,x.Z)(v,[["render",w]]);var b=k},26125:function(e,t,l){l.r(t),l.d(t,{default:function(){return Y}});var a=l(21801),s=l(73396),i=l(87139);const o={class:"v-window-item-table"},n=(0,s._)("p",{class:"font-weight-medium text"},"出入库编码:",-1),r={class:"font-weight-light",style:{color:"#00E5FF"}},c=(0,s._)("p",{class:"font-weight-medium text"},"出入库名称:",-1),u={class:"font-weight-light"},p=(0,s._)("p",{class:"font-weight-medium text"},"出入库类型:",-1),d={class:"font-weight-light"},m=(0,s._)("p",{class:"font-weight-medium text"},"业务类型:",-1),h={class:"font-weight-light"},f=(0,s._)("p",{class:"font-weight-medium text"},"单据编码:",-1),g={class:"font-weight-light",style:{color:"#00E5FF"}},w=(0,s._)("p",{class:"font-weight-medium text"},"单据名称:",-1),_={class:"font-weight-light"},y=(0,s._)("p",{class:"font-weight-medium text"},"物资编码:",-1),W={class:"font-weight-light",style:{color:"#00E5FF"}},v=(0,s._)("p",{class:"font-weight-medium text"},"物资名称:",-1),x={class:"font-weight-light"},k=(0,s._)("p",{class:"font-weight-medium text"},"申请数量:",-1),b={class:"font-weight-light"},C=(0,s._)("p",{class:"font-weight-medium text"},"申请人名称:",-1),S={class:"font-weight-light"},F=(0,s._)("p",{class:"font-weight-medium text"},"出库数量:",-1),U={class:"font-weight-light"},z=(0,s._)("p",{class:"font-weight-medium text"},"出库人名称:",-1),D={class:"font-weight-light"},H=(0,s._)("p",{class:"font-weight-medium text"},"出库时间:",-1),V={class:"font-weight-light"},$=(0,s._)("p",{class:"font-weight-medium text"},"完成标记:",-1);function N(e,t,l,N,O,P){const T=(0,s.up)("AppBarPage"),I=(0,s.up)("v-badge"),j=(0,s.up)("v-col"),B=(0,s.up)("v-row"),Z=(0,s.up)("v-btn"),L=(0,s.up)("v-card"),A=(0,s.up)("TableComponents"),q=(0,s.up)("SearchPage");return(0,s.wg)(),(0,s.iD)("span",null,[(0,s.Wm)(T),(0,s._)("div",o,[(0,s.Wm)(A,{ref:"table1",showSearchBtn:!0,url:"/iiot/sparePartUse/list",params:(0,a.Z)({},e.pageSearchConfig),onSearchClick:P.searchClick},{tableBody:(0,s.w5)((e=>[(0,s.Wm)(L,null,{default:(0,s.w5)((()=>[(0,s.Wm)(B,{"no-gutters":"",class:"table-title"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"1"},{default:(0,s.w5)((()=>[(0,s.Wm)(I,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,s.Wm)(j,{cols:"4"}),(0,s.Wm)(j,{cols:"7"})])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[n])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",r,(0,i.zw)(e.items.sparePartUseCode),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[c])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",u,(0,i.zw)(e.items.sparePartUseName),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",d,(0,i.zw)(P.FormatDictionary("ccgl_oper_type",e.items.useInfoType)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",h,(0,i.zw)(P.FormatDictionary("ccgl_bpbj_business_type",e.items.businessType)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[f])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",g,(0,i.zw)(e.items.businessCode),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[w])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",_,(0,i.zw)(e.items.businessName),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[y])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",W,(0,i.zw)(e.items.goodsMaterialsCode),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[v])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",x,(0,i.zw)(e.items.goodsMaterialsName),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[k])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",b,(0,i.zw)(e.items.goodsMaterialsNums),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[C])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",S,(0,i.zw)(e.items.operUserName),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[F])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",U,(0,i.zw)(e.items.outNums),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[z])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",D,(0,i.zw)(e.items.outUserName),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[H])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",V,(0,i.zw)(e.items.outDatetime),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"4"},{default:(0,s.w5)((()=>[$])),_:1}),(0,s.Wm)(j,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",{class:"font-weight-light",style:(0,i.j5)(""+("Y"==e.items.finishState?"color:#4CAF50;":"color:#F44336;"))},(0,i.zw)(P.FormatDictionary("sys_yes_no",e.items.finishState)["lable"]),5)])),_:2},1024)])),_:2},1024),(0,s.Wm)(B,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{cols:"6"}),(0,s.Wm)(j,{cols:"6",class:"text-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{onClick:t=>P.detailClick(e),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("详情")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["params","onSearchClick"])]),(0,s.Wm)(q,{ref:"searchPage",onResetHandle:P.resetHandle,onSearchHandle:P.searchHandle},null,8,["onResetHandle","onSearchHandle"])])}l(57658);var O=l(76496),P=l(88575);const T=(0,s._)("div",{style:{height:"52px"}},null,-1),I={style:{"margin-top":"32px"}};function j(e,t,l,a,i,o){const n=(0,s.up)("van-field"),r=(0,s.up)("SelectComponents"),c=(0,s.up)("v-btn"),u=(0,s.up)("v-col"),p=(0,s.up)("v-row"),d=(0,s.up)("van-popup");return(0,s.wg)(),(0,s.iD)("span",null,[(0,s.Wm)(d,{show:e.drawer,"onUpdate:show":t[7]||(t[7]=t=>e.drawer=t),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,s.w5)((()=>[T,(0,s.Wm)(n,{modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value1=t),autocomplete:"off",placeholder:"请输入",label:"出入库编码"},null,8,["modelValue"]),(0,s.Wm)(n,{modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value2=t),autocomplete:"off",placeholder:"请输入",label:"单据编码"},null,8,["modelValue"]),(0,s.Wm)(n,{modelValue:e.value3,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value3=t),autocomplete:"off",placeholder:"请输入",label:"物资编码"},null,8,["modelValue"]),(0,s.Wm)(n,{modelValue:e.value4,"onUpdate:modelValue":t[3]||(t[3]=t=>e.value4=t),autocomplete:"off",placeholder:"请输入",label:"申请人名称"},null,8,["modelValue"]),(0,s.Wm)(r,{modelValue:e.property,"onUpdate:modelValue":t[4]||(t[4]=t=>e.property=t),ref:"select1",label:"出入库类型",option:e.propertySelectOption},null,8,["modelValue","option"]),(0,s.Wm)(r,{modelValue:e.property22,"onUpdate:modelValue":t[5]||(t[5]=t=>e.property22=t),ref:"select2",label:"业务类型",option:e.propertySelectOption22},null,8,["modelValue","option"]),(0,s._)("div",I,[(0,s.Wm)(p,{"no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{cols:"4",class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{onClick:t[6]||(t[6]=()=>e.drawer=!1),density:"compact",variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("关闭")])),_:1})])),_:1}),(0,s.Wm)(u,{cols:"4",class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{onClick:o.resetClick,density:"compact",color:"warning",variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("重置")])),_:1},8,["onClick"])])),_:1}),(0,s.Wm)(u,{cols:"4",class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{onClick:o.searchClick,density:"compact",color:"primary",variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}var B=l(2243),Z=(l(37184),l(21655)),L=(l(89337),l(5878),{components:{SelectComponents:B.Z,DatePickerComponents:Z.Z},emits:["searchHandle","resetHandle"],data:()=>({drawer:!1,value1:"",value2:"",value3:"",value4:"",property:"",propertySelectOption:[],property22:"",propertySelectOption22:[]}),created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=l[e]||[],s=a.filter((e=>t==e.value))[0]||{};return s},resetClick(){this.value1="",this.value2="",this.value3="",this.value4="",this.property="",this.property22="",this.$refs.select1&&this.$refs.select1.reset(),this.$refs.select2&&this.$refs.select2.reset(),this.$emit("resetHandle",{})},async initFunc(){const e=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),t=e["ccgl_oper_type"]||[];this.propertySelectOption=t.map((e=>Object.assign({text:e.lable,value:e.value})));const l=e["ccgl_bpbj_business_type"]||[];this.propertySelectOption22=l.map((e=>Object.assign({text:e.lable,value:e.value})))},searchClick(){const e={sparePartUseCode:this.value1,businessCode:this.value2,goodsMaterialsCode:this.value3,operUserName:this.value4,useInfoType:this.property,businessType:this.property22};this.$emit("searchHandle",e),this.drawer=!1},showDrawer(){this.drawer=!0}}}),A=l(40089);const q=(0,A.Z)(L,[["render",j]]);var M=q,J=l(20868),R={components:{AppBarPage:O.Z,SearchPage:M,TableComponents:P.Z},data:()=>({pageSearchConfig:{}}),methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=l[e]||[],s=a.filter((e=>t==e.value))[0]||{};return s},GlobalTooltipFunc(e=""){(0,J.CF)({message:e,overlay:!0,closeOnClickOverlay:!0,duration:0})},async detailClick(e){const{items:t}=e;this.$router.push({path:"/outPutHistory/detail",query:{sparePartUseId:t.sparePartUseId}})},searchClick(){this.$refs.searchPage.showDrawer()},searchHandle(e={}){this.pageSearchConfig=e,this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},resetHandle(e){this.pageSearchConfig={},this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))}}};const E=(0,A.Z)(R,[["render",N]]);var Y=E}}]);
//# sourceMappingURL=chunk.6125.1689579771365.js.map