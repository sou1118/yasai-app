import{S as Q,i as R,s as U,k as _,q as E,l as g,m as p,r as I,h as f,n as b,J as ve,b as N,G as u,K as j,L as be,H as O,M as me,N as Ee,w as le,O as se,a as y,y as ne,c as D,z as ae,A as oe,P as ce,g as ie,d as re,B as de,u as $e}from"../chunks/index.b090027f.js";const ue=[{id:1,name:"きゅうり"},{id:2,name:"トマト"}],fe=[{id:1,name:"塩"},{id:2,name:"砂糖"},{id:3,name:"醤油"}],Ve=[{vegetableId:1,seasoningId:1,duration:7},{vegetableId:1,seasoningId:2,duration:3},{vegetableId:1,seasoningId:3,duration:14},{vegetableId:2,seasoningId:1,duration:7},{vegetableId:2,seasoningId:2,duration:3},{vegetableId:2,seasoningId:3,duration:14}];function he(o,e,s){const t=o.slice();return t[2]=e[s],t}function _e(o){let e,s=o[2].name+"",t;return{c(){e=_("option"),t=E(s),this.h()},l(c){e=g(c,"OPTION",{});var r=p(e);t=I(r,s),r.forEach(f),this.h()},h(){e.__value=o[2].id,e.value=e.__value},m(c,r){N(c,e,r),u(e,t)},p:O,d(c){c&&f(e)}}}function ke(o){let e,s,t,c,r,i=ue,n=[];for(let l=0;l<i.length;l+=1)n[l]=_e(he(o,i,l));return{c(){e=_("select"),s=_("option"),t=E("野菜を選択");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=g(l,"SELECT",{class:!0});var d=p(e);s=g(d,"OPTION",{});var a=p(s);t=I(a,"野菜を選択"),a.forEach(f);for(let v=0;v<n.length;v+=1)n[v].l(d);d.forEach(f),this.h()},h(){s.__value="",s.value=s.__value,b(e,"class","select select-bordered"),o[0]===void 0&&ve(()=>o[1].call(e))},m(l,d){N(l,e,d),u(e,s),u(s,t);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);j(e,o[0],!0),c||(r=be(e,"change",o[1]),c=!0)},p(l,[d]){if(d&0){i=ue;let a;for(a=0;a<i.length;a+=1){const v=he(l,i,a);n[a]?n[a].p(v,d):(n[a]=_e(v),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=i.length}d&1&&j(e,l[0])},i:O,o:O,d(l){l&&f(e),me(n,l),c=!1,r()}}}function Pe(o,e,s){let{selectedVegetable:t}=e;function c(){t=Ee(this),s(0,t)}return o.$$set=r=>{"selectedVegetable"in r&&s(0,t=r.selectedVegetable)},[t,c]}class Oe extends Q{constructor(e){super(),R(this,e,Pe,ke,U,{selectedVegetable:0})}}function ge(o,e,s){const t=o.slice();return t[2]=e[s],t}function pe(o){let e,s=o[2].name+"",t;return{c(){e=_("option"),t=E(s),this.h()},l(c){e=g(c,"OPTION",{});var r=p(e);t=I(r,s),r.forEach(f),this.h()},h(){e.__value=o[2].id,e.value=e.__value},m(c,r){N(c,e,r),u(e,t)},p:O,d(c){c&&f(e)}}}function Ne(o){let e,s,t,c,r,i=fe,n=[];for(let l=0;l<i.length;l+=1)n[l]=pe(ge(o,i,l));return{c(){e=_("select"),s=_("option"),t=E("調味料を選択");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=g(l,"SELECT",{class:!0});var d=p(e);s=g(d,"OPTION",{});var a=p(s);t=I(a,"調味料を選択"),a.forEach(f);for(let v=0;v<n.length;v+=1)n[v].l(d);d.forEach(f),this.h()},h(){s.__value="",s.value=s.__value,b(e,"class","select select-bordered"),o[0]===void 0&&ve(()=>o[1].call(e))},m(l,d){N(l,e,d),u(e,s),u(s,t);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);j(e,o[0],!0),c||(r=be(e,"change",o[1]),c=!0)},p(l,[d]){if(d&0){i=fe;let a;for(a=0;a<i.length;a+=1){const v=ge(l,i,a);n[a]?n[a].p(v,d):(n[a]=pe(v),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=i.length}d&1&&j(e,l[0])},i:O,o:O,d(l){l&&f(e),me(n,l),c=!1,r()}}}function Te(o,e,s){let{selectedSeasoning:t}=e;function c(){t=Ee(this),s(0,t)}return o.$$set=r=>{"selectedSeasoning"in r&&s(0,t=r.selectedSeasoning)},[t,c]}class Le extends Q{constructor(e){super(),R(this,e,Te,Ne,U,{selectedSeasoning:0})}}function Ae(o){let e,s;return{c(){e=_("p"),s=E("野菜と調味料を選択してください"),this.h()},l(t){e=g(t,"P",{class:!0});var c=p(e);s=I(c,"野菜と調味料を選択してください"),c.forEach(f),this.h()},h(){b(e,"class","text-xl mt-4")},m(t,c){N(t,e,c),u(e,s)},p:O,d(t){t&&f(e)}}}function we(o){let e,s,t,c,r;return{c(){e=_("p"),s=E("保存期限: "),t=_("span"),c=E(o[2]),r=E("日"),this.h()},l(i){e=g(i,"P",{class:!0});var n=p(e);s=I(n,"保存期限: "),t=g(n,"SPAN",{class:!0});var l=p(t);c=I(l,o[2]),r=I(l,"日"),l.forEach(f),n.forEach(f),this.h()},h(){b(t,"class","font-bold"),b(e,"class","text-xl mt-4")},m(i,n){N(i,e,n),u(e,s),u(e,t),u(t,c),u(t,r)},p(i,n){n&4&&$e(c,i[2])},d(i){i&&f(e)}}}function ye(o){let e,s,t,c,r,i,n,l,d,a,v,S,z,G,k,T,L,J,K,$,M,F,B;function Ie(h){o[3](h)}let W={};o[0]!==void 0&&(W.selectedVegetable=o[0]),S=new Oe({props:W}),le.push(()=>se(S,"selectedVegetable",Ie));function Se(h){o[4](h)}let X={};o[1]!==void 0&&(X.selectedSeasoning=o[1]),$=new Le({props:X}),le.push(()=>se($,"selectedSeasoning",Se));function Y(h,V){return h[2]?we:Ae}let C=Y(o),m=C(o);return{c(){e=_("div"),s=_("div"),t=_("h1"),c=E("野菜と調味料の保存期限"),r=y(),i=_("div"),n=_("div"),l=_("label"),d=_("span"),a=E("野菜を選択"),v=y(),ne(S.$$.fragment),G=y(),k=_("div"),T=_("label"),L=_("span"),J=E("調味料を選択"),K=y(),ne($.$$.fragment),F=y(),m.c(),this.h()},l(h){e=g(h,"DIV",{class:!0});var V=p(e);s=g(V,"DIV",{class:!0});var P=p(s);t=g(P,"H1",{class:!0});var w=p(t);c=I(w,"野菜と調味料の保存期限"),w.forEach(f),r=D(P),i=g(P,"DIV",{class:!0});var A=p(i);n=g(A,"DIV",{class:!0});var q=p(n);l=g(q,"LABEL",{class:!0});var Z=p(l);d=g(Z,"SPAN",{class:!0});var x=p(d);a=I(x,"野菜を選択"),x.forEach(f),Z.forEach(f),v=D(q),ae(S.$$.fragment,q),q.forEach(f),G=D(A),k=g(A,"DIV",{class:!0});var H=p(k);T=g(H,"LABEL",{class:!0});var ee=p(T);L=g(ee,"SPAN",{class:!0});var te=p(L);J=I(te,"調味料を選択"),te.forEach(f),ee.forEach(f),K=D(H),ae($.$$.fragment,H),H.forEach(f),F=D(A),m.l(A),A.forEach(f),P.forEach(f),V.forEach(f),this.h()},h(){b(t,"class","text-3xl font-bold mb-4"),b(d,"class","label-text"),b(l,"class","label"),b(n,"class","form-control"),b(L,"class","label-text"),b(T,"class","label"),b(k,"class","form-control"),b(i,"class","card-body"),b(s,"class","card shadow-lg w-1/3"),b(e,"class","min-h-screen bg-base-100 flex items-center justify-center")},m(h,V){N(h,e,V),u(e,s),u(s,t),u(t,c),u(s,r),u(s,i),u(i,n),u(n,l),u(l,d),u(d,a),u(n,v),oe(S,n,null),u(i,G),u(i,k),u(k,T),u(T,L),u(L,J),u(k,K),oe($,k,null),u(i,F),m.m(i,null),B=!0},p(h,[V]){const P={};!z&&V&1&&(z=!0,P.selectedVegetable=h[0],ce(()=>z=!1)),S.$set(P);const w={};!M&&V&2&&(M=!0,w.selectedSeasoning=h[1],ce(()=>M=!1)),$.$set(w),C===(C=Y(h))&&m?m.p(h,V):(m.d(1),m=C(h),m&&(m.c(),m.m(i,null)))},i(h){B||(ie(S.$$.fragment,h),ie($.$$.fragment,h),B=!0)},o(h){re(S.$$.fragment,h),re($.$$.fragment,h),B=!1},d(h){h&&f(e),de(S),de($),m.d()}}}function De(o,e,s){let t="",c="",r="";function i(l){t=l,s(0,t)}function n(l){c=l,s(1,c)}return o.$$.update=()=>{if(o.$$.dirty&3&&t&&c){const l=Ve.find(d=>d.vegetableId==t&&d.seasoningId==c);s(2,r=l?l.duration:"組み合わせが見つかりません")}},[t,c,r,i,n]}class Ce extends Q{constructor(e){super(),R(this,e,De,ye,U,{})}}export{Ce as default};
