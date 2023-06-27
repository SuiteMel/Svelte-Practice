import{S as N,i as Q,s as A,e as c,a as r,b as x,c as o,n as O,d as g,f as h,g as $e,h as D,j as ie,x as ce,k as fe,l as ue,m as H,t as G,o as z,p as T,q as L,r as F,R as be,L as te,u as le,v as we,w as _e,y as xe,H as ye}from"./vendor.ae8a2f10.js";const Ye={},ke=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}};ke();var Me=`<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<symbol id="icon-view" viewBox="0 0 32 32">
<path fill="#fff" style="fill: var(--color1, #fff)" d="M16 6c-6.667 0-12.36 4.147-14.667 10 2.307 5.853 8 10 14.667 10 6.673 0 12.36-4.147 14.667-10-2.307-5.853-7.993-10-14.667-10zM16 22.667c-3.68 0-6.667-2.987-6.667-6.667s2.987-6.667 6.667-6.667 6.667 2.987 6.667 6.667-2.987 6.667-6.667 6.667zM16 12c-2.207 0-4 1.793-4 4s1.793 4 4 4 4-1.793 4-4-1.793-4-4-4z"></path>
</symbol>
<symbol id="icon-clock" viewBox="0 0 32 32">
<path fill="#8bacd9" style="fill: var(--color2, #8bacd9)" d="M15.633 3.778c-6.931 0-12.55 5.619-12.55 12.55s5.619 12.55 12.55 12.55v0c6.931 0 12.55-5.619 12.55-12.55s-5.619-12.55-12.55-12.55v0zM20.653 17.583h-5.020c-0.693 0-1.256-0.562-1.256-1.256v0-5.020c0-0.693 0.562-1.256 1.256-1.256s1.256 0.562 1.256 1.256v0 3.765h3.765c0.693 0 1.256 0.562 1.256 1.256s-0.562 1.256-1.256 1.256v0z"></path>
</symbol>
<symbol id="icon-ethereum" viewBox="0 0 20 32">
<path fill="#00fff8" style="fill: var(--color3, #00fff8)" d="M19.556 18.162l-9.778 13.838-9.778-13.838 9.778 5.801 9.778-5.799zM9.778 0l9.771 16.3-9.771 5.797-9.778-5.796 9.778-16.302z"></path>
</symbol>
</defs>
</svg>
`;function Te(f){let e,n,t,l,a,s=f[0].content+"";return{c(){e=c("section"),n=c("div"),t=c("div"),l=c("div"),a=c("div"),r(a,"class","prose max-w-none"),r(l,"class","px-8 w-8/12 mx-auto text-center"),r(t,"class","-mx-8"),r(n,"class","container"),r(e,"class","my-20")},m(d,i){x(d,e,i),o(e,n),o(n,t),o(t,l),o(l,a),a.innerHTML=s},p(d,[i]){i&1&&s!==(s=d[0].content+"")&&(a.innerHTML=s)},i:O,o:O,d(d){d&&g(e)}}}function Le(f,e,n){let{data:t}=e;return f.$$set=l=>{"data"in l&&n(0,t=l.data)},[t]}class de extends N{constructor(e){super();Q(this,e,Le,Te,A,{data:0})}}function me(f,e,n){const t=f.slice();return t[1]=e[n],t}function pe(f){let e,n,t=f[1].content+"",l;return{c(){e=c("div"),n=c("div"),l=h(),r(n,"class","prose max-w-none"),r(e,"class","px-8 w-4/12 mx-auto text-center flex-initial")},m(a,s){x(a,e,s),o(e,n),n.innerHTML=t,o(e,l)},p(a,s){s&1&&t!==(t=a[1].content+"")&&(n.innerHTML=t)},d(a){a&&g(e)}}}function qe(f){let e,n,t,l=f[0].cols,a=[];for(let s=0;s<l.length;s+=1)a[s]=pe(me(f,l,s));return{c(){e=c("section"),n=c("div"),t=c("div");for(let s=0;s<a.length;s+=1)a[s].c();r(t,"class","-mx-8 flex flex-wrap"),r(n,"class","container"),r(e,"class","my-20")},m(s,d){x(s,e,d),o(e,n),o(n,t);for(let i=0;i<a.length;i+=1)a[i].m(t,null)},p(s,[d]){if(d&1){l=s[0].cols;let i;for(i=0;i<l.length;i+=1){const m=me(s,l,i);a[i]?a[i].p(m,d):(a[i]=pe(m),a[i].c(),a[i].m(t,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=l.length}},i:O,o:O,d(s){s&&g(e),$e(a,s)}}}function Ce(f,e,n){let{data:t}=e;return f.$$set=l=>{"data"in l&&n(0,t=l.data)},[t]}class He extends N{constructor(e){super();Q(this,e,Ce,qe,A,{data:0})}}function ze(f){let e,n,t,l,a,s,d,i=f[0].content+"",m,u,v,$,_;return{c(){e=c("section"),n=c("div"),t=c("div"),l=c("div"),a=c("div"),s=c("div"),d=c("div"),m=h(),u=c("div"),v=c("div"),$=c("img"),r(d,"class","prose max-w-none"),D($.src,_=f[1])||r($,"src",_),r($,"alt",f[2]),r($,"class","object-contain object-center w-full h-full"),r(v,"class","aspect-square"),r(a,"class","grid grid-cols-2 gap-8 items-center"),r(l,"class","px-8 w-10/12 mx-auto"),r(t,"class","-mx-8"),r(n,"class","container"),r(e,"class","my-20")},m(k,y){x(k,e,y),o(e,n),o(n,t),o(t,l),o(l,a),o(a,s),o(s,d),d.innerHTML=i,o(a,m),o(a,u),o(u,v),o(v,$)},p(k,[y]){y&1&&i!==(i=k[0].content+"")&&(d.innerHTML=i),y&2&&!D($.src,_=k[1])&&r($,"src",_)},i:O,o:O,d(k){k&&g(e)}}}function Fe(f,e,n){let{data:t}=e,l=t.src,a=t.alt;return l=new URL("../../assets/"+t.src,Ye.url).href,console.log(l),f.$$set=s=>{"data"in s&&n(0,t=s.data)},[t,l,a]}class Oe extends N{constructor(e){super();Q(this,e,Fe,ze,A,{data:0})}}const ve=[{name:de,data:{content:'<h1 class="font-headings text-5xl">Passionate about web development.</h1>'}},{name:Oe,data:{content:`<h2 class="font-headings text-3xl">Hi, I'm Melissa Waltner</h2><p>Lorem ipsum dolor sit amet. Est ipsam debitis aut ducimus accusantium eos natus accusantium ut dicta Quis hic quia esse ex quam accusantium. A exercitationem itaque ut perferendis iste et labore neque et exercitationem officia eum voluptas voluptas est libero quia. Ad iure pariatur sed dolores internos et optio deleniti est saepe labore.</p>`,src:"undraw_cat_epte.svg",alt:"cat"}},{name:He,data:{cols:[{content:"<h2>Column Title</h2><p>More content here</p>"},{content:"<h2>Column Title Two</h2><p>More content here too</p>"}]}},{name:de,data:{content:"<h3>More Content</h3><p>Another page, another day.</p>"}}];var Re="/assets/image-qr-code.c38c08d5.png";function Se(f){let e,n,t,l,a,s,d,i,m,u,v,$,_,k,y,q;return{c(){e=c("link"),n=c("link"),t=h(),l=c("main"),a=c("div"),a.innerHTML='<h1 class="text-2xl font-semibold mb-10 mt-6 text-purple-700">QR code component</h1>',s=h(),d=c("section"),i=c("div"),m=c("div"),u=c("div"),v=c("img"),_=h(),k=c("div"),k.innerHTML=`<h2 class="font-bold text-center text-2xl text-[color:var(--dark-blue)] mb-4">Improve your front-end skills by building projects</h2> 
          
          <p class="text-center text-[15px] text-[color:var(--grayish-blue)]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>`,y=h(),q=c("footer"),q.innerHTML=`<div class="container"><div class="text-xs">Challenge by <a class="text-violet-700" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a class="text-violet-700" href="https://github.com/SuiteMel" target="_blank">SuiteMel</a>.</div></div>`,r(e,"rel","icon"),r(e,"type","image/png"),r(e,"sizes","32x32"),r(e,"href","/favicon.ico"),r(n,"href","https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"),r(n,"rel","stylesheet"),document.title="Frontend Mentor | QR code component",r(a,"class","container"),D(v.src,$=Re)||r(v,"src",$),r(v,"alt",""),r(v,"class","rounded-lg mx-auto"),r(u,"class","px-4 pt-4"),r(k,"class","mt-6 px-6 pb-10"),r(m,"class","bg-white rounded-2xl w-fit flex flex-col mx-auto max-w-xs shadow-md"),r(i,"class","container"),r(d,"class","qr-code grid items-center grow py-20 bg-[color:var(--light-gray)] font-['Outfit'] svelte-yf6829"),r(l,"class","flex flex-col"),r(q,"class","bg-violet-100 py-2")},m(w,C){o(document.head,e),o(document.head,n),x(w,t,C),x(w,l,C),o(l,a),o(l,s),o(l,d),o(d,i),o(i,m),o(m,u),o(u,v),o(m,_),o(m,k),x(w,y,C),x(w,q,C)},p:O,i:O,o:O,d(w){g(e),g(n),w&&g(t),w&&g(l),w&&g(y),w&&g(q)}}}class je extends N{constructor(e){super();Q(this,e,null,Se,A,{})}}var Ne="/assets/image-equilibrium.90d2b484.jpg",Qe="/assets/image-avatar.48c39391.png";function Ae(f){let e,n,t,l;return{c(){e=ie("svg"),n=ie("use"),ce(n,"xlink:href",t=`#icon-${f[0]}`),r(e,"class",l="icon icon-"+f[0]+" "+f[1].class),r(e,"viewBox","0 0 32 32")},m(a,s){x(a,e,s),o(e,n)},p(a,[s]){s&1&&t!==(t=`#icon-${a[0]}`)&&ce(n,"xlink:href",t),s&3&&l!==(l="icon icon-"+a[0]+" "+a[1].class)&&r(e,"class",l)},i:O,o:O,d(a){a&&g(e)}}}function Be(f,e,n){let{name:t}=e;return f.$$set=l=>{n(1,e=fe(fe({},e),ue(l))),"name"in l&&n(0,t=l.name)},e=ue(e),[t,e]}class ne extends N{constructor(e){super();Q(this,e,Be,Ae,A,{name:0})}}function Ee(f){let e,n,t,l,a,s,d,i,m,u,v,$,_,k,y,q,w,C,p,b,P,R,j,S,W,J,K,B,se,ae,E,V,I,re,oe,X,ee,U,Y;return q=new ne({props:{name:"view",class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 opacity-0 group-hover:opacity-100"}}),S=new ne({props:{name:"ethereum",class:"mr-1"}}),B=new ne({props:{name:"clock",class:"mr-2"}}),{c(){e=c("link"),n=c("link"),t=h(),l=c("main"),a=c("div"),a.innerHTML='<h1 class="text-2xl font-semibold mb-10 mt-6 text-purple-700">NFT preview card component</h1>',s=h(),d=c("section"),i=c("div"),m=c("div"),u=c("div"),v=c("div"),$=c("a"),_=c("img"),y=h(),H(q.$$.fragment),w=h(),C=c("a"),C.textContent="Equilibrium #3429",p=h(),b=c("p"),b.textContent="Our Equilibrium collection promotes balance and calm.",P=h(),R=c("div"),j=c("p"),H(S.$$.fragment),W=G(`
              0.041 ETH`),J=h(),K=c("p"),H(B.$$.fragment),se=G(`
              3 days left`),ae=h(),E=c("div"),V=c("div"),I=c("img"),oe=h(),X=c("p"),X.innerHTML='Creation of <a href="/" class="text-white hover:text-[color:var(--cyan)]">Jules Wyvern</a>',ee=h(),U=c("footer"),U.innerHTML=`<div class="container"><div class="text-xs">Challenge by <a class="text-violet-700" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a class="text-violet-700" href="https://github.com/SuiteMel" target="_blank">SuiteMel</a>.</div></div>`,r(e,"rel","icon"),r(e,"type","image/png"),r(e,"sizes","32x32"),r(e,"href","/favicon.ico"),r(n,"href","https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"),r(n,"rel","stylesheet"),document.title="Frontend Mentor | NFT preview card component",r(a,"class","container"),D(_.src,k=Ne)||r(_,"src",k),r(_,"alt",""),r(_,"class","object-cover h-full w-full"),r($,"href","/"),r($,"class","block after:block after:bg-[color:var(--cyan)] after:opacity-0 hover:after:opacity-50 after:absolute after:inset-0 group"),r(v,"class","aspect-square rounded-lg bg-blue-700 relative mb-5 overflow-hidden "),r(C,"href","/"),r(C,"class","font-semibold text-white text-2xl mb-5 hover:text-[color:var(--cyan)] block"),r(b,"class","text-lg text-[color:var(--soft-blue)] font-light mb-4"),r(j,"class","text-[color:var(--cyan)] font-semibold flex items-center"),r(K,"class","flex items-center text-[color:var(--soft-blue)]"),r(R,"class","flex justify-between"),D(I.src,re=Qe)||r(I,"src",re),r(I,"alt",""),r(I,"class","object-cover h-full w-full"),r(V,"class","aspect-square rounded-full border border-white w-8"),r(X,"class","ml-4 text-[color:var(--soft-blue)]"),r(E,"class","border-t border-[color:var(--soft-blue)] mt-5 pt-4 flex items-center"),r(u,"class","bg-[color:var(--blue)] p-6 rounded-xl"),r(m,"class","mx-auto max-w-sm"),r(i,"class","container"),r(d,"class","nft-card grid items-center grow py-20 bg-[color:var(--dark-blue)] font-['Outfit'] svelte-1aln82z"),r(l,"class","flex flex-col"),r(U,"class","bg-violet-100 py-2")},m(M,Z){o(document.head,e),o(document.head,n),x(M,t,Z),x(M,l,Z),o(l,a),o(l,s),o(l,d),o(d,i),o(i,m),o(m,u),o(u,v),o(v,$),o($,_),o($,y),z(q,$,null),o(u,w),o(u,C),o(u,p),o(u,b),o(u,P),o(u,R),o(R,j),z(S,j,null),o(j,W),o(R,J),o(R,K),z(B,K,null),o(K,se),o(u,ae),o(u,E),o(E,V),o(V,I),o(E,oe),o(E,X),x(M,ee,Z),x(M,U,Z),Y=!0},p:O,i(M){Y||(T(q.$$.fragment,M),T(S.$$.fragment,M),T(B.$$.fragment,M),Y=!0)},o(M){L(q.$$.fragment,M),L(S.$$.fragment,M),L(B.$$.fragment,M),Y=!1},d(M){g(e),g(n),M&&g(t),M&&g(l),F(q),F(S),F(B),M&&g(ee),M&&g(U)}}}class Ie extends N{constructor(e){super();Q(this,e,null,Ee,A,{})}}function ge(f,e,n){const t=f.slice();return t[0]=e[n],t}function Pe(f){let e;return{c(){e=G("Home")},m(n,t){x(n,e,t)},d(n){n&&g(e)}}}function We(f){let e;return{c(){e=G("QR Code")},m(n,t){x(n,e,t)},d(n){n&&g(e)}}}function Je(f){let e;return{c(){e=G("NFT Card")},m(n,t){x(n,e,t)},d(n){n&&g(e)}}}function he(f){let e,n,t;var l=f[0].name;function a(s){return{props:{data:s[0].data}}}return l&&(e=new l(a(f))),{c(){e&&H(e.$$.fragment),n=we()},m(s,d){e&&z(e,s,d),x(s,n,d),t=!0},p(s,d){if(l!==(l=s[0].name)){if(e){_e();const i=e;L(i.$$.fragment,1,0,()=>{F(i,1)}),xe()}l?(e=new l(a(s)),H(e.$$.fragment),T(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}},i(s){t||(e&&T(e.$$.fragment,s),t=!0)},o(s){e&&L(e.$$.fragment,s),t=!1},d(s){s&&g(n),e&&F(e,s)}}}function Ke(f){let e,n,t,l,a=ve,s=[];for(let i=0;i<a.length;i+=1)s[i]=he(ge(f,a,i));const d=i=>L(s[i],1,1,()=>{s[i]=null});return{c(){e=c("main");for(let i=0;i<s.length;i+=1)s[i].c();n=h(),t=c("footer"),t.innerHTML='<div class="container"><div class="text-xs">Coded by <a class="text-violet-700" href="https://github.com/SuiteMel" target="_blank">SuiteMel</a>.</div></div>',r(e,"class",""),r(t,"class","bg-violet-100 py-2")},m(i,m){x(i,e,m);for(let u=0;u<s.length;u+=1)s[u].m(e,null);x(i,n,m),x(i,t,m),l=!0},p(i,m){if(m&0){a=ve;let u;for(u=0;u<a.length;u+=1){const v=ge(i,a,u);s[u]?(s[u].p(v,m),T(s[u],1)):(s[u]=he(v),s[u].c(),T(s[u],1),s[u].m(e,null))}for(_e(),u=a.length;u<s.length;u+=1)d(u);xe()}},i(i){if(!l){for(let m=0;m<a.length;m+=1)T(s[m]);l=!0}},o(i){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)L(s[m]);l=!1},d(i){i&&g(e),$e(s,i),i&&g(n),i&&g(t)}}}function Ue(f){let e,n;return e=new je({}),{c(){H(e.$$.fragment)},m(t,l){z(e,t,l),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function De(f){let e,n;return e=new Ie({}),{c(){H(e.$$.fragment)},m(t,l){z(e,t,l),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Ge(f){let e,n,t,l,a,s,d,i,m,u,v,$,_,k,y,q,w,C;return d=new te({props:{class:"px-2",to:"/",$$slots:{default:[Pe]},$$scope:{ctx:f}}}),m=new te({props:{class:"px-2",to:"/qr-code",$$slots:{default:[We]},$$scope:{ctx:f}}}),v=new te({props:{class:"px-2",to:"/nft-card",$$slots:{default:[Je]},$$scope:{ctx:f}}}),_=new le({props:{path:"/",$$slots:{default:[Ke]},$$scope:{ctx:f}}}),y=new le({props:{path:"/qr-code",$$slots:{default:[Ue]},$$scope:{ctx:f}}}),w=new le({props:{path:"/nft-card",$$slots:{default:[De]},$$scope:{ctx:f}}}),{c(){e=new ye,n=h(),t=c("div"),l=c("header"),a=c("div"),s=c("nav"),H(d.$$.fragment),i=h(),H(m.$$.fragment),u=h(),H(v.$$.fragment),$=h(),H(_.$$.fragment),k=h(),H(y.$$.fragment),q=h(),H(w.$$.fragment),e.a=n,r(s,"class","-mx-2"),r(a,"class","container"),r(l,"class","bg-violet-500 text-gray-100 py-2"),r(t,"class","wrapper svelte-a32jmc")},m(p,b){e.m(Me,p,b),x(p,n,b),x(p,t,b),o(t,l),o(l,a),o(a,s),z(d,s,null),o(s,i),z(m,s,null),o(s,u),z(v,s,null),o(t,$),z(_,t,null),o(t,k),z(y,t,null),o(t,q),z(w,t,null),C=!0},p(p,b){const P={};b&8&&(P.$$scope={dirty:b,ctx:p}),d.$set(P);const R={};b&8&&(R.$$scope={dirty:b,ctx:p}),m.$set(R);const j={};b&8&&(j.$$scope={dirty:b,ctx:p}),v.$set(j);const S={};b&8&&(S.$$scope={dirty:b,ctx:p}),_.$set(S);const W={};b&8&&(W.$$scope={dirty:b,ctx:p}),y.$set(W);const J={};b&8&&(J.$$scope={dirty:b,ctx:p}),w.$set(J)},i(p){C||(T(d.$$.fragment,p),T(m.$$.fragment,p),T(v.$$.fragment,p),T(_.$$.fragment,p),T(y.$$.fragment,p),T(w.$$.fragment,p),C=!0)},o(p){L(d.$$.fragment,p),L(m.$$.fragment,p),L(v.$$.fragment,p),L(_.$$.fragment,p),L(y.$$.fragment,p),L(w.$$.fragment,p),C=!1},d(p){p&&e.d(),p&&g(n),p&&g(t),F(d),F(m),F(v),F(_),F(y),F(w)}}}function Ve(f){let e,n;return e=new be({props:{$$slots:{default:[Ge]},$$scope:{ctx:f}}}),{c(){H(e.$$.fragment)},m(t,l){z(e,t,l),n=!0},p(t,[l]){const a={};l&8&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}class Xe extends N{constructor(e){super();Q(this,e,null,Ve,A,{})}}new Xe({target:document.getElementById("app")});
