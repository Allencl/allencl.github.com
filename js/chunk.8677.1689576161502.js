"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[8677],{2243:function(e,t,l){l.d(t,{Z:function(){return g}});var s=l(73396),a=l(87139);const o={style:{height:"98%","padding-bottom":"40px"}},i={style:{height:"100%"}},n={style:{position:"relative",top:"4px"}},r=["onClick"],p={class:"text-truncate",style:{height:"24px"}},u={key:2,class:"text-center",style:{"margin-top":"16px"}};function c(e,t,l,c,d,m){const h=(0,s.up)("van-field"),f=(0,s.up)("v-col"),g=(0,s.up)("v-btn"),w=(0,s.up)("v-row"),_=(0,s.up)("van-search"),y=(0,s.up)("van-checkbox"),b=(0,s.up)("van-popup");return(0,s.wg)(),(0,s.iD)("span",null,[(0,s.Wm)(h,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:l.required,label:l.label,placeholder:l.placeholder,autocomplete:"off",type:l.multiple?"textarea":"text",onClick:m.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,s.Wm)(b,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",i,[(0,s.Wm)(w,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{cols:"6"},{default:(0,s.w5)((()=>[(0,s._)("p",null,(0,a.zw)(l.label)+"-选择框",1)])),_:1}),(0,s.Wm)(f,{cols:"6",class:"text-right"},{default:(0,s.w5)((()=>[(0,s._)("span",n,(0,a.zw)(e.BufferOption.filter((e=>e._checked)).length),1),l.selectAll?((0,s.wg)(),(0,s.j4)(g,{key:0,onClick:m.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("全选")])),_:1},8,["onClick"])):(0,s.kq)("",!0)])),_:1})])),_:1}),l.showSearch?((0,s.wg)(),(0,s.j4)(w,{key:0,"no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{cols:"8"},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:l.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,s.Wm)(f,{cols:"2"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{onClick:t[2]||(t[2]=e=>m.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" 查询 ")])),_:1})])),_:1}),(0,s.Wm)(f,{cols:"2"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{onClick:t[3]||(t[3]=e=>m.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,s.kq)("",!0),e.BufferOption.length?((0,s.wg)(),(0,s.iD)("ul",{key:1,style:(0,a.j5)(`height: ${l.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.BufferOption,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,style:(0,a.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>m.checkChange(e)},[(0,s._)("p",p,(0,a.zw)(e.text),1),(0,s.Wm)(y,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,r)))),128))],4)):((0,s.wg)(),(0,s.iD)("p",u,"无数据!"))]),(0,s.Wm)(w,{"no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{cols:"6",class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)(" 取消 ")])),_:1})])),_:1}),(0,s.Wm)(f,{cols:"6",class:"text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{variant:"plain",color:"primary",block:"",onClick:m.confirmHandle},{default:(0,s.w5)((()=>[(0,s.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}l(38862),l(73210),l(26699),l(32023);var d=l(20868),m={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:l,value:s}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==s?!l:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==s&&!l})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:l}=this;if(l&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),l=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!l.length)return void(0,d.LJ)("不存在！");const s=e.filter((e=>!e.text.includes(t))),a=s.filter((e=>e._checked)),o=s.filter((e=>!e._checked));this.BufferOption=l.concat(a).concat(o)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},h=l(40089);const f=(0,h.Z)(m,[["render",c]]);var g=f},88575:function(e,t,l){l.d(t,{Z:function(){return C}});var s=l(73396),a=l(87139);const o={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},i=(0,s._)("span",null,"第",-1),n={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,s._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,s._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},c=(0,s._)("span",{style:{"margin-right":"3px"}},"页",-1),d=(0,s._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,s._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(e,t,l,w,_,y){const b=(0,s.up)("v-icon"),k=(0,s.up)("v-btn"),x=(0,s.up)("v-card");return(0,s.wg)(),(0,s.iD)("span",null,[e.paging&&l.pagingShow?((0,s.wg)(),(0,s.j4)(x,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:y.previousHandle},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{size:"28"},{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,s.Wm)(k,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:y.nextHandle},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{size:"28"},{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,s._)("span",o,[i,(0,s._)("span",n,(0,a.zw)(e.current),1),r,p,(0,s._)("span",u,(0,a.zw)(e.page),1),c,d,(0,s._)("span",m,(0,a.zw)(e.totalNum),1),h]),(0,s._)("span",f,[l.showSearchBtn?((0,s.wg)(),(0,s.j4)(k,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:y.searchClick,variant:"plain",color:"primary"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{size:"24",icon:"mdi-magnify"}),(0,s.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s.Wm)(k,{onClick:y.refreshClick,style:(0,a.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,s.kq)("",!0),e.items.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)(e.items,((t,l)=>(0,s.WI)(e.$slots,"tableBody",{key:l,items:t,_index:l}))),128)):((0,s.wg)(),(0,s.iD)("p",g,[(0,s.Wm)(b,{icon:"mdi-emoticon-sad-outline"}),(0,s.Uk)(" 无数据！ ")]))])}var _=l(21801),y=l(37184);var b=l(20868),k={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,b.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,b.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:l,params:s={},children:a,method:o,formatData:i}=this;if(a)return this.items=a,void(this.paging=!1);const n=(0,_.Z)((0,_.Z)({pageNum:e,pageSize:10},s),t),{code:r,total:p=0,msg:u="",data:c,rows:d}=await(0,y.i)({method:o,url:l,payload:"post"==o?n:{},url_params:"get"==o?n:{}});200==r&&(this.totalNum=p,this.current=e,this.page=Math.ceil(p/n.pageSize),this.items=i?i(c||d||[]):c||d||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},x=l(40089);const W=(0,x.Z)(k,[["render",w]]);var C=W},78677:function(e,t,l){l.r(t),l.d(t,{default:function(){return pe}});var s=l(73396),a=l(87139);const o={class:"font-weight-medium"},i=(0,s._)("p",{class:"font-weight-medium text"},"出入库类型:",-1),n={class:"font-weight-light"},r=(0,s._)("p",{class:"font-weight-medium text"},"出入库编码:",-1),p={class:"font-weight-light"},u=(0,s._)("p",{class:"font-weight-medium text"},[(0,s._)("span",{style:{color:"#ee0a24"}},"*"),(0,s.Uk)("单据编码:")],-1),c={class:"font-weight-light text-left",style:{color:"#00E5FF"}},d=(0,s._)("p",{class:"font-weight-medium text"},[(0,s._)("span",{style:{color:"#ee0a24"}},"*"),(0,s.Uk)("物资编码:")],-1),m={class:"font-weight-light text-left",style:{color:"#00E5FF"}},h=(0,s._)("div",{style:{height:"6px"}},null,-1);function f(e,t,l,f,g,w){const _=(0,s.up)("AppBarPage"),y=(0,s.up)("v-icon"),b=(0,s.up)("v-col"),k=(0,s.up)("v-row"),x=(0,s.up)("van-field"),W=(0,s.up)("SelectComponents"),C=(0,s.up)("v-btn"),v=(0,s.up)("v-sheet"),O=(0,s.up)("SelectCodeComponents"),U=(0,s.up)("SelectOrderComponents");return(0,s.wg)(),(0,s.iD)("span",null,[(0,s.Wm)(_),(0,s.Wm)(v,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{"no-gutters":"",class:"custem-card-title"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{cols:"7"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{icon:"mdi-rocket-launch",size:"16",color:"primary"}),(0,s._)("span",o,(0,a.zw)(e.useInfoTypeText)+"申请",1)])),_:1}),(0,s.Wm)(b,{cols:"5",class:"text-right"},{default:(0,s.w5)((()=>[(0,s._)("span",{style:(0,a.j5)("color:"+(e.isEdit?"#00E5FF":"#4CAF50"))},(0,a.zw)(e.isEdit?"修改":"新增"),5)])),_:1})])),_:1}),e.isEdit?((0,s.wg)(),(0,s.j4)(k,{key:0,style:{"margin-top":"12px"},"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{cols:"5"},{default:(0,s.w5)((()=>[i])),_:1}),(0,s.Wm)(b,{cols:"7"},{default:(0,s.w5)((()=>[(0,s._)("p",n,(0,a.zw)(e.useInfoTypeText),1)])),_:1})])),_:1})):(0,s.kq)("",!0),e.isEdit?((0,s.wg)(),(0,s.j4)(k,{key:1,style:{"margin-top":"12px"},"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{cols:"5"},{default:(0,s.w5)((()=>[r])),_:1}),(0,s.Wm)(b,{cols:"7"},{default:(0,s.w5)((()=>[(0,s._)("p",p,(0,a.zw)(e.bufferRow.sparePartUseCode),1)])),_:1})])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(x,{modelValue:e.name22,"onUpdate:modelValue":t[0]||(t[0]=t=>e.name22=t),autocomplete:"off",placeholder:"请输入",label:"出入库名称"},null,8,["modelValue"]),(0,s.Wm)(W,{modelValue:e.property,"onUpdate:modelValue":t[1]||(t[1]=t=>e.property=t),ref:"select1",label:"业务类型",option:e.propertySelectOption,required:""},null,8,["modelValue","option"]),e.showName?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(k,{key:2,style:{"margin-top":"12px"},"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{cols:"4"},{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(b,{cols:"5"},{default:(0,s.w5)((()=>[(0,s._)("p",c,(0,a.zw)(e.orderOption),1)])),_:1}),(0,s.Wm)(b,{cols:"3"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{onClick:w.selectOrderCode,density:"compact",color:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 选择 ")])),_:1},8,["onClick"])])),_:1})])),_:1})),e.showName?((0,s.wg)(),(0,s.j4)(x,{key:3,modelValue:e.orderOption,"onUpdate:modelValue":t[2]||(t[2]=t=>e.orderOption=t),required:"",autocomplete:"off",placeholder:"请输入",label:"单据编码"},null,8,["modelValue"])):(0,s.kq)("",!0),e.showName?((0,s.wg)(),(0,s.j4)(x,{key:4,modelValue:e.name,"onUpdate:modelValue":t[3]||(t[3]=t=>e.name=t),autocomplete:"off",placeholder:"请输入",label:"单据名称"},null,8,["modelValue"])):(0,s.kq)("",!0),(0,s.Wm)(k,{style:{"margin-top":"12px"},"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{cols:"4"},{default:(0,s.w5)((()=>[d])),_:1}),(0,s.Wm)(b,{cols:"5"},{default:(0,s.w5)((()=>[(0,s._)("p",m,(0,a.zw)(e.codeOption),1)])),_:1}),(0,s.Wm)(b,{cols:"3"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{onClick:w.selectCode,density:"compact",color:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 选择 ")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,s.Wm)(x,{modelValue:e.number,"onUpdate:modelValue":t[4]||(t[4]=t=>e.number=t),placeholder:"请输入",autocomplete:"off",label:"申请数量",required:"",type:"number"},null,8,["modelValue"]),(0,s.Wm)(x,{modelValue:e.explain,"onUpdate:modelValue":t[5]||(t[5]=t=>e.explain=t),autocomplete:"off",placeholder:"请输入",label:"出入库说明"},null,8,["modelValue"]),e.show33?((0,s.wg)(),(0,s.j4)(x,{key:5,modelValue:e.supplierCode,"onUpdate:modelValue":t[6]||(t[6]=t=>e.supplierCode=t),autocomplete:"off",placeholder:"请输入",label:"供应商编码"},null,8,["modelValue"])):(0,s.kq)("",!0),e.show33?((0,s.wg)(),(0,s.j4)(x,{key:6,modelValue:e.supplierName,"onUpdate:modelValue":t[7]||(t[7]=t=>e.supplierName=t),autocomplete:"off",placeholder:"请输入",label:"供应商名称"},null,8,["modelValue"])):(0,s.kq)("",!0),e.show33?((0,s.wg)(),(0,s.j4)(x,{key:7,modelValue:e.supplierUser,"onUpdate:modelValue":t[8]||(t[8]=t=>e.supplierUser=t),autocomplete:"off",placeholder:"请输入",label:"联系人"},null,8,["modelValue"])):(0,s.kq)("",!0),e.show33?((0,s.wg)(),(0,s.j4)(x,{key:8,modelValue:e.supplierTel,"onUpdate:modelValue":t[9]||(t[9]=t=>e.supplierTel=t),autocomplete:"off",placeholder:"请输入",label:"联系电话"},null,8,["modelValue"])):(0,s.kq)("",!0),(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Wm)(b,{cols:"12",class:"text-left"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{onClick:w.submit,block:"",color:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.isEdit?"修改":"提交"),1)])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,s.Wm)(O,{ref:"selectCode",typeAction:e.useInfoType,onSelect:w.selectCodeChange},null,8,["typeAction","onSelect"]),(0,s.Wm)(U,{ref:"selectOrder",onSelect:w.selectOrderChange},null,8,["onSelect"]),h])}l(2707);var g=l(76496),w=l(37184),_=l(2243),y=l(21801);l(74916),l(64765);const b={style:{"margin-top":"22px"}},k={class:"v-window-item-table"},x=(0,s._)("p",{class:"font-weight-medium text"},"物料编号:",-1),W={class:"font-weight-light",style:{color:"#00E5FF"}},C=(0,s._)("p",{class:"font-weight-medium text"},"物料描述:",-1),v={class:"font-weight-light"},O=(0,s._)("p",{class:"font-weight-medium text"},"物料类型:",-1),U={class:"font-weight-light"},V=(0,s._)("p",{class:"font-weight-medium text"},"物料大类:",-1),N={class:"font-weight-light"},S=(0,s._)("p",{class:"font-weight-medium text"},"长文本:",-1),j={class:"font-weight-light"},T=(0,s._)("p",{class:"font-weight-medium text"},"大小/量纲:",-1),B={class:"font-weight-light"},$=(0,s._)("p",{class:"font-weight-medium text"},"物资编码:",-1),F={class:"font-weight-light"},I=(0,s._)("p",{class:"font-weight-medium text"},"物资名称:",-1),P={class:"font-weight-light"},z=(0,s._)("p",{class:"font-weight-medium text"},"规格型号:",-1),D={class:"font-weight-light"},q=(0,s._)("p",{class:"font-weight-medium text"},"数量:",-1),M={class:"font-weight-light"};function A(e,t,l,o,i,n){const r=(0,s.up)("van-field"),p=(0,s.up)("v-col"),u=(0,s.up)("v-btn"),c=(0,s.up)("v-row"),d=(0,s.up)("v-badge"),m=(0,s.up)("v-card"),h=(0,s.up)("TableComponents"),f=(0,s.up)("van-popup");return(0,s.wg)(),(0,s.iD)("span",null,[(0,s.Wm)(f,{show:e.drawer,"onUpdate:show":t[1]||(t[1]=t=>e.drawer=t),closeable:"",position:"right",style:{padding:"12px",width:"92%",height:"100%"}},{default:(0,s.w5)((()=>[(0,s._)("div",b,[(0,s.Wm)(r,{modelValue:e.code,"onUpdate:modelValue":t[0]||(t[0]=t=>e.code=t),placeholder:"请输入",autocomplete:"off",label:"物料编号"},null,8,["modelValue"])]),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"}),(0,s.Wm)(p,{cols:"8",class:"text-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{onClick:n.rest,color:"warning mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("重置")])),_:1},8,["onClick"]),(0,s.Wm)(u,{onClick:n.search,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,s._)("div",k,[(0,s.Wm)(h,{ref:"table1",url:e.baseURL,auto:!1,params:(0,y.Z)({},e.pageSearchConfig)},{tableBody:(0,s.w5)((e=>["1"==l.typeAction?((0,s.wg)(),(0,s.j4)(m,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{"no-gutters":"",class:"table-title"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"1"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,s.Wm)(p,{cols:"4"}),(0,s.Wm)(p,{cols:"7"})])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[x])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",W,(0,a.zw)(e.items.matnr),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[C])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",v,(0,a.zw)(e.items.maktxC),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[O])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",U,(0,a.zw)(n.FormatDictionary("matnr_type",e.items.mtart)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[V])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",N,(0,a.zw)(n.FormatDictionary("matnr_broad",e.items.broad)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[S])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",j,(0,a.zw)(e.items.ltext),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[T])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",B,(0,a.zw)(e.items.groes),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"}),(0,s.Wm)(p,{cols:"4"}),(0,s.Wm)(p,{cols:"4",class:"text-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{onClick:t=>n.select(e),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("选择")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)):(0,s.kq)("",!0),"2"==l.typeAction?((0,s.wg)(),(0,s.j4)(m,{key:1},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{"no-gutters":"",class:"table-title"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"1"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,s.Wm)(p,{cols:"4"}),(0,s.Wm)(p,{cols:"7"})])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[$])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",F,(0,a.zw)(e.items.goodsMaterialsCode),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[I])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",P,(0,a.zw)(e.items.goodsMaterialsName),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[z])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",D,(0,a.zw)(e.items.partModel),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"},{default:(0,s.w5)((()=>[q])),_:1}),(0,s.Wm)(p,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",M,(0,a.zw)(e.items.goodsMaterialsNums),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(c,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{cols:"4"}),(0,s.Wm)(p,{cols:"4"}),(0,s.Wm)(p,{cols:"4",class:"text-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{onClick:t=>n.select(e),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("选择")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)):(0,s.kq)("",!0)])),_:1},8,["url","params"])])])),_:1},8,["show"])])}var E=l(88575),J=l(20868),Z={components:{AppBarPage:g.Z,TableComponents:E.Z},data:()=>({baseURL:"",pageSearchConfig:{},drawer:!1,code:""}),emits:["select"],created(){this.initHandle()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),s=l[e]||[],a=s.filter((e=>t==e.value))[0]||{};return a},GlobalTooltipFunc(e=""){(0,J.CF)({message:e,overlay:!0,closeOnClickOverlay:!0,duration:0})},initHandle(){const{typeAction:e}=this;this.$nextTick((()=>{"1"==e&&(this.baseURL="/iiot/sparePart/listAll"),"2"==e&&(this.baseURL="/iiot/sparePartUse/getGoodsMaterialsList")}))},showDrawer(){this.drawer=!0,this.$nextTick((()=>{this.$refs.table1.initFunc(1,{})}))},search(){this.$refs.table1.initFunc(1)},rest(){this.code="",this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},select(e){this.drawer=!1;const{typeAction:t}=this,l={tmBasPartId:e.items.goodsMaterialsId,matnr:e.items.goodsMaterialsCode,maktxC:e.items.goodsMaterialsName};this.$nextTick((()=>{this.$emit("select","1"==t?e.items:l)}))}},props:{typeAction:{type:String,default:()=>""}}},H=l(40089);const L=(0,H.Z)(Z,[["render",A]]);var R=L;const Y={style:{"margin-top":"22px"}},G={class:"v-window-item-table"},K=(0,s._)("p",{class:"font-weight-medium text"},"业务编码:",-1),X={class:"font-weight-light",style:{color:"#00E5FF"}},Q=(0,s._)("p",{class:"font-weight-medium text"},"业务名称:",-1),ee={class:"font-weight-light"},te=(0,s._)("p",{class:"font-weight-medium text"},"业务类型:",-1),le={class:"font-weight-light"};function se(e,t,l,o,i,n){const r=(0,s.up)("van-field"),p=(0,s.up)("SelectComponents"),u=(0,s.up)("v-col"),c=(0,s.up)("v-btn"),d=(0,s.up)("v-row"),m=(0,s.up)("v-badge"),h=(0,s.up)("v-card"),f=(0,s.up)("TableComponents"),g=(0,s.up)("van-popup");return(0,s.wg)(),(0,s.iD)("span",null,[(0,s.Wm)(g,{show:e.drawer,"onUpdate:show":t[2]||(t[2]=t=>e.drawer=t),closeable:"",position:"right",style:{padding:"12px",width:"92%",height:"100%"}},{default:(0,s.w5)((()=>[(0,s._)("div",Y,[(0,s.Wm)(r,{modelValue:e.code,"onUpdate:modelValue":t[0]||(t[0]=t=>e.code=t),placeholder:"请输入",autocomplete:"off",label:"业务编码"},null,8,["modelValue"]),(0,s.Wm)(p,{modelValue:e.sign,"onUpdate:modelValue":t[1]||(t[1]=t=>e.sign=t),ref:"select3",label:"业务类型",option:e.signSelectOption},null,8,["modelValue","option"])]),(0,s.Wm)(d,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{cols:"4"}),(0,s.Wm)(u,{cols:"8",class:"text-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{onClick:n.rest,color:"warning mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("重置")])),_:1},8,["onClick"]),(0,s.Wm)(c,{onClick:n.search,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,s._)("div",G,[(0,s.Wm)(f,{ref:"table1",url:"/iiot/sparePartBills/list",method:"get",params:(0,y.Z)({businessCode:e.code,businessType:e.sign},e.pageSearchConfig)},{tableBody:(0,s.w5)((e=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{"no-gutters":"",class:"table-title"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{cols:"1"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,s.Wm)(u,{cols:"4"}),(0,s.Wm)(u,{cols:"7"})])),_:2},1024),(0,s.Wm)(d,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{cols:"4"},{default:(0,s.w5)((()=>[K])),_:1}),(0,s.Wm)(u,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",X,(0,a.zw)(e.items.businessCode),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(d,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{cols:"4"},{default:(0,s.w5)((()=>[Q])),_:1}),(0,s.Wm)(u,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",ee,(0,a.zw)(e.items.businessName),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(d,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{cols:"4"},{default:(0,s.w5)((()=>[te])),_:1}),(0,s.Wm)(u,{cols:"8"},{default:(0,s.w5)((()=>[(0,s._)("p",le,(0,a.zw)(n.FormatDictionary("ccgl_bpbj_business_type",e.items.businessType)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(d,{"no-gutters":"",class:"text"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{cols:"4"}),(0,s.Wm)(u,{cols:"4"}),(0,s.Wm)(u,{cols:"4",class:"text-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{onClick:t=>n.select(e),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,s.w5)((()=>[(0,s.Uk)("选择")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["params"])])])),_:1},8,["show"])])}var ae={components:{AppBarPage:g.Z,SelectComponents:_.Z,TableComponents:E.Z},data:()=>({pageSearchConfig:{},drawer:!1,code:"",sign:"",signSelectOption:[]}),emits:["select"],methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),s=l[e]||[],a=s.filter((e=>t==e.value))[0]||{};return a},GlobalTooltipFunc(e=""){(0,J.CF)({message:e,overlay:!0,closeOnClickOverlay:!0,duration:0})},showDrawer(){const e=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),t=e["ccgl_bpbj_business_type"]||[];this.signSelectOption=t.map((e=>Object.assign({text:e.lable,value:e.value}))),this.drawer=!0},search(){this.$refs.table1.initFunc(1)},rest(){this.code="",this.sign="",this.$refs.select3&&this.$refs.select3.reset(),this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},select(e){this.drawer=!1,this.$nextTick((()=>{this.$emit("select",e.items)}))}}};const oe=(0,H.Z)(ae,[["render",se]]);var ie=oe,ne={components:{AppBarPage:g.Z,SelectComponents:_.Z,SelectCodeComponents:R,SelectOrderComponents:ie},data:()=>({show33:!1,showName:!1,bufferRow:{},isEdit:!1,useInfoType:"",useInfoTypeText:"",name22:"",name:"",number:"",explain:"",orderOption:"",codeOption:"",orderOptionObj:{},codeOptionObj:{},supplierCode:"",supplierName:"",supplierUser:"",supplierTel:"",property:"",propertySelectOption:[]}),watch:{property:{handler(e){this.showName=!1,this.show33=!1,this.name="",this.orderOption="",this.codeOptionObj={},this.orderOptionObj={},this.supplierCode="",this.supplierName="",this.supplierUser="",this.supplierTel="","1"==e&&(this.show33=!0,this.showName=!0)},deep:!0,immediate:!0}},created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),s=l[e]||[],a=s.filter((e=>t==e.value))[0]||{};return a},async initFunc(){const{useInfoType:e,sparePartUseId:t,isEdit:l=!1}=this.$route.query,s=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=s["ccgl_bpbj_business_type"]||[];if(this.propertySelectOption=a.map((e=>Object.assign({text:e.lable,value:e.value}))),this.useInfoType=e,this.useInfoTypeText="1"==e?"入库":"出库",this.isEdit=l,!t)return;const{code:o,data:i={}}=await(0,w.i)({url:"/iiot/sparePartUse",method:"get",url_RESTful:`/${t}`});200==o&&(this.bufferRow=i,this.name22=i.sparePartUseName,this.property=i.businessType,this.$refs.select1&&this.$refs.select1.setValue(i.businessType),this.explain=i.sparePartUseExplain,this.number=i.goodsMaterialsNums,this.$nextTick((()=>{this.orderOption=i.businessCode,this.name=i.businessName,this.orderOptionObj={businessId:i.businessId,businessCode:i.businessCode,businessName:i.businessName},this.codeOption=i.goodsMaterialsCode,this.codeOptionObj={tmBasPartId:i.goodsMaterialsId,matnr:i.goodsMaterialsCode,maktxC:i.goodsMaterialsName},setTimeout((()=>{this.supplierCode=i.supplierCode,this.supplierName=i.supplierName,this.supplierUser=i.supplierUser,this.supplierTel=i.supplierTel}),500)})))},selectCode(){this.$refs.selectCode.showDrawer()},selectOrderCode(){this.$refs.selectOrder.showDrawer()},selectCodeChange(e){this.codeOption=e.matnr,this.codeOptionObj=e},selectOrderChange(e){this.orderOption=e.businessCode,this.orderOptionObj=e},async submit(){const{useInfoType:e,isEdit:t=!1}=this.$route.query,l=JSON.parse(localStorage.getItem("bufferUserInfo")||"{}"),{bufferRow:s}=this;if(!this.property)return void(0,J.LJ)("业务类型必填！");if(!this.orderOption)return void(this.showName?(0,J.LJ)("单据编码必填！"):(0,J.LJ)("单据编码必选！"));if(!this.codeOption)return void(0,J.LJ)("物资编码必选！");if(!this.number||Number(this.number)<=0)return void(0,J.LJ)("申请数量必填大于0！");const a={sparePartUseId:null,sparePartUseCode:null,sparePartUseName:null,outNums:null,outUserCode:null,outUserName:null,outDatetime:null,sort:null,createBy:null,createTime:null,updateBy:null,updateTime:null,businessType:this.property,sparePartUseExplain:this.explain,goodsMaterialsNums:Number(this.number),businessId:this.orderOptionObj.businessId,businessCode:"1"==this.property?this.orderOption:this.orderOptionObj.businessCode,businessName:"1"==this.property?this.name:this.orderOptionObj.businessName,goodsMaterialsId:this.codeOptionObj.tmBasPartId,goodsMaterialsCode:this.codeOptionObj.matnr,goodsMaterialsName:this.codeOptionObj.maktxC,operUserName:l.userName,operUserCode:l.userId,supplierCode:this.supplierCode,supplierName:this.supplierName,supplierUser:this.supplierUser,supplierTel:this.supplierTel,useInfoType:e,operType:"N",finishState:"N",dataState:"N",delFlag:"Y",version:0},o={sparePartUseId:s.sparePartUseId,sparePartUseCode:s.sparePartUseCode,sparePartUseName:s.sparePartUseName,outNums:s.outNums,outUserCode:s.outUserCode,outUserName:s.outUserName,outDatetime:s.outDatetime,sort:s.sort,createBy:s.createBy,createTime:s.createTime,updateBy:s.updateBy,updateTime:s.updateTime,sparePartUseName:this.name22,businessType:this.property,sparePartUseExplain:this.explain,goodsMaterialsNums:Number(this.number),businessId:this.orderOptionObj.businessId,businessCode:"1"==this.property?this.orderOption:this.orderOptionObj.businessCode,businessName:"1"==this.property?this.name:this.orderOptionObj.businessName,goodsMaterialsId:this.codeOptionObj.tmBasPartId,goodsMaterialsCode:this.codeOptionObj.matnr,goodsMaterialsName:this.codeOptionObj.maktxC,operUserName:l.userName,operUserCode:l.userId,supplierCode:this.supplierCode,supplierName:this.supplierName,supplierUser:this.supplierUser,supplierTel:this.supplierTel,useInfoType:e,operType:"N",finishState:"N",dataState:"N",delFlag:"Y",version:0},{code:i,data:n={}}=await(0,w.i)({url:"/iiot/sparePartUse",method:t?"put":"post",payload:t?o:a});200==i&&((0,J.XA)("提交成功！"),this.$router.go(-1))}}};const re=(0,H.Z)(ne,[["render",f]]);var pe=re}}]);
//# sourceMappingURL=chunk.8677.1689576161502.js.map