import{_ as T}from"../chunks/preload-helper-d8fdb614.js";import{D as w,$ as N,E as q,S as B,i as F,s as G,F as H,e as g,t as O,c as b,a as E,g as P,d,f as k,G as L,h as A,k as J,n as K,b as R,H as Q,I as S,J as X,K as z,L as U,M as W,x as Y,u as Z,N as $,O as j,X as x,P as V,Q as ee,R as le}from"../chunks/vendor-f2a8298a.js";function C(t,l,o){const s=t.slice();return s[6]=l[o],s}function M(t){let l,o=t[6]+"",s,i;return{c(){l=g("option"),s=O(o),this.h()},l(n){l=b(n,"OPTION",{});var r=E(l);s=P(r,o),r.forEach(d),this.h()},h(){l.__value=i=t[6],l.value=l.__value},m(n,r){k(n,l,r),L(l,s)},p(n,r){r&4&&o!==(o=n[6]+"")&&A(s,o),r&4&&i!==(i=n[6])&&(l.__value=i,l.value=l.__value)},d(n){n&&d(l)}}}function te(t){let l,o,s,i=t[0]("language")+"",n,r,c,p,h,D;const I=t[4].default,u=H(I,t,t[3],null);let v=t[2],_=[];for(let e=0;e<v.length;e+=1)_[e]=M(C(t,v,e));return{c(){l=g("div"),u&&u.c(),o=J(),s=g("label"),n=O(i),r=O(`:\r
	`),c=g("select");for(let e=0;e<_.length;e+=1)_[e].c();this.h()},l(e){l=b(e,"DIV",{class:!0});var f=E(l);u&&u.l(f),f.forEach(d),o=K(e),s=b(e,"LABEL",{class:!0});var a=E(s);n=P(a,i),r=P(a,`:\r
	`),c=b(a,"SELECT",{});var m=E(c);for(let y=0;y<_.length;y+=1)_[y].l(m);m.forEach(d),a.forEach(d),this.h()},h(){R(l,"class","page svelte-18o5hxe"),t[1]===void 0&&Q(()=>t[5].call(c)),R(s,"class","language svelte-18o5hxe")},m(e,f){k(e,l,f),u&&u.m(l,null),k(e,o,f),k(e,s,f),L(s,n),L(s,r),L(s,c);for(let a=0;a<_.length;a+=1)_[a].m(c,null);S(c,t[1]),p=!0,h||(D=X(c,"change",t[5]),h=!0)},p(e,[f]){if(u&&u.p&&(!p||f&8)&&z(u,I,e,e[3],p?W(I,e[3],f,null):U(e[3]),null),(!p||f&1)&&i!==(i=e[0]("language")+"")&&A(n,i),f&4){v=e[2];let a;for(a=0;a<v.length;a+=1){const m=C(e,v,a);_[a]?_[a].p(m,f):(_[a]=M(m),_[a].c(),_[a].m(c,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=v.length}f&6&&S(c,e[1])},i(e){p||(Y(u,e),p=!0)},o(e){Z(u,e),p=!1},d(e){e&&d(l),u&&u.d(e),e&&d(o),e&&d(s),$(_,e),h=!1,D()}}}console.log("[__layout.svelte] Init locale");w("nl",()=>T(()=>import("../chunks/website-bdac5a87.js"),[]));w("en",()=>T(()=>import("../chunks/website-554f5917.js"),[]));N({initialLocale:"nl",fallbackLocale:"nl"});const ne=async()=>(await q(),{});function ae(t,l,o){let s,i,n;j(t,x,h=>o(0,s=h)),j(t,V,h=>o(1,i=h)),j(t,ee,h=>o(2,n=h));let{$$slots:r={},$$scope:c}=l;function p(){i=le(this),V.set(i)}return t.$$set=h=>{"$$scope"in h&&o(3,c=h.$$scope)},[s,i,n,c,r,p]}class _e extends B{constructor(l){super();F(this,l,ae,te,G,{})}}export{_e as default,ne as load};