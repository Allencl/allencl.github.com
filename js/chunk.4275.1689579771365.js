"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[4275],{21472:function(e,t,a){a.d(t,{Oh:function(){return n},_w:function(){return i}});var l=a(37184);const i=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/responseWbForApp",method:"post",payload:e.payload}),n=async e=>await(0,l.i)({url:"/iiot/equipmentRepairHistory",method:"get",url_RESTful:e.url_RESTful})},89337:function(e,t,a){a.d(t,{$w:function(){return c},AT:function(){return n},NM:function(){return r},ew:function(){return s},jt:function(){return i},vU:function(){return o}});var l=a(37184);const i=async(e={})=>await(0,l.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),n=async e=>await(0,l.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),o=async e=>await(0,l.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),s=async e=>await(0,l.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),r=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),c=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},5878:function(e,t,a){a.d(t,{b:function(){return l}});a(33948),a(57658);const l=(e,t,a,l)=>{let i={id:t||"id",parentId:a||"parentId",childrenList:l||"children"};var n={},o={},s=[];for(let c of e){let e=c[i.parentId];null==n[e]&&(n[e]=[]),o[c[i.id]]=c,n[e].push(c)}for(let c of e){let e=c[i.parentId];null==o[e]&&s.push(c)}for(let c of s)r(c);function r(e){if(null!==n[e[i.id]]&&(e[i.childrenList]=n[e[i.id]]),e[i.childrenList])for(let t of e[i.childrenList])r(t)}return s}},2243:function(e,t,a){a.d(t,{Z:function(){return w}});var l=a(73396),i=a(87139);const n={style:{height:"98%","padding-bottom":"40px"}},o={style:{height:"100%"}},s={style:{position:"relative",top:"4px"}},r=["onClick"],c={class:"text-truncate",style:{height:"24px"}},u={key:2,class:"text-center",style:{"margin-top":"16px"}};function d(e,t,a,d,p,m){const h=(0,l.up)("van-field"),f=(0,l.up)("v-col"),w=(0,l.up)("v-btn"),g=(0,l.up)("v-row"),_=(0,l.up)("van-search"),y=(0,l.up)("van-checkbox"),k=(0,l.up)("van-popup");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l.Wm)(h,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:a.required,label:a.label,placeholder:a.placeholder,autocomplete:"off",type:a.multiple?"textarea":"text",onClick:m.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,l.Wm)(k,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l._)("div",o,[(0,l.Wm)(g,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"6"},{default:(0,l.w5)((()=>[(0,l._)("p",null,(0,i.zw)(a.label)+"-选择框",1)])),_:1}),(0,l.Wm)(f,{cols:"6",class:"text-right"},{default:(0,l.w5)((()=>[(0,l._)("span",s,(0,i.zw)(e.BufferOption.filter((e=>e._checked)).length),1),a.selectAll?((0,l.wg)(),(0,l.j4)(w,{key:0,onClick:m.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("全选")])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),_:1})])),_:1}),a.showSearch?((0,l.wg)(),(0,l.j4)(g,{key:0,"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"8"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:a.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,l.Wm)(f,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{onClick:t[2]||(t[2]=e=>m.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 查询 ")])),_:1})])),_:1}),(0,l.Wm)(f,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{onClick:t[3]||(t[3]=e=>m.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,l.kq)("",!0),e.BufferOption.length?((0,l.wg)(),(0,l.iD)("ul",{key:1,style:(0,i.j5)(`height: ${a.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.BufferOption,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{key:t,style:(0,i.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>m.checkChange(e)},[(0,l._)("p",c,(0,i.zw)(e.text),1),(0,l.Wm)(y,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,r)))),128))],4)):((0,l.wg)(),(0,l.iD)("p",u,"无数据!"))]),(0,l.Wm)(g,{"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"6",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 取消 ")])),_:1})])),_:1}),(0,l.Wm)(f,{cols:"6",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{variant:"plain",color:"primary",block:"",onClick:m.confirmHandle},{default:(0,l.w5)((()=>[(0,l.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}a(38862),a(73210),a(26699),a(32023);var p=a(20868),m={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:a,value:l}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==l?!a:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==l&&!a})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:a}=this;if(a&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),a=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!a.length)return void(0,p.LJ)("不存在！");const l=e.filter((e=>!e.text.includes(t))),i=l.filter((e=>e._checked)),n=l.filter((e=>!e._checked));this.BufferOption=a.concat(i).concat(n)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},h=a(40089);const f=(0,h.Z)(m,[["render",d]]);var w=f},88575:function(e,t,a){a.d(t,{Z:function(){return C}});var l=a(73396),i=a(87139);const n={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},o=(0,l._)("span",null,"第",-1),s={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,l._)("span",{style:{"margin-right":"3px"}},"页",-1),c=(0,l._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},d=(0,l._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,l._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,l._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},w={key:2,class:"text-center",style:{"padding-top":"12px"}};function g(e,t,a,g,_,y){const k=(0,l.up)("v-icon"),x=(0,l.up)("v-btn"),v=(0,l.up)("v-card");return(0,l.wg)(),(0,l.iD)("span",null,[e.paging&&a.pagingShow?((0,l.wg)(),(0,l.j4)(v,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:y.previousHandle},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{size:"28"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,l.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:y.nextHandle},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{size:"28"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,l._)("span",n,[o,(0,l._)("span",s,(0,i.zw)(e.current),1),r,c,(0,l._)("span",u,(0,i.zw)(e.page),1),d,p,(0,l._)("span",m,(0,i.zw)(e.totalNum),1),h]),(0,l._)("span",f,[a.showSearchBtn?((0,l.wg)(),(0,l.j4)(x,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:y.searchClick,variant:"plain",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{size:"24",icon:"mdi-magnify"}),(0,l.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(x,{onClick:y.refreshClick,style:(0,i.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,l.kq)("",!0),e.items.length?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:1},(0,l.Ko)(e.items,((t,a)=>(0,l.WI)(e.$slots,"tableBody",{key:a,items:t,_index:a}))),128)):((0,l.wg)(),(0,l.iD)("p",w,[(0,l.Wm)(k,{icon:"mdi-emoticon-sad-outline"}),(0,l.Uk)(" 无数据！ ")]))])}var _=a(21801),y=a(37184);var k=a(20868),x={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,k.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,k.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:a,params:l={},children:i,method:n,formatData:o}=this;if(i)return this.items=i,void(this.paging=!1);const s=(0,_.Z)((0,_.Z)({pageNum:e,pageSize:10},l),t),{code:r,total:c=0,msg:u="",data:d,rows:p}=await(0,y.i)({method:n,url:a,payload:"post"==n?s:{},url_params:"get"==n?s:{}});200==r&&(this.totalNum=c,this.current=e,this.page=Math.ceil(c/s.pageSize),this.items=o?o(d||p||[]):d||p||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},v=a(40089);const b=(0,v.Z)(x,[["render",g]]);var C=b},24275:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var l=a(21801),i=a(73396),n=a(87139);const o=(0,i._)("div",{style:{height:"50px"}},null,-1),s=(0,i._)("span",{class:"font-weight-medium"},"维修设备",-1),r={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},c=(0,i._)("p",{class:"font-weight-medium text"},"故障类型:",-1),u={class:"text-truncate font-weight-light"},d=(0,i._)("p",{class:"font-weight-medium text"},"故障位置:",-1),p={class:"text-truncate font-weight-light"},m=(0,i._)("p",{class:"font-weight-medium text"},"故障详细描述:",-1),h=["onClick"],f={class:"text-truncate font-weight-medium text"},w={class:"text-truncate font-weight-medium text"},g={class:"text-truncate font-weight-medium text"},_=(0,i._)("span",{class:"font-weight-medium"},"维修设备",-1),y={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},k=(0,i._)("p",{class:"font-weight-medium text"},"故障类型:",-1),x={class:"text-truncate font-weight-light"},v=(0,i._)("p",{class:"font-weight-medium text"},"故障位置:",-1),b={class:"text-truncate font-weight-light"},C=(0,i._)("p",{class:"font-weight-medium text"},"故障详细描述:",-1),W=["onClick"],S={class:"text-truncate font-weight-medium text"},B={class:"text-truncate font-weight-medium text"},O={class:"text-truncate font-weight-medium text"},V=(0,i._)("h3",null,"取消确认!",-1),$=(0,i._)("span",{style:{color:"#D84315",display:"block","padding-left":"22px","margin-top":"12px","margin-bottom":"22px"}},"取消后数据不可恢复，确认取消！",-1);function F(e,t,a,F,q,H){const I=(0,i.up)("v-tab"),U=(0,i.up)("v-tabs"),D=(0,i.up)("AppBarPage"),T=(0,i.up)("v-badge"),A=(0,i.up)("v-col"),j=(0,i.up)("v-row"),P=(0,i.up)("v-btn"),R=(0,i.up)("v-card"),z=(0,i.up)("TableComponents"),N=(0,i.up)("v-window-item"),L=(0,i.up)("v-window"),Z=(0,i.up)("SearchPage1"),E=(0,i.up)("SearchPage2"),J=(0,i.up)("van-field"),M=(0,i.up)("van-popup");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(D,null,{appTabs:(0,i.w5)((()=>[(0,i.Wm)(U,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.tab=t),density:"comfortable","align-with-title":"",class:"custem-tabs-global"},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{value:"1","hide-slider":""},{default:(0,i.w5)((()=>[(0,i.Uk)("当前维修任务")])),_:1}),(0,i.Wm)(I,{value:"2","hide-slider":""},{default:(0,i.w5)((()=>[(0,i.Uk)("我的维修任务")])),_:1})])),_:1},8,["modelValue"])])),_:1}),o,(0,i.Wm)(L,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.tab=t)},{default:(0,i.w5)((()=>[(0,i.Wm)(N,{value:"1",class:"v-window-item-table"},{default:(0,i.w5)((()=>["1"==e.tab?((0,i.wg)(),(0,i.j4)(z,{key:0,ref:"table1",showSearchBtn:!0,url:"/iiot/equipmentRepair/list",params:(0,l.Z)({warinState:"WM"},e.pageSearchConfig1),onSearchClick:H.searchClick1},{tableBody:(0,i.w5)((e=>[(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[(0,i.Wm)(j,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(T,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,i.Wm)(A,{cols:"5"},{default:(0,i.w5)((()=>[s])),_:1}),(0,i.Wm)(A,{cols:"1"})])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",r,(0,n.zw)(e.items.equipmentName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"4"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(A,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",u,(0,n.zw)(e.items.faultTypeCn),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"4"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(A,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",p,(0,n.zw)(e.items.faultStationCn),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"4"},{default:(0,i.w5)((()=>[m])),_:1}),(0,i.Wm)(A,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",{onClick:t=>H.GlobalTooltipFunc(`${e.items.problemDesc}`),class:"text-truncate font-weight-light"},(0,n.zw)(e.items.problemDesc),9,h)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",f,"维修类型: "+(0,n.zw)(H.FormatDictionary("equipment_repair_type",e.items.reportType)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"12",class:"text-left"},{default:(0,i.w5)((()=>[(0,i._)("p",w,"报修人: "+(0,n.zw)(e.items.reportBy),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",g,"报修时间: "+(0,n.zw)(e.items.reportTime),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"12",class:"text-right"},{default:(0,i.w5)((()=>[(0,i.Wm)(P,{onClick:t=>H.preemptClick(e),color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("抢单响应")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["params","onSearchClick"])):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(N,{value:"2",class:"v-window-item-table"},{default:(0,i.w5)((()=>["2"==e.tab?((0,i.wg)(),(0,i.j4)(z,{key:0,ref:"table2",showSearchBtn:!0,url:"/iiot/equipmentRepair/listForApp",params:(0,l.Z)({},e.pageSearchConfig2),onSearchClick:H.searchClick2},{tableBody:(0,i.w5)((e=>[(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[(0,i.Wm)(j,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(T,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,i.Wm)(A,{cols:"5"},{default:(0,i.w5)((()=>[_])),_:1}),(0,i.Wm)(A,{cols:"1"})])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",y,(0,n.zw)(e.items.equipmentName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"4"},{default:(0,i.w5)((()=>[k])),_:1}),(0,i.Wm)(A,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",x,(0,n.zw)(e.items.faultTypeCn),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"4"},{default:(0,i.w5)((()=>[v])),_:1}),(0,i.Wm)(A,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",b,(0,n.zw)(e.items.faultStationCn),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"4"},{default:(0,i.w5)((()=>[C])),_:1}),(0,i.Wm)(A,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",{onClick:t=>H.GlobalTooltipFunc(`${e.items.problemDesc}`),class:"text-truncate font-weight-light"},(0,n.zw)(e.items.problemDesc),9,W)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",S,"维修类型: "+(0,n.zw)(H.FormatDictionary("equipment_repair_type",e.items.reportType)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"12",class:"text-left"},{default:(0,i.w5)((()=>[(0,i._)("p",B,"报修人: "+(0,n.zw)(e.items.reportBy),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",O,"报修时间: "+(0,n.zw)(e.items.reportTime),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(j,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(P,{onClick:t=>H.checkExperience(e),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("查看维修经验")])),_:2},1032,["onClick"])])),_:2},1024),(0,i.Wm)(A,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(P,{onClick:t=>H.cancelMaintain(e),color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("取消维修")])),_:2},1032,["onClick"])])),_:2},1024),(0,i.Wm)(A,{cols:"4",class:"text-right"},{default:(0,i.w5)((()=>[(0,i.Wm)(P,{onClick:t=>H.equipmentMaintain(e),color:"orange mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("设备维修")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["params","onSearchClick"])):(0,i.kq)("",!0)])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Z,{ref:"searchPage1",hideStatus:!1,onResetHandle:H.resetHandle1,onSearchHandle:H.searchHandle1},null,8,["onResetHandle","onSearchHandle"]),(0,i.Wm)(E,{ref:"searchPage2",hideStatus:!1,onResetHandle:H.resetHandle2,onSearchHandle:H.searchHandle2},null,8,["onResetHandle","onSearchHandle"]),(0,i.Wm)(M,{show:e.showPicker,"onUpdate:show":t[3]||(t[3]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",width:"90%"},round:""},{default:(0,i.w5)((()=>[V,$,(0,i.Wm)(J,{modelValue:e.reasonCancellation,"onUpdate:modelValue":t[2]||(t[2]=t=>e.reasonCancellation=t),required:"",label:"取消原因",placeholder:"请输入",autocomplete:"off"},null,8,["modelValue"]),(0,i.Wm)(P,{style:{"margin-bottom":"28px","margin-top":"18px"},onClick:H.cancelReimbursement,block:"",color:"error",variant:"outlined"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 取消报修 ")])),_:1},8,["onClick"])])),_:1},8,["show"])])}a(57658),a(73210);var q=a(76496),H=a(88575),I=a(37184);const U=(0,i._)("div",{style:{height:"36px"}},null,-1),D={style:{"margin-top":"32px"}};function T(e,t,a,l,n,o){const s=(0,i.up)("van-field"),r=(0,i.up)("v-btn"),c=(0,i.up)("van-cascader"),u=(0,i.up)("van-popup"),d=(0,i.up)("v-col"),p=(0,i.up)("v-row");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(u,{show:e.drawer,"onUpdate:show":t[6]||(t[6]=t=>e.drawer=t),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,i.w5)((()=>[U,(0,i.Wm)(s,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",onClick:t[1]||(t[1]=t=>e.show=!0)},null,8,["modelValue"]),(0,i.Wm)(u,{show:e.show,"onUpdate:show":t[4]||(t[4]=t=>e.show=t),round:"",position:"bottom"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:t[2]||(t[2]=()=>e.show=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确定 ")])),_:1}),e.hideFactory?((0,i.wg)(),(0,i.j4)(c,{key:0,title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[3]||(t[3]=t=>e.show=!1),onChange:o.onFinish},null,8,["options","onChange"])):(0,i.kq)("",!0)])),_:1},8,["show"]),(0,i._)("div",D,[(0,i.Wm)(p,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:t[5]||(t[5]=()=>e.drawer=!1),density:"compact",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("关闭")])),_:1})])),_:1}),(0,i.Wm)(d,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:o.resetClick,density:"compact",color:"warning",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("重置")])),_:1},8,["onClick"])])),_:1}),(0,i.Wm)(d,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:o.searchClick,density:"compact",color:"primary",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}var A=a(2243),j=a(89337),P=a(5878),R={components:{SelectComponents:A.Z},emits:["searchHandle","resetHandle"],data:()=>({hideFactory:!0,drawer:!1,show:!1,fieldValue:"",options:[],factoryID:"",type:"",typeSelectOption:[],property:"",propertySelectOption:[],status:"",statusSelectOption:[]}),created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),l=a[e]||[],i=l.filter((e=>t==e.value))[0]||{};return i},resetClick(){this.fieldValue="",this.factoryID="",this.hideFactory=!1,this.$nextTick((()=>{this.hideFactory=!0})),this.$emit("resetHandle",{})},async initFunc(){const{data:e=[]}=await(0,j.jt)(),t=(0,P.b)(e,"tmBasNodeLevelId","parentId");this.options=t},async getTypeHttp(e=""){const{code:t,data:a=[]}=await(0,I.i)({url:"/iiot/abnormalType/listAbnormalTypeForSelect",method:"get",url_params:{abnormalNo:e}});200==t&&(this.typeSelectOption=a.map((e=>Object.assign({text:`${e.abnormalNo}${e.abnormalName}`,value:e.tmBasAbnormalTypeId}))))},onFinish({selectedOptions:e}){if(!e.length)return;let t=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=t,this.fieldValue=e.map((e=>e.nodeLevelName)).join("/")},searchClick(){const{factoryID:e,type:t,property:a,status:l}=this,i={tmBasNodeLevelId:e};this.$emit("searchHandle",i),this.drawer=!1},showDrawer(){this.drawer=!0}},props:{hideStatus:{type:Boolean,default:()=>!0}}},z=a(40089);const N=(0,z.Z)(R,[["render",T]]);var L=N,Z=a(21472),E=a(69650),J=a(20868),M={components:{AppBarPage:q.Z,SearchPage1:L,SearchPage2:L,TableComponents:H.Z},data:()=>({showPicker:!1,reasonCancellation:"",rowData:{},tab:"1",repairsPersonnel:"",pageSearchConfig1:{},pageSearchConfig2:{}}),created(){this.initFunc()},methods:{GlobalTooltipFunc(e=""){(0,J.CF)({message:e,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(e="",t=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),l=a[e]||[],i=l.filter((e=>t==e.value))[0]||{};return i},initFunc(){const{tabs:e}=this.$route.query;this.repairsPersonnel=JSON.parse(localStorage.getItem("bufferUserInfo")||"{}")["userName"],e&&(this.tab=e)},async preemptClick(e){const{items:t}=e,{code:a}=await(0,Z._w)({payload:{tmBasEquipmentId:t.tmBasEquipmentId,teAdRepairId:t.teAdRepairId}});200==a&&((0,J.XA)("提交成功！"),this.$refs["table1"].initFunc())},async checkExperience(e){const{items:t}=e;this.$router.push({path:"/equipment/maintain/experience",query:{state:"1",teAdRepairId:t.teAdRepairId,tmBasEquipmentId:t.tmBasEquipmentId}})},async cancelMaintain(e){const{items:t}=e;(0,E.vC)({title:"取消确认！",message:"取消后，数据会回到当前维修任务！",theme:"round-button",closeOnClickOverlay:!0}).then((async()=>{const{code:e,data:a={}}=await(0,I.i)({url:"/iiot/equipmentRepair/cancelRepair",method:"post",payload:{tmBasEquipmentId:t.tmBasEquipmentId,teAdRepairId:t.teAdRepairId}});200==e&&((0,J.XA)("提交成功！"),this.$refs.table2.initFunc())}))},async cancelReimbursement(){const{rowData:e}=this,t=this.reasonCancellation.trim();if(!t)return void(0,J.LJ)("取消原因必填！");const a={cancelReason:t,tmBasEquipmentId:e.tmBasEquipmentId,teAdRepairId:e.teAdRepairId},{code:l,data:i={}}=await(0,I.i)({url:"/iiot/equipmentRepair/cancelRepairWbForceForApp",method:"post",payload:a});200==l&&((0,J.XA)("提交成功！"),this.showPicker=!1,this.$refs.table2.initFunc())},async equipmentMaintain(e){const{items:t}=e;this.$router.push({path:"/equipment/maintain/detail",query:{teAdRepairId:t.teAdRepairId,filePath:t.filePath}}),setTimeout((()=>{this.$root.$emitter.emit("update_maintain_page_index")}),1500)},searchClick1(){this.$refs.searchPage1.showDrawer()},searchHandle1(e){this.pageSearchConfig1=e,this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},resetHandle1(e){this.pageSearchConfig1={},this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},searchClick2(){this.$refs.searchPage2.showDrawer()},searchHandle2(e){this.pageSearchConfig2=e,this.$nextTick((()=>{this.$refs.table2.initFunc(1)}))},resetHandle2(e){this.pageSearchConfig2={},this.$nextTick((()=>{this.$refs.table2.initFunc(1)}))}}};const G=(0,z.Z)(M,[["render",F]]);var X=G},69650:function(e,t,a){a.d(t,{vC:function(){return d}});var l=a(73396),i=a(12220),n=a(57548),o=a(21178);let s;const r={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let c=(0,i.l7)({},r);function u(){const e={setup(){const{state:e,toggle:t}=(0,n.o)();return()=>(0,l.Wm)(o.Z,(0,l.dG)(e,{"onUpdate:show":t}),null)}};({instance:s}=(0,n.H)(e))}function d(e){return i._f?new Promise(((t,a)=>{s||u(),s.open((0,i.l7)({},c,e,{callback:e=>{("confirm"===e?t:a)(e)}}))})):Promise.resolve()}}}]);
//# sourceMappingURL=chunk.4275.1689579771365.js.map