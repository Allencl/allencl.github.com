"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[7743],{45935:function(e,l,t){t.r(l),t.d(l,{default:function(){return b}});t(68309),t(9653),t(82526),t(41817);var n=t(73396),r=(0,n._)("span",{class:"pl-1"},"用户名",-1),u=(0,n._)("span",{class:"pl-1"},"数字",-1),a=(0,n._)("span",{class:"pl-1"},"城市单选",-1),o=(0,n._)("span",{class:"pl-1"},"城市多选",-1),i=(0,n._)("span",{class:"pl-1"},"描述",-1),s={class:"d-flex flex-column"};function c(e,l,t,c,m,f){var d=(0,n.up)("AppBarPage"),p=(0,n.up)("v-icon"),v=(0,n.up)("v-text-field"),V=(0,n.up)("v-select"),b=(0,n.up)("v-textarea"),k=(0,n.up)("v-checkbox"),_=(0,n.up)("v-btn"),h=(0,n.up)("v-form"),w=(0,n.up)("v-sheet");return(0,n.wg)(),(0,n.iD)("span",null,[(0,n.Wm)(d),(0,n.Wm)(w,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(h,{ref:"form"},{default:(0,n.w5)((function(){return[(0,n.Wm)(v,{modelValue:e.formValue.name,"onUpdate:modelValue":l[0]||(l[0]=function(l){return e.formValue.name=l}),counter:50,variant:"solo",density:"compact",clearable:"",rules:[function(e){return!!e||"用户名必填！"},function(e){return e&&e.length<=50||"用户名不能超过50个字符！"}],required:"",autocomplete:"off"},{label:(0,n.w5)((function(){return[(0,n._)("span",null,[(0,n.Wm)(p,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),r])]})),_:1},8,["modelValue","rules"]),(0,n.Wm)(v,{modelValue:e.formValue.number,"onUpdate:modelValue":l[1]||(l[1]=function(l){return e.formValue.number=l}),variant:"solo",density:"compact",clearable:"",rules:[function(e){return!!e||"数字必填！"},function(e){return Number(e)>=0||"数字必须大于等于0！"}],type:"number",required:"",autocomplete:"off",onBlur:f.numberBlur},{label:(0,n.w5)((function(){return[(0,n._)("span",null,[(0,n.Wm)(p,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),u])]})),_:1},8,["modelValue","rules","onBlur"]),(0,n.Wm)(V,{modelValue:e.formValue.select,"onUpdate:modelValue":l[2]||(l[2]=function(l){return e.formValue.select=l}),items:e.items,"item-title":"title","item-value":"value",rules:[function(e){return!!e||"城市必选！"}],variant:"solo",density:"compact",clearable:"",required:""},{label:(0,n.w5)((function(){return[(0,n._)("span",null,[(0,n.Wm)(p,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),a])]})),_:1},8,["modelValue","items","rules"]),(0,n.Wm)(V,{modelValue:e.formValue.selectMultiple,"onUpdate:modelValue":l[3]||(l[3]=function(l){return e.formValue.selectMultiple=l}),items:e.items,"item-title":"title","item-value":"value",rules:[function(e){return!!e.length||"城市必选！"}],variant:"solo",density:"compact",chips:"",multiple:"",clearable:"",required:""},{label:(0,n.w5)((function(){return[(0,n._)("span",null,[(0,n.Wm)(p,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),o])]})),_:1},8,["modelValue","items","rules"]),(0,n.Wm)(b,{modelValue:e.formValue.description,"onUpdate:modelValue":l[4]||(l[4]=function(l){return e.formValue.description=l}),counter:500,rows:"3",variant:"solo",density:"compact",clearable:"",rules:[function(e){return!!e||"描述必填！"},function(e){return e&&e.length<=500||"描述不能超过500个字符！"}],required:""},{label:(0,n.w5)((function(){return[(0,n._)("span",null,[(0,n.Wm)(p,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),i])]})),_:1},8,["modelValue","rules"]),(0,n.Wm)(k,{modelValue:e.formValue.checkbox,"onUpdate:modelValue":l[5]||(l[5]=function(l){return e.formValue.checkbox=l}),rules:[function(e){return!!e||"同意吗？!"}],label:"同意？",color:"primary",density:"compact",required:""},null,8,["modelValue","rules"]),(0,n._)("div",s,[(0,n.Wm)(_,{color:"success",class:"mt-4",block:"",onClick:f.validate},{default:(0,n.w5)((function(){return[(0,n.Uk)(" Validate ")]})),_:1},8,["onClick"]),(0,n.Wm)(_,{color:"error",class:"mt-4",block:"",onClick:f.reset},{default:(0,n.w5)((function(){return[(0,n.Uk)(" Reset Form ")]})),_:1},8,["onClick"]),(0,n.Wm)(_,{color:"warning",class:"mt-4",block:"",onClick:f.resetValidation},{default:(0,n.w5)((function(){return[(0,n.Uk)(" Reset Validation ")]})),_:1},8,["onClick"])])]})),_:1},512)]})),_:1})])}var m=t(50124),f=t(48534),d=t(76496),p={components:{AppBarPage:d.Z},data:function(){return{formValue:{name:"",number:0,select:"2",selectMultiple:["1","5"],description:"",checkbox:!1},items:[{title:"悉尼",value:"1"},{title:"米兰",value:"2"},{title:"南非",value:"3"},{title:"巴西",value:"4"},{title:"古巴",value:"5"},{title:"亚斯南大",value:"6"},{title:"汉堡",value:"7"},{title:"底特律",value:"8"},{title:"刚果",value:"9"},{title:"新加坡",value:"10"},{title:"曼德拉西",value:"11"}]}},methods:{numberBlur:function(){this.formValue.number=String(Number(this.formValue.number))},validate:function(){var e=this;return(0,f.Z)((0,m.Z)().mark((function l(){var t,n;return(0,m.Z)().wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.next=2,e.$refs.form.validate();case 2:if(t=l.sent,n=t.valid,console.log(e.formValue),n){l.next=8;break}return alert("表单不完整！"),l.abrupt("return");case 8:case"end":return l.stop()}}),l)})))()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},v=t(40089);const V=(0,v.Z)(p,[["render",c]]);var b=V}}]);
//# sourceMappingURL=chunk.7743.1689576359115.js.map