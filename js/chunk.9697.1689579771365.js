"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[9697],{2243:function(e,t,l){l.d(t,{Z:function(){return w}});var i=l(73396),a=l(87139);const s={style:{height:"98%","padding-bottom":"40px"}},o={style:{height:"100%"}},r={style:{position:"relative",top:"4px"}},u=["onClick"],n={class:"text-truncate",style:{height:"24px"}},d={key:2,class:"text-center",style:{"margin-top":"16px"}};function p(e,t,l,p,c,h){const f=(0,i.up)("van-field"),m=(0,i.up)("v-col"),w=(0,i.up)("v-btn"),g=(0,i.up)("v-row"),_=(0,i.up)("van-search"),b=(0,i.up)("van-checkbox"),v=(0,i.up)("van-popup");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(f,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:l.required,label:l.label,placeholder:l.placeholder,autocomplete:"off",type:l.multiple?"textarea":"text",onClick:h.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,i.Wm)(v,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i._)("div",o,[(0,i.Wm)(g,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"6"},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,a.zw)(l.label)+"-选择框",1)])),_:1}),(0,i.Wm)(m,{cols:"6",class:"text-right"},{default:(0,i.w5)((()=>[(0,i._)("span",r,(0,a.zw)(e.BufferOption.filter((e=>e._checked)).length),1),l.selectAll?((0,i.wg)(),(0,i.j4)(w,{key:0,onClick:h.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("全选")])),_:1},8,["onClick"])):(0,i.kq)("",!0)])),_:1})])),_:1}),l.showSearch?((0,i.wg)(),(0,i.j4)(g,{key:0,"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"8"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:l.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,i.Wm)(m,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{onClick:t[2]||(t[2]=e=>h.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 查询 ")])),_:1})])),_:1}),(0,i.Wm)(m,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{onClick:t[3]||(t[3]=e=>h.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,i.kq)("",!0),e.BufferOption.length?((0,i.wg)(),(0,i.iD)("ul",{key:1,style:(0,a.j5)(`height: ${l.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.BufferOption,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,style:(0,a.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>h.checkChange(e)},[(0,i._)("p",n,(0,a.zw)(e.text),1),(0,i.Wm)(b,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,u)))),128))],4)):((0,i.wg)(),(0,i.iD)("p",d,"无数据!"))]),(0,i.Wm)(g,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 取消 ")])),_:1})])),_:1}),(0,i.Wm)(m,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{variant:"plain",color:"primary",block:"",onClick:h.confirmHandle},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}l(38862),l(73210),l(26699),l(32023);var c=l(20868),h={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:l,value:i}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i?!l:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i&&!l})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:l}=this;if(l&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),l=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!l.length)return void(0,c.LJ)("不存在！");const i=e.filter((e=>!e.text.includes(t))),a=i.filter((e=>e._checked)),s=i.filter((e=>!e._checked));this.BufferOption=l.concat(a).concat(s)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},f=l(40089);const m=(0,f.Z)(h,[["render",p]]);var w=m},57265:function(e,t,l){l.d(t,{Z:function(){return w}});var i=l(73396);const a={style:{padding:"0px 12px 0px 12px"}},s={key:0,class:"font-weight-medium text",style:{"margin-bottom":"8px"}},o={key:1,style:{"margin-bottom":"8px"},class:"font-weight-medium text"},r={class:"custem-iamge-upload"},u=["src"];function n(e,t,l,n,d,p){const c=(0,i.up)("van-uploader"),h=(0,i.up)("v-icon");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i._)("div",a,[l.preview?((0,i.wg)(),(0,i.iD)("p",s,"图片预览 ")):((0,i.wg)(),(0,i.iD)("p",o," 图片上传 ")),l.preview?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(c,{key:2,"after-read":p.afterRead,"preview-image":!1},null,8,["after-read"])),(0,i._)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.bufferFileList,((a,s)=>((0,i.wg)(),(0,i.iD)("li",{key:s,onClick:t[0]||(t[0]=t=>p.checkImage(e.bufferFileList))},[(0,i._)("img",{src:a.url},null,8,u),l.preview?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(h,{key:0,onClick:e=>p.removeClick(a,e),class:"icon",icon:"mdi-close-circle-outline",color:"red"},null,8,["onClick"]))])))),128))])])])}l(26699),l(32023),l(38862);var d=l(37184),p=l(20868),c=l(9801),h={components:{},emits:["update:modelValue","onChange"],data:()=>({bufferFileList:[]}),watch:{modelValue:{handler(e=[]){this.bufferFileList=e},deep:!0,immediate:!0},initPath:{handler(e=""){e&&(this.bufferFileList=e.split(",").map((e=>Object.assign({url:e}))))},deep:!0,immediate:!0}},methods:{checkImage(e=[]){e.length&&(0,c.V)(e.map((e=>e.url)))},async afterRead(e){if(!e.file.type.includes("image"))return void(0,p.LJ)("只能选择图片！");if(e.file.size>=19922944)return void(0,p.LJ)("图片超过20M！");if(this.bufferFileList.length>2)return void(0,p.LJ)("最多只能选择3张图片！");let t=new FormData;t.append("file",e.file);const{code:l,data:i={}}=await(0,d.i)({url:"/file/upload",method:"post",formData:!0,payload:t});200==l?(this.bufferFileList=this.bufferFileList.concat([i]),(0,p.XA)("图片上传成功！"),this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.bufferFileList)))):(0,p.LJ)("图片上传失败！")},removeClick(e,t){t.stopPropagation(),this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter((t=>t.url!=e.url)),this.$nextTick((()=>{this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.bufferFileList)))}))}},props:{modelValue:{type:Array,default:()=>[]},initPath:{type:String,default:()=>""},preview:{type:Boolean,default:()=>!1}}},f=l(40089);const m=(0,f.Z)(h,[["render",n]]);var w=m},13403:function(e,t,l){l.r(t),l.d(t,{default:function(){return ee}});var i=l(73396),a=l(87139);const s=(0,i._)("span",{class:"font-weight-medium"},"基础信息",-1),o={class:"text-truncate font-weight-medium text-right text-teal-lighten-1",color:"primary"},r=(0,i._)("div",{style:{height:"6px"}},null,-1),u=(0,i._)("p",{class:"font-weight-medium text"},"检验产品:",-1),n={class:"font-weight-light text-left"},d=(0,i._)("p",{class:"font-weight-medium text"},"订单号:",-1),p={class:"font-weight-light text-left"},c=(0,i._)("p",{class:"font-weight-medium text"},"工作中心:",-1),h={class:"font-weight-light text-left"},f=(0,i._)("p",{class:"font-weight-medium text"},"产品SN号:",-1),m={class:"font-weight-light text-left"},w=(0,i._)("p",{class:"font-weight-medium text"},"检验数量:",-1),g={class:"font-weight-light text-left"},_=(0,i._)("p",{class:"font-weight-medium text"},"状态:",-1),b={class:"font-weight-light text-left"},v=(0,i._)("p",{class:"font-weight-medium text"},"检验类型:",-1),k={class:"font-weight-light text-left"},y=(0,i._)("span",{class:"font-weight-medium"},"录入信息",-1),x=(0,i._)("div",{style:{height:"6px"}},null,-1),W={style:{position:"relative",top:"5px"}},C={style:{"padding-left":"4px"}},V={class:"font-weight-medium text"},S={class:"font-weight-medium text"},O={class:"font-weight-medium text"},B={style:{color:"#00E5FF"}},F=(0,i._)("div",{style:{height:"12px"}},null,-1),D={style:{position:"relative",top:"5px"}},N={style:{"padding-left":"4px"}},$={class:"font-weight-medium text"},j={class:"font-weight-medium text"},L={class:"font-weight-medium text"},R={style:{color:"#00E5FF"}},q=(0,i._)("div",{style:{height:"12px"}},null,-1),U={key:0,style:{height:"12px"}},J={key:0,style:{height:"12px"}},P=(0,i._)("div",{style:{height:"12px"}},null,-1),T=(0,i._)("div",{style:{height:"6px"}},null,-1),z=(0,i._)("div",{style:{height:"82px"}},null,-1);function A(e,t,l,A,H,Z){const I=(0,i.up)("AppBarPage"),M=(0,i.up)("v-icon"),Q=(0,i.up)("v-col"),Y=(0,i.up)("v-row"),X=(0,i.up)("v-sheet"),E=(0,i.up)("SelectComponents"),K=(0,i.up)("v-divider"),G=(0,i.up)("van-field"),ee=(0,i.up)("UploaderImageComponents"),te=(0,i.up)("v-btn");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(I),(0,i.Wm)(X,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{"no-gutters":"",class:"custem-card-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"7"},{default:(0,i.w5)((()=>[(0,i.Wm)(M,{icon:"mdi-rocket-launch",size:"16",color:"primary"}),s])),_:1}),(0,i.Wm)(Q,{cols:"5"},{default:(0,i.w5)((()=>[(0,i._)("p",o,(0,a.zw)(e.isDetail?"详情":"编辑"),1)])),_:1})])),_:1}),r,(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"4"},{default:(0,i.w5)((()=>[u])),_:1}),(0,i.Wm)(Q,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",n,(0,a.zw)(e.bufferRow.partName),1)])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"4"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(Q,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",p,(0,a.zw)(e.bufferRow.orderNo),1)])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"4"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(Q,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",h,(0,a.zw)(e.bufferRow.nodeLevelName),1)])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"4"},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(Q,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",m,(0,a.zw)(e.bufferRow.sn),1)])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"4"},{default:(0,i.w5)((()=>[w])),_:1}),(0,i.Wm)(Q,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",g,(0,a.zw)(e.bufferRow.taskQty),1)])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"4"},{default:(0,i.w5)((()=>[_])),_:1}),(0,i.Wm)(Q,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",b,(0,a.zw)(Z.FormatDictionary("qm_task_status",e.bufferRow.taskStatus)["lable"]),1)])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"4"},{default:(0,i.w5)((()=>[v])),_:1}),(0,i.Wm)(Q,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",k,(0,a.zw)(Z.FormatDictionary("test_type",e.bufferRow.taskType)["lable"]),1)])),_:1})])),_:1})])),_:1}),(0,i.Wm)(X,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,i.w5)((()=>[(0,i.Wm)(Y,{"no-gutters":"",class:"custem-card-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"7"},{default:(0,i.w5)((()=>[(0,i.Wm)(M,{icon:"mdi-file-edit-outline",size:"16",color:"primary"}),y])),_:1}),(0,i.Wm)(Q,{cols:"5"})])),_:1}),x,(0,i._)("div",W,[(0,i.Wm)(E,{modelValue:e.supplier,"onUpdate:modelValue":t[0]||(t[0]=t=>e.supplier=t),ref:"select11",label:"供应商代码",filterSearch:"",showSearch:"",disabled:e.isDetail,option:e.supplierSelectOption,onOnChange:Z.supplierSelectChange},null,8,["modelValue","disabled","option","onOnChange"])]),(0,i._)("div",C,[(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",V," 电池品牌: "+(0,a.zw)(e.bufferRow4.battery),1)])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",S," SAP物料号: "+(0,a.zw)(e.bufferRow2.matnr),1)])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",O,[(0,i.Uk)(" 电池规格型号: "),(0,i._)("span",B,(0,a.zw)(e.bufferRow2.batterySpecs),1)])])),_:1})])),_:1})]),F,(0,i.Wm)(K),(0,i._)("div",D,[(0,i.Wm)(E,{modelValue:e.supplier2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.supplier2=t),ref:"select22",label:"供应商代码",disabled:e.isDetail,filterSearch:"",showSearch:"",option:e.supplierSelectOption2,onOnChange:Z.supplierSelectChange},null,8,["modelValue","disabled","option","onOnChange"])]),(0,i._)("div",N,[(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",$,[(0,i.Uk)(" 充电器品牌: "),(0,i._)("span",null,(0,a.zw)(e.bufferRow4.charger),1)])])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",j," SAP物料号: "+(0,a.zw)(e.bufferRow3.chargerMatnr),1)])),_:1})])),_:1}),(0,i.Wm)(Y,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"12"},{default:(0,i.w5)((()=>[(0,i._)("p",L,[(0,i.Uk)(" 充电器规格型号: "),(0,i._)("span",R,(0,a.zw)(e.bufferRow3.chargerSpecs),1)])])),_:1})])),_:1}),q,(0,i.Wm)(K),e.isDetail?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",U)),"0"==e.showBtn?((0,i.wg)(),(0,i.j4)(G,{key:1,modelValue:e.value111,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value111=t),disabled:e.isDetail,"label-width":"7.5em",placeholder:"请输入",autocomplete:"off",label:"充电曲线数值:",required:""},null,8,["modelValue","disabled"])):(0,i.kq)("",!0),"1"==e.showBtn?((0,i.wg)(),(0,i.j4)(G,{key:2,modelValue:e.value222,"onUpdate:modelValue":t[3]||(t[3]=t=>e.value222=t),disabled:e.isDetail,"label-width":"7.5em",placeholder:"请输入",autocomplete:"off",label:"36预报警数值:",required:""},null,8,["modelValue","disabled"])):(0,i.kq)("",!0),"1"==e.showBtn?((0,i.wg)(),(0,i.j4)(G,{key:3,modelValue:e.value333,"onUpdate:modelValue":t[4]||(t[4]=t=>e.value333=t),disabled:e.isDetail,"label-width":"7.5em",placeholder:"请输入",autocomplete:"off",label:"68预报警数值:",required:""},null,8,["modelValue","disabled"])):(0,i.kq)("",!0)]),e.isDetail?((0,i.wg)(),(0,i.iD)("div",J,[(0,i.Wm)(G,{modelValue:e.value111,"onUpdate:modelValue":t[5]||(t[5]=t=>e.value111=t),disabled:e.isDetail,"label-width":"7.5em",placeholder:"请输入",autocomplete:"off",label:"充电曲线数值:",required:""},null,8,["modelValue","disabled"]),(0,i.Wm)(G,{modelValue:e.value222,"onUpdate:modelValue":t[6]||(t[6]=t=>e.value222=t),disabled:e.isDetail,"label-width":"7.5em",placeholder:"请输入",autocomplete:"off",label:"36预报警数值:",required:""},null,8,["modelValue","disabled"]),(0,i.Wm)(G,{modelValue:e.value333,"onUpdate:modelValue":t[7]||(t[7]=t=>e.value333=t),disabled:e.isDetail,"label-width":"7.5em",placeholder:"请输入",autocomplete:"off",label:"68预报警数值:",required:""},null,8,["modelValue","disabled"])])):(0,i.kq)("",!0),P,(0,i.Wm)(ee,{modelValue:e.bufferFileList,"onUpdate:modelValue":t[8]||(t[8]=t=>e.bufferFileList=t),preview:e.isDetail},null,8,["modelValue","preview"])])),_:1}),T,e.isDetail?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(Y,{key:0,"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(Q,{cols:"12",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(te,{onClick:Z.submit,color:"primary",block:""},{default:(0,i.w5)((()=>[(0,i.Uk)("提交")])),_:1},8,["onClick"])])),_:1})])),_:1})),z])}var H=l(21801),Z=(l(73210),l(76496)),I=l(2243),M=l(57265),Q=l(73378),Y=l(37184),X=l(20868),E={components:{AppBarPage:Z.Z,SelectComponents:I.Z,ScanBarComponents:Q.Z,UploaderImageComponents:M.Z},data:()=>({isDetail:!1,bufferFileList:[],bufferRow:{},bufferRow2:{},bufferRow3:{},bufferRow4:{},showBtn:"",value111:"",value222:"",value333:"",supplier:"",supplierSelectOption:[],supplier2:"",supplierSelectOption2:[]}),created(){this.initFunc(),this.supplierHTTP(),this.supplierHTTP2()},methods:{GlobalTooltipFunc(e=""){(0,X.CF)({message:e,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),i=l[e]||[],a=i.filter((e=>t==e.value))[0]||{};return a},async initFunc(){const{row:e,_pageActive:t,batteryCheckType:l=""}=this.$route.query;this.showBtn=l;const i=JSON.parse(e);this.bufferRow=i,this.isDetail="detail"==t;const{code:a,data:s={}}=await(0,Y.i)({url:`/iiot/batteryCurve/getBatteryInfoByOrderNo/${i.orderNo}`,method:"get"});200==a&&(this.bufferRow2=s,this.bufferRow3=s,this.$nextTick((()=>{this.getDetailFunc()})))},async getDetailFunc(){const{row:e,_pageActive:t}=this.$route.query,l=JSON.parse(e),{code:i,data:a=[]}=await(0,Y.i)({url:"/iiot/batteryResult/list",method:"get",url_params:{orderNo:l.orderNo,partNo:l.partNo}});if(200==i&&a&&a.length){const e=a[0];e.filePath&&(this.bufferFileList=e.filePath.split(",").map((e=>Object.assign({url:e})))),this.supplier=e.supplierCode,this.supplier2=e.chargerSupplierCode,"detail"==t&&(this.value111=e.curve,this.value222=e.reportFin,this.value333=e.reportOne),this.$nextTick((()=>{this.$refs.select11&&this.$refs.select11.setValue(e.supplierCode),this.$refs.select22&&this.$refs.select22.setValue(e.chargerSupplierCode),this.supplierSelectChange()}))}},async barSearchClick(e=""){const t=e.trim(),{code:l,data:i=[]}=await(0,Y.i)({url:"/iiot/qmTask/listQmTaskSnForSelect",method:"get",url_params:{sn:t}});if(200==l){if(!i.length)return void(0,X.LJ)("SN号不存在！");(0,X.XA)("扫描成功！")}},barSearchClick2(e=""){},async submit(){const{bufferRow4:e,bufferRow:t}=this,l=this.value111.trim(),i=this.value222.trim(),a=this.value333.trim();let s={};if("0"==this.showBtn&&(s={curve:e.curve}),"1"==this.showBtn&&(s={reportFin:e.reportFin,reportOne:e.reportOne}),e.curve!=l&&"0"==this.showBtn)return void(0,X.LJ)("充电曲线数值不匹配!");if(e.reportOne!=i&&"1"==this.showBtn)return void(0,X.LJ)("36预报警数值不匹配!");if(e.reportFin!=a&&"1"==this.showBtn)return void(0,X.LJ)("68预报警数值不匹配!");const o=(0,H.Z)((0,H.Z)((0,H.Z)({},this.bufferRow2),{},{ttQmTaskId:t.ttQmTaskId,orderNo:t.orderNo,partNo:t.partNo,partName:t.partName,tmBasNodeLevelId:t.tmBasNodeLevelId,supplierCode:this.supplier,chargerSupplierCode:this.supplier2},s),{},{partModel:e.partModel,battery:e.battery,charger:e.charger,filePath:this.bufferFileList.map((e=>e.url)).join()}),{code:r,data:u={}}=await(0,Y.i)({url:"/iiot/batteryResult",method:"post",payload:o});200==r&&((0,X.XA)("提交成功！"),this.$router.go(-1))},async supplierHTTP(){const{code:e,data:t=[]}=await(0,Y.i)({url:"/iiot/supplier/list",method:"get",url_params:{delFlag:"Y"}});200==e&&(this.supplierSelectOption=t.map((e=>Object.assign({text:`${e.supplierCode}-${e.supplierName}`,value:e.supplierCode}))))},async supplierHTTP2(){const{code:e,data:t=[]}=await(0,Y.i)({url:"/iiot/supplier/list",method:"get",url_params:{delFlag:"Y"}});200==e&&(this.supplierSelectOption2=t.map((e=>Object.assign({text:`${e.supplierCode}-${e.supplierName}`,value:e.supplierCode}))))},async supplierSelectChange(){const{row:e}=this.$route.query,t=JSON.parse(e),l=t.partNo.slice(0,6);if(!this.supplier||!this.supplier2)return;const{bufferRow2:i}=this,{code:a,data:s=[]}=await(0,Y.i)({url:"/iiot/batteryCurve/list",method:"get",url_params:{partModel:l,supplierCode:this.supplier,chargerSupplierCode:this.supplier2,matnr:i.matnr,chargerMatnr:i.chargerMatnr}});200==a&&(this.bufferRow4=s[0]||{})}}},K=l(40089);const G=(0,K.Z)(E,[["render",A]]);var ee=G}}]);
//# sourceMappingURL=chunk.9697.1689579771365.js.map