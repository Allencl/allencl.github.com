"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[7117],{89337:function(e,t,l){l.d(t,{$w:function(){return u},AT:function(){return o},NM:function(){return r},ew:function(){return s},jt:function(){return a},vU:function(){return n}});var i=l(37184);const a=async(e={})=>await(0,i.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),o=async e=>await(0,i.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),n=async e=>await(0,i.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),s=async e=>await(0,i.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),r=async e=>await(0,i.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),u=async e=>await(0,i.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},2243:function(e,t,l){l.d(t,{Z:function(){return w}});var i=l(73396),a=l(87139);const o={style:{height:"98%","padding-bottom":"40px"}},n={style:{height:"100%"}},s={style:{position:"relative",top:"4px"}},r=["onClick"],u={class:"text-truncate",style:{height:"24px"}},c={key:2,class:"text-center",style:{"margin-top":"16px"}};function d(e,t,l,d,p,h){const m=(0,i.up)("van-field"),f=(0,i.up)("v-col"),w=(0,i.up)("v-btn"),k=(0,i.up)("v-row"),g=(0,i.up)("van-search"),y=(0,i.up)("van-checkbox"),b=(0,i.up)("van-popup");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(m,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:l.required,label:l.label,placeholder:l.placeholder,autocomplete:"off",type:l.multiple?"textarea":"text",onClick:h.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,i.Wm)(b,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",n,[(0,i.Wm)(k,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{cols:"6"},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,a.zw)(l.label)+"-选择框",1)])),_:1}),(0,i.Wm)(f,{cols:"6",class:"text-right"},{default:(0,i.w5)((()=>[(0,i._)("span",s,(0,a.zw)(e.BufferOption.filter((e=>e._checked)).length),1),l.selectAll?((0,i.wg)(),(0,i.j4)(w,{key:0,onClick:h.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("全选")])),_:1},8,["onClick"])):(0,i.kq)("",!0)])),_:1})])),_:1}),l.showSearch?((0,i.wg)(),(0,i.j4)(k,{key:0,"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{cols:"8"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:l.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,i.Wm)(f,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{onClick:t[2]||(t[2]=e=>h.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 查询 ")])),_:1})])),_:1}),(0,i.Wm)(f,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{onClick:t[3]||(t[3]=e=>h.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,i.kq)("",!0),e.BufferOption.length?((0,i.wg)(),(0,i.iD)("ul",{key:1,style:(0,a.j5)(`height: ${l.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.BufferOption,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,style:(0,a.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>h.checkChange(e)},[(0,i._)("p",u,(0,a.zw)(e.text),1),(0,i.Wm)(y,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,r)))),128))],4)):((0,i.wg)(),(0,i.iD)("p",c,"无数据!"))]),(0,i.Wm)(k,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 取消 ")])),_:1})])),_:1}),(0,i.Wm)(f,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{variant:"plain",color:"primary",block:"",onClick:h.confirmHandle},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}l(38862),l(73210),l(26699),l(32023);var p=l(20868),h={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:l,value:i}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i?!l:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i&&!l})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:l}=this;if(l&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),l=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!l.length)return void(0,p.LJ)("不存在！");const i=e.filter((e=>!e.text.includes(t))),a=i.filter((e=>e._checked)),o=i.filter((e=>!e._checked));this.BufferOption=l.concat(a).concat(o)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},m=l(40089);const f=(0,m.Z)(h,[["render",d]]);var w=f},67117:function(e,t,l){l.r(t),l.d(t,{default:function(){return g}});var i=l(73396),a=l(87139);const o=(0,i._)("span",{style:{"padding-left":"6px"}},"保养设备信息",-1),n={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},s=(0,i._)("span",{class:"font-weight-medium"},"工时添加",-1),r=(0,i._)("div",{style:{height:"80px"}},null,-1);function u(e,t,l,u,c,d){const p=(0,i.up)("AppBarPage"),h=(0,i.up)("v-icon"),m=(0,i.up)("v-col"),f=(0,i.up)("v-row"),w=(0,i.up)("SelectComponents"),k=(0,i.up)("van-field"),g=(0,i.up)("v-sheet"),y=(0,i.up)("v-btn");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(p),(0,i.Wm)(f,{"no-gutters":"",style:{"margin-bottom":"8px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"8"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{icon:"mdi-bullhorn",size:"16",color:"#3F51B5"}),o])),_:1}),(0,i.Wm)(m,{cols:"4",class:"text-right",style:{"padding-right":"6px"}})])),_:1}),(0,i.Wm)(f,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",n,(0,a.zw)(e.bufferRow.equipmentName),1)])),_:1})])),_:1}),(0,i.Wm)(g,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{"no-gutters":"",class:"custem-card-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"6"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{icon:"mdi-plus",size:"16",color:"primary"}),s])),_:1}),(0,i.Wm)(m,{cols:"6"})])),_:1}),(0,i.Wm)(w,{modelValue:e.user,"onUpdate:modelValue":t[0]||(t[0]=t=>e.user=t),ref:"select1",label:"维护人",required:"",option:e.repairmanSelectOption},null,8,["modelValue","option"]),(0,i.Wm)(k,{modelValue:e.time,"onUpdate:modelValue":t[1]||(t[1]=t=>e.time=t),type:"number",placeholder:"请输入",label:"维护工时（分钟）",required:"",autocomplete:"off"},null,8,["modelValue"]),(0,i.Wm)(k,{modelValue:e.content,"onUpdate:modelValue":t[2]||(t[2]=t=>e.content=t),rows:"2",autosize:"",label:"工作内容",type:"textarea",placeholder:"请输入",maxlength:"500","show-word-limit":"",required:"",autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,i.Wm)(f,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"12"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{block:"",onClick:d.onSubmit},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确认 ")])),_:1},8,["onClick"])])),_:1})])),_:1}),r])}l(73210),l(57658);var c=l(76496),d=l(2243),p=l(20868),h=l(37184),m=l(89337),f=(l(36797),{components:{AppBarPage:c.Z,SelectComponents:d.Z},data:()=>({bufferRow:{},user:"",time:"",content:"",repairmanSelectOption:[]}),created(){this.initFunc(),this.initRepairman()},methods:{initFunc(){const{row:e}=this.$route.query;this.bufferRow=JSON.parse(e)},async initRepairman(){const{data:e=[]}=await(0,m.NM)();this.repairmanSelectOption=e.map((e=>Object.assign({text:`${e.userName}-${e.nickName}`,value:e.userName}))),this.$nextTick((()=>{this.bufferRow.maintainBy&&(this.$refs.select1.setValue(this.bufferRow.maintainBy),this.time=this.bufferRow.actualDuration,this.content=this.bufferRow.workContent)}))},async onSubmit(){const{bufferRow:e,user:t,time:l,content:i}=this;if(!t)return void(0,p.LJ)("维护人必填!");if(!l.trim())return void(0,p.LJ)("维护工时必填!");if(!i.trim())return void(0,p.LJ)("工作内容必填!");const a={teWbMainTaskId:e.teWbMainTaskId,ttWbWorkhoursId:e.ttWbWorkhoursId,maintainBy:t,actualDuration:l,workContent:i},{code:o,data:n={}}=await(0,h.i)({url:"/iiot/workhours",method:e.ttWbWorkhoursId?"PUT":"post",payload:a});200==o&&((0,p.XA)("提交成功！"),this.$router.push({path:"/maintain/index",query:{tabs:2}}))}}}),w=l(40089);const k=(0,w.Z)(f,[["render",u]]);var g=k}}]);
//# sourceMappingURL=chunk.7117.1689577235749.js.map