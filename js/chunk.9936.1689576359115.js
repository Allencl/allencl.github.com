"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[9936],{89337:function(e,t,n){n.d(t,{$w:function(){return p},AT:function(){return a},NM:function(){return s},ew:function(){return l},jt:function(){return o},vU:function(){return c}});var r=n(50124),i=n(48534),u=n(37184),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n=arguments;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,(0,u.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/iiot/faultType/list?enabled=1",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/iiot/fault/list?enabled=1",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:t.payload});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5878:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(66347),i=(n(57658),function(e,t,n,i){var u,o={id:t||"id",parentId:n||"parentId",childrenList:i||"children"},a={},c={},l=[],s=(0,r.Z)(e);try{for(s.s();!(u=s.n()).done;){var p=u.value,d=p[o.parentId];null==a[d]&&(a[d]=[]),c[p[o.id]]=p,a[d].push(p)}}catch(b){s.e(b)}finally{s.f()}var f,m=(0,r.Z)(e);try{for(m.s();!(f=m.n()).done;){var h=f.value,v=h[o.parentId];null==c[v]&&l.push(h)}}catch(b){m.e(b)}finally{m.f()}for(var w=0,k=l;w<k.length;w++){var x=k[w];y(x)}function y(e){if(null!==a[e[o.id]]&&(e[o.childrenList]=a[e[o.id]]),e[o.childrenList]){var t,n=(0,r.Z)(e[o.childrenList]);try{for(n.s();!(t=n.n()).done;){var i=t.value;y(i)}}catch(b){n.e(b)}finally{n.f()}}}return l})},22509:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});n(92222);var r=n(73396),i=n(87139),u=(0,r._)("div",{style:{height:"12px"}},null,-1),o={style:{"border-bottom":"1px solid #ccc","margin-bottom":"16px"}},a={class:"text-truncate font-weight-medium text"},c={key:1,class:"text-center"},l=(0,r._)("div",{style:{height:"12px"}},null,-1),s=(0,r._)("div",{style:{height:"12px"}},null,-1),p=(0,r._)("div",{style:{height:"12px"}},null,-1),d=(0,r._)("div",{style:{height:"12px"}},null,-1),f=(0,r._)("div",{style:{height:"12px"}},null,-1);function m(e,t,n,m,h,v){var w=(0,r.up)("AppBarPage"),k=(0,r.up)("ScanBarComponents"),x=(0,r.up)("van-field"),y=(0,r.up)("v-btn"),b=(0,r.up)("v-col"),Z=(0,r.up)("v-row"),g=(0,r.up)("van-cascader"),q=(0,r.up)("van-popup"),C=(0,r.up)("SelectComponents"),_=(0,r.up)("v-sheet"),W=(0,r.up)("v-icon"),S=(0,r.up)("van-checkbox");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r.Wm)(w),(0,r.Wm)(k,{placeholder:"扫描或输入 区域号",onSearchClick:v.barSearchClick},null,8,["onSearchClick"]),(0,r.Wm)(_,{elevation:"2",rounded:"",class:"pa-1"},{default:(0,r.w5)((function(){return[(0,r.Wm)(x,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.fieldValue=t}),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",onClick:t[1]||(t[1]=function(t){return e.show=!0})},null,8,["modelValue"]),(0,r.Wm)(q,{show:e.show,"onUpdate:show":t[3]||(t[3]=function(t){return e.show=t}),round:"",position:"bottom"},{default:(0,r.w5)((function(){return[(0,r.Wm)(Z,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{cols:"6"},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,{block:"",color:"warning",elevation:"0",style:{"border-radius":"0px"},onClick:v.factoryReset},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 重置 ")]})),_:1},8,["onClick"])]})),_:1}),(0,r.Wm)(b,{cols:"6"},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:v.factoryAffirm},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 确定 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),e.factoryShow?((0,r.wg)(),(0,r.j4)(g,{key:0,title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[2]||(t[2]=function(t){return e.show=!1}),onChange:v.onFinish},null,8,["options","onChange"])):(0,r.kq)("",!0)]})),_:1},8,["show"]),(0,r.Wm)(C,{modelValue:e.equipment,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.equipment=t}),ref:"selectContent",label:"设备",placeholderSearch:"请输入设备编号",forbidShow:!0,showSearch:"",option:e.equipmentSelectOption,onOnFieldClick:v.onEquipmentFieldClick,onOnSearchChange:v.equipmentSearchChange,onOnChange:v.equipmentConfirm},null,8,["modelValue","option","onOnFieldClick","onOnSearchChange","onOnChange"])]})),_:1}),u,(0,r.Wm)(_,{elevation:"2",rounded:"",class:"pa-2"},{default:(0,r.w5)((function(){return[(0,r._)("div",o,[(0,r.Wm)(W,{icon:"mdi-table",size:"16",color:"primary"}),(0,r.Uk)(" 设备列表 ")]),e.tableList.length?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(e.tableList,(function(e,t){return(0,r.wg)(),(0,r.j4)(Z,{key:t,style:{padding:"0px 4px",margin:"12px 0px 12px 0px"},"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{cols:"10"},{default:(0,r.w5)((function(){return[(0,r._)("p",a,(0,i.zw)("".concat(e.equipmentNo,"-").concat(e.equipmentName)),1)]})),_:2},1024),(0,r.Wm)(b,{cols:"2",class:"text-right"},{default:(0,r.w5)((function(){return[(0,r.Wm)(W,{onClick:function(t){return v.removeIcon(e)},icon:"mdi-delete-forever",size:"26",color:"error"},null,8,["onClick"])]})),_:2},1024)]})),_:2},1024)})),128)):((0,r.wg)(),(0,r.iD)("p",c,[(0,r.Wm)(W,{icon:"mdi-emoticon-sad-outline",style:{position:"relative",top:"-2px"}}),(0,r.Uk)(" 无数据！ ")]))]})),_:1}),l,(0,r.Wm)(_,{elevation:"2",rounded:"",class:"pa-2"},{default:(0,r.w5)((function(){return[s,(0,r.Wm)(Z,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{cols:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(W,{icon:"mdi-power-socket-uk",size:"16",color:"primary"}),(0,r.Uk)(" 点检类型 ")]})),_:1}),(0,r.Wm)(b,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{modelValue:e.checked1,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.checked1=t}),disabled:"",shape:"square",style:{"margin-top":"2px"}},{default:(0,r.w5)((function(){return[(0,r.Uk)("设备")]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),p,(0,r.Wm)(Z,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{cols:"4"},{default:(0,r.w5)((function(){return[(0,r.Wm)(W,{icon:"mdi-zodiac-aquarius",size:"16",color:"primary"}),(0,r.Uk)(" 应用范围 ")]})),_:1}),(0,r.Wm)(b,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{modelValue:e.checked2,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.checked2=t}),disabled:"",shape:"square",style:{"margin-top":"2px"}},{default:(0,r.w5)((function(){return[(0,r.Uk)("设备")]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),d]})),_:1}),f,(0,r.Wm)(Z,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(y,{onClick:v.submit,block:"",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 确定 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})])}var h=n(50124),v=n(48534),w=(n(40561),n(21249),n(73210),n(57327),n(41539),n(69600),n(57658),n(76496)),k=n(73378),x=n(2243),y=n(20868),b=n(89337),Z=n(37184),g=n(5878),q={components:{AppBarPage:w.Z,SelectComponents:x.Z,ScanBarComponents:k.Z},data:function(){return{factoryShow:!0,bufferTree:[],checked1:!0,checked2:!0,tableList:[],show:!1,fieldValue:"",fieldSelectValue:{},options:[],equipment:"",equipmentSelectOption:[],equipmentSelectOptionData:[]}},created:function(){this.initFunc(),this.equipmentHTTP()},methods:{initFunc:function(){var e=this;return(0,v.Z)((0,h.Z)().mark((function t(){var n,r,i,u;return(0,h.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,b.jt)();case 2:n=t.sent,r=n.data,i=void 0===r?[]:r,u=(0,g.b)(i,"tmBasNodeLevelId","parentId"),e.bufferTree=i,e.options=u;case 8:case"end":return t.stop()}}),t)})))()},equipmentHTTP:function(){var e=arguments,t=this;return(0,v.Z)((0,h.Z)().mark((function n(){var r,i,u,o,a,c,l,s;return(0,h.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"",i=e.length>1?e[1]:void 0,u=t.fieldSelectValue,o=void 0===u?{}:u,n.next=5,(0,Z.i)({url:"/iiot/equipment/list",method:"get",url_params:{tmBasNodeLevelId:i||o.tmBasNodeLevelId||"",equipmentNo:r}});case 5:a=n.sent,c=a.code,l=a.data,s=void 0===l?[]:l,200==c&&(t.equipmentSelectOptionData=s,t.equipmentSelectOption=s.map((function(e){return Object.assign({text:"".concat(e.equipmentNo,"-").concat(e.equipmentName),value:e.tmBasEquipmentId})})).splice(0,100));case 10:case"end":return n.stop()}}),n)})))()},barSearchClick:function(e){var t=this;return(0,v.Z)((0,h.Z)().mark((function n(){var r,i,u;return(0,h.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.trim(),i=t.bufferTree,t.factoryReset(),u=i.filter((function(e){return e.nodeLevelNo==r}))[0]||{},u.tmBasNodeLevelId){n.next=7;break}return(0,y.LJ)("无工厂节点！"),n.abrupt("return");case 7:t.$nextTick((0,v.Z)((0,h.Z)().mark((function e(){return(0,h.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.equipmentHTTP("",u.tmBasNodeLevelId);case 2:t.$nextTick((function(){t.$refs.selectContent.showModle()}));case 3:case"end":return e.stop()}}),e)}))));case 8:case"end":return n.stop()}}),n)})))()},onFinish:function(e){var t=e.selectedOptions;this.fieldSelectValue=t[t.length-1]||{},this.fieldValue=t.map((function(e){return e.nodeLevelName})).join("/")},factoryReset:function(){var e=this;this.fieldValue="",this.fieldSelectValue={},this.factoryShow=!1,this.$nextTick((function(){e.factoryShow=!0}))},factoryAffirm:function(){var e=this;return(0,v.Z)((0,h.Z)().mark((function t(){return(0,h.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.show=!1,t.next=3,e.equipmentHTTP();case 3:e.$nextTick((function(){e.$refs.selectContent.showModle()}));case 4:case"end":return t.stop()}}),t)})))()},onEquipmentFieldClick:function(){var e=this;return(0,v.Z)((0,h.Z)().mark((function t(){return(0,h.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.equipmentHTTP();case 2:e.$refs.selectContent.showModle();case 3:case"end":return t.stop()}}),t)})))()},equipmentSearchChange:function(){var e=arguments,t=this;return(0,v.Z)((0,h.Z)().mark((function n(){var r;return(0,h.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.length>0&&void 0!==e[0]?e[0]:"",t.equipmentHTTP(r);case 2:case"end":return n.stop()}}),n)})))()},equipmentConfirm:function(e){var t=this.equipmentSelectOptionData.filter((function(t){return t.tmBasEquipmentId==e}));this.tableList.filter((function(t){return t.tmBasEquipmentId==e})).length?(0,y.LJ)("已添加！"):this.tableList=this.tableList.concat(t)},removeIcon:function(e){this.tableList=this.tableList.filter((function(t){return t.tmBasEquipmentId!=e.tmBasEquipmentId}))},submit:function(){var e=this;return(0,v.Z)((0,h.Z)().mark((function t(){var n,r,i,u;return(0,h.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={taskTypeArray:["M"],machineType:"M",tmBasNodeLevelId:e.fieldSelectValue.tmBasNodeLevelId,tmBasEquipmentIdArray:e.tableList.map((function(e){return e.tmBasEquipmentId}))},t.next=3,(0,Z.i)({url:"/iiot/checkTask",method:"post",payload:n});case 3:r=t.sent,i=r.code,u=r.data,void 0===u?{}:u,200==i&&((0,y.XA)("提交成功！"),e.$router.push({path:"/examineHistory/index",query:{tabs:"2"}}));case 8:case"end":return t.stop()}}),t)})))()}}},C=n(40089);const _=(0,C.Z)(q,[["render",m]]);var W=_}}]);
//# sourceMappingURL=chunk.9936.1689576359115.js.map