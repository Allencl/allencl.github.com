"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[2318],{14614:function(e,t,a){a.d(t,{m:function(){return i}});var l=a(37184);const i=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:e.payload})},89337:function(e,t,a){a.d(t,{$w:function(){return c},AT:function(){return s},NM:function(){return r},ew:function(){return n},jt:function(){return i},vU:function(){return o}});var l=a(37184);const i=async(e={})=>await(0,l.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),s=async e=>await(0,l.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),o=async e=>await(0,l.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),n=async e=>await(0,l.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),r=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),c=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},5878:function(e,t,a){a.d(t,{b:function(){return l}});a(33948),a(57658);const l=(e,t,a,l)=>{let i={id:t||"id",parentId:a||"parentId",childrenList:l||"children"};var s={},o={},n=[];for(let c of e){let e=c[i.parentId];null==s[e]&&(s[e]=[]),o[c[i.id]]=c,s[e].push(c)}for(let c of e){let e=c[i.parentId];null==o[e]&&n.push(c)}for(let c of n)r(c);function r(e){if(null!==s[e[i.id]]&&(e[i.childrenList]=s[e[i.id]]),e[i.childrenList])for(let t of e[i.childrenList])r(t)}return n}},2243:function(e,t,a){a.d(t,{Z:function(){return w}});var l=a(73396),i=a(87139);const s={style:{height:"98%","padding-bottom":"40px"}},o={style:{height:"100%"}},n={style:{position:"relative",top:"4px"}},r=["onClick"],c={class:"text-truncate",style:{height:"24px"}},d={key:2,class:"text-center",style:{"margin-top":"16px"}};function u(e,t,a,u,p,h){const m=(0,l.up)("van-field"),f=(0,l.up)("v-col"),w=(0,l.up)("v-btn"),g=(0,l.up)("v-row"),k=(0,l.up)("van-search"),_=(0,l.up)("van-checkbox"),y=(0,l.up)("van-popup");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l.Wm)(m,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:a.required,label:a.label,placeholder:a.placeholder,autocomplete:"off",type:a.multiple?"textarea":"text",onClick:h.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,l.Wm)(y,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l._)("div",o,[(0,l.Wm)(g,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"6"},{default:(0,l.w5)((()=>[(0,l._)("p",null,(0,i.zw)(a.label)+"-选择框",1)])),_:1}),(0,l.Wm)(f,{cols:"6",class:"text-right"},{default:(0,l.w5)((()=>[(0,l._)("span",n,(0,i.zw)(e.BufferOption.filter((e=>e._checked)).length),1),a.selectAll?((0,l.wg)(),(0,l.j4)(w,{key:0,onClick:h.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("全选")])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),_:1})])),_:1}),a.showSearch?((0,l.wg)(),(0,l.j4)(g,{key:0,"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"8"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:a.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,l.Wm)(f,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{onClick:t[2]||(t[2]=e=>h.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 查询 ")])),_:1})])),_:1}),(0,l.Wm)(f,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{onClick:t[3]||(t[3]=e=>h.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,l.kq)("",!0),e.BufferOption.length?((0,l.wg)(),(0,l.iD)("ul",{key:1,style:(0,i.j5)(`height: ${a.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.BufferOption,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{key:t,style:(0,i.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>h.checkChange(e)},[(0,l._)("p",c,(0,i.zw)(e.text),1),(0,l.Wm)(_,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,r)))),128))],4)):((0,l.wg)(),(0,l.iD)("p",d,"无数据!"))]),(0,l.Wm)(g,{"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"6",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 取消 ")])),_:1})])),_:1}),(0,l.Wm)(f,{cols:"6",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{variant:"plain",color:"primary",block:"",onClick:h.confirmHandle},{default:(0,l.w5)((()=>[(0,l.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}a(38862),a(73210),a(26699),a(32023);var p=a(20868),h={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:a,value:l}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==l?!a:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==l&&!a})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:a}=this;if(a&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),a=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!a.length)return void(0,p.LJ)("不存在！");const l=e.filter((e=>!e.text.includes(t))),i=l.filter((e=>e._checked)),s=l.filter((e=>!e._checked));this.BufferOption=a.concat(i).concat(s)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},m=a(40089);const f=(0,m.Z)(h,[["render",u]]);var w=f},88575:function(e,t,a){a.d(t,{Z:function(){return W}});var l=a(73396),i=a(87139);const s={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},o=(0,l._)("span",null,"第",-1),n={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,l._)("span",{style:{"margin-right":"3px"}},"页",-1),c=(0,l._)("span",null,"共",-1),d={style:{"padding-left":"1px","padding-right":"1px"}},u=(0,l._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,l._)("span",null,"总",-1),h={style:{"padding-left":"1px","padding-right":"1px"}},m=(0,l._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},w={key:2,class:"text-center",style:{"padding-top":"12px"}};function g(e,t,a,g,k,_){const y=(0,l.up)("v-icon"),x=(0,l.up)("v-btn"),v=(0,l.up)("v-card");return(0,l.wg)(),(0,l.iD)("span",null,[e.paging&&a.pagingShow?((0,l.wg)(),(0,l.j4)(v,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:_.previousHandle},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{size:"28"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,l.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:_.nextHandle},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{size:"28"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,l._)("span",s,[o,(0,l._)("span",n,(0,i.zw)(e.current),1),r,c,(0,l._)("span",d,(0,i.zw)(e.page),1),u,p,(0,l._)("span",h,(0,i.zw)(e.totalNum),1),m]),(0,l._)("span",f,[a.showSearchBtn?((0,l.wg)(),(0,l.j4)(x,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:_.searchClick,variant:"plain",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{size:"24",icon:"mdi-magnify"}),(0,l.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(x,{onClick:_.refreshClick,style:(0,i.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,l.kq)("",!0),e.items.length?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:1},(0,l.Ko)(e.items,((t,a)=>(0,l.WI)(e.$slots,"tableBody",{key:a,items:t,_index:a}))),128)):((0,l.wg)(),(0,l.iD)("p",w,[(0,l.Wm)(y,{icon:"mdi-emoticon-sad-outline"}),(0,l.Uk)(" 无数据！ ")]))])}var k=a(21801),_=a(37184);var y=a(20868),x={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,y.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,y.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:a,params:l={},children:i,method:s,formatData:o}=this;if(i)return this.items=i,void(this.paging=!1);const n=(0,k.Z)((0,k.Z)({pageNum:e,pageSize:10},l),t),{code:r,total:c=0,msg:d="",data:u,rows:p}=await(0,_.i)({method:s,url:a,payload:"post"==s?n:{},url_params:"get"==s?n:{}});200==r&&(this.totalNum=c,this.current=e,this.page=Math.ceil(c/n.pageSize),this.items=o?o(u||p||[]):u||p||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},v=a(40089);const b=(0,v.Z)(x,[["render",g]]);var W=b},13537:function(e,t,a){a.r(t),a.d(t,{default:function(){return oe}});var l=a(21801),i=a(73396),s=a(87139);const o=(0,i._)("div",{style:{height:"50px"}},null,-1),n={class:"font-weight-medium text-right text-teal-lighten-1"},r={class:"font-weight-medium text",style:{color:"#00E5FF"}},c=(0,i._)("p",{class:"font-weight-medium text"},"任务流水号:",-1),d={class:"text-truncate font-weight-medium font-weight-light"},u={class:"text-truncate font-weight-light"},p={style:{color:"#00E5FF"}},h=(0,i._)("p",{class:"font-weight-medium text"},"产线:",-1),m={class:"text-truncate font-weight-medium font-weight-light"},f=(0,i._)("p",{class:"font-weight-medium text"},"报检时间:",-1),w={class:"text-truncate font-weight-medium font-weight-light"},g=(0,i._)("p",{class:"font-weight-medium text"},"报检人:",-1),k={class:"text-truncate font-weight-medium font-weight-light"},_=(0,i._)("p",{class:"font-weight-medium text"},"检验结果:",-1),y={class:"text-truncate font-weight-light",style:{"margin-top":"6px"}},x=(0,i._)("span",{class:"font-weight-medium text"},"检验数量:",-1),v=(0,i._)("p",{class:"font-weight-medium text"},"合格数量:",-1),b={class:"font-weight-medium text-right text-teal-lighten-1"},W={class:"font-weight-medium text",style:{color:"#00E5FF"}},C=(0,i._)("p",{class:"font-weight-medium text"},"任务流水号:",-1),S={class:"text-truncate font-weight-medium font-weight-light"},B={class:"text-truncate font-weight-light"},T={style:{color:"#00E5FF"}},V=(0,i._)("p",{class:"font-weight-medium text"},"产线:",-1),O={class:"text-truncate font-weight-medium font-weight-light"},F=(0,i._)("p",{class:"font-weight-medium text"},"报检时间:",-1),$={class:"text-truncate font-weight-medium font-weight-light"},q=(0,i._)("p",{class:"font-weight-medium text"},"报检人:",-1),P={class:"text-truncate font-weight-medium font-weight-light"},H=(0,i._)("p",{class:"font-weight-medium text"},"检验结果:",-1),j=(0,i._)("h3",null,"检验选择",-1),I=(0,i._)("div",{style:{height:"6px"}},null,-1),U={class:"font-weight-medium text text-teal-lighten-1"},D=(0,i._)("div",{style:{height:"20px"}},null,-1),N=(0,i._)("div",{style:{height:"16px"}},null,-1),Q=(0,i._)("div",{style:{height:"16px"}},null,-1);function z(e,t,a,z,L,A){const R=(0,i.up)("v-tab"),Z=(0,i.up)("v-tabs"),J=(0,i.up)("AppBarPage"),E=(0,i.up)("v-btn"),K=(0,i.up)("v-badge"),Y=(0,i.up)("v-col"),M=(0,i.up)("v-row"),G=(0,i.up)("van-field"),X=(0,i.up)("v-card"),ee=(0,i.up)("TableComponents"),te=(0,i.up)("v-window-item"),ae=(0,i.up)("v-window"),le=(0,i.up)("van-popup"),ie=(0,i.up)("SearchPage"),se=(0,i.up)("SearchPage2");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(J,null,{appTabs:(0,i.w5)((()=>[(0,i.Wm)(Z,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.tab=t),density:"comfortable","align-with-title":"",class:"custem-tabs-global"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{value:"1","hide-slider":""},{default:(0,i.w5)((()=>[(0,i.Uk)("待检验")])),_:1}),(0,i.Wm)(R,{value:"2","hide-slider":""},{default:(0,i.w5)((()=>[(0,i.Uk)("检验完成")])),_:1})])),_:1},8,["modelValue"])])),_:1}),o,1==e.tab?((0,i.wg)(),(0,i.j4)(E,{key:0,style:{position:"fixed",top:"220px",right:"16px","z-index":"11"},icon:"mdi-plus",color:"secondary",onClick:A.addHandle},null,8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(ae,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.tab=t)},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{value:"1",class:"v-window-item-table"},{default:(0,i.w5)((()=>["1"==e.tab?((0,i.wg)(),(0,i.j4)(ee,{key:0,ref:"table1",url:"/iiot/qmTask/list",method:"post",showSearchBtn:!0,params:(0,l.Z)({taskType:"LQC",params:{statusList:["N","R"]}},e.pageSearchConfig),formatData:e=>e.map((e=>Object.assign(e,{_taskQty:"1"}))),onSearchClick:A.searchClick},{tableBody:(0,i.w5)((e=>[(0,i.Wm)(X,null,{default:(0,i.w5)((()=>[(0,i.Wm)(M,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,i.Wm)(Y,{cols:"1"}),(0,i.Wm)(Y,{cols:"10"},{default:(0,i.w5)((()=>[(0,i._)("p",n,(0,s.zw)(A.FormatDictionary("QC_TASK_TYPE",e.items.processType)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",r,(0,s.zw)(e.items.nodeLevelNo+"-"+e.items.nodeLevelName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",d,(0,s.zw)(e.items.taskNo),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"12",class:"text-left"},{default:(0,i.w5)((()=>[(0,i._)("p",u,[(0,i.Uk)(" 任务状态: "),(0,i._)("span",p,(0,s.zw)(A.FormatDictionary("qm_task_status",e.items.taskStatus)["lable"]),1)])])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[h])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",m,(0,s.zw)(e.items.nodeLevelName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",w,(0,s.zw)(e.items.requestTime),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",k,(0,s.zw)(e.items.requestByName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[_])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[e.items.inspectResult?((0,i.wg)(),(0,i.iD)("p",{key:0,style:(0,s.j5)("color: "+("10"==e.items.inspectResult?"#43A047":"#E53935")),class:"text-truncate font-weight-light"},(0,s.zw)("10"==e.items.inspectResult?"合格":"不合格"),5)):(0,i.kq)("",!0)])),_:2},1024)])),_:2},1024),"R"==e.items.taskStatus?((0,i.wg)(),(0,i.j4)(M,{key:0,"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",y,[x,(0,i.Uk)(" "+(0,s.zw)(e.items.taskQty),1)])])),_:2},1024),(0,i.Wm)(Y,{cols:"4",class:"text-left"})])),_:2},1024)):(0,i.kq)("",!0),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[v])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i.Wm)(G,{modelValue:e.items._taskQty,"onUpdate:modelValue":t=>e.items._taskQty=t,style:{position:"relative",padding:"0px",top:"-4px"},class:"custem-input-index1",placeholder:"合格数量",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"6",class:"text-left"},{default:(0,i.w5)((()=>["R"==e.items.taskStatus&&"D"==e.items.processState?((0,i.wg)(),(0,i.j4)(E,{key:0,onClick:t=>A.accomplishClick(e),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("检验确认")])),_:2},1032,["onClick"])):(0,i.kq)("",!0)])),_:2},1024),(0,i.Wm)(Y,{cols:"6",class:"text-right"},{default:(0,i.w5)((()=>[(0,i.Wm)(E,{onClick:t=>A.detailClick(e),style:{"font-size":"20px"},color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("检验")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["params","formatData","onSearchClick"])):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(te,{value:"2",class:"v-window-item-table"},{default:(0,i.w5)((()=>["2"==e.tab?((0,i.wg)(),(0,i.j4)(ee,{key:0,ref:"table2",url:"/iiot/qmTask/list",method:"post",showSearchBtn:!0,params:(0,l.Z)({taskType:"LQC",params:{statusList:["F"]}},e.pageSearchConfig2),onSearchClick:A.searchClick2},{tableBody:(0,i.w5)((e=>[(0,i.Wm)(X,null,{default:(0,i.w5)((()=>[(0,i.Wm)(M,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(K,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,i.Wm)(Y,{cols:"1"}),(0,i.Wm)(Y,{cols:"10"},{default:(0,i.w5)((()=>[(0,i._)("p",b,(0,s.zw)(A.FormatDictionary("QC_TASK_TYPE",e.items.processType)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",W,(0,s.zw)(e.items.nodeLevelNo+"-"+e.items.nodeLevelName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[C])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",S,(0,s.zw)(e.items.taskNo),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"12",class:"text-left"},{default:(0,i.w5)((()=>[(0,i._)("p",B,[(0,i.Uk)(" 任务状态: "),(0,i._)("span",T,(0,s.zw)(A.FormatDictionary("qm_task_status",e.items.taskStatus)["lable"]),1)])])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[V])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",O,(0,s.zw)(e.items.nodeLevelName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[F])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",$,(0,s.zw)(e.items.requestTime),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[q])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",P,(0,s.zw)(e.items.requestByName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"4"},{default:(0,i.w5)((()=>[H])),_:1}),(0,i.Wm)(Y,{cols:"8"},{default:(0,i.w5)((()=>[e.items.inspectResult?((0,i.wg)(),(0,i.iD)("p",{key:0,style:(0,s.j5)("color: "+("10"==e.items.inspectResult?"#43A047":"#E53935")),class:"text-truncate font-weight-light"},(0,s.zw)("10"==e.items.inspectResult?"合格":"不合格"),5)):(0,i.kq)("",!0)])),_:2},1024)])),_:2},1024),(0,i.Wm)(M,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{cols:"6",class:"text-left"}),(0,i.Wm)(Y,{cols:"6",class:"text-right"},{default:(0,i.w5)((()=>[(0,i.Wm)(E,{onClick:t=>A.detailClick(e,"detail"),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("详情")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["params","onSearchClick"])):(0,i.kq)("",!0)])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(le,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px",height:"260px",width:"80%"},round:"",closeable:""},{default:(0,i.w5)((()=>[j,(0,i._)("div",null,[I,(0,i._)("p",U,(0,s.zw)(e.menuTopTitle),1),D,e.showBtn1?((0,i.wg)(),(0,i.j4)(E,{key:0,block:"",color:"primary",onClick:t[2]||(t[2]=e=>A.routerPush("2"))},{default:(0,i.w5)((()=>[(0,i.Uk)(" 工序检验 ")])),_:1})):(0,i.kq)("",!0),N,e.showBtn2?((0,i.wg)(),(0,i.j4)(E,{key:1,block:"",color:"indigo",onClick:t[3]||(t[3]=e=>A.routerPush("3"))},{default:(0,i.w5)((()=>[(0,i.Uk)(" 调试检验 ")])),_:1})):(0,i.kq)("",!0),Q,e.showBtn3?((0,i.wg)(),(0,i.j4)(E,{key:2,block:"",color:"purple",onClick:t[4]||(t[4]=e=>A.routerPush("4"))},{default:(0,i.w5)((()=>[(0,i.Uk)(" 入库检验 ")])),_:1})):(0,i.kq)("",!0)])])),_:1},8,["show"]),(0,i.Wm)(ie,{ref:"searchPage",onResetHandle:A.resetHandle,onSearchHandle:A.searchHandle},null,8,["onResetHandle","onSearchHandle"]),(0,i.Wm)(se,{ref:"searchPage2",onResetHandle:A.resetHandle2,onSearchHandle:A.searchHandle2},null,8,["onResetHandle","onSearchHandle"])])}a(73210),a(57658);var L=a(76496),A=a(88575),R=a(37184),Z=a(73378);const J=(0,i._)("div",{style:{height:"36px"}},null,-1),E={style:{"margin-top":"32px"}};function K(e,t,a,l,s,o){const n=(0,i.up)("van-field"),r=(0,i.up)("v-btn"),c=(0,i.up)("van-cascader"),d=(0,i.up)("van-popup"),u=(0,i.up)("v-col"),p=(0,i.up)("v-row");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(d,{show:e.drawer,"onUpdate:show":t[6]||(t[6]=t=>e.drawer=t),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,i.w5)((()=>[J,(0,i.Wm)(n,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",onClick:t[1]||(t[1]=t=>e.show=!0)},null,8,["modelValue"]),(0,i.Wm)(d,{show:e.show,"onUpdate:show":t[4]||(t[4]=t=>e.show=t),round:"",position:"bottom"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:t[2]||(t[2]=()=>e.show=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确定 ")])),_:1}),e.hideFactory?((0,i.wg)(),(0,i.j4)(c,{key:0,title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[3]||(t[3]=t=>e.show=!1),onChange:o.onFinish},null,8,["options","onChange"])):(0,i.kq)("",!0)])),_:1},8,["show"]),(0,i._)("div",E,[(0,i.Wm)(p,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:t[5]||(t[5]=()=>e.drawer=!1),density:"compact",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("关闭")])),_:1})])),_:1}),(0,i.Wm)(u,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:o.resetClick,density:"compact",color:"warning",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("重置")])),_:1},8,["onClick"])])),_:1}),(0,i.Wm)(u,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:o.searchClick,density:"compact",color:"primary",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}var Y=a(2243),M=a(89337),G=a(5878),X={components:{SelectComponents:Y.Z},emits:["searchHandle","resetHandle"],data:()=>({hideFactory:!0,drawer:!1,show:!1,fieldValue:"",options:[],factoryID:"",type:"",typeSelectOption:[],property:"",propertySelectOption:[],status:"",statusSelectOption:[]}),created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),l=a[e]||[],i=l.filter((e=>t==e.value))[0]||{};return i},resetClick(){this.fieldValue="",this.factoryID="",this.hideFactory=!1,this.$nextTick((()=>{this.hideFactory=!0})),this.$emit("resetHandle",{})},async initFunc(){const{data:e=[]}=await(0,M.jt)(),t=(0,G.b)(e,"tmBasNodeLevelId","parentId");this.options=t},async getTypeHttp(e=""){const{code:t,data:a=[]}=await(0,R.i)({url:"/iiot/abnormalType/listAbnormalTypeForSelect",method:"get",url_params:{abnormalNo:e}});200==t&&(this.typeSelectOption=a.map((e=>Object.assign({text:`${e.abnormalNo}${e.abnormalName}`,value:e.tmBasAbnormalTypeId}))))},onFinish({selectedOptions:e}){if(!e.length)return;let t=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=t,this.fieldValue=e.map((e=>e.nodeLevelName)).join("/")},searchClick(){const{factoryID:e,type:t,property:a,status:l}=this,i={tmBasNodeLevelId:e};this.$emit("searchHandle",i),this.drawer=!1},showDrawer(){this.drawer=!0}},props:{hideStatus:{type:Boolean,default:()=>!0}}},ee=a(40089);const te=(0,ee.Z)(X,[["render",K]]);var ae=te,le=(a(14614),a(20868)),ie={components:{AppBarPage:L.Z,ScanBarComponents:Z.Z,SearchPage:ae,SearchPage2:ae,TableComponents:A.Z},data:()=>({tab:"1",pageActive:"",showBtn1:!1,showBtn2:!1,showBtn3:!1,pageSearchConfig:{},pageSearchConfig2:{},menuTopTitle:"",bufferData:{},showPicker:!1}),created(){this.initHandle(),this.$root.$emitter.on("update_process_page1",((e="1")=>{this.tab=e}))},methods:{GlobalTooltipFunc(e=""){(0,le.CF)({message:e,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(e="",t=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),l=a[e]||[],i=l.filter((e=>t==e.value))[0]||{};return i},initHandle(){const{tabs:e}=this.$route.query;e&&(this.tab=e)},async barSearchClick(e=""){const t=e.trim(),{code:a,data:l=[]}=await(0,R.i)({url:"/iiot/orderSn/listOrderSnForSelect",method:"get",url_params:{sernr:t}});if(200==a){if(!l.length)return void(0,le.LJ)("SN号不存在！");this.$refs.table1.initFunc(1,{ttPpOrderSnId:(l[0]||{}).ttPpOrderSnId})}},async barSearchClick2(e=""){const t=e.trim(),{code:a,data:l=[]}=await(0,R.i)({url:"/iiot/orderSn/listOrderSnForSelect",method:"get",url_params:{sernr:t}});if(200==a){if(!l.length)return void(0,le.LJ)("SN号不存在！");this.$refs.table2.initFunc(1,{ttPpOrderSnId:(l[0]||{}).ttPpOrderSnId})}},async detailClick(e,t=""){const{items:a}=e;this.$router.push({path:"/processQualifiedProductionLine/detail4",query:{qcType:"IPQCC",isDetail:t,_pageActive:this.pageActive,ttQmTaskId:a.ttQmTaskId,_pageIndex:4}})},searchClick(){this.$refs.searchPage.showDrawer()},searchHandle(e){this.pageSearchConfig=e,this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},resetHandle(e){this.pageSearchConfig={},this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},searchClick2(){this.$refs.searchPage2.showDrawer()},searchHandle2(e){this.pageSearchConfig2=e,this.$nextTick((()=>{this.$refs.table2.initFunc(1)}))},resetHandle2(e){this.pageSearchConfig2={},this.$nextTick((()=>{this.$refs.table2.initFunc(1)}))},routerPush(e){const{bufferData:t}=this;switch(e){case"2":this.$router.push({path:"/processQualifiedProductionLine/detail2",query:{qcType:"IPQCA",_pageActive:this.pageActive,ttQmTaskId:t.ttQmTaskId,_pageIndex:2}});break;case"3":this.$router.push({path:"/processQualifiedProductionLine/detail3",query:{qcType:"IPQCB",_pageActive:this.pageActive,ttQmTaskId:t.ttQmTaskId,_pageIndex:3}});break;case"4":this.$router.push({path:"/processQualifiedProductionLine/detail4",query:{qcType:"IPQCC",_pageActive:this.pageActive,ttQmTaskId:t.ttQmTaskId,_pageIndex:4}});break;default:break}},async accomplishClick(e){const{items:t}=e,a=Number(t._taskQty||"");if(!a)return void(0,le.LJ)("合格数量必填！");if(a>Number(t.taskQty))return void(0,le.LJ)("合格数量不能大于检验数量！");const l={ttQmTaskId:t.ttQmTaskId,taskQty:t.taskQty,qualifiedQty:t.taskQty,version:t.version,acceptQty:a},{code:i,data:s={}}=await(0,R.i)({url:"/iiot/qmTask/finishQmTask",method:"post",payload:l});200==i&&((0,le.XA)("提交成功！"),this.$nextTick((()=>{this.$refs.table1.initFunc(1)})))},addHandle(){this.$router.push({path:"/processQualifiedProductionLine/add",query:{}})},detailHandle(e){}}};const se=(0,ee.Z)(ie,[["render",z]]);var oe=se}}]);
//# sourceMappingURL=chunk.2318.1689576434327.js.map