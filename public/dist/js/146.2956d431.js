"use strict";(self["webpackChunkonelist_web"]=self["webpackChunkonelist_web"]||[]).push([[146],{5146:function(e,a,l){l.r(a),l.d(a,{default:function(){return P}});var t=l(6252),i=l(3577);const s=e=>((0,t.dD)("data-v-3801f510"),e=e(),(0,t.Cn)(),e),o={key:0,class:"load"},r={key:1,class:"content"},u={class:"seriesTab"},d={class:"seriesTab-list"},n={class:"seriesTab-item"},v={class:"seriesTab-item"},c=s((()=>(0,t._)("i",{class:"bx bx-left-arrow-alt"},null,-1))),g={class:"seriesTab-item"},h=s((()=>(0,t._)("i",{class:"bx bx-right-arrow-alt"},null,-1))),w={class:"seriesTab-item"},p=s((()=>(0,t._)("i",{class:"bx bx-align-middle"},null,-1))),_={class:"seriesTab-item"},m=s((()=>(0,t._)("i",{class:"bx bx-filter"},null,-1))),f={class:"card-show-content view-card-list"},y={class:"view-item-header"},b={class:"view-item-tag-list"},C={class:"view-item-tag rating"},k={key:0,class:"view-item-tag count"},M=s((()=>(0,t._)("i",{class:"bx bx-check"},null,-1))),x=[M],$=["src"],O={key:0,class:"view-item-title"},H={key:1,class:"view-item-title"},z=s((()=>(0,t._)("i",{class:"bx bx-x"},null,-1))),S={class:"sort-list"},N=s((()=>(0,t._)("div",{class:"sort-title"}," 排序方式 ",-1))),W={class:"sort-list"},D=s((()=>(0,t._)("div",{class:"sort-title"}," 排序顺序 ",-1))),U={class:"sort-list"},T=s((()=>(0,t._)("i",{class:"bx bx-x"},null,-1))),q=s((()=>(0,t._)("div",{class:"sort-title"}," 风格 ",-1))),A={class:"sort-list"};function F(e,a,l,s,M,F){const j=(0,t.up)("n-button"),L=(0,t.up)("router-link"),E=(0,t.up)("n-radio"),I=(0,t.up)("n-space"),K=(0,t.up)("n-radio-group"),P=(0,t.up)("n-card"),Y=(0,t.up)("n-modal");return s.loading?((0,t.wg)(),(0,t.iD)("div",o)):((0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",u,[(0,t._)("div",d,[(0,t._)("div",n,(0,i.zw)(s.pageText),1),(0,t._)("div",v,[(0,t.Wm)(j,{onClick:a[0]||(a[0]=e=>F.BackPage()),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[c])),_:1})]),(0,t._)("div",g,[(0,t.Wm)(j,{onClick:a[1]||(a[1]=e=>F.NextPage()),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[h])),_:1})]),(0,t._)("div",w,[(0,t.Wm)(j,{onClick:a[2]||(a[2]=e=>s.showSort=!s.showSort),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[p])),_:1})]),(0,t._)("div",_,[(0,t.Wm)(j,{onClick:a[3]||(a[3]=e=>s.showFilter=!s.showFilter),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[m])),_:1})])])]),(0,t._)("div",f,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.data,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"view-item",key:l},[(0,t.Wm)(L,{to:{path:"/video",query:{id:a.id,gallery_type:s.gallery_type}}},{default:(0,t.w5)((()=>[(0,t._)("div",y,[(0,t._)("div",b,[(0,t._)("div",C,(0,i.zw)(isNaN(Math.floor(100*a.vote_average)/100)?"":Math.floor(100*a.vote_average)/100),1),a.played?((0,t.wg)(),(0,t.iD)("div",k,x)):(0,t.kq)("",!0)])]),(0,t._)("img",{loading:"lazy",class:"carousel-img",src:e.COMMON.imgUrl+"/t/p/w220_and_h330_face"+a.poster_path},null,8,$),null!=a.video?((0,t.wg)(),(0,t.iD)("div",O,(0,i.zw)(a.title),1)):((0,t.wg)(),(0,t.iD)("div",H,(0,i.zw)(a.name),1))])),_:2},1032,["to"])])))),128))]),(0,t.Wm)(Y,{show:s.showSort,"onUpdate:show":a[7]||(a[7]=e=>s.showSort=e),"transform-origin":"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{style:{width:"600px"},title:"排序",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":(0,t.w5)((()=>[(0,t.Wm)(j,{onClick:a[4]||(a[4]=e=>s.showSort=!s.showSort),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[z])),_:1})])),default:(0,t.w5)((()=>[(0,t._)("div",S,[N,(0,t._)("div",W,[(0,t.Wm)(K,{value:s.mode,"onUpdate:value":a[5]||(a[5]=e=>s.mode=e),name:"radiogroup"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{vertical:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.modes,(e=>((0,t.wg)(),(0,t.j4)(E,{onChange:s.handleChange,class:"sort-item",checked:s.mode===e.value,key:e.value,value:e.value},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.label),1)])),_:2},1032,["onChange","checked","value"])))),128))])),_:1})])),_:1},8,["value"])]),D,(0,t._)("div",U,[(0,t.Wm)(K,{value:s.order,"onUpdate:value":a[6]||(a[6]=e=>s.order=e),name:"radiogroup"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{vertical:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.orders,(e=>((0,t.wg)(),(0,t.j4)(E,{onChange:s.handleChange,class:"sort-item",checked:s.order===e.value,key:e.value,value:e.value},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.label),1)])),_:2},1032,["onChange","checked","value"])))),128))])),_:1})])),_:1},8,["value"])])])])),_:1})])),_:1},8,["show"]),(0,t.Wm)(Y,{show:s.showFilter,"onUpdate:show":a[10]||(a[10]=e=>s.showFilter=e),"transform-origin":"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{style:{width:"600px"},title:"筛选",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":(0,t.w5)((()=>[(0,t.Wm)(j,{onClick:a[8]||(a[8]=e=>s.showFilter=!s.showFilter),strong:"",secondary:"",circle:""},{default:(0,t.w5)((()=>[T])),_:1})])),default:(0,t.w5)((()=>[q,(0,t._)("div",A,[(0,t.Wm)(K,{value:s.genre,"onUpdate:value":a[9]||(a[9]=e=>s.genre=e),name:"radiogroup"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{vertical:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.filters,(e=>((0,t.wg)(),(0,t.j4)(E,{onChange:s.filterChange,class:"sort-item",key:e,value:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.name),1)])),_:2},1032,["onChange","value"])))),128))])),_:1})])),_:1},8,["value"])])])),_:1})])),_:1},8,["show"])]))}var j=l(2262),L=l(2201),E={name:"VideoList",setup(){const e=(0,j.iH)(null),a=(0,j.iH)(null),l=(0,j.iH)(null),i=(0,j.iH)(null),s=(0,j.iH)(null),o=(0,j.iH)(null),r=(0,j.iH)(null),u=(0,j.iH)(!0),{proxy:d}=(0,t.FN)(),n=(0,j.iH)(null),v=(0,j.iH)(!1),c=(0,j.iH)("updated_at"),g=(0,j.iH)("DESC"),h=(0,j.iH)(""),w=(0,j.iH)("");e.value=d.$route.query.gallery_uid,a.value=d.$route.query.gallery_type,l.value=48,i.value=1;const p=(0,j.iH)(8);d.COMMON.isMo&&(p.value=3);const _=(0,j.iH)(null);let m=localStorage.getItem("page");function f(e){let a=document.querySelectorAll(".sider-item a");a.forEach((e=>{e.classList.remove("active")})),a.forEach((a=>{let l=a.querySelector(".title");l.dataset.id==e&&a.classList.add("active")}))}function y(){let e=l.value;n.value<l.value&&(e=n.value),localStorage.setItem("page",i.value),_.value=n.value+" 的 "+(i.value-1)*l.value+"-"+((i.value-1)*l.value+e)}function b(){let e=`${d.COMMON.apiUrl}/v1/api/genre/list?page=1&size=100`;d.axios.post(e,{},{headers:{"content-type":"application/json",Authorization:d.$cookies.get("Authorization")}}).then((e=>{200==e.data.code&&(o.value=e.data.data),u.value=!1})).catch((e=>{d.COMMON.ShowMsg(e)}))}function C(){let t=`${d.COMMON.apiUrl}/v1/api/thetv/sort?gallery_uid=${e.value}&mode=${c.value}&order=${g.value}&page=${i.value}&size=${l.value}`;"movie"==a.value&&(t=`${d.COMMON.apiUrl}/v1/api/themovie/sort?gallery_uid=${e.value}&mode=${c.value}&order=${g.value}&page=${i.value}&size=${l.value}`),d.axios.post(t,{},{headers:{"content-type":"application/json",Authorization:d.$cookies.get("Authorization")}}).then((a=>{200==a.data.code&&(s.value=a.data.data,n.value=a.data.num,f(e.value),y(),b())})).catch((e=>{d.COMMON.ShowMsg(e)}))}function k(t){let o=`${d.COMMON.apiUrl}/v1/api/genre/filte?id=${t}&gallery_uid=${e.value}&gallery_type=${a.value}&mode=${c.value}&order=${g.value}&page=${i.value}&size=${l.value}`;d.axios.post(o,{},{headers:{"content-type":"application/json",Authorization:d.$cookies.get("Authorization")}}).then((e=>{200==e.data.code&&("movie"==a.value?(null==e.data.data.the_movies&&d.COMMON.ShowMsg("未查询到相关内容!"),s.value=e.data.data.the_movies):(null==e.data.data.the_tvs&&d.COMMON.ShowMsg("未查询到相关内容!"),s.value=e.data.data.the_tvs),n.value=e.data.num,y())})).catch((e=>{d.COMMON.ShowMsg(e)}))}null!=m&&(i.value=parseInt(m)),(0,L.ao)(((l,t)=>{e.value=l.query.gallery_uid,a.value=l.query.gallery_type,C()}));const M=()=>{C()};return(0,t.bv)((()=>{C()})),{gallery_type:a,per_card:p,data:s,loading:u,error:r,page:i,size:l,num:n,search:v,pageText:_,filters:o,genre:h,year:w,refresh:M,handleChange(e){i.value=1,C()},filterChange(e){i.value=1,k(h.value.id)},showSort:(0,j.iH)(!1),showFilter:(0,j.iH)(!1),mode:c,modes:[{value:"updated_at",label:"更新时间"},{value:"created_at",label:"加入时间"},{value:"vote_average",label:"评分"},{value:"release_date",label:"发行时间"}].map((e=>(e.value=e.value.toLowerCase(),e))),order:g,orders:[{value:"ASC",label:"升序"},{value:"DESC",label:"降序"}].map((e=>(e.value=e.value.toLowerCase(),e)))}},methods:{BackPage(){this.page=this.page-1,this.page<=0&&(this.COMMON.ShowMsg("已经是第1页啦!"),this.page=1),this.refresh()},NextPage(){this.page=this.page+1,this.refresh()}}},I=l(3744);const K=(0,I.Z)(E,[["render",F],["__scopeId","data-v-3801f510"]]);var P=K}}]);
//# sourceMappingURL=146.2956d431.js.map