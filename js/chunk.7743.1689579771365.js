"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[7743],{45935:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});a(41817);var t=a(73396);const o=(0,t._)("span",{class:"pl-1"},"用户名",-1),s=(0,t._)("span",{class:"pl-1"},"数字",-1),u=(0,t._)("span",{class:"pl-1"},"城市单选",-1),r=(0,t._)("span",{class:"pl-1"},"城市多选",-1),i=(0,t._)("span",{class:"pl-1"},"描述",-1),m={class:"d-flex flex-column"};function n(e,l,a,n,c,d){const p=(0,t.up)("AppBarPage"),f=(0,t.up)("v-icon"),V=(0,t.up)("v-text-field"),v=(0,t.up)("v-select"),b=(0,t.up)("v-textarea"),k=(0,t.up)("v-checkbox"),_=(0,t.up)("v-btn"),h=(0,t.up)("v-form"),C=(0,t.up)("v-sheet");return(0,t.wg)(),(0,t.iD)("span",null,[(0,t.Wm)(p),(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h,{ref:"form"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{modelValue:e.formValue.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.formValue.name=l),counter:50,variant:"solo",density:"compact",clearable:"",rules:[e=>!!e||"用户名必填！",e=>e&&e.length<=50||"用户名不能超过50个字符！"],required:"",autocomplete:"off"},{label:(0,t.w5)((()=>[(0,t._)("span",null,[(0,t.Wm)(f,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),o])])),_:1},8,["modelValue","rules"]),(0,t.Wm)(V,{modelValue:e.formValue.number,"onUpdate:modelValue":l[1]||(l[1]=l=>e.formValue.number=l),variant:"solo",density:"compact",clearable:"",rules:[e=>!!e||"数字必填！",e=>Number(e)>=0||"数字必须大于等于0！"],type:"number",required:"",autocomplete:"off",onBlur:d.numberBlur},{label:(0,t.w5)((()=>[(0,t._)("span",null,[(0,t.Wm)(f,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),s])])),_:1},8,["modelValue","rules","onBlur"]),(0,t.Wm)(v,{modelValue:e.formValue.select,"onUpdate:modelValue":l[2]||(l[2]=l=>e.formValue.select=l),items:e.items,"item-title":"title","item-value":"value",rules:[e=>!!e||"城市必选！"],variant:"solo",density:"compact",clearable:"",required:""},{label:(0,t.w5)((()=>[(0,t._)("span",null,[(0,t.Wm)(f,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),u])])),_:1},8,["modelValue","items","rules"]),(0,t.Wm)(v,{modelValue:e.formValue.selectMultiple,"onUpdate:modelValue":l[3]||(l[3]=l=>e.formValue.selectMultiple=l),items:e.items,"item-title":"title","item-value":"value",rules:[e=>!!e.length||"城市必选！"],variant:"solo",density:"compact",chips:"",multiple:"",clearable:"",required:""},{label:(0,t.w5)((()=>[(0,t._)("span",null,[(0,t.Wm)(f,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),r])])),_:1},8,["modelValue","items","rules"]),(0,t.Wm)(b,{modelValue:e.formValue.description,"onUpdate:modelValue":l[4]||(l[4]=l=>e.formValue.description=l),counter:500,rows:"3",variant:"solo",density:"compact",clearable:"",rules:[e=>!!e||"描述必填！",e=>e&&e.length<=500||"描述不能超过500个字符！"],required:""},{label:(0,t.w5)((()=>[(0,t._)("span",null,[(0,t.Wm)(f,{icon:"mdi-asterisk",color:"#B71C1C",size:"x-small"}),i])])),_:1},8,["modelValue","rules"]),(0,t.Wm)(k,{modelValue:e.formValue.checkbox,"onUpdate:modelValue":l[5]||(l[5]=l=>e.formValue.checkbox=l),rules:[e=>!!e||"同意吗？!"],label:"同意？",color:"primary",density:"compact",required:""},null,8,["modelValue","rules"]),(0,t._)("div",m,[(0,t.Wm)(_,{color:"success",class:"mt-4",block:"",onClick:d.validate},{default:(0,t.w5)((()=>[(0,t.Uk)(" Validate ")])),_:1},8,["onClick"]),(0,t.Wm)(_,{color:"error",class:"mt-4",block:"",onClick:d.reset},{default:(0,t.w5)((()=>[(0,t.Uk)(" Reset Form ")])),_:1},8,["onClick"]),(0,t.Wm)(_,{color:"warning",class:"mt-4",block:"",onClick:d.resetValidation},{default:(0,t.w5)((()=>[(0,t.Uk)(" Reset Validation ")])),_:1},8,["onClick"])])])),_:1},512)])),_:1})])}var c=a(76496),d={components:{AppBarPage:c.Z},data:()=>({formValue:{name:"",number:0,select:"2",selectMultiple:["1","5"],description:"",checkbox:!1},items:[{title:"悉尼",value:"1"},{title:"米兰",value:"2"},{title:"南非",value:"3"},{title:"巴西",value:"4"},{title:"古巴",value:"5"},{title:"亚斯南大",value:"6"},{title:"汉堡",value:"7"},{title:"底特律",value:"8"},{title:"刚果",value:"9"},{title:"新加坡",value:"10"},{title:"曼德拉西",value:"11"}]}),methods:{numberBlur(){this.formValue.number=String(Number(this.formValue.number))},async validate(){const{valid:e}=await this.$refs.form.validate();console.log(this.formValue),e||alert("表单不完整！")},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()}}},p=a(40089);const f=(0,p.Z)(d,[["render",n]]);var V=f}}]);
//# sourceMappingURL=chunk.7743.1689579771365.js.map