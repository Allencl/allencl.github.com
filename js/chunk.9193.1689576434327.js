"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[9193],{2243:function(e,t,l){l.d(t,{Z:function(){return g}});var a=l(73396),i=l(87139);const s={style:{height:"98%","padding-bottom":"40px"}},o={style:{height:"100%"}},n={style:{position:"relative",top:"4px"}},r=["onClick"],d={class:"text-truncate",style:{height:"24px"}},u={key:2,class:"text-center",style:{"margin-top":"16px"}};function c(e,t,l,c,p,h){const m=(0,a.up)("van-field"),f=(0,a.up)("v-col"),g=(0,a.up)("v-btn"),w=(0,a.up)("v-row"),y=(0,a.up)("van-search"),_=(0,a.up)("van-checkbox"),x=(0,a.up)("van-popup");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(m,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:l.required,label:l.label,placeholder:l.placeholder,autocomplete:"off",type:l.multiple?"textarea":"text",onClick:h.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,a.Wm)(x,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("div",o,[(0,a.Wm)(w,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{cols:"6"},{default:(0,a.w5)((()=>[(0,a._)("p",null,(0,i.zw)(l.label)+"-选择框",1)])),_:1}),(0,a.Wm)(f,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a._)("span",n,(0,i.zw)(e.BufferOption.filter((e=>e._checked)).length),1),l.selectAll?((0,a.wg)(),(0,a.j4)(g,{key:0,onClick:h.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,a.w5)((()=>[(0,a.Uk)("全选")])),_:1},8,["onClick"])):(0,a.kq)("",!0)])),_:1})])),_:1}),l.showSearch?((0,a.wg)(),(0,a.j4)(w,{key:0,"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{cols:"8"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:l.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,a.Wm)(f,{cols:"2"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{onClick:t[2]||(t[2]=e=>h.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" 查询 ")])),_:1})])),_:1}),(0,a.Wm)(f,{cols:"2"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{onClick:t[3]||(t[3]=e=>h.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),e.BufferOption.length?((0,a.wg)(),(0,a.iD)("ul",{key:1,style:(0,i.j5)(`height: ${l.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.BufferOption,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,style:(0,i.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>h.checkChange(e)},[(0,a._)("p",d,(0,i.zw)(e.text),1),(0,a.Wm)(_,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,r)))),128))],4)):((0,a.wg)(),(0,a.iD)("p",u,"无数据!"))]),(0,a.Wm)(w,{"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{cols:"6",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 取消 ")])),_:1})])),_:1}),(0,a.Wm)(f,{cols:"6",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{variant:"plain",color:"primary",block:"",onClick:h.confirmHandle},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}l(38862),l(73210),l(26699),l(32023);var p=l(20868),h={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:l,value:a}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==a?!l:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==a&&!l})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:l}=this;if(l&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),l=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!l.length)return void(0,p.LJ)("不存在！");const a=e.filter((e=>!e.text.includes(t))),i=a.filter((e=>e._checked)),s=a.filter((e=>!e._checked));this.BufferOption=l.concat(i).concat(s)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},m=l(40089);const f=(0,m.Z)(h,[["render",c]]);var g=f},88575:function(e,t,l){l.d(t,{Z:function(){return v}});var a=l(73396),i=l(87139);const s={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},o=(0,a._)("span",null,"第",-1),n={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),d=(0,a._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},c=(0,a._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,a._)("span",null,"总",-1),h={style:{"padding-left":"1px","padding-right":"1px"}},m=(0,a._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(e,t,l,w,y,_){const x=(0,a.up)("v-icon"),b=(0,a.up)("v-btn"),W=(0,a.up)("v-card");return(0,a.wg)(),(0,a.iD)("span",null,[e.paging&&l.pagingShow?((0,a.wg)(),(0,a.j4)(W,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:_.previousHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(b,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:_.nextHandle},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"28"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,a._)("span",s,[o,(0,a._)("span",n,(0,i.zw)(e.current),1),r,d,(0,a._)("span",u,(0,i.zw)(e.page),1),c,p,(0,a._)("span",h,(0,i.zw)(e.totalNum),1),m]),(0,a._)("span",f,[l.showSearchBtn?((0,a.wg)(),(0,a.j4)(b,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:_.searchClick,variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{size:"24",icon:"mdi-magnify"}),(0,a.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(b,{onClick:_.refreshClick,style:(0,i.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,a.kq)("",!0),e.items.length?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(e.items,((t,l)=>(0,a.WI)(e.$slots,"tableBody",{key:l,items:t,_index:l}))),128)):((0,a.wg)(),(0,a.iD)("p",g,[(0,a.Wm)(x,{icon:"mdi-emoticon-sad-outline"}),(0,a.Uk)(" 无数据！ ")]))])}var y=l(21801),_=l(37184);var x=l(20868),b={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,x.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,x.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:l,params:a={},children:i,method:s,formatData:o}=this;if(i)return this.items=i,void(this.paging=!1);const n=(0,y.Z)((0,y.Z)({pageNum:e,pageSize:10},a),t),{code:r,total:d=0,msg:u="",data:c,rows:p}=await(0,_.i)({method:s,url:l,payload:"post"==s?n:{},url_params:"get"==s?n:{}});200==r&&(this.totalNum=d,this.current=e,this.page=Math.ceil(d/n.pageSize),this.items=o?o(c||p||[]):c||p||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},W=l(40089);const k=(0,W.Z)(b,[["render",w]]);var v=k},9193:function(e,t,l){l.r(t),l.d(t,{default:function(){return ce}});var a=l(73396),i=l(87139),s=l(49242);const o=(0,a._)("p",{class:"font-weight-medium text"},"检验产品:",-1),n={class:"text-truncate font-weight-light"},r=(0,a._)("p",{class:"font-weight-medium text"},"配送单号:",-1),d={class:"text-truncate font-weight-light"},u=(0,a._)("p",{class:"font-weight-medium text"},"批次号:",-1),c={class:"text-truncate font-weight-light"},p=(0,a._)("p",{class:"font-weight-medium text"},"供应商信息:",-1),h={class:"text-truncate font-weight-light"},m=(0,a._)("p",{class:"font-weight-medium text"},"检验类型:",-1),f={class:"text-truncate font-weight-light"},g={class:"text-truncate font-weight-light"},w=(0,a._)("span",{class:"font-weight-medium text"},"检验数量: ",-1),y={class:"text-truncate font-weight-light",style:{color:"#00E5FF"}},_={class:"font-weight-medium",style:{color:"#00E5FF"}},x=(0,a._)("p",{class:"font-weight-medium text"},"检验标准:",-1),b={class:"text-truncate font-weight-light"},W=(0,a._)("p",{class:"font-weight-medium text"},"测量结果:",-1),k={class:"text-truncate font-weight-light"},v=(0,a._)("p",{class:"font-weight-medium text"},"判定结果:",-1),V={class:"text-truncate font-weight-light"},P=(0,a._)("p",{class:"font-weight-medium text input-lable",style:{"margin-top":"15px"}},"不合格描述:",-1),C=(0,a._)("div",{style:{height:"16px"}},null,-1),S=(0,a._)("span",{class:"font-weight-medium"},"质量工程师意见",-1),B=(0,a._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),O=(0,a._)("p",{class:"font-weight-medium text"},"处理人:",-1),q={class:"text-truncate font-weight-light"},D=(0,a._)("p",{class:"font-weight-medium text"},"处理时间:",-1),L={class:"text-truncate font-weight-light"},U=(0,a._)("p",{class:"font-weight-medium text"},"下发到技术:",-1),$=(0,a._)("span",{class:"font-weight-medium"},"技术人员意见",-1),z=(0,a._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),T=(0,a._)("p",{class:"font-weight-medium text"},"处理人:",-1),F={class:"text-truncate font-weight-light"},j=(0,a._)("p",{class:"font-weight-medium text"},"处理时间:",-1),R={class:"text-truncate font-weight-light"},M=(0,a._)("p",{class:"font-weight-medium text"},"下发到采购:",-1),N=(0,a._)("span",{class:"font-weight-medium"},"采购部门处理意见",-1),I=(0,a._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),H=(0,a._)("p",{class:"font-weight-medium text"},"处理人:",-1),Q={class:"text-truncate font-weight-light"},A=(0,a._)("p",{class:"font-weight-medium text"},"处理时间:",-1),J={class:"text-truncate font-weight-light"},E=(0,a._)("p",{class:"font-weight-medium text"},"下发到处理部门:",-1),Z=(0,a._)("span",{class:"font-weight-medium"},"部长意见",-1),X=(0,a._)("span",{class:"font-weight-medium",style:{color:"#B71C1C"}},"不可编辑",-1),K=(0,a._)("p",{class:"font-weight-medium text"},"处理人:",-1),Y={class:"text-truncate font-weight-light"},G=(0,a._)("p",{class:"font-weight-medium text"},"处理时间:",-1),ee={class:"text-truncate font-weight-light"},te=(0,a._)("div",{style:{height:"60px"}},null,-1);function le(e,t,l,le,ae,ie){const se=(0,a.up)("AppBarPage"),oe=(0,a.up)("v-col"),ne=(0,a.up)("v-row"),re=(0,a.up)("v-sheet"),de=(0,a.up)("v-badge"),ue=(0,a.up)("van-field"),ce=(0,a.up)("v-card"),pe=(0,a.up)("TableComponents"),he=(0,a.up)("v-icon"),me=(0,a.up)("SelectComponents"),fe=(0,a.up)("v-switch"),ge=(0,a.up)("v-btn");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(se),(0,a.Wm)(re,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4"},{default:(0,a.w5)((()=>[o])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",n,(0,i.zw)(e.bufferRow.partNo)+"-"+(0,i.zw)(e.bufferRow.partName),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4"},{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",d,(0,i.zw)(e.bufferRow.receiptNo),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",c,(0,i.zw)(e.bufferRow.batchNo),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4"},{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",h,(0,i.zw)(e.bufferRow.supperName),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",f,(0,i.zw)(ie.FormatDictionary("test_type",e.bufferRow.taskType)["lable"]),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"6"},{default:(0,a.w5)((()=>[(0,a._)("p",g,[w,(0,a.Uk)(" "+(0,i.zw)(e.bufferRow.taskQty),1)])])),_:1}),(0,a.Wm)(oe,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a._)("p",y,[(0,a.Uk)(" 状态: "),(0,a._)("span",null,(0,i.zw)(ie.FormatDictionary("qm_defect_status",e.bufferRow.defectStatus)["lable"]),1)])])),_:1})])),_:1})])),_:1}),(0,a.Wm)(re,{class:"v-window-item-table"},{default:(0,a.w5)((()=>[(0,a.Wm)(pe,{ref:"table1",children:e.tableList,pagingShow:!1},{tableBody:(0,a.w5)((t=>[(0,a.Wm)(ce,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ne,{"no-gutters":"",class:"table-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"1"},{default:(0,a.w5)((()=>[(0,a.Wm)(de,{content:t._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,a.Wm)(oe,{cols:"10"}),(0,a.Wm)(oe,{cols:"1",class:"text-right"})])),_:2},1024),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",_,"类别: "+(0,i.zw)(t.items.inspectDetailName),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4"},{default:(0,a.w5)((()=>[x])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",b,(0,i.zw)(t.items.parameterRange),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4"},{default:(0,a.w5)((()=>[W])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",k,(0,i.zw)(t.items.resultValue),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4"},{default:(0,a.w5)((()=>[v])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",V,(0,i.zw)(t.items.inspectResult),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"2px"}},{default:(0,a.w5)((()=>[P])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a.Wm)(ue,{modelValue:t.items.reasonDesc,"onUpdate:modelValue":e=>t.items.reasonDesc=e,disabled:e.readonlyPage,style:{"padding-left":"0px"},class:"custem-input-index1",autocomplete:"off",placeholder:"请输入描述"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["children"])])),_:1}),C,e.showLi1?((0,a.wg)(),(0,a.j4)(re,{key:0,elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(ne,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(he,{icon:"mdi-file-edit-outline",size:"16",color:"primary"}),S])),_:1}),(0,a.wy)((0,a.Wm)(oe,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(he,{large:"",color:"error"},{default:(0,a.w5)((()=>[(0,a.Uk)(" mdi-alert ")])),_:1}),B])),_:1},512),[[s.F8,e.readonlyPage||e.readonlyPage11]])])),_:1}),(0,a.Wm)(me,{modelValue:e.result1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.result1=t),ref:"select11",label:"处理结果",required:"",disabled:e.readonlyPage||e.readonlyPage11,option:e.result1SelectOption},null,8,["modelValue","disabled","option"]),(0,a.Wm)(me,{modelValue:e.type,"onUpdate:modelValue":t[1]||(t[1]=t=>e.type=t),ref:"select111",label:"不良类别",disabled:e.readonlyPage||e.readonlyPage11,option:e.typeSelectOption},null,8,["modelValue","disabled","option"]),(0,a.Wm)(ue,{modelValue:e.opinion1,"onUpdate:modelValue":t[2]||(t[2]=t=>e.opinion1=t),disabled:e.readonlyPage||e.readonlyPage11,autocomplete:"off",label:"处理意见",placeholder:"请输入描述"},null,8,["modelValue","disabled"]),(0,a.Wm)(ne,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[O])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",q,(0,i.zw)(e.bufferRow.qualityEngineerBy),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text",style:{"margin-bottom":"14px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[D])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",L,(0,i.zw)(e.bufferRow.qualityEngineerTime),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[U])),_:1}),(0,a.Wm)(oe,{cols:"4",style:{"text-align":"right"}},{default:(0,a.w5)((()=>[(0,a.Wm)(fe,{modelValue:e._switch11,"onUpdate:modelValue":t[3]||(t[3]=t=>e._switch11=t),label:e._switch11?"是":"否",color:"primary",density:"comfortable",disabled:e.readonlyPage||e.readonlyPage11,style:{top:"-12px",left:"0px",position:"relative",height:"48px",display:"block",width:"104px"}},null,8,["modelValue","label","disabled"])])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"12",style:{"text-align":"right"}},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(ge,{color:"warning",disabled:e.readonlyPage||e.readonlyPage11,onClick:ie.submitQuality},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["disabled","onClick"]),[[s.F8,ie.ControlBtnPermission("iiot:*:qualityEngineerForm")]])])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),e.showLi2?((0,a.wg)(),(0,a.j4)(re,{key:1,elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(ne,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(he,{icon:"mdi-file-edit-outline",size:"16",color:"primary"}),$])),_:1}),(0,a.wy)((0,a.Wm)(oe,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(he,{large:"",color:"error"},{default:(0,a.w5)((()=>[(0,a.Uk)(" mdi-alert ")])),_:1}),z])),_:1},512),[[s.F8,e.readonlyPage||e.readonlyPage22]])])),_:1}),(0,a.Wm)(me,{modelValue:e.result2,"onUpdate:modelValue":t[4]||(t[4]=t=>e.result2=t),ref:"select66",label:"处理结果",required:"",disabled:e.readonlyPage||e.readonlyPage22,option:e.result2SelectOption},null,8,["modelValue","disabled","option"]),(0,a.Wm)(ue,{modelValue:e.opinion2,"onUpdate:modelValue":t[5]||(t[5]=t=>e.opinion2=t),disabled:e.readonlyPage||e.readonlyPage22,autocomplete:"off",label:"处理意见",placeholder:"请输入描述"},null,8,["modelValue","disabled"]),(0,a.Wm)(ne,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[T])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",F,(0,i.zw)(e.bufferRow.technologyBy),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text",style:{"margin-bottom":"14px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[j])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",R,(0,i.zw)(e.bufferRow.technologyTime),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"5",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[M])),_:1}),(0,a.Wm)(oe,{cols:"6",style:{"text-align":"right"}},{default:(0,a.w5)((()=>[(0,a.Wm)(fe,{modelValue:e._switch22,"onUpdate:modelValue":t[6]||(t[6]=t=>e._switch22=t),label:e._switch22?"是":"否",color:"primary",density:"comfortable",disabled:e.readonlyPage||e.readonlyPage22,style:{top:"-12px",left:"0px",position:"relative",height:"48px",display:"block",width:"104px"}},null,8,["modelValue","label","disabled"])])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"12",style:{"text-align":"right"}},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(ge,{color:"warning",disabled:e.readonlyPage||e.readonlyPage22,onClick:ie.submitTechnology},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["disabled","onClick"]),[[s.F8,ie.ControlBtnPermission("iiot:*:technologyForm")]])])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),e.showLi3?((0,a.wg)(),(0,a.j4)(re,{key:2,elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(ne,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(he,{icon:"mdi-cart-minus",size:"16",color:"primary"}),N])),_:1}),(0,a.wy)((0,a.Wm)(oe,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(he,{large:"",color:"error"},{default:(0,a.w5)((()=>[(0,a.Uk)(" mdi-alert ")])),_:1}),I])),_:1},512),[[s.F8,e.readonlyPage||e.readonlyPage33]])])),_:1}),(0,a.Wm)(me,{modelValue:e.result7,"onUpdate:modelValue":t[7]||(t[7]=t=>e.result7=t),ref:"select99",label:"处理结果",required:"",disabled:e.readonlyPage||e.readonlyPage33,option:e.result2SelectOption},null,8,["modelValue","disabled","option"]),(0,a.Wm)(ue,{modelValue:e.opinion7,"onUpdate:modelValue":t[8]||(t[8]=t=>e.opinion7=t),disabled:e.readonlyPage||e.readonlyPage33,autocomplete:"off",label:"处理意见",placeholder:"请输入描述"},null,8,["modelValue","disabled"]),(0,a.Wm)(ne,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[H])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",Q,(0,i.zw)(e.bufferRow.purchaseBy),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text",style:{"margin-bottom":"14px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[A])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",J,(0,i.zw)(e.bufferRow.purchaseTime),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"5",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[E])),_:1}),(0,a.Wm)(oe,{cols:"6",style:{"text-align":"right"}},{default:(0,a.w5)((()=>[(0,a.Wm)(fe,{modelValue:e._switch77,"onUpdate:modelValue":t[9]||(t[9]=t=>e._switch77=t),label:e._switch77?"是":"否",color:"primary",density:"comfortable",disabled:e.readonlyPage||e.readonlyPage33,style:{top:"-12px",left:"0px",position:"relative",height:"48px",display:"block",width:"104px"}},null,8,["modelValue","label","disabled"])])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"12",style:{"text-align":"right"}},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(ge,{color:"warning",disabled:e.readonlyPage||e.readonlyPage33,onClick:ie.submitPurchase},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["disabled","onClick"]),[[s.F8,ie.ControlBtnPermission("iiot:*:purchaseCommit")]])])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),e.showLi4?((0,a.wg)(),(0,a.j4)(re,{key:3,elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(ne,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(he,{icon:"mdi-file-edit-outline",size:"16",color:"primary"}),Z])),_:1}),(0,a.wy)((0,a.Wm)(oe,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(he,{large:"",color:"error"},{default:(0,a.w5)((()=>[(0,a.Uk)(" mdi-alert ")])),_:1}),X])),_:1},512),[[s.F8,e.readonlyPage]])])),_:1}),(0,a.Wm)(me,{modelValue:e.result3,"onUpdate:modelValue":t[10]||(t[10]=t=>e.result3=t),ref:"select77",label:"处理结果",required:"",disabled:e.readonlyPage,option:e.result3SelectOption},null,8,["modelValue","disabled","option"]),(0,a.Wm)(ue,{modelValue:e.opinion3,"onUpdate:modelValue":t[11]||(t[11]=t=>e.opinion3=t),disabled:e.readonlyPage,autocomplete:"off",label:"处理意见",placeholder:"请输入描述"},null,8,["modelValue","disabled"]),(0,a.Wm)(ne,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[K])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",Y,(0,i.zw)(e.bufferRow.qualityMinisterBy),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text",style:{"margin-bottom":"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"4",style:{"padding-left":"5px"}},{default:(0,a.w5)((()=>[G])),_:1}),(0,a.Wm)(oe,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",ee,(0,i.zw)(e.bufferRow.qualityMinisterTime),1)])),_:1})])),_:1}),(0,a.Wm)(ne,{"no-gutters":"",class:"text",style:{"text-align":"right"}},{default:(0,a.w5)((()=>[(0,a.Wm)(oe,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(ge,{color:"warning",disabled:e.readonlyPage,onClick:ie.submitMinister},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["disabled","onClick"]),[[s.F8,ie.ControlBtnPermission("iiot:*:qualityMinisterForm")]])])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),te])}l(57658);var ae=l(76496),ie=l(88575),se=l(2243),oe=l(37184),ne=l(20868),re={components:{AppBarPage:ae.Z,SelectComponents:se.Z,TableComponents:ie.Z},data:()=>({bufferRow:{},_switch11:!1,_switch22:!1,tableList:[],result1:"",result1SelectOption:[],opinion1:"",result2:"",result2SelectOption:[],opinion2:"",result3:"",result3SelectOption:[],opinion3:"",result7:"",opinion7:"",_switch77:!1,type:"",typeSelectOption:[],showLi1:!1,showLi2:!1,showLi3:!1,showLi4:!1,readonlyPage:!0,readonlyPage11:!1,readonlyPage22:!1,readonlyPage33:!1}),created(){this.initFunc(),this.typeHTTP()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=l[e]||[],i=a.filter((e=>t==e.value))[0]||{};return i},ControlBtnPermission(e=""){const t="/qualityMaterialDisqualification/index",l=JSON.parse(localStorage.getItem("bufferGlobalBtnPermission")||{});(l[t]||[]).filter((t=>t.perms==e)).length;return!0},async initFunc(){const{ttQmDefectId:e}=this.$route.query,t=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),l=t["defect_process_type"]||[];this.result1SelectOption=l.map((e=>Object.assign({text:e.lable,value:e.value}))),this.result2SelectOption=l.map((e=>Object.assign({text:e.lable,value:e.value}))),this.result3SelectOption=l.map((e=>Object.assign({text:e.lable,value:e.value})));const{code:a,data:i={}}=await(0,oe.i)({url:`/iiot/qmDefect/${e}`,method:"get"});if(200==a){switch(this.bufferRow=i,i.defectStatus){case"11":this.showLi1=!0,this.showLi2=!1,this.showLi3=!1,this.showLi4=!1,this.readonlyPage=!1;break;case"21":this.showLi1=!0,this.showLi2=!0,this.showLi3=!1,this.showLi4=!1,this.readonlyPage=!1,this.readonlyPage11=!0;break;case"31":this.showLi1=!0,this.showLi2=!0,this.showLi3=!0,this.showLi4=!1,this.readonlyPage=!1,this.readonlyPage11=!0,this.readonlyPage22=!0;break;case"41":this.showLi1=!0,this.showLi2=!0,this.showLi3=!0,this.showLi4=!0,this.readonlyPage=!1,this.readonlyPage11=!0,this.readonlyPage22=!0,this.readonlyPage33=!0;break;case"90":this.showLi1=!0,this.showLi2=!0,this.showLi3=!0,this.showLi4=!0,this.readonlyPage=!0;break;default:break}this.result1=i.qualityEngineerType,this._switch11="1"==i.issueTechnology,this.type=i.tmBasReasonId,this.opinion1=i.qualityEngineerD||"",this.result2=i.technologyType,this._switch22="1"==i.issuePurchase,this.opinion2=i.technologyD||"",this.result7=i.purchaseType,this._switch77="1"==i.issueQualityMinister,this.opinion7=i.purchaseD||"",this.result3=i.qualityMinisterType,this.opinion3=i.qualityMinisterD||"",setTimeout((()=>{this.$refs.select11&&this.$refs.select11.setValue(i.qualityEngineerType),this.$refs.select66&&this.$refs.select66.setValue(i.technologyType),this.$refs.select99&&this.$refs.select99.setValue(i.purchaseType),this.$refs.select77&&this.$refs.select77.setValue(i.qualityMinisterType)}),1e3)}const s=await(0,oe.i)({url:"/iiot/qmDefectDetail/list",method:"get",url_params:{ttQmDefectId:e}});200==s.code&&(this.tableList=s.data||[],this.$nextTick((()=>{this.$refs.table1&&this.$refs.table1.initFunc()})))},async typeHTTP(){const{code:e,data:t=[]}=await(0,oe.i)({url:"/iiot/reason/list",method:"post",payload:{reasonNo:"",params:{reasonTypeList:["MS","F"]}}});200==e&&(this.typeSelectOption=t.map((e=>Object.assign({text:e.reasonNo+"-"+e.reasonName,value:e.tmBasReasonId}))),setTimeout((()=>{this.$refs.select111&&this.$refs.select111.setValue(this.bufferRow.tmBasReasonId)}),1e3))},async submitQuality(){const{bufferRow:e}=this,t={qualityEngineerType:this.result1,issueTechnology:this._switch11?"1":"0",tmBasReasonId:this.type,qualityEngineerD:this.opinion1,dataList:this.tableList,ttQmDefectId:e.ttQmDefectId};if(!this.result1)return void(0,ne.LJ)("处理结果必选！");const{code:l,data:a={}}=await(0,oe.i)({url:"/iiot/qmDefect/qualityEngineerDefect",method:"post",payload:t});200==l&&((0,ne.XA)("提交成功！"),this.$router.push({path:"/qualityMaterial/index",query:{}}))},async submitTechnology(){const{bufferRow:e}=this,t={technologyType:this.result2,issuePurchase:this._switch22?"1":"0",technologyD:this.opinion2,ttQmDefectId:e.ttQmDefectId};if(!this.result2)return void(0,ne.LJ)("处理结果必选！");const{code:l,data:a={}}=await(0,oe.i)({url:"/iiot/qmDefect/technologyDefect",method:"post",payload:t});200==l&&((0,ne.XA)("提交成功！"),this.$router.push({path:"/qualityMaterial/index",query:{}}))},async submitPurchase(){const{bufferRow:e}=this,t={purchaseType:this.result7,issueQualityMinister:this._switch77?"1":"0",purchaseD:this.opinion7,ttQmDefectId:e.ttQmDefectId};if(!this.result7)return void(0,ne.LJ)("处理结果必选！");const{code:l,data:a={}}=await(0,oe.i)({url:"/iiot/qmDefect/purchaseCommit",method:"post",payload:t});200==l&&((0,ne.XA)("提交成功！"),this.$router.push({path:"/qualityMaterial/index",query:{}}))},async submitMinister(){const{bufferRow:e}=this,t={qualityMinisterType:this.result3,qualityMinisterD:this.opinion3,ttQmDefectId:e.ttQmDefectId};if(!this.result3)return void(0,ne.LJ)("处理结果必选！");const{code:l,data:a={}}=await(0,oe.i)({url:"/iiot/qmDefect/qualityMinisterDefect",method:"post",payload:t});200==l&&((0,ne.XA)("提交成功！"),this.$router.push({path:"/qualityMaterial/index",query:{}}))}}},de=l(40089);const ue=(0,de.Z)(re,[["render",le]]);var ce=ue}}]);
//# sourceMappingURL=chunk.9193.1689576434327.js.map