"use strict";(self["webpackChunksinoboom_mom"]=self["webpackChunksinoboom_mom"]||[]).push([[8454],{88454:function(t,e,a){a.r(e),a.d(e,{default:function(){return q}});var l=a(21801),o=a(73396),s=a(87139);const n={class:"v-window-item-table"},i=(0,o._)("span",{class:"font-weight-medium"},"异常流水",-1),r={class:"font-weight-medium text-right text-teal-lighten-1",color:"primary"},c={class:"font-weight-medium text-left text-teal-lighten-1",color:"primary"},m={class:"font-weight-light"},u=(0,o._)("span",{class:"font-weight-medium text"},"异常类型:",-1),d=(0,o._)("p",{class:"font-weight-medium text"},"异常类型属性:",-1),p={class:"text-truncate font-weight-light"},h=(0,o._)("p",{class:"font-weight-medium text"},"紧急程度:",-1),f={class:"text-truncate font-weight-light",style:{color:"#00E5FF"}},w=(0,o._)("p",{class:"font-weight-medium text"},"是否停线:",-1),g={class:"text-truncate font-weight-light"},_=(0,o._)("p",{class:"font-weight-medium text"},"异常内容:",-1),k={class:"text-truncate font-weight-light"},b=(0,o._)("p",{class:"font-weight-medium text"},"发起时间:",-1),y={class:"text-truncate font-weight-light"};function C(t,e,a,C,W,x){const S=(0,o.up)("AppBarPage"),I=(0,o.up)("v-badge"),v=(0,o.up)("v-col"),A=(0,o.up)("v-row"),q=(0,o.up)("v-btn"),Q=(0,o.up)("v-card"),$=(0,o.up)("TableComponents"),H=(0,o.up)("SearchPage");return(0,o.wg)(),(0,o.iD)("span",null,[(0,o.Wm)(S),(0,o._)("div",n,[(0,o.Wm)($,{ref:"table1",url:"/iiot/abnormal/list",params:(0,l.Z)({abnormalState:10,queryType:10},t.pageSearchConfig),showSearchBtn:!0,onSearchClick:x.searchClick},{tableBody:(0,o.w5)((t=>[(0,o.Wm)(Q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A,{"no-gutters":"",class:"table-title"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{cols:"1"},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{content:t._index+1,color:"primary",inline:""},null,8,["content"])])),_:2},1024),(0,o.Wm)(v,{cols:"5"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(v,{cols:"6"},{default:(0,o.w5)((()=>[(0,o._)("p",r,(0,s.zw)(x.formatStatus(t.items)),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{cols:"12"},{default:(0,o.w5)((()=>[(0,o._)("p",c,(0,s.zw)(t.items.abnormalNo),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{cols:"12"},{default:(0,o.w5)((()=>[(0,o._)("p",m,[u,(0,o._)("span",null,(0,s.zw)(t.items.abnormalName),1)])])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{cols:"5"},{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Wm)(v,{cols:"7"},{default:(0,o.w5)((()=>[(0,o._)("p",p,(0,s.zw)(t.items.abnormalTypeName),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{cols:"4"},{default:(0,o.w5)((()=>[h])),_:1}),(0,o.Wm)(v,{cols:"8"},{default:(0,o.w5)((()=>[(0,o._)("p",f,(0,s.zw)(t.items.urgentDegreeName),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{cols:"4"},{default:(0,o.w5)((()=>[w])),_:1}),(0,o.Wm)(v,{cols:"8"},{default:(0,o.w5)((()=>[(0,o._)("p",g,(0,s.zw)(t.items.isLineStopName),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{cols:"4"},{default:(0,o.w5)((()=>[_])),_:1}),(0,o.Wm)(v,{cols:"8"},{default:(0,o.w5)((()=>[(0,o._)("p",k,(0,s.zw)(t.items.contentName),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{cols:"4"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(v,{cols:"8"},{default:(0,o.w5)((()=>[(0,o._)("p",y,(0,s.zw)(t.items.initiateTime),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(A,{"no-gutters":"",class:"text"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{cols:"4",class:"text-left"},{default:(0,o.w5)((()=>["40"==t.items.abnormalState?((0,o.wg)(),(0,o.j4)(q,{key:0,onClick:e=>x.closeClick(t),color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,o.w5)((()=>[(0,o.Uk)("异常关闭")])),_:2},1032,["onClick"])):(0,o.kq)("",!0),"30"==t.items.abnormalState?((0,o.wg)(),(0,o.j4)(q,{key:1,onClick:e=>x.disposeClick(t),color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,o.w5)((()=>[(0,o.Uk)("异常处理")])),_:2},1032,["onClick"])):(0,o.kq)("",!0),"20"==t.items.abnormalState?((0,o.wg)(),(0,o.j4)(q,{key:2,onClick:e=>x.appointClick(t),color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,o.w5)((()=>[(0,o.Uk)("异常指派")])),_:2},1032,["onClick"])):(0,o.kq)("",!0),"10"==t.items.abnormalState?((0,o.wg)(),(0,o.j4)(q,{key:3,onClick:e=>x.transpondClick(t),color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,o.w5)((()=>[(0,o.Uk)("异常转发")])),_:2},1032,["onClick"])):(0,o.kq)("",!0)])),_:2},1024),(0,o.Wm)(v,{cols:"4",class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{onClick:e=>x.detailClick(t),color:"error mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,o.w5)((()=>[(0,o.Uk)("详情")])),_:2},1032,["onClick"])])),_:2},1024),(0,o.Wm)(v,{cols:"4",class:"text-right"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{onClick:e=>x.nodeDetail(t),color:"primary mt-1",density:"compact",rounded:0,variant:"plain"},{default:(0,o.w5)((()=>[(0,o.Uk)("节点详情")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1},8,["params","onSearchClick"])]),(0,o.Wm)(H,{ref:"searchPage",hideStatus:!1,onResetHandle:x.resetHandle,onSearchHandle:x.searchHandle},null,8,["onResetHandle","onSearchHandle"])])}a(57658);var W=a(76496),x=a(88575),S=a(58426),I=(a(14614),{components:{AppBarPage:W.Z,TableComponents:x.Z,SearchPage:S.Z},data:()=>({searchParamas:{},pageSearchConfig:{}}),created(){},methods:{FormatDictionary(t="",e=""){const a=JSON.parse(localStorage.getItem("bufferDictionaries")||"{}"),l=a[t]||[],o=l.filter((t=>e==t.value))[0]||{};return o},async detailClick(t){const{items:e}=t;this.$router.push({path:"/anomalyInitiate/detail",query:{ttQmAbnormalId:e.ttQmAbnormalId}})},formatStatus(t){let e="";switch(t.abnormalState){case"10":e="待转发";break;case"20":e="待指派";break;case"30":e="待处理";break;case"40":e="待关闭";break;case"90":e="已关闭";break;case"60":e="已驳回";break;default:break}return e},searchClick(){this.$refs.searchPage.showDrawer()},searchHandle(t){this.pageSearchConfig=t,this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},resetHandle(t){this.pageSearchConfig={},this.$nextTick((()=>{this.$refs.table1.initFunc(1)}))},sponsorHandle(){this.$router.push({path:"/anomalyInitiate/sponsor",query:{}})},transpondClick(t){const{items:e}=t;this.$router.push({path:"/anomalyInitiate/transpond",query:{ttQmAbnormalId:e.ttQmAbnormalId,pageAction:2}})},appointClick(t){const{items:e}=t;this.$router.push({path:"/anomalyInitiate/appoint",query:{ttQmAbnormalId:e.ttQmAbnormalId}})},disposeClick(t){const{items:e}=t;this.$router.push({path:"/anomalyInitiate/dispose",query:{ttQmAbnormalId:e.ttQmAbnormalId}})},closeClick(t){const{items:e}=t;this.$router.push({path:"/anomalyInitiate/close",query:{ttQmAbnormalId:e.ttQmAbnormalId}})},nodeDetail(t){const{items:e}=t;this.$router.push({path:"/anomalyInitiate/content",query:{ttQmAbnormalId:e.ttQmAbnormalId}})}}}),v=a(40089);const A=(0,v.Z)(I,[["render",C]]);var q=A}}]);
//# sourceMappingURL=chunk.8454.1689576434327.js.map