"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[6905],{89337:function(t,e,a){a.d(e,{$w:function(){return c},AT:function(){return n},NM:function(){return r},ew:function(){return o},jt:function(){return l},vU:function(){return s}});var i=a(37184);const l=async(t={})=>await(0,i.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:t}),n=async t=>await(0,i.i)({url:"/iiot/faultType/list?enabled=1",method:"get"}),s=async t=>await(0,i.i)({url:"/iiot/fault/list?enabled=1",method:"get"}),o=async t=>await(0,i.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"}),r=async t=>await(0,i.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"}),c=async t=>await(0,i.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:t.payload})},5878:function(t,e,a){a.d(e,{b:function(){return i}});a(33948),a(57658);const i=(t,e,a,i)=>{let l={id:e||"id",parentId:a||"parentId",childrenList:i||"children"};var n={},s={},o=[];for(let c of t){let t=c[l.parentId];null==n[t]&&(n[t]=[]),s[c[l.id]]=c,n[t].push(c)}for(let c of t){let t=c[l.parentId];null==s[t]&&o.push(c)}for(let c of o)r(c);function r(t){if(null!==n[t[l.id]]&&(t[l.childrenList]=n[t[l.id]]),t[l.childrenList])for(let e of t[l.childrenList])r(e)}return o}},88575:function(t,e,a){a.d(e,{Z:function(){return C}});var i=a(73396),l=a(87139);const n={style:{position:"relative",top:"3px","margin-left":"6px","font-size":"14px"}},s=(0,i._)("span",null,"第",-1),o={style:{"padding-left":"1px","padding-right":"1px"}},r=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),c=(0,i._)("span",null,"共",-1),u={style:{"padding-left":"1px","padding-right":"1px"}},d=(0,i._)("span",{style:{"margin-right":"3px"}},"页",-1),p=(0,i._)("span",null,"总",-1),m={style:{"padding-left":"1px","padding-right":"1px"}},h=(0,i._)("span",null,"条",-1),f={style:{position:"relative",top:"1px","margin-left":"0px"}},g={key:2,class:"text-center",style:{"padding-top":"12px"}};function w(t,e,a,w,y,_){const x=(0,i.up)("v-icon"),k=(0,i.up)("v-btn"),v=(0,i.up)("v-card");return(0,i.wg)(),(0,i.iD)("span",null,[t.paging&&a.pagingShow?((0,i.wg)(),(0,i.j4)(v,{key:0,elevation:"0",style:{"margin-bottom":"0px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{"margin-right":"6px",width:"28px",height:"28px"},onClick:_.previousHandle},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{size:"28"},{default:(0,i.w5)((()=>[(0,i.Uk)("mdi-chevron-left")])),_:1})])),_:1},8,["onClick"]),(0,i.Wm)(k,{variant:"outlined",size:"x-small",icon:"",color:"primary",style:{width:"28px",height:"28px"},onClick:_.nextHandle},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{size:"28"},{default:(0,i.w5)((()=>[(0,i.Uk)("mdi-chevron-right")])),_:1})])),_:1},8,["onClick"]),(0,i._)("span",n,[s,(0,i._)("span",o,(0,l.zw)(t.current),1),r,c,(0,i._)("span",u,(0,l.zw)(t.page),1),d,p,(0,i._)("span",m,(0,l.zw)(t.totalNum),1),h]),(0,i._)("span",f,[a.showSearchBtn?((0,i.wg)(),(0,i.j4)(k,{key:0,style:{"padding-left":"8px","padding-right":"4px"},onClick:_.searchClick,variant:"plain",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{size:"24",icon:"mdi-magnify"}),(0,i.Uk)(" 查询 ")])),_:1},8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(k,{onClick:_.refreshClick,style:(0,l.j5)(["min-width: 42px;width: 42px",{padding:"0"}]),variant:"plain",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 刷新 ")])),_:1},8,["onClick"])])])),_:1})):(0,i.kq)("",!0),t.items.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(t.items,((e,a)=>(0,i.WI)(t.$slots,"tableBody",{key:a,items:e,_index:a}))),128)):((0,i.wg)(),(0,i.iD)("p",g,[(0,i.Wm)(x,{icon:"mdi-emoticon-sad-outline"}),(0,i.Uk)(" 无数据！ ")]))])}var y=a(21801),_=a(37184);var x=a(20868),k={components:{},emits:["searchClick","refresh"],data:()=>({totalNum:0,current:1,page:0,paging:!0,items:[]}),created(){const{auto:t,url:e}=this;t&&e&&this.initFunc()},methods:{previousHandle(){const{current:t}=this;1!=t?(this.current=t-1,this.$nextTick((()=>{this.initFunc(this.current)}))):(0,x.LJ)("第一页！")},nextHandle(){const{current:t,page:e}=this;t>=e?(0,x.LJ)("最后一页！"):(this.current=t+1,this.$nextTick((()=>{this.initFunc(this.current)})))},async initFunc(t=1,e){const{url:a,params:i={},children:l,method:n,formatData:s}=this;if(l)return this.items=l,void(this.paging=!1);const o=(0,y.Z)((0,y.Z)({pageNum:t,pageSize:10},i),e),{code:r,total:c=0,msg:u="",data:d,rows:p}=await(0,_.i)({method:n,url:a,payload:"post"==n?o:{},url_params:"get"==n?o:{}});200==r&&(this.totalNum=c,this.current=t,this.page=Math.ceil(c/o.pageSize),this.items=s?s(d||p||[]):d||p||[])},refreshClick(){const{refreshFunc:t}=this;!t&&this.initFunc(1),this.$emit("refresh")},searchClick(){this.$emit("searchClick")},resultData(){return this.items||[]},selectAll(){this.items=this.items.map((t=>Object.assign(t,{_checked:!0})))}},props:{method:{type:String,default:()=>"get"},refreshFunc:{type:Boolean,default:()=>!1},showSearchBtn:{type:Boolean,default:()=>!1},auto:{type:Boolean,default:()=>!0},pagingShow:{type:Boolean,default:()=>!0},children:{type:Array,default:()=>{}},url:{type:String,default:()=>""},params:{type:Object,default:()=>{}},formatData:{}}},v=a(40089);const W=(0,v.Z)(k,[["render",w]]);var C=W},11745:function(t,e,a){a.r(e),a.d(e,{default:function(){return R}});var i=a(73396),l=a(87139);const n={class:"v-window-item-table"},s=(0,i._)("p",{class:"font-weight-medium text"},"检验项目:",-1),o={class:"font-weight-light"},r=(0,i._)("p",{class:"font-weight-medium text"},"检验明细:",-1),c={class:"font-weight-light"},u=(0,i._)("p",{class:"font-weight-medium text"},"检验工位:",-1),d={class:"font-weight-light"},p=(0,i._)("p",{class:"font-weight-medium text"},"不合格描述:",-1),m={class:"font-weight-light"},h=(0,i._)("p",{class:"font-weight-medium text"},"不良类别:",-1),f={class:"font-weight-light"},g=(0,i._)("p",{class:"font-weight-medium text"},"整改结果:",-1),w={class:"font-weight-light"},y=(0,i._)("p",{class:"font-weight-medium text"},"处理措施:",-1),_={class:"font-weight-light"},x=(0,i._)("p",{class:"font-weight-medium text"},"放行说明:",-1),k={class:"font-weight-light"},v=(0,i._)("p",{class:"font-weight-medium text"},"放行人:",-1),W={class:"font-weight-light"},C=(0,i._)("p",{class:"font-weight-medium text"},"整改状态:",-1),b={class:"font-weight-light"},S=(0,i._)("p",{class:"font-weight-medium text"},"是否通过:",-1),O={class:"font-weight-light"};function D(t,e,a,D,F,B){const N=(0,i.up)("AppBarPage"),$=(0,i.up)("v-btn"),z=(0,i.up)("van-checkbox"),H=(0,i.up)("v-col"),T=(0,i.up)("v-badge"),I=(0,i.up)("v-row"),U=(0,i.up)("v-card"),P=(0,i.up)("TableComponents"),q=(0,i.up)("SearchPage");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(N),(0,i.Wm)($,{style:{width:"62px",height:"62px",position:"fixed",top:"170px",right:"16px","z-index":"11",color:"#fff !important"},icon:"mdi-plus",color:"secondary",onClick:B.passFunc},{default:(0,i.w5)((()=>[(0,i.Uk)("通过")])),_:1},8,["onClick"]),(0,i.Wm)($,{style:{width:"62px",height:"62px",position:"fixed",top:"248px",right:"16px","z-index":"11",color:"#fff !important"},icon:"mdi-plus",color:"error",onClick:B.noPassFunc},{default:(0,i.w5)((()=>[(0,i.Uk)("不通过")])),_:1},8,["onClick"]),(0,i._)("div",n,[(0,i.Wm)(P,{ref:"table1",url:"/iiot/qmDefect/findDefectDate",showSearchBtn:!1,auto:!1,params:{qmType:"IPQC"},onSearchClick:B.searchClick},{tableBody:(0,i.w5)((t=>[(0,i.Wm)(U,null,{default:(0,i.w5)((()=>[(0,i.Wm)(I,{"no-gutters":"",class:"table-title"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{modelValue:t.items._checkbox,"onUpdate:modelValue":e=>t.items._checkbox=e,"checked-color":"#4CAF50",shape:"square",style:{width:"23px",height:"23px","margin-left":"6px"}},{default:(0,i.w5)((()=>[(0,i.Uk)("设备")])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,i.Wm)(H,{cols:"1"},{default:(0,i.w5)((()=>[(0,i.Wm)(T,{style:{position:"relative",top:"-2px"},content:t._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,i.Wm)(H,{cols:"10",class:"text-right"})])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[s])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",o,(0,l.zw)(t.items.inspectName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[r])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",c,(0,l.zw)(t.items.inspectDetailName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[u])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",d,(0,l.zw)(t.items.nodeLevelName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",m,(0,l.zw)(t.items.defectName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[h])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",f,(0,l.zw)(t.items.reasonName),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",w,(0,l.zw)(t.items.repairResult),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[y])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",_,(0,l.zw)(t.items.repairMeasures),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",k,(0,l.zw)(t.items.releaseMeasures),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[v])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",W,(0,l.zw)(t.items.releaseBy),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[C])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",b,(0,l.zw)(B.FormatDictionary("ipqc_defect_status",t.items.defectStatus)["lable"]),1)])),_:2},1024)])),_:2},1024),(0,i.Wm)(I,{"no-gutters":"",class:"text"},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"},{default:(0,i.w5)((()=>[S])),_:1}),(0,i.Wm)(H,{cols:"8"},{default:(0,i.w5)((()=>[(0,i._)("p",O,(0,l.zw)(B.FormatDictionary("OK_NG",t.items.isOkNg)["lable"]),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["onSearchClick"])]),(0,i.Wm)(q,{ref:"searchPage",onResetHandle:B.resetHandle,onSearchHandle:B.searchHandle},null,8,["onResetHandle","onSearchHandle"])])}a(57658),a(73210);var F=a(76496),B=a(88575);const N=(0,i._)("div",{style:{height:"36px"}},null,-1),$={style:{"margin-top":"32px"}};function z(t,e,a,l,n,s){const o=(0,i.up)("SelectComponents"),r=(0,i.up)("DatePickerComponents"),c=(0,i.up)("v-btn"),u=(0,i.up)("v-col"),d=(0,i.up)("v-row"),p=(0,i.up)("van-popup");return(0,i.wg)(),(0,i.iD)("span",null,[(0,i.Wm)(p,{show:t.drawer,"onUpdate:show":e[4]||(e[4]=e=>t.drawer=e),closeable:"",position:"right",style:{padding:"12px",width:"90%",height:"100%"}},{default:(0,i.w5)((()=>[N,(0,i.Wm)(o,{modelValue:t.property,"onUpdate:modelValue":e[0]||(e[0]=e=>t.property=e),ref:"select2",label:"状态",option:t.propertySelectOption},null,8,["modelValue","option"]),(0,i.Wm)(r,{modelValue:t.dateStart,"onUpdate:modelValue":e[1]||(e[1]=e=>t.dateStart=e),label:"开始日期",ref:"dateTimeStart","columns-type":["year","month","day"]},null,8,["modelValue"]),(0,i.Wm)(r,{modelValue:t.dateOver,"onUpdate:modelValue":e[2]||(e[2]=e=>t.dateOver=e),label:"结束日期",ref:"dateTimeOver","columns-type":["year","month","day"]},null,8,["modelValue"]),(0,i._)("div",$,[(0,i.Wm)(d,{"no-gutters":""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:e[3]||(e[3]=()=>t.drawer=!1),density:"compact",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("关闭")])),_:1})])),_:1}),(0,i.Wm)(u,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:s.resetClick,density:"compact",color:"warning",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("重置")])),_:1},8,["onClick"])])),_:1}),(0,i.Wm)(u,{cols:"4",class:"text-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:s.searchClick,density:"compact",color:"primary",variant:"plain"},{default:(0,i.w5)((()=>[(0,i.Uk)("查询")])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1},8,["show"])])}var H=a(2243),T=a(37184),I=a(21655),U=(a(89337),a(5878),{components:{DatePickerComponents:I.Z,SelectComponents:H.Z},emits:["searchHandle","resetHandle"],data:()=>({drawer:!1,show:!1,fieldValue:"",options:[],dateStart:"",dateOver:"",factoryID:"",type:"",typeSelectOption:[],property:"",propertySelectOption:[],status:"",statusSelectOption:[]}),created(){this.initFunc()},methods:{FormatDictionary(t="",e=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),i=a[t]||[],l=i.filter((t=>e==t.value))[0]||{};return l},resetClick(){this.property="",this.dateStart="",this.dateOver="",this.$refs.dateTimeStart.reset(),this.$refs.dateTimeOver.reset(),this.$refs.select2.reset(),this.$emit("resetHandle",{})},async initFunc(){const t=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),e=t["ipqc_defect_status"]||[];this.propertySelectOption=e.map((t=>Object.assign({text:t.lable,value:t.value})))},async getTypeHttp(t=""){const{code:e,data:a=[]}=await(0,T.i)({url:"/iiot/abnormalType/listAbnormalTypeForSelect",method:"get",url_params:{abnormalNo:t}});200==e&&(this.typeSelectOption=a.map((t=>Object.assign({text:`${t.abnormalNo}${t.abnormalName}`,value:t.tmBasAbnormalTypeId}))))},onFinish({selectedOptions:t}){if(!t.length)return;let e=(t[t.length-1]||{})["tmBasNodeLevelId"];this.factoryID=e,this.fieldValue=t.map((t=>t.nodeLevelName)).join("/")},searchClick(){const{factoryID:t,type:e,property:a,status:i}=this,l={defectStatus:this.property};this.$emit("searchHandle",l),this.drawer=!1},showDrawer(){this.drawer=!0}},props:{hideStatus:{type:Boolean,default:()=>!0}}}),P=a(40089);const q=(0,P.Z)(U,[["render",z]]);var L=q,V=a(73378),Z=a(20868),A=a(69650),j={components:{AppBarPage:F.Z,SearchPage:L,TableComponents:B.Z,ScanBarComponents:V.Z},data:()=>({pageSearchConfig:{}}),created(){this.initHandle()},methods:{GlobalTooltipFunc(t=""){(0,Z.CF)({message:t,overlay:!0,closeOnClickOverlay:!0,duration:0})},FormatDictionary(t="",e=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),i=a[t]||[],l=i.filter((t=>e==t.value))[0]||{};return l},initHandle(){const{ttPpOrderSnId:t}=this.$route.query;this.$nextTick((()=>{this.$refs.table1.initFunc(1,{ttPpOrderSnId:t})}))},async detailClick(t){const{items:e}=t;this.$router.push({path:"/processDisqualification/detail",query:{ttQmDefectId:e.ttQmDefectId}})},searchClick(){this.$refs.searchPage.showDrawer()},searchHandle(t){this.pageSearchConfig=t,this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},resetHandle(t){this.pageSearchConfig={},this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},async barSearchClick(t=""){t.trim()},async passFunc(){const t=this.$refs.table1.resultData().filter((t=>t._checkbox));t.length?(0,A.vC)({title:"通过",message:`已经选择${t.length}条数据,确认通过！`,theme:"round-button",confirmButtonColor:"#4CAF50",closeOnClickOverlay:!0}).then((async()=>{const e=t.map((t=>t.ttQmDefectId)),{code:a}=await(0,T.i)({url:"/iiot/qmDefect/commitDefectOkOrNg",method:"post",payload:{isOkNg:"OK",idList:e}});200==a&&this.initHandle()})):(0,Z.LJ)("未选择数据！")},async noPassFunc(){const t=this.$refs.table1.resultData().filter((t=>t._checkbox));t.length?(0,A.vC)({title:"不通过",message:`已经选择${t.length}条数据,确认不通过！`,theme:"round-button",confirmButtonColor:"error",closeOnClickOverlay:!0}).then((async()=>{const e=t.map((t=>t.ttQmDefectId)),{code:a}=await(0,T.i)({url:"/iiot/qmDefect/commitDefectOkOrNg",method:"post",payload:{isOkNg:"NG",idList:e}});200==a&&this.initHandle()})):(0,Z.LJ)("未选择数据！")}}};const J=(0,P.Z)(j,[["render",D]]);var R=J},69650:function(t,e,a){a.d(e,{vC:function(){return d}});var i=a(73396),l=a(12220),n=a(57548),s=a(21178);let o;const r={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let c=(0,l.l7)({},r);function u(){const t={setup(){const{state:t,toggle:e}=(0,n.o)();return()=>(0,i.Wm)(s.Z,(0,i.dG)(t,{"onUpdate:show":e}),null)}};({instance:o}=(0,n.H)(t))}function d(t){return l._f?new Promise(((e,a)=>{o||u(),o.open((0,l.l7)({},c,t,{callback:t=>{("confirm"===t?e:a)(t)}}))})):Promise.resolve()}}}]);
//# sourceMappingURL=chunk.6905.1689577235749.js.map