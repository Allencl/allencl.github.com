"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[9083],{89337:function(e,t,a){a.d(t,{$w:function(){return c},AT:function(){return o},NM:function(){return s},ew:function(){return r},jt:function(){return i},vU:function(){return n}});var l=a(37184);const i=async(e={})=>await(0,l.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),o=async e=>await(0,l.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),n=async e=>await(0,l.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),r=async e=>await(0,l.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),s=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),c=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},5878:function(e,t,a){a.d(t,{b:function(){return l}});a(33948),a(57658);const l=(e,t,a,l)=>{let i={id:t||"id",parentId:a||"parentId",childrenList:l||"children"};var o={},n={},r=[];for(let c of e){let e=c[i.parentId];null==o[e]&&(o[e]=[]),n[c[i.id]]=c,o[e].push(c)}for(let c of e){let e=c[i.parentId];null==n[e]&&r.push(c)}for(let c of r)s(c);function s(e){if(null!==o[e[i.id]]&&(e[i.childrenList]=o[e[i.id]]),e[i.childrenList])for(let t of e[i.childrenList])s(t)}return r}},2243:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(73396),i=a(87139);const o={style:{height:"98%","padding-bottom":"40px"}},n={style:{height:"100%"}},r={style:{position:"relative",top:"4px"}},s=["onClick"],c={class:"text-truncate",style:{height:"24px"}},u={key:2,class:"text-center",style:{"margin-top":"16px"}};function d(e,t,a,d,p,h){const m=(0,l.up)("van-field"),f=(0,l.up)("v-col"),g=(0,l.up)("v-btn"),y=(0,l.up)("v-row"),b=(0,l.up)("van-search"),w=(0,l.up)("van-checkbox"),k=(0,l.up)("van-popup");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l.Wm)(m,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:a.required,label:a.label,placeholder:a.placeholder,autocomplete:"off",type:a.multiple?"textarea":"text",onClick:h.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,l.Wm)(k,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l._)("div",n,[(0,l.Wm)(y,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"6"},{default:(0,l.w5)((()=>[(0,l._)("p",null,(0,i.zw)(a.label)+"-选择框",1)])),_:1}),(0,l.Wm)(f,{cols:"6",class:"text-right"},{default:(0,l.w5)((()=>[(0,l._)("span",r,(0,i.zw)(e.BufferOption.filter((e=>e._checked)).length),1),a.selectAll?((0,l.wg)(),(0,l.j4)(g,{key:0,onClick:h.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("全选")])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),_:1})])),_:1}),a.showSearch?((0,l.wg)(),(0,l.j4)(y,{key:0,"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"8"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:a.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,l.Wm)(f,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onClick:t[2]||(t[2]=e=>h.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 查询 ")])),_:1})])),_:1}),(0,l.Wm)(f,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onClick:t[3]||(t[3]=e=>h.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,l.kq)("",!0),e.BufferOption.length?((0,l.wg)(),(0,l.iD)("ul",{key:1,style:(0,i.j5)(`height: ${a.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.BufferOption,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{key:t,style:(0,i.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>h.checkChange(e)},[(0,l._)("p",c,(0,i.zw)(e.text),1),(0,l.Wm)(w,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,s)))),128))],4)):((0,l.wg)(),(0,l.iD)("p",u,"无数据!"))]),(0,l.Wm)(y,{"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"6",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 取消 ")])),_:1})])),_:1}),(0,l.Wm)(f,{cols:"6",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{variant:"plain",color:"primary",block:"",onClick:h.confirmHandle},{default:(0,l.w5)((()=>[(0,l.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}a(38862),a(73210),a(26699),a(32023);var p=a(20868),h={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:a,value:l}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==l?!a:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==l&&!a})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:a}=this;if(a&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),a=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!a.length)return void(0,p.LJ)("不存在！");const l=e.filter((e=>!e.text.includes(t))),i=l.filter((e=>e._checked)),o=l.filter((e=>!e._checked));this.BufferOption=a.concat(i).concat(o)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},m=a(40089);const f=(0,m.Z)(h,[["render",d]]);var g=f},57265:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(73396);const i={style:{padding:"0px 12px 0px 12px"}},o={key:0,class:"font-weight-medium text",style:{"margin-bottom":"8px"}},n={key:1,style:{"margin-bottom":"8px"},class:"font-weight-medium text"},r={class:"custem-iamge-upload"},s=["src"];function c(e,t,a,c,u,d){const p=(0,l.up)("van-uploader"),h=(0,l.up)("v-icon");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l._)("div",i,[a.preview?((0,l.wg)(),(0,l.iD)("p",o,"图片预览 ")):((0,l.wg)(),(0,l.iD)("p",n," 图片上传 ")),a.preview?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(p,{key:2,"after-read":d.afterRead,"preview-image":!1},null,8,["after-read"])),(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.bufferFileList,((i,o)=>((0,l.wg)(),(0,l.iD)("li",{key:o,onClick:t[0]||(t[0]=t=>d.checkImage(e.bufferFileList))},[(0,l._)("img",{src:i.url},null,8,s),a.preview?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(h,{key:0,onClick:e=>d.removeClick(i,e),class:"icon",icon:"mdi-close-circle-outline",color:"red"},null,8,["onClick"]))])))),128))])])])}a(26699),a(32023),a(38862);var u=a(37184),d=a(20868),p=a(9801),h={components:{},emits:["update:modelValue","onChange"],data:()=>({bufferFileList:[]}),watch:{modelValue:{handler(e=[]){this.bufferFileList=e},deep:!0,immediate:!0},initPath:{handler(e=""){e&&(this.bufferFileList=e.split(",").map((e=>Object.assign({url:e}))))},deep:!0,immediate:!0}},methods:{checkImage(e=[]){e.length&&(0,p.V)(e.map((e=>e.url)))},async afterRead(e){if(!e.file.type.includes("image"))return void(0,d.LJ)("只能选择图片！");if(e.file.size>=19922944)return void(0,d.LJ)("图片超过20M！");if(this.bufferFileList.length>2)return void(0,d.LJ)("最多只能选择3张图片！");let t=new FormData;t.append("file",e.file);const{code:a,data:l={}}=await(0,u.i)({url:"/file/upload",method:"post",formData:!0,payload:t});200==a?(this.bufferFileList=this.bufferFileList.concat([l]),(0,d.XA)("图片上传成功！"),this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.bufferFileList)))):(0,d.LJ)("图片上传失败！")},removeClick(e,t){t.stopPropagation(),this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter((t=>t.url!=e.url)),this.$nextTick((()=>{this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.bufferFileList)))}))}},props:{modelValue:{type:Array,default:()=>[]},initPath:{type:String,default:()=>""},preview:{type:Boolean,default:()=>!1}}},m=a(40089);const f=(0,m.Z)(h,[["render",c]]);var g=f},13415:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var l=a(73396),i=a(87139);const o=(0,l._)("span",{class:"font-weight-medium"},"通用信息",-1),n=(0,l._)("p",{class:"font-weight-medium text"},[(0,l._)("span",{style:{color:"#ee0a24"}},"*"),(0,l.Uk)("是否停线:")],-1),r={style:{padding:"0px 12px"}},s={key:0},c=(0,l._)("div",{style:{height:"6px"}},null,-1),u=(0,l._)("span",{class:"font-weight-medium"},"其他信息",-1),d=(0,l._)("div",{style:{height:"6px"}},null,-1),p=(0,l._)("span",{class:"font-weight-medium"},"异常信息",-1),h=(0,l._)("div",{style:{height:"36px"}},null,-1);function m(e,t,a,m,f,g){const y=(0,l.up)("AppBarPage"),b=(0,l.up)("v-icon"),w=(0,l.up)("v-col"),k=(0,l.up)("v-row"),v=(0,l.up)("SelectComponents"),S=(0,l.up)("van-field"),C=(0,l.up)("v-btn"),O=(0,l.up)("van-cascader"),_=(0,l.up)("van-popup"),V=(0,l.up)("van-radio"),x=(0,l.up)("van-radio-group"),B=(0,l.up)("ScanBarComponents"),I=(0,l.up)("v-sheet"),L=(0,l.up)("UploaderImageComponents");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l.Wm)(y),(0,l.Wm)(I,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{"no-gutters":"",class:"custem-card-title"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{cols:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{icon:"mdi-access-point",size:"16",color:"indigo"}),o])),_:1}),(0,l.Wm)(w,{cols:"6"})])),_:1}),(0,l.Wm)(v,{modelValue:e.property,"onUpdate:modelValue":t[0]||(t[0]=t=>e.property=t),label:"异常类型属性",required:"",ref:"select11",option:e.selectPropertyOption,onOnChange:g.selectPropertyChange},null,8,["modelValue","option","onOnChange"]),(0,l.Wm)(v,{modelValue:e.type,"onUpdate:modelValue":t[1]||(t[1]=t=>e.type=t),ref:"selectType",label:"异常类型",showSearch:"",option:e.typeSelectOption,forbidShow:!0,onOnFieldClick:g.typeFieldClick,onOnChange:g.selectTypeChange,onOnSearchChange:g.typeSearchChange,required:""},null,8,["modelValue","option","onOnFieldClick","onOnChange","onOnSearchChange"]),(0,l.Wm)(v,{modelValue:e.content,"onUpdate:modelValue":t[2]||(t[2]=t=>e.content=t),ref:"selectContent",label:"异常内容",forbidShow:!0,showSearch:"",option:e.contentSelectOption,onOnFieldClick:g.contentFieldClick,onOnSearchChange:g.contentSearchChange,required:""},null,8,["modelValue","option","onOnFieldClick","onOnSearchChange"]),(0,l.Wm)(S,{modelValue:e.fieldValue,"onUpdate:modelValue":t[3]||(t[3]=t=>e.fieldValue=t),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",required:"",autocomplete:"off",onClick:t[4]||(t[4]=t=>e.show=!0)},null,8,["modelValue"]),(0,l.Wm)(_,{show:e.show,"onUpdate:show":t[7]||(t[7]=t=>e.show=t),round:"",position:"bottom"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:t[5]||(t[5]=()=>e.show=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 确定 ")])),_:1}),(0,l.Wm)(O,{title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[6]||(t[6]=t=>e.show=!1),onChange:g.onFinish},null,8,["options","onChange"])])),_:1},8,["show"]),(0,l.Wm)(k,{"no-gutters":"",class:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{cols:"4",style:{"padding-left":"5px"}},{default:(0,l.w5)((()=>[n])),_:1}),(0,l.Wm)(w,{cols:"4",style:{"text-align":"right"}},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{modelValue:e._switch11,"onUpdate:modelValue":t[8]||(t[8]=t=>e._switch11=t),direction:"horizontal"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{name:"1","checked-color":"#4CAF50",shape:"square"},{default:(0,l.w5)((()=>[(0,l.Uk)("是")])),_:1}),(0,l.Wm)(V,{name:"0","checked-color":"#4CAF50",shape:"square"},{default:(0,l.w5)((()=>[(0,l.Uk)("否")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(v,{modelValue:e.urgency,"onUpdate:modelValue":t[9]||(t[9]=t=>e.urgency=t),ref:"select4",label:"紧急程度",option:e.urgencySelectOption,required:""},null,8,["modelValue","option"]),(0,l.Wm)(S,{modelValue:e.place,"onUpdate:modelValue":t[10]||(t[10]=t=>e.place=t),autocomplete:"off",placeholder:"请输入",label:"地点"},null,8,["modelValue"]),(0,l._)("div",r,[(0,l.Wm)(B,{placeholder:"扫描或输入产品序列号",onSearchClick:g.barSearchClick},null,8,["onSearchClick"]),e.serialNumberLable?((0,l.wg)(),(0,l.iD)("p",s,"查询结果: "+(0,i.zw)(e.serialNumberLable),1)):(0,l.kq)("",!0)])])),_:1}),c,(0,l.Wm)(I,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{"no-gutters":"",class:"custem-card-title"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{cols:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{icon:"mdi-dots-vertical",size:"16",color:"primary"}),u])),_:1}),(0,l.Wm)(w,{cols:"6"})])),_:1}),(0,l.Wm)(v,{modelValue:e.equipment,"onUpdate:modelValue":t[11]||(t[11]=t=>e.equipment=t),ref:"select7",label:"设备信息",showSearch:"",option:e.equipmentSelectOption,onOnSearchChange:g.equipmentSearchChange},null,8,["modelValue","option","onOnSearchChange"]),(0,l.Wm)(v,{modelValue:e.product,"onUpdate:modelValue":t[12]||(t[12]=t=>e.product=t),ref:"select8",label:"产品信息",showSearch:"",option:e.productSelectOption,onOnSearchChange:g.productSearchChange},null,8,["modelValue","option","onOnSearchChange"])])),_:1}),d,(0,l.Wm)(I,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{"no-gutters":"",class:"custem-card-title"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{cols:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{icon:"mdi-alert-circle",size:"16",color:"warning"}),p])),_:1}),(0,l.Wm)(w,{cols:"6"})])),_:1}),(0,l.Wm)(S,{modelValue:e.abnormalDescription,"onUpdate:modelValue":t[13]||(t[13]=t=>e.abnormalDescription=t),placeholder:"请输入",autocomplete:"off",type:"textarea",label:"异常描述",required:""},null,8,["modelValue"]),(0,l.Wm)(S,{modelValue:e.remark,"onUpdate:modelValue":t[14]||(t[14]=t=>e.remark=t),placeholder:"请输入",autocomplete:"off",type:"textarea",label:"备注"},null,8,["modelValue"]),(0,l.Wm)(L,{modelValue:e.bufferFileList,"onUpdate:modelValue":t[15]||(t[15]=t=>e.bufferFileList=t)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(k,{"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{cols:"12",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{onClick:g.submitHandle,color:"primary",block:""},{default:(0,l.w5)((()=>[(0,l.Uk)(" 确认发起 ")])),_:1},8,["onClick"])])),_:1})])),_:1}),h])}var f=a(21801),g=(a(57658),a(30541),a(38862),a(76496)),y=a(37184),b=a(89337),w=a(5878),k=a(2243),v=a(57265),S=a(73378),C=a(20868),O=(a(36797),{components:{AppBarPage:g.Z,UploaderImageComponents:v.Z,ScanBarComponents:S.Z,SelectComponents:k.Z},data:()=>({bufferRow:{},_switch11:"",fileList:[],bufferFileList:[],property:"",selectPropertyOption:[],type:"",typeSelectOption:[],content:"",contentSelectOption:[],show:!1,fieldValue:"",options:[],factoryID:"",urgency:"",urgencySelectOption:[],place:"",serialNumber:"",serialNumberLable:"",equipment:"",equipmentSelectOption:[],product:"",productSelectOption:[],abnormalDescription:"",remark:""}),created(){this.initFunc(),this.getContentHttp(),this.FactoryHTTP(),this.getEquipmentHttp(),this.productHTTP()},methods:{FormatDictionary(e="",t=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),l=a[e]||[],i=l.filter((e=>t==e.value))[0]||{};return i},async initFunc(){const e=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),t=e["abnormal_type"]||[];this.selectPropertyOption=t.map((e=>Object.assign({text:e.lable,value:e.value})));const a=e["urgent_degree"]||[];this.urgencySelectOption=a.map((e=>Object.assign({text:e.lable,value:e.value})));const l=JSON.parse(localStorage.getItem("bufferPageDataAnomalyInitiateSponsorFactory")||"{}");l.id&&(this.factoryID=l.id,this.fieldValue=l.text);const{ttQmAbnormalId:i}=this.$route.query;i&&this.editFunc(i)},async editFunc(e){const{code:t,data:a={}}=await(0,y.i)({url:`/iiot/abnormal/${e}`,method:"get"});200==t&&(this.property=a.abnormalType,this.type=a.tmBasAbnormalTypeId,this.content=a.tmBasAbnormalContentId,this.urgency=a.urgentDegree,this._switch11=String(a.isLineStop||""),this.place=a.abnormalPlace,this.serialNumber=a.ttPpOrderSnId,this.equipment=a.tmBasAbnormalMeasuresId,this.product=a.tmBasPartId,this.abnormalDescription=a.abnormalDesc,this.remark=a.initiateRemark,a.initiatePath&&(this.bufferFileList=a.initiatePath.split(",").map((e=>Object.assign({url:e})))),this.factoryID=a.tmBasNodeLevelId,this.factoryEdit(a.tmBasNodeLevelId),this.$nextTick((()=>{this.$refs.select11&&this.$refs.select11.setValue(a.abnormalType),this.$refs.select4&&this.$refs.select4.setValue(a.urgentDegree)})),this.getTypeHttp({abnormalAttribute:a.abnormalType},"",(()=>{this.$refs.selectType&&this.$refs.selectType.setValue(a.tmBasAbnormalTypeId)})),this.getContentHttp({tmBasAbnormalTypeId:a.tmBasAbnormalTypeId},"",(()=>{this.$refs.selectContent&&this.$refs.selectContent.setValue(a.tmBasAbnormalContentId)})),a.ttPpOrderSnId&&this.barSearchClick("",a.ttPpOrderSnId,(e=>{this.serialNumberLable=e["sernr"]})),this.getEquipmentHttp("",a.tmBasAbnormalMeasuresId,(()=>{this.$refs.select7&&this.$refs.select7.setValue(a.tmBasAbnormalMeasuresId)})),this.productHTTP("",a.tmBasPartId,(()=>{this.$refs.select8&&this.$refs.select8.setValue(a.tmBasPartId)})))},async factoryEdit(e){if(!e)return;const{data:t=[]}=await(0,b.jt)(),a=(0,w.b)(t,"tmBasNodeLevelId","parentId"),l=(e,t)=>{let a=[];for(let i=0;i<e.length;i++){const o=e[i];if(o.tmBasNodeLevelId===t){a.push(o);break}if(o.children&&0!==o.children.length){let e=l(o.children,t);if(0!==e.length){e.unshift(o),a=e;break}}}return a},i=l(a,e)||[];this.fieldValue=i.map((e=>e.nodeLevelName)).join("/")},typeSearchChange(e){this.getTypeHttp({abnormalAttribute:this.property},e)},async getTypeHttp(e={},t="",a){const{code:l,data:i=[]}=await(0,y.i)({url:"/iiot/abnormalType/listAbnormalTypeForSelect",method:"get",url_params:(0,f.Z)({abnormalNo:t},e)});200==l&&(this.typeSelectOption=i.map((e=>Object.assign({text:`${e.abnormalNo}${e.abnormalName}`,value:e.tmBasAbnormalTypeId}))),this.$nextTick((()=>{a&&a()})))},selectPropertyChange(e){this.type="",this.typeSelectOption=[],this.$refs.selectType.reset(),this.content="",this.contentSelectOption=[],this.$refs.selectContent.reset()},selectTypeChange(){this.content="",this.contentSelectOption=[],this.$refs.selectContent.reset()},typeFieldClick(){this.property?(this.getTypeHttp({abnormalAttribute:this.property}),setTimeout((()=>{this.$refs.selectType.showModle()}),600)):(0,C.LJ)("异常类型属性未选！")},contentFieldClick(){this.type?(this.getContentHttp({tmBasAbnormalTypeId:this.type}),setTimeout((()=>{this.$refs.selectContent.showModle()}),600)):(0,C.LJ)("异常类型未选！")},async getContentHttp(e={},t="",a){const{code:l,data:i=[]}=await(0,y.i)({url:"/iiot/abnormalContent/listAbnormalContentForSelect",method:"get",url_params:(0,f.Z)({contentNo:t},e)});200==l&&(this.contentSelectOption=i.map((e=>Object.assign({text:`${e.contentNo}${e.contentName}`,value:e.tmBasAbnormalContentId}))),this.$nextTick((()=>{a&&a()})))},contentSearchChange(e){this.getContentHttp({tmBasAbnormalTypeId:this.type},e)},async FactoryHTTP(){const{data:e=[]}=await(0,b.jt)(),t=(0,w.b)(e,"tmBasNodeLevelId","parentId");this.options=t},onFinish({selectedOptions:e}){if(!e.length)return;let t=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=t,this.fieldValue=e.map((e=>e.nodeLevelName)).join("/"),localStorage.setItem("bufferPageDataAnomalyInitiateSponsorFactory",JSON.stringify({id:this.factoryID,text:this.fieldValue}))},async getEquipmentHttp(e="",t="",a){const{code:l,data:i=[]}=await(0,y.i)({url:"/iiot/equipment/llistEquipmentForSelect",method:"get",url_params:{equipmentNo:e,tmBasEquipmentId:t}});200==l&&(this.equipmentSelectOption=i.map((e=>Object.assign({text:`${e.equipmentNo}${e.equipmentName}`,value:e.tmBasEquipmentId}))),this.$nextTick((()=>{a&&a()})))},equipmentSearchChange(e){this.getEquipmentHttp(e)},async productHTTP(e="",t="",a){const{code:l,data:i=[]}=await(0,y.i)({url:"/iiot/part/listPartForSelect",method:"get",url_params:{noOrName:e,tmBasPartId:t}});200==l&&(this.productSelectOption=i.map((e=>Object.assign({text:`${e.matnr}${e.maktxC}`,value:e.tmBasPartId}))).splice(0,100),this.$nextTick((()=>{a&&a()})))},productSearchChange(e){this.productHTTP(e)},async submitHandle(){const{ttQmAbnormalId:e}=this.$route.query;if(!this.property)return void(0,C.LJ)("异常类型属性必填！");if(!this.type)return void(0,C.LJ)("异常类型必填！");if(!this.content)return void(0,C.LJ)("异常内容必填！");if(!this.factoryID)return void(0,C.LJ)("工厂节点必填！");if(!String(this._switch11))return void(0,C.LJ)("是否停线必填！");if(!this.urgency)return void(0,C.LJ)("紧急程度必填！");if(!this.abnormalDescription)return void(0,C.LJ)("异常描述必填！");const t={ttQmAbnormalId:e||"",abnormalType:this.property,tmBasAbnormalTypeId:this.type,tmBasAbnormalContentId:this.content,tmBasNodeLevelId:this.factoryID,isLineStop:String(this._switch11),urgentDegree:this.urgency,abnormalPlace:this.place,ttPpOrderSnId:this.serialNumber,tmBasAbnormalMeasuresId:this.equipment,tmBasPartId:this.product,abnormalDesc:this.abnormalDescription,initiateRemark:this.remark,initiatePath:this.bufferFileList.map((e=>e.url)).join()},{code:a,data:l={}}=await(0,y.i)({url:"/iiot/abnormal",method:e?"put":"post",payload:t});200==a&&((0,C.XA)("提交成功！"),this.$router.push({path:"/anomalyInitiate/index",query:{}}))},async barSearchClick(e="",t="",a){this.serialNumber="",this.serialNumberLable="";const{code:l,data:i=[]}=await(0,y.i)({url:"/iiot/orderSn/listOrderSnForSelect",method:"get",url_params:{sernr:e,ttPpOrderSnId:t}});200==l&&i.length?((0,C.XA)("查询成功！"),this.serialNumberLable=i[0].sernr,this.serialNumber=i[0].ttPpOrderSnId,this.$nextTick((()=>{a&&a(i[0]||{})}))):(0,C.LJ)("未查询到结果！")}}}),_=a(40089);const V=(0,_.Z)(O,[["render",m]]);var x=V}}]);
//# sourceMappingURL=chunk.9083.1689577235749.js.map