import{V as i,a as u}from"./chunks/VPTeamMembers.vue_vue_type_style_index_0_scoped_68b81168_lang.488d37e9.js";import{_ as y,o as a,c as n,b as p,f as A,t as c,g as e,h,w as m,d as C,n as D,e as t,i as b,F as P,j as T,u as d,a as g}from"./chunks/framework.a6941a15.js";const f={},E={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},v=p("path",{d:"M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"},null,-1),V=[v];function k(s,o){return a(),n("svg",E,V)}const w=y(f,[["render",k]]),_={class:"profile"},x={class:"avatar"},q=["src","alt"],M={class:"data"},B={class:"name"},S={key:0,class:"affiliation"},z={key:0,class:"title"},I={key:1,class:"at"},L={key:1,class:"desc"},$={key:2,class:"links"},N={key:0,class:"sp"},O=A({__name:"VPTeamMembersItem",props:{size:null,member:null},setup(s){return(o,r)=>{var l;return a(),n("article",{class:D(["VPTeamMembersItem",[(l=s.size)!=null?l:"medium"]])},[p("div",_,[p("figure",x,[p("img",{class:"avatar-img",src:s.member.avatar,alt:s.member.name},null,8,q)]),p("div",M,[p("h1",B,c(s.member.name),1),s.member.title||s.member.org?(a(),n("p",S,[s.member.title?(a(),n("span",z,c(s.member.title),1)):e("",!0),s.member.title&&s.member.org?(a(),n("span",I," @ ")):e("",!0),s.member.org?(a(),h(i,{key:2,class:D(["org",{link:s.member.orgLink}]),href:s.member.orgLink,"no-icon":""},{default:m(()=>[C(c(s.member.org),1)]),_:1},8,["class","href"])):e("",!0)])):e("",!0),s.member.desc?(a(),n("p",L,c(s.member.desc),1)):e("",!0),s.member.links?(a(),n("div",$,[t(u,{links:s.member.links},null,8,["links"])])):e("",!0)])]),s.member.sponsor?(a(),n("div",N,[t(i,{class:"sp-link",href:s.member.sponsor,"no-icon":""},{default:m(()=>[t(w,{class:"sp-icon"}),C(" Sponsor ")]),_:1},8,["href"])])):e("",!0)],2)}}}),Y=y(O,[["__scopeId","data-v-f4fa611a"]]),R={class:"container"},j=A({__name:"VPTeamMembers",props:{size:null,members:null},setup(s){const o=s,r=b(()=>{var l;return[(l=o.size)!=null?l:"medium",`count-${o.members.length}`]});return(l,G)=>(a(),n("div",{class:D(["VPTeamMembers",d(r)])},[p("div",R,[(a(!0),n(P,null,T(s.members,F=>(a(),n("div",{key:F.name,class:"item"},[t(Y,{size:s.size,member:F},null,8,["size","member"])]))),128))])],2))}}),K=y(j,[["__scopeId","data-v-68b81168"]]),U=g("",6),H=g("",28),X=JSON.parse('{"title":"Team Page","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme-team-page.md","lastUpdated":1664343993000}'),W={name:"guide/theme-team-page.md"},Z=Object.assign(W,{setup(s){const o=[{avatar:"https://github.com/yyx990803.png",name:"Evan You",title:"Creator",links:[{icon:"github",link:"https://github.com/yyx990803"},{icon:"twitter",link:"https://twitter.com/youyuxi"}]},{avatar:"https://github.com/kiaking.png",name:"Kia King Ishii",title:"Developer",links:[{icon:"github",link:"https://github.com/kiaking"},{icon:"twitter",link:"https://twitter.com/KiaKing85"}]}];return(r,l)=>(a(),n("div",null,[U,t(d(K),{size:"small",members:o}),H]))}});export{X as __pageData,Z as default};
