"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[6593],{57265:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(73396),a={style:{padding:"0px 12px 0px 12px"}},i={key:0,class:"font-weight-medium text",style:{"margin-bottom":"8px"}},u={key:1,style:{"margin-bottom":"8px"},class:"font-weight-medium text"},s={class:"custem-iamge-upload"},o=["src"];function l(e,t,n,l,c,d){var f=(0,r.up)("van-uploader"),m=(0,r.up)("v-icon");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r._)("div",a,[n.preview?((0,r.wg)(),(0,r.iD)("p",i,"图片预览 ")):((0,r.wg)(),(0,r.iD)("p",u," 图片上传 ")),n.preview?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(f,{key:2,"after-read":d.afterRead,"preview-image":!1},null,8,["after-read"])),(0,r._)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.bufferFileList,(function(a,i){return(0,r.wg)(),(0,r.iD)("li",{key:i,onClick:t[0]||(t[0]=function(t){return d.checkImage(e.bufferFileList)})},[(0,r._)("img",{src:a.url},null,8,o),n.preview?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(m,{key:0,onClick:function(e){return d.removeClick(a,e)},class:"icon",icon:"mdi-close-circle-outline",color:"red"},null,8,["onClick"]))])})),128))])])])}var c=n(50124),d=n(48534),f=(n(21249),n(26699),n(32023),n(92222),n(38862),n(57327),n(41539),n(37184)),m=n(20868),p=n(9801),v={components:{},emits:["update:modelValue","onChange"],data:function(){return{bufferFileList:[]}},watch:{modelValue:{handler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.bufferFileList=e},deep:!0,immediate:!0},initPath:{handler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e&&(this.bufferFileList=e.split(",").map((function(e){return Object.assign({url:e})})))},deep:!0,immediate:!0}},methods:{checkImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.length&&(0,p.V)(e.map((function(e){return e.url})))},afterRead:function(e){var t=this;return(0,d.Z)((0,c.Z)().mark((function n(){var r,a,i,u,s;return(0,c.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.file.type.includes("image")){n.next=3;break}return(0,m.LJ)("只能选择图片！"),n.abrupt("return");case 3:if(!(e.file.size>=19922944)){n.next=6;break}return(0,m.LJ)("图片超过20M！"),n.abrupt("return");case 6:if(!(t.bufferFileList.length>2)){n.next=9;break}return(0,m.LJ)("最多只能选择3张图片！"),n.abrupt("return");case 9:return r=new FormData,r.append("file",e.file),n.next=13,(0,f.i)({url:"/file/upload",method:"post",formData:!0,payload:r});case 13:a=n.sent,i=a.code,u=a.data,s=void 0===u?{}:u,200==i?(t.bufferFileList=t.bufferFileList.concat([s]),(0,m.XA)("图片上传成功！"),t.$emit("update:modelValue",JSON.parse(JSON.stringify(t.bufferFileList)))):(0,m.LJ)("图片上传失败！");case 18:case"end":return n.stop()}}),n)})))()},removeClick:function(e,t){var n=this;t.stopPropagation(),this.bufferFileList=JSON.parse(JSON.stringify(this.bufferFileList)).filter((function(t){return t.url!=e.url})),this.$nextTick((function(){n.$emit("update:modelValue",JSON.parse(JSON.stringify(n.bufferFileList)))}))}},props:{modelValue:{type:Array,default:function(){return[]}},initPath:{type:String,default:function(){return""}},preview:{type:Boolean,default:function(){return!1}}}},h=n(40089);const g=(0,h.Z)(v,[["render",l]]);var w=g},25946:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(73396),a=n(87139),i=(0,r._)("span",{class:"font-weight-medium"},"例外转序信息",-1),u={style:{"margin-top":"12px",padding:"0px 8px"}},s={style:"color:#4CAF50"},o=(0,r._)("div",{style:{height:"56px"}},null,-1);function l(e,t,n,l,c,d){var f=(0,r.up)("AppBarPage"),m=(0,r.up)("v-icon"),p=(0,r.up)("v-col"),v=(0,r.up)("v-row"),h=(0,r.up)("ScanBarComponents"),g=(0,r.up)("SelectComponents"),w=(0,r.up)("van-field"),b=(0,r.up)("UploaderImageComponents"),S=(0,r.up)("v-btn"),k=(0,r.up)("v-sheet");return(0,r.wg)(),(0,r.iD)("span",null,[(0,r.Wm)(f),(0,r.Wm)(k,{elevation:"2",rounded:"",class:"custem-card"},{default:(0,r.w5)((function(){return[(0,r.Wm)(v,{"no-gutters":"",class:"custem-card-title"},{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{cols:"7"},{default:(0,r.w5)((function(){return[(0,r.Wm)(m,{icon:"mdi-rocket-launch",size:"16",color:"primary"}),i]})),_:1}),(0,r.Wm)(p,{cols:"5",class:"text-right"},{default:(0,r.w5)((function(){return[(0,r._)("span",{style:(0,a.j5)("color:".concat(e.isEdit?"#00E5FF":"#4CAF50"))},(0,a.zw)(e.isEdit?"变更":"发起"),5)]})),_:1})]})),_:1}),(0,r._)("div",u,[(0,r.Wm)(h,{ref:"ScanBar",placeholder:"请扫描或输入 整机序列号",onSearchClick:d.barSearchClick},null,8,["onSearchClick"]),(0,r._)("p",s,(0,a.zw)(e.ttPpOrderSnId),1)]),(0,r.Wm)(g,{modelValue:e.measures,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.measures=t}),ref:"select11",label:"发起工位",required:"",option:e.measuresSelectOption,onOnSearchChange:d.measuresSelectSearchChange,onOnChange:d.measuresSelectChange},null,8,["modelValue","option","onOnSearchChange","onOnChange"]),(0,r.Wm)(g,{modelValue:e.measures22,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.measures22=t}),ref:"select22",label:"拦截工位",option:e.measuresSelectOption22,onOnSearchChange:d.measuresSelectSearchChange22},null,8,["modelValue","option","onOnSearchChange"]),(0,r.Wm)(w,{modelValue:e.value1,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.value1=t}),type:"textarea",required:"",autocomplete:"off",placeholder:"请输入",label:"例外转序原因"},null,8,["modelValue"]),(0,r.Wm)(b,{modelValue:e.bufferFileList,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.bufferFileList=t})},null,8,["modelValue"]),(0,r.Wm)(w,{modelValue:e.value2,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.value2=t}),type:"textarea",autocomplete:"off",placeholder:"请输入",label:"备注"},null,8,["modelValue"]),(0,r.Wm)(v,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{cols:"12",class:"text-left"},{default:(0,r.w5)((function(){return[(0,r.Wm)(S,{onClick:d.submit,block:"",color:"warning"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.isEdit?"变更":"发起"),1)]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),o])}var c=n(95082),d=n(50124),f=n(48534),m=(n(57327),n(41539),n(21249),n(73210),n(69600),n(76496)),p=n(37184),v=n(2243),h=n(73378),g=n(57265),w=n(20868),b={components:{AppBarPage:m.Z,ScanBarComponents:h.Z,SelectComponents:v.Z,UploaderImageComponents:g.Z},data:function(){return{showName:!1,bufferRow:{},isEdit:!1,ttPpOrderSnId:"",bufferFileList:[],value1:"",value2:"",measures:"",measuresSelectOption:[],measures22:"",measuresSelectOption22:[]}},watch:{},created:function(){this.initFunc()},methods:{FormatDictionary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),r=n[e]||[],a=r.filter((function(e){return t==e.value}))[0]||{};return a},initFunc:function(){var e=this;return(0,f.Z)((0,d.Z)().mark((function t(){var n,r,a,i,u,s,o,l;return(0,d.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$route.query,r=n.ttQmAbnormalConversionId,a=n.ttPpOrderSnId,i=n.sn,e.isEdit=!!r,a&&(e.ttPpOrderSnId=a,e.$nextTick((function(){e.$refs.ScanBar&&e.$refs.ScanBar.setInputText(i)}))),!r&&a&&e.$nextTick((function(){e.measuresHTTP(),e.measuresHTTP22()})),!r){t.next=12;break}return t.next=7,(0,p.i)({url:"/iiot/abnormalConversion/".concat(r),method:"get"});case 7:u=t.sent,s=u.code,o=u.data,l=void 0===o?{}:o,200==s&&(e.bufferRow=l,e.ttPpOrderSnId=l.ttPpOrderSnId,e.$nextTick((0,f.Z)((0,d.Z)().mark((function t(){return(0,d.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.measuresHTTP();case 2:return t.next=4,e.measuresHTTP22();case 4:e.measures=l.tmBasNodeLevelId,e.measures22=l.interceptProcessId,e.$refs.select11&&e.$refs.select11.setfieldValue(l.initiateProcess),e.$refs.select22&&e.$refs.select22.setfieldValue(l.interceptProcess),setTimeout((function(){e.$refs.select11&&e.$refs.select11.setValue(l.tmBasNodeLevelId),e.$refs.select22&&e.$refs.select22.setValue(l.interceptProcessId)}),1e3);case 9:case"end":return t.stop()}}),t)})))),e.value1=l.conversionDesc,e.value2=l.remark,l.initiatePath&&(e.bufferFileList=l.initiatePath.split(",").map((function(e){return Object.assign({url:e})}))));case 12:case"end":return t.stop()}}),t)})))()},initStation:function(){return(0,f.Z)((0,d.Z)().mark((function e(){return(0,d.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},interceptDefult:function(e,t){return(0,f.Z)((0,d.Z)().mark((function e(){return(0,d.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},barSearchClick:function(){var e=arguments,t=this;return(0,f.Z)((0,d.Z)().mark((function n(){var r,a,i,u,s,o,l,c;return(0,d.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"",a=r.trim(),n.next=4,(0,p.i)({url:"/iiot/qmTask/listQmTaskSnForSelect",method:"get",url_params:{sn:a}});case 4:if(i=n.sent,u=i.code,s=i.data,o=void 0===s?[]:s,200!=u){n.next=16;break}if(o.length){n.next=12;break}return(0,w.LJ)("SN号不存在！"),n.abrupt("return");case 12:t.ttPpOrderSnId=null===(l=o[0])||void 0===l?void 0:l.ttPpOrderSnId,(0,w.XA)("扫描成功！"),t.measures&&t.interceptDefult(t.measures,null===(c=o[0])||void 0===c?void 0:c.ttPpOrderSnId),t.$nextTick((function(){t.measuresHTTP(),t.measuresHTTP22()}));case 16:case"end":return n.stop()}}),n)})))()},measuresHTTP:function(){var e=arguments,t=this;return(0,f.Z)((0,d.Z)().mark((function n(){var r,a,i,u,s;return(0,d.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.length>0&&void 0!==e[0]?e[0]:"",t.bufferRow,r=t.ttPpOrderSnId,n.next=5,(0,p.i)({url:"/iiot/qmTask/getInspectNodeLevelList",method:"get",url_params:{ttPpOrderSnId:r}});case 5:a=n.sent,i=a.code,u=a.data,s=void 0===u?[]:u,200==i&&(t.measuresSelectOption=s.map((function(e){return Object.assign({text:e.nodeLevelNo+e.nodeLevelName,value:e.tmBasNodeLevelId})})));case 10:case"end":return n.stop()}}),n)})))()},measuresHTTP22:function(){var e=arguments,t=this;return(0,f.Z)((0,d.Z)().mark((function n(){var r,a,i,u,s;return(0,d.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.length>0&&void 0!==e[0]?e[0]:"",t.bufferRow,r=t.ttPpOrderSnId,n.next=5,(0,p.i)({url:"/iiot/qmTask/getInspectNodeLevelList",method:"get",url_params:{ttPpOrderSnId:r}});case 5:a=n.sent,i=a.code,u=a.data,s=void 0===u?[]:u,200==i&&(t.measuresSelectOption22=s.map((function(e){return Object.assign({text:e.nodeLevelNo+e.nodeLevelName,value:e.tmBasNodeLevelId})})));case 10:case"end":return n.stop()}}),n)})))()},measuresSelectSearchChange:function(e){this.measuresHTTP(e)},measuresSelectChange:function(e){var t=this;this.$nextTick((function(){var e=t.measuresSelectOption22;if(e.length){var n=e[e.length-1];t.measures22=n.value,console.log(n.value),t.$refs.select22&&t.$refs.select22.setValue(n.value)}}))},measuresSelectSearchChange22:function(e){this.measuresHTTP22(e)},submit:function(){var e=this;return(0,f.Z)((0,d.Z)().mark((function t(){var n,r,a,i,u;return(0,d.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$route.query.ttQmAbnormalConversionId,e.ttPpOrderSnId){t.next=4;break}return(0,w.LJ)("整机序列号 未扫描！"),t.abrupt("return");case 4:if(e.measures){t.next=7;break}return(0,w.LJ)("发起工序必选！"),t.abrupt("return");case 7:if(e.value1.trim()){t.next=10;break}return(0,w.LJ)("例外转序原因必填！"),t.abrupt("return");case 10:return r={ttPpOrderSnId:e.ttPpOrderSnId,tmBasNodeLevelId:e.measures,interceptProcessId:e.measures22,conversionDesc:e.value1,initiatePath:e.bufferFileList.map((function(e){return e.url})).join(),remark:e.value2},t.next=13,(0,p.i)({url:"/iiot/abnormalConversion",method:n?"put":"post",payload:n?(0,c.Z)({ttQmAbnormalConversionId:n},r):r});case 13:a=t.sent,i=a.code,u=a.data,void 0===u?{}:u,200==i&&((0,w.XA)("提交成功！"),e.$router.go(-1));case 18:case"end":return t.stop()}}),t)})))()}}},S=n(40089);const k=(0,S.Z)(b,[["render",l]]);var x=k}}]);
//# sourceMappingURL=chunk.6593.1689579697743.js.map