"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[3909],{14614:function(e,t,a){a.d(t,{m:function(){return i}});var l=a(37184);const i=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/proConfirmWbForApp",method:"post",payload:e.payload})},89337:function(e,t,a){a.d(t,{$w:function(){return c},AT:function(){return o},NM:function(){return r},ew:function(){return s},jt:function(){return i},vU:function(){return n}});var l=a(37184);const i=async(e={})=>await(0,l.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:e}),o=async e=>await(0,l.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),n=async e=>await(0,l.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),s=async e=>await(0,l.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),r=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),c=async e=>await(0,l.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:e.payload})},5878:function(e,t,a){a.d(t,{b:function(){return l}});a(33948),a(57658);const l=(e,t,a,l)=>{let i={id:t||"id",parentId:a||"parentId",childrenList:l||"children"};var o={},n={},s=[];for(let c of e){let e=c[i.parentId];null==o[e]&&(o[e]=[]),n[c[i.id]]=c,o[e].push(c)}for(let c of e){let e=c[i.parentId];null==n[e]&&s.push(c)}for(let c of s)r(c);function r(e){if(null!==o[e[i.id]]&&(e[i.childrenList]=o[e[i.id]]),e[i.childrenList])for(let t of e[i.childrenList])r(t)}return s}},2243:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(73396),i=a(87139);const o={style:{height:"98%","padding-bottom":"40px"}},n={style:{height:"100%"}},s={style:{position:"relative",top:"4px"}},r=["onClick"],c={class:"text-truncate",style:{height:"24px"}},p={key:2,class:"text-center",style:{"margin-top":"16px"}};function d(e,t,a,d,u,h){const m=(0,l.up)("van-field"),f=(0,l.up)("v-col"),g=(0,l.up)("v-btn"),y=(0,l.up)("v-row"),w=(0,l.up)("van-search"),k=(0,l.up)("van-checkbox"),v=(0,l.up)("van-popup");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l.Wm)(m,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",required:a.required,label:a.label,placeholder:a.placeholder,autocomplete:"off",type:a.multiple?"textarea":"text",onClick:h.fieldClick},null,8,["modelValue","required","label","placeholder","type","onClick"]),(0,l.Wm)(v,{show:e.showPicker,"onUpdate:show":t[5]||(t[5]=t=>e.showPicker=t),style:{padding:"12px 12px 4px 12px",height:"60%",width:"90%"},round:""},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l._)("div",n,[(0,l.Wm)(y,{"no-gutters":"",style:{"font-weight":"bold","border-bottom":"1px solid #ccc","padding-bottom":"5px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"6"},{default:(0,l.w5)((()=>[(0,l._)("p",null,(0,i.zw)(a.label)+"-选择框",1)])),_:1}),(0,l.Wm)(f,{cols:"6",class:"text-right"},{default:(0,l.w5)((()=>[(0,l._)("span",s,(0,i.zw)(e.BufferOption.filter((e=>e._checked)).length),1),a.selectAll?((0,l.wg)(),(0,l.j4)(g,{key:0,onClick:h.selectAllHandle,color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("全选")])),_:1},8,["onClick"])):(0,l.kq)("",!0)])),_:1})])),_:1}),a.showSearch?((0,l.wg)(),(0,l.j4)(y,{key:0,"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"8"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{modelValue:e.valueSearch,"onUpdate:modelValue":t[1]||(t[1]=t=>e.valueSearch=t),shape:"",placeholder:a.placeholderSearch,style:{"padding-left":"0px"},clearable:!1},null,8,["modelValue","placeholder"])])),_:1}),(0,l.Wm)(f,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onClick:t[2]||(t[2]=e=>h.searchHandle(!0)),variant:"plain",color:"primary",block:"",style:{"margin-top":"8px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 查询 ")])),_:1})])),_:1}),(0,l.Wm)(f,{cols:"2"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{onClick:t[3]||(t[3]=e=>h.searchHandle(!1)),variant:"plain",block:"",style:{"margin-top":"8px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 重置 ")])),_:1})])),_:1})])),_:1})):(0,l.kq)("",!0),e.BufferOption.length?((0,l.wg)(),(0,l.iD)("ul",{key:1,style:(0,i.j5)(`height: ${a.showSearch?"73%":"90%"};overflow-y:auto;padding-right:12px;padding-bottom: 20px;`)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.BufferOption,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{key:t,style:(0,i.j5)(`padding: 6px 22px 6px 6px;position:relative;color:${e._searchColor?"#FF9800":"#000"};`),onClick:t=>h.checkChange(e)},[(0,l._)("p",c,(0,i.zw)(e.text),1),(0,l.Wm)(k,{style:{position:"absolute",top:"8px",right:"0px"},modelValue:e._checked,"onUpdate:modelValue":t=>e._checked=t,shape:"square","checked-color":"#4CAF50",disabled:"",class:"custem-select-checkbox"},null,8,["modelValue","onUpdate:modelValue"])],12,r)))),128))],4)):((0,l.wg)(),(0,l.iD)("p",p,"无数据!"))]),(0,l.Wm)(y,{"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{cols:"6",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{variant:"plain",block:"",onClick:t[4]||(t[4]=()=>e.showPicker=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 取消 ")])),_:1})])),_:1}),(0,l.Wm)(f,{cols:"6",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{variant:"plain",color:"primary",block:"",onClick:h.confirmHandle},{default:(0,l.w5)((()=>[(0,l.Uk)(" 确定 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}a(38862),a(73210),a(26699),a(32023);var u=a(20868),h={components:{},emits:["update:modelValue","onChange","onFieldClick","onSearchChange"],data:()=>({BufferOption:[],selectedValues:[],columns:[],fieldValue:"",showPicker:!1,valueSearch:""}),watch:{option:{handler(e=[]){this.BufferOption=JSON.parse(JSON.stringify(e)),this.$nextTick((()=>{this.modelValue&&this.setValue(this.modelValue)}))},deep:!0,immediate:!0},showPicker:{handler(e){this.$nextTick((()=>{if(e&&this.modelValue)if(this.multiple){const e=this.modelValue.split(",")||[];e.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))}))}else this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==this.modelValue})))}))},deep:!0,immediate:!0}},methods:{showModle(){this.showPicker=!0},fieldClick(){this.disabled||(this.forbidShow||(this.showPicker=!0),this.$emit("onFieldClick"))},setfieldValue(e=""){this.fieldValue=e},reset(){this.fieldValue="",this.BufferOption.map((e=>Object.assign(e,{_checked:!1}))),this.$emit("update:modelValue","")},setValue(e=""){if(this.multiple){const t=e.split(",")||[];t.map((e=>{this.BufferOption.map((t=>{var a=t;return t.value==e&&(a._checked=!0),a}))})),this.fieldValue=this.BufferOption.filter((e=>e._checked)).map((e=>e.text)).join()}else{const t=JSON.parse(JSON.stringify(this.BufferOption)).filter((t=>t.value==e))[0]||{};this.fieldValue=t.text}},confirmHandle(){const{multiple:e}=this,t=this.BufferOption.filter((e=>1==e._checked));e?(this.fieldValue=t.map((e=>e.text)).join(),this.$emit("update:modelValue",t.map((e=>e.value)).join()||""),this.$emit("onChange",t.map((e=>e.value)).join())):(this.fieldValue=(t[0]||{}).text,this.$emit("update:modelValue",(t[0]||{}).value||""),this.$emit("onChange",(t[0]||{}).value,t[0]||{})),this.showPicker=!1},checkChange(e){const{multiple:t}=this,{_checked:a,value:l}=e;t?this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==l?!a:e._checked}))):this.BufferOption.map((e=>Object.assign(e,{_checked:e.value==l&&!a})))},multipleHandle(){const e=this.BufferOption.filter((e=>e._checked)),t=e.map((e=>e.value)).join();this.showPicker=!1,this.fieldValue=e.map((e=>e.text)).join(),this.$emit("update:modelValue",t),this.$emit("onChange",e)},searchHandle(e){const t=this.valueSearch.trim(),{filterSearch:a}=this;if(a&&e){const e=this.BufferOption.map((e=>Object.assign(e,{_searchColor:!1}))),a=e.filter((e=>e.text.includes(t))).map((e=>Object.assign(e,{_searchColor:!0})));if(!a.length)return void(0,u.LJ)("不存在！");const l=e.filter((e=>!e.text.includes(t))),i=l.filter((e=>e._checked)),o=l.filter((e=>!e._checked));this.BufferOption=a.concat(i).concat(o)}else e?this.$emit("onSearchChange",t):(this.valueSearch="",this.BufferOption=this.option,this.$nextTick((()=>{this.BufferOption=this.BufferOption.map((e=>Object.assign(e,{_checked:!1})))})),this.$emit("onSearchChange",""))},selectAllHandle(){this.BufferOption.map((e=>Object.assign(e,{_checked:!0})))}},props:{modelValue:{},disabled:{type:Boolean,default:()=>!1},showSearch:{type:Boolean,default:()=>!1},forbidShow:{type:Boolean,default:()=>!1},multiple:{type:Boolean,default:()=>!1},label:{type:String,default:()=>"标题"},placeholder:{type:String,default:()=>"请选择"},placeholderSearch:{type:String,default:()=>"请输入搜索关键词"},option:{type:Array,default:()=>[]},selectAll:{type:Boolean,default:()=>!1},required:{type:Boolean,default:()=>!1},filterSearch:{type:Boolean,default:()=>!1}}},m=a(40089);const f=(0,m.Z)(h,[["render",d]]);var g=f},88575:function(e,t,a){a.d(t,{Z:function(){return C}});var l=a(73396),i=a(87139);const o={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},n=(0,l._)("span",null,"第",-1),s={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,l._)("span",{style:{"margin-right":"3px"}},"页",-1),c=(0,l._)("span",null,"共",-1),p={style:{"padding-left":"1px","padding-right":"1px"}},d=(0,l._)("span",{style:{"margin-right":"3px"}},"页",-1),u=(0,l._)("span",null,"总",-1),h={style:{"padding-left":"1px","padding-right":"1px"}},m=(0,l._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function y(e,t,a,y,w,k){const v=(0,l.up)("v-icon"),x=(0,l.up)("v-btn"),_=(0,l.up)("v-card");return(0,l.wg)(),(0,l.iD)("span",null,[e.paging&&a.pagingShow?((0,l.wg)(),(0,l.j4)(_,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:k.previousHandle},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{size:"28"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,l.Wm)(x,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:k.nextHandle},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{size:"28"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,l._)("span",o,[n,(0,l._)("span",s,(0,i.zw)(e.current),1),r,c,(0,l._)("span",p,(0,i.zw)(e.page),1),d,u,(0,l._)("span",h,(0,i.zw)(e.totalNum),1),m]),(0,l._)("span",f,[a.showSearchBtn?((0,l.wg)(),(0,l.j4)(x,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:k.searchClick,variant:"plain",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{size:"24",icon:"mdi-magnify"}),(0,l.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(x,{onClick:k.refreshClick,style:(0,i.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,l.kq)("",!0),e.items.length?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:1},(0,l.Ko)(e.items,((t,a)=>(0,l.WI)(e.$slots,"tableBody",{key:a,items:t,_index:a}))),128)):((0,l.wg)(),(0,l.iD)("p",g,[(0,l.Wm)(v,{icon:"mdi-emoticon-sad-outline"}),(0,l.Uk)(" 无数据！ ")]))])}var w=a(21801),k=a(37184);var v=a(20868),x={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:e,url:t}=this;e&&t&&this.initFunc()},methods:{previousHandle(){const{current:e}=this;1!=e?(this.current=e-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,v.LJ)("第一页！")},nextHandle(){const{current:e,page:t}=this;e>=t?(0,v.LJ)("最后一页！"):(this.current=e+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(e=1,t){const{url:a,params:l={},children:i,method:o,formatData:n}=this;if(i)return this.items=i,void(this.paging=!1);const s=(0,w.Z)((0,w.Z)({pageNum:e,pageSize:10},l),t),{code:r,total:c=0,msg:p="",data:d,rows:u}=await(0,k.i)({method:o,url:a,payload:"post"==o?s:{},url_params:"get"==o?s:{}});200==r&&(this.totalNum=c,this.current=e,this.page=Math.ceil(c/s.pageSize),this.items=n?n(d||u||[]):d||u||[])},refreshClick(){const{refreshFunc:e}=this;!e&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((e=>Object.assign(e,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},_=a(40089);const b=(0,_.Z)(x,[["render",y]]);var C=b},58426:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(73396);const i=(0,l._)("div",{style:{height:"36px"}},null,-1),o={style:{"margin-top":"32px"}};function n(e,t,a,n,s,r){const c=(0,l.up)("van-field"),p=(0,l.up)("v-btn"),d=(0,l.up)("van-cascader"),u=(0,l.up)("van-popup"),h=(0,l.up)("SelectComponents"),m=(0,l.up)("v-col"),f=(0,l.up)("v-row");return(0,l.wg)(),(0,l.iD)("span",null,[(0,l.Wm)(u,{show:e.drawer,"onUpdate:show":t[9]||(t[9]=t=>e.drawer=t),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,l.w5)((()=>[i,(0,l.Wm)(c,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fieldValue=t),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",onClick:t[1]||(t[1]=t=>e.show=!0)},null,8,["modelValue"]),(0,l.Wm)(u,{show:e.show,"onUpdate:show":t[4]||(t[4]=t=>e.show=t),round:"",position:"bottom"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:t[2]||(t[2]=()=>e.show=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" 确定 ")])),_:1}),(0,l.Wm)(d,{title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[3]||(t[3]=t=>e.show=!1),onChange:r.onFinish},null,8,["options","onChange"])])),_:1},8,["show"]),(0,l.Wm)(h,{modelValue:e.type,"onUpdate:modelValue":t[5]||(t[5]=t=>e.type=t),ref:"select1",label:"异常类型",showSearch:"",option:e.typeSelectOption,onOnSearchChange:r.getTypeHttp},null,8,["modelValue","option","onOnSearchChange"]),(0,l.Wm)(h,{modelValue:e.property,"onUpdate:modelValue":t[6]||(t[6]=t=>e.property=t),ref:"select2",label:"属性",option:e.propertySelectOption},null,8,["modelValue","option"]),a.hideStatus?((0,l.wg)(),(0,l.j4)(h,{key:0,modelValue:e.status,"onUpdate:modelValue":t[7]||(t[7]=t=>e.status=t),ref:"select3",label:"状态",option:e.statusSelectOption},null,8,["modelValue","option"])):(0,l.kq)("",!0),(0,l._)("div",o,[(0,l.Wm)(f,{"no-gutters":""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{cols:"4",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{onClick:t[8]||(t[8]=()=>e.drawer=!1),density:"compact",variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("关闭")])),_:1})])),_:1}),(0,l.Wm)(m,{cols:"4",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{onClick:r.resetClick,density:"compact",color:"warning",variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("重置")])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(m,{cols:"4",class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{onClick:r.searchClick,density:"compact",color:"primary",variant:"plain"},{default:(0,l.w5)((()=>[(0,l.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}var s=a(2243),r=a(37184),c=a(89337),p=a(5878),d={components:{SelectComponents:s.Z},emits:["searchHandle","resetHandle"],data:()=>({drawer:!1,show:!1,fieldValue:"",options:[],factoryID:"",type:"",typeSelectOption:[],property:"",propertySelectOption:[],status:"",statusSelectOption:[]}),created(){this.initFunc(),this.getTypeHttp()},methods:{FormatDictionary(e="",t=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),l=a[e]||[],i=l.filter((e=>t==e.value))[0]||{};return i},resetClick(){this.fieldValue="",this.factoryID="",this.type="",this.property="",this.status="",this.$refs.select1&&this.$refs.select1.reset(),this.$refs.select2&&this.$refs.select2.reset(),this.$refs.select3&&this.$refs.select3.reset(),this.$emit("resetHandle",{})},async initFunc(){const e=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),t=e["abnormal_type"]||[],a=e["abnormal_state"]||[];this.propertySelectOption=t.map((e=>Object.assign({text:e.lable,value:e.value}))),this.statusSelectOption=a.map((e=>Object.assign({text:e.lable,value:e.value})));const{data:l=[]}=await(0,c.jt)(),i=(0,p.b)(l,"tmBasNodeLevelId","parentId");this.options=i},async getTypeHttp(e=""){const{code:t,data:a=[]}=await(0,r.i)({url:"/iiot/abnormalType/listAbnormalTypeForSelect",method:"get",url_params:{abnormalNo:e}});200==t&&(this.typeSelectOption=a.map((e=>Object.assign({text:`${e.abnormalNo}${e.abnormalName}`,value:e.tmBasAbnormalTypeId}))))},onFinish({selectedOptions:e}){if(!e.length)return;let t=(e[e.length-1]||{})["tmBasNodeLevelId"];this.factoryID=t,this.fieldValue=e.map((e=>e.nodeLevelName)).join("/")},searchClick(){const{factoryID:e,type:t,property:a,status:l}=this,i=l?{tmBasNodeLevelId:e,tmBasAbnormalTypeId:t,abnormalType:a,abnormalState:l}:{tmBasNodeLevelId:e,tmBasAbnormalTypeId:t,abnormalType:a};this.$emit("searchHandle",i),this.drawer=!1},showDrawer(){this.drawer=!0}},props:{hideStatus:{type:Boolean,default:()=>!0}}},u=a(40089);const h=(0,u.Z)(d,[["render",n]]);var m=h}}]);
//# sourceMappingURL=chunk.3909.1689577235749.js.map