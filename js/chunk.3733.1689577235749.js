"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[3733],{89337:function(e,t,l){l.d(t,{$w:function(){return c},AT:function(){return s},NM:function(){return u},ew:function(){return n},jt:function(){return i},vU:function(){return o}});var a=l(37184);const i=async(e={})=>await(0,a.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),s=async e=>await(0,a.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),o=async e=>await(0,a.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),n=async e=>await(0,a.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),u=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),c=async e=>await(0,a.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},2243:function(e,t,l){l.d(t,{Z:function(){return w}});var a=l(73396),i=l(87139);const s={style:{height:"98%","padding-bottom":"40px"}},o={style:{height:"100%"}},n={style:{position:"relative",top:"4px"}},u=["onClick"],c={class:"text-truncate",style:{height:"24px"}},r={key:2,class:"text-center",style:{"margin-top":"16px"}};function d(e,t,l,d,f,m){const p=(0,a.up)("van-field"),h=(0,a.up)("v-col"),w=(0,a.up)("v-btn"),g=(0,a.up)("v-row"),_=(0,a.up)("van-search"),x=(0,a.up)("van-checkbox"),W=(0,a.up)("van-popup");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(p,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:l.required,label:l.label,placeholder:l.placeholder,autocomplete:"off",type:l.multiple?"textarea":"text",onClick:m.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,a.Wm)(W,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("div",o,[(0,a.Wm)(g,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{cols:"6"},{default:(0,a.w5)((()=>[(0,a._)("p",null,(0,i.zw)(l.label)+"-选择框",1)])),_:1}),(0,a.Wm)(h,{cols:"6",class:"text-right"},{default:(0,a.w5)((()=>[(0,a._)("span",n,(0,i.zw)(e.BufferOption.filter((e=>e._checked)).length),1),l.selectAll?((0,a.wg)(),(0,a.j4)(w,{key:0,onClick:m.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,a.w5)((()=>[(0,a.Uk)("全选")])),_:1},8,["onClick"])):(0,a.kq)("",!0)])),_:1})])),_:1}),l.showSearch?((0,a.wg)(),(0,a.j4)(g,{key:0,"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{cols:"8"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:l.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,a.Wm)(h,{cols:"2"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{onClick:t[2]||(t[2]=e=>m.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" 查询 ")])),_:1})])),_:1}),(0,a.Wm)(h,{cols:"2"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{onClick:t[3]||(t[3]=e=>m.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),e.BufferOption.length?((0,a.wg)(),(0,a.iD)("ul",{key:1,style:(0,i.j5)(`height: ${l.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.BufferOption,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,style:(0,i.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>m.checkChange(e)},[(0,a._)("p",c,(0,i.zw)(e.text),1),(0,a.Wm)(x,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,u)))),128))],4)):((0,a.wg)(),(0,a.iD)("p",r,"无数据!"))]),(0,a.Wm)(g,{"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{cols:"6",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 取消 ")])),_:1})])),_:1}),(0,a.Wm)(h,{cols:"6",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{variant:"plain",color:"primary",block:"",onClick:m.confirmHandle},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}l(38862),l(73210),l(26699),l(32023);var f=l(20868),m={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:l,value:a}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==a?!l:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==a&&!l})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:l}=this;if(l&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),l=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!l.length)return void(0,f.LJ)("不存在！");const a=e.filter((e=>!e.text.includes(t))),i=a.filter((e=>e._checked)),s=a.filter((e=>!e._checked));this.BufferOption=l.concat(i).concat(s)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},p=l(40089);const h=(0,p.Z)(m,[["render",d]]);var w=h},57265:function(e,t,l){l.d(t,{Z:function(){return w}});var a=l(73396);const i={style:{padding:"0px 12px 0px 12px"}},s={key:0,class:"font-weight-medium text",style:{"margin-bottom":"8px"}},o={key:1,style:{"margin-bottom":"8px"},class:"font-weight-medium text"},n={class:"custem-iamge-upload"},u=["src"];function c(e,t,l,c,r,d){const f=(0,a.up)("van-uploader"),m=(0,a.up)("v-icon");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a._)("div",i,[l.preview?((0,a.wg)(),(0,a.iD)("p",s,"图片预览 ")):((0,a.wg)(),(0,a.iD)("p",o," 图片上传 ")),l.preview?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(f,{key:2,"after-read":d.afterRead,"preview-image":!1},null,8,["after-read"])),(0,a._)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.bufferFileList,((i,s)=>((0,a.wg)(),(0,a.iD)("li",{key:s,onClick:t[0]||(t[0]=t=>d.checkImage(e.bufferFileList))},[(0,a._)("img",{src:i.url},null,8,u),l.preview?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m,{key:0,onClick:e=>d.removeClick(i,e),class:"icon",icon:"mdi-close-circle-outline",color:"red"},null,8,["onClick"]))])))),128))])])])}l(26699),l(32023),l(38862);var r=l(37184),d=l(20868),f=l(9801),m={components:{},emits:["update:modelValue","onChange"],data:()=>({bufferFileList:[]}),watch:{modelValue:{handler(e=[]){this.bufferFileList=e},deep:!0,immediate:!0},initPath:{handler(e=""){e&&(this.bufferFileList=e.split(",").map((e=>Object.assign({url:e}))))},deep:!0,immediate:!0}},methods:{checkImage(e=[]){e.length&&(0,f.V)(e.map((e=>e.url)))},async afterRead(e){if(!e.file.type.includes("image"))return void(0,d.LJ)("只能选择图片！");if(e.file.size>=19922944)return void(0,d.LJ)("图片超过20M！");if(this.bufferFileList.length>2)return void(0,d.LJ)("最多只能选择3张图片！");let t=new FormData;t.append("file",e.file);const{code:l,data:a={}}=await(0,r.i)({url:"/file/upload",method:"post",formData:!0,payload:t});200==l?(this.bufferFileList=this.bufferFileList.concat([a]),(0,d.XA)("图片上传成功！"),this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.bufferFileList)))):(0,d.LJ)("图片上传失败！")},removeClick(e,t){t.stopPropagation(),this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter((t=>t.url!=e.url)),this.$nextTick((()=>{this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.bufferFileList)))}))}},props:{modelValue:{type:Array,default:()=>[]},initPath:{type:String,default:()=>""},preview:{type:Boolean,default:()=>!1}}},p=l(40089);const h=(0,p.Z)(m,[["render",c]]);var w=h},83733:function(e,t,l){l.r(t),l.d(t,{default:function(){return Ve}});var a=l(73396),i=l(87139);const s=(0,a._)("span",{class:"font-weight-medium"},"异常发起信息流水",-1),o={class:"font-weight-medium text-truncate text-center text-teal-lighten-1",color:"primary"},n=(0,a._)("p",{class:"font-weight-medium text"},"异常类型属性:",-1),u={class:"text-truncate font-weight-light"},c=(0,a._)("p",{class:"font-weight-medium text"},"紧急程度:",-1),r={class:"text-truncate font-weight-light",style:{color:"#00E5FF"}},d=(0,a._)("span",{class:"font-weight-medium text"},"异常类型:",-1),f={class:"font-weight-light"},m=(0,a._)("span",{class:"font-weight-medium text"},"异常内容:",-1),p={class:"font-weight-light"},h=(0,a._)("span",{class:"font-weight-medium text"},"异常描述:",-1),w={class:"font-weight-light"},g=(0,a._)("p",{class:"font-weight-medium text"},"产品序列号:",-1),_={class:"text-truncate font-weight-light"},x=(0,a._)("p",{class:"font-weight-medium text"},"产品名称:",-1),W={class:"text-truncate font-weight-light"},b=(0,a._)("p",{class:"font-weight-medium text"},"异常地点:",-1),y={class:"text-truncate font-weight-light"},v=(0,a._)("p",{class:"font-weight-medium text"},"设备型号:",-1),k={class:"text-truncate font-weight-light"},V=(0,a._)("p",{class:"font-weight-medium text"},"发起人:",-1),O={class:"text-truncate font-weight-light"},C=(0,a._)("p",{class:"font-weight-medium text"},"发起时间:",-1),F={class:"text-truncate font-weight-light"},P=(0,a._)("p",{class:"font-weight-medium text"},"发起联系方式:",-1),S={class:"text-truncate font-weight-light"},B=(0,a._)("div",{style:{height:"6px"}},null,-1),z=(0,a._)("span",{class:"font-weight-medium"},"异常转发信息",-1),R={class:"font-weight-light text"},L=(0,a._)("span",{class:"font-weight-medium"},"转发说明:",-1),j={style:{color:"#00E5FF"}},$=(0,a._)("p",{class:"font-weight-medium text"},"转发到:",-1),D={class:"text-truncate font-weight-light"},N=(0,a._)("p",{class:"font-weight-medium text"},"转发时间:",-1),U={class:"text-truncate font-weight-light"},q=(0,a._)("div",{style:{height:"6px"}},null,-1),A=(0,a._)("span",{class:"font-weight-medium"},"异常指派信息",-1),J={class:"font-weight-light text"},I=(0,a._)("span",{class:"font-weight-medium"},"指派说明:",-1),H={style:{color:"#00E5FF"}},T=(0,a._)("p",{class:"font-weight-medium text"},"指派到:",-1),Z={class:"text-truncate font-weight-light"},M=(0,a._)("p",{class:"font-weight-medium text"},"指派时间:",-1),E={class:"text-truncate font-weight-light"},K=(0,a._)("div",{style:{height:"6px"}},null,-1),X=(0,a._)("span",{class:"font-weight-medium"},"异常处理信息",-1),Y={class:"font-weight-light text"},Q=(0,a._)("span",{class:"font-weight-medium"},"处理描述:",-1),G={style:{color:"#00E5FF"}},ee=(0,a._)("p",{class:"font-weight-medium text"},"处理措施:",-1),te={class:"text-truncate font-weight-light"},le=(0,a._)("p",{class:"font-weight-medium text"},"异常原因:",-1),ae={class:"text-truncate font-weight-light"},ie=(0,a._)("p",{class:"font-weight-medium text"},"异常影响时长:",-1),se={class:"text-truncate font-weight-light"},oe=(0,a._)("p",{class:"font-weight-medium text"},"异常处理人:",-1),ne={class:"text-truncate font-weight-light"},ue=(0,a._)("p",{class:"font-weight-medium text"},"处理时间:",-1),ce={class:"text-truncate font-weight-light"},re=(0,a._)("div",{style:{height:"6px"}},null,-1),de=(0,a._)("span",{class:"font-weight-medium"},"异常处理信息",-1),fe=(0,a._)("p",{style:{"margin-top":"9px"}},"分钟",-1),me=(0,a._)("div",{style:{height:"6px"}},null,-1),pe=(0,a._)("div",{style:{height:"36px"}},null,-1);function he(e,t,l,he,we,ge){const _e=(0,a.up)("AppBarPage"),xe=(0,a.up)("v-icon"),We=(0,a.up)("v-col"),be=(0,a.up)("v-row"),ye=(0,a.up)("UploaderImageComponents"),ve=(0,a.up)("v-sheet"),ke=(0,a.up)("van-field"),Ve=(0,a.up)("v-btn");return(0,a.wg)(),(0,a.iD)("span",null,[(0,a.Wm)(_e),(0,a.Wm)(ve,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(be,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"7"},{default:(0,a.w5)((()=>[(0,a.Wm)(xe,{icon:"mdi-rocket-launch",size:"16",color:"primary"}),s])),_:1}),(0,a.Wm)(We,{cols:"5"},{default:(0,a.w5)((()=>[(0,a._)("p",o,(0,i.zw)(e.bufferRow.abnormalNo),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"5"},{default:(0,a.w5)((()=>[n])),_:1}),(0,a.Wm)(We,{cols:"7"},{default:(0,a.w5)((()=>[(0,a._)("p",u,(0,i.zw)(e.bufferRow.abnormalTypeName),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",r,(0,i.zw)(e.bufferRow.urgentDegreeName),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"12"},{default:(0,a.w5)((()=>[d,(0,a._)("span",f,(0,i.zw)(e.bufferRow.abnormalName),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"12"},{default:(0,a.w5)((()=>[m,(0,a._)("span",p,(0,i.zw)(e.bufferRow.contentName),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"12"},{default:(0,a.w5)((()=>[h,(0,a._)("span",w,(0,i.zw)(e.bufferRow.abnormalDesc),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[g])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",_,(0,i.zw)(e.bufferRow.ttPpOrderSnId),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[x])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",W,(0,i.zw)(e.bufferRow.partName),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[b])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",y,(0,i.zw)(e.bufferRow.abnormalPlace),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[v])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",k,(0,i.zw)(e.bufferRow.equipmentNo),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[V])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",O,(0,i.zw)(e.bufferRow.initiateBy),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[C])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",F,(0,i.zw)(e.bufferRow.initiateTime),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"5"},{default:(0,a.w5)((()=>[P])),_:1}),(0,a.Wm)(We,{cols:"7"},{default:(0,a.w5)((()=>[(0,a._)("p",S,(0,i.zw)(e.bufferRow.initiatePhone),1)])),_:1})])),_:1}),(0,a.Wm)(ye,{modelValue:e.bufferFileListPreviewInitiatePath,"onUpdate:modelValue":t[0]||(t[0]=t=>e.bufferFileListPreviewInitiatePath=t),preview:""},null,8,["modelValue"])])),_:1}),B,(0,a.Wm)(ve,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(be,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(xe,{icon:"mdi-share",size:"16",color:"indigo"}),z])),_:1}),(0,a.Wm)(We,{cols:"6"})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",R,[L,(0,a._)("span",j,(0,i.zw)(e.bufferRow.retransmissionDesc),1)])])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[$])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",D,(0,i.zw)(e.bufferRow.retransmissionBy),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[N])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",U,(0,i.zw)(e.bufferRow.retransmissionTime),1)])),_:1})])),_:1})])),_:1}),q,(0,a.Wm)(ve,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(be,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(xe,{icon:"mdi-send",size:"16",color:"warning"}),A])),_:1}),(0,a.Wm)(We,{cols:"6"})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",J,[I,(0,a._)("span",H,(0,i.zw)(e.bufferRow.appointDesc),1)])])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[T])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",Z,(0,i.zw)(e.bufferRow.appointBy),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[M])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",E,(0,i.zw)(e.bufferRow.appointTime),1)])),_:1})])),_:1})])),_:1}),K,(0,a.Wm)(ve,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(be,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(xe,{icon:"mdi-alert-circle",size:"16",color:"error"}),X])),_:1}),(0,a.Wm)(We,{cols:"6"})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"12"},{default:(0,a.w5)((()=>[(0,a._)("p",Y,[Q,(0,a._)("span",G,(0,i.zw)(e.bufferRow.manageDesc),1)])])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[ee])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",te,(0,i.zw)(e.bufferRow.tmBasAbnormalMeasuresId),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[le])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",ae,(0,i.zw)(e.bufferRow.reasonNO)+"-"+(0,i.zw)(e.bufferRow.reasonName),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"5"},{default:(0,a.w5)((()=>[ie])),_:1}),(0,a.Wm)(We,{cols:"7"},{default:(0,a.w5)((()=>[(0,a._)("p",se,(0,i.zw)(e.bufferRow.manageDuration)+" 分钟",1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[oe])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",ne,(0,i.zw)(e.bufferRow.manageBy),1)])),_:1})])),_:1}),(0,a.Wm)(be,{"no-gutters":"",class:"text"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[ue])),_:1}),(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a._)("p",ce,(0,i.zw)(e.bufferRow.manageTime),1)])),_:1})])),_:1}),(0,a.Wm)(ye,{modelValue:e.bufferFileListPreviewManagePath,"onUpdate:modelValue":t[1]||(t[1]=t=>e.bufferFileListPreviewManagePath=t),preview:""},null,8,["modelValue"])])),_:1}),re,(0,a.Wm)(ve,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(be,{"no-gutters":"",class:"custem-card-title"},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(xe,{icon:"mdi-alert-circle",size:"16",color:"error"}),de])),_:1}),(0,a.Wm)(We,{cols:"6"})])),_:1}),(0,a.Wm)(ke,{modelValue:e.influence,"onUpdate:modelValue":t[2]||(t[2]=t=>e.influence=t),placeholder:"请输入",autocomplete:"off",label:"影响台套"},null,8,["modelValue"]),(0,a.Wm)(be,{"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"8"},{default:(0,a.w5)((()=>[(0,a.Wm)(ke,{modelValue:e.time,"onUpdate:modelValue":t[3]||(t[3]=t=>e.time=t),placeholder:"请输入",autocomplete:"off",label:"影响时长",required:"",type:"number"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(We,{cols:"4"},{default:(0,a.w5)((()=>[fe])),_:1})])),_:1}),(0,a.Wm)(ke,{modelValue:e.appraise,"onUpdate:modelValue":t[4]||(t[4]=t=>e.appraise=t),placeholder:"请输入",autocomplete:"off",type:"textarea",label:"评价"},null,8,["modelValue"])])),_:1}),me,(0,a.Wm)(be,{"no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(We,{cols:"12",class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ve,{onClick:ge.forwardHandle,block:"",color:"error"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 确认关闭 ")])),_:1},8,["onClick"])])),_:1})])),_:1}),pe])}var we=l(21801),ge=(l(57658),l(76496)),_e=l(37184),xe=(l(89337),l(57265)),We=l(2243),be=l(20868),ye=(l(36797),{components:{AppBarPage:ge.Z,UploaderImageComponents:xe.Z,SelectComponents:We.Z},data:()=>({bufferRow:{},bufferFileListPreviewInitiatePath:[],bufferFileListPreviewManagePath:[],influence:"",time:"",appraise:""}),created(){this.initFunc()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),a=l[e]||[],i=a.filter((e=>t==e.value))[0]||{};return i},async initFunc(){const{ttQmAbnormalId:e}=this.$route.query,{code:t,data:l={}}=await(0,_e.i)({url:"/iiot/abnormal",method:"get",url_RESTful:`/${e}`});200==t&&(this.bufferRow=l,this.time=l.closeDuration||"",l.initiatePath&&(this.bufferFileListPreviewInitiatePath=l.initiatePath.split(",").map((e=>Object.assign({url:e})))),l.managePath&&(this.bufferFileListPreviewManagePath=l.managePath.split(",").map((e=>Object.assign({url:e})))))},async forwardHandle(){const{pageAction:e}=this.$route.query,{bufferRow:t}=this;if(""==this.time)return void(0,be.LJ)("影响时长必填！");const l=(0,we.Z)((0,we.Z)({},t),{},{closeSets:this.influence,closeDuration:this.time,closeAppraise:this.appraise}),{code:a,data:i={}}=await(0,_e.i)({url:"/iiot/abnormal/close",method:"post",payload:l});200==a&&((0,be.XA)("提交成功！"),2==e?this.$router.push({path:"/anomalyInitiate/index/closeIndex",query:{}}):this.$router.push({path:"/anomalyInitiate/index",query:{}}))}}}),ve=l(40089);const ke=(0,ve.Z)(ye,[["render",he]]);var Ve=ke}}]);
//# sourceMappingURL=chunk.3733.1689577235749.js.map