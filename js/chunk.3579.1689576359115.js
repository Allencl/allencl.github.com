"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[3579],{89337:function(e,t,n){n.d(t,{$w:function(){return f},AT:function(){return i},NM:function(){return c},ew:function(){return s},jt:function(){return o},vU:function(){return l}});var r=n(50124),u=n(48534),a=n(37184),o=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(){var t,n=arguments;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,(0,a.i)({url:"/iiot/nodeLevel/list",method:"get",url_params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.i)({url:"/iiot/faultType/list?enabled=1",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.i)({url:"/iiot/fault/list?enabled=1",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.i)({url:"/system/dict/data/type/equipment_repair_type",method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.i)({url:"/iiot/equipmentRepair/userList?enabled=1",method:"post"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.i)({url:"/iiot/equipmentRepair/confirmRepairWbForApp",method:"post",payload:t.payload});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},57265:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(73396),u={style:{padding:"0px 12px 0px 12px"}},a={key:0,class:"font-weight-medium text",style:{"margin-bottom":"8px"}},o={key:1,style:{"margin-bottom":"8px"},class:"font-weight-medium text"},i={class:"custem-iamge-upload"},l=["src"];function s(e,t,n,s,c,f){var m=(0,r.up)("van-uploader"),d=(0,r.up)("v-icon");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r._)("div",u,[n.preview?((0,r.wg)(),(0,r.iD)("p",a,"图片预览 ")):((0,r.wg)(),(0,r.iD)("p",o," 图片上传 ")),n.preview?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(m,{key:2,"after-read":f.afterRead,"preview-image":!1},null,8,["after-read"])),(0,r._)("div",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.bufferFileList,(function(u,a){return(0,r.wg)(),(0,r.iD)("li",{key:a,onClick:t[0]||(t[0]=function(t){return f.checkImage(e.bufferFileList)})},[(0,r._)("img",{src:u.url},null,8,l),n.preview?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(d,{key:0,onClick:function(e){return f.removeClick(u,e)},class:"icon",icon:"mdi-close-circle-outline",color:"red"},null,8,["onClick"]))])})),128))])])])}var c=n(50124),f=n(48534),m=(n(21249),n(26699),n(32023),n(92222),n(38862),n(57327),n(41539),n(37184)),d=n(20868),p=n(9801),w={components:{},emits:["update:modelValue","onChange"],data:function(){return{bufferFileList:[]}},watch:{modelValue:{handler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.bufferFileList=e},deep:!0,immediate:!0},initPath:{handler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e&&(this.bufferFileList=e.split(",").map((function(e){return Object.assign({url:e})})))},deep:!0,immediate:!0}},methods:{checkImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.length&&(0,p.V)(e.map((function(e){return e.url})))},afterRead:function(e){var t=this;return(0,f.Z)((0,c.Z)().mark((function n(){var r,u,a,o,i;return(0,c.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.file.type.includes("image")){n.next=3;break}return(0,d.LJ)("只能选择图片！"),n.abrupt("return");case 3:if(!(e.file.size>=19922944)){n.next=6;break}return(0,d.LJ)("图片超过20M！"),n.abrupt("return");case 6:if(!(t.bufferFileList.length>2)){n.next=9;break}return(0,d.LJ)("最多只能选择3张图片！"),n.abrupt("return");case 9:return r=new FormData,r.append("file",e.file),n.next=13,(0,m.i)({url:"/file/upload",method:"post",formData:!0,payload:r});case 13:u=n.sent,a=u.code,o=u.data,i=void 0===o?{}:o,200==a?(t.bufferFileList=t.bufferFileList.concat([i]),(0,d.XA)("图片上传成功！"),t.$emit("update:modelValue",JSON.parse(JSON.stringify(t.bufferFileList)))):(0,d.LJ)("图片上传失败！");case 18:case"end":return n.stop()}}),n)})))()},removeClick:function(e,t){var n=this;t.stopPropagation(),this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter((function(t){return t.url!=e.url})),this.$nextTick((function(){n.$emit("update:modelValue",JSON.parse(JSON.stringify(n.bufferFileList)))}))}},props:{modelValue:{type:Array,default:function(){return[]}},initPath:{type:String,default:function(){return""}},preview:{type:Boolean,default:function(){return!1}}}},h=n(40089);const g=(0,h.Z)(w,[["render",s]]);var _=g},23579:function(e,t,n){n.r(t),n.d(t,{default:function(){return we}});var r=n(73396),u=n(87139),a=(0,r._)("span",{class:"font-weight-medium"},"异常发起信息流水",-1),o={class:"font-weight-medium text-truncate text-center text-teal-lighten-1",color:"primary"},i=(0,r._)("p",{class:"font-weight-medium text"},"异常类型属性:",-1),l={class:"text-truncate font-weight-light"},s=(0,r._)("p",{class:"font-weight-medium text"},"紧急程度:",-1),c={class:"text-truncate font-weight-light",style:{color:"#00E5FF"}},f=(0,r._)("span",{class:"font-weight-medium text"},"异常类型:",-1),m={class:"font-weight-light"},d=(0,r._)("span",{class:"font-weight-medium text"},"异常内容:",-1),p={class:"font-weight-light"},w=(0,r._)("span",{class:"font-weight-medium text"},"异常描述:",-1),h={class:"font-weight-light"},g=(0,r._)("p",{class:"font-weight-medium text"},"产品序列号:",-1),_={class:"text-truncate font-weight-light"},x=(0,r._)("p",{class:"font-weight-medium text"},"产品名称:",-1),b={class:"text-truncate font-weight-light"},v=(0,r._)("p",{class:"font-weight-medium text"},"异常地点:",-1),W={class:"text-truncate font-weight-light"},y=(0,r._)("p",{class:"font-weight-medium text"},"设备型号:",-1),k={class:"text-truncate font-weight-light"},Z=(0,r._)("p",{class:"font-weight-medium text"},"发起人:",-1),R={class:"text-truncate font-weight-light"},S=(0,r._)("p",{class:"font-weight-medium text"},"发起时间:",-1),L={class:"text-truncate font-weight-light"},V=(0,r._)("p",{class:"font-weight-medium text"},"发起联系方式:",-1),C={class:"text-truncate font-weight-light"},F=(0,r._)("div",{style:{height:"6px"}},null,-1),O=(0,r._)("span",{class:"font-weight-medium"},"异常转发信息",-1),z={class:"font-weight-light text"},P=(0,r._)("span",{class:"font-weight-medium"},"转发说明:",-1),T={style:{color:"#00E5FF"}},N=(0,r._)("p",{class:"font-weight-medium text"},"转发到:",-1),q={class:"text-truncate font-weight-light"},j=(0,r._)("p",{class:"font-weight-medium text"},"转发时间:",-1),I={class:"text-truncate font-weight-light"},A=(0,r._)("div",{style:{height:"6px"}},null,-1),D=(0,r._)("span",{class:"font-weight-medium"},"异常指派信息",-1),J={class:"font-weight-light text"},U=(0,r._)("span",{class:"font-weight-medium"},"指派说明:",-1),B={style:{color:"#00E5FF"}},$=(0,r._)("p",{class:"font-weight-medium text"},"指派到:",-1),H={class:"text-truncate font-weight-light"},M=(0,r._)("p",{class:"font-weight-medium text"},"指派时间:",-1),E={class:"text-truncate font-weight-light"},K=(0,r._)("div",{style:{height:"6px"}},null,-1),X=(0,r._)("span",{class:"font-weight-medium"},"异常处理信息",-1),Y=(0,r._)("p",{style:{"margin-top":"9px"}},"分钟",-1),Q=(0,r._)("div",{style:{height:"6px"}},null,-1),G=(0,r._)("div",{style:{height:"36px"}},null,-1),ee=(0,r._)("p",{style:{"font-size":"18px",padding:"8px 0px 8px 6px"}},"是否直接关闭异常?",-1),te=(0,r._)("div",{style:{height:"12px"}},null,-1),ne=(0,r._)("div",{style:{height:"22px"}},null,-1);function re(e,t,n,re,ue,ae){var oe=(0,r.up)("AppBarPage"),ie=(0,r.up)("v-icon"),le=(0,r.up)("v-col"),se=(0,r.up)("v-row"),ce=(0,r.up)("UploaderImageComponents"),fe=(0,r.up)("v-sheet"),me=(0,r.up)("SelectComponents"),de=(0,r.up)("van-field"),pe=(0,r.up)("v-btn"),we=(0,r.up)("van-popup");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r.Wm)(oe),(0,r.Wm)(fe,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,r.w5)((function(){return[(0,r.Wm)(se,{"no-gutters":"",class:"custem-card-title"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"7"},{default:(0,r.w5)((function(){return[(0,r.Wm)(ie,{icon:"mdi-rocket-launch",size:"16",color:"primary"}),a]})),_:1}),(0,r.Wm)(le,{cols:"5"},{default:(0,r.w5)((function(){return[(0,r._)("p",o,(0,u.zw)(e.bufferRow.abnormalNo),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"5"},{default:(0,r.w5)((function(){return[i]})),_:1}),(0,r.Wm)(le,{cols:"7"},{default:(0,r.w5)((function(){return[(0,r._)("p",l,(0,u.zw)(e.bufferRow.abnormalTypeName),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[s]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",c,(0,u.zw)(e.bufferRow.urgentDegreeName),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"12"},{default:(0,r.w5)((function(){return[f,(0,r._)("span",m,(0,u.zw)(e.bufferRow.abnormalName),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"12"},{default:(0,r.w5)((function(){return[d,(0,r._)("span",p,(0,u.zw)(e.bufferRow.contentName),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"12"},{default:(0,r.w5)((function(){return[w,(0,r._)("span",h,(0,u.zw)(e.bufferRow.abnormalDesc),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[g]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",_,(0,u.zw)(e.bufferRow.ttPpOrderSnId),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[x]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",b,(0,u.zw)(e.bufferRow.partName),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[v]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",W,(0,u.zw)(e.bufferRow.abnormalPlace),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[y]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",k,(0,u.zw)((e.bufferRow.equipmentNo||"")+"-"+(e.bufferRow.equipmentName||"")),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[Z]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",R,(0,u.zw)(e.bufferRow.initiateBy),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[S]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",L,(0,u.zw)(e.bufferRow.initiateTime),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"5"},{default:(0,r.w5)((function(){return[V]})),_:1}),(0,r.Wm)(le,{cols:"7"},{default:(0,r.w5)((function(){return[(0,r._)("p",C,(0,u.zw)(e.bufferRow.initiatePhone),1)]})),_:1})]})),_:1}),(0,r.Wm)(ce,{modelValue:e.bufferFileListPreview,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.bufferFileListPreview=t}),preview:""},null,8,["modelValue"])]})),_:1}),F,(0,r.Wm)(fe,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,r.w5)((function(){return[(0,r.Wm)(se,{"no-gutters":"",class:"custem-card-title"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"6"},{default:(0,r.w5)((function(){return[(0,r.Wm)(ie,{icon:"mdi-share",size:"16",color:"indigo"}),O]})),_:1}),(0,r.Wm)(le,{cols:"6"})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r._)("p",z,[P,(0,r._)("span",T,(0,u.zw)(e.bufferRow.retransmissionDesc),1)])]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[N]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",q,(0,u.zw)(e.bufferRow.retransmissionBy),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[j]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",I,(0,u.zw)(e.bufferRow.retransmissionTime),1)]})),_:1})]})),_:1})]})),_:1}),A,(0,r.Wm)(fe,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,r.w5)((function(){return[(0,r.Wm)(se,{"no-gutters":"",class:"custem-card-title"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"6"},{default:(0,r.w5)((function(){return[(0,r.Wm)(ie,{icon:"mdi-send",size:"16",color:"warning"}),D]})),_:1}),(0,r.Wm)(le,{cols:"6"})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"12"},{default:(0,r.w5)((function(){return[(0,r._)("p",J,[U,(0,r._)("span",B,(0,u.zw)(e.bufferRow.appointDesc),1)])]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[$]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",H,(0,u.zw)(e.bufferRow.appointBy),1)]})),_:1})]})),_:1}),(0,r.Wm)(se,{"no-gutters":"",class:"text"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[M]})),_:1}),(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r._)("p",E,(0,u.zw)(e.bufferRow.appointTime),1)]})),_:1})]})),_:1})]})),_:1}),K,(0,r.Wm)(fe,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,r.w5)((function(){return[(0,r.Wm)(se,{"no-gutters":"",class:"custem-card-title"},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"6"},{default:(0,r.w5)((function(){return[(0,r.Wm)(ie,{icon:"mdi-alert-circle",size:"16",color:"error"}),X]})),_:1}),(0,r.Wm)(le,{cols:"6"})]})),_:1}),(0,r.Wm)(me,{modelValue:e.reason,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.reason=t}),label:"异常原因",required:"",showSearch:"",option:e.reasonSelectOption,onOnChange:ae.reasonSelectChange,onOnSearchChange:ae.reasonSelectSearchChange},null,8,["modelValue","option","onOnChange","onOnSearchChange"]),(0,r.Wm)(me,{modelValue:e.measures,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.measures=t}),ref:"select33",showSearch:"",label:"处理措施",required:"",option:e.measuresSelectOption,onOnSearchChange:ae.measuresSelectSearchChange},null,8,["modelValue","option","onOnSearchChange"]),(0,r.Wm)(de,{modelValue:e.remark,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.remark=t}),placeholder:"请输入",autocomplete:"off",label:"处理描述",required:""},null,8,["modelValue"]),(0,r.Wm)(se,{"no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"8"},{default:(0,r.w5)((function(){return[(0,r.Wm)(de,{modelValue:e.time,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.time=t}),placeholder:"请输入",autocomplete:"off",label:"影响时长",type:"number",required:""},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(le,{cols:"4"},{default:(0,r.w5)((function(){return[Y]})),_:1})]})),_:1}),(0,r.Wm)(ce,{modelValue:e.bufferFileList,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.bufferFileList=t})},null,8,["modelValue"])]})),_:1}),(0,r.Wm)(fe,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,r.w5)((function(){return[(0,r.Wm)(de,{modelValue:e.rejectReason,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.rejectReason=t}),placeholder:"请输入",label:"退回原因",autocomplete:"off",required:""},null,8,["modelValue"])]})),_:1}),Q,(0,r.Wm)(se,{"no-gutters":""},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"6",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(pe,{onClick:ae.rejectHandle,color:"error"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 退回 ")]})),_:1},8,["onClick"])]})),_:1}),(0,r.Wm)(le,{cols:"6",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(pe,{onClick:ae.forwardHandle,color:"primary"},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 确认处理 ")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),G,(0,r.Wm)(we,{show:e.showPicker,"onUpdate:show":t[11]||(t[11]=function(t){return e.showPicker=t}),style:{padding:"12px 12px 4px 12px",width:"80%"},round:"",closeable:""},{default:(0,r.w5)((function(){return[(0,r._)("div",null,[ee,(0,r.Wm)(de,{modelValue:e.value111,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.value111=t}),required:"",readonly:"",placeholder:"请输入",autocomplete:"off",label:"影响时长:"},null,8,["modelValue"]),(0,r.Wm)(de,{modelValue:e.value222,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.value222=t}),type:"number",required:"",placeholder:"请输入",autocomplete:"off",label:"影响台套:"},null,8,["modelValue"]),te,(0,r.Wm)(se,{"no-gutters":"",style:{padding:"0px 6px"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(le,{cols:"5",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(pe,{onClick:t[9]||(t[9]=function(e){return ae.close2(1)})},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 取消 ")]})),_:1})]})),_:1}),(0,r.Wm)(le,{cols:"2",class:"text-center"}),(0,r.Wm)(le,{cols:"5",class:"text-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(pe,{color:"primary",onClick:t[10]||(t[10]=function(e){return ae.close2(2)})},{default:(0,r.w5)((function(){return[(0,r.Uk)(" 确认 ")]})),_:1})]})),_:1})]})),_:1}),ne])]})),_:1},8,["show"])])}var ue=n(95082),ae=n(50124),oe=n(48534),ie=(n(57327),n(41539),n(21249),n(73210),n(9653),n(69600),n(57658),n(76496)),le=n(37184),se=(n(89337),n(57265)),ce=n(2243),fe=n(20868),me=(n(36797),{components:{AppBarPage:ie.Z,UploaderImageComponents:se.Z,SelectComponents:ce.Z},data:function(){return{showPicker:!1,value111:"",value222:"1",closeObject:{},bufferRow:{},fileList:[],bufferFileListPreview:[],bufferFileList:[],reason:"",reasonSelectOption:[],measures:"",measuresSelectOption:[],remark:"",time:"",rejectReason:""}},created:function(){this.initFunc()},methods:{FormatDictionary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),r=n[e]||[],u=r.filter((function(e){return t==e.value}))[0]||{};return u},initFunc:function(){var e=this;return(0,oe.Z)((0,ae.Z)().mark((function t(){var n,r,u,a,o;return(0,ae.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.query.ttQmAbnormalId,t.next=3,(0,le.i)({url:"/iiot/abnormal",method:"get",url_RESTful:"/".concat(n)});case 3:r=t.sent,u=r.code,a=r.data,o=void 0===a?{}:a,200==u&&(e.bufferRow=o,e.time=o.manageDuration||"0",o.initiatePath&&(e.bufferFileListPreview=o.initiatePath.split(",").map((function(e){return Object.assign({url:e})}))),e.$nextTick((function(){e.reasonHTTP(),e.measuresHTTP()})));case 8:case"end":return t.stop()}}),t)})))()},reasonHTTP:function(){var e=arguments,t=this;return(0,oe.Z)((0,ae.Z)().mark((function n(){var r,u,a,o,i,l;return(0,ae.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"",u=t.bufferRow,n.next=4,(0,le.i)({url:"/iiot/abnormalReason/listAbnormalReasonForSelect",method:"get",url_params:{reasonKey:r,tmBasAbnormalTypeId:u.tmBasAbnormalTypeId}});case 4:a=n.sent,o=a.code,i=a.data,l=void 0===i?[]:i,200==o&&(t.reasonSelectOption=l.map((function(e){return Object.assign({text:e.reasonNo+e.reasonName,value:e.tmBasReasonId})})));case 9:case"end":return n.stop()}}),n)})))()},reasonSelectSearchChange:function(e){this.reasonHTTP(e)},reasonSelectChange:function(e){},measuresHTTP:function(){var e=arguments,t=this;return(0,oe.Z)((0,ae.Z)().mark((function n(){var r,u,a,o,i,l;return(0,ae.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"",u=t.bufferRow,n.next=4,(0,le.i)({url:"/iiot/abnormalMeasures/list",method:"get",url_params:{enabled:"1",tmBasAbnormalTypeId:u.tmBasAbnormalTypeId,measuresKey:r}});case 4:a=n.sent,o=a.code,i=a.data,l=void 0===i?[]:i,200==o&&(t.measuresSelectOption=l.map((function(e){return Object.assign({text:e.measuresNo+e.measuresName,value:e.tmBasAbnormalMeasuresId})})));case 9:case"end":return n.stop()}}),n)})))()},measuresSelectSearchChange:function(e){this.measuresHTTP(e)},forwardHandle:function(){var e=this;return(0,oe.Z)((0,ae.Z)().mark((function t(){var n,r;return(0,ae.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.bufferRow,e.$route.query.pageAction,e.reason){t.next=5;break}return(0,fe.LJ)("异常原因必填！"),t.abrupt("return");case 5:if(e.measures){t.next=8;break}return(0,fe.LJ)("处理措施必填！"),t.abrupt("return");case 8:if(e.remark.trim()){t.next=11;break}return(0,fe.LJ)("处理描述必填！"),t.abrupt("return");case 11:if(""!=e.time){t.next=14;break}return(0,fe.LJ)("影响时长必填！"),t.abrupt("return");case 14:r=(0,ue.Z)((0,ue.Z)({},n),{},{manageCause:e.reason,tmBasAbnormalMeasuresId:e.measures,manageDesc:e.remark,manageDuration:Number(e.time),managePath:e.bufferFileList.map((function(e){return e.url})).join()}),e.value111=e.time,e.showPicker=!0,e.closeObject=r;case 18:case"end":return t.stop()}}),t)})))()},close2:function(e){var t=this;return(0,oe.Z)((0,ae.Z)().mark((function n(){var r,u,a,o,i;return(0,ae.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.bufferRow,r=t.$route.query.pageAction,u=(0,ue.Z)({},t.closeObject),2!=e){n.next=9;break}if(u.isClose="Y",u.close_sets=Number(t.value222),!(Number(t.value222)<1)){n.next=9;break}return(0,fe.LJ)("影响台套必须大于等于1！"),n.abrupt("return");case 9:return n.next=11,(0,le.i)({url:"/iiot/abnormal/manage",method:"post",payload:u});case 11:a=n.sent,o=a.code,i=a.data,void 0===i?{}:i,200==o&&((0,fe.XA)("提交成功！"),2==r?t.$router.push({path:"/anomalyInitiate/index/disposeIndex",query:{}}):t.$router.push({path:"/anomalyInitiate/index",query:{}}));case 16:case"end":return n.stop()}}),n)})))()},rejectHandle:function(){var e=this;return(0,oe.Z)((0,ae.Z)().mark((function t(){var n,r,u,a,o,i;return(0,ae.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.bufferRow,r=e.$route.query.pageAction,e.rejectReason.trim()){t.next=5;break}return(0,fe.LJ)("驳回原因必填！"),t.abrupt("return");case 5:return u=(0,ue.Z)((0,ue.Z)({},n),{},{rejectReason:e.rejectReason}),t.next=8,(0,le.i)({url:"/iiot/abnormal/reject",method:"post",payload:u});case 8:a=t.sent,o=a.code,i=a.data,void 0===i?{}:i,200==o&&((0,fe.XA)("提交成功！"),2==r?e.$router.push({path:"/anomalyInitiate/index/disposeIndex",query:{}}):e.$router.push({path:"/anomalyInitiate/index",query:{}}));case 13:case"end":return t.stop()}}),t)})))()}}}),de=n(40089);const pe=(0,de.Z)(me,[["render",re]]);var we=pe}}]);
//# sourceMappingURL=chunk.3579.1689576359115.js.map