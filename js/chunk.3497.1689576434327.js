"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[3497],{2243:function(e,t,l){l.d(t,{Z:function(){return w}});var i=l(73396),a=l(87139);const o={style:{height:"98%","padding-bottom":"40px"}},s={style:{height:"100%"}},n={style:{position:"relative",top:"4px"}},r=["onClick"],u={class:"text-truncate",style:{height:"24px"}},c={key:2,class:"text-center",style:{"margin-top":"16px"}};function d(e,t,l,d,p,h){const f=(0,i.up)("van-field"),m=(0,i.up)("v-col"),w=(0,i.up)("v-btn"),g=(0,i.up)("v-row"),k=(0,i.up)("van-search"),_=(0,i.up)("van-checkbox"),v=(0,i.up)("van-popup");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(f,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:l.required,label:l.label,placeholder:l.placeholder,autocomplete:"off",type:l.multiple?"textarea":"text",onClick:h.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,i.Wm)(v,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",s,[(0,i.Wm)(g,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"6"},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,a.zw)(l.label)+"-选择框",1)])),_:1}),(0,i.Wm)(m,{cols:"6",class:"text-right"},{default:(0,i.w5)((()=>[(0,i._)("span",n,(0,a.zw)(e.BufferOption.filter((e=>e._checked)).length),1),l.selectAll?((0,i.wg)(),(0,i.j4)(w,{key:0,onClick:h.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("全选")])),_:1},8,["onClick"])):(0,i.kq)("",!0)])),_:1})])),_:1}),l.showSearch?((0,i.wg)(),(0,i.j4)(g,{key:0,"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"8"},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:l.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,i.Wm)(m,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{onClick:t[2]||(t[2]=e=>h.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 查询 ")])),_:1})])),_:1}),(0,i.Wm)(m,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{onClick:t[3]||(t[3]=e=>h.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,i.kq)("",!0),e.BufferOption.length?((0,i.wg)(),(0,i.iD)("ul",{key:1,style:(0,a.j5)(`height: ${l.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.BufferOption,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,style:(0,a.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>h.checkChange(e)},[(0,i._)("p",u,(0,a.zw)(e.text),1),(0,i.Wm)(_,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,r)))),128))],4)):((0,i.wg)(),(0,i.iD)("p",c,"无数据!"))]),(0,i.Wm)(g,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 取消 ")])),_:1})])),_:1}),(0,i.Wm)(m,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{variant:"plain",color:"primary",block:"",onClick:h.confirmHandle},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}l(38862),l(73210),l(26699),l(32023);var p=l(20868),h={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:l,value:i}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i?!l:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i&&!l})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:l}=this;if(l&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),l=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!l.length)return void(0,p.LJ)("不存在！");const i=e.filter((e=>!e.text.includes(t))),a=i.filter((e=>e._checked)),o=i.filter((e=>!e._checked));this.BufferOption=l.concat(a).concat(o)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},f=l(40089);const m=(0,f.Z)(h,[["render",d]]);var w=m},57265:function(e,t,l){l.d(t,{Z:function(){return w}});var i=l(73396);const a={style:{padding:"0px 12px 0px 12px"}},o={key:0,class:"font-weight-medium text",style:{"margin-bottom":"8px"}},s={key:1,style:{"margin-bottom":"8px"},class:"font-weight-medium text"},n={class:"custem-iamge-upload"},r=["src"];function u(e,t,l,u,c,d){const p=(0,i.up)("van-uploader"),h=(0,i.up)("v-icon");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i._)("div",a,[l.preview?((0,i.wg)(),(0,i.iD)("p",o,"图片预览 ")):((0,i.wg)(),(0,i.iD)("p",s," 图片上传 ")),l.preview?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(p,{key:2,"after-read":d.afterRead,"preview-image":!1},null,8,["after-read"])),(0,i._)("div",n,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.bufferFileList,((a,o)=>((0,i.wg)(),(0,i.iD)("li",{key:o,onClick:t[0]||(t[0]=t=>d.checkImage(e.bufferFileList))},[(0,i._)("img",{src:a.url},null,8,r),l.preview?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(h,{key:0,onClick:e=>d.removeClick(a,e),class:"icon",icon:"mdi-close-circle-outline",color:"red"},null,8,["onClick"]))])))),128))])])])}l(26699),l(32023),l(38862);var c=l(37184),d=l(20868),p=l(9801),h={components:{},emits:["update:modelValue","onChange"],data:()=>({bufferFileList:[]}),watch:{modelValue:{handler(e=[]){this.bufferFileList=e},deep:!0,immediate:!0},initPath:{handler(e=""){e&&(this.bufferFileList=e.split(",").map((e=>Object.assign({url:e}))))},deep:!0,immediate:!0}},methods:{checkImage(e=[]){e.length&&(0,p.V)(e.map((e=>e.url)))},async afterRead(e){if(!e.file.type.includes("image"))return void(0,d.LJ)("只能选择图片！");if(e.file.size>=19922944)return void(0,d.LJ)("图片超过20M！");if(this.bufferFileList.length>2)return void(0,d.LJ)("最多只能选择3张图片！");let t=new FormData;t.append("file",e.file);const{code:l,data:i={}}=await(0,c.i)({url:"/file/upload",method:"post",formData:!0,payload:t});200==l?(this.bufferFileList=this.bufferFileList.concat([i]),(0,d.XA)("图片上传成功！"),this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.bufferFileList)))):(0,d.LJ)("图片上传失败！")},removeClick(e,t){t.stopPropagation(),this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter((t=>t.url!=e.url)),this.$nextTick((()=>{this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.bufferFileList)))}))}},props:{modelValue:{type:Array,default:()=>[]},initPath:{type:String,default:()=>""},preview:{type:Boolean,default:()=>!1}}},f=l(40089);const m=(0,f.Z)(h,[["render",u]]);var w=m},41055:function(e,t,l){l.r(t),l.d(t,{default:function(){return P}});var i=l(73396),a=l(87139);const o=(0,i._)("span",{class:"font-weight-medium"},"例外转序信息",-1),s=(0,i._)("p",{class:"font-weight-medium text"},"序列号:",-1),n={class:"font-weight-light text-left text-teal-lighten-1"},r=(0,i._)("p",{class:"font-weight-medium text"},"发起工序:",-1),u={class:"font-weight-light"},c=(0,i._)("p",{class:"font-weight-medium text"},"拦截工序:",-1),d={class:"font-weight-light"},p=(0,i._)("p",{class:"font-weight-medium text"},"例外转序原因:",-1),h={class:"font-weight-light"},f=(0,i._)("p",{class:"font-weight-medium text"},"整机物料:",-1),m={class:"font-weight-light"},w=(0,i._)("p",{class:"font-weight-medium text"},"发起人:",-1),g={class:"font-weight-light"},k=(0,i._)("p",{class:"font-weight-medium text"},"发起时间:",-1),_={class:"font-weight-light"},v=(0,i._)("div",{style:{height:"56px"}},null,-1);function b(e,t,l,b,x,y){const C=(0,i.up)("AppBarPage"),O=(0,i.up)("v-icon"),W=(0,i.up)("v-col"),S=(0,i.up)("v-row"),V=(0,i.up)("UploaderImageComponents"),B=(0,i.up)("SelectComponents"),L=(0,i.up)("van-field"),P=(0,i.up)("v-btn"),j=(0,i.up)("v-sheet");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(C),(0,i.Wm)(j,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{"no-gutters":"",class:"custem-card-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{cols:"7"},{default:(0,i.w5)((()=>[(0,i.Wm)(O,{icon:"mdi-rocket-launch",size:"16",color:"primary"}),o])),_:1}),(0,i.Wm)(W,{cols:"5",class:"text-right"})])),_:1}),(0,i.Wm)(S,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{cols:"4"},{default:(0,i.w5)((()=>[s])),_:1}),(0,i.Wm)(W,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",n,(0,a.zw)(e.bufferRow.sn),1)])),_:1})])),_:1}),(0,i.Wm)(S,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{cols:"4"},{default:(0,i.w5)((()=>[r])),_:1}),(0,i.Wm)(W,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",u,(0,a.zw)(e.bufferRow.initiateProcess),1)])),_:1})])),_:1}),(0,i.Wm)(S,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{cols:"4"},{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(W,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",d,(0,a.zw)(e.bufferRow.interceptProcess),1)])),_:1})])),_:1}),(0,i.Wm)(S,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{cols:"4"},{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(W,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",h,(0,a.zw)(e.bufferRow.conversionDesc),1)])),_:1})])),_:1}),(0,i.Wm)(S,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{cols:"4"},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(W,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",m,(0,a.zw)(e.bufferRow.partName),1)])),_:1})])),_:1}),(0,i.Wm)(S,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{cols:"4"},{default:(0,i.w5)((()=>[w])),_:1}),(0,i.Wm)(W,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",g,(0,a.zw)(e.bufferRow.initiateByName),1)])),_:1})])),_:1}),(0,i.Wm)(S,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(W,{cols:"4"},{default:(0,i.w5)((()=>[k])),_:1}),(0,i.Wm)(W,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",_,(0,a.zw)(e.bufferRow.createDate),1)])),_:1})])),_:1}),(0,i.Wm)(V,{initPath:e.bufferRow.initiatePath,preview:""},null,8,["initPath"]),(0,i.Wm)(B,{modelValue:e.measures,"onUpdate:modelValue":t[0]||(t[0]=t=>e.measures=t),ref:"select11",label:"放行工序",required:"",option:e.measuresSelectOption,onOnSearchChange:y.measuresSelectSearchChange},null,8,["modelValue","option","onOnSearchChange"]),(0,i.Wm)(L,{modelValue:e.value1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value1=t),type:"textarea",required:"",autocomplete:"off",placeholder:"请输入",label:"放行原因"},null,8,["modelValue"]),(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i.Wm)(W,{cols:"12",class:"text-left"},{default:(0,i.w5)((()=>[(0,i.Wm)(P,{onClick:y.submit,block:"",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 放行 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),v])}l(73210);var x=l(76496),y=l(37184),C=l(2243),O=l(73378),W=l(57265),S=l(20868),V={components:{AppBarPage:x.Z,ScanBarComponents:O.Z,SelectComponents:C.Z,UploaderImageComponents:W.Z},data:()=>({bufferRow:{},bufferFileList:[],value1:"",measures:"",measuresSelectOption:[]}),watch:{},created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),i=l[e]||[],a=i.filter((e=>t==e.value))[0]||{};return a},async initFunc(){const{ttQmAbnormalConversionId:e}=this.$route.query,{code:t,data:l={}}=await(0,y.i)({url:`/iiot/abnormalConversion/${e}`,method:"get"});200==t&&(this.bufferRow=l,l.ttPpOrderSnId&&this.measuresHTTP(l.ttPpOrderSnId))},async measuresHTTP(e){const{bufferRow:t}=this,{code:l,data:i=[]}=await(0,y.i)({url:"/iiot/qmTask/getInspectNodeLevelList",method:"get",url_params:{ttPpOrderSnId:e}});200==l&&(this.measuresSelectOption=i.map((e=>Object.assign({text:e.nodeLevelNo+e.nodeLevelName,value:e.tmBasNodeLevelId}))))},measuresSelectSearchChange(e){},async submit(){const{ttQmAbnormalConversionId:e}=this.$route.query,{bufferRow:t}=this;if(!this.measures)return void(0,S.LJ)("放行工序必选！");if(!this.value1.trim())return void(0,S.LJ)("放行原因必填！");const l={ttQmAbnormalConversionId:e,dischargedProcessId:this.measures,dischargedExplain:this.value1},{code:i,data:a={}}=await(0,y.i)({url:"/iiot/abnormalConversion/dischargedAbnormalConversion",method:"post",payload:l});200==i&&((0,S.XA)("提交成功！"),this.$router.go(-1))}}},B=l(40089);const L=(0,B.Z)(V,[["render",b]]);var P=L}}]);
//# sourceMappingURL=chunk.3497.1689576434327.js.map