"use strict";(self["webpackChunkonelist_web"]=self["webpackChunkonelist_web"]||[]).push([[968],{7968:function(e,a,t){t.r(a),t.d(a,{default:function(){return E}});var i=t(6252),l=t(3577);const s=e=>((0,i.dD)("data-v-21be0430"),e=e(),(0,i.Cn)(),e),o={key:0,class:"load"},r={key:1,class:"content"},c={class:"card-list"},n={class:"card-shows medias"},d=s((()=>(0,i._)("div",{class:"card-show-title"}," 我的媒体 ",-1))),u={class:"card-show-content gallery-card"},w=["src"],g={key:1,loading:"lazy",class:"gallery-img",src:"/images/not_gellery.png"},v={class:"view-item-title"},p={class:"custom-arrow"},_=["onClick"],h=s((()=>(0,i._)("i",{class:"bx bx-chevron-left"},null,-1))),y=[h],m=["onClick"],b=s((()=>(0,i._)("i",{class:"bx bx-chevron-right"},null,-1))),k=[b],M={class:"card-show-title"},f={class:"card-show-content view-card"},C={class:"view-item-header"},O={class:"view-item-tag-list"},z={class:"view-item-tag rating"},x={key:0,class:"view-item-tag count"},D=s((()=>(0,i._)("i",{class:"bx bx-check"},null,-1))),N=[D],H=["src"],U={key:0,class:"view-item-title"},W={key:1,class:"view-item-title"},j={class:"custom-arrow"},A=["onClick"],q=s((()=>(0,i._)("i",{class:"bx bx-chevron-left"},null,-1))),K=[q],Y=["onClick"],S=s((()=>(0,i._)("i",{class:"bx bx-chevron-right"},null,-1))),$=[S];function F(e,a,t,s,h,b){const D=(0,i.up)("router-link"),q=(0,i.up)("n-carousel");return s.loading?((0,i.wg)(),(0,i.iD)("div",o)):((0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",c,[(0,i._)("div",n,[d,(0,i._)("div",u,[(0,i.Wm)(q,{"show-dots":!1,"show-arrow":"","slides-per-view":s.per_view,"space-between":20,loop:!1,draggable:""},{arrow:(0,i.w5)((({prev:e,next:a})=>[(0,i._)("div",p,[(0,i._)("button",{type:"button",class:"custom-arrow--left",onClick:e},y,8,_),(0,i._)("button",{type:"button",class:"custom-arrow--right",onClick:a},k,8,m)])])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.data,((a,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"view-item",key:t},[(0,i.Wm)(D,{to:{path:"/list",query:{gallery_uid:a.gallery_uid,gallery_type:a.gallery_type}}},{default:(0,i.w5)((()=>[a.image.length>0?((0,i.wg)(),(0,i.iD)("img",{key:0,loading:"lazy",class:"gallery-img",src:-1!=a.image.search(/gallery/)?e.COMMON.apiUrl+a.image:e.COMMON.imgUrl+"/t/p/w355_and_h200_multi_faces"+a.image},null,8,w)):((0,i.wg)(),(0,i.iD)("img",g)),(0,i._)("div",v,(0,l.zw)(a.title),1)])),_:2},1032,["to"])])))),128))])),_:1},8,["slides-per-view"])])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Object.keys(s.dict_data),((a,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"card-shows",key:t},[(0,i._)("div",M,(0,l.zw)(a),1),(0,i._)("div",f,[(0,i.Wm)(q,{"show-dots":!1,"show-arrow":"","slides-per-view":s.per_card,"space-between":20,loop:!1,draggable:""},{arrow:(0,i.w5)((({prev:e,next:a})=>[(0,i._)("div",j,[(0,i._)("button",{type:"button",class:"custom-arrow--left",onClick:e},K,8,A),(0,i._)("button",{type:"button",class:"custom-arrow--right",onClick:a},$,8,Y)])])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.dict_data[a],(a=>((0,i.wg)(),(0,i.iD)("div",{class:"view-item",key:a.id},[(0,i._)("div",C,[(0,i._)("div",O,[(0,i._)("div",z,(0,l.zw)(isNaN(Math.floor(100*a.vote_average)/100)?"":Math.floor(100*a.vote_average)/100),1),a.played?((0,i.wg)(),(0,i.iD)("div",x,N)):(0,i.kq)("",!0)])]),(0,i.Wm)(D,{to:{path:"/video",query:{id:a.id,gallery_type:null!=a.title?"movie":"tv"}}},{default:(0,i.w5)((()=>[(0,i._)("img",{loading:"lazy",class:"carousel-img",src:e.COMMON.imgUrl+"/t/p/w220_and_h330_face/"+a.poster_path},null,8,H)])),_:2},1032,["to"]),null!=a.title?((0,i.wg)(),(0,i.iD)("div",U,(0,l.zw)(a.title),1)):((0,i.wg)(),(0,i.iD)("div",W,(0,l.zw)(a.name),1))])))),128))])),_:2},1032,["slides-per-view"])])])))),128))])]))}var I=t(2262),P={name:"HelloWorld",setup(){const e=(0,I.iH)(5),a=(0,I.iH)(8),{proxy:t}=(0,i.FN)();t.COMMON.isMo&&(e.value=2,a.value=3);const l=(0,I.iH)(null),s=(0,I.iH)(null);var o=new Object;const r=(0,I.iH)(100),c=(0,I.iH)(!0),n=(0,I.iH)(null);function d(){c.value=!0,t.axios.post(t.COMMON.apiUrl+"/v1/api/gallery/list?page=1&size="+r.value,{},{headers:{"content-type":"application/json",Authorization:t.$cookies.get("Authorization")}}).then((e=>{200==e.data.code&&(l.value=e.data.data,Promise.all(e.data.data.map((async e=>{await u(e)}))).then((()=>{c.value=!1})))})).catch((e=>{t.COMMON.ShowMsg(e)}))}function u(e){let a=t.COMMON.apiUrl+"/v1/api/thetv/gallery/list?id="+e.gallery_uid+"&page=1&size=24";return"movie"==e.gallery_type&&(a=t.COMMON.apiUrl+"/v1/api/themovie/gallery/list?id="+e.gallery_uid+"&page=1&size=24"),t.axios.post(a,{},{headers:{"content-type":"application/json",Authorization:t.$cookies.get("Authorization")}}).then((a=>{200==a.data.code&&(o[e.title]=a.data.data,s.value=o)})).catch((e=>{t.COMMON.ShowMsg(e)}))}return(0,i.bv)((()=>{d()})),{data:l,dict_data:s,per_view:e,per_card:a,loading:c,error:n,size:r}},methods:{}},Z=t(3744);const B=(0,Z.Z)(P,[["render",F],["__scopeId","data-v-21be0430"]]);var E=B}}]);
//# sourceMappingURL=968.7026712c.js.map