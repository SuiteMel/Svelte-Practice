var ze=Object.defineProperty,qe=Object.defineProperties;var Ke=Object.getOwnPropertyDescriptors;var Qt=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var Wt=(t,e,n)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,j=(t,e)=>{for(var n in e||(e={}))Ye.call(e,n)&&Wt(t,n,e[n]);if(Qt)for(var n of Qt(e))Ge.call(e,n)&&Wt(t,n,e[n]);return t},Z=(t,e)=>qe(t,Ke(e));function H(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function le(t){return t()}function Xt(){return Object.create(null)}function J(t){t.forEach(le)}function fe(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ut;function fo(t,e){return ut||(ut=document.createElement("a")),ut.href=e,t===ut.href}function Ve(t){return Object.keys(t).length===0}function Ct(t,...e){if(t==null)return H;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Q(t){let e;return Ct(t,n=>e=n)(),e}function w(t,e,n){t.$$.on_destroy.push(Ct(e,n))}function Mt(t,e,n,o){if(t){const s=he(t,e,n,o);return t[0](s)}}function he(t,e,n,o){return t[1]&&o?Y(n.ctx.slice(),t[1](o(e))):n.ctx}function Ut(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],u=Math.max(e.dirty.length,s.length);for(let c=0;c<u;c+=1)r[c]=e.dirty[c]|s[c];return r}return e.dirty|s}return e.dirty}function Ft(t,e,n,o,s,r){if(s){const u=he(e,n,o,r);t.p(u,s)}}function Dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function dt(t,e){const n={};e=new Set(e);for(const o in t)!e.has(o)&&o[0]!=="$"&&(n[o]=t[o]);return n}function Qe(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode.removeChild(t)}function ho(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function mo(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function xt(t){return document.createTextNode(t)}function mt(){return xt(" ")}function jt(){return xt("")}function We(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function I(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Jt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)e[o]==null?t.removeAttribute(o):o==="style"?t.style.cssText=e[o]:o==="__value"?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:I(t,o,e[o])}function _o(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Xe(t){return Array.from(t.childNodes)}function Je(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function Ze(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}class go{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,o=null){this.e||(this.e=W(n.nodeName),this.t=n,this.c(e)),this.i(o)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)k(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}let nt;function tt(t){nt=t}function ot(){if(!nt)throw new Error("Function called outside component initialization");return nt}function $e(t){ot().$$.on_mount.push(t)}function tn(t){ot().$$.on_destroy.push(t)}function en(){const t=ot();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=Ze(e,n);o.slice().forEach(r=>{r.call(t,s)})}}}function et(t,e){ot().$$.context.set(t,e)}function B(t){return ot().$$.context.get(t)}const $=[],Zt=[],lt=[],$t=[],de=Promise.resolve();let Lt=!1;function me(){Lt||(Lt=!0,de.then(_e))}function nn(){return me(),de}function wt(t){lt.push(t)}const St=new Set;let at=0;function _e(){const t=nt;do{for(;at<$.length;){const e=$[at];at++,tt(e),on(e.$$)}for(tt(null),$.length=0,at=0;Zt.length;)Zt.pop()();for(let e=0;e<lt.length;e+=1){const n=lt[e];St.has(n)||(St.add(n),n())}lt.length=0}while($.length);for(;$t.length;)$t.pop()();Lt=!1,St.clear(),tt(t)}function on(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(wt)}}const ft=new Set;let K;function Ht(){K={r:0,c:[],p:K}}function Bt(){K.r||J(K.c),K=K.p}function P(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function N(t,e,n,o){if(t&&t.o){if(ft.has(t))return;ft.add(t),K.c.push(()=>{ft.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function ge(t,e){const n={},o={},s={$$scope:1};let r=t.length;for(;r--;){const u=t[r],c=e[r];if(c){for(const a in u)a in c||(o[a]=1);for(const a in c)s[a]||(n[a]=c[a],s[a]=1);t[r]=c}else for(const a in u)s[a]=1}for(const u in o)u in n||(n[u]=void 0);return n}function te(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t){t&&t.c()}function _t(t,e,n,o){const{fragment:s,on_mount:r,on_destroy:u,after_update:c}=t.$$;s&&s.m(e,n),o||wt(()=>{const a=r.map(le).filter(fe);u?u.push(...a):J(a),t.$$.on_mount=[]}),c.forEach(wt)}function gt(t,e){const n=t.$$;n.fragment!==null&&(J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function sn(t,e){t.$$.dirty[0]===-1&&($.push(t),me(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function zt(t,e,n,o,s,r,u,c=[-1]){const a=nt;tt(t);const i=t.$$={fragment:null,ctx:null,props:r,update:H,not_equal:s,bound:Xt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Xt(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};u&&u(i.root);let l=!1;if(i.ctx=n?n(t,e.props||{},(m,_,...g)=>{const p=g.length?g[0]:_;return i.ctx&&s(i.ctx[m],i.ctx[m]=p)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](p),l&&sn(t,m)),_}):[],i.update(),l=!0,J(i.before_update),i.fragment=o?o(i.ctx):!1,e.target){if(e.hydrate){const m=Xe(e.target);i.fragment&&i.fragment.l(m),m.forEach(S)}else i.fragment&&i.fragment.c();e.intro&&P(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),_e()}tt(a)}class qt{$destroy(){gt(this,1),this.$destroy=H}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!Ve(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ee=t=>typeof t=="undefined",pe=t=>typeof t=="function",ye=t=>typeof t=="number";function rn(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function be(){let t=0;return()=>t++}function cn(){return Math.random().toString(36).substring(2)}const z=typeof window=="undefined";function ve(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const V=[];function un(t,e){return{subscribe:O(t,e).subscribe}}function O(t,e=H){let n;const o=new Set;function s(c){if(yt(t,c)&&(t=c,n)){const a=!V.length;for(const i of o)i[1](),V.push(i,t);if(a){for(let i=0;i<V.length;i+=2)V[i][0](V[i+1]);V.length=0}}}function r(c){s(c(t))}function u(c,a=H){const i=[c,a];return o.add(i),o.size===1&&(n=e(s)||H),c(t),()=>{o.delete(i),o.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:u}}function an(t,e,n){const o=!Array.isArray(t),s=o?[t]:t,r=e.length<2;return un(n,u=>{let c=!1;const a=[];let i=0,l=H;const m=()=>{if(i)return;l();const g=e(o?a[0]:a,u);r?u(g):l=fe(g)?g:H},_=s.map((g,p)=>Ct(g,E=>{a[p]=E,i&=~(1<<p),c&&m()},()=>{i|=1<<p}));return c=!0,m(),function(){J(_),l()}})}const st=t=>`@@svnav-ctx__${t}`,Nt=st("LOCATION"),X=st("ROUTER"),Ee=st("ROUTE"),ln=st("ROUTE_PARAMS"),fn=st("FOCUS_ELEM"),Se=/^:(.+)/,Tt=(t,e)=>t.substr(0,e.length)===e,hn=t=>t==="",dn=t=>Se.test(t),Re=t=>t[0]==="*",mn=t=>t.replace(/\*.*$/,""),ke=t=>t.replace(/(^\/+|\/+$)/g,"");function T(t,e=!1){const n=ke(t).split("/");return e?n.filter(Boolean):n}const Rt=(t,e)=>t+(e?`?${e}`:""),Kt=t=>`/${ke(t)}`;function rt(...t){const e=o=>T(o,!0).join("/"),n=t.map(e).join("/");return Kt(n)}const Yt=1,bt=2,G=3,_n=4,Pe=5,gn=6,Ie=7,pn=8,yn=9,Ae=10,Le=11,bn={[Yt]:"Link",[bt]:"Route",[G]:"Router",[_n]:"useFocus",[Pe]:"useLocation",[gn]:"useMatch",[Ie]:"useNavigate",[pn]:"useParams",[yn]:"useResolvable",[Ae]:"useResolve",[Le]:"navigate"},Gt=t=>bn[t];function vn(t,e){let n;return t===bt?n=e.path?`path="${e.path}"`:"default":t===Yt?n=`to="${e.to}"`:t===G&&(n=`basepath="${e.basepath||""}"`),`<${Gt(t)} ${n||""} />`}function En(t,e,n,o){const s=n&&vn(o||t,n),r=s?`

Occurred in: ${s}`:"",u=Gt(t),c=pe(e)?e(u):e;return`<${u}> ${c}${r}`}const we=t=>(...e)=>t(En(...e)),Oe=we(t=>{throw new Error(t)}),pt=we(console.warn),ne=4,Sn=3,Rn=2,kn=1,Pn=1;function In(t,e){const n=t.default?0:T(t.fullPath).reduce((o,s)=>{let r=o;return r+=ne,hn(s)?r+=Pn:dn(s)?r+=Rn:Re(s)?r-=ne+kn:r+=Sn,r},0);return{route:t,score:n,index:e}}function An(t){return t.map(In).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Ne(t,e){let n,o;const[s]=e.split("?"),r=T(s),u=r[0]==="",c=An(t);for(let a=0,i=c.length;a<i;a++){const{route:l}=c[a];let m=!1;const _={},g=b=>Z(j({},l),{params:_,uri:b});if(l.default){o=g(e);continue}const p=T(l.fullPath),E=Math.max(r.length,p.length);let y=0;for(;y<E;y++){const b=p[y],A=r[y];if(!ee(b)&&Re(b)){const v=b==="*"?"*":b.slice(1);_[v]=r.slice(y).map(decodeURIComponent).join("/");break}if(ee(A)){m=!0;break}const R=Se.exec(b);if(R&&!u){const v=decodeURIComponent(A);_[R[1]]=v}else if(b!==A){m=!0;break}}if(!m){n=g(rt(...r.slice(0,y)));break}}return n||o||null}function Te(t,e){return Ne([t],e)}function Ln(t,e){if(Tt(t,"/"))return t;const[n,o]=t.split("?"),[s]=e.split("?"),r=T(n),u=T(s);if(r[0]==="")return Rt(s,o);if(!Tt(r[0],".")){const i=u.concat(r).join("/");return Rt((s==="/"?"":"/")+i,o)}const c=u.concat(r),a=[];return c.forEach(i=>{i===".."?a.pop():i!=="."&&a.push(i)}),Rt(`/${a.join("/")}`,o)}function oe(t,e){const{pathname:n,hash:o="",search:s="",state:r}=t,u=T(e,!0),c=T(n,!0);for(;u.length;)u[0]!==c[0]&&Oe(G,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),u.shift(),c.shift();return{pathname:rt(...c),hash:o,search:s,state:r}}const se=t=>t.length===1?"":t;function Ce(t){const e=t.indexOf("?"),n=t.indexOf("#"),o=e!==-1,s=n!==-1,r=s?se(t.substr(n)):"",u=s?t.substr(0,n):t,c=o?se(u.substr(e)):"";return{pathname:o?u.substr(0,e):u,search:c,hash:r}}function wn(t,e,n){return rt(n,Ln(t,e))}function On(t,e){const n=Kt(mn(t)),o=T(n,!0),s=T(e,!0).slice(0,o.length),r=Te({fullPath:n},rt(...s));return r&&r.uri}const kt="POP",Nn="PUSH",Tn="REPLACE";function Pt(t){return Z(j({},t.location),{pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"})}function Cn(t){let e=[],n=Pt(t),o=kt;const s=(r=e)=>r.forEach(u=>u({location:n,action:o}));return{get location(){return n},listen(r){e.push(r);const u=()=>{n=Pt(t),o=kt,s([r])};s([r]);const c=ve(t,"popstate",u);return()=>{c(),e=e.filter(a=>a!==r)}},navigate(r,u){const{state:c={},replace:a=!1}=u||{};if(o=a?Tn:Nn,ye(r))u&&pt(Le,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=kt,t.history.go(r);else{const i=Z(j({},c),{_key:cn()});try{t.history[a?"replaceState":"pushState"](i,"",r)}catch{t.location[a?"replace":"assign"](r)}}n=Pt(t),s()}}}function It(t,e){return Z(j({},Ce(e)),{state:t})}function Mn(t="/"){let e=0,n=[It(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(o,s,r){e++,n=n.slice(0,e),n.push(It(o,r))},replaceState(o,s,r){n[e]=It(o,r)},go(o){const s=e+o;s<0||s>n.length-1||(e=s)}}}}const Un=!!(!z&&window.document&&window.document.createElement),Fn=!z&&window.location.origin==="null",Dn=Cn(Un&&!Fn?window:Mn());let U=null,Me=!0;function xn(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<n.length;o++){const s=n[o],r=Number(s.dataset.svnavRouter);if(r===t)return!0;if(r===e)return!1}return!1}function jn(t){(!U||t.level>U.level||t.level===U.level&&xn(t.routerId,U.routerId))&&(U=t)}function Hn(){U=null}function Bn(){Me=!1}function re(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=ve(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function zn(t,e){return Number(t.dataset.svnavRouteEnd)===e}function qn(t){return/^H[1-6]$/i.test(t.tagName)}function ie(t,e=document){return e.querySelector(t)}function Kn(t){let n=ie(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!zn(n,t);){if(qn(n))return n;const o=ie("h1,h2,h3,h4,h5,h6",n);if(o)return o;n=n.nextElementSibling}return null}function Yn(t){Promise.resolve(Q(t.focusElement)).then(e=>{const n=e||Kn(t.id);n||pt(G,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,bt),!re(n)&&re(document.documentElement)})}const Gn=(t,e,n)=>(o,s)=>nn().then(()=>{if(!U||Me){Bn();return}if(o&&Yn(U.route),t.announcements&&s){const{path:r,fullPath:u,meta:c,params:a,uri:i}=U.route,l=t.createAnnouncement({path:r,fullPath:u,meta:c,params:a,uri:i},Q(n));Promise.resolve(l).then(m=>{e.set(m)})}Hn()}),Vn="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Qn(t){let e,n;return{c(){e=W("div"),n=xt(t[0]),I(e,"role","status"),I(e,"aria-atomic","true"),I(e,"aria-live","polite"),I(e,"style",Vn)},m(o,s){k(o,e,s),Qe(e,n)},p(o,s){s[0]&1&&Je(n,o[0])},d(o){o&&S(e)}}}function Wn(t){let e,n,o,s,r;const u=t[20].default,c=Mt(u,t,t[19],null);let a=t[2]&&t[4]&&t[1].announcements&&Qn(t);return{c(){e=W("div"),n=mt(),c&&c.c(),o=mt(),a&&a.c(),s=jt(),At(e,"display","none"),I(e,"aria-hidden","true"),I(e,"data-svnav-router",t[3])},m(i,l){k(i,e,l),k(i,n,l),c&&c.m(i,l),k(i,o,l),a&&a.m(i,l),k(i,s,l),r=!0},p(i,l){c&&c.p&&(!r||l[0]&524288)&&Ft(c,u,i,i[19],r?Ut(u,i[19],l,null):Dt(i[19]),null),i[2]&&i[4]&&i[1].announcements&&a.p(i,l)},i(i){r||(P(c,i),r=!0)},o(i){N(c,i),r=!1},d(i){i&&S(e),i&&S(n),c&&c.d(i),i&&S(o),a&&a.d(i),i&&S(s)}}}const Xn=be(),ce="/";function Jn(t,e,n){let o,s,r,u,c,{$$slots:a={},$$scope:i}=e,{basepath:l=ce}=e,{url:m=null}=e,{history:_=Dn}=e,{primary:g=!0}=e,{a11y:p={}}=e;const E=j({createAnnouncement:f=>`Navigated to ${f.uri}`,announcements:!0},p),y=l,b=Kt(l),A=B(Nt),R=B(X),v=!A,F=Xn(),d=g&&!(R&&!R.manageFocus),C=O("");w(t,C,f=>n(0,c=f));const q=O([]);w(t,q,f=>n(18,u=f));const M=O(null);w(t,M,f=>n(16,s=f));let ct=!1;const h=v?0:R.level+1,D=v?O((()=>oe(z?Ce(m):_.location,b))()):A;w(t,D,f=>n(15,o=f));const Et=O(o);w(t,Et,f=>n(17,r=f));const je=Gn(E,C,D),Vt=f=>L=>L.filter(x=>x.id!==f);function He(f){if(z){if(ct)return;const L=Te(f,o.pathname);if(L)return ct=!0,L}else q.update(L=>{const x=Vt(f.id)(L);return x.push(f),x})}function Be(f){q.update(Vt(f))}return!v&&l!==ce&&pt(G,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:l}),v&&($e(()=>_.listen(L=>{const x=oe(L.location,b);Et.set(o),D.set(x)})),et(Nt,D)),et(X,{activeRoute:M,registerRoute:He,unregisterRoute:Be,manageFocus:d,level:h,id:F,history:v?_:R.history,basepath:v?b:R.basepath}),t.$$set=f=>{"basepath"in f&&n(10,l=f.basepath),"url"in f&&n(11,m=f.url),"history"in f&&n(12,_=f.history),"primary"in f&&n(13,g=f.primary),"a11y"in f&&n(14,p=f.a11y),"$$scope"in f&&n(19,i=f.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&1024&&l!==y&&pt(G,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&294912){const f=Ne(u,o.pathname);M.set(f)}if(t.$$.dirty[0]&163840&&v){const f=!!o.hash,L=!f&&d,x=!f||o.pathname!==r.pathname;je(L,x)}t.$$.dirty[0]&65536&&d&&s&&s.primary&&jn({level:h,routerId:F,route:s})},[c,E,v,F,d,C,q,M,D,Et,l,m,_,g,p,o,s,r,u,i,a]}class Zn extends qt{constructor(e){super();zt(this,e,Jn,Wn,yt,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}}function it(t,e,n=X,o=G){B(n)||Oe(t,r=>`You cannot use ${r} outside of a ${Gt(o)}.`,e)}const $n=t=>{const{subscribe:e}=B(t);return{subscribe:e}};function Ue(){return it(Pe),$n(Nt)}function Fe(){const{history:t}=B(X);return t}function De(){const t=B(Ee);return t?an(t,e=>e.base):O("/")}function xe(){it(Ae);const t=De(),{basepath:e}=B(X);return o=>wn(o,Q(t),e)}function to(){it(Ie);const t=xe(),{navigate:e}=Fe();return(o,s)=>{const r=ye(o)?o:t(o);return e(r,s)}}const eo=t=>({params:t&16,location:t&8}),ue=t=>({params:z?Q(t[9]):t[4],location:t[3],navigate:t[10]});function ae(t){let e,n;return e=new Zn({props:{primary:t[1],$$slots:{default:[so]},$$scope:{ctx:t}}}),{c(){Ot(e.$$.fragment)},m(o,s){_t(e,o,s),n=!0},p(o,s){const r={};s&2&&(r.primary=o[1]),s&264217&&(r.$$scope={dirty:s,ctx:o}),e.$set(r)},i(o){n||(P(e.$$.fragment,o),n=!0)},o(o){N(e.$$.fragment,o),n=!1},d(o){gt(e,o)}}}function no(t){let e;const n=t[17].default,o=Mt(n,t,t[18],ue);return{c(){o&&o.c()},m(s,r){o&&o.m(s,r),e=!0},p(s,r){o&&o.p&&(!e||r&262168)&&Ft(o,n,s,s[18],e?Ut(n,s[18],r,eo):Dt(s[18]),ue)},i(s){e||(P(o,s),e=!0)},o(s){N(o,s),e=!1},d(s){o&&o.d(s)}}}function oo(t){let e,n,o;const s=[{location:t[3]},{navigate:t[10]},z?Q(t[9]):t[4],t[11]];var r=t[0];function u(c){let a={};for(let i=0;i<s.length;i+=1)a=Y(a,s[i]);return{props:a}}return r&&(e=new r(u())),{c(){e&&Ot(e.$$.fragment),n=jt()},m(c,a){e&&_t(e,c,a),k(c,n,a),o=!0},p(c,a){const i=a&3608?ge(s,[a&8&&{location:c[3]},a&1024&&{navigate:c[10]},a&528&&te(z?Q(c[9]):c[4]),a&2048&&te(c[11])]):{};if(r!==(r=c[0])){if(e){Ht();const l=e;N(l.$$.fragment,1,0,()=>{gt(l,1)}),Bt()}r?(e=new r(u()),Ot(e.$$.fragment),P(e.$$.fragment,1),_t(e,n.parentNode,n)):e=null}else r&&e.$set(i)},i(c){o||(e&&P(e.$$.fragment,c),o=!0)},o(c){e&&N(e.$$.fragment,c),o=!1},d(c){c&&S(n),e&&gt(e,c)}}}function so(t){let e,n,o,s;const r=[oo,no],u=[];function c(a,i){return a[0]!==null?0:1}return e=c(t),n=u[e]=r[e](t),{c(){n.c(),o=jt()},m(a,i){u[e].m(a,i),k(a,o,i),s=!0},p(a,i){let l=e;e=c(a),e===l?u[e].p(a,i):(Ht(),N(u[l],1,1,()=>{u[l]=null}),Bt(),n=u[e],n?n.p(a,i):(n=u[e]=r[e](a),n.c()),P(n,1),n.m(o.parentNode,o))},i(a){s||(P(n),s=!0)},o(a){N(n),s=!1},d(a){u[e].d(a),a&&S(o)}}}function ro(t){let e,n,o,s,r,u=t[2]&&ae(t);return{c(){e=W("div"),n=mt(),u&&u.c(),o=mt(),s=W("div"),At(e,"display","none"),I(e,"aria-hidden","true"),I(e,"data-svnav-route-start",t[5]),At(s,"display","none"),I(s,"aria-hidden","true"),I(s,"data-svnav-route-end",t[5])},m(c,a){k(c,e,a),k(c,n,a),u&&u.m(c,a),k(c,o,a),k(c,s,a),r=!0},p(c,[a]){c[2]?u?(u.p(c,a),a&4&&P(u,1)):(u=ae(c),u.c(),P(u,1),u.m(o.parentNode,o)):u&&(Ht(),N(u,1,1,()=>{u=null}),Bt())},i(c){r||(P(u),r=!0)},o(c){N(u),r=!1},d(c){c&&S(e),c&&S(n),u&&u.d(c),c&&S(o),c&&S(s)}}}const io=be();function co(t,e,n){let o;const s=["path","component","meta","primary"];let r=dt(e,s),u,c,a,i,{$$slots:l={},$$scope:m}=e,{path:_=""}=e,{component:g=null}=e,{meta:p={}}=e,{primary:E=!0}=e;it(bt,e);const y=io(),{registerRoute:b,unregisterRoute:A,activeRoute:R}=B(X);w(t,R,h=>n(15,u=h));const v=De();w(t,v,h=>n(16,a=h));const F=Ue();w(t,F,h=>n(3,c=h));const d=O(null);let C;const q=O(),M=O({});w(t,M,h=>n(4,i=h)),et(Ee,q),et(ln,M),et(fn,d);const ct=to();return z||tn(()=>A(y)),t.$$set=h=>{n(23,e=Y(Y({},e),ht(h))),n(11,r=dt(e,s)),"path"in h&&n(12,_=h.path),"component"in h&&n(0,g=h.component),"meta"in h&&n(13,p=h.meta),"primary"in h&&n(1,E=h.primary),"$$scope"in h&&n(18,m=h.$$scope)},t.$$.update=()=>{if(t.$$.dirty&77834){const h=_==="",vt=rt(a,_),D={id:y,path:_,meta:p,default:h,fullPath:h?"":vt,base:h?a:On(vt,c.pathname),primary:E,focusElement:d};q.set(D),n(14,C=b(D))}if(t.$$.dirty&49152&&n(2,o=!!(C||u&&u.id===y)),t.$$.dirty&49156&&o){const{params:h}=C||u;M.set(h)}},e=ht(e),[g,E,o,c,i,y,R,v,F,M,ct,r,_,p,C,u,a,l,m]}class po extends qt{constructor(e){super();zt(this,e,co,ro,yt,{path:12,component:0,meta:13,primary:1})}}function uo(t){let e,n,o,s;const r=t[13].default,u=Mt(r,t,t[12],null);let c=[{href:t[0]},t[2],t[1]],a={};for(let i=0;i<c.length;i+=1)a=Y(a,c[i]);return{c(){e=W("a"),u&&u.c(),Jt(e,a)},m(i,l){k(i,e,l),u&&u.m(e,null),n=!0,o||(s=We(e,"click",t[4]),o=!0)},p(i,[l]){u&&u.p&&(!n||l&4096)&&Ft(u,r,i,i[12],n?Ut(r,i[12],l,null):Dt(i[12]),null),Jt(e,a=ge(c,[(!n||l&1)&&{href:i[0]},l&4&&i[2],l&2&&i[1]]))},i(i){n||(P(u,i),n=!0)},o(i){N(u,i),n=!1},d(i){i&&S(e),u&&u.d(i),o=!1,s()}}}function ao(t,e,n){let o,s,r,u,c;const a=["to","replace","state","getProps"];let i=dt(e,a),l,{$$slots:m={},$$scope:_}=e,{to:g}=e,{replace:p=!1}=e,{state:E={}}=e,{getProps:y=null}=e;it(Yt,e);const b=Ue();w(t,b,d=>n(11,l=d));const A=en(),R=xe(),{navigate:v}=Fe();function F(d){A("click",d),rn(d)&&(d.preventDefault(),v(o,{state:E,replace:r||p}))}return t.$$set=d=>{n(18,e=Y(Y({},e),ht(d))),n(17,i=dt(e,a)),"to"in d&&n(5,g=d.to),"replace"in d&&n(6,p=d.replace),"state"in d&&n(7,E=d.state),"getProps"in d&&n(8,y=d.getProps),"$$scope"in d&&n(12,_=d.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,o=R(g,l)),t.$$.dirty&2049&&n(10,s=Tt(l.pathname,o)),t.$$.dirty&2049&&n(9,r=o===l.pathname),t.$$.dirty&512&&n(2,u=r?{"aria-current":"page"}:{}),n(1,c=(()=>{if(pe(y)){const d=y({location:l,href:o,isPartiallyCurrent:s,isCurrent:r});return j(j({},i),d)}return i})())},e=ht(e),[o,c,u,b,F,g,p,E,y,r,s,l,_,m]}class yo extends qt{constructor(e){super();zt(this,e,ao,uo,yt,{to:5,replace:6,state:7,getProps:8})}}export{go as H,yo as L,Zn as R,qt as S,I as a,k as b,Qe as c,S as d,W as e,mt as f,ho as g,fo as h,zt as i,mo as j,Y as k,ht as l,Ot as m,H as n,_t as o,P as p,N as q,gt as r,yt as s,xt as t,po as u,jt as v,Ht as w,_o as x,Bt as y};
