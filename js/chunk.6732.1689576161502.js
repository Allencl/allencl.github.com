"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[6732],{89337:function(e,t,i){i.d(t,{$w:function(){return r},AT:function(){return n},NM:function(){return c},ew:function(){return o},jt:function(){return l},vU:function(){return s}});var a=i(37184);const l=async(e={})=>await(0,a.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),n=async e=>await(0,a.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),s=async e=>await(0,a.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),o=async e=>await(0,a.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),c=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),r=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},5878:function(e,t,i){i.d(t,{b:function(){return a}});i(33948),i(57658);const a=(e,t,i,a)=>{let l={id:t||"id",parentId:i||"parentId",childrenList:a||"children"};var n={},s={},o=[];for(let r of e){let e=r[l.parentId];null==n[e]&&(n[e]=[]),s[r[l.id]]=r,n[e].push(r)}for(let r of e){let e=r[l.parentId];null==s[e]&&o.push(r)}for(let r of o)c(r);function c(e){if(null!==n[e[l.id]]&&(e[l.childrenList]=n[e[l.id]]),e[l.childrenList])for(let t of e[l.childrenList])c(t)}return o}},2243:function(e,t,i){i.d(t,{Z:function(){return g}});var a=i(73396),l=i(87139);const n={style:{height:"98%","padding-bottom":"40px"}},s={style:{height:"100%"}},o={style:{position:"relative",top:"4px"}},c=["onClick"],r={class:"text-truncate",style:{height:"24px"}},h={key:2,class:"text-center",style:{"margin-top":"16px"}};function d(e,t,i,d,p,u){const m=(0,a.up)("van-field"),f=(0,a.up)("v-col"),g=(0,a.up)("v-btn"),k=(0,a.up)("v-row"),w=(0,a.up)("van-search"),y=(0,a.up)("van-checkbox"),x=(0,a.up)("van-popup");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(m,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:i.required,label:i.label,placeholder:i.placeholder,autocomplete:"off",type:i.multiple?"textarea":"text",onClick:u.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,a.Wm)(x,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a._)("div",s,[(0,a.Wm)(k,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{cols:"6"},{default:(0,a.w5)((()=>[(0,a._)("p",null,(0,l.zw)(i.label)+"-选择框",1)])),_:1}),(0,a.Wm)(f,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a._)("span",o,(0,l.zw)(e.BufferOption.filter((e=>e._checked)).length),1),i.selectAll?((0,a.wg)(),(0,a.j4)(g,{key:0,onClick:u.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,a.w5)((()=>[(0,a.Uk)("全选")])),_:1},8,["onClick"])):(0,a.kq)("",!0)])),_:1})])),_:1}),i.showSearch?((0,a.wg)(),(0,a.j4)(k,{key:0,"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{cols:"8"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:i.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,a.Wm)(f,{cols:"2"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{onClick:t[2]||(t[2]=e=>u.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" 查询 ")])),_:1})])),_:1}),(0,a.Wm)(f,{cols:"2"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{onClick:t[3]||(t[3]=e=>u.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),e.BufferOption.length?((0,a.wg)(),(0,a.iD)("ul",{key:1,style:(0,l.j5)(`height: ${i.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.BufferOption,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,style:(0,l.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>u.checkChange(e)},[(0,a._)("p",r,(0,l.zw)(e.text),1),(0,a.Wm)(y,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,c)))),128))],4)):((0,a.wg)(),(0,a.iD)("p",h,"无数据!"))]),(0,a.Wm)(k,{"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{cols:"6",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 取消 ")])),_:1})])),_:1}),(0,a.Wm)(f,{cols:"6",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{variant:"plain",color:"primary",block:"",onClick:u.confirmHandle},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}i(38862),i(73210),i(26699),i(32023);var p=i(20868),u={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var i=t;return t.value==e&&(i._checked=!0),i}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var i=t;return t.value==e&&(i._checked=!0),i}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:i,value:a}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==a?!i:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==a&&!i})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:i}=this;if(i&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),i=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!i.length)return void(0,p.LJ)("不存在！");const a=e.filter((e=>!e.text.includes(t))),l=a.filter((e=>e._checked)),n=a.filter((e=>!e._checked));this.BufferOption=i.concat(l).concat(n)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},m=i(40089);const f=(0,m.Z)(u,[["render",d]]);var g=f},88575:function(e,t,i){i.d(t,{Z:function(){return b}});var a=i(73396),l=i(87139);const n={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},s=(0,a._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},c=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),r=(0,a._)("span",null,"共",-1),h={style:{"padding-left":"1px","padding-right":"1px"}},d=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,a._)("span",null,"总",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},m=(0,a._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function k(e,t,i,k,w,y){const x=(0,a.up)("v-icon"),v=(0,a.up)("v-btn"),C=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[e.paging&&i.pagingShow?((0,a.wg)(),(0,a.j4)(C,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:y.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(v,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:y.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",n,[s,(0,a._)("span",o,(0,l.zw)(e.current),1),c,r,(0,a._)("span",h,(0,l.zw)(e.page),1),d,p,(0,a._)("span",u,(0,l.zw)(e.totalNum),1),m]),(0,a._)("span",f,[i.showSearchBtn?((0,a.wg)(),(0,a.j4)(v,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:y.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(v,{onClick:y.refreshClick,style:(0,l.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),e.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(e.items,((t,i)=>(0,a.WI)(e.$slots,"tableBody",{key:i,items:t,_index:i}))),128)):((0,a.wg)(),(0,a.iD)("p",g,[(0,a.Wm)(x,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var w=i(21801),y=i(37184);var x=i(20868),v={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,x.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,x.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:i,params:a={},children:l,method:n,formatData:s}=this;if(l)return this.items=l,void(this.paging=!1);const o=(0,w.Z)((0,w.Z)({pageNum:e,pageSize:10},a),t),{code:c,total:r=0,msg:h="",data:d,rows:p}=await(0,y.i)({method:n,url:i,payload:"post"==n?o:{},url_params:"get"==n?o:{}});200==c&&(this.totalNum=r,this.current=e,this.page=Math.ceil(r/o.pageSize),this.items=s?s(d||p||[]):d||p||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},C=i(40089);const _=(0,C.Z)(v,[["render",k]]);var b=_},11445:function(e,t,i){i.r(t),i.d(t,{default:function(){return D}});var a=i(21801),l=i(73396),n=i(87139);const s=(0,l._)("br",null,null,-1),o=(0,l._)("span",{class:"font-weight-medium"},"点检设备",-1),c={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},r={class:"text-truncate font-weight-light"},h=(0,l._)("span",{class:"font-weight-medium text"},"单据编号: ",-1),d={class:"text-teal-lighten-1"},p={class:"text-truncate font-weight-light"},u=(0,l._)("span",{class:"font-weight-medium text"},"点检类型: ",-1),m={class:"text-truncate font-weight-light"},f=(0,l._)("span",{class:"font-weight-medium text"},"设备类型: ",-1),g={class:"text-truncate font-weight-light"},k=(0,l._)("span",{class:"font-weight-medium text"},"申请时间: ",-1),w={key:0,class:"hide-select-equipment-input"};function y(e,t,i,y,x,v){const C=(0,l.up)("AppBarPage"),_=(0,l.up)("v-btn"),b=(0,l.up)("ScanBarComponents"),S=(0,l.up)("SelectComponents"),T=(0,l.up)("van-field"),$=(0,l.up)("van-cascader"),B=(0,l.up)("van-popup"),O=(0,l.up)("van-checkbox"),W=(0,l.up)("v-badge"),V=(0,l.up)("v-col"),F=(0,l.up)("v-row"),I=(0,l.up)("v-card"),H=(0,l.up)("TableComponents"),q=(0,l.up)("v-window-item"),N=(0,l.up)("v-window"),U=(0,l.up)("SearchPage1"),D=(0,l.up)("SearchPage2");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l.Wm)(C),(0,l.Wm)(_,{style:{width:"58px",height:"58px",position:"fixed",top:"286px",right:"16px","z-index":"11",color:"#fff !important"},icon:"mdi-plus",color:"primary",onClick:v.searchFunc},{default:(0,l.w5)((()=>[(0,l.Uk)("查询")])),_:1},8,["onClick"]),(0,l.Wm)(_,{style:{width:"58px",height:"58px",position:"fixed",top:"352px",right:"16px","z-index":"11",color:"#fff !important"},icon:"mdi-plus",color:"warning",onClick:v.restFunc},{default:(0,l.w5)((()=>[(0,l.Uk)("重置")])),_:1},8,["onClick"]),(0,l.Wm)(_,{style:{width:"58px",height:"58px",position:"fixed",top:"418px",right:"16px","z-index":"11",color:"#fff !important"},icon:"mdi-plus",color:"secondary",onClick:v.selectAllFunc},{default:(0,l.w5)((()=>[(0,l.Uk)("全选")])),_:1},8,["onClick"]),(0,l.Wm)(_,{style:{width:"58px",height:"58px",position:"fixed",top:"483px",right:"16px","z-index":"11",color:"#fff !important"},icon:"mdi-plus",color:"warning",onClick:v.sumitFunc},{default:(0,l.w5)((()=>[(0,l.Uk)("提交"),s,(0,l.Uk)("点检")])),_:1},8,["onClick"]),(0,l.Wm)(b,{ref:"scanBar1",placeholder:"扫描或输入 区域码",onSearchClick:v.barSearchClick},null,8,["onSearchClick"]),(0,l.Wm)(S,{modelValue:e.process,"onUpdate:modelValue":t[0]||(t[0]=t=>e.process=t),ref:"select123",label:"设备类型",option:e.processSelectOption,onOnChange:v.processOnChange},null,8,["modelValue","option","onOnChange"]),(0,l.Wm)(T,{modelValue:e.fieldValue,"onUpdate:modelValue":t[1]||(t[1]=t=>e.fieldValue=t),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",autosize:{maxHeight:100,minHeight:32},onClick:t[2]||(t[2]=t=>e.show=!0)},null,8,["modelValue"]),(0,l.Wm)(B,{show:e.show,"onUpdate:show":t[6]||(t[6]=t=>e.show=t),round:"",position:"bottom"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:t[3]||(t[3]=()=>e.show=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 确定 ")])),_:1}),e.hideFactory?((0,l.wg)(),(0,l.j4)($,{key:0,modelValue:e.factoryID,"onUpdate:modelValue":t[4]||(t[4]=t=>e.factoryID=t),title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[5]||(t[5]=t=>e.show=!1),onChange:v.onFinish},null,8,["modelValue","options","onChange"])):(0,l.kq)("",!0)])),_:1},8,["show"]),(0,l.Wm)(N,{modelValue:e.tab,"onUpdate:modelValue":t[7]||(t[7]=t=>e.tab=t)},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{value:"1",class:"v-window-item-table"},{default:(0,l.w5)((()=>["1"==e.tab?((0,l.wg)(),(0,l.j4)(H,{key:0,ref:"table1",url:"/iiot/checkTask/list",showSearchBtn:!1,params:(0,a.Z)({pageSize:e.pageSize,params:{typeList:["dj"]},tmBasNodeLevelId:e.factoryID,typeList:["N","C"],tmBasEquipmentTypeId:e.process,tmBasEquipments:e.tmBasEquipments},e.pageSearchConfig1),method:"post",refreshFunc:"",onSearchClick:v.searchClick1,onRefresh:v.refreshTable},{tableBody:(0,l.w5)((e=>[(0,l.Wm)(I,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{"no-gutters":"",class:"table-title"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(O,{modelValue:e.items._checked,"onUpdate:modelValue":t=>e.items._checked=t,"checked-color":"#4CAF50",shape:"square",style:{position:"relative",top:"4px",display:"inline-block","margin-right":"12px"}},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Wm)(W,{content:e._index+1,color:"primary",inline:""},null,8,["content"]),o])),_:2},1024)])),_:2},1024),(0,l.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{cols:"12"},{default:(0,l.w5)((()=>[(0,l._)("p",c,(0,n.zw)(e.items.equipmentName),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{cols:"12"},{default:(0,l.w5)((()=>[(0,l._)("p",r,[h,(0,l._)("span",d,(0,n.zw)(e.items.taskNo),1)])])),_:2},1024)])),_:2},1024),(0,l.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{cols:"12"},{default:(0,l.w5)((()=>[(0,l._)("p",p,[u,(0,l.Uk)(" "+(0,n.zw)(v.FormatDictionary("CHECK_TYPE",e.items.taskType)["lable"]),1)])])),_:2},1024),(0,l.Wm)(V,{cols:"12"},{default:(0,l.w5)((()=>[(0,l._)("p",m,[f,(0,l.Uk)(" "+(0,n.zw)(e.items.equipmentType),1)])])),_:2},1024)])),_:2},1024),(0,l.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{cols:"12"},{default:(0,l.w5)((()=>[(0,l._)("p",g,[k,(0,l.Uk)(" "+(0,n.zw)(e.items.createDate),1)])])),_:2},1024)])),_:2},1024),(0,l.Wm)(F,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{cols:"6",class:"text-left"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{onClick:t=>v.experienceEdit(e),color:"secondary",density:"compact",rounded:0,variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("点检")])),_:2},1032,["onClick"])])),_:2},1024),(0,l.Wm)(V,{cols:"6",class:"text-center"})])),_:2},1024)])),_:2},1024)])),_:1},8,["params","onSearchClick","onRefresh"])):(0,l.kq)("",!0)])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(U,{ref:"searchPage1",hideStatus:!1,onResetHandle:v.resetHandle1,onSearchHandle:v.searchHandle1},null,8,["onResetHandle","onSearchHandle"]),(0,l.Wm)(D,{ref:"searchPage2",hideStatus:!1,onResetHandle:v.resetHandle2,onSearchHandle:v.searchHandle2},null,8,["onResetHandle","onSearchHandle"]),e.showSelect?((0,l.wg)(),(0,l.iD)("span",w,[(0,l.Wm)(S,{ref:"selectContent",label:"设备",placeholderSearch:"请输入设备编号",forbidShow:!0,required:"",showSearch:"",selectAll:"",multiple:"",option:e.equipmentSelectOption,onOnSearchChange:v.equipmentSearchChange,onOnChange:v.equipmentConfirm},null,8,["option","onOnSearchChange","onOnChange"])])):(0,l.kq)("",!0)])}i(38862),i(57658),i(73210);var x=i(76496),v=i(88575),C=i(73378),_=i(2243),b=i(89337),S=i(5878),T=i(37184);const $=(0,l._)("div",{style:{height:"36px"}},null,-1),B={style:{"margin-top":"32px"}};function O(e,t,i,a,n,s){const o=(0,l.up)("van-field"),c=(0,l.up)("v-btn"),r=(0,l.up)("van-cascader"),h=(0,l.up)("van-popup"),d=(0,l.up)("v-col"),p=(0,l.up)("v-row");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l.Wm)(h,{show:e.drawer,"onUpdate:show":t[6]||(t[6]=t=>e.drawer=t),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,l.w5)((()=>[$,(0,l.Wm)(o,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",onClick:t[1]||(t[1]=t=>e.show=!0)},null,8,["modelValue"]),(0,l.Wm)(h,{show:e.show,"onUpdate:show":t[4]||(t[4]=t=>e.show=t),round:"",position:"bottom"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:t[2]||(t[2]=()=>e.show=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 确定 ")])),_:1}),e.hideFactory?((0,l.wg)(),(0,l.j4)(r,{key:0,title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[3]||(t[3]=t=>e.show=!1),onChange:s.onFinish},null,8,["options","onChange"])):(0,l.kq)("",!0)])),_:1},8,["show"]),(0,l._)("div",B,[(0,l.Wm)(p,{"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{cols:"4",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{onClick:t[5]||(t[5]=()=>e.drawer=!1),density:"compact",variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("关闭")])),_:1})])),_:1}),(0,l.Wm)(d,{cols:"4",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{onClick:s.resetClick,density:"compact",color:"warning",variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("重置")])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(d,{cols:"4",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{onClick:s.searchClick,density:"compact",color:"primary",variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}var W={components:{SelectComponents:_.Z},emits:["searchHandle","resetHandle"],data:()=>({hideFactory:!0,drawer:!1,show:!1,fieldValue:"",options:[],factoryID:"",type:"",typeSelectOption:[],property:"",propertySelectOption:[],status:"",statusSelectOption:[]}),created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const i=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=i[e]||[],l=a.filter((e=>t==e.value))[0]||{};return l},resetClick(){this.fieldValue="",this.factoryID="",this.hideFactory=!1,this.$nextTick((()=>{this.hideFactory=!0})),this.$emit("resetHandle",{})},async initFunc(){const{data:e=[]}=await(0,b.jt)(),t=(0,S.b)(e,"tmBasNodeLevelId","parentId");this.options=t},async getTypeHttp(e=""){const{code:t,data:i=[]}=await(0,T.i)({url:"/iiot/abnormalType/listAbnormalTypeForSelect",method:"get",url_params:{abnormalNo:e}});200==t&&(this.typeSelectOption=i.map((e=>Object.assign({text:`${e.abnormalNo}${e.abnormalName}`,value:e.tmBasAbnormalTypeId}))))},onFinish({selectedOptions:e}){if(!e.length)return;let t=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=t,this.fieldValue=e.map((e=>e.nodeLevelName)).join("/")},searchClick(){const{factoryID:e,type:t,property:i,status:a}=this,l={tmBasNodeLevelId:e};this.$emit("searchHandle",l),this.drawer=!1},showDrawer(){this.drawer=!0}},props:{hideStatus:{type:Boolean,default:()=>!0}}},V=i(40089);const F=(0,V.Z)(W,[["render",O]]);var I=F,H=i(20868),q=i(69650),N={components:{AppBarPage:x.Z,SearchPage1:I,SearchPage2:I,SelectComponents:_.Z,ScanBarComponents:C.Z,TableComponents:v.Z},data:()=>({pageSize:10,hideFactory:!0,drawer:!1,show:!1,fieldValue:"",options:[],factoryID:"",tab:"1",process:"",processSelectOption:[],bufferTree:[],pageSearchConfig1:{},pageSearchConfig2:{},tmBasEquipments:[],showSelect:!0,tmBasNodeLevelId:"",equipment:"",equipmentSelectOption:[],equipmentSelectOptionData:[]}),created(){this.initFunc(),this.factoryTreeHTTP(),this.refreshTable();const{$emitter:e}=this.$root;e.on("update_examineHistory_page",(()=>{this.initFunc(),this.factoryTreeHTTP(),this.refreshTable()}))},methods:{FormatDictionary(e="",t=""){const i=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=i[e]||[],l=a.filter((e=>t==e.value))[0]||{};return l},async initFunc(){const{tabs:e}=this.$route.query,{data:t=[]}=(JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),await(0,b.jt)()),i=(0,S.b)(t,"tmBasNodeLevelId","parentId");this.options=i,e&&(this.tab=e)},async getContentHttp(){const{code:e,data:t=[]}=await(0,T.i)({url:"/iiot/equipmentType/list",method:"get",url_params:{}});200==e&&(this.processSelectOption=t.map((e=>Object.assign({text:`${e.no}${e.name}`,value:e.tmBasEquipmentTypeId}))),this.$nextTick((()=>{const e=localStorage.getItem("examineHistory_index_buffer_equipment_value")||"";e&&(this.process=e,this.$refs.select123&&this.$refs.select123.setValue(e),this.$nextTick((()=>{setTimeout((()=>{this.$refs.table1.initFunc(1)}),1e3)})))})))},onFinish({selectedOptions:e}){if(!e.length)return;let t=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=t,this.fieldValue=e.map((e=>e.nodeLevelName)).join("/"),this.$nextTick((()=>{const e={id:t,text:this.fieldValue};localStorage.setItem("examineHistory_index_buffer_nodeLevel_option",JSON.stringify(e))}))},refreshTable(){this.$refs["scanBar1"]&&this.$refs["scanBar1"].reset(),this.$refs["scanBar2"]&&this.$refs["scanBar2"].reset(),this.tmBasEquipments=[],this.$nextTick((()=>{"1"==this.tab&&this.$refs.table1.initFunc(1,{}),"2"==this.tab&&this.$refs.table2.initFunc(1,{})}))},async equipmentSearchChange(e=""){this.equipmentHTTP(e)},async equipmentHTTP(e=""){const{tmBasNodeLevelId:t}=this,{code:i,data:a=[]}=await(0,T.i)({url:"/iiot/equipment/list",method:"get",url_params:{tmBasNodeLevelId:t,equipmentNo:e}});200==i&&(this.equipmentSelectOptionData=a,this.equipmentSelectOption=a.map((e=>Object.assign({text:`${e.equipmentNo}-${e.equipmentName}`,value:e.tmBasEquipmentId}))).splice(0,100))},equipmentConfirm(e=""){this.tmBasEquipments=e?e.split(","):[],this.$nextTick((()=>{"1"==this.tab&&this.$refs.table1.initFunc(1,{}),"2"==this.tab&&this.$refs.table2.initFunc(1,{})}))},async factoryTreeHTTP(){await this.getContentHttp();const{data:e=[]}=await(0,b.jt)();this.bufferTree=e,this.$nextTick((()=>{const e=JSON.parse(localStorage.getItem("examineHistory_index_buffer_nodeLevel_option")||"{}");e.id&&(this.hideFactory=!1,this.factoryID=e.id,this.$nextTick((()=>{this.hideFactory=!0,this.fieldValue=e.text,this.$nextTick((()=>{setTimeout((()=>{this.$refs.table1.initFunc(1)}),1e3)}))})))}))},async experienceEditTo(e){const{items:t}=e,{code:i}=await(0,T.i)({url:"/iiot/checkTask/checkTask",method:"post",payload:{ttCheckTaskId:t.ttCheckTaskId}});200==i&&((0,H.XA)("提交成功！"),this.tab="1",this.$nextTick((()=>{this.$refs.table1.initFunc()})))},async experienceEdit(e){const{items:t}=e;this.$router.push({path:"/examineHistory/detail",query:{ttCheckTaskId:t.ttCheckTaskId,row:JSON.stringify(t)}}),setTimeout((()=>{this.$root.$emitter.emit("update_examineHistory_page_index")}),1e3)},processOnChange(e=""){localStorage.setItem("examineHistory_index_buffer_equipment_value",e)},async cancelHandle(e){const{items:t}=e;(0,q.vC)({title:"取消确认",message:"取消后数据不可恢复，确认取消！",theme:"round-button",closeOnClickOverlay:!0}).then((async()=>{const{code:e}=await(0,T.i)({url:"/iiot/checkTask",method:"PUT",payload:{ttCheckTaskId:t.ttCheckTaskId,taskState:"N"}});200==e&&((0,H.XA)("提交成功！"),this.tab="1",this.$nextTick((()=>{this.$refs.table1.initFunc()})))}))},async barSearchClick(e=""){const t=e.trim(),i=this.bufferTree.filter((e=>e.nodeLevelNo==t))[0]||{};i.tmBasNodeLevelId?(this.showSelect=!1,this.tmBasNodeLevelId=i.tmBasNodeLevelId,this.$nextTick((async()=>{this.showSelect=!0,await this.equipmentHTTP(""),this.$nextTick((()=>{this.$refs.selectContent.showModle()}))}))):(0,H.LJ)("无工厂节点！")},async barSearchClick2(e=""){const t=e.trim(),i=this.bufferTree.filter((e=>e.nodeLevelNo==t))[0]||{};i.tmBasNodeLevelId?(this.showSelect=!1,this.tmBasNodeLevelId=i.tmBasNodeLevelId,this.$nextTick((async()=>{this.showSelect=!0,await this.equipmentHTTP(""),this.$nextTick((()=>{this.$refs.selectContent.showModle()}))}))):(0,H.LJ)("无工厂节点！")},searchClick1(){this.$refs.searchPage1.showDrawer()},searchHandle1(e){this.pageSearchConfig1=e,this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},resetHandle1(e){this.pageSearchConfig1={},this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},searchClick2(){this.$refs.searchPage2.showDrawer()},searchHandle2(e){this.pageSearchConfig2=e,this.$nextTick((()=>{this.$refs.table2.initFunc(1)}))},resetHandle2(e){this.pageSearchConfig2={},this.$nextTick((()=>{this.$refs.table2.initFunc(1)}))},selectAllFunc(){this.$refs.table1.selectAll()},async sumitFunc(){var e;const t=this.$refs.table1.resultData().filter((e=>e._checked));if(!t.length)return void(0,H.LJ)("未选择数据！");const{code:i,data:a=[]}=await(0,T.i)({url:"/iiot/checkTask/checkTask",method:"post",payload:{ttCheckTaskId:null===(e=t[0])||void 0===e?void 0:e.ttCheckTaskId}});if(200==i){const e={checkTaskRecords:a.map((e=>Object.assign({checkResult:e.checkResult||"",checkResultContent:e.checkResultContent||"",inspectValue:e.inspectValue||"",judgmentResult:e.judgmentResult||"",ttCheckTaskId:e.ttCheckTaskId||"",ttCheckTaskRecordId:e.ttCheckTaskRecordId||"",ttCheckTaskIds:t.map((e=>e.ttCheckTaskId))})))},i=await(0,T.i)({url:"/iiot/checkTaskRecord/submitCheckTaskRecords",method:"post",payload:e});200==i.code&&((0,H.XA)("提交成功！"),this.$refs.table1.initFunc(1))}},restFunc(){this.fieldValue="",this.factoryID="",this.process="",this.pageSize=10,this.hideFactory=!1,this.$nextTick((()=>{this.hideFactory=!0,this.$refs.select123&&this.$refs.select123.reset(),this.$refs.table1.initFunc(1)}))},searchFunc(){this.pageSize=50,this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))}}};const U=(0,V.Z)(N,[["render",y]]);var D=U},69650:function(e,t,i){i.d(t,{vC:function(){return d}});var a=i(73396),l=i(12220),n=i(57548),s=i(21178);let o;const c={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let r=(0,l.l7)({},c);function h(){const e={setup(){const{state:e,toggle:t}=(0,n.o)();return()=>(0,a.Wm)(s.Z,(0,a.dG)(e,{"onUpdate:show":t}),null)}};({instance:o}=(0,n.H)(e))}function d(e){return l._f?new Promise(((t,i)=>{o||h(),o.open((0,l.l7)({},r,e,{callback:e=>{("confirm"===e?t:i)(e)}}))})):Promise.resolve()}}}]);
//# sourceMappingURL=chunk.6732.1689576161502.js.map