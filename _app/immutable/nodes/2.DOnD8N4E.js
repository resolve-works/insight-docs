import{s as i,a as r,e as c,n as f}from"../chunks/scheduler.BWqyD_cK.js";import{S as d,i as p,c as g,a as v,m as x,t as h,b as $,d as y,e as C,f as S,g as b,h as j,j as L}from"../chunks/index.B-1tSlzQ.js";import{L as P,g as k,a as _}from"../chunks/Layout.CEvdtm1E.js";function q(o){let t,n="So you have a stack of documents";return{c(){t=C("p"),t.textContent=n},l(a){t=S(a,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1mcxm9z"&&(t.textContent=n)},m(a,l){j(a,t,l)},p:f,d(a){a&&L(t)}}}function w(o){let t,n;const a=[o[0],u];let l={$$slots:{default:[q]},$$scope:{ctx:o}};for(let e=0;e<a.length;e+=1)l=r(l,a[e]);return t=new P({props:l}),{c(){g(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,s){x(t,e,s),n=!0},p(e,[s]){const m=s&1?k(a,[s&1&&_(e[0]),s&0&&_(u)]):{};s&2&&(m.$$scope={dirty:s,ctx:e}),t.$set(m)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){y(t,e)}}}const u={title:"Insight documentation"};function z(o,t,n){return o.$$set=a=>{n(0,t=r(r({},t),c(a)))},t=c(t),[t]}class D extends d{constructor(t){super(),p(this,t,z,w,i,{})}}export{D as component};