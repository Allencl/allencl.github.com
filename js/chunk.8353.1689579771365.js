"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[8353],{14614:function(e,t,a){a.d(t,{m:function(){return l}});var i=a(37184);const l=async e=>await(0,i.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:e.payload})},2243:function(e,t,a){a.d(t,{Z:function(){return g}});var i=a(73396),l=a(87139);const s={style:{height:"98%","padding-bottom":"40px"}},o={style:{height:"100%"}},n={style:{position:"relative",top:"4px"}},r=["onClick"],d={class:"text-truncate",style:{height:"24px"}},u={key:2,class:"text-center",style:{"margin-top":"16px"}};function c(e,t,a,c,p,m){const h=(0,i.up)("van-field"),f=(0,i.up)("v-col"),g=(0,i.up)("v-btn"),k=(0,i.up)("v-row"),w=(0,i.up)("van-search"),y=(0,i.up)("van-checkbox"),_=(0,i.up)("van-popup");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(h,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:a.required,label:a.label,placeholder:a.placeholder,autocomplete:"off",type:a.multiple?"textarea":"text",onClick:m.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,i.Wm)(_,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i._)("div",o,[(0,i.Wm)(k,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{cols:"6"},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,l.zw)(a.label)+"-选择框",1)])),_:1}),(0,i.Wm)(f,{cols:"6",class:"text-right"},{default:(0,i.w5)((()=>[(0,i._)("span",n,(0,l.zw)(e.BufferOption.filter((e=>e._checked)).length),1),a.selectAll?((0,i.wg)(),(0,i.j4)(g,{key:0,onClick:m.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("全选")])),_:1},8,["onClick"])):(0,i.kq)("",!0)])),_:1})])),_:1}),a.showSearch?((0,i.wg)(),(0,i.j4)(k,{key:0,"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{cols:"8"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:a.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,i.Wm)(f,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{onClick:t[2]||(t[2]=e=>m.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 查询 ")])),_:1})])),_:1}),(0,i.Wm)(f,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{onClick:t[3]||(t[3]=e=>m.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,i.kq)("",!0),e.BufferOption.length?((0,i.wg)(),(0,i.iD)("ul",{key:1,style:(0,l.j5)(`height: ${a.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.BufferOption,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,style:(0,l.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>m.checkChange(e)},[(0,i._)("p",d,(0,l.zw)(e.text),1),(0,i.Wm)(y,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,r)))),128))],4)):((0,i.wg)(),(0,i.iD)("p",u,"无数据!"))]),(0,i.Wm)(k,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 取消 ")])),_:1})])),_:1}),(0,i.Wm)(f,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{variant:"plain",color:"primary",block:"",onClick:m.confirmHandle},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}a(38862),a(73210),a(26699),a(32023);var p=a(20868),m={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:a,value:i}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i?!a:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i&&!a})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:a}=this;if(a&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),a=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!a.length)return void(0,p.LJ)("不存在！");const i=e.filter((e=>!e.text.includes(t))),l=i.filter((e=>e._checked)),s=i.filter((e=>!e._checked));this.BufferOption=a.concat(l).concat(s)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},h=a(40089);const f=(0,h.Z)(m,[["render",c]]);var g=f},88575:function(e,t,a){a.d(t,{Z:function(){return C}});var i=a(73396),l=a(87139);const s={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},o=(0,i._)("span",null,"第",-1),n={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),d=(0,i._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},c=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,i._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,i._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function k(e,t,a,k,w,y){const _=(0,i.up)("v-icon"),x=(0,i.up)("v-btn"),b=(0,i.up)("v-card");return(0,i.wg)(),(0,i.iD)("span",null,[e.paging&&a.pagingShow?((0,i.wg)(),(0,i.j4)(b,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:y.previousHandle},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{size:"28"},{default:(0,i.w5)((()=>[(0,i.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,i.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:y.nextHandle},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{size:"28"},{default:(0,i.w5)((()=>[(0,i.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,i._)("span",s,[o,(0,i._)("span",n,(0,l.zw)(e.current),1),r,d,(0,i._)("span",u,(0,l.zw)(e.page),1),c,p,(0,i._)("span",m,(0,l.zw)(e.totalNum),1),h]),(0,i._)("span",f,[a.showSearchBtn?((0,i.wg)(),(0,i.j4)(x,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:y.searchClick,variant:"plain",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{size:"24",icon:"mdi-magnify"}),(0,i.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(x,{onClick:y.refreshClick,style:(0,l.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,i.kq)("",!0),e.items.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(e.items,((t,a)=>(0,i.WI)(e.$slots,"tableBody",{key:a,items:t,_index:a}))),128)):((0,i.wg)(),(0,i.iD)("p",g,[(0,i.Wm)(_,{icon:"mdi-emoticon-sad-outline"}),(0,i.Uk)(" 无数据！ ")]))])}var w=a(21801),y=a(37184);var _=a(20868),x={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,_.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,_.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:a,params:i={},children:l,method:s,formatData:o}=this;if(l)return this.items=l,void(this.paging=!1);const n=(0,w.Z)((0,w.Z)({pageNum:e,pageSize:10},i),t),{code:r,total:d=0,msg:u="",data:c,rows:p}=await(0,y.i)({method:s,url:a,payload:"post"==s?n:{},url_params:"get"==s?n:{}});200==r&&(this.totalNum=d,this.current=e,this.page=Math.ceil(d/n.pageSize),this.items=o?o(c||p||[]):c||p||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},b=a(40089);const v=(0,b.Z)(x,[["render",k]]);var C=v},18353:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var i=a(73396),l=a(87139);const s=(0,i._)("div",{style:{height:"8px"}},null,-1),o={class:"v-window-item-table"},n=(0,i._)("p",{class:"text-truncate font-weight-light"},"领用物料",-1),r={class:"text-truncate font-weight-medium text-right text-teal-lighten-1",color:"primary"},d={class:"text-truncate font-weight-light"},u=(0,i._)("p",{class:"font-weight-medium text"},"规格型号:",-1),c={class:"font-weight-light"},p=(0,i._)("p",{class:"text-truncate font-weight-light",style:{position:"relative",top:"4px"}},"领用数量",-1);function m(e,t,a,m,h,f){const g=(0,i.up)("AppBarPage"),k=(0,i.up)("v-icon"),w=(0,i.up)("v-text-field"),y=(0,i.up)("v-badge"),_=(0,i.up)("v-col"),x=(0,i.up)("v-row"),b=(0,i.up)("van-field"),v=(0,i.up)("v-btn"),C=(0,i.up)("v-card"),N=(0,i.up)("TableComponents");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(g),(0,i._)("div",null,[(0,i.Wm)(w,{modelValue:e.searchInputValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchInputValue=t),density:"compact",variant:"solo",elevation:"0","single-line":"","hide-details":"",placeholder:"请输入 备件编码",autocomplete:"off"},{"append-inner":(0,i.w5)((()=>[(0,i.Wm)(k,{onClick:f.appendIcon,color:"primary",icon:"mdi-magnify"},null,8,["onClick"])])),_:1},8,["modelValue"]),s,(0,i.Wm)(w,{modelValue:e.searchInputNameValue,"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchInputNameValue=t),density:"compact",variant:"solo",elevation:"0","single-line":"","hide-details":"",placeholder:"请输入 名称",autocomplete:"off"},{"append-inner":(0,i.w5)((()=>[(0,i.Wm)(k,{onClick:f.appendNameIcon,color:"primary",icon:"mdi-magnify"},null,8,["onClick"])])),_:1},8,["modelValue"])]),(0,i._)("div",o,[(0,i.Wm)(N,{ref:"table1",url:"/iiot/sparePartUse/getGoodsMaterialsList"},{tableBody:(0,i.w5)((e=>[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(x,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{content:e._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,i.Wm)(_,{cols:"3"},{default:(0,i.w5)((()=>[n])),_:1}),(0,i.Wm)(_,{cols:"8",class:"text-right"},{default:(0,i.w5)((()=>[(0,i._)("p",r,(0,l.zw)(e.items.goodsMaterialsCode)+"-"+(0,l.zw)(e.items.goodsMaterialsName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(x,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",d,"当前库存量: "+(0,l.zw)(e.items.goodsMaterialsNums),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(x,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{cols:"4"},{default:(0,i.w5)((()=>[u])),_:1}),(0,i.Wm)(_,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",c,(0,l.zw)(e.items.partModel),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(x,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{cols:"3"},{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(_,{cols:"6",class:"text-left"},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{modelValue:e.items._number,"onUpdate:modelValue":t=>e.items._number=t,style:{padding:"0px",color:"16px"},placeholder:"请输入领用数量",autocomplete:"off",type:"number"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,i.Wm)(_,{cols:"3",class:"text-right"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{onClick:t=>f.submitClick(e),color:"primary mt-1",density:"compact"},{default:(0,i.w5)((()=>[(0,i.Uk)("提交")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},512)])])}a(73210);var h=a(76496),f=a(88575),g=a(37184),k=a(2243),w=(a(14614),a(20868)),y={components:{AppBarPage:h.Z,SelectComponents:k.Z,TableComponents:f.Z},data:()=>({bufferRow:{},searchInputValue:"",searchInputNameValue:"",tableChildren:[],material:"",materialSelectOption:[]}),created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),i=a[e]||[],l=i.filter((e=>t==e.value))[0]||{};return l},async initFunc(){const{row:e="{}"}=this.$route.query;this.bufferRow=JSON.parse(e)},async appendIcon(){this.$nextTick((()=>{this.$refs.table1.initFunc(1,{goodsMaterialsCode:this.searchInputValue.trim()})}))},async appendNameIcon(){this.$nextTick((()=>{this.$refs.table1.initFunc(1,{goodsMaterialsName:this.searchInputNameValue.trim()})}))},async materialHTTP(e){},async submitClick(e){const{activeType:t=""}=this.$route.query,{items:a}=e,{bufferRow:i}=this,l=Number(a._number||0),s=JSON.parse(localStorage.getItem("bufferUserInfo")||"{}");if(l<=0)return void(0,w.LJ)("领用数量必须大于0");if(l>a.goodsMaterialsNums)return void(0,w.LJ)("领用数量不能大于当前库存量！");let o={};"equipment"==t&&(o={operUserName:s.userName,operUserCode:s.userId,finishState:"N",sparePartUseName:i.equipmentName,sparePartUseExplain:"设备报修备件领用",useInfoType:2,businessType:2,businessId:i.teAdRepairId,businessCode:i.teAdRepairId,businessName:"设备维修",goodsMaterialsId:a.goodsMaterialsId,goodsMaterialsCode:a.goodsMaterialsCode,goodsMaterialsName:a.goodsMaterialsName,goodsMaterialsNums:Number(a._number)}),"maintain"==t&&(o={operUserName:s.userName,operUserCode:s.userId,finishState:"N",sparePartUseName:i.equipmentName,sparePartUseExplain:"设备保养备件领用",useInfoType:2,businessType:3,businessId:i.teWbMainTaskId,businessCode:i.teWbMainTaskId,businessName:"设备保养",goodsMaterialsId:a.goodsMaterialsId,goodsMaterialsCode:a.goodsMaterialsCode,goodsMaterialsName:a.goodsMaterialsName,goodsMaterialsNums:Number(a._number)}),"check"==t&&(o={operUserName:s.userName,operUserCode:s.userId,finishState:"N",sparePartUseName:i.equipmentName,sparePartUseExplain:"设备点检备件领用",useInfoType:2,businessType:4,businessId:i.ttCheckTaskId,businessCode:i.ttCheckTaskId,businessName:"设备点检",goodsMaterialsId:a.goodsMaterialsId,goodsMaterialsCode:a.goodsMaterialsCode,goodsMaterialsName:a.goodsMaterialsName,goodsMaterialsNums:Number(a._number)}),"checkCreate"==t&&(o={operUserName:s.userName,operUserCode:s.userId,finishState:"N",sparePartUseName:i.eEquipmentName,sparePartUseExplain:"设备点检备件领用",useInfoType:2,businessType:4,businessId:i.ttCheckTaskId,businessCode:i.ttCheckTaskId,businessName:"设备点检",goodsMaterialsId:a.goodsMaterialsId,goodsMaterialsCode:a.goodsMaterialsCode,goodsMaterialsName:a.goodsMaterialsName,goodsMaterialsNums:Number(a._number)});const{code:n,data:r={}}=await(0,g.i)({url:"/iiot/sparePartUse",method:"post",payload:o});200==n&&((0,w.XA)("提交成功！"),this.$router.go(-1))}}},_=a(40089);const x=(0,_.Z)(y,[["render",m]]);var b=x}}]);
//# sourceMappingURL=chunk.8353.1689579771365.js.map