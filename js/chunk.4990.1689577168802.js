"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[4990],{89337:function(e,t,n){n.d(t,{$w:function(){return p},AT:function(){return o},NM:function(){return l},ew:function(){return s},jt:function(){return a},vU:function(){return c}});var r=n(50124),i=n(48534),u=n(37184),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n=arguments;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,(0,u.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/iiot/faultType/list?enabled=1",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/iiot/fault/list?enabled=1",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:t.payload});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5878:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(66347),i=(n(57658),function(e,t,n,i){var u,a={id:t||"id",parentId:n||"parentId",childrenList:i||"children"},o={},c={},s=[],l=(0,r.Z)(e);try{for(l.s();!(u=l.n()).done;){var p=u.value,f=p[a.parentId];null==o[f]&&(o[f]=[]),c[p[a.id]]=p,o[f].push(p)}}catch(q){l.e(q)}finally{l.f()}var d,h=(0,r.Z)(e);try{for(h.s();!(d=h.n()).done;){var m=d.value,v=m[a.parentId];null==c[v]&&s.push(m)}}catch(q){h.e(q)}finally{h.f()}for(var w=0,k=s;w<k.length;w++){var Z=k[w];b(Z)}function b(e){if(null!==o[e[a.id]]&&(e[a.childrenList]=o[e[a.id]]),e[a.childrenList]){var t,n=(0,r.Z)(e[a.childrenList]);try{for(n.s();!(t=n.n()).done;){var i=t.value;b(i)}}catch(q){n.e(q)}finally{n.f()}}}return s})},50868:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(73396),i=(0,r._)("div",{style:{height:"12px"}},null,-1),u=(0,r._)("div",{style:{height:"12px"}},null,-1);function a(e,t,n,a,o,c){var s=(0,r.up)("AppBarPage"),l=(0,r.up)("ScanBarComponents"),p=(0,r.up)("van-field"),f=(0,r.up)("v-btn"),d=(0,r.up)("v-col"),h=(0,r.up)("v-row"),m=(0,r.up)("van-cascader"),v=(0,r.up)("van-popup"),w=(0,r.up)("SelectComponents"),k=(0,r.up)("v-sheet");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r.Wm)(s),(0,r.Wm)(l,{placeholder:"扫描或输入 区域号",onSearchClick:c.barSearchClick},null,8,["onSearchClick"]),(0,r.Wm)(k,{elevation:"2",rounded:"",class:"pa-1"},{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.fieldValue=t}),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",onClick:t[1]||(t[1]=function(t){return e.show=!0})},null,8,["modelValue"]),(0,r.Wm)(v,{show:e.show,"onUpdate:show":t[3]||(t[3]=function(t){return e.show=t}),round:"",position:"bottom"},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,{cols:"6"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{block:"",color:"warning",elevation:"0",style:{"border-radius":"0px"},onClick:c.factoryReset},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 重置 ")]})),_:1},8,["onClick"])]})),_:1}),(0,r.Wm)(d,{cols:"6"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:c.factoryAffirm},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 确定 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),e.factoryShow?((0,r.wg)(),(0,r.j4)(m,{key:0,title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[2]||(t[2]=function(t){return e.show=!1}),onChange:c.onFinish},null,8,["options","onChange"])):(0,r.kq)("",!0)]})),_:1},8,["show"]),(0,r.Wm)(w,{modelValue:e.equipment,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.equipment=t}),ref:"selectContent",label:"设备",placeholderSearch:"请输入设备编号",forbidShow:!0,required:"",showSearch:"",option:e.equipmentSelectOption,onOnFieldClick:c.onEquipmentFieldClick,onOnSearchChange:c.equipmentSearchChange,onOnChange:c.equipmentConfirm},null,8,["modelValue","option","onOnFieldClick","onOnSearchChange","onOnChange"])]})),_:1}),i,u,(0,r.Wm)(h,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f,{onClick:c.submit,block:"",color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 确定 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})])}var o=n(50124),c=n(48534),s=(n(40561),n(21249),n(92222),n(73210),n(57327),n(41539),n(69600),n(57658),n(76496)),l=n(73378),p=n(2243),f=n(20868),d=(n(89337),n(37184)),h=n(5878),m={components:{AppBarPage:s.Z,SelectComponents:p.Z,ScanBarComponents:l.Z},data:function(){return{factoryShow:!0,checked1:!0,checked2:!0,bufferTree:[],tableList:[],show:!1,fieldValue:"",fieldSelectValue:{},options:[],equipment:"",equipmentSelectOption:[],equipmentSelectOptionData:[]}},created:function(){this.initFunc(),this.equipmentHTTP()},methods:{initFunc:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){var n,r,i,u,a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,d.i)({url:"/iiot/nodeLevel/nodeList",method:"get"});case 2:n=t.sent,r=n.code,i=n.data,u=void 0===i?[]:i,200==r&&(a=(0,h.b)(u,"tmBasNodeLevelId","parentId"),e.bufferTree=u,e.options=a);case 7:case"end":return t.stop()}}),t)})))()},equipmentHTTP:function(){var e=arguments,t=this;return(0,c.Z)((0,o.Z)().mark((function n(){var r,i,u,a,c,s,l,p;return(0,o.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"",i=e.length>1?e[1]:void 0,u=t.fieldSelectValue,a=void 0===u?{}:u,n.next=5,(0,d.i)({url:"/iiot/equipment/list",method:"get",url_params:{equipmentType:"星邦设备区域",tmBasNodeLevelId:i||a.tmBasNodeLevelId||"",equipmentNo:r}});case 5:c=n.sent,s=c.code,l=c.data,p=void 0===l?[]:l,200==s&&(t.equipmentSelectOptionData=p,t.equipmentSelectOption=p.map((function(e){return Object.assign({text:"".concat(e.equipmentNo,"-").concat(e.equipmentName),value:e.tmBasEquipmentId})})).splice(0,100));case 10:case"end":return n.stop()}}),n)})))()},barSearchClick:function(e){var t=this;return(0,c.Z)((0,o.Z)().mark((function n(){var r,i,u;return(0,o.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.trim(),i=t.bufferTree,t.factoryReset(),u=i.filter((function(e){return e.nodeLevelNo==r}))[0]||{},u.tmBasNodeLevelId){n.next=7;break}return(0,f.LJ)("无工厂节点！"),n.abrupt("return");case 7:t.$nextTick((0,c.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.equipmentHTTP("",u.tmBasNodeLevelId);case 2:t.$nextTick((function(){t.$refs.selectContent.showModle()}));case 3:case"end":return e.stop()}}),e)}))));case 8:case"end":return n.stop()}}),n)})))()},onFinish:function(e){var t=e.selectedOptions;this.fieldSelectValue=t[t.length-1]||{},this.fieldValue=t.map((function(e){return e.nodeLevelName})).join("/")},factoryReset:function(){var e=this;this.fieldValue="",this.fieldSelectValue={},this.factoryShow=!1,this.$nextTick((function(){e.factoryShow=!0}))},factoryAffirm:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.show=!1,t.next=3,e.equipmentHTTP();case 3:e.$nextTick((function(){e.$refs.selectContent.showModle()}));case 4:case"end":return t.stop()}}),t)})))()},onEquipmentFieldClick:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.equipmentHTTP();case 2:e.$refs.selectContent.showModle();case 3:case"end":return t.stop()}}),t)})))()},equipmentSearchChange:function(){var e=arguments,t=this;return(0,c.Z)((0,o.Z)().mark((function n(){var r;return(0,o.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.length>0&&void 0!==e[0]?e[0]:"",t.equipmentHTTP(r);case 2:case"end":return n.stop()}}),n)})))()},equipmentConfirm:function(e){var t=this.equipmentSelectOptionData.filter((function(t){return t.tmBasEquipmentId==e}));this.tableList=t},removeIcon:function(e){this.tableList=this.tableList.filter((function(t){return t.tmBasEquipmentId!=e.tmBasEquipmentId}))},submit:function(){var e=this;return(0,c.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.tableList.length){t.next=3;break}return(0,f.LJ)("设备不能为空！"),t.abrupt("return");case 3:e.$router.push({path:"/equipment/repairs",query:{tmBasEquipmentId:e.tableList[0].tmBasEquipmentId,equipmentNo:e.tableList[0].equipmentNo,equipmentName:e.tableList[0].equipmentName}});case 4:case"end":return t.stop()}}),t)})))()}}},v=n(40089);const w=(0,v.Z)(m,[["render",a]]);var k=w}}]);
//# sourceMappingURL=chunk.4990.1689577168802.js.map