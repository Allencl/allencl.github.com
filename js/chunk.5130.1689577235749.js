"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[5130],{89337:function(e,t,l){l.d(t,{$w:function(){return c},AT:function(){return o},NM:function(){return n},ew:function(){return r},jt:function(){return a},vU:function(){return s}});var i=l(37184);const a=async(e={})=>await(0,i.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),o=async e=>await(0,i.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),s=async e=>await(0,i.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),r=async e=>await(0,i.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),n=async e=>await(0,i.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),c=async e=>await(0,i.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},5878:function(e,t,l){l.d(t,{b:function(){return i}});l(33948),l(57658);const i=(e,t,l,i)=>{let a={id:t||"id",parentId:l||"parentId",childrenList:i||"children"};var o={},s={},r=[];for(let c of e){let e=c[a.parentId];null==o[e]&&(o[e]=[]),s[c[a.id]]=c,o[e].push(c)}for(let c of e){let e=c[a.parentId];null==s[e]&&r.push(c)}for(let c of r)n(c);function n(e){if(null!==o[e[a.id]]&&(e[a.childrenList]=o[e[a.id]]),e[a.childrenList])for(let t of e[a.childrenList])n(t)}return r}},2243:function(e,t,l){l.d(t,{Z:function(){return g}});var i=l(73396),a=l(87139);const o={style:{height:"98%","padding-bottom":"40px"}},s={style:{height:"100%"}},r={style:{position:"relative",top:"4px"}},n=["onClick"],c={class:"text-truncate",style:{height:"24px"}},p={key:2,class:"text-center",style:{"margin-top":"16px"}};function u(e,t,l,u,d,h){const m=(0,i.up)("van-field"),f=(0,i.up)("v-col"),g=(0,i.up)("v-btn"),w=(0,i.up)("v-row"),k=(0,i.up)("van-search"),y=(0,i.up)("van-checkbox"),v=(0,i.up)("van-popup");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(m,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:l.required,label:l.label,placeholder:l.placeholder,autocomplete:"off",type:l.multiple?"textarea":"text",onClick:h.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,i.Wm)(v,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("div",s,[(0,i.Wm)(w,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{cols:"6"},{default:(0,i.w5)((()=>[(0,i._)("p",null,(0,a.zw)(l.label)+"-选择框",1)])),_:1}),(0,i.Wm)(f,{cols:"6",class:"text-right"},{default:(0,i.w5)((()=>[(0,i._)("span",r,(0,a.zw)(e.BufferOption.filter((e=>e._checked)).length),1),l.selectAll?((0,i.wg)(),(0,i.j4)(g,{key:0,onClick:h.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("全选")])),_:1},8,["onClick"])):(0,i.kq)("",!0)])),_:1})])),_:1}),l.showSearch?((0,i.wg)(),(0,i.j4)(w,{key:0,"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{cols:"8"},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:l.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,i.Wm)(f,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{onClick:t[2]||(t[2]=e=>h.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 查询 ")])),_:1})])),_:1}),(0,i.Wm)(f,{cols:"2"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{onClick:t[3]||(t[3]=e=>h.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,i.kq)("",!0),e.BufferOption.length?((0,i.wg)(),(0,i.iD)("ul",{key:1,style:(0,a.j5)(`height: ${l.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.BufferOption,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,style:(0,a.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>h.checkChange(e)},[(0,i._)("p",c,(0,a.zw)(e.text),1),(0,i.Wm)(y,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,n)))),128))],4)):((0,i.wg)(),(0,i.iD)("p",p,"无数据!"))]),(0,i.Wm)(w,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 取消 ")])),_:1})])),_:1}),(0,i.Wm)(f,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{variant:"plain",color:"primary",block:"",onClick:h.confirmHandle},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}l(38862),l(73210),l(26699),l(32023);var d=l(20868),h={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var l=t;return t.value==e&&(l._checked=!0),l}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:l,value:i}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i?!l:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==i&&!l})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:l}=this;if(l&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),l=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!l.length)return void(0,d.LJ)("不存在！");const i=e.filter((e=>!e.text.includes(t))),a=i.filter((e=>e._checked)),o=i.filter((e=>!e._checked));this.BufferOption=l.concat(a).concat(o)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},m=l(40089);const f=(0,m.Z)(h,[["render",u]]);var g=f},35130:function(e,t,l){l.r(t),l.d(t,{default:function(){return w}});var i=l(73396);const a=(0,i._)("div",{style:{height:"12px"}},null,-1),o=(0,i._)("p",{style:{"padding-left":"16px","margin-top":"14px"}},"是否紧急",-1),s={style:{"margin-top":"32px","margin-bottom":"62px"}};function r(e,t,l,r,n,c){const p=(0,i.up)("AppBarPage"),u=(0,i.up)("van-field"),d=(0,i.up)("v-btn"),h=(0,i.up)("van-cascader"),m=(0,i.up)("van-popup"),f=(0,i.up)("SelectComponents"),g=(0,i.up)("v-col"),w=(0,i.up)("v-switch"),k=(0,i.up)("v-row");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(p),a,(0,i.Wm)(u,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",required:"",onClick:t[1]||(t[1]=t=>e.show=!0)},null,8,["modelValue"]),(0,i.Wm)(m,{show:e.show,"onUpdate:show":t[4]||(t[4]=t=>e.show=t),round:"",position:"bottom"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:t[2]||(t[2]=()=>e.show=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" 确定 ")])),_:1}),e.showFactory?((0,i.wg)(),(0,i.j4)(h,{key:0,title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[3]||(t[3]=t=>e.show=!1),onChange:c.onFinish},null,8,["options","onChange"])):(0,i.kq)("",!0)])),_:1},8,["show"]),(0,i.Wm)(f,{modelValue:e.supplier,"onUpdate:modelValue":t[5]||(t[5]=t=>e.supplier=t),ref:"select6785",label:"订单",required:"",showSearch:"",option:e.supplierSelectOption,onOnSearchChange:c.supplierSearchChange,onOnChange:c.onSupplierChange},null,8,["modelValue","option","onOnSearchChange","onOnChange"]),(0,i.Wm)(f,{modelValue:e.serial,"onUpdate:modelValue":t[6]||(t[6]=t=>e.serial=t),ref:"select1212",label:"产品序列号",required:"",showSearch:"",option:e.serialSelectOption,onOnSearchChange:c.serialSearchChange},null,8,["modelValue","option","onOnSearchChange"]),(0,i.Wm)(f,{modelValue:e.part,"onUpdate:modelValue":t[7]||(t[7]=t=>e.part=t),ref:"select5678",label:"产品",required:"",showSearch:"",option:e.partSelectOption,onOnSearchChange:c.partSearchChange},null,8,["modelValue","option","onOnSearchChange"]),(0,i.Wm)(f,{modelValue:e.process,"onUpdate:modelValue":t[8]||(t[8]=t=>e.process=t),ref:"select228",label:"过程类型",option:e.processSelectOption},null,8,["modelValue","option"]),(0,i.Wm)(f,{modelValue:e.classes,"onUpdate:modelValue":t[9]||(t[9]=t=>e.classes=t),ref:"select353",label:"班次",option:e.classesSelectOption},null,8,["modelValue","option"]),(0,i.Wm)(u,{modelValue:e.receiptNo,"onUpdate:modelValue":t[10]||(t[10]=t=>e.receiptNo=t),placeholder:"请输入",required:"",autocomplete:"off",label:"批次号"},null,8,["modelValue"]),(0,i.Wm)(u,{modelValue:e.receiptline,"onUpdate:modelValue":t[11]||(t[11]=t=>e.receiptline=t),placeholder:"请输入",autocomplete:"off",label:"箱号"},null,8,["modelValue"]),(0,i.Wm)(u,{modelValue:e.taskQty,"onUpdate:modelValue":t[12]||(t[12]=t=>e.taskQty=t),placeholder:"请输入",required:"",autocomplete:"off",type:"number",label:"任务数量"},null,8,["modelValue"]),(0,i.Wm)(k,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{cols:"4"},{default:(0,i.w5)((()=>[o])),_:1}),(0,i.Wm)(g,{cols:"8",style:{height:"42px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{modelValue:e.switchUrgency,"onUpdate:modelValue":t[13]||(t[13]=t=>e.switchUrgency=t),label:e.switchUrgency?"是":"否",color:"primary",density:"comfortable",style:{height:"48px",display:"inline-block",width:"104px","margin-left":"14px"}},null,8,["modelValue","label"])])),_:1})])),_:1}),(0,i._)("div",s,[(0,i.Wm)(k,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{onClick:c.resetClick,color:"warning"},{default:(0,i.w5)((()=>[(0,i.Uk)("重置")])),_:1},8,["onClick"])])),_:1}),(0,i.Wm)(g,{cols:"6",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{onClick:c.searchClick,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)("提交")])),_:1},8,["onClick"])])),_:1})])),_:1})])])}l(73210),l(57658);var n=l(76496),c=l(2243),p=l(37184),u=l(20868),d=l(89337),h=l(5878),m={components:{AppBarPage:n.Z,SelectComponents:c.Z},emits:["searchHandle","resetHandle"],data:()=>({drawer:!1,showFactory:!0,show:!1,fieldValue:"",options:[],factoryID:"",process:"",processSelectOption:[],switchUrgency:!1,switchReceived:!1,switchOutInspect:!1,classes:"",classesSelectOption:[],taskQty:"",receiptNo:"",receiptline:"",receiptQty:"",supplier:"",supplierSelectOption:[],serial:"",serialSelectOption:[],part:"",partSelectOption:[]}),created(){this.initFunc(),this.getSupplierHttp(),this.partHttp(),this.serialHttp()},methods:{FormatDictionary(e="",t=""){const l=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),i=l[e]||[],a=i.filter((e=>t==e.value))[0]||{};return a},resetClick(){this.factoryID="",this.part="",this.supplier="",this.process="",this.switchUrgency=!1,this.classes="",this.taskQty="",this.receiptNo="",this.receiptline="",this.receiptQty="",this.switchReceived=!1,this.switchOutInspect=!1,this.$refs.select6785.reset(),this.$refs.select1212.reset(),this.$refs.select5678.reset(),this.$refs.select228.reset(),this.$refs.select353.reset(),this.fieldValue="",this.showFactory=!1,this.$nextTick((()=>{this.showFactory=!0}))},async initFunc(){const e=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),t=e["QC_TASK_TYPE"]||[];this.processSelectOption=t.map((e=>Object.assign({text:e.lable,value:e.value})));const l=e["shiftno"]||[];this.classesSelectOption=l.map((e=>Object.assign({text:e.lable,value:e.value})));const{data:i=[]}=await(0,d.jt)(),a=(0,h.b)(i,"tmBasNodeLevelId","parentId");this.options=a},async getSupplierHttp(e=""){const{code:t,data:l=[]}=await(0,p.i)({url:"/iiot/order/listOrderForSelect",method:"get",url_params:{aufnr:e}});200==t&&(this.supplierSelectOption=l.map((e=>Object.assign({text:`${e.aufnr}`,value:e.ttPpOrderId}))).splice(0,100))},supplierSearchChange(e){this.getSupplierHttp(e)},onSupplierChange(e){this.serialHttp("",e),this.$nextTick((()=>{this.serial="",this.$refs.select1212.reset()}))},async serialHttp(e="",t=""){const{code:l,data:i=[]}=await(0,p.i)({url:"/iiot/orderSn/listOrderSnForSelect",method:"get",url_params:{sernr:e,ttPpOrderId:t}});200==l&&(this.serialSelectOption=i.map((e=>Object.assign({text:`${e.sernr}`,value:e.ttPpOrderSnId}))).splice(0,100))},serialSearchChange(e){this.serialHttp(e)},async partHttp(e=""){const{code:t,data:l=[]}=await(0,p.i)({url:"/iiot/part/listPartForSelect",method:"get",url_params:{noOrName:e}});200==t&&(this.partSelectOption=l.map((e=>Object.assign({text:`${e.matnr||""}-${e.maktxC||""}`,value:e.tmBasPartId}))).splice(0,100))},partSearchChange(e){this.partHttp(e)},onFinish({selectedOptions:e}){if(!e.length)return;let t=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=t,this.fieldValue=e.map((e=>e.nodeLevelName)).join("/")},async searchClick(){if(!this.factoryID)return void(0,u.LJ)("工厂必填！");if(!this.supplier)return void(0,u.LJ)("生产订单必填！");if(!this.serial)return void(0,u.LJ)("序列号必填！");if(!this.part)return void(0,u.LJ)("零件必填！");if(!this.receiptNo.trim())return void(0,u.LJ)("批号必填！");if(!Number(this.taskQty))return void(0,u.LJ)("任务数量必填！");const e={taskType:"IPQC",tmBasNodeLevelId:this.factoryID,tmBasPartId:this.part,lotNo:this.receiptNo,packageNo:this.receiptline,processType:this.process,isUrgent:this.switchUrgency?"1":"0",shiftno:this.classes,taskQty:Number(this.taskQty),ttPpOrderId:this.supplier,ttPpOrderSnId:this.serial},{code:t,data:l={}}=await(0,p.i)({url:"/iiot/qmTask",method:"post",payload:e});200==t&&((0,u.XA)("提交成功！"),this.$router.push({path:"/process/index",query:{tabs:"1"}}))},showDrawer(){this.drawer=!0}},props:{}},f=l(40089);const g=(0,f.Z)(m,[["render",r]]);var w=g}}]);
//# sourceMappingURL=chunk.5130.1689577235749.js.map