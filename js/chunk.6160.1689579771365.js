"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[6160],{89337:function(e,t,l){l.d(t,{$w:function(){return r},AT:function(){return o},NM:function(){return c},ew:function(){return n},jt:function(){return i},vU:function(){return s}});var a=l(37184);const i=async(e={})=>await(0,a.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),o=async e=>await(0,a.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),s=async e=>await(0,a.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),n=async e=>await(0,a.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),c=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),r=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},5878:function(e,t,l){l.d(t,{b:function(){return a}});l(33948),l(57658);const a=(e,t,l,a)=>{let i={id:t||"id",parentId:l||"parentId",childrenList:a||"children"};var o={},s={},n=[];for(let r of e){let e=r[i.parentId];null==o[e]&&(o[e]=[]),s[r[i.id]]=r,o[e].push(r)}for(let r of e){let e=r[i.parentId];null==s[e]&&n.push(r)}for(let r of n)c(r);function c(e){if(null!==o[e[i.id]]&&(e[i.childrenList]=o[e[i.id]]),e[i.childrenList])for(let t of e[i.childrenList])c(t)}return n}},2243:function(e,t,l){l.d(t,{Z:function(){return w}});var a=l(73396),i=l(87139);const o={style:{height:"98%","padding-bottom":"40px"}},s={style:{height:"100%"}},n={style:{position:"relative",top:"4px"}},c=["onClick"],r={class:"text-truncate",style:{height:"24px"}},u={key:2,class:"text-center",style:{"margin-top":"16px"}};function d(e,t,l,d,p,h){const m=(0,a.up)("van-field"),f=(0,a.up)("v-col"),w=(0,a.up)("v-btn"),g=(0,a.up)("v-row"),_=(0,a.up)("van-search"),k=(0,a.up)("van-checkbox"),y=(0,a.up)("van-popup");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(m,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:l.required,label:l.label,placeholder:l.placeholder,autocomplete:"off",type:l.multiple?"textarea":"text",onClick:h.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,a.Wm)(y,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",s,[(0,a.Wm)(g,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{cols:"6"},{default:(0,a.w5)((()=>[(0,a._)("p",null,(0,i.zw)(l.label)+"-选择框",1)])),_:1}),(0,a.Wm)(f,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a._)("span",n,(0,i.zw)(e.BufferOption.filter((e=>e._checked)).length),1),l.selectAll?((0,a.wg)(),(0,a.j4)(w,{key:0,onClick:h.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,a.w5)((()=>[(0,a.Uk)("全选")])),_:1},8,["onClick"])):(0,a.kq)("",!0)])),_:1})])),_:1}),l.showSearch?((0,a.wg)(),(0,a.j4)(g,{key:0,"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{cols:"8"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:l.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,a.Wm)(f,{cols:"2"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{onClick:t[2]||(t[2]=e=>h.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" 查询 ")])),_:1})])),_:1}),(0,a.Wm)(f,{cols:"2"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{onClick:t[3]||(t[3]=e=>h.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),e.BufferOption.length?((0,a.wg)(),(0,a.iD)("ul",{key:1,style:(0,i.j5)(`height: ${l.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.BufferOption,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,style:(0,i.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>h.checkChange(e)},[(0,a._)("p",r,(0,i.zw)(e.text),1),(0,a.Wm)(k,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,c)))),128))],4)):((0,a.wg)(),(0,a.iD)("p",u,"无数据!"))]),(0,a.Wm)(g,{"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{cols:"6",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 取消 ")])),_:1})])),_:1}),(0,a.Wm)(f,{cols:"6",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{variant:"plain",color:"primary",block:"",onClick:h.confirmHandle},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}l(38862),l(73210),l(26699),l(32023);var p=l(20868),h={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:l,value:a}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==a?!l:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==a&&!l})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:l}=this;if(l&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),l=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!l.length)return void(0,p.LJ)("不存在！");const a=e.filter((e=>!e.text.includes(t))),i=a.filter((e=>e._checked)),o=a.filter((e=>!e._checked));this.BufferOption=l.concat(i).concat(o)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},m=l(40089);const f=(0,m.Z)(h,[["render",d]]);var w=f},88575:function(e,t,l){l.d(t,{Z:function(){return b}});var a=l(73396),i=l(87139);const o={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},s=(0,a._)("span",null,"第",-1),n={style:{"padding-left":"1px","padding-right":"1px"}},c=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),r=(0,a._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},d=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,a._)("span",null,"总",-1),h={style:{"padding-left":"1px","padding-right":"1px"}},m=(0,a._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},w={key:2,class:"text-center",style:{"padding-top":"12px"}};function g(e,t,l,g,_,k){const y=(0,a.up)("v-icon"),x=(0,a.up)("v-btn"),v=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[e.paging&&l.pagingShow?((0,a.wg)(),(0,a.j4)(v,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:k.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:k.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",o,[s,(0,a._)("span",n,(0,i.zw)(e.current),1),c,r,(0,a._)("span",u,(0,i.zw)(e.page),1),d,p,(0,a._)("span",h,(0,i.zw)(e.totalNum),1),m]),(0,a._)("span",f,[l.showSearchBtn?((0,a.wg)(),(0,a.j4)(x,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:k.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(x,{onClick:k.refreshClick,style:(0,i.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),e.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(e.items,((t,l)=>(0,a.WI)(e.$slots,"tableBody",{key:l,items:t,_index:l}))),128)):((0,a.wg)(),(0,a.iD)("p",w,[(0,a.Wm)(y,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var _=l(21801),k=l(37184);var y=l(20868),x={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,y.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,y.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:l,params:a={},children:i,method:o,formatData:s}=this;if(i)return this.items=i,void(this.paging=!1);const n=(0,_.Z)((0,_.Z)({pageNum:e,pageSize:10},a),t),{code:c,total:r=0,msg:u="",data:d,rows:p}=await(0,k.i)({method:o,url:l,payload:"post"==o?n:{},url_params:"get"==o?n:{}});200==c&&(this.totalNum=r,this.current=e,this.page=Math.ceil(r/n.pageSize),this.items=s?s(d||p||[]):d||p||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},v=l(40089);const W=(0,v.Z)(x,[["render",g]]);var b=W},96160:function(e,t,l){l.r(t),l.d(t,{default:function(){return X}});var a=l(21801),i=l(73396),o=l(87139);const s={class:"v-window-item-table"},n={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},c={class:"font-weight-medium text"},r=(0,i._)("p",{class:"font-weight-medium text"},"遗留原因:",-1),u=["onClick"],d=(0,i._)("p",{class:"font-weight-medium text"},"状态:",-1),p={class:"text-truncate font-weight-light"},h=(0,i._)("p",{class:"font-weight-medium text"},"根本问题:",-1),m=["onClick"],f=(0,i._)("p",{class:"font-weight-medium text"},"解决措施:",-1),w=["onClick"],g=(0,i._)("p",{class:"font-weight-medium text"},"维修用时:",-1),_={class:"text-truncate font-weight-light"},k=(0,i._)("p",{class:"font-weight-medium text"},"影响时长:",-1),y={class:"text-truncate font-weight-light"},x=(0,i._)("p",{class:"font-weight-medium text"},"提报人:",-1),v={class:"text-truncate font-weight-light"},W=(0,i._)("p",{class:"font-weight-medium text"},"提报时间:",-1),b={class:"text-truncate font-weight-light"},C=(0,i._)("p",{class:"font-weight-medium text"},"遗留描述:",-1),S=["onClick"],B=(0,i._)("p",{class:"font-weight-medium text"},"处理人:",-1),V={class:"text-truncate font-weight-light"},O=(0,i._)("p",{class:"font-weight-medium text"},"处理时间:",-1),F={class:"text-truncate font-weight-light"},$=(0,i._)("p",null,"关闭确认",-1),j=(0,i._)("div",{style:{height:"12px"}},null,-1),z=(0,i._)("div",{style:{height:"12px"}},null,-1),H=(0,i._)("div",{style:{height:"12px"}},null,-1);function U(e,t,l,U,D,P){const T=(0,i.up)("AppBarPage"),N=(0,i.up)("v-badge"),R=(0,i.up)("v-col"),L=(0,i.up)("v-row"),A=(0,i.up)("v-btn"),I=(0,i.up)("v-card"),q=(0,i.up)("TableComponents"),Z=(0,i.up)("van-field"),J=(0,i.up)("van-popup"),G=(0,i.up)("SearchPage");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(T),(0,i._)("div",s,[(0,i.Wm)(q,{ref:"table1",url:"/iiot/leave/list",showSearchBtn:!0,params:(0,a.Z)({},e.pageSearchConfig),onSearchClick:P.searchClick},{tableBody:(0,i.w5)((e=>[(0,i.Wm)(I,null,{default:(0,i.w5)((()=>[(0,i.Wm)(L,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(N,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,i.Wm)(R,{cols:"3"}),(0,i.Wm)(R,{cols:"8"})])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",n,(0,o.zw)(e.items.nodeLevelName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("span",c,"设备:"+(0,o.zw)(e.items.equipmentName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[r])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",{class:"text-truncate font-weight-light",onClick:t=>P.GlobalTooltipFunc(e.items.leaveReason)},(0,o.zw)(e.items.leaveReason),9,u)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",p,(0,o.zw)(P.FormatDictionary("assay_state",e.items.leaveState)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[h])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",{class:"text-truncate font-weight-light",onClick:t=>P.GlobalTooltipFunc(e.items.rootWarin)},(0,o.zw)(e.items.rootWarin),9,m)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",{class:"text-truncate font-weight-light",onClick:t=>P.GlobalTooltipFunc(e.items.solvingMeasures)},(0,o.zw)(e.items.solvingMeasures),9,w)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",_,(0,o.zw)(e.items.repairTime)+" 分钟",1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[k])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",y,(0,o.zw)(e.items.productAffectTime)+" 分钟",1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",v,(0,o.zw)(e.items.leaveReportBy),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[W])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",b,(0,o.zw)(e.items.leaveReportDate),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[C])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",{class:"text-truncate font-weight-light",onClick:t=>P.GlobalTooltipFunc(e.items.leaveProcessReason)},(0,o.zw)(e.items.leaveProcessReason),9,S)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[B])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",V,(0,o.zw)(e.items.leaveProcessBy),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(L,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"4"},{default:(0,i.w5)((()=>[O])),_:1}),(0,i.Wm)(R,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",F,(0,o.zw)(e.items.leaveProcessDate),1)])),_:2},1024)])),_:2},1024),"10"==e.items.leaveState?((0,i.wg)(),(0,i.j4)(L,{key:0,"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{cols:"12",class:"text-right"},{default:(0,i.w5)((()=>[(0,i.Wm)(A,{onClick:t=>P.detailClick(e),color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("关闭")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)):(0,i.kq)("",!0)])),_:2},1024)])),_:1},8,["params","onSearchClick"])]),(0,i.Wm)(J,{show:e.showPicker,"onUpdate:show":t[1]||(t[1]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",width:"80%"},round:"",closeable:""},{default:(0,i.w5)((()=>[(0,i._)("div",null,[$,j,(0,i.Wm)(Z,{modelValue:e.closeReason,"onUpdate:modelValue":t[0]||(t[0]=t=>e.closeReason=t),placeholder:"请输入",type:"textarea",autocomplete:"off",label:"关闭原因",required:""},null,8,["modelValue"]),z,(0,i.Wm)(A,{onClick:P.closeAffirmFunc,color:"error mt-1",density:"compact",block:""},{default:(0,i.w5)((()=>[(0,i.Uk)("关闭")])),_:1},8,["onClick"]),H])])),_:1},8,["show"]),(0,i.Wm)(G,{ref:"searchPage",hideStatus:!1,onResetHandle:P.resetHandle,onSearchHandle:P.searchHandle},null,8,["onResetHandle","onSearchHandle"])])}l(73210);var D=l(76496),P=l(88575);const T=(0,i._)("div",{style:{height:"36px"}},null,-1),N={style:{"margin-top":"32px"}};function R(e,t,l,a,o,s){const n=(0,i.up)("van-field"),c=(0,i.up)("v-btn"),r=(0,i.up)("van-cascader"),u=(0,i.up)("van-popup"),d=(0,i.up)("v-col"),p=(0,i.up)("v-row");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(u,{show:e.drawer,"onUpdate:show":t[6]||(t[6]=t=>e.drawer=t),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,i.w5)((()=>[T,(0,i.Wm)(n,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",onClick:t[1]||(t[1]=t=>e.show=!0)},null,8,["modelValue"]),(0,i.Wm)(u,{show:e.show,"onUpdate:show":t[4]||(t[4]=t=>e.show=t),round:"",position:"bottom"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:t[2]||(t[2]=()=>e.show=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确定 ")])),_:1}),e.hideFactory?((0,i.wg)(),(0,i.j4)(r,{key:0,title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[3]||(t[3]=t=>e.show=!1),onChange:s.onFinish},null,8,["options","onChange"])):(0,i.kq)("",!0)])),_:1},8,["show"]),(0,i._)("div",N,[(0,i.Wm)(p,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:t[5]||(t[5]=()=>e.drawer=!1),density:"compact",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("关闭")])),_:1})])),_:1}),(0,i.Wm)(d,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:s.resetClick,density:"compact",color:"warning",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("重置")])),_:1},8,["onClick"])])),_:1}),(0,i.Wm)(d,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:s.searchClick,density:"compact",color:"primary",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}var L=l(2243),A=l(37184),I=l(89337),q=l(5878),Z={components:{SelectComponents:L.Z},emits:["searchHandle","resetHandle"],data:()=>({hideFactory:!0,drawer:!1,show:!1,fieldValue:"",options:[],factoryID:"",type:"",typeSelectOption:[],property:"",propertySelectOption:[],status:"",statusSelectOption:[]}),created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=l[e]||[],i=a.filter((e=>t==e.value))[0]||{};return i},resetClick(){this.fieldValue="",this.factoryID="",this.hideFactory=!1,this.$nextTick((()=>{this.hideFactory=!0})),this.$emit("resetHandle",{})},async initFunc(){const{data:e=[]}=await(0,I.jt)(),t=(0,q.b)(e,"tmBasNodeLevelId","parentId");this.options=t},async getTypeHttp(e=""){const{code:t,data:l=[]}=await(0,A.i)({url:"/iiot/abnormalType/listAbnormalTypeForSelect",method:"get",url_params:{abnormalNo:e}});200==t&&(this.typeSelectOption=l.map((e=>Object.assign({text:`${e.abnormalNo}${e.abnormalName}`,value:e.tmBasAbnormalTypeId}))))},onFinish({selectedOptions:e}){if(!e.length)return;let t=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=t,this.fieldValue=e.map((e=>e.nodeLevelName)).join("/")},searchClick(){const{factoryID:e,type:t,property:l,status:a}=this,i={tmBasNodeLevelId:e};this.$emit("searchHandle",i),this.drawer=!1},showDrawer(){this.drawer=!0}},props:{hideStatus:{type:Boolean,default:()=>!0}}},J=l(40089);const G=(0,J.Z)(Z,[["render",R]]);var M=G,E=l(20868),K={components:{AppBarPage:D.Z,SearchPage:M,TableComponents:P.Z},data:()=>({pageSearchConfig:{},showPicker:!1,bufferRow:{},closeReason:""}),methods:{GlobalTooltipFunc(e=""){(0,E.CF)({message:e,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=l[e]||[],i=a.filter((e=>t==e.value))[0]||{};return i},async detailClick(e){const{items:t}=e;this.showPicker=!0,this.bufferRow=t,this.closeReason=""},async closeAffirmFunc(){const{bufferRow:e}=this;if(!this.closeReason.trim())return void(0,E.LJ)("关闭原因必填！");const t={tmEquipmentLeaveId:e.tmEquipmentLeaveId,leaveProcessReason:this.closeReason},{code:l,data:a={}}=await(0,A.i)({url:"/iiot/leave/closeLeave",method:"put",payload:t});200==l&&((0,E.XA)("提交成功！"),this.$refs.table1.initFunc(),this.showPicker=!1)},searchClick(){this.$refs.searchPage.showDrawer()},searchHandle(e){this.pageSearchConfig=e,this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},resetHandle(e){this.pageSearchConfig={},this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))}}};const Y=(0,J.Z)(K,[["render",U]]);var X=Y}}]);
//# sourceMappingURL=chunk.6160.1689579771365.js.map