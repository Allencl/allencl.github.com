"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[5130],{89337:function(e,t,r){r.d(t,{$w:function(){return p},AT:function(){return u},NM:function(){return c},ew:function(){return l},jt:function(){return o},vU:function(){return s}});var n=r(50124),a=r(48534),i=r(37184),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r=arguments;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.next=3,(0,i.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.i)({url:"/iiot/faultType/list?enabled=1",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.i)({url:"/iiot/fault/list?enabled=1",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:t.payload});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5878:function(e,t,r){r.d(t,{b:function(){return a}});var n=r(66347),a=(r(57658),function(e,t,r,a){var i,o={id:t||"id",parentId:r||"parentId",childrenList:a||"children"},u={},s={},l=[],c=(0,n.Z)(e);try{for(c.s();!(i=c.n()).done;){var p=i.value,d=p[o.parentId];null==u[d]&&(u[d]=[]),s[p[o.id]]=p,u[d].push(p)}}catch(k){c.e(k)}finally{c.f()}var h,f=(0,n.Z)(e);try{for(f.s();!(h=f.n()).done;){var m=h.value,v=m[o.parentId];null==s[v]&&l.push(m)}}catch(k){f.e(k)}finally{f.f()}for(var w=0,g=l;w<g.length;w++){var y=g[w];b(y)}function b(e){if(null!==u[e[o.id]]&&(e[o.childrenList]=u[e[o.id]]),e[o.childrenList]){var t,r=(0,n.Z)(e[o.childrenList]);try{for(r.s();!(t=r.n()).done;){var a=t.value;b(a)}}catch(k){r.e(k)}finally{r.f()}}}return l})},35130:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(73396),a=(0,n._)("div",{style:{height:"12px"}},null,-1),i=(0,n._)("p",{style:{"padding-left":"16px","margin-top":"14px"}},"是否紧急",-1),o={style:{"margin-top":"32px","margin-bottom":"62px"}};function u(e,t,r,u,s,l){var c=(0,n.up)("AppBarPage"),p=(0,n.up)("van-field"),d=(0,n.up)("v-btn"),h=(0,n.up)("van-cascader"),f=(0,n.up)("van-popup"),m=(0,n.up)("SelectComponents"),v=(0,n.up)("v-col"),w=(0,n.up)("v-switch"),g=(0,n.up)("v-row");return(0,n.wg)(),(0,n.iD)("span",null,[(0,n.Wm)(c),a,(0,n.Wm)(p,{modelValue:e.fieldValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.fieldValue=t}),"is-link":"",readonly:"",label:"工厂节点",placeholder:"请选择工厂节点",type:"textarea",autocomplete:"off",required:"",onClick:t[1]||(t[1]=function(t){return e.show=!0})},null,8,["modelValue"]),(0,n.Wm)(f,{show:e.show,"onUpdate:show":t[4]||(t[4]=function(t){return e.show=t}),round:"",position:"bottom"},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{block:"",color:"cyan",elevation:"0",style:{"border-radius":"0px"},onClick:t[2]||(t[2]=function(){return e.show=!1})},{default:(0,n.w5)((function(){return[(0,n.Uk)(" 确定 ")]})),_:1}),e.showFactory?((0,n.wg)(),(0,n.j4)(h,{key:0,title:"请选择工厂节点",options:e.options,"active-color":"#4CAF50","field-names":{text:"nodeLevelName",value:"tmBasNodeLevelId",children:"children"},onClose:t[3]||(t[3]=function(t){return e.show=!1}),onChange:l.onFinish},null,8,["options","onChange"])):(0,n.kq)("",!0)]})),_:1},8,["show"]),(0,n.Wm)(m,{modelValue:e.supplier,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.supplier=t}),ref:"select6785",label:"订单",required:"",showSearch:"",option:e.supplierSelectOption,onOnSearchChange:l.supplierSearchChange,onOnChange:l.onSupplierChange},null,8,["modelValue","option","onOnSearchChange","onOnChange"]),(0,n.Wm)(m,{modelValue:e.serial,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.serial=t}),ref:"select1212",label:"产品序列号",required:"",showSearch:"",option:e.serialSelectOption,onOnSearchChange:l.serialSearchChange},null,8,["modelValue","option","onOnSearchChange"]),(0,n.Wm)(m,{modelValue:e.part,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.part=t}),ref:"select5678",label:"产品",required:"",showSearch:"",option:e.partSelectOption,onOnSearchChange:l.partSearchChange},null,8,["modelValue","option","onOnSearchChange"]),(0,n.Wm)(m,{modelValue:e.process,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.process=t}),ref:"select228",label:"过程类型",option:e.processSelectOption},null,8,["modelValue","option"]),(0,n.Wm)(m,{modelValue:e.classes,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.classes=t}),ref:"select353",label:"班次",option:e.classesSelectOption},null,8,["modelValue","option"]),(0,n.Wm)(p,{modelValue:e.receiptNo,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.receiptNo=t}),placeholder:"请输入",required:"",autocomplete:"off",label:"批次号"},null,8,["modelValue"]),(0,n.Wm)(p,{modelValue:e.receiptline,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.receiptline=t}),placeholder:"请输入",autocomplete:"off",label:"箱号"},null,8,["modelValue"]),(0,n.Wm)(p,{modelValue:e.taskQty,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.taskQty=t}),placeholder:"请输入",required:"",autocomplete:"off",type:"number",label:"任务数量"},null,8,["modelValue"]),(0,n.Wm)(g,{"no-gutters":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{cols:"4"},{default:(0,n.w5)((function(){return[i]})),_:1}),(0,n.Wm)(v,{cols:"8",style:{height:"42px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(w,{modelValue:e.switchUrgency,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.switchUrgency=t}),label:e.switchUrgency?"是":"否",color:"primary",density:"comfortable",style:{height:"48px",display:"inline-block",width:"104px","margin-left":"14px"}},null,8,["modelValue","label"])]})),_:1})]})),_:1}),(0,n._)("div",o,[(0,n.Wm)(g,{"no-gutters":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{cols:"6",class:"text-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{onClick:l.resetClick,color:"warning"},{default:(0,n.w5)((function(){return[(0,n.Uk)("重置")]})),_:1},8,["onClick"])]})),_:1}),(0,n.Wm)(v,{cols:"6",class:"text-center"},{default:(0,n.w5)((function(){return[(0,n.Wm)(d,{onClick:l.searchClick,color:"primary"},{default:(0,n.w5)((function(){return[(0,n.Uk)("提交")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})])])}var s=r(50124),l=r(48534),c=(r(57327),r(41539),r(21249),r(40561),r(92222),r(69600),r(73210),r(9653),r(57658),r(76496)),p=r(2243),d=r(37184),h=r(20868),f=r(89337),m=r(5878),v={components:{AppBarPage:c.Z,SelectComponents:p.Z},emits:["searchHandle","resetHandle"],data:function(){return{drawer:!1,showFactory:!0,show:!1,fieldValue:"",options:[],factoryID:"",process:"",processSelectOption:[],switchUrgency:!1,switchReceived:!1,switchOutInspect:!1,classes:"",classesSelectOption:[],taskQty:"",receiptNo:"",receiptline:"",receiptQty:"",supplier:"",supplierSelectOption:[],serial:"",serialSelectOption:[],part:"",partSelectOption:[]}},created:function(){this.initFunc(),this.getSupplierHttp(),this.partHttp(),this.serialHttp()},methods:{FormatDictionary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),n=r[e]||[],a=n.filter((function(e){return t==e.value}))[0]||{};return a},resetClick:function(){var e=this;this.factoryID="",this.part="",this.supplier="",this.process="",this.switchUrgency=!1,this.classes="",this.taskQty="",this.receiptNo="",this.receiptline="",this.receiptQty="",this.switchReceived=!1,this.switchOutInspect=!1,this.$refs.select6785.reset(),this.$refs.select1212.reset(),this.$refs.select5678.reset(),this.$refs.select228.reset(),this.$refs.select353.reset(),this.fieldValue="",this.showFactory=!1,this.$nextTick((function(){e.showFactory=!0}))},initFunc:function(){var e=this;return(0,l.Z)((0,s.Z)().mark((function t(){var r,n,a,i,o,u,l;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),n=r["QC_TASK_TYPE"]||[],e.processSelectOption=n.map((function(e){return Object.assign({text:e.lable,value:e.value})})),a=r["shiftno"]||[],e.classesSelectOption=a.map((function(e){return Object.assign({text:e.lable,value:e.value})})),t.next=7,(0,f.jt)();case 7:i=t.sent,o=i.data,u=void 0===o?[]:o,l=(0,m.b)(u,"tmBasNodeLevelId","parentId"),e.options=l;case 12:case"end":return t.stop()}}),t)})))()},getSupplierHttp:function(){var e=arguments,t=this;return(0,l.Z)((0,s.Z)().mark((function r(){var n,a,i,o,u;return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"",r.next=3,(0,d.i)({url:"/iiot/order/listOrderForSelect",method:"get",url_params:{aufnr:n}});case 3:a=r.sent,i=a.code,o=a.data,u=void 0===o?[]:o,200==i&&(t.supplierSelectOption=u.map((function(e){return Object.assign({text:"".concat(e.aufnr),value:e.ttPpOrderId})})).splice(0,100));case 8:case"end":return r.stop()}}),r)})))()},supplierSearchChange:function(e){this.getSupplierHttp(e)},onSupplierChange:function(e){var t=this;this.serialHttp("",e),this.$nextTick((function(){t.serial="",t.$refs.select1212.reset()}))},serialHttp:function(){var e=arguments,t=this;return(0,l.Z)((0,s.Z)().mark((function r(){var n,a,i,o,u,l;return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"",a=e.length>1&&void 0!==e[1]?e[1]:"",r.next=4,(0,d.i)({url:"/iiot/orderSn/listOrderSnForSelect",method:"get",url_params:{sernr:n,ttPpOrderId:a}});case 4:i=r.sent,o=i.code,u=i.data,l=void 0===u?[]:u,200==o&&(t.serialSelectOption=l.map((function(e){return Object.assign({text:"".concat(e.sernr),value:e.ttPpOrderSnId})})).splice(0,100));case 9:case"end":return r.stop()}}),r)})))()},serialSearchChange:function(e){this.serialHttp(e)},partHttp:function(){var e=arguments,t=this;return(0,l.Z)((0,s.Z)().mark((function r(){var n,a,i,o,u;return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"",r.next=3,(0,d.i)({url:"/iiot/part/listPartForSelect",method:"get",url_params:{noOrName:n}});case 3:a=r.sent,i=a.code,o=a.data,u=void 0===o?[]:o,200==i&&(t.partSelectOption=u.map((function(e){return Object.assign({text:"".concat(e.matnr||"","-").concat(e.maktxC||""),value:e.tmBasPartId})})).splice(0,100));case 8:case"end":return r.stop()}}),r)})))()},partSearchChange:function(e){this.partHttp(e)},onFinish:function(e){var t=e.selectedOptions;if(t.length){var r=(t[t.length-1]||{})["tmBasNodeLevelId"];this.factoryID=r,this.fieldValue=t.map((function(e){return e.nodeLevelName})).join("/")}},searchClick:function(){var e=this;return(0,l.Z)((0,s.Z)().mark((function t(){var r,n,a,i;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.factoryID){t.next=3;break}return(0,h.LJ)("工厂必填！"),t.abrupt("return");case 3:if(e.supplier){t.next=6;break}return(0,h.LJ)("生产订单必填！"),t.abrupt("return");case 6:if(e.serial){t.next=9;break}return(0,h.LJ)("序列号必填！"),t.abrupt("return");case 9:if(e.part){t.next=12;break}return(0,h.LJ)("零件必填！"),t.abrupt("return");case 12:if(e.receiptNo.trim()){t.next=15;break}return(0,h.LJ)("批号必填！"),t.abrupt("return");case 15:if(Number(e.taskQty)){t.next=18;break}return(0,h.LJ)("任务数量必填！"),t.abrupt("return");case 18:return r={taskType:"IPQC",tmBasNodeLevelId:e.factoryID,tmBasPartId:e.part,lotNo:e.receiptNo,packageNo:e.receiptline,processType:e.process,isUrgent:e.switchUrgency?"1":"0",shiftno:e.classes,taskQty:Number(e.taskQty),ttPpOrderId:e.supplier,ttPpOrderSnId:e.serial},t.next=21,(0,d.i)({url:"/iiot/qmTask",method:"post",payload:r});case 21:n=t.sent,a=n.code,i=n.data,void 0===i?{}:i,200==a&&((0,h.XA)("提交成功！"),e.$router.push({path:"/process/index",query:{tabs:"1"}}));case 26:case"end":return t.stop()}}),t)})))()},showDrawer:function(){this.drawer=!0}},props:{}},w=r(40089);const g=(0,w.Z)(v,[["render",u]]);var y=g}}]);
//# sourceMappingURL=chunk.5130.1689577168802.js.map