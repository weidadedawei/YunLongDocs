import{b as r}from"./VPTeamMembers.vue_vue_type_style_index_0_scoped_68b81168_lang.488d37e9.js";import{u as i}from"../app.e017d17d.js";import{f as d,k as l,E as u,B as _,o as m,c as p}from"./framework.a6941a15.js";const C=d({__name:"VPCarbonAds",setup(f){const{theme:c}=r(),n=c.value.carbonAds,{isAsideEnabled:s}=i(),a=l();let t=!1;function o(){if(!t){t=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${n.code}&placement=${n.placement}`,e.async=!0,a.value.appendChild(e)}}return n&&u(()=>{s.value?o():_(s,e=>e&&o())}),(e,b)=>(m(),p("div",{class:"VPCarbonAds",ref_key:"container",ref:a},null,512))}});export{C as default};
