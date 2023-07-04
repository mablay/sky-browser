function Cl(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const tt={},lr=[],fn=()=>{},Bp=()=>!1,Hp=/^on[^a-z]/,Ms=t=>Hp.test(t),Pl=t=>t.startsWith("onUpdate:"),ht=Object.assign,Ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kp=Object.prototype.hasOwnProperty,je=(t,e)=>kp.call(t,e),Ie=Array.isArray,cr=t=>Es(t)==="[object Map]",rh=t=>Es(t)==="[object Set]",zp=t=>Es(t)==="[object RegExp]",Oe=t=>typeof t=="function",it=t=>typeof t=="string",Ul=t=>typeof t=="symbol",Qe=t=>t!==null&&typeof t=="object",sh=t=>Qe(t)&&Oe(t.then)&&Oe(t.catch),oh=Object.prototype.toString,Es=t=>oh.call(t),Vp=t=>Es(t).slice(8,-1),ah=t=>Es(t)==="[object Object]",Dl=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qr=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Do=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gp=/-(\w)/g,En=Do(t=>t.replace(Gp,(e,n)=>n?n.toUpperCase():"")),Wp=/\B([A-Z])/g,Pr=Do(t=>t.replace(Wp,"-$1").toLowerCase()),Io=Do(t=>t.charAt(0).toUpperCase()+t.slice(1)),na=Do(t=>t?`on${Io(t)}`:""),us=(t,e)=>!Object.is(t,e),es=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},go=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xp=t=>{const e=parseFloat(t);return isNaN(e)?t:e},lh=t=>{const e=it(t)?Number(t):NaN;return isNaN(e)?t:e};let xc;const Ya=()=>xc||(xc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function No(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=it(i)?Yp(i):No(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(it(t))return t;if(Qe(t))return t}}const jp=/;(?![^(]*\))/g,$p=/:([^]+)/,qp=/\/\*[^]*?\*\//g;function Yp(t){const e={};return t.replace(qp,"").split(jp).forEach(n=>{if(n){const i=n.split($p);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Oo(t){let e="";if(it(t))e=t;else if(Ie(t))for(let n=0;n<t.length;n++){const i=Oo(t[n]);i&&(e+=i+" ")}else if(Qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Kp(t){if(!t)return null;let{class:e,style:n}=t;return e&&!it(e)&&(t.class=Oo(e)),n&&(t.style=No(n)),t}const Zp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jp=Cl(Zp);function ch(t){return!!t||t===""}const QA=t=>it(t)?t:t==null?"":Ie(t)||Qe(t)&&(t.toString===oh||!Oe(t.toString))?JSON.stringify(t,uh,2):String(t),uh=(t,e)=>e&&e.__v_isRef?uh(t,e.value):cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:rh(e)?{[`Set(${e.size})`]:[...e.values()]}:Qe(e)&&!Ie(e)&&!ah(e)?String(e):e;let Xt;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Xt;try{return Xt=this,e()}finally{Xt=n}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function em(t,e=Xt){e&&e.active&&e.effects.push(t)}function tm(){return Xt}function ew(t){Xt&&Xt.cleanups.push(t)}const Il=t=>{const e=new Set(t);return e.w=0,e.n=0,e},fh=t=>(t.w&ai)>0,hh=t=>(t.n&ai)>0,nm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ai},im=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];fh(r)&&!hh(r)?r.delete(t):e[n++]=r,r.w&=~ai,r.n&=~ai}e.length=n}},_o=new WeakMap;let qr=0,ai=1;const Ka=30;let ln;const Ai=Symbol(""),Za=Symbol("");class Nl{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,em(this,i)}run(){if(!this.active)return this.fn();let e=ln,n=ii;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ln,ln=this,ii=!0,ai=1<<++qr,qr<=Ka?nm(this):yc(this),this.fn()}finally{qr<=Ka&&im(this),ai=1<<--qr,ln=this.parent,ii=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ln===this?this.deferStop=!0:this.active&&(yc(this),this.onStop&&this.onStop(),this.active=!1)}}function yc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ii=!0;const dh=[];function Lr(){dh.push(ii),ii=!1}function Ur(){const t=dh.pop();ii=t===void 0?!0:t}function zt(t,e,n){if(ii&&ln){let i=_o.get(t);i||_o.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Il()),ph(r)}}function ph(t,e){let n=!1;qr<=Ka?hh(t)||(t.n|=ai,n=!fh(t)):n=!t.has(ln),n&&(t.add(ln),ln.deps.push(t))}function kn(t,e,n,i,r,s){const o=_o.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Ie(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Ie(t)?Dl(n)&&a.push(o.get("length")):(a.push(o.get(Ai)),cr(t)&&a.push(o.get(Za)));break;case"delete":Ie(t)||(a.push(o.get(Ai)),cr(t)&&a.push(o.get(Za)));break;case"set":cr(t)&&a.push(o.get(Ai));break}if(a.length===1)a[0]&&Ja(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ja(Il(l))}}function Ja(t,e){const n=Ie(t)?t:[...t];for(const i of n)i.computed&&Mc(i);for(const i of n)i.computed||Mc(i)}function Mc(t,e){(t!==ln||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function rm(t,e){var n;return(n=_o.get(t))==null?void 0:n.get(e)}const sm=Cl("__proto__,__v_isRef,__isVue"),mh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ul)),om=Ol(),am=Ol(!1,!0),lm=Ol(!0),Ec=cm();function cm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=$e(this);for(let s=0,o=this.length;s<o;s++)zt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lr();const i=$e(this)[e].apply(this,n);return Ur(),i}}),t}function um(t){const e=$e(this);return zt(e,"has",t),e.hasOwnProperty(t)}function Ol(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Am:yh:e?xh:vh).get(i))return i;const o=Ie(i);if(!t){if(o&&je(Ec,r))return Reflect.get(Ec,r,s);if(r==="hasOwnProperty")return um}const a=Reflect.get(i,r,s);return(Ul(r)?mh.has(r):sm(r))||(t||zt(i,"get",r),e)?a:pt(a)?o&&Dl(r)?a:a.value:Qe(a)?t?Eh(a):dn(a):a}}const fm=gh(),hm=gh(!0);function gh(t=!1){return function(n,i,r,s){let o=n[i];if(Di(o)&&pt(o)&&!pt(r))return!1;if(!t&&(!vo(r)&&!Di(r)&&(o=$e(o),r=$e(r)),!Ie(n)&&pt(o)&&!pt(r)))return o.value=r,!0;const a=Ie(n)&&Dl(i)?Number(i)<n.length:je(n,i),l=Reflect.set(n,i,r,s);return n===$e(s)&&(a?us(r,o)&&kn(n,"set",i,r):kn(n,"add",i,r)),l}}function dm(t,e){const n=je(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&kn(t,"delete",e,void 0),i}function pm(t,e){const n=Reflect.has(t,e);return(!Ul(e)||!mh.has(e))&&zt(t,"has",e),n}function mm(t){return zt(t,"iterate",Ie(t)?"length":Ai),Reflect.ownKeys(t)}const _h={get:om,set:fm,deleteProperty:dm,has:pm,ownKeys:mm},gm={get:lm,set(t,e){return!0},deleteProperty(t,e){return!0}},_m=ht({},_h,{get:am,set:hm}),Fl=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function Us(t,e,n=!1,i=!1){t=t.__v_raw;const r=$e(t),s=$e(e);n||(e!==s&&zt(r,"get",e),zt(r,"get",s));const{has:o}=Fo(r),a=i?Fl:n?kl:fs;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Ds(t,e=!1){const n=this.__v_raw,i=$e(n),r=$e(t);return e||(t!==r&&zt(i,"has",t),zt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Is(t,e=!1){return t=t.__v_raw,!e&&zt($e(t),"iterate",Ai),Reflect.get(t,"size",t)}function Sc(t){t=$e(t);const e=$e(this);return Fo(e).has.call(e,t)||(e.add(t),kn(e,"add",t,t)),this}function bc(t,e){e=$e(e);const n=$e(this),{has:i,get:r}=Fo(n);let s=i.call(n,t);s||(t=$e(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?us(e,o)&&kn(n,"set",t,e):kn(n,"add",t,e),this}function Tc(t){const e=$e(this),{has:n,get:i}=Fo(e);let r=n.call(e,t);r||(t=$e(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&kn(e,"delete",t,void 0),s}function Ac(){const t=$e(this),e=t.size!==0,n=t.clear();return e&&kn(t,"clear",void 0,void 0),n}function Ns(t,e){return function(i,r){const s=this,o=s.__v_raw,a=$e(o),l=e?Fl:t?kl:fs;return!t&&zt(a,"iterate",Ai),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Os(t,e,n){return function(...i){const r=this.__v_raw,s=$e(r),o=cr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Fl:e?kl:fs;return!e&&zt(s,"iterate",l?Za:Ai),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Gn(t){return function(...e){return t==="delete"?!1:this}}function vm(){const t={get(s){return Us(this,s)},get size(){return Is(this)},has:Ds,add:Sc,set:bc,delete:Tc,clear:Ac,forEach:Ns(!1,!1)},e={get(s){return Us(this,s,!1,!0)},get size(){return Is(this)},has:Ds,add:Sc,set:bc,delete:Tc,clear:Ac,forEach:Ns(!1,!0)},n={get(s){return Us(this,s,!0)},get size(){return Is(this,!0)},has(s){return Ds.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:Ns(!0,!1)},i={get(s){return Us(this,s,!0,!0)},get size(){return Is(this,!0)},has(s){return Ds.call(this,s,!0)},add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear"),forEach:Ns(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Os(s,!1,!1),n[s]=Os(s,!0,!1),e[s]=Os(s,!1,!0),i[s]=Os(s,!0,!0)}),[t,n,e,i]}const[xm,ym,Mm,Em]=vm();function Bl(t,e){const n=e?t?Em:Mm:t?ym:xm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(je(n,r)&&r in i?n:i,r,s)}const Sm={get:Bl(!1,!1)},bm={get:Bl(!1,!0)},Tm={get:Bl(!0,!1)},vh=new WeakMap,xh=new WeakMap,yh=new WeakMap,Am=new WeakMap;function wm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rm(t){return t.__v_skip||!Object.isExtensible(t)?0:wm(Vp(t))}function dn(t){return Di(t)?t:Hl(t,!1,_h,Sm,vh)}function Mh(t){return Hl(t,!1,_m,bm,xh)}function Eh(t){return Hl(t,!0,gm,Tm,yh)}function Hl(t,e,n,i,r){if(!Qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Rm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function ur(t){return Di(t)?ur(t.__v_raw):!!(t&&t.__v_isReactive)}function Di(t){return!!(t&&t.__v_isReadonly)}function vo(t){return!!(t&&t.__v_isShallow)}function Sh(t){return ur(t)||Di(t)}function $e(t){const e=t&&t.__v_raw;return e?$e(e):t}function bh(t){return go(t,"__v_skip",!0),t}const fs=t=>Qe(t)?dn(t):t,kl=t=>Qe(t)?Eh(t):t;function Th(t){ii&&ln&&(t=$e(t),ph(t.dep||(t.dep=Il())))}function Ah(t,e){t=$e(t);const n=t.dep;n&&Ja(n)}function pt(t){return!!(t&&t.__v_isRef===!0)}function hn(t){return wh(t,!1)}function hs(t){return wh(t,!0)}function wh(t,e){return pt(t)?t:new Cm(t,e)}class Cm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$e(e),this._value=n?e:fs(e)}get value(){return Th(this),this._value}set value(e){const n=this.__v_isShallow||vo(e)||Di(e);e=n?e:$e(e),us(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fs(e),Ah(this))}}function nt(t){return pt(t)?t.value:t}const Pm={get:(t,e,n)=>nt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return pt(r)&&!pt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Rh(t){return ur(t)?t:new Proxy(t,Pm)}class Lm{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rm($e(this._object),this._key)}}class Um{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ch(t,e,n){return pt(t)?t:Oe(t)?new Um(t):Qe(t)&&arguments.length>1?Dm(t,e,n):hn(t)}function Dm(t,e,n){const i=t[e];return pt(i)?i:new Lm(t,e,n)}class Im{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Nl(e,()=>{this._dirty||(this._dirty=!0,Ah(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=$e(this);return Th(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Nm(t,e,n=!1){let i,r;const s=Oe(t);return s?(i=t,r=fn):(i=t.get,r=t.set),new Im(i,r,s||!r,n)}function ri(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Dr(s,e,n)}return r}function Qt(t,e,n,i){if(Oe(t)){const s=ri(t,e,n,i);return s&&sh(s)&&s.catch(o=>{Dr(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(Qt(t[s],e,n,i));return r}function Dr(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ri(l,null,10,[t,o,a]);return}}Om(t,n,r,i)}function Om(t,e,n,i=!0){console.error(t)}let ds=!1,Qa=!1;const wt=[];let xn=0;const fr=[];let In=null,Ei=0;const Ph=Promise.resolve();let zl=null;function Ir(t){const e=zl||Ph;return t?e.then(this?t.bind(this):t):e}function Fm(t){let e=xn+1,n=wt.length;for(;e<n;){const i=e+n>>>1;ps(wt[i])<t?e=i+1:n=i}return e}function Bo(t){(!wt.length||!wt.includes(t,ds&&t.allowRecurse?xn+1:xn))&&(t.id==null?wt.push(t):wt.splice(Fm(t.id),0,t),Lh())}function Lh(){!ds&&!Qa&&(Qa=!0,zl=Ph.then(Dh))}function Bm(t){const e=wt.indexOf(t);e>xn&&wt.splice(e,1)}function Uh(t){Ie(t)?fr.push(...t):(!In||!In.includes(t,t.allowRecurse?Ei+1:Ei))&&fr.push(t),Lh()}function wc(t,e=ds?xn+1:0){for(;e<wt.length;e++){const n=wt[e];n&&n.pre&&(wt.splice(e,1),e--,n())}}function xo(t){if(fr.length){const e=[...new Set(fr)];if(fr.length=0,In){In.push(...e);return}for(In=e,In.sort((n,i)=>ps(n)-ps(i)),Ei=0;Ei<In.length;Ei++)In[Ei]();In=null,Ei=0}}const ps=t=>t.id==null?1/0:t.id,Hm=(t,e)=>{const n=ps(t)-ps(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Dh(t){Qa=!1,ds=!0,wt.sort(Hm);const e=fn;try{for(xn=0;xn<wt.length;xn++){const n=wt[xn];n&&n.active!==!1&&ri(n,null,14)}}finally{xn=0,wt.length=0,xo(),ds=!1,zl=null,(wt.length||fr.length)&&Dh()}}function km(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||tt;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||tt;h&&(r=n.map(p=>it(p)?p.trim():p)),f&&(r=n.map(Xp))}let a,l=i[a=na(e)]||i[a=na(En(e))];!l&&s&&(l=i[a=na(Pr(e))]),l&&Qt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qt(c,t,6,r)}}function Ih(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Oe(t)){const l=c=>{const u=Ih(c,e,!0);u&&(a=!0,ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Qe(t)&&i.set(t,null),null):(Ie(s)?s.forEach(l=>o[l]=null):ht(o,s),Qe(t)&&i.set(t,o),o)}function Ho(t,e){return!t||!Ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(t,e[0].toLowerCase()+e.slice(1))||je(t,Pr(e))||je(t,e))}let Bt=null,ko=null;function yo(t){const e=Bt;return Bt=t,ko=t&&t.type.__scopeId||null,e}function tw(t){ko=t}function nw(){ko=null}function Nh(t,e=Bt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&zc(-1);const s=yo(e);let o;try{o=t(...r)}finally{yo(s),i._d&&zc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ia(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:v}=t;let m,d;const _=yo(t);try{if(n.shapeFlag&4){const M=r||i;m=Kt(u.call(M,M,f,s,p,h,g)),d=l}else{const M=e;m=Kt(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),d=e.props?l:Vm(l)}}catch(M){ns.length=0,Dr(M,t,1),m=ft(Ht)}let x=m;if(d&&v!==!1){const M=Object.keys(d),{shapeFlag:b}=x;M.length&&b&7&&(o&&M.some(Pl)&&(d=Gm(d,o)),x=zn(x,d))}return n.dirs&&(x=zn(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),m=x,yo(_),m}function zm(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(_s(i)){if(i.type!==Ht||i.children==="v-if"){if(e)return;e=i}}else return}return e}const Vm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ms(n))&&((e||(e={}))[n]=t[n]);return e},Gm=(t,e)=>{const n={};for(const i in t)(!Pl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Wm(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Rc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Ho(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Rc(i,o,c):!0:!!o;return!1}function Rc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ho(n,s))return!0}return!1}function Vl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Oh=t=>t.__isSuspense,Xm={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){t==null?jm(e,n,i,r,s,o,a,l,c):$m(t,e,n,i,r,o,a,l,c)},hydrate:qm,create:Gl,normalize:Ym},Fh=Xm;function ms(t,e){const n=t.props&&t.props[e];Oe(n)&&n()}function jm(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=Gl(t,r,i,e,f,n,s,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,i,h,s,o),h.deps>0?(ms(t,"onPending"),ms(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),hr(h,t.ssFallback)):h.resolve(!1,!0)}function $m(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,p=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:m,isHydrating:d}=f;if(v)f.pendingBranch=h,cn(h,v)?(l(v,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(l(g,p,n,i,r,null,s,o,a),hr(f,p))):(f.pendingId++,d?(f.isHydrating=!1,f.activeBranch=v):c(v,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,p,n,i,r,null,s,o,a),hr(f,p))):g&&cn(h,g)?(l(g,h,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&cn(h,g))l(g,h,n,i,r,f,s,o,a),hr(f,h);else if(ms(e,"onPending"),f.pendingBranch=h,f.pendingId++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:_,pendingId:x}=f;_>0?setTimeout(()=>{f.pendingId===x&&f.fallback(p)},_):_===0&&f.fallback(p)}}function Gl(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:h,um:p,n:g,o:{parentNode:v,remove:m}}=c;let d;const _=Km(t);_&&e!=null&&e.pendingBranch&&(d=e.pendingId,e.deps++);const x=t.props?lh(t.props.timeout):void 0,M={vnode:t,parent:e,parentComponent:n,isSVG:o,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(b=!1,C=!1){const{vnode:L,activeBranch:P,pendingBranch:S,pendingId:A,effects:k,parentComponent:G,container:O}=M;if(M.isHydrating)M.isHydrating=!1;else if(!b){const te=P&&S.transition&&S.transition.mode==="out-in";te&&(P.transition.afterLeave=()=>{A===M.pendingId&&h(S,O,$,0)});let{anchor:$}=M;P&&($=g(P),p(P,G,M,!0)),te||h(S,O,$,0)}hr(M,S),M.pendingBranch=null,M.isInFallback=!1;let I=M.parent,j=!1;for(;I;){if(I.pendingBranch){I.effects.push(...k),j=!0;break}I=I.parent}j||Uh(k),M.effects=[],_&&e&&e.pendingBranch&&d===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),ms(L,"onResolve")},fallback(b){if(!M.pendingBranch)return;const{vnode:C,activeBranch:L,parentComponent:P,container:S,isSVG:A}=M;ms(C,"onFallback");const k=g(L),G=()=>{M.isInFallback&&(f(null,b,S,k,P,null,A,a,l),hr(M,b))},O=b.transition&&b.transition.mode==="out-in";O&&(L.transition.afterLeave=G),M.isInFallback=!0,p(L,P,null,!0),O||G()},move(b,C,L){M.activeBranch&&h(M.activeBranch,b,C,L),M.container=b},next(){return M.activeBranch&&g(M.activeBranch)},registerDep(b,C){const L=!!M.pendingBranch;L&&M.deps++;const P=b.vnode.el;b.asyncDep.catch(S=>{Dr(S,b,0)}).then(S=>{if(b.isUnmounted||M.isUnmounted||M.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:A}=b;sl(b,S,!1),P&&(A.el=P);const k=!P&&b.subTree.el;C(b,A,v(P||b.subTree.el),P?null:g(b.subTree),M,o,l),k&&m(k),Vl(b,A.el),L&&--M.deps===0&&M.resolve()})},unmount(b,C){M.isUnmounted=!0,M.activeBranch&&p(M.activeBranch,n,b,C),M.pendingBranch&&p(M.pendingBranch,n,b,C)}};return M}function qm(t,e,n,i,r,s,o,a,l){const c=e.suspense=Gl(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function Ym(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Cc(i?n.default:n),t.ssFallback=i?Cc(n.fallback):ft(Ht)}function Cc(t){let e;if(Oe(t)){const n=yr&&t._c;n&&(t._d=!1,yn()),t=t(),n&&(t._d=!0,e=Jt,od())}return Ie(t)&&(t=zm(t)),t=Kt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Bh(t,e){e&&e.pendingBranch?Ie(t)?e.effects.push(...t):e.effects.push(t):Uh(t)}function hr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,r=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=r,Vl(i,r))}function Km(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function Zm(t,e){return Wl(t,null,e)}const Fs={};function dr(t,e,n){return Wl(t,e,n)}function Wl(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=tt){var a;const l=tm()===((a=ut)==null?void 0:a.scope)?ut:null;let c,u=!1,f=!1;if(pt(t)?(c=()=>t.value,u=vo(t)):ur(t)?(c=()=>t,i=!0):Ie(t)?(f=!0,u=t.some(M=>ur(M)||vo(M)),c=()=>t.map(M=>{if(pt(M))return M.value;if(ur(M))return Ti(M);if(Oe(M))return ri(M,l,2)})):Oe(t)?e?c=()=>ri(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Qt(t,l,3,[p])}:c=fn,e&&i){const M=c;c=()=>Ti(M())}let h,p=M=>{h=_.onStop=()=>{ri(M,l,4)}},g;if(Er)if(p=fn,e?n&&Qt(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const M=zg();g=M.__watcherHandles||(M.__watcherHandles=[])}else return fn;let v=f?new Array(t.length).fill(Fs):Fs;const m=()=>{if(_.active)if(e){const M=_.run();(i||u||(f?M.some((b,C)=>us(b,v[C])):us(M,v)))&&(h&&h(),Qt(e,l,3,[M,v===Fs?void 0:f&&v[0]===Fs?[]:v,p]),v=M)}else _.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>Mt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Bo(m));const _=new Nl(c,d);e?n?m():v=_.run():r==="post"?Mt(_.run.bind(_),l&&l.suspense):_.run();const x=()=>{_.stop(),l&&l.scope&&Ll(l.scope.effects,_)};return g&&g.push(x),x}function Jm(t,e,n){const i=this.proxy,r=it(t)?t.includes(".")?Hh(i,t):()=>i[t]:t.bind(i,i);let s;Oe(e)?s=e:(s=e.handler,n=e);const o=ut;Mr(this);const a=Wl(r,s.bind(i),n);return o?Mr(o):wi(),a}function Hh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Ti(t,e){if(!Qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pt(t))Ti(t.value,e);else if(Ie(t))for(let n=0;n<t.length;n++)Ti(t[n],e);else if(rh(t)||cr(t))t.forEach(n=>{Ti(n,e)});else if(ah(t))for(const n in t)Ti(t[n],e);return t}function iw(t,e){const n=Bt;if(n===null)return t;const i=Xo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=tt]=e[s];o&&(Oe(o)&&(o={mounted:o,updated:o}),o.deep&&Ti(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function _n(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Lr(),Qt(l,n,8,[t.el,a,t,e]),Ur())}}function Qm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vo(()=>{t.isMounted=!0}),Go(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],kh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},eg={name:"BaseTransition",props:kh,setup(t,{slots:e}){const n=bs(),i=Qm();let r;return()=>{const s=e.default&&Vh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const v of s)if(v.type!==Ht){o=v;break}}const a=$e(t),{mode:l}=a;if(i.isLeaving)return ra(o);const c=Pc(o);if(!c)return ra(o);const u=el(c,a,i,n);Mo(c,u);const f=n.subTree,h=f&&Pc(f);let p=!1;const{getTransitionKey:g}=c.type;if(g){const v=g();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(h&&h.type!==Ht&&(!cn(c,h)||p)){const v=el(h,a,i,n);if(Mo(h,v),l==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},ra(o);l==="in-out"&&c.type!==Ht&&(v.delayLeave=(m,d,_)=>{const x=zh(i,h);x[String(h.key)]=h,m._leaveCb=()=>{d(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=_})}return o}}},tg=eg;function zh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function el(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:d,onAppearCancelled:_}=e,x=String(t.key),M=zh(n,t),b=(P,S)=>{P&&Qt(P,i,9,S)},C=(P,S)=>{const A=S[1];b(P,S),Ie(P)?P.every(k=>k.length<=1)&&A():P.length<=1&&A()},L={mode:s,persisted:o,beforeEnter(P){let S=a;if(!n.isMounted)if(r)S=v||a;else return;P._leaveCb&&P._leaveCb(!0);const A=M[x];A&&cn(t,A)&&A.el._leaveCb&&A.el._leaveCb(),b(S,[P])},enter(P){let S=l,A=c,k=u;if(!n.isMounted)if(r)S=m||l,A=d||c,k=_||u;else return;let G=!1;const O=P._enterCb=I=>{G||(G=!0,I?b(k,[P]):b(A,[P]),L.delayedLeave&&L.delayedLeave(),P._enterCb=void 0)};S?C(S,[P,O]):O()},leave(P,S){const A=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return S();b(f,[P]);let k=!1;const G=P._leaveCb=O=>{k||(k=!0,S(),O?b(g,[P]):b(p,[P]),P._leaveCb=void 0,M[A]===t&&delete M[A])};M[A]=t,h?C(h,[P,G]):G()},clone(P){return el(P,e,n,i)}};return L}function ra(t){if(Ss(t))return t=zn(t),t.children=null,t}function Pc(t){return Ss(t)?t.children?t.children[0]:void 0:t}function Mo(t,e){t.shapeFlag&6&&t.component?Mo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Yt?(o.patchFlag&128&&r++,i=i.concat(Vh(o.children,e,a))):(e||o.type!==Ht)&&i.push(a!=null?zn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Nr(t,e){return Oe(t)?(()=>ht({name:t.name},e,{setup:t}))():t}const pr=t=>!!t.type.__asyncLoader;function Lc(t){Oe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let p;return l||(p=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((v,m)=>{a(g,()=>v(f()),()=>m(g),u+1)});throw g}).then(g=>p!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return Nr({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const p=ut;if(c)return()=>sa(c,p);const g=_=>{l=null,Dr(_,p,13,!i)};if(o&&p.suspense||Er)return h().then(_=>()=>sa(_,p)).catch(_=>(g(_),()=>i?ft(i,{error:_}):null));const v=hn(!1),m=hn(),d=hn(!!r);return r&&setTimeout(()=>{d.value=!1},r),s!=null&&setTimeout(()=>{if(!v.value&&!m.value){const _=new Error(`Async component timed out after ${s}ms.`);g(_),m.value=_}},s),h().then(()=>{v.value=!0,p.parent&&Ss(p.parent.vnode)&&Bo(p.parent.update)}).catch(_=>{g(_),m.value=_}),()=>{if(v.value&&c)return sa(c,p);if(m.value&&i)return ft(i,{error:m.value});if(n&&!d.value)return ft(n)}}})}function sa(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=ft(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Ss=t=>t.type.__isKeepAlive,ng={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=bs(),i=n.ctx;if(!i.renderer)return()=>{const _=e.default&&e.default();return _&&_.length===1?_[0]:_};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(_,x,M,b,C)=>{const L=_.component;c(_,x,M,0,a),l(L.vnode,_,x,M,L,a,b,_.slotScopeIds,C),Mt(()=>{L.isDeactivated=!1,L.a&&es(L.a);const P=_.props&&_.props.onVnodeMounted;P&&Ot(P,L.parent,_)},a)},i.deactivate=_=>{const x=_.component;c(_,h,null,1,a),Mt(()=>{x.da&&es(x.da);const M=_.props&&_.props.onVnodeUnmounted;M&&Ot(M,x.parent,_),x.isDeactivated=!0},a)};function p(_){oa(_),u(_,n,a,!0)}function g(_){r.forEach((x,M)=>{const b=ol(x.type);b&&(!_||!_(b))&&v(M)})}function v(_){const x=r.get(_);!o||!cn(x,o)?p(x):o&&oa(o),r.delete(_),s.delete(_)}dr(()=>[t.include,t.exclude],([_,x])=>{_&&g(M=>Yr(_,M)),x&&g(M=>!Yr(x,M))},{flush:"post",deep:!0});let m=null;const d=()=>{m!=null&&r.set(m,aa(n.subTree))};return Vo(d),jh(d),Go(()=>{r.forEach(_=>{const{subTree:x,suspense:M}=n,b=aa(x);if(_.type===b.type&&_.key===b.key){oa(b);const C=b.component.da;C&&Mt(C,M);return}p(_)})}),()=>{if(m=null,!e.default)return null;const _=e.default(),x=_[0];if(_.length>1)return o=null,_;if(!_s(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return o=null,x;let M=aa(x);const b=M.type,C=ol(pr(M)?M.type.__asyncResolved||{}:b),{include:L,exclude:P,max:S}=t;if(L&&(!C||!Yr(L,C))||P&&C&&Yr(P,C))return o=M,x;const A=M.key==null?b:M.key,k=r.get(A);return M.el&&(M=zn(M),x.shapeFlag&128&&(x.ssContent=M)),m=A,k?(M.el=k.el,M.component=k.component,M.transition&&Mo(M,M.transition),M.shapeFlag|=512,s.delete(A),s.add(A)):(s.add(A),S&&s.size>parseInt(S,10)&&v(s.values().next().value)),M.shapeFlag|=256,o=M,Oh(x.type)?x:M}}},ig=ng;function Yr(t,e){return Ie(t)?t.some(n=>Yr(n,e)):it(t)?t.split(",").includes(e):zp(t)?t.test(e):!1}function Gh(t,e){Xh(t,"a",e)}function Wh(t,e){Xh(t,"da",e)}function Xh(t,e,n=ut){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(zo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ss(r.parent.vnode)&&rg(i,e,n,r),r=r.parent}}function rg(t,e,n,i){const r=zo(e,t,i,!0);Xl(()=>{Ll(i[e],r)},n)}function oa(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function aa(t){return t.shapeFlag&128?t.ssContent:t}function zo(t,e,n=ut,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Lr(),Mr(n);const a=Qt(e,n,t,o);return wi(),Ur(),a});return i?r.unshift(s):r.push(s),s}}const Vn=t=>(e,n=ut)=>(!Er||t==="sp")&&zo(t,(...i)=>e(...i),n),sg=Vn("bm"),Vo=Vn("m"),og=Vn("bu"),jh=Vn("u"),Go=Vn("bum"),Xl=Vn("um"),ag=Vn("sp"),lg=Vn("rtg"),cg=Vn("rtc");function $h(t,e=ut){zo("ec",t,e)}const jl="components";function rw(t,e){return Yh(jl,t,!0,e)||t}const qh=Symbol.for("v-ndc");function ug(t){return it(t)?Yh(jl,t,!1)||t:t||qh}function Yh(t,e,n=!0,i=!1){const r=Bt||ut;if(r){const s=r.type;if(t===jl){const a=ol(s,!1);if(a&&(a===e||a===En(e)||a===Io(En(e))))return s}const o=Uc(r[t]||s[t],e)||Uc(r.appContext[t],e);return!o&&i?s:o}}function Uc(t,e){return t&&(t[e]||t[En(e)]||t[Io(En(e))])}function sw(t,e,n,i){let r;const s=n&&n[i];if(Ie(t)||it(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Qe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const tl=t=>t?hd(t)?Xo(t)||t.proxy:tl(t.parent):null,ts=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tl(t.parent),$root:t=>tl(t.root),$emit:t=>t.emit,$options:t=>$l(t),$forceUpdate:t=>t.f||(t.f=()=>Bo(t.update)),$nextTick:t=>t.n||(t.n=Ir.bind(t.proxy)),$watch:t=>Jm.bind(t)}),la=(t,e)=>t!==tt&&!t.__isScriptSetup&&je(t,e),fg={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(la(i,e))return o[e]=1,i[e];if(r!==tt&&je(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&je(c,e))return o[e]=3,s[e];if(n!==tt&&je(n,e))return o[e]=4,n[e];nl&&(o[e]=0)}}const u=ts[e];let f,h;if(u)return e==="$attrs"&&zt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==tt&&je(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,je(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return la(r,e)?(r[e]=n,!0):i!==tt&&je(i,e)?(i[e]=n,!0):je(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==tt&&je(t,o)||la(e,o)||(a=s[0])&&je(a,o)||je(i,o)||je(ts,o)||je(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:je(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Dc(t){return Ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nl=!0;function hg(t){const e=$l(t),n=t.proxy,i=t.ctx;nl=!1,e.beforeCreate&&Ic(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:_,destroyed:x,unmounted:M,render:b,renderTracked:C,renderTriggered:L,errorCaptured:P,serverPrefetch:S,expose:A,inheritAttrs:k,components:G,directives:O,filters:I}=e;if(c&&dg(c,i,null),o)for(const $ in o){const Y=o[$];Oe(Y)&&(i[$]=Y.bind(n))}if(r){const $=r.call(n,n);Qe($)&&(t.data=dn($))}if(nl=!0,s)for(const $ in s){const Y=s[$],le=Oe(Y)?Y.bind(n,n):Oe(Y.get)?Y.get.bind(n,n):fn,de=!Oe(Y)&&Oe(Y.set)?Y.set.bind(n):fn,Ee=Ft({get:le,set:de});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:q=>Ee.value=q})}if(a)for(const $ in a)Kh(a[$],i,n,$);if(l){const $=Oe(l)?l.call(n):l;Reflect.ownKeys($).forEach(Y=>{mr(Y,$[Y])})}u&&Ic(u,t,"c");function te($,Y){Ie(Y)?Y.forEach(le=>$(le.bind(n))):Y&&$(Y.bind(n))}if(te(sg,f),te(Vo,h),te(og,p),te(jh,g),te(Gh,v),te(Wh,m),te($h,P),te(cg,C),te(lg,L),te(Go,_),te(Xl,M),te(ag,S),Ie(A))if(A.length){const $=t.exposed||(t.exposed={});A.forEach(Y=>{Object.defineProperty($,Y,{get:()=>n[Y],set:le=>n[Y]=le})})}else t.exposed||(t.exposed={});b&&t.render===fn&&(t.render=b),k!=null&&(t.inheritAttrs=k),G&&(t.components=G),O&&(t.directives=O)}function dg(t,e,n=fn){Ie(t)&&(t=il(t));for(const i in t){const r=t[i];let s;Qe(r)?"default"in r?s=en(r.from||i,r.default,!0):s=en(r.from||i):s=en(r),pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ic(t,e,n){Qt(Ie(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kh(t,e,n,i){const r=i.includes(".")?Hh(n,i):()=>n[i];if(it(t)){const s=e[t];Oe(s)&&dr(r,s)}else if(Oe(t))dr(r,t.bind(n));else if(Qe(t))if(Ie(t))t.forEach(s=>Kh(s,e,n,i));else{const s=Oe(t.handler)?t.handler.bind(n):e[t.handler];Oe(s)&&dr(r,s,t)}}function $l(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Eo(l,c,o,!0)),Eo(l,e,o)),Qe(e)&&s.set(e,l),l}function Eo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Eo(t,s,n,!0),r&&r.forEach(o=>Eo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=pg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const pg={data:Nc,props:Oc,emits:Oc,methods:Kr,computed:Kr,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Kr,directives:Kr,watch:gg,provide:Nc,inject:mg};function Nc(t,e){return e?t?function(){return ht(Oe(t)?t.call(this,this):t,Oe(e)?e.call(this,this):e)}:e:t}function mg(t,e){return Kr(il(t),il(e))}function il(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Kr(t,e){return t?ht(Object.create(null),t,e):e}function Oc(t,e){return t?Ie(t)&&Ie(e)?[...new Set([...t,...e])]:ht(Object.create(null),Dc(t),Dc(e??{})):e}function gg(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const i in e)n[i]=Lt(t[i],e[i]);return n}function Zh(){return{app:null,config:{isNativeTag:Bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _g=0;function vg(t,e){return function(i,r=null){Oe(i)||(i=ht({},i)),r!=null&&!Qe(r)&&(r=null);const s=Zh(),o=new Set;let a=!1;const l=s.app={_uid:_g++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:pd,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...u)):Oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=ft(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Xo(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){gs=l;try{return c()}finally{gs=null}}};return l}}let gs=null;function mr(t,e){if(ut){let n=ut.provides;const i=ut.parent&&ut.parent.provides;i===n&&(n=ut.provides=Object.create(i)),n[t]=e}}function en(t,e,n=!1){const i=ut||Bt;if(i||gs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:gs._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Oe(e)?e.call(i&&i.proxy):e}}function Jh(){return!!(ut||Bt||gs)}function xg(t,e,n,i=!1){const r={},s={};go(s,Wo,1),t.propsDefaults=Object.create(null),Qh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Mh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function yg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=$e(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ho(t.emitsOptions,h))continue;const p=e[h];if(l)if(je(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=En(h);r[g]=rl(l,a,g,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Qh(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!je(e,f)&&((u=Pr(f))===f||!je(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=rl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!je(e,f))&&(delete s[f],c=!0)}c&&kn(t,"set","$attrs")}function Qh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Qr(l))continue;const c=e[l];let u;r&&je(r,u=En(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ho(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=$e(n),c=a||tt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=rl(r,l,f,c[f],t,!je(c,f))}}return o}function rl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Oe(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(Mr(r),i=c[n]=l.call(null,e),wi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Pr(n))&&(i=!0))}return i}function ed(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Oe(t)){const u=f=>{l=!0;const[h,p]=ed(f,e,!0);ht(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Qe(t)&&i.set(t,lr),lr;if(Ie(s))for(let u=0;u<s.length;u++){const f=En(s[u]);Fc(f)&&(o[f]=tt)}else if(s)for(const u in s){const f=En(u);if(Fc(f)){const h=s[u],p=o[f]=Ie(h)||Oe(h)?{type:h}:ht({},h);if(p){const g=kc(Boolean,p.type),v=kc(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||je(p,"default"))&&a.push(f)}}}const c=[o,a];return Qe(t)&&i.set(t,c),c}function Fc(t){return t[0]!=="$"}function Bc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hc(t,e){return Bc(t)===Bc(e)}function kc(t,e){return Ie(e)?e.findIndex(n=>Hc(n,t)):Oe(e)&&Hc(e,t)?0:-1}const td=t=>t[0]==="_"||t==="$stable",ql=t=>Ie(t)?t.map(Kt):[Kt(t)],Mg=(t,e,n)=>{if(e._n)return e;const i=Nh((...r)=>ql(e(...r)),n);return i._c=!1,i},nd=(t,e,n)=>{const i=t._ctx;for(const r in t){if(td(r))continue;const s=t[r];if(Oe(s))e[r]=Mg(r,s,i);else if(s!=null){const o=ql(s);e[r]=()=>o}}},id=(t,e)=>{const n=ql(e);t.slots.default=()=>n},Eg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$e(e),go(e,"_",n)):nd(e,t.slots={})}else t.slots={},e&&id(t,e);go(t.slots,Wo,1)},Sg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=tt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(ht(r,e),!n&&a===1&&delete r._):(s=!e.$stable,nd(e,r)),o=e}else e&&(id(t,e),o={default:1});if(s)for(const a in r)!td(a)&&!(a in o)&&delete r[a]};function So(t,e,n,i,r=!1){if(Ie(t)){t.forEach((h,p)=>So(h,e&&(Ie(e)?e[p]:e),n,i,r));return}if(pr(i)&&!r)return;const s=i.shapeFlag&4?Xo(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(it(c)?(u[c]=null,je(f,c)&&(f[c]=null)):pt(c)&&(c.value=null)),Oe(l))ri(l,a,12,[o,u]);else{const h=it(l),p=pt(l);if(h||p){const g=()=>{if(t.f){const v=h?je(f,l)?f[l]:u[l]:l.value;r?Ie(v)&&Ll(v,s):Ie(v)?v.includes(s)||v.push(s):h?(u[l]=[s],je(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,je(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Mt(g,n)):g()}}}let Wn=!1;const Bs=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Hs=t=>t.nodeType===8;function bg(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(d,_)=>{if(!_.hasChildNodes()){n(null,d,_),xo(),_._vnode=d;return}Wn=!1,f(_.firstChild,d,null,null,null),xo(),_._vnode=d,Wn&&console.error("Hydration completed but contains mismatches.")},f=(d,_,x,M,b,C=!1)=>{const L=Hs(d)&&d.data==="[",P=()=>v(d,_,x,M,b,L),{type:S,ref:A,shapeFlag:k,patchFlag:G}=_;let O=d.nodeType;_.el=d,G===-2&&(C=!1,_.dynamicChildren=null);let I=null;switch(S){case xr:O!==3?_.children===""?(l(_.el=r(""),o(d),d),I=d):I=P():(d.data!==_.children&&(Wn=!0,d.data=_.children),I=s(d));break;case Ht:O!==8||L?I=P():I=s(d);break;case ho:if(L&&(d=s(d),O=d.nodeType),O===1||O===3){I=d;const j=!_.children.length;for(let te=0;te<_.staticCount;te++)j&&(_.children+=I.nodeType===1?I.outerHTML:I.data),te===_.staticCount-1&&(_.anchor=I),I=s(I);return L?s(I):I}else P();break;case Yt:L?I=g(d,_,x,M,b,C):I=P();break;default:if(k&1)O!==1||_.type.toLowerCase()!==d.tagName.toLowerCase()?I=P():I=h(d,_,x,M,b,C);else if(k&6){_.slotScopeIds=b;const j=o(d);if(e(_,j,null,x,M,Bs(j),C),I=L?m(d):s(d),I&&Hs(I)&&I.data==="teleport end"&&(I=s(I)),pr(_)){let te;L?(te=ft(Yt),te.anchor=I?I.previousSibling:j.lastChild):te=d.nodeType===3?fd(""):ft("div"),te.el=d,_.component.subTree=te}}else k&64?O!==8?I=P():I=_.type.hydrate(d,_,x,M,b,C,t,p):k&128&&(I=_.type.hydrate(d,_,x,M,Bs(o(d)),b,C,t,f))}return A!=null&&So(A,null,M,_),I},h=(d,_,x,M,b,C)=>{C=C||!!_.dynamicChildren;const{type:L,props:P,patchFlag:S,shapeFlag:A,dirs:k}=_,G=L==="input"&&k||L==="option";if(G||S!==-1){if(k&&_n(_,null,x,"created"),P)if(G||!C||S&48)for(const I in P)(G&&I.endsWith("value")||Ms(I)&&!Qr(I))&&i(d,I,null,P[I],!1,void 0,x);else P.onClick&&i(d,"onClick",null,P.onClick,!1,void 0,x);let O;if((O=P&&P.onVnodeBeforeMount)&&Ot(O,x,_),k&&_n(_,null,x,"beforeMount"),((O=P&&P.onVnodeMounted)||k)&&Bh(()=>{O&&Ot(O,x,_),k&&_n(_,null,x,"mounted")},M),A&16&&!(P&&(P.innerHTML||P.textContent))){let I=p(d.firstChild,_,d,x,M,b,C);for(;I;){Wn=!0;const j=I;I=I.nextSibling,a(j)}}else A&8&&d.textContent!==_.children&&(Wn=!0,d.textContent=_.children)}return d.nextSibling},p=(d,_,x,M,b,C,L)=>{L=L||!!_.dynamicChildren;const P=_.children,S=P.length;for(let A=0;A<S;A++){const k=L?P[A]:P[A]=Kt(P[A]);if(d)d=f(d,k,M,b,C,L);else{if(k.type===xr&&!k.children)continue;Wn=!0,n(null,k,x,null,M,b,Bs(x),C)}}return d},g=(d,_,x,M,b,C)=>{const{slotScopeIds:L}=_;L&&(b=b?b.concat(L):L);const P=o(d),S=p(s(d),_,P,x,M,b,C);return S&&Hs(S)&&S.data==="]"?s(_.anchor=S):(Wn=!0,l(_.anchor=c("]"),P,S),S)},v=(d,_,x,M,b,C)=>{if(Wn=!0,_.el=null,C){const S=m(d);for(;;){const A=s(d);if(A&&A!==S)a(A);else break}}const L=s(d),P=o(d);return a(d),n(null,_,P,L,x,M,Bs(P),b),L},m=d=>{let _=0;for(;d;)if(d=s(d),d&&Hs(d)&&(d.data==="["&&_++,d.data==="]")){if(_===0)return s(d);_--}return d};return[u,f]}const Mt=Bh;function Tg(t){return rd(t)}function Ag(t){return rd(t,bg)}function rd(t,e){const n=Ya();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=fn,insertStaticContent:g}=t,v=(y,U,D,H=null,V=null,ee=null,ce=!1,J=null,ue=!!U.dynamicChildren)=>{if(y===U)return;y&&!cn(y,U)&&(H=B(y),q(y,V,ee,!0),y=null),U.patchFlag===-2&&(ue=!1,U.dynamicChildren=null);const{type:ae,ref:be,shapeFlag:T}=U;switch(ae){case xr:m(y,U,D,H);break;case Ht:d(y,U,D,H);break;case ho:y==null&&_(U,D,H,ce);break;case Yt:G(y,U,D,H,V,ee,ce,J,ue);break;default:T&1?b(y,U,D,H,V,ee,ce,J,ue):T&6?O(y,U,D,H,V,ee,ce,J,ue):(T&64||T&128)&&ae.process(y,U,D,H,V,ee,ce,J,ue,ne)}be!=null&&V&&So(be,y&&y.ref,ee,U||y,!U)},m=(y,U,D,H)=>{if(y==null)i(U.el=a(U.children),D,H);else{const V=U.el=y.el;U.children!==y.children&&c(V,U.children)}},d=(y,U,D,H)=>{y==null?i(U.el=l(U.children||""),D,H):U.el=y.el},_=(y,U,D,H)=>{[y.el,y.anchor]=g(y.children,U,D,H,y.el,y.anchor)},x=({el:y,anchor:U},D,H)=>{let V;for(;y&&y!==U;)V=h(y),i(y,D,H),y=V;i(U,D,H)},M=({el:y,anchor:U})=>{let D;for(;y&&y!==U;)D=h(y),r(y),y=D;r(U)},b=(y,U,D,H,V,ee,ce,J,ue)=>{ce=ce||U.type==="svg",y==null?C(U,D,H,V,ee,ce,J,ue):S(y,U,V,ee,ce,J,ue)},C=(y,U,D,H,V,ee,ce,J)=>{let ue,ae;const{type:be,props:T,shapeFlag:E,transition:F,dirs:ie}=y;if(ue=y.el=o(y.type,ee,T&&T.is,T),E&8?u(ue,y.children):E&16&&P(y.children,ue,null,H,V,ee&&be!=="foreignObject",ce,J),ie&&_n(y,null,H,"created"),L(ue,y,y.scopeId,ce,H),T){for(const R in T)R!=="value"&&!Qr(R)&&s(ue,R,null,T[R],ee,y.children,H,V,ge);"value"in T&&s(ue,"value",null,T.value),(ae=T.onVnodeBeforeMount)&&Ot(ae,H,y)}ie&&_n(y,null,H,"beforeMount");const oe=(!V||V&&!V.pendingBranch)&&F&&!F.persisted;oe&&F.beforeEnter(ue),i(ue,U,D),((ae=T&&T.onVnodeMounted)||oe||ie)&&Mt(()=>{ae&&Ot(ae,H,y),oe&&F.enter(ue),ie&&_n(y,null,H,"mounted")},V)},L=(y,U,D,H,V)=>{if(D&&p(y,D),H)for(let ee=0;ee<H.length;ee++)p(y,H[ee]);if(V){let ee=V.subTree;if(U===ee){const ce=V.vnode;L(y,ce,ce.scopeId,ce.slotScopeIds,V.parent)}}},P=(y,U,D,H,V,ee,ce,J,ue=0)=>{for(let ae=ue;ae<y.length;ae++){const be=y[ae]=J?Zn(y[ae]):Kt(y[ae]);v(null,be,U,D,H,V,ee,ce,J)}},S=(y,U,D,H,V,ee,ce)=>{const J=U.el=y.el;let{patchFlag:ue,dynamicChildren:ae,dirs:be}=U;ue|=y.patchFlag&16;const T=y.props||tt,E=U.props||tt;let F;D&&di(D,!1),(F=E.onVnodeBeforeUpdate)&&Ot(F,D,U,y),be&&_n(U,y,D,"beforeUpdate"),D&&di(D,!0);const ie=V&&U.type!=="foreignObject";if(ae?A(y.dynamicChildren,ae,J,D,H,ie,ee):ce||Y(y,U,J,null,D,H,ie,ee,!1),ue>0){if(ue&16)k(J,U,T,E,D,H,V);else if(ue&2&&T.class!==E.class&&s(J,"class",null,E.class,V),ue&4&&s(J,"style",T.style,E.style,V),ue&8){const oe=U.dynamicProps;for(let R=0;R<oe.length;R++){const Q=oe[R],he=T[Q],K=E[Q];(K!==he||Q==="value")&&s(J,Q,he,K,V,y.children,D,H,ge)}}ue&1&&y.children!==U.children&&u(J,U.children)}else!ce&&ae==null&&k(J,U,T,E,D,H,V);((F=E.onVnodeUpdated)||be)&&Mt(()=>{F&&Ot(F,D,U,y),be&&_n(U,y,D,"updated")},H)},A=(y,U,D,H,V,ee,ce)=>{for(let J=0;J<U.length;J++){const ue=y[J],ae=U[J],be=ue.el&&(ue.type===Yt||!cn(ue,ae)||ue.shapeFlag&70)?f(ue.el):D;v(ue,ae,be,null,H,V,ee,ce,!0)}},k=(y,U,D,H,V,ee,ce)=>{if(D!==H){if(D!==tt)for(const J in D)!Qr(J)&&!(J in H)&&s(y,J,D[J],null,ce,U.children,V,ee,ge);for(const J in H){if(Qr(J))continue;const ue=H[J],ae=D[J];ue!==ae&&J!=="value"&&s(y,J,ae,ue,ce,U.children,V,ee,ge)}"value"in H&&s(y,"value",D.value,H.value)}},G=(y,U,D,H,V,ee,ce,J,ue)=>{const ae=U.el=y?y.el:a(""),be=U.anchor=y?y.anchor:a("");let{patchFlag:T,dynamicChildren:E,slotScopeIds:F}=U;F&&(J=J?J.concat(F):F),y==null?(i(ae,D,H),i(be,D,H),P(U.children,D,be,V,ee,ce,J,ue)):T>0&&T&64&&E&&y.dynamicChildren?(A(y.dynamicChildren,E,D,V,ee,ce,J),(U.key!=null||V&&U===V.subTree)&&sd(y,U,!0)):Y(y,U,D,be,V,ee,ce,J,ue)},O=(y,U,D,H,V,ee,ce,J,ue)=>{U.slotScopeIds=J,y==null?U.shapeFlag&512?V.ctx.activate(U,D,H,ce,ue):I(U,D,H,V,ee,ce,ue):j(y,U,ue)},I=(y,U,D,H,V,ee,ce)=>{const J=y.component=Ig(y,H,V);if(Ss(y)&&(J.ctx.renderer=ne),Ng(J),J.asyncDep){if(V&&V.registerDep(J,te),!y.el){const ue=J.subTree=ft(Ht);d(null,ue,U,D)}return}te(J,y,U,D,V,ee,ce)},j=(y,U,D)=>{const H=U.component=y.component;if(Wm(y,U,D))if(H.asyncDep&&!H.asyncResolved){$(H,U,D);return}else H.next=U,Bm(H.update),H.update();else U.el=y.el,H.vnode=U},te=(y,U,D,H,V,ee,ce)=>{const J=()=>{if(y.isMounted){let{next:be,bu:T,u:E,parent:F,vnode:ie}=y,oe=be,R;di(y,!1),be?(be.el=ie.el,$(y,be,ce)):be=ie,T&&es(T),(R=be.props&&be.props.onVnodeBeforeUpdate)&&Ot(R,F,be,ie),di(y,!0);const Q=ia(y),he=y.subTree;y.subTree=Q,v(he,Q,f(he.el),B(he),y,V,ee),be.el=Q.el,oe===null&&Vl(y,Q.el),E&&Mt(E,V),(R=be.props&&be.props.onVnodeUpdated)&&Mt(()=>Ot(R,F,be,ie),V)}else{let be;const{el:T,props:E}=U,{bm:F,m:ie,parent:oe}=y,R=pr(U);if(di(y,!1),F&&es(F),!R&&(be=E&&E.onVnodeBeforeMount)&&Ot(be,oe,U),di(y,!0),T&&we){const Q=()=>{y.subTree=ia(y),we(T,y.subTree,y,V,null)};R?U.type.__asyncLoader().then(()=>!y.isUnmounted&&Q()):Q()}else{const Q=y.subTree=ia(y);v(null,Q,D,H,y,V,ee),U.el=Q.el}if(ie&&Mt(ie,V),!R&&(be=E&&E.onVnodeMounted)){const Q=U;Mt(()=>Ot(be,oe,Q),V)}(U.shapeFlag&256||oe&&pr(oe.vnode)&&oe.vnode.shapeFlag&256)&&y.a&&Mt(y.a,V),y.isMounted=!0,U=D=H=null}},ue=y.effect=new Nl(J,()=>Bo(ae),y.scope),ae=y.update=()=>ue.run();ae.id=y.uid,di(y,!0),ae()},$=(y,U,D)=>{U.component=y;const H=y.vnode.props;y.vnode=U,y.next=null,yg(y,U.props,H,D),Sg(y,U.children,D),Lr(),wc(),Ur()},Y=(y,U,D,H,V,ee,ce,J,ue=!1)=>{const ae=y&&y.children,be=y?y.shapeFlag:0,T=U.children,{patchFlag:E,shapeFlag:F}=U;if(E>0){if(E&128){de(ae,T,D,H,V,ee,ce,J,ue);return}else if(E&256){le(ae,T,D,H,V,ee,ce,J,ue);return}}F&8?(be&16&&ge(ae,V,ee),T!==ae&&u(D,T)):be&16?F&16?de(ae,T,D,H,V,ee,ce,J,ue):ge(ae,V,ee,!0):(be&8&&u(D,""),F&16&&P(T,D,H,V,ee,ce,J,ue))},le=(y,U,D,H,V,ee,ce,J,ue)=>{y=y||lr,U=U||lr;const ae=y.length,be=U.length,T=Math.min(ae,be);let E;for(E=0;E<T;E++){const F=U[E]=ue?Zn(U[E]):Kt(U[E]);v(y[E],F,D,null,V,ee,ce,J,ue)}ae>be?ge(y,V,ee,!0,!1,T):P(U,D,H,V,ee,ce,J,ue,T)},de=(y,U,D,H,V,ee,ce,J,ue)=>{let ae=0;const be=U.length;let T=y.length-1,E=be-1;for(;ae<=T&&ae<=E;){const F=y[ae],ie=U[ae]=ue?Zn(U[ae]):Kt(U[ae]);if(cn(F,ie))v(F,ie,D,null,V,ee,ce,J,ue);else break;ae++}for(;ae<=T&&ae<=E;){const F=y[T],ie=U[E]=ue?Zn(U[E]):Kt(U[E]);if(cn(F,ie))v(F,ie,D,null,V,ee,ce,J,ue);else break;T--,E--}if(ae>T){if(ae<=E){const F=E+1,ie=F<be?U[F].el:H;for(;ae<=E;)v(null,U[ae]=ue?Zn(U[ae]):Kt(U[ae]),D,ie,V,ee,ce,J,ue),ae++}}else if(ae>E)for(;ae<=T;)q(y[ae],V,ee,!0),ae++;else{const F=ae,ie=ae,oe=new Map;for(ae=ie;ae<=E;ae++){const ye=U[ae]=ue?Zn(U[ae]):Kt(U[ae]);ye.key!=null&&oe.set(ye.key,ae)}let R,Q=0;const he=E-ie+1;let K=!1,Pe=0;const Re=new Array(he);for(ae=0;ae<he;ae++)Re[ae]=0;for(ae=F;ae<=T;ae++){const ye=y[ae];if(Q>=he){q(ye,V,ee,!0);continue}let _e;if(ye.key!=null)_e=oe.get(ye.key);else for(R=ie;R<=E;R++)if(Re[R-ie]===0&&cn(ye,U[R])){_e=R;break}_e===void 0?q(ye,V,ee,!0):(Re[_e-ie]=ae+1,_e>=Pe?Pe=_e:K=!0,v(ye,U[_e],D,null,V,ee,ce,J,ue),Q++)}const Le=K?wg(Re):lr;for(R=Le.length-1,ae=he-1;ae>=0;ae--){const ye=ie+ae,_e=U[ye],Ue=ye+1<be?U[ye+1].el:H;Re[ae]===0?v(null,_e,D,Ue,V,ee,ce,J,ue):K&&(R<0||ae!==Le[R]?Ee(_e,D,Ue,2):R--)}}},Ee=(y,U,D,H,V=null)=>{const{el:ee,type:ce,transition:J,children:ue,shapeFlag:ae}=y;if(ae&6){Ee(y.component.subTree,U,D,H);return}if(ae&128){y.suspense.move(U,D,H);return}if(ae&64){ce.move(y,U,D,ne);return}if(ce===Yt){i(ee,U,D);for(let T=0;T<ue.length;T++)Ee(ue[T],U,D,H);i(y.anchor,U,D);return}if(ce===ho){x(y,U,D);return}if(H!==2&&ae&1&&J)if(H===0)J.beforeEnter(ee),i(ee,U,D),Mt(()=>J.enter(ee),V);else{const{leave:T,delayLeave:E,afterLeave:F}=J,ie=()=>i(ee,U,D),oe=()=>{T(ee,()=>{ie(),F&&F()})};E?E(ee,ie,oe):oe()}else i(ee,U,D)},q=(y,U,D,H=!1,V=!1)=>{const{type:ee,props:ce,ref:J,children:ue,dynamicChildren:ae,shapeFlag:be,patchFlag:T,dirs:E}=y;if(J!=null&&So(J,null,D,y,!0),be&256){U.ctx.deactivate(y);return}const F=be&1&&E,ie=!pr(y);let oe;if(ie&&(oe=ce&&ce.onVnodeBeforeUnmount)&&Ot(oe,U,y),be&6)Te(y.component,D,H);else{if(be&128){y.suspense.unmount(D,H);return}F&&_n(y,null,U,"beforeUnmount"),be&64?y.type.remove(y,U,D,V,ne,H):ae&&(ee!==Yt||T>0&&T&64)?ge(ae,U,D,!1,!0):(ee===Yt&&T&384||!V&&be&16)&&ge(ue,U,D),H&&pe(y)}(ie&&(oe=ce&&ce.onVnodeUnmounted)||F)&&Mt(()=>{oe&&Ot(oe,U,y),F&&_n(y,null,U,"unmounted")},D)},pe=y=>{const{type:U,el:D,anchor:H,transition:V}=y;if(U===Yt){me(D,H);return}if(U===ho){M(y);return}const ee=()=>{r(D),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(y.shapeFlag&1&&V&&!V.persisted){const{leave:ce,delayLeave:J}=V,ue=()=>ce(D,ee);J?J(y.el,ee,ue):ue()}else ee()},me=(y,U)=>{let D;for(;y!==U;)D=h(y),r(y),y=D;r(U)},Te=(y,U,D)=>{const{bum:H,scope:V,update:ee,subTree:ce,um:J}=y;H&&es(H),V.stop(),ee&&(ee.active=!1,q(ce,y,U,D)),J&&Mt(J,U),Mt(()=>{y.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},ge=(y,U,D,H=!1,V=!1,ee=0)=>{for(let ce=ee;ce<y.length;ce++)q(y[ce],U,D,H,V)},B=y=>y.shapeFlag&6?B(y.component.subTree):y.shapeFlag&128?y.suspense.next():h(y.anchor||y.el),fe=(y,U,D)=>{y==null?U._vnode&&q(U._vnode,null,null,!0):v(U._vnode||null,y,U,null,null,null,D),wc(),xo(),U._vnode=y},ne={p:v,um:q,m:Ee,r:pe,mt:I,mc:P,pc:Y,pbc:A,n:B,o:t};let xe,we;return e&&([xe,we]=e(ne)),{render:fe,hydrate:xe,createApp:vg(fe,xe)}}function di({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sd(t,e,n=!1){const i=t.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zn(r[s]),a.el=o.el),n||sd(o,a)),a.type===xr&&(a.el=o.el)}}function wg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Rg=t=>t.__isTeleport,Yt=Symbol.for("v-fgt"),xr=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),ns=[];let Jt=null;function yn(t=!1){ns.push(Jt=t?null:[])}function od(){ns.pop(),Jt=ns[ns.length-1]||null}let yr=1;function zc(t){yr+=t}function ad(t){return t.dynamicChildren=yr>0?Jt||lr:null,od(),yr>0&&Jt&&Jt.push(t),t}function Cg(t,e,n,i,r,s){return ad(cd(t,e,n,i,r,s,!0))}function Qn(t,e,n,i,r){return ad(ft(t,e,n,i,r,!0))}function _s(t){return t?t.__v_isVNode===!0:!1}function cn(t,e){return t.type===e.type&&t.key===e.key}const Wo="__vInternal",ld=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?it(t)||pt(t)||Oe(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function cd(t,e=null,n=null,i=0,r=null,s=t===Yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ld(e),ref:e&&po(e),scopeId:ko,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Bt};return a?(Yl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=it(n)?8:16),yr>0&&!o&&Jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Jt.push(l),l}const ft=Pg;function Pg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===qh)&&(t=Ht),_s(t)){const a=zn(t,e,!0);return n&&Yl(a,n),yr>0&&!s&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(t)]=a:Jt.push(a)),a.patchFlag|=-2,a}if(Hg(t)&&(t=t.__vccOpts),e){e=ud(e);let{class:a,style:l}=e;a&&!it(a)&&(e.class=Oo(a)),Qe(l)&&(Sh(l)&&!Ie(l)&&(l=ht({},l)),e.style=No(l))}const o=it(t)?1:Oh(t)?128:Rg(t)?64:Qe(t)?4:Oe(t)?2:0;return cd(t,e,n,i,r,o,s,!0)}function ud(t){return t?Sh(t)||Wo in t?ht({},t):t:null}function zn(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Lg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ld(a),ref:e&&e.ref?n&&r?Ie(r)?r.concat(po(e)):[r,po(e)]:po(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zn(t.ssContent),ssFallback:t.ssFallback&&zn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function fd(t=" ",e=0){return ft(xr,null,t,e)}function ow(t="",e=!1){return e?(yn(),Qn(Ht,null,t)):ft(Ht,null,t)}function Kt(t){return t==null||typeof t=="boolean"?ft(Ht):Ie(t)?ft(Yt,null,t.slice()):typeof t=="object"?Zn(t):ft(xr,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zn(t)}function Yl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ie(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Yl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Wo in e)?e._ctx=Bt:r===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),i&64?(n=16,e=[fd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Oo([e.class,i.class]));else if(r==="style")e.style=No([e.style,i.style]);else if(Ms(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Ot(t,e,n,i=null){Qt(t,e,7,[n,i])}const Ug=Zh();let Dg=0;function Ig(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Ug,s={uid:Dg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ed(i,r),emitsOptions:Ih(i,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:i.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=km.bind(null,s),t.ce&&t.ce(s),s}let ut=null;const bs=()=>ut||Bt;let Kl,Hi,Vc="__VUE_INSTANCE_SETTERS__";(Hi=Ya()[Vc])||(Hi=Ya()[Vc]=[]),Hi.push(t=>ut=t),Kl=t=>{Hi.length>1?Hi.forEach(e=>e(t)):Hi[0](t)};const Mr=t=>{Kl(t),t.scope.on()},wi=()=>{ut&&ut.scope.off(),Kl(null)};function hd(t){return t.vnode.shapeFlag&4}let Er=!1;function Ng(t,e=!1){Er=e;const{props:n,children:i}=t.vnode,r=hd(t);xg(t,n,r,e),Eg(t,i);const s=r?Og(t,e):void 0;return Er=!1,s}function Og(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bh(new Proxy(t.ctx,fg));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Bg(t):null;Mr(t),Lr();const s=ri(i,t,0,[t.props,r]);if(Ur(),wi(),sh(s)){if(s.then(wi,wi),e)return s.then(o=>{sl(t,o,e)}).catch(o=>{Dr(o,t,0)});t.asyncDep=s}else sl(t,s,e)}else dd(t,e)}function sl(t,e,n){Oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Qe(e)&&(t.setupState=Rh(e)),dd(t,n)}let Gc;function dd(t,e,n){const i=t.type;if(!t.render){if(!e&&Gc&&!i.render){const r=i.template||$l(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ht(ht({isCustomElement:s,delimiters:a},o),l);i.render=Gc(r,c)}}t.render=i.render||fn}Mr(t),Lr(),hg(t),Ur(),wi()}function Fg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return zt(t,"get","$attrs"),e[n]}}))}function Bg(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Fg(t)},slots:t.slots,emit:t.emit,expose:e}}function Xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rh(bh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ts)return ts[n](t)},has(e,n){return n in e||n in ts}}))}function ol(t,e=!0){return Oe(t)?t.displayName||t.name:t.name||e&&t.__name}function Hg(t){return Oe(t)&&"__vccOpts"in t}const Ft=(t,e)=>Nm(t,e,Er);function Bn(t,e,n){const i=arguments.length;return i===2?Qe(e)&&!Ie(e)?_s(e)?ft(t,null,[e]):ft(t,e):ft(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&_s(n)&&(n=[n]),ft(t,e,n))}const kg=Symbol.for("v-scx"),zg=()=>en(kg),pd="3.3.4",Vg="http://www.w3.org/2000/svg",Si=typeof document<"u"?document:null,Wc=Si&&Si.createElement("template"),Gg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Si.createElementNS(Vg,t):Si.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Si.createTextNode(t),createComment:t=>Si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Wc.innerHTML=i?`<svg>${t}</svg>`:t;const a=Wc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Wg(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xg(t,e,n){const i=t.style,r=it(n);if(n&&!r){if(e&&!it(e))for(const s in e)n[s]==null&&al(i,s,"");for(const s in n)al(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Xc=/\s*!important$/;function al(t,e,n){if(Ie(n))n.forEach(i=>al(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=jg(t,e);Xc.test(n)?t.setProperty(Pr(i),n.replace(Xc,""),"important"):t[i]=n}}const jc=["Webkit","Moz","ms"],ca={};function jg(t,e){const n=ca[e];if(n)return n;let i=En(e);if(i!=="filter"&&i in t)return ca[e]=i;i=Io(i);for(let r=0;r<jc.length;r++){const s=jc[r]+i;if(s in t)return ca[e]=s}return e}const $c="http://www.w3.org/1999/xlink";function $g(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($c,e.slice(6,e.length)):t.setAttributeNS($c,e,n);else{const s=Jp(e);n==null||s&&!ch(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function qg(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ch(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Yg(t,e,n,i){t.addEventListener(e,n,i)}function Kg(t,e,n,i){t.removeEventListener(e,n,i)}function Zg(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Jg(e);if(i){const c=s[e]=t_(i,r);Yg(t,a,c,l)}else o&&(Kg(t,a,o,l),s[e]=void 0)}}const qc=/(?:Once|Passive|Capture)$/;function Jg(t){let e;if(qc.test(t)){e={};let i;for(;i=t.match(qc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pr(t.slice(2)),e]}let ua=0;const Qg=Promise.resolve(),e_=()=>ua||(Qg.then(()=>ua=0),ua=Date.now());function t_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Qt(n_(i,n.value),e,5,[i])};return n.value=t,n.attached=e_(),n}function n_(t,e){if(Ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Yc=/^on[a-z]/,i_=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?Wg(t,i,r):e==="style"?Xg(t,n,i):Ms(e)?Pl(e)||Zg(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):r_(t,e,i,r))?qg(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),$g(t,e,i,r))};function r_(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Yc.test(e)&&Oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yc.test(e)&&it(n)?!1:e in t}const Xn="transition",kr="animation",Zl=(t,{slots:e})=>Bn(tg,s_(t),e);Zl.displayName="Transition";const md={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Zl.props=ht({},kh,md);const pi=(t,e=[])=>{Ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},Kc=t=>t?Ie(t)?t.some(e=>e.length>1):t.length>1:!1;function s_(t){const e={};for(const G in t)G in md||(e[G]=t[G]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=o_(r),v=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:_,onEnterCancelled:x,onLeave:M,onLeaveCancelled:b,onBeforeAppear:C=d,onAppear:L=_,onAppearCancelled:P=x}=e,S=(G,O,I)=>{mi(G,O?u:a),mi(G,O?c:o),I&&I()},A=(G,O)=>{G._isLeaving=!1,mi(G,f),mi(G,p),mi(G,h),O&&O()},k=G=>(O,I)=>{const j=G?L:_,te=()=>S(O,G,I);pi(j,[O,te]),Zc(()=>{mi(O,G?l:s),jn(O,G?u:a),Kc(j)||Jc(O,i,v,te)})};return ht(e,{onBeforeEnter(G){pi(d,[G]),jn(G,s),jn(G,o)},onBeforeAppear(G){pi(C,[G]),jn(G,l),jn(G,c)},onEnter:k(!1),onAppear:k(!0),onLeave(G,O){G._isLeaving=!0;const I=()=>A(G,O);jn(G,f),c_(),jn(G,h),Zc(()=>{G._isLeaving&&(mi(G,f),jn(G,p),Kc(M)||Jc(G,i,m,I))}),pi(M,[G,I])},onEnterCancelled(G){S(G,!1),pi(x,[G])},onAppearCancelled(G){S(G,!0),pi(P,[G])},onLeaveCancelled(G){A(G),pi(b,[G])}})}function o_(t){if(t==null)return null;if(Qe(t))return[fa(t.enter),fa(t.leave)];{const e=fa(t);return[e,e]}}function fa(t){return lh(t)}function jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function mi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Zc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let a_=0;function Jc(t,e,n,i){const r=t._endId=++a_,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=l_(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function l_(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${Xn}Delay`),s=i(`${Xn}Duration`),o=Qc(r,s),a=i(`${kr}Delay`),l=i(`${kr}Duration`),c=Qc(a,l);let u=null,f=0,h=0;e===Xn?o>0&&(u=Xn,f=o,h=s.length):e===kr?c>0&&(u=kr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Xn:kr:null,h=u?u===Xn?s.length:l.length:0);const p=u===Xn&&/\b(transform|all)(,|$)/.test(i(`${Xn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Qc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>eu(n)+eu(t[i])))}function eu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function c_(){return document.body.offsetHeight}const u_=["ctrl","shift","alt","meta"],f_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>u_.some(n=>t[`${n}Key`]&&!e.includes(n))},aw=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=f_[e[r]];if(s&&s(n,e))return}return t(n,...i)},lw={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):zr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),zr(t,!0),i.enter(t)):i.leave(t,()=>{zr(t,!1)}):zr(t,e))},beforeUnmount(t,{value:e}){zr(t,e)}};function zr(t,e){t.style.display=e?t._vod:"none"}const gd=ht({patchProp:i_},Gg);let is,tu=!1;function h_(){return is||(is=Tg(gd))}function d_(){return is=tu?is:Ag(gd),tu=!0,is}const p_=(...t)=>{const e=h_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=_d(i);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},m_=(...t)=>{const e=d_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=_d(i);if(r)return n(r,!0,r instanceof SVGElement)},e};function _d(t){return it(t)?document.querySelector(t):t}const g_=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,__=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,v_=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function x_(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){y_(t);return}return e}function y_(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function M_(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t[t.length-1]==='"')return n.slice(1,-1);const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i!=="undefined"){if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY;if(!v_.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(g_.test(t)||__.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,x_)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}}const E_=/#/g,S_=/&/g,b_=/=/g,vd=/\+/g,T_=/%5e/gi,A_=/%60/gi,w_=/%7c/gi,R_=/%20/gi;function C_(t){return encodeURI(""+t).replace(w_,"|")}function ll(t){return C_(typeof t=="string"?t:JSON.stringify(t)).replace(vd,"%2B").replace(R_,"+").replace(E_,"%23").replace(S_,"%26").replace(A_,"`").replace(T_,"^")}function ha(t){return ll(t).replace(b_,"%3D")}function xd(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function P_(t){return xd(t.replace(vd," "))}function L_(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=xd(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=P_(i[2]||"");typeof e[r]<"u"?Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]:e[r]=s}return e}function U_(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ha(t)}=${ll(n)}`).join("&"):`${ha(t)}=${ll(e)}`:ha(t)}function D_(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>U_(e,t[e])).join("&")}const I_=/^\w{2,}:([/\\]{1,2})/,N_=/^\w{2,}:([/\\]{2})?/,O_=/^([/\\]\s*){2,}[^/\\]/;function Ts(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?I_.test(t):N_.test(t)||(e.acceptRelative?O_.test(t):!1)}const F_=/\/$|\/\?/;function cl(t="",e=!1){return e?F_.test(t):t.endsWith("/")}function yd(t="",e=!1){if(!e)return(cl(t)?t.slice(0,-1):t)||"/";if(!cl(t,!0))return t||"/";const[n,...i]=t.split("?");return(n.slice(0,-1)||"/")+(i.length>0?`?${i.join("?")}`:"")}function B_(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(cl(t,!0))return t||"/";const[n,...i]=t.split("?");return n+"/"+(i.length>0?`?${i.join("?")}`:"")}function H_(t=""){return t.startsWith("/")}function k_(t=""){return(H_(t)?t.slice(1):t)||"/"}function z_(t,e){if(Ed(e)||Ts(t))return t;const n=yd(e);return t.startsWith(n)?t:As(n,t)}function nu(t,e){if(Ed(e))return t;const n=yd(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function Md(t,e){const n=jo(t),i={...L_(n.search),...e};return n.search=D_(i),G_(n)}function Ed(t){return!t||t==="/"}function V_(t){return t&&t!=="/"}function As(t,...e){let n=t||"";for(const i of e.filter(r=>V_(r)))n=n?B_(n)+k_(i):i;return n}function jo(t="",e){if(!Ts(t,{acceptRelative:!0}))return e?jo(e+t):iu(t);const[n="",i,r=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",o=""]=(r.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:l,hash:c}=iu(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:i?i.slice(0,Math.max(0,i.length-1)):"",host:s,pathname:a,search:l,hash:c}}function iu(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function G_(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class W_ extends Error{constructor(){super(...arguments),this.name="FetchError"}}function X_(t,e,n){let i="";e&&(i=e.message),t&&n?i=`${i} (${n.status} ${n.statusText} (${t.toString()}))`:t&&(i=`${i} (${t.toString()})`);const r=new W_(i);return Object.defineProperty(r,"request",{get(){return t}}),Object.defineProperty(r,"response",{get(){return n}}),Object.defineProperty(r,"data",{get(){return n&&n._data}}),Object.defineProperty(r,"status",{get(){return n&&n.status}}),Object.defineProperty(r,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(r,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(r,"statusMessage",{get(){return n&&n.statusText}}),r}const j_=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function ru(t="GET"){return j_.has(t.toUpperCase())}function $_(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const q_=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Y_=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function K_(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Y_.test(e)?"json":q_.has(e)||e.startsWith("text/")?"text":"blob"}function Z_(t,e,n=globalThis.Headers){const i={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(i.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(i.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){i.headers=new n((e==null?void 0:e.headers)||{});for(const[r,s]of new n((t==null?void 0:t.headers)||{}))i.headers.set(r,s)}return i}const J_=new Set([408,409,425,429,500,502,503,504]);function Sd(t){const{fetch:e,Headers:n}=t;function i(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){let c;typeof o.options.retry=="number"?c=o.options.retry:c=ru(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(c>0&&J_.has(u))return r(o.request,{...o.options,retry:c-1})}const l=X_(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}const r=async function(a,l={}){const c={request:a,options:Z_(l,t.defaults,n),response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=z_(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=Md(c.request,{...c.options.params,...c.options.query})),c.options.body&&ru(c.options.method)&&$_(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")));try{c.response=await e(c.request,c.options)}catch(f){return c.error=f,c.options.onRequestError&&await c.options.onRequestError(c),await i(c)}const u=(c.options.parseResponse?"json":c.options.responseType)||K_(c.response.headers.get("content-type")||"");if(u==="json"){const f=await c.response.text(),h=c.options.parseResponse||M_;c.response._data=h(f)}else u==="stream"?c.response._data=c.response.body:c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),await i(c)):c.response},s=async function(a,l){return(await r(a,l))._data};return s.raw=r,s.native=e,s.create=(o={})=>Sd({...t,defaults:{...t.defaults,...o}}),s}const bd=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Q_=bd.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),ev=bd.Headers,tv=Sd({fetch:Q_,Headers:ev}),nv=tv,iv=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},bo=iv().app,rv=()=>bo.baseURL,sv=()=>bo.buildAssetsDir,ov=(...t)=>As(Td(),sv(),...t),Td=(...t)=>{const e=bo.cdnURL||bo.baseURL;return t.length?As(e,...t):e};globalThis.__buildAssetsURL=ov,globalThis.__publicAssetsURL=Td;function ul(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?ul(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const av={run:t=>t()},lv=()=>av,Ad=typeof console.createTask<"u"?console.createTask:lv;function cv(t,e){const n=e.shift(),i=Ad(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function uv(t,e){const n=e.shift(),i=Ad(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function da(t,e){for(const n of[...t])n(e)}class fv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=ul(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=ul(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(cv,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(uv,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&da(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&da(this._after,r)}):(this._after&&r&&da(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function wd(){return new fv}function hv(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&e===void 0){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;fl.add(c);try{const u=r?r.run(o,a):a();return n||(e=void 0),await u}finally{fl.delete(c)}}}}function dv(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=hv({...t,...i})),e[n],e[n]}}}const To=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},su="__unctx__",pv=To[su]||(To[su]=dv()),mv=(t,e={})=>pv.get(t,e),ou="__unctx_async_handlers__",fl=To[ou]||(To[ou]=new Set);function Ao(t){const e=[];for(const r of fl){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const Rd=mv("nuxt-app"),gv="__nuxt_plugin";function _v(t){let e=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.6.1"},get vue(){return n.vueApp.version}},payload:dn({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:r=>yv(n,r),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=wd(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const o="$"+r;ks(n,o,s),ks(n.vueApp.config.globalProperties,o,s)},ks(n.vueApp,"$nuxt",n),ks(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",s=>{n.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||dt;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=dn(n.payload.config);return n.provide("config",i),n}async function vv(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function xv(t,e){const n=[],i=[];for(const r of e){const s=vv(t,r);r.parallel?n.push(s.catch(o=>i.push(o))):await s}if(await Promise.all(n),i.length)throw i[0]}/*! @__NO_SIDE_EFFECTS__ */function ci(t){return typeof t=="function"?t:(delete t.name,Object.assign(t.setup||(()=>{}),t,{[gv]:!0}))}function yv(t,e,n){const i=()=>n?e(...n):e();return Rd.set(t),t.vueApp.runWithContext(i)}/*! @__NO_SIDE_EFFECTS__ */function dt(){var e;let t;if(Jh()&&(t=(e=bs())==null?void 0:e.appContext.app.$nuxt),t=t||Rd.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}/*! @__NO_SIDE_EFFECTS__ */function Jl(){return dt().$config}function ks(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const Mv="modulepreload",Ev=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},au={},Sv=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Ev(s,i),s in au)return;au[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Mv,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},gr=(...t)=>Sv(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),bv=-1,Tv=-2,Av=-3,wv=-4,Rv=-5,Cv=-6;function Pv(t,e){return Lv(JSON.parse(t),e)}function Lv(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,o=!1){if(s===bv)return;if(s===Av)return NaN;if(s===wv)return 1/0;if(s===Rv)return-1/0;if(s===Cv)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return i[s]=c(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const u=new Set;i[s]=u;for(let p=1;p<a.length;p+=1)u.add(r(a[p]));break;case"Map":const f=new Map;i[s]=f;for(let p=1;p<a.length;p+=2)f.set(r(a[p]),r(a[p+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let p=1;p<a.length;p+=2)h[a[p]]=r(a[p+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==Tv&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in a){const u=a[c];l[c]=r(u)}}return i[s]}return r(0)}function Uv(t){return Array.isArray(t)?t:[t]}const Cd=["title","script","style","noscript"],Pd=["base","meta","link","style","script","noscript"],Dv=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Iv=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Nv=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Ld(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function hl(t){return Ld(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function Ov(t){let e=9;for(const n of t)for(let i=0;i<n.length;)e=Math.imul(e^n.charCodeAt(i++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ud(t,e){const{props:n,tag:i}=t;if(Iv.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];i==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof n[s]<"u"){const o=String(n[s]);return e&&!e(o)?!1:`${i}:${s}:${o}`}return!1}function lu(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function zs(t,e=!1,n){const{tag:i,$el:r}=t;r&&(Object.entries(i.props).forEach(([s,o])=>{o=String(o);const a=`attr:${s}`;if(s==="class"){if(!o)return;for(const l of o.split(" ")){const c=`${a}:${l}`;n&&n(t,c,()=>r.classList.remove(l)),r.classList.contains(l)||r.classList.add(l)}return}n&&!s.startsWith("data-h-")&&n(t,a,()=>r.removeAttribute(s)),(e||r.getAttribute(s)!==o)&&r.setAttribute(s,o)}),Cd.includes(i.tag)&&(i.textContent&&i.textContent!==r.textContent?r.textContent=i.textContent:i.innerHTML&&i.innerHTML!==r.innerHTML&&(r.innerHTML=i.innerHTML)))}let Vr=!1;async function Fv(t,e={}){var h,p;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const i=e.document||t.resolvedOptions.document||window.document,r=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(Vr=Vr||t._hash||!1,Vr)){const g=Ov(r.map(v=>v.tag._h));if(Vr===g)return;Vr=g}const s=t._popSideEffectQueue();t.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([v,m])=>{s[v]=m})});const o=(g,v,m)=>{v=`${g.renderId}:${v}`,g.entry&&(g.entry._sde[v]=m),delete s[v]};function a(g){const v=t.headEntries().find(d=>d._i===g._e),m={renderId:g._d||hl(g),$el:null,shouldRender:!0,tag:g,entry:v,markSideEffect:(d,_)=>o(m,d,_)};return m}const l=[],c={body:[],head:[]},u=g=>{t._elMap[g.renderId]=g.$el,l.push(g),o(g,"el",()=>{var v;(v=g.$el)==null||v.remove(),delete t._elMap[g.renderId]})};for(const g of r){if(await t.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:v}=g;if(v.tag==="title"){i.title=v.textContent||"",l.push(g);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){g.$el=i[v.tag==="htmlAttrs"?"documentElement":"body"],zs(g,!1,o),l.push(g);continue}if(g.$el=t._elMap[g.renderId],!g.$el&&v.key&&(g.$el=i.querySelector(`${(h=v.tagPosition)!=null&&h.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._h}]`)),g.$el){g.tag._d&&zs(g),u(g);continue}c[(p=v.tagPosition)!=null&&p.startsWith("body")?"body":"head"].push(g)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(c).forEach(([g,v])=>{var d;if(!v.length)return;const m=(d=i==null?void 0:i[g])==null?void 0:d.children;if(m){for(const _ of[...m].reverse()){const x=_.tagName.toLowerCase();if(!Pd.includes(x))continue;const M=_.getAttributeNames().reduce((P,S)=>({...P,[S]:_.getAttribute(S)}),{}),b={tag:x,props:M};_.innerHTML&&(b.innerHTML=_.innerHTML);const C=hl(b);let L=v.findIndex(P=>(P==null?void 0:P.renderId)===C);if(L===-1){const P=Ud(b);L=v.findIndex(S=>(S==null?void 0:S.tag._d)&&S.tag._d===P)}if(L!==-1){const P=v[L];P.$el=_,zs(P),u(P),delete v[L]}}v.forEach(_=>{const x=_.tag.tagPosition||"head";f[x]=f[x]||i.createDocumentFragment(),_.$el||(_.$el=i.createElement(_.tag.tag),zs(_,!0)),f[x].appendChild(_.$el),u(_)})}}),f.head&&i.head.appendChild(f.head),f.bodyOpen&&i.body.insertBefore(f.bodyOpen,i.body.firstChild),f.bodyClose&&i.body.appendChild(f.bodyClose);for(const g of l)await t.hooks.callHook("dom:renderTag",g);Object.values(s).forEach(g=>g())}let pa=null;async function Bv(t,e={}){function n(){return pa=null,Fv(t,e)}const i=e.delayFn||(r=>setTimeout(r,10));return pa=pa||new Promise(r=>i(()=>r(n())))}function Hv(t){return{hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Bv(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}}}function kv(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const cu={base:-1,title:1},uu={critical:-8,high:-1,low:2};function wo(t){let e=10;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props.charset&&(e=-2),t.props["http-equiv"]==="content-security-policy"&&(e=0)):t.tag in cu&&(e=cu[t.tag]),typeof n=="string"&&n in uu?e+uu[n]:e)}const zv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Vv(){return{hooks:{"tags:resolve":t=>{const e=n=>{var i;return(i=t.tags.find(r=>r._d===n))==null?void 0:i._p};for(const{prefix:n,offset:i}of zv)for(const r of t.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(n))){const s=e(r.tagPriority.replace(n,""));typeof s<"u"&&(r._p=s+i)}t.tags.sort((n,i)=>n._p-i._p).sort((n,i)=>wo(n)-wo(i))}}}}function Gv(){return{hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(r=>r.tag==="titleTemplate");const i=e.findIndex(r=>r.tag==="title");if(i!==-1&&n!==-1){const r=lu(e[n].textContent,e[i].textContent);r!==null?e[i].textContent=r||e[i].textContent:delete e[i]}else if(n!==-1){const r=lu(e[n].textContent);r!==null&&(e[n].textContent=r,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}}function Wv(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const Xv=["link","style","script","noscript"];function jv(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=hl(t)),t.key&&Xv.includes(t.tag)&&(t._h=Ld(t.key),t.props[`data-h-${t._h}`]="")}}}}const fu=["script","link","bodyAttrs"];function $v(){const t=(e,n)=>{const i={},r={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?r[o]=a:i[o]=a});let s;return e==="dom"&&n.tag==="script"&&typeof i.src=="string"&&typeof r.onload<"u"&&(s=i.src,delete i.src),{props:i,eventHandlers:r,delayedSrc:s}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!fu.includes(n.tag)||!Object.entries(n.props).find(([i,r])=>i.startsWith("on")&&typeof r=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!fu.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([s,o])=>s.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:i,delayedSrc:r}=t("dom",e.tag);Object.keys(i).length&&(e.tag.props=n,e.tag._eventHandlers=i,e.tag._delayedSrc=r)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const i=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([r,s])=>{const o=`${e.tag._d||e.tag._p}:${r}`,a=r.slice(2).toLowerCase(),l=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(l))return;const c=s;n.setAttribute(l,""),i.addEventListener(a,c),e.entry&&(e.entry._sde[o]=()=>{i.removeEventListener(a,c),n.removeAttribute(l)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}}const qv=["templateParams","htmlAttrs","bodyAttrs"];function Yv(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(i=>{t.props[i]&&(t.key=t.props[i],delete t.props[i])});const n=Ud(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(i=>{const r=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,s=e[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&qv.includes(i.tag)&&(a="merge"),a==="merge"){const l=s.props;["class","style"].forEach(c=>{i.props[c]&&l[c]&&(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),i.props[c]=`${l[c]} ${i.props[c]}`)}),e[r].props={...l,...i.props};return}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);return}else if(wo(i)>wo(s))return}const o=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(Pd.includes(i.tag)&&o===0){delete e[r];return}e[r]=i});const n=[];Object.values(e).forEach(i=>{const r=i._duped;delete i._duped,n.push(i),r&&n.push(...r)}),t.tags=n}}}}function Vs(t,e){function n(s){if(["s","pageTitle"].includes(s))return e.pageTitle;let o;return s.includes(".")?o=s.split(".").reduce((a,l)=>a&&a[l]||void 0,e):o=e[s],typeof o<"u"?o||"":!1}let i=t;try{i=decodeURI(t)}catch{}return(i.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(s=>{const o=n(s.slice(1));typeof o=="string"&&(t=t.replace(new RegExp(`\\${s}(\\W|$)`,"g"),`${o}$1`).trim())}),e.separator&&(t.endsWith(e.separator)&&(t=t.slice(0,-e.separator.length).trim()),t.startsWith(e.separator)&&(t=t.slice(e.separator.length).trim()),t=t.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),t}function Kv(){return{hooks:{"tags:resolve":t=>{var s;const{tags:e}=t,n=(s=e.find(o=>o.tag==="title"))==null?void 0:s.textContent,i=e.findIndex(o=>o.tag==="templateParams"),r=i!==-1?e[i].props:{};r.pageTitle=r.pageTitle||n||"";for(const o of e)if(["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string")o.textContent=Vs(o.textContent,r);else if(o.tag==="meta"&&typeof o.props.content=="string")o.props.content=Vs(o.props.content,r);else if(o.tag==="link"&&typeof o.props.href=="string")o.props.href=Vs(o.props.href,r);else if(o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string")try{o.innerHTML=JSON.stringify(JSON.parse(o.innerHTML),(a,l)=>typeof l=="string"?Vs(l,r):l)}catch{}t.tags=e.filter(o=>o.tag!=="templateParams")}}}}const Zv=typeof window<"u";let Dd;function Jv(t){return Dd=t}function Qv(){return Dd}async function e0(t,e){const n={tag:t,props:{}};return e instanceof Promise&&(e=await e),t==="templateParams"?(n.props=e,n):["title","titleTemplate"].includes(t)?(e&&typeof e=="object"?(n.textContent=e.textContent,e.tagPriority&&(n.tagPriority=e.tagPriority)):n.textContent=e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:n.innerHTML=e,n):!1:(n.props=await n0(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(i=>Nv.includes(i)).forEach(i=>{(!["innerHTML","textContent"].includes(i)||Cd.includes(n.tag))&&(n[i]=n.props[i]),delete n.props[i]}),["innerHTML","textContent"].forEach(i=>{if(n.tag==="script"&&typeof n[i]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[i]=JSON.parse(n[i])}catch{n[i]=""}typeof n[i]=="object"&&(n[i]=JSON.stringify(n[i]))}),n.props.class&&(n.props.class=t0(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(i=>({...n,props:{...n.props,content:i}})):n)}function t0(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function n0(t,e){for(const n of Object.keys(e)){const i=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=i?"true":"":String(e[n])==="false"&&(i?e[n]="false":delete e[n])}return e}const i0=10;async function r0(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,i])=>typeof i<"u"&&Dv.includes(n)).forEach(([n,i])=>{const r=Uv(i);e.push(...r.map(s=>e0(n,s)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,i)=>(n._e=t._i,n._p=(t._i<<i0)+i,n))}function s0(){return[Yv(),Vv(),Kv(),Gv(),jv(),$v(),Wv()]}function o0(t={}){return[Hv({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function a0(t={}){const e=l0({...t,plugins:[...o0(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=kv(e.resolvedOptions.document)),Jv(e),e}function l0(t={}){let e=[],n={},i=0;const r=wd();t!=null&&t.hooks&&r.addHooks(t.hooks),t.plugins=[...s0(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks)),t.document=t.document||(Zv?document:void 0);const s=()=>r.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,l){const c={_i:i++,input:a,_sde:{}};return l!=null&&l.mode&&(c._m=l==null?void 0:l.mode),l!=null&&l.transform&&(c._t=l==null?void 0:l.transform),e.push(c),s(),{dispose(){e=e.filter(u=>u._i!==c._i?!0:(n={...n,...u._sde||{}},u._sde={},s(),!1))},patch(u){e=e.map(f=>(f._i===c._i&&(c.input=f.input=u,s()),f))}}},async resolveTags(){const a={tags:[],entries:[...e]};await r.callHook("entries:resolve",a);for(const l of a.entries){const c=l._t||(u=>u);if(l.resolvedInput=c(l.resolvedInput||l.input),l.resolvedInput)for(const u of await r0(l)){const f={tag:u,entry:l,resolvedOptions:o.resolvedOptions};await r.callHook("tag:normalise",f),a.tags.push(f.tag)}}return await r.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}function c0(t){return typeof t=="function"?t():nt(t)}function Ro(t,e=""){if(t instanceof Promise)return t;const n=c0(t);return!t||!n?n:Array.isArray(n)?n.map(i=>Ro(i,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,r])=>i==="titleTemplate"||i.startsWith("on")?[i,nt(r)]:[i,Ro(r,i)])):n}const u0=pd.startsWith("3"),f0=typeof window<"u",Id="usehead";function Ql(){return bs()&&en(Id)||Qv()}function h0(t){return{install(n){u0&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Id,t))}}.install}function d0(t={}){const e=a0({...t,domDelayFn:n=>setTimeout(()=>Ir(()=>n()),10),plugins:[p0(),...(t==null?void 0:t.plugins)||[]]});return e.install=h0(e),e}function p0(){return{hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Ro(e.input)}}}}function m0(t,e={}){const n=Ql(),i=hn(!1),r=hn({});Zm(()=>{r.value=i.value?{}:Ro(t)});const s=n.push(r.value,e);return dr(r,a=>{s.patch(a)}),bs()&&(Go(()=>{s.dispose()}),Wh(()=>{i.value=!0}),Gh(()=>{i.value=!1})),s}function g0(t,e={}){return Ql().push(t,e)}function cw(t,e={}){var i;const n=Ql();if(n){const r=f0||!!((i=n.resolvedOptions)!=null&&i.document);return e.mode==="server"&&r||e.mode==="client"&&!r?void 0:r?m0(t,e):g0(t,e)}}const _0={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[{rel:"icon",type:"image/x-icon",href:"/sky-browser/favicon.ico"}],style:[],script:[],noscript:[],title:"Sky Browser"},dl=!1,v0=!1,x0="__nuxt",y0=!0;function hu(t,e={}){const n=M0(t,e),i=dt(),r=i._payloadCache=i._payloadCache||{};return r[n]||(r[n]=Nd(n).then(s=>s||(delete r[n],null))),r[n]}const du="json";function M0(t,e={}){const n=new URL(t,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+t);if(n.host!=="localhost"||Ts(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=e.hash||(e.fresh?Date.now():"");return As(Jl().app.baseURL,n.pathname,i?`_payload.${i}.${du}`:`_payload.${du}`)}async function Nd(t){try{return y0?Od(await fetch(t).then(e=>e.text())):await gr(()=>import(t),[],import.meta.url).then(e=>e.default||e)}catch(e){console.warn("[nuxt] Cannot load payload ",t,e)}return null}function E0(){return!!dt().payload.prerenderedAt}let Gs=null;async function S0(){if(Gs)return Gs;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=Od(t.textContent||""),n=t.dataset.src?await Nd(t.dataset.src):void 0;return Gs={...e,...n,...window.__NUXT__},Gs}function Od(t){return Pv(t,dt()._payloadRevivers)}function b0(t,e){dt()._payloadRevivers[t]=e}function ma(t){return t!==null&&typeof t=="object"}function pl(t,e,n=".",i){if(!ma(e))return pl(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:ma(o)&&ma(r[s])?r[s]=pl(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function T0(t){return(...e)=>e.reduce((n,i)=>pl(n,i,"",t),{})}const A0=T0();class ml extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1}toJSON(){const e={message:this.message,statusCode:_l(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Fd(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}ml.__h3_error__=!0;function gl(t){if(typeof t=="string")return new ml(t);if(w0(t))return t;const e=new ml(t.message??t.statusMessage??"",t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=_l(t.statusCode,e.statusCode):t.status&&(e.statusCode=_l(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Fd(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function w0(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const R0=/[^\u0009\u0020-\u007E]/g;function Fd(t=""){return t.replace(R0,"")}function _l(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const C0="$s";function P0(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,i]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(i!==void 0&&typeof i!="function")throw new Error("[nuxt] [useState] init must be a function: "+i);const r=C0+n,s=dt(),o=Ch(s.payload.state,r);if(o.value===void 0&&i){const a=i();if(pt(a))return s.payload.state[r]=a,a;o.value=a}return o}const Or=()=>{var t;return(t=dt())==null?void 0:t.$router},L0=()=>Jh()?en("_route",dt()._route):dt()._route;/*! @__NO_SIDE_EFFECTS__ */const U0=()=>{try{if(dt()._processingMiddleware)return!0}catch{return!0}return!1},uw=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:Md(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:l={}}=e.open,c=Object.entries(l).filter(([u,f])=>f!==void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");open(n,a,c)}return Promise.resolve()}const i=(e==null?void 0:e.external)||Ts(n,{acceptRelative:!0});if(i&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(i&&jo(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const r=U0();if(!i&&r)return t;const s=Or(),o=dt();return i?(e!=null&&e.replace?location.replace(n):location.href=n,r?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?s.replace(t):s.push(t)},$o=()=>Ch(dt().payload,"error"),or=t=>{const e=ec(t);try{const n=dt(),i=$o();n.hooks.callHook("app:error",e),i.value=i.value||e}catch{throw e}return e},D0=async(t={})=>{const e=dt(),n=$o();e.callHook("app:error:cleared",t),t.redirect&&await Or().replace(t.redirect),n.value=null},I0=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),ec=t=>{const e=gl(t);return e.__nuxt_error=!0,e},pu={NuxtError:t=>ec(t),EmptyShallowRef:t=>hs(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),EmptyRef:t=>hn(t==="_"?void 0:t==="0n"?BigInt(0):JSON.parse(t)),ShallowRef:t=>hs(t),ShallowReactive:t=>Mh(t),Ref:t=>hn(t),Reactive:t=>dn(t)},N0=ci({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const i in pu)b0(i,pu[i]);Object.assign(t.payload,([e,n]=Ao(()=>t.runWithContext(S0)),e=await e,n(),e)),window.__NUXT__=t.payload}});/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const rr=typeof window<"u";function O0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function ga(t,e){const n={};for(const i in e){const r=e[i];n[i]=pn(r)?r.map(t):t(r)}return n}const rs=()=>{},pn=Array.isArray,F0=/\/$/,B0=t=>t.replace(F0,"");function _a(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=V0(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function H0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function k0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Sr(e.matched[i],n.matched[r])&&Bd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!z0(t[n],e[n]))return!1;return!0}function z0(t,e){return pn(t)?gu(t,e):pn(e)?gu(e,t):t===e}function gu(t,e){return pn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function V0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var vs;(function(t){t.pop="pop",t.push="push"})(vs||(vs={}));var ss;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ss||(ss={}));function G0(t){if(!t)if(rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),B0(t)}const W0=/^[^#]+#/;function X0(t,e){return t.replace(W0,"#")+e}function j0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const qo=()=>({left:window.pageXOffset,top:window.pageYOffset});function $0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=j0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _u(t,e){return(history.state?history.state.position-e:-1)+t}const vl=new Map;function q0(t,e){vl.set(t,e)}function Y0(t){const e=vl.get(t);return vl.delete(t),e}let K0=()=>location.protocol+"//"+location.host;function Hd(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),mu(l,"")}return mu(n,t)+i+r}function Z0(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=Hd(t,location),g=n.value,v=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===g){o=null;return}m=v?h.position-v.position:0}else i(p);r.forEach(d=>{d(n.value,g,{delta:m,type:vs.pop,direction:m?m>0?ss.forward:ss.back:ss.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:qo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function vu(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?qo():null}}function J0(t){const{history:e,location:n}=window,i={value:Hd(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:K0()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=Ye({},e.state,vu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ye({},r.value,e.state,{forward:l,scroll:qo()});s(u.current,u,!0);const f=Ye({},vu(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function kd(t){t=G0(t);const e=J0(t),n=Z0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ye({location:"",base:t,go:i,createHref:X0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Q0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),kd(t)}function ex(t){return typeof t=="string"||t&&typeof t=="object"}function zd(t){return typeof t=="string"||typeof t=="symbol"}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vd=Symbol("");var xu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xu||(xu={}));function br(t,e){return Ye(new Error,{type:t,[Vd]:!0},e)}function Tn(t,e){return t instanceof Error&&Vd in t&&(e==null||!!(t.type&e))}const yu="[^/]+?",tx={sensitive:!1,strict:!1,start:!0,end:!0},nx=/[.+*?^${}()[\]/\\]/g;function ix(t,e){const n=Ye({},tx,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(nx,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:v,optional:m,regexp:d}=h;s.push({name:g,repeatable:v,optional:m});const _=d||yu;if(_!==yu){p+=10;try{new RegExp(`(${_})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+M.message)}}let x=v?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,p+=20,m&&(p+=-8),v&&(p+=-20),_===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:m}=p,d=g in c?c[g]:"";if(pn(d)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=pn(d)?d.join("/"):d;if(!_)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=_}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function rx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sx(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=rx(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Mu(i))return 1;if(Mu(r))return-1}return r.length-i.length}function Mu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ox={type:0,value:""},ax=/[a-zA-Z0-9_]/;function lx(t){if(!t)return[[]];if(t==="/")return[[ox]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:ax.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function cx(t,e,n){const i=ix(lx(t.path),n),r=Ye(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ux(t,e){const n=[],i=new Map;e=bu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,g=fx(u);g.aliasOf=h&&h.record;const v=bu(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of x)m.push(Ye({},g,{components:h?h.record.components:g.components,path:M,aliasOf:h?h.record:g}))}let d,_;for(const x of m){const{path:M}=x;if(f&&M[0]!=="/"){const b=f.record.path,C=b[b.length-1]==="/"?"":"/";x.path=f.record.path+(M&&C+M)}if(d=cx(x,f,v),h?h.alias.push(d):(_=_||d,_!==d&&_.alias.push(d),p&&u.name&&!Su(d)&&o(u.name)),g.children){const b=g.children;for(let C=0;C<b.length;C++)s(b[C],d,h&&h.children[C])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return _?()=>{o(_)}:rs}function o(u){if(zd(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&sx(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Gd(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Su(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},g,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw br(1,{location:u});v=h.record.name,p=Ye(Eu(f.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&Eu(u.params,h.keys.map(_=>_.name))),g=h.stringify(p)}else if("path"in u)g=u.path,h=n.find(_=>_.re.test(g)),h&&(p=h.parse(g),v=h.record.name);else{if(h=f.name?i.get(f.name):n.find(_=>_.re.test(f.path)),!h)throw br(1,{location:u,currentLocation:f});v=h.record.name,p=Ye({},f.params,u.params),g=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:v,path:g,params:p,matched:m,meta:dx(m)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Eu(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function fx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Su(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dx(t){return t.reduce((e,n)=>Ye(e,n.meta),{})}function bu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Gd(t,e){return e.children.some(n=>n===t||Gd(t,n))}const Wd=/#/g,px=/&/g,mx=/\//g,gx=/=/g,_x=/\?/g,Xd=/\+/g,vx=/%5B/g,xx=/%5D/g,jd=/%5E/g,yx=/%60/g,$d=/%7B/g,Mx=/%7C/g,qd=/%7D/g,Ex=/%20/g;function tc(t){return encodeURI(""+t).replace(Mx,"|").replace(vx,"[").replace(xx,"]")}function Sx(t){return tc(t).replace($d,"{").replace(qd,"}").replace(jd,"^")}function xl(t){return tc(t).replace(Xd,"%2B").replace(Ex,"+").replace(Wd,"%23").replace(px,"%26").replace(yx,"`").replace($d,"{").replace(qd,"}").replace(jd,"^")}function bx(t){return xl(t).replace(gx,"%3D")}function Tx(t){return tc(t).replace(Wd,"%23").replace(_x,"%3F")}function Ax(t){return t==null?"":Tx(t).replace(mx,"%2F")}function Co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Xd," "),o=s.indexOf("="),a=Co(o<0?s:s.slice(0,o)),l=o<0?null:Co(s.slice(o+1));if(a in e){let c=e[a];pn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Tu(t){let e="";for(let n in t){const i=t[n];if(n=bx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(pn(i)?i.map(s=>s&&xl(s)):[i&&xl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Rx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=pn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Cx=Symbol(""),Au=Symbol(""),nc=Symbol(""),Yd=Symbol(""),yl=Symbol("");function Gr(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Jn(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(br(4,{from:n,to:e})):f instanceof Error?a(f):ex(f)?a(br(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function va(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Px(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Jn(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=O0(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Jn(h,n,i,s,o)()}))}}return r}function Px(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wu(t){const e=en(nc),n=en(Yd),i=Ft(()=>e.resolve(nt(t.to))),r=Ft(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Sr.bind(null,u));if(h>-1)return h;const p=Ru(l[c-2]);return c>1&&Ru(u)===p&&f[f.length-1].path!==p?f.findIndex(Sr.bind(null,l[c-2])):h}),s=Ft(()=>r.value>-1&&Ix(n.params,i.value.params)),o=Ft(()=>r.value>-1&&r.value===n.matched.length-1&&Bd(n.params,i.value.params));function a(l={}){return Dx(l)?e[nt(t.replace)?"replace":"push"](nt(t.to)).catch(rs):Promise.resolve()}return{route:i,href:Ft(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Lx=Nr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wu,setup(t,{slots:e}){const n=dn(wu(t)),{options:i}=en(nc),r=Ft(()=>({[Cu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Cu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Bn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Ux=Lx;function Dx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ix(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!pn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Ru(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cu=(t,e,n)=>t??e??n,Nx=Nr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=en(yl),r=Ft(()=>t.route||i.value),s=en(Au,0),o=Ft(()=>{let c=nt(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ft(()=>r.value.matched[o.value]);mr(Au,Ft(()=>o.value+1)),mr(Cx,a),mr(yl,r);const l=hn();return dr(()=>[l.value,a.value,t.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Sr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Pu(n.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Bn(h,Ye({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Pu(n.default,{Component:m,route:c})||m}}});function Pu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Kd=Nx;function Ox(t){const e=ux(t.routes,t),n=t.parseQuery||wx,i=t.stringifyQuery||Tu,r=t.history,s=Gr(),o=Gr(),a=Gr(),l=hs(gn);let c=gn;rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ga.bind(null,B=>""+B),f=ga.bind(null,Ax),h=ga.bind(null,Co);function p(B,fe){let ne,xe;return zd(B)?(ne=e.getRecordMatcher(B),xe=fe):xe=B,e.addRoute(xe,ne)}function g(B){const fe=e.getRecordMatcher(B);fe&&e.removeRoute(fe)}function v(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function d(B,fe){if(fe=Ye({},fe||l.value),typeof B=="string"){const D=_a(n,B,fe.path),H=e.resolve({path:D.path},fe),V=r.createHref(D.fullPath);return Ye(D,H,{params:h(H.params),hash:Co(D.hash),redirectedFrom:void 0,href:V})}let ne;if("path"in B)ne=Ye({},B,{path:_a(n,B.path,fe.path).path});else{const D=Ye({},B.params);for(const H in D)D[H]==null&&delete D[H];ne=Ye({},B,{params:f(D)}),fe.params=f(fe.params)}const xe=e.resolve(ne,fe),we=B.hash||"";xe.params=u(h(xe.params));const y=H0(i,Ye({},B,{hash:Sx(we),path:xe.path})),U=r.createHref(y);return Ye({fullPath:y,hash:we,query:i===Tu?Rx(B.query):B.query||{}},xe,{redirectedFrom:void 0,href:U})}function _(B){return typeof B=="string"?_a(n,B,l.value.path):Ye({},B)}function x(B,fe){if(c!==B)return br(8,{from:fe,to:B})}function M(B){return L(B)}function b(B){return M(Ye(_(B),{replace:!0}))}function C(B){const fe=B.matched[B.matched.length-1];if(fe&&fe.redirect){const{redirect:ne}=fe;let xe=typeof ne=="function"?ne(B):ne;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=_(xe):{path:xe},xe.params={}),Ye({query:B.query,hash:B.hash,params:"path"in xe?{}:B.params},xe)}}function L(B,fe){const ne=c=d(B),xe=l.value,we=B.state,y=B.force,U=B.replace===!0,D=C(ne);if(D)return L(Ye(_(D),{state:typeof D=="object"?Ye({},we,D.state):we,force:y,replace:U}),fe||ne);const H=ne;H.redirectedFrom=fe;let V;return!y&&k0(i,xe,ne)&&(V=br(16,{to:H,from:xe}),Ee(xe,xe,!0,!1)),(V?Promise.resolve(V):A(H,xe)).catch(ee=>Tn(ee)?Tn(ee,2)?ee:de(ee):Y(ee,H,xe)).then(ee=>{if(ee){if(Tn(ee,2))return L(Ye({replace:U},_(ee.to),{state:typeof ee.to=="object"?Ye({},we,ee.to.state):we,force:y}),fe||H)}else ee=G(H,xe,!0,U,we);return k(H,xe,ee),ee})}function P(B,fe){const ne=x(B,fe);return ne?Promise.reject(ne):Promise.resolve()}function S(B){const fe=me.values().next().value;return fe&&typeof fe.runWithContext=="function"?fe.runWithContext(B):B()}function A(B,fe){let ne;const[xe,we,y]=Fx(B,fe);ne=va(xe.reverse(),"beforeRouteLeave",B,fe);for(const D of xe)D.leaveGuards.forEach(H=>{ne.push(Jn(H,B,fe))});const U=P.bind(null,B,fe);return ne.push(U),ge(ne).then(()=>{ne=[];for(const D of s.list())ne.push(Jn(D,B,fe));return ne.push(U),ge(ne)}).then(()=>{ne=va(we,"beforeRouteUpdate",B,fe);for(const D of we)D.updateGuards.forEach(H=>{ne.push(Jn(H,B,fe))});return ne.push(U),ge(ne)}).then(()=>{ne=[];for(const D of B.matched)if(D.beforeEnter&&!fe.matched.includes(D))if(pn(D.beforeEnter))for(const H of D.beforeEnter)ne.push(Jn(H,B,fe));else ne.push(Jn(D.beforeEnter,B,fe));return ne.push(U),ge(ne)}).then(()=>(B.matched.forEach(D=>D.enterCallbacks={}),ne=va(y,"beforeRouteEnter",B,fe),ne.push(U),ge(ne))).then(()=>{ne=[];for(const D of o.list())ne.push(Jn(D,B,fe));return ne.push(U),ge(ne)}).catch(D=>Tn(D,8)?D:Promise.reject(D))}function k(B,fe,ne){for(const xe of a.list())S(()=>xe(B,fe,ne))}function G(B,fe,ne,xe,we){const y=x(B,fe);if(y)return y;const U=fe===gn,D=rr?history.state:{};ne&&(xe||U?r.replace(B.fullPath,Ye({scroll:U&&D&&D.scroll},we)):r.push(B.fullPath,we)),l.value=B,Ee(B,fe,ne,U),de()}let O;function I(){O||(O=r.listen((B,fe,ne)=>{if(!Te.listening)return;const xe=d(B),we=C(xe);if(we){L(Ye(we,{replace:!0}),xe).catch(rs);return}c=xe;const y=l.value;rr&&q0(_u(y.fullPath,ne.delta),qo()),A(xe,y).catch(U=>Tn(U,12)?U:Tn(U,2)?(L(U.to,xe).then(D=>{Tn(D,20)&&!ne.delta&&ne.type===vs.pop&&r.go(-1,!1)}).catch(rs),Promise.reject()):(ne.delta&&r.go(-ne.delta,!1),Y(U,xe,y))).then(U=>{U=U||G(xe,y,!1),U&&(ne.delta&&!Tn(U,8)?r.go(-ne.delta,!1):ne.type===vs.pop&&Tn(U,20)&&r.go(-1,!1)),k(xe,y,U)}).catch(rs)}))}let j=Gr(),te=Gr(),$;function Y(B,fe,ne){de(B);const xe=te.list();return xe.length?xe.forEach(we=>we(B,fe,ne)):console.error(B),Promise.reject(B)}function le(){return $&&l.value!==gn?Promise.resolve():new Promise((B,fe)=>{j.add([B,fe])})}function de(B){return $||($=!B,I(),j.list().forEach(([fe,ne])=>B?ne(B):fe()),j.reset()),B}function Ee(B,fe,ne,xe){const{scrollBehavior:we}=t;if(!rr||!we)return Promise.resolve();const y=!ne&&Y0(_u(B.fullPath,0))||(xe||!ne)&&history.state&&history.state.scroll||null;return Ir().then(()=>we(B,fe,y)).then(U=>U&&$0(U)).catch(U=>Y(U,B,fe))}const q=B=>r.go(B);let pe;const me=new Set,Te={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:v,resolve:d,options:t,push:M,replace:b,go:q,back:()=>q(-1),forward:()=>q(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:le,install(B){const fe=this;B.component("RouterLink",Ux),B.component("RouterView",Kd),B.config.globalProperties.$router=fe,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>nt(l)}),rr&&!pe&&l.value===gn&&(pe=!0,M(r.location).catch(we=>{}));const ne={};for(const we in gn)ne[we]=Ft(()=>l.value[we]);B.provide(nc,fe),B.provide(Yd,dn(ne)),B.provide(yl,l);const xe=B.unmount;me.add(B),B.unmount=function(){me.delete(B),me.size<1&&(c=gn,O&&O(),O=null,l.value=gn,pe=!1,$=!1),xe()}}};function ge(B){return B.reduce((fe,ne)=>fe.then(()=>S(ne)),Promise.resolve())}return Te}function Fx(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Sr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Sr(c,l))||r.push(l))}return[n,i,r]}const Lu=[{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>gr(()=>import("./index.d2b9dc60.js"),["./index.d2b9dc60.js","./nuxt-link.dc2e43e3.js","./index.2a13f599.css"],import.meta.url).then(t=>t.default||t)},{name:"ktx",path:"/ktx",meta:{},alias:[],redirect:void 0,component:()=>gr(()=>import("./ktx.db70f788.js"),["./ktx.db70f788.js","./drop-zone.983f13c4.js","./drop-zone.41190b7d.css","./ktx.6696ab87.css"],import.meta.url).then(t=>t.default||t)},{name:"mesh",path:"/mesh",meta:{},alias:[],redirect:void 0,component:()=>gr(()=>import("./mesh.44df3f3f.js"),["./mesh.44df3f3f.js","./drop-zone.983f13c4.js","./drop-zone.41190b7d.css","./mesh.ff10880c.css"],import.meta.url).then(t=>t.default||t)}],Bx={scrollBehavior(t,e,n){const i=dt();let r=n||void 0;if(!r&&e&&t&&t.meta.scrollToTop!==!1&&Hx(e,t)&&(r={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:Uu(t.hash)}}const s=a=>!!(a.meta.pageTransition??dl),o=s(e)&&s(t)?"page:transition:finish":"page:finish";return new Promise(a=>{i.hooks.hookOnce(o,async()=>{await Ir(),t.hash&&(r={el:t.hash,top:Uu(t.hash)}),a(r)})})}};function Uu(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function Hx(t,e){const n=e.matched.every((i,r)=>{var s,o,a;return((s=i.components)==null?void 0:s.default)===((a=(o=t.matched[r])==null?void 0:o.components)==null?void 0:a.default)});return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const kx={},It={...kx,...Bx},zx=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const i=dt(),r=Or();if(([e,n]=Ao(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=ec({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=r.beforeResolve(c=>{if(a(),c===t){const u=r.afterEach(async()=>{u(),await i.runWithContext(()=>or(o)),window.history.pushState({},"",t.fullPath)});return!1}})},Vx=[zx],os={};function Gx(t,e,n){const{pathname:i,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){const l=s.includes(t.slice(o))?t.slice(o).length:1;let c=s.slice(l);return c[0]!=="/"&&(c="/"+c),nu(c,"")}const a=n||nu(i,t);return a+(a.includes("?")?"":r)+s}const Wx=ci({name:"nuxt:router",enforce:"pre",async setup(t){var v,m;let e,n,i=Jl().app.baseURL;It.hashMode&&!i.includes("#")&&(i+="#");const r=((v=It.history)==null?void 0:v.call(It,i))??(It.hashMode?Q0(i):kd(i)),s=((m=It.routes)==null?void 0:m.call(It,Lu))??Lu;let o;const a=Gx(i,window.location,t.payload.path),l=Ox({...It,scrollBehavior:(d,_,x)=>{var M;if(_===gn){o=x;return}return l.options.scrollBehavior=It.scrollBehavior,(M=It.scrollBehavior)==null?void 0:M.call(It,d,gn,o||x)},history:r,routes:s});t.vueApp.use(l);const c=hs(l.currentRoute.value);l.afterEach((d,_)=>{c.value=_}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=hs(l.resolve(a)),f=()=>{u.value=l.currentRoute.value};t.hook("page:finish",f),l.afterEach((d,_)=>{var x,M,b,C;((M=(x=d.matched[0])==null?void 0:x.components)==null?void 0:M.default)===((C=(b=_.matched[0])==null?void 0:b.components)==null?void 0:C.default)&&f()});const h={};for(const d in u.value)h[d]=Ft(()=>u.value[d]);t._route=dn(h),t._middleware=t._middleware||{global:[],named:{}};const p=$o();try{[e,n]=Ao(()=>l.isReady()),await e,n()}catch(d){[e,n]=Ao(()=>t.runWithContext(()=>or(d))),await e,n()}const g=P0("_layout");return l.beforeEach(async(d,_)=>{var x;d.meta=dn(d.meta),t.isHydrating&&g.value&&!Di(d.meta.layout)&&(d.meta.layout=g.value),t._processingMiddleware=!0;{const M=new Set([...Vx,...t._middleware.global]);for(const b of d.matched){const C=b.meta.middleware;if(C)if(Array.isArray(C))for(const L of C)M.add(L);else M.add(C)}for(const b of M){const C=typeof b=="string"?t._middleware.named[b]||await((x=os[b])==null?void 0:x.call(os).then(P=>P.default||P)):b;if(!C)throw new Error(`Unknown route middleware: '${b}'.`);const L=await t.runWithContext(()=>C(d,_));if(!t.payload.serverRendered&&t.isHydrating&&(L===!1||L instanceof Error)){const P=L||gl({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await t.runWithContext(()=>or(P)),!1}if(L||L===!1)return L}}}),l.onError(()=>{delete t._processingMiddleware}),l.afterEach(async(d,_,x)=>{delete t._processingMiddleware,!t.isHydrating&&p.value&&await t.runWithContext(D0),d.matched.length===0&&await t.runWithContext(()=>or(gl({statusCode:404,fatal:!1,statusMessage:`Page not found: ${d.fullPath}`})))}),t.hooks.hookOnce("app:created",async()=>{try{await l.replace({...l.resolve(a),name:void 0,force:!0}),l.options.scrollBehavior=It.scrollBehavior}catch(d){await t.runWithContext(()=>or(d))}}),{provide:{router:l}}}}),Xx=ci({name:"nuxt:global-components"}),jx=ci({name:"nuxt:head",setup(t){const n=d0();n.push(_0),t.vueApp.use(n);{let i=!0;const r=()=>{i=!1,n.hooks.callHook("entries:updated",n)};n.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!i}),t.hooks.hook("page:start",()=>{i=!0}),t.hooks.hook("page:finish",r),t.hooks.hook("app:suspense:resolve",r)}}}),Ws={},$x=ci({name:"nuxt:prefetch",setup(t){const e=Or();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const i=(r=n==null?void 0:n.meta)==null?void 0:r.layout;i&&typeof Ws[i]=="function"&&await Ws[i]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,l,c;if(Ts(n))return;const i=e.resolve(n);if(!i)return;const r=(o=i==null?void 0:i.meta)==null?void 0:o.layout;let s=Array.isArray((a=i==null?void 0:i.meta)==null?void 0:a.middleware)?(l=i==null?void 0:i.meta)==null?void 0:l.middleware:[(c=i==null?void 0:i.meta)==null?void 0:c.middleware];s=s.filter(u=>typeof u=="string");for(const u of s)typeof os[u]=="function"&&os[u]();r&&typeof Ws[r]=="function"&&Ws[r]()})}});function qx(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:dt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Yx=ci({name:"nuxt:chunk-reload",setup(t){const e=Or(),n=Jl(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:r})=>{i.add(r)}),e.onError((r,s)=>{if(i.has(r)){const a="href"in s&&s.href.startsWith("#")?n.app.baseURL+s.href:As(n.app.baseURL,s.fullPath);qx({path:a,persistState:!0})}})}}),Kx=ci({name:"nuxt:payload",setup(t){E0()&&(t.hooks.hook("link:prefetch",async e=>{jo(e).protocol||await hu(e)}),Or().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const i=await hu(e.path);i&&Object.assign(t.static.data,i.data)}))}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="153",ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zx=0,Du=1,Jx=2,Zd=1,Qx=2,Dn=3,li=0,kt=1,Nn=2,si=0,_r=1,Iu=2,Nu=3,Ou=4,ey=5,sr=100,ty=101,ny=102,Fu=103,Bu=104,iy=200,ry=201,sy=202,oy=203,Jd=204,Qd=205,ay=206,ly=207,cy=208,uy=209,fy=210,hy=0,dy=1,py=2,Ml=3,my=4,gy=5,_y=6,vy=7,ep=0,xy=1,yy=2,Hn=0,My=1,Ey=2,Sy=3,by=4,Ty=5,tp=300,Tr=301,Ar=302,El=303,Sl=304,Yo=306,bl=1e3,jt=1001,Tl=1002,Et=1003,Hu=1004,xa=1005,St=1006,Ay=1007,wr=1008,oi=1009,wy=1010,Ry=1011,rc=1012,np=1013,ei=1014,ti=1015,xs=1016,ip=1017,rp=1018,Ri=1020,Cy=1021,un=1023,Py=1024,Ly=1025,Ci=1026,Rr=1027,Uy=1028,sp=1029,Dy=1030,op=1031,ap=1033,ya=33776,Ma=33777,Ea=33778,Sa=33779,ku=35840,zu=35841,Vu=35842,Gu=35843,Iy=36196,Wu=37492,Xu=37496,ju=37808,$u=37809,qu=37810,Yu=37811,Ku=37812,Zu=37813,Ju=37814,Qu=37815,ef=37816,tf=37817,nf=37818,rf=37819,sf=37820,of=37821,ba=36492,Ny=36283,af=36284,lf=36285,cf=36286,fw=2300,hw=2301,lp=3e3,Pi=3001,Oy=3200,Fy=3201,cp=0,By=1,Li="",ke="srgb",Sn="srgb-linear",up="display-p3",Ta=7680,Hy=519,ky=512,zy=513,Vy=514,Gy=515,Wy=516,Xy=517,jy=518,$y=519,uf=35044,ff="300 es",Al=1035,Fn=2e3,Po=2001;class Fi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hf=1234567;const as=Math.PI/180,ys=180/Math.PI;function Fr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[t&255]+Tt[t>>8&255]+Tt[t>>16&255]+Tt[t>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[n&63|128]+Tt[n>>8&255]+"-"+Tt[n>>16&255]+Tt[n>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function bt(t,e,n){return Math.max(e,Math.min(n,t))}function sc(t,e){return(t%e+e)%e}function qy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Yy(t,e,n){return t!==e?(n-t)/(e-t):0}function ls(t,e,n){return(1-n)*t+n*e}function Ky(t,e,n,i){return ls(t,e,1-Math.exp(-n*i))}function Zy(t,e=1){return e-Math.abs(sc(t,e*2)-e)}function Jy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Qy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function eM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function tM(t,e){return t+Math.random()*(e-t)}function nM(t){return t*(.5-Math.random())}function iM(t){t!==void 0&&(hf=t);let e=hf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rM(t){return t*as}function sM(t){return t*ys}function wl(t){return(t&t-1)===0&&t!==0}function oM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Lo(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function aM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const dw={DEG2RAD:as,RAD2DEG:ys,generateUUID:Fr,clamp:bt,euclideanModulo:sc,mapLinear:qy,inverseLerp:Yy,lerp:ls,damp:Ky,pingpong:Zy,smoothstep:Jy,smootherstep:Qy,randInt:eM,randFloat:tM,randFloatSpread:nM,seededRandom:iM,degToRad:rM,radToDeg:sM,isPowerOfTwo:wl,ceilPowerOfTwo:oM,floorPowerOfTwo:Lo,setQuaternionFromProperEuler:aM,normalize:Nt,denormalize:Zr};class ze{constructor(e=0,n=0){ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],_=r[1],x=r[4],M=r[7],b=r[2],C=r[5],L=r[8];return s[0]=o*v+a*_+l*b,s[3]=o*m+a*x+l*C,s[6]=o*d+a*M+l*L,s[1]=c*v+u*_+f*b,s[4]=c*m+u*x+f*C,s[7]=c*d+u*M+f*L,s[2]=h*v+p*_+g*b,s[5]=h*m+p*x+g*C,s[8]=h*d+p*M+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Aa.makeScale(e,n)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,n){return this.premultiply(Aa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Ge;function fp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Uo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const df={};function cs(t){t in df||(df[t]=!0,console.warn(t))}function vr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const lM=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cM=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function uM(t){return t.convertSRGBToLinear().applyMatrix3(cM)}function fM(t){return t.applyMatrix3(lM).convertLinearToSRGB()}const hM={[Sn]:t=>t,[ke]:t=>t.convertSRGBToLinear(),[up]:uM},dM={[Sn]:t=>t,[ke]:t=>t.convertLinearToSRGB(),[up]:fM},nn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Sn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=hM[e],r=dM[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Vi;class hp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vi===void 0&&(Vi=Uo("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Uo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vr(n[i]/255)*255):n[i]=vr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pM=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Fr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ra(r[o].image)):s.push(Ra(r[o]))}else s=Ra(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ra(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mM=0;class Dt extends Fi{constructor(e=Dt.DEFAULT_IMAGE,n=Dt.DEFAULT_MAPPING,i=jt,r=jt,s=St,o=wr,a=un,l=oi,c=Dt.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Fr(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Pi?ke:Li),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?Pi:lp}set encoding(e){cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pi?ke:Li}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=tp;Dt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(p+1)/2,b=(d+1)/2,C=(u+h)/4,L=(f+v)/4,P=(g+m)/4;return x>M&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=L/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=L/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ii extends Fi{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pi?ke:Li),this.texture=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:St,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new dp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pp extends Dt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gM extends Dt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*v,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const b=Math.sqrt(x),C=Math.atan2(b,d*_);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const M=a*_;if(l=l*m+h*M,c=c*m+p*M,u=u*m+g*M,f=f*m+v*M,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,f=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new X,pf=new Ni;class ws{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox),Gi.applyMatrix4(e.matrixWorld),this.union(Gi);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)wn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(wn)}else r.boundingBox===null&&r.computeBoundingBox(),Gi.copy(r.boundingBox),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Xs.subVectors(this.max,Wr),Wi.subVectors(e.a,Wr),Xi.subVectors(e.b,Wr),ji.subVectors(e.c,Wr),$n.subVectors(Xi,Wi),qn.subVectors(ji,Xi),gi.subVectors(Wi,ji);let n=[0,-$n.z,$n.y,0,-qn.z,qn.y,0,-gi.z,gi.y,$n.z,0,-$n.x,qn.z,0,-qn.x,gi.z,0,-gi.x,-$n.y,$n.x,0,-qn.y,qn.x,0,-gi.y,gi.x,0];return!Pa(n,Wi,Xi,ji,Xs)||(n=[1,0,0,0,1,0,0,0,1],!Pa(n,Wi,Xi,ji,Xs))?!1:(js.crossVectors($n,qn),n=[js.x,js.y,js.z],Pa(n,Wi,Xi,ji,Xs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new X,new X,new X,new X,new X,new X,new X,new X],wn=new X,Gi=new ws,Wi=new X,Xi=new X,ji=new X,$n=new X,qn=new X,gi=new X,Wr=new X,Xs=new X,js=new X,_i=new X;function Pa(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_i.fromArray(t,s);const a=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=e.dot(_i),c=n.dot(_i),u=i.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _M=new ws,Xr=new X,La=new X;class oc{constructor(e=new X,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_M.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const n=Xr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Xr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(La)),this.expandByPoint(Xr.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new X,Ua=new X,$s=new X,Yn=new X,Da=new X,qs=new X,Ia=new X;class vM{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Rn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,n),Rn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ua.copy(e).add(n).multiplyScalar(.5),$s.copy(n).sub(e).normalize(),Yn.copy(this.origin).sub(Ua);const s=e.distanceTo(n)*.5,o=-this.direction.dot($s),a=Yn.dot(this.direction),l=-Yn.dot($s),c=Yn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ua).addScaledVector($s,h),p}intersectSphere(e,n){Rn.subVectors(e.center,this.origin);const i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,n,i,r,s){Da.subVectors(n,e),qs.subVectors(i,e),Ia.crossVectors(Da,qs);let o=this.direction.dot(Ia),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(qs.crossVectors(Yn,qs));if(l<0)return null;const c=a*this.direction.dot(Da.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(Ia);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,g,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),s=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,v=c*f;n[0]=h+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,v=c*f;n[0]=h-v*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xM,e,yM)}lookAt(e,n,i){const r=this.elements;return Gt.subVectors(e,n),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Kn.crossVectors(i,Gt),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Kn.crossVectors(i,Gt)),Kn.normalize(),Ys.crossVectors(Gt,Kn),r[0]=Kn.x,r[4]=Ys.x,r[8]=Gt.x,r[1]=Kn.y,r[5]=Ys.y,r[9]=Gt.y,r[2]=Kn.z,r[6]=Ys.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],_=i[3],x=i[7],M=i[11],b=i[15],C=r[0],L=r[4],P=r[8],S=r[12],A=r[1],k=r[5],G=r[9],O=r[13],I=r[2],j=r[6],te=r[10],$=r[14],Y=r[3],le=r[7],de=r[11],Ee=r[15];return s[0]=o*C+a*A+l*I+c*Y,s[4]=o*L+a*k+l*j+c*le,s[8]=o*P+a*G+l*te+c*de,s[12]=o*S+a*O+l*$+c*Ee,s[1]=u*C+f*A+h*I+p*Y,s[5]=u*L+f*k+h*j+p*le,s[9]=u*P+f*G+h*te+p*de,s[13]=u*S+f*O+h*$+p*Ee,s[2]=g*C+v*A+m*I+d*Y,s[6]=g*L+v*k+m*j+d*le,s[10]=g*P+v*G+m*te+d*de,s[14]=g*S+v*O+m*$+d*Ee,s[3]=_*C+x*A+M*I+b*Y,s[7]=_*L+x*k+M*j+b*le,s[11]=_*P+x*G+M*te+b*de,s[15]=_*S+x*O+M*$+b*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],_=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,x=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,M=u*v*c-g*f*c+g*a*p-o*v*p-u*a*d+o*f*d,b=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,C=n*_+i*x+r*M+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=_*L,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*d-i*h*d)*L,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*L,e[4]=x*L,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*d+n*h*d)*L,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*L,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*L,e[8]=M*L,e[9]=(g*f*s-u*v*s-g*i*p+n*v*p+u*i*d-n*f*d)*L,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*d+n*a*d)*L,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*L,e[12]=b*L,e[13]=(u*v*r-g*f*r+g*i*h-n*v*h-u*i*m+n*f*m)*L,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*L,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,v=o*u,m=o*f,d=a*f,_=l*c,x=l*u,M=l*f,b=i.x,C=i.y,L=i.z;return r[0]=(1-(v+d))*b,r[1]=(p+M)*b,r[2]=(g-x)*b,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(h+d))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+x)*L,r[9]=(m-_)*L,r[10]=(1-(h+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$i.set(r[0],r[1],r[2]).length();const o=$i.set(r[4],r[5],r[6]).length(),a=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],rn.copy(this);const c=1/s,u=1/o,f=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,n.setFromRotationMatrix(rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Fn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Fn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Po)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Fn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,v;if(a===Fn)g=(o+s)*f,v=-2*f;else if(a===Po)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $i=new X,rn=new mt,xM=new X(0,0,0),yM=new X(1,1,1),Kn=new X,Ys=new X,Gt=new X,mf=new mt,gf=new Ni;class Ko{constructor(e=0,n=0,i=0,r=Ko.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ko.DEFAULT_ORDER="XYZ";class mp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MM=0;const _f=new X,qi=new Ni,Cn=new mt,Ks=new X,jr=new X,EM=new X,SM=new Ni,vf=new X(1,0,0),xf=new X(0,1,0),yf=new X(0,0,1),bM={type:"added"},Mf={type:"removed"};class Rt extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new X,n=new Ko,i=new Ni,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qi.setFromAxisAngle(e,n),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,n){return qi.setFromAxisAngle(e,n),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,n){return _f.copy(e).applyQuaternion(this.quaternion),this.position.add(_f.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ks.copy(e):Ks.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(jr,Ks,this.up):Cn.lookAt(Ks,jr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(Cn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Mf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,EM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,SM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new X(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new X,Pn=new X,Na=new X,Ln=new X,Yi=new X,Ki=new X,Ef=new X,Oa=new X,Fa=new X,Ba=new X;let Zs=!1;class an{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),sn.subVectors(e,n),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){sn.subVectors(r,n),Pn.subVectors(i,n),Na.subVectors(e,n);const o=sn.dot(sn),a=sn.dot(Pn),l=sn.dot(Na),c=Pn.dot(Pn),u=Pn.dot(Na),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(e,n,i,r,s,o,a,l){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ln),l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l}static isFrontFacing(e,n,i,r){return sn.subVectors(i,n),Pn.subVectors(e,n),sn.cross(Pn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),sn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return an.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),an.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return an.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,i),Ki.subVectors(s,i),Oa.subVectors(e,i);const l=Yi.dot(Oa),c=Ki.dot(Oa);if(l<=0&&c<=0)return n.copy(i);Fa.subVectors(e,r);const u=Yi.dot(Fa),f=Ki.dot(Fa);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Yi,o);Ba.subVectors(e,s);const p=Yi.dot(Ba),g=Ki.dot(Ba);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ki,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Ef.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(Ef,a);const d=1/(m+v+h);return o=v*d,a=h*d,n.copy(i).addScaledVector(Yi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let TM=0;class Rs extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=_r,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jd,this.blendDst=Qd,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Ha(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nn.workingColorSpace){return this.r=e,this.g=n,this.b=i,nn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nn.workingColorSpace){if(e=sc(e,1),n=bt(n,0,1),i=bt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ha(o,s,e+1/3),this.g=Ha(o,s,e),this.b=Ha(o,s,e-1/3)}return nn.toWorkingColorSpace(this,r),this}setStyle(e,n=ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ke){const i=gp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return nn.fromWorkingColorSpace(At.copy(this),e),Math.round(bt(At.r*255,0,255))*65536+Math.round(bt(At.g*255,0,255))*256+Math.round(bt(At.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nn.workingColorSpace){nn.fromWorkingColorSpace(At.copy(this),n);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nn.workingColorSpace){return nn.fromWorkingColorSpace(At.copy(this),n),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=ke){nn.fromWorkingColorSpace(At.copy(this),e);const n=At.r,i=At.g,r=At.b;return e!==ke?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(on),on.h+=e,on.s+=n,on.l+=i,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(on),e.getHSL(Js);const i=ls(on.h,Js.h,n),r=ls(on.s,Js.s,n),s=ls(on.l,Js.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ze;Ze.NAMES=gp;class _p extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const On=AM();function AM(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function wM(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=bt(t,-65504,65504),On.floatView[0]=t;const e=On.uint32View[0],n=e>>23&511;return On.baseTable[n]+((e&8388607)>>On.shiftTable[n])}function RM(t){const e=t>>10;return On.uint32View[0]=On.mantissaTable[On.offsetTable[e]+(t&1023)]+On.exponentTable[e],On.floatView[0]}const pw={toHalfFloat:wM,fromHalfFloat:RM},ct=new X,Qs=new ze;class Mn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uf,this.updateRange={offset:0,count:-1},this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qs.fromBufferAttribute(this,n),Qs.applyMatrix3(e),this.setXY(n,Qs.x,Qs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix3(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix4(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyNormalMatrix(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.transformDirection(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class vp extends Mn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xp extends Mn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ui extends Mn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let CM=0;const qt=new mt,ka=new Rt,Zi=new X,Wt=new ws,$r=new ws,xt=new X;class Bi extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fp(e)?xp:vp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,n,i){return qt.makeTranslation(e,n,i),this.applyMatrix4(qt),this}scale(e,n,i){return qt.makeScale(e,n,i),this.applyMatrix4(qt),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Wt.min,$r.min),Wt.expandByPoint(xt),xt.addVectors(Wt.max,$r.max),Wt.expandByPoint(xt)):(Wt.expandByPoint($r.min),Wt.expandByPoint($r.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(e,c),xt.add(Zi)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new X,u[A]=new X;const f=new X,h=new X,p=new X,g=new ze,v=new ze,m=new ze,d=new X,_=new X;function x(A,k,G){f.fromArray(r,A*3),h.fromArray(r,k*3),p.fromArray(r,G*3),g.fromArray(o,A*2),v.fromArray(o,k*2),m.fromArray(o,G*2),h.sub(f),p.sub(f),v.sub(g),m.sub(g);const O=1/(v.x*m.y-m.x*v.y);isFinite(O)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(O),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(O),c[A].add(d),c[k].add(d),c[G].add(d),u[A].add(_),u[k].add(_),u[G].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let A=0,k=M.length;A<k;++A){const G=M[A],O=G.start,I=G.count;for(let j=O,te=O+I;j<te;j+=3)x(i[j+0],i[j+1],i[j+2])}const b=new X,C=new X,L=new X,P=new X;function S(A){L.fromArray(s,A*3),P.copy(L);const k=c[A];b.copy(k),b.sub(L.multiplyScalar(L.dot(k))).normalize(),C.crossVectors(P,k);const O=C.dot(u[A])<0?-1:1;l[A*4]=b.x,l[A*4+1]=b.y,l[A*4+2]=b.z,l[A*4+3]=O}for(let A=0,k=M.length;A<k;++A){const G=M[A],O=G.start,I=G.count;for(let j=O,te=O+I;j<te;j+=3)S(i[j+0]),S(i[j+1]),S(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)xt.fromBufferAttribute(e,n),xt.normalize(),e.setXYZ(n,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Mn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sf=new mt,vi=new vM,eo=new oc,bf=new X,Ji=new X,Qi=new X,er=new X,za=new X,to=new X,no=new ze,io=new ze,ro=new ze,Tf=new X,Af=new X,wf=new X,so=new X,oo=new X;class ni extends Rt{constructor(e=new Bi,n=new _p){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){to.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(za.fromBufferAttribute(f,e),o?to.addScaledVector(za,u):to.addScaledVector(za.sub(n),u))}n.add(to)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(eo.containsPoint(vi.origin)===!1&&(vi.intersectSphere(eo,bf)===null||vi.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(Sf.copy(s).invert(),vi.copy(e.ray).applyMatrix4(Sf),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=x;M<b;M+=3){const C=a.getX(M),L=a.getX(M+1),P=a.getX(M+2);r=ao(this,d,e,i,c,u,f,C,L,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);r=ao(this,o,e,i,c,u,f,_,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=x;M<b;M+=3){const C=M,L=M+1,P=M+2;r=ao(this,d,e,i,c,u,f,C,L,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=m,x=m+1,M=m+2;r=ao(this,o,e,i,c,u,f,_,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function PM(t,e,n,i,r,s,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===li,a),l===null)return null;oo.copy(a),oo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(oo);return c<n.near||c>n.far?null:{distance:c,point:oo.clone(),object:t}}function ao(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ji),t.getVertexPosition(l,Qi),t.getVertexPosition(c,er);const u=PM(t,e,n,i,Ji,Qi,er,so);if(u){r&&(no.fromBufferAttribute(r,a),io.fromBufferAttribute(r,l),ro.fromBufferAttribute(r,c),u.uv=an.getInterpolation(so,Ji,Qi,er,no,io,ro,new ze)),s&&(no.fromBufferAttribute(s,a),io.fromBufferAttribute(s,l),ro.fromBufferAttribute(s,c),u.uv1=an.getInterpolation(so,Ji,Qi,er,no,io,ro,new ze),u.uv2=u.uv1),o&&(Tf.fromBufferAttribute(o,a),Af.fromBufferAttribute(o,l),wf.fromBufferAttribute(o,c),u.normal=an.getInterpolation(so,Ji,Qi,er,Tf,Af,wf,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};an.getNormal(Ji,Qi,er,f.normal),u.face=f}return u}class Cs extends Bi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(u,3)),this.setAttribute("uv",new Ui(f,2));function g(v,m,d,_,x,M,b,C,L,P,S){const A=M/L,k=b/P,G=M/2,O=b/2,I=C/2,j=L+1,te=P+1;let $=0,Y=0;const le=new X;for(let de=0;de<te;de++){const Ee=de*k-O;for(let q=0;q<j;q++){const pe=q*A-G;le[v]=pe*_,le[m]=Ee*x,le[d]=I,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[d]=C>0?1:-1,u.push(le.x,le.y,le.z),f.push(q/L),f.push(1-de/P),$+=1}}for(let de=0;de<P;de++)for(let Ee=0;Ee<L;Ee++){const q=h+Ee+j*de,pe=h+Ee+j*(de+1),me=h+(Ee+1)+j*(de+1),Te=h+(Ee+1)+j*de;l.push(q,pe,Te),l.push(pe,me,Te),Y+=6}a.addGroup(p,Y,S),p+=Y,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ut(t){const e={};for(let n=0;n<t.length;n++){const i=Cr(t[n]);for(const r in i)e[r]=i[r]}return e}function LM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yp(t){return t.getRenderTarget()===null?t.outputColorSpace:Sn}const UM={clone:Cr,merge:Ut};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=IM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Mp extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Fn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends Mp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(as*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const tr=-90,nr=1;class NM extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Zt(tr,nr,e,n);r.layers=this.layers,this.add(r);const s=new Zt(tr,nr,e,n);s.layers=this.layers,this.add(s);const o=new Zt(tr,nr,e,n);o.layers=this.layers,this.add(o);const a=new Zt(tr,nr,e,n);a.layers=this.layers,this.add(a);const l=new Zt(tr,nr,e,n);l.layers=this.layers,this.add(l);const c=new Zt(tr,nr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Po)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Hn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Ep extends Dt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Tr,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OM extends Ii{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pi?ke:Li),this.texture=new Ep(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:St}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cs(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:si});s.uniforms.tEquirect.value=n;const o=new ni(r,s),a=n.minFilter;return n.minFilter===wr&&(n.minFilter=St),new NM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Va=new X,FM=new X,BM=new Ge;class yi{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Va.subVectors(i,n).cross(FM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Va),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||BM.getNormalMatrix(e),r=this.coplanarPoint(Va).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new oc,lo=new X;class ac{constructor(e=new yi,n=new yi,i=new yi,r=new yi,s=new yi,o=new yi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],_=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-d).normalize(),i[1].setComponents(l+s,h+c,m+p,M+d).normalize(),i[2].setComponents(l+o,h+u,m+g,M+_).normalize(),i[3].setComponents(l-o,h-u,m-g,M-_).normalize(),i[4].setComponents(l-a,h-f,m-v,M-x).normalize(),n===Fn)i[5].setComponents(l+a,h+f,m+v,M+x).normalize();else if(n===Po)i[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=t.SHORT;else if(f instanceof Uint32Array)g=t.UNSIGNED_INT;else if(f instanceof Int32Array)g=t.INT;else if(f instanceof Int8Array)g=t.BYTE;else if(f instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class lc extends Bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const _=d*h-o;for(let x=0;x<c;x++){const M=x*f-s;g.push(M,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const x=_+c*d,M=_+c*(d+1),b=_+1+c*(d+1),C=_+1+c*d;p.push(x,M,C),p.push(M,b,C)}this.setIndex(p),this.setAttribute("position",new Ui(g,3)),this.setAttribute("normal",new Ui(v,3)),this.setAttribute("uv",new Ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var kM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM="vec3 transformed = vec3( position );",$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hE="gl_FragColor = linearToOutputTexel( gl_FragColor );",dE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ME=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,CE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,NE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,HE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,WE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ZE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,JE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,QE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,eS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,oS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ES=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,SS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LS=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,US=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DS=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,GS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$S=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ib=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ob=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ve={alphamap_fragment:kM,alphamap_pars_fragment:zM,alphatest_fragment:VM,alphatest_pars_fragment:GM,aomap_fragment:WM,aomap_pars_fragment:XM,begin_vertex:jM,beginnormal_vertex:$M,bsdfs:qM,iridescence_fragment:YM,bumpmap_pars_fragment:KM,clipping_planes_fragment:ZM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:QM,clipping_planes_vertex:eE,color_fragment:tE,color_pars_fragment:nE,color_pars_vertex:iE,color_vertex:rE,common:sE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:aE,displacementmap_pars_vertex:lE,displacementmap_vertex:cE,emissivemap_fragment:uE,emissivemap_pars_fragment:fE,encodings_fragment:hE,encodings_pars_fragment:dE,envmap_fragment:pE,envmap_common_pars_fragment:mE,envmap_pars_fragment:gE,envmap_pars_vertex:_E,envmap_physical_pars_fragment:CE,envmap_vertex:vE,fog_vertex:xE,fog_pars_vertex:yE,fog_fragment:ME,fog_pars_fragment:EE,gradientmap_pars_fragment:SE,lightmap_fragment:bE,lightmap_pars_fragment:TE,lights_lambert_fragment:AE,lights_lambert_pars_fragment:wE,lights_pars_begin:RE,lights_toon_fragment:PE,lights_toon_pars_fragment:LE,lights_phong_fragment:UE,lights_phong_pars_fragment:DE,lights_physical_fragment:IE,lights_physical_pars_fragment:NE,lights_fragment_begin:OE,lights_fragment_maps:FE,lights_fragment_end:BE,logdepthbuf_fragment:HE,logdepthbuf_pars_fragment:kE,logdepthbuf_pars_vertex:zE,logdepthbuf_vertex:VE,map_fragment:GE,map_pars_fragment:WE,map_particle_fragment:XE,map_particle_pars_fragment:jE,metalnessmap_fragment:$E,metalnessmap_pars_fragment:qE,morphcolor_vertex:YE,morphnormal_vertex:KE,morphtarget_pars_vertex:ZE,morphtarget_vertex:JE,normal_fragment_begin:QE,normal_fragment_maps:eS,normal_pars_fragment:tS,normal_pars_vertex:nS,normal_vertex:iS,normalmap_pars_fragment:rS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:oS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:lS,output_fragment:cS,packing:uS,premultiplied_alpha_fragment:fS,project_vertex:hS,dithering_fragment:dS,dithering_pars_fragment:pS,roughnessmap_fragment:mS,roughnessmap_pars_fragment:gS,shadowmap_pars_fragment:_S,shadowmap_pars_vertex:vS,shadowmap_vertex:xS,shadowmask_pars_fragment:yS,skinbase_vertex:MS,skinning_pars_vertex:ES,skinning_vertex:SS,skinnormal_vertex:bS,specularmap_fragment:TS,specularmap_pars_fragment:AS,tonemapping_fragment:wS,tonemapping_pars_fragment:RS,transmission_fragment:CS,transmission_pars_fragment:PS,uv_pars_fragment:LS,uv_pars_vertex:US,uv_vertex:DS,worldpos_vertex:IS,background_vert:NS,background_frag:OS,backgroundCube_vert:FS,backgroundCube_frag:BS,cube_vert:HS,cube_frag:kS,depth_vert:zS,depth_frag:VS,distanceRGBA_vert:GS,distanceRGBA_frag:WS,equirect_vert:XS,equirect_frag:jS,linedashed_vert:$S,linedashed_frag:qS,meshbasic_vert:YS,meshbasic_frag:KS,meshlambert_vert:ZS,meshlambert_frag:JS,meshmatcap_vert:QS,meshmatcap_frag:eb,meshnormal_vert:tb,meshnormal_frag:nb,meshphong_vert:ib,meshphong_frag:rb,meshphysical_vert:sb,meshphysical_frag:ob,meshtoon_vert:ab,meshtoon_frag:lb,points_vert:cb,points_frag:ub,shadow_vert:fb,shadow_frag:hb,sprite_vert:db,sprite_frag:pb},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},vn={basic:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ut([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ut([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ut([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ut([Me.points,Me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ut([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ut([Me.common,Me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ut([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ut([Me.sprite,Me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ut([Me.common,Me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ut([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};vn.physical={uniforms:Ut([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const co={r:0,b:0,g:0};function mb(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let _=!1,x=d.isScene===!0?d.background:null;switch(x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Yo)?(u===void 0&&(u=new ni(new Cs(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Cr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.colorSpace!==ke,(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ni(new lc(2,2),new Oi({name:"BackgroundMaterial",uniforms:Cr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.colorSpace!==ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(co,yp(t)),i.buffers.color.setClear(co.r,co.g,co.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function gb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(I,j,te,$,Y){let le=!1;if(o){const de=v($,te,j);c!==de&&(c=de,p(c.object)),le=d(I,$,te,Y),le&&_(I,$,te,Y)}else{const de=j.wireframe===!0;(c.geometry!==$.id||c.program!==te.id||c.wireframe!==de)&&(c.geometry=$.id,c.program=te.id,c.wireframe=de,le=!0)}Y!==null&&n.update(Y,t.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,P(I,j,te,$),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,j,te){const $=te.wireframe===!0;let Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let le=Y[j.id];le===void 0&&(le={},Y[j.id]=le);let de=le[$];return de===void 0&&(de=m(h()),le[$]=de),de}function m(I){const j=[],te=[],$=[];for(let Y=0;Y<r;Y++)j[Y]=0,te[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:$,object:I,attributes:{},index:null}}function d(I,j,te,$){const Y=c.attributes,le=j.attributes;let de=0;const Ee=te.getAttributes();for(const q in Ee)if(Ee[q].location>=0){const me=Y[q];let Te=le[q];if(Te===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Te=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Te=I.instanceColor)),me===void 0||me.attribute!==Te||Te&&me.data!==Te.data)return!0;de++}return c.attributesNum!==de||c.index!==$}function _(I,j,te,$){const Y={},le=j.attributes;let de=0;const Ee=te.getAttributes();for(const q in Ee)if(Ee[q].location>=0){let me=le[q];me===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(me=I.instanceColor));const Te={};Te.attribute=me,me&&me.data&&(Te.data=me.data),Y[q]=Te,de++}c.attributes=Y,c.attributesNum=de,c.index=$}function x(){const I=c.newAttributes;for(let j=0,te=I.length;j<te;j++)I[j]=0}function M(I){b(I,0)}function b(I,j){const te=c.newAttributes,$=c.enabledAttributes,Y=c.attributeDivisors;te[I]=1,$[I]===0&&(t.enableVertexAttribArray(I),$[I]=1),Y[I]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,j),Y[I]=j)}function C(){const I=c.newAttributes,j=c.enabledAttributes;for(let te=0,$=j.length;te<$;te++)j[te]!==I[te]&&(t.disableVertexAttribArray(te),j[te]=0)}function L(I,j,te,$,Y,le,de){de===!0?t.vertexAttribIPointer(I,j,te,Y,le):t.vertexAttribPointer(I,j,te,$,Y,le)}function P(I,j,te,$){if(i.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Y=$.attributes,le=te.getAttributes(),de=j.defaultAttributeValues;for(const Ee in le){const q=le[Ee];if(q.location>=0){let pe=Y[Ee];if(pe===void 0&&(Ee==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),Ee==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),pe!==void 0){const me=pe.normalized,Te=pe.itemSize,ge=n.get(pe);if(ge===void 0)continue;const B=ge.buffer,fe=ge.type,ne=ge.bytesPerElement,xe=i.isWebGL2===!0&&(fe===t.INT||fe===t.UNSIGNED_INT||pe.gpuType===np);if(pe.isInterleavedBufferAttribute){const we=pe.data,y=we.stride,U=pe.offset;if(we.isInstancedInterleavedBuffer){for(let D=0;D<q.locationSize;D++)b(q.location+D,we.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let D=0;D<q.locationSize;D++)M(q.location+D);t.bindBuffer(t.ARRAY_BUFFER,B);for(let D=0;D<q.locationSize;D++)L(q.location+D,Te/q.locationSize,fe,me,y*ne,(U+Te/q.locationSize*D)*ne,xe)}else{if(pe.isInstancedBufferAttribute){for(let we=0;we<q.locationSize;we++)b(q.location+we,pe.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let we=0;we<q.locationSize;we++)M(q.location+we);t.bindBuffer(t.ARRAY_BUFFER,B);for(let we=0;we<q.locationSize;we++)L(q.location+we,Te/q.locationSize,fe,me,Te*ne,Te/q.locationSize*we*ne,xe)}}else if(de!==void 0){const me=de[Ee];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(q.location,me);break;case 3:t.vertexAttrib3fv(q.location,me);break;case 4:t.vertexAttrib4fv(q.location,me);break;default:t.vertexAttrib1fv(q.location,me)}}}}C()}function S(){G();for(const I in a){const j=a[I];for(const te in j){const $=j[te];for(const Y in $)g($[Y].object),delete $[Y];delete j[te]}delete a[I]}}function A(I){if(a[I.id]===void 0)return;const j=a[I.id];for(const te in j){const $=j[te];for(const Y in $)g($[Y].object),delete $[Y];delete j[te]}delete a[I.id]}function k(I){for(const j in a){const te=a[j];if(te[I.id]===void 0)continue;const $=te[I.id];for(const Y in $)g($[Y].object),delete $[Y];delete te[I.id]}}function G(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:M,disableUnusedAttributes:C}}function _b(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function vb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=o||e.has("OES_texture_float"),b=x&&M,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:C}}function xb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new yi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,x=_*4;let M=d.clippingState||null;l.value=M,M=u(g,h,x,p);for(let b=0;b!==x;++b)M[b]=n[b];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,M=p;x!==v;++x,M+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function yb(t){let e=new WeakMap;function n(o,a){return a===El?o.mapping=Tr:a===Sl&&(o.mapping=Ar),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===El||a===Sl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new OM(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bp extends Mp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ar=4,Rf=[.125,.215,.35,.446,.526,.582],bi=20,Ga=new bp,Cf=new Ze;let Wa=null;const Mi=(1+Math.sqrt(5))/2,ir=1/Mi,Pf=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Mi,ir),new X(0,Mi,-ir),new X(ir,0,Mi),new X(-ir,0,Mi),new X(Mi,ir,0),new X(-Mi,ir,0)];class Lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa),e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Tr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:xs,format:un,colorSpace:Sn,depthBuffer:!1},r=Uf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mb(s)),this._blurMaterial=Eb(s,e,n)}return r}_compileMaterial(e){const n=new ni(this._lodPlanes[0],e);this._renderer.compile(n,Ga)}_sceneToCubeUV(e,n,i,r){const a=new Zt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Cf),u.toneMapping=Hn,u.autoClear=!1;const p=new _p({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new ni(new Cs,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Cf),v=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;uo(r,_*x,d>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Tr||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ni(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;uo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ga)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pf[(r-1)%Pf.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ni(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*bi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):bi;m>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const d=[];let _=0;for(let L=0;L<bi;++L){const P=L/v,S=Math.exp(-P*P/2);d.push(S),L===0?_+=S:L<m&&(_+=2*S)}for(let L=0;L<d.length;L++)d[L]=d[L]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const M=this._sizeLods[r],b=3*M*(r>x-ar?r-x+ar:0),C=4*(this._cubeSize-M);uo(n,b,C,3*M,2*M),l.setRenderTarget(n),l.render(f,Ga)}}function Mb(t){const e=[],n=[],i=[];let r=t;const s=t-ar+1+Rf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ar?l=Rf[o-t+ar-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,d=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,P=C>2?0:-1,S=[L,P,0,L+2/3,P,0,L+2/3,P+1,0,L,P,0,L+2/3,P+1,0,L,P+1,0];_.set(S,v*g*C),x.set(h,m*g*C);const A=[C,C,C,C,C,C];M.set(A,d*g*C)}const b=new Bi;b.setAttribute("position",new Mn(_,v)),b.setAttribute("uv",new Mn(x,m)),b.setAttribute("faceIndex",new Mn(M,d)),e.push(b),r>ar&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Uf(t,e,n){const i=new Ii(t,e,n);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Eb(t,e,n){const i=new Float32Array(bi),r=new X(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Df(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function If(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===El||l===Sl,u=l===Tr||l===Ar;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Lf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Lf(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function bb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Tb(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,M=_.length;x<M;x+=3){const b=_[x+0],C=_[x+1],L=_[x+2];h.push(b,C,C,L,L,b)}}else{const _=g.array;v=g.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const b=x+0,C=x+1,L=x+2;h.push(b,C,C,L,L,b)}}const m=new(fp(h)?xp:vp)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ab(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function f(h,p,g){if(g===0)return;let v,m;if(r)v=t,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,h*l,g),n.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function wb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Rb(t,e){return t[0]-e[0]}function Cb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Pb(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=s.get(u);if(v===void 0||v.count!==g){let I=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();const _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let P=0;_===!0&&(P=1),x===!0&&(P=2),M===!0&&(P=3);let S=u.attributes.position.count*P,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const k=new Float32Array(S*A*4*g),G=new pp(k,S,A,g);G.type=ti,G.needsUpdate=!0;const O=P*4;for(let j=0;j<g;j++){const te=b[j],$=C[j],Y=L[j],le=S*A*4*j;for(let de=0;de<te.count;de++){const Ee=de*O;_===!0&&(o.fromBufferAttribute(te,de),k[le+Ee+0]=o.x,k[le+Ee+1]=o.y,k[le+Ee+2]=o.z,k[le+Ee+3]=0),x===!0&&(o.fromBufferAttribute($,de),k[le+Ee+4]=o.x,k[le+Ee+5]=o.y,k[le+Ee+6]=o.z,k[le+Ee+7]=0),M===!0&&(o.fromBufferAttribute(Y,de),k[le+Ee+8]=o.x,k[le+Ee+9]=o.y,k[le+Ee+10]=o.z,k[le+Ee+11]=Y.itemSize===4?o.w:1)}}v={count:g,texture:G,size:new ze(S,A)},s.set(u,v),u.addEventListener("dispose",I)}let m=0;for(let _=0;_<h.length;_++)m+=h[_];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",d),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const p=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];i[u.id]=g}for(let x=0;x<p;x++){const M=g[x];M[0]=x,M[1]=h[x]}g.sort(Cb);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Rb);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const M=a[x],b=M[0],C=M[1];b!==Number.MAX_SAFE_INTEGER&&C?(v&&u.getAttribute("morphTarget"+x)!==v[b]&&u.setAttribute("morphTarget"+x,v[b]),m&&u.getAttribute("morphNormal"+x)!==m[b]&&u.setAttribute("morphNormal"+x,m[b]),r[x]=C,d+=C):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const _=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Lb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Tp=new Dt,Ap=new pp,wp=new gM,Rp=new Ep,Nf=[],Of=[],Ff=new Float32Array(16),Bf=new Float32Array(9),Hf=new Float32Array(4);function Br(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Nf[r];if(s===void 0&&(s=new Float32Array(r),Nf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function _t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zo(t,e){let n=Of[e];n===void 0&&(n=new Int32Array(e),Of[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ub(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gt(n,e))return;t.uniform2fv(this.addr,e),_t(n,e)}}function Ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gt(n,e))return;t.uniform3fv(this.addr,e),_t(n,e)}}function Nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gt(n,e))return;t.uniform4fv(this.addr,e),_t(n,e)}}function Ob(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),_t(n,e)}else{if(gt(n,i))return;Hf.set(i),t.uniformMatrix2fv(this.addr,!1,Hf),_t(n,i)}}function Fb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),_t(n,e)}else{if(gt(n,i))return;Bf.set(i),t.uniformMatrix3fv(this.addr,!1,Bf),_t(n,i)}}function Bb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),_t(n,e)}else{if(gt(n,i))return;Ff.set(i),t.uniformMatrix4fv(this.addr,!1,Ff),_t(n,i)}}function Hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gt(n,e))return;t.uniform2iv(this.addr,e),_t(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gt(n,e))return;t.uniform3iv(this.addr,e),_t(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gt(n,e))return;t.uniform4iv(this.addr,e),_t(n,e)}}function Gb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gt(n,e))return;t.uniform2uiv(this.addr,e),_t(n,e)}}function Xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gt(n,e))return;t.uniform3uiv(this.addr,e),_t(n,e)}}function jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gt(n,e))return;t.uniform4uiv(this.addr,e),_t(n,e)}}function $b(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Tp,r)}function qb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||wp,r)}function Yb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rp,r)}function Kb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ap,r)}function Zb(t){switch(t){case 5126:return Ub;case 35664:return Db;case 35665:return Ib;case 35666:return Nb;case 35674:return Ob;case 35675:return Fb;case 35676:return Bb;case 5124:case 35670:return Hb;case 35667:case 35671:return kb;case 35668:case 35672:return zb;case 35669:case 35673:return Vb;case 5125:return Gb;case 36294:return Wb;case 36295:return Xb;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return Kb}}function Jb(t,e){t.uniform1fv(this.addr,e)}function Qb(t,e){const n=Br(e,this.size,2);t.uniform2fv(this.addr,n)}function eT(t,e){const n=Br(e,this.size,3);t.uniform3fv(this.addr,n)}function tT(t,e){const n=Br(e,this.size,4);t.uniform4fv(this.addr,n)}function nT(t,e){const n=Br(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iT(t,e){const n=Br(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rT(t,e){const n=Br(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sT(t,e){t.uniform1iv(this.addr,e)}function oT(t,e){t.uniform2iv(this.addr,e)}function aT(t,e){t.uniform3iv(this.addr,e)}function lT(t,e){t.uniform4iv(this.addr,e)}function cT(t,e){t.uniform1uiv(this.addr,e)}function uT(t,e){t.uniform2uiv(this.addr,e)}function fT(t,e){t.uniform3uiv(this.addr,e)}function hT(t,e){t.uniform4uiv(this.addr,e)}function dT(t,e,n){const i=this.cache,r=e.length,s=Zo(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Tp,s[o])}function pT(t,e,n){const i=this.cache,r=e.length,s=Zo(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||wp,s[o])}function mT(t,e,n){const i=this.cache,r=e.length,s=Zo(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Rp,s[o])}function gT(t,e,n){const i=this.cache,r=e.length,s=Zo(n,r);gt(i,s)||(t.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ap,s[o])}function _T(t){switch(t){case 5126:return Jb;case 35664:return Qb;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return aT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return fT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}class vT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Zb(n.type)}}class xT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=_T(n.type)}}class yT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function kf(t,e){t.seq.push(e),t.map[e.id]=e}function MT(t,e,n){const i=t.name,r=i.length;for(Xa.lastIndex=0;;){const s=Xa.exec(i),o=Xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kf(n,c===void 0?new vT(a,t,e):new xT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new yT(a),kf(n,f)),n=f}}}class mo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);MT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function zf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let ET=0;function ST(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bT(t){switch(t){case Sn:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Vf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ST(t.getShaderSource(e),o)}else return r}function TT(t,e){const n=bT(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function AT(t,e){let n;switch(e){case My:n="Linear";break;case Ey:n="Reinhard";break;case Sy:n="OptimizedCineon";break;case by:n="ACESFilmic";break;case Ty:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jr).join(`
`)}function RT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Jr(t){return t!==""}function Gf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(t){return t.replace(PT,LT)}function LT(t,e){const n=Ve[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Rl(n)}const UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(t){return t.replace(UT,DT)}function DT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jf(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Qx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function NT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Tr:case Ar:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function FT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ep:e="ENVMAP_BLENDING_MULTIPLY";break;case xy:e="ENVMAP_BLENDING_MIX";break;case yy:e="ENVMAP_BLENDING_ADD";break}return e}function BT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=IT(n),c=NT(n),u=OT(n),f=FT(n),h=BT(n),p=n.isWebGL2?"":wT(n),g=RT(s),v=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Jr).join(`
`),d.length>0&&(d+=`
`)):(m=[jf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),d=[p,jf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hn?"#define TONE_MAPPING":"",n.toneMapping!==Hn?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Hn?AT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,TT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jr).join(`
`)),o=Rl(o),o=Gf(o,n),o=Wf(o,n),a=Rl(a),a=Gf(a,n),a=Wf(a,n),o=Xf(o),a=Xf(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=_+m+o,M=_+d+a,b=zf(r,r.VERTEX_SHADER,x),C=zf(r,r.FRAGMENT_SHADER,M);if(r.attachShader(v,b),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(v).trim(),A=r.getShaderInfoLog(b).trim(),k=r.getShaderInfoLog(C).trim();let G=!0,O=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,b,C);else{const I=Vf(r,b,"vertex"),j=Vf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+I+`
`+j)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||k==="")&&(O=!1);O&&(this.diagnostics={runnable:G,programLog:S,vertexShader:{log:A,prefix:m},fragmentShader:{log:k,prefix:d}})}r.deleteShader(b),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new mo(r,v)),L};let P;return this.getAttributes=function(){return P===void 0&&(P=CT(r,v)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ET++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=C,this}let kT=0;class zT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VT(e),n.set(e,i)),i}}class VT{constructor(e){this.id=kT++,this.code=e,this.usedTimes=0}}function GT(t,e,n,i,r,s,o){const a=new mp,l=new zT,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,A,k,G,O){const I=G.fog,j=O.geometry,te=S.isMeshStandardMaterial?G.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||te),Y=$&&$.mapping===Yo?$.image.height:null,le=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ee=de!==void 0?de.length:0;let q=0;j.morphAttributes.position!==void 0&&(q=1),j.morphAttributes.normal!==void 0&&(q=2),j.morphAttributes.color!==void 0&&(q=3);let pe,me,Te,ge;if(le){const at=vn[le];pe=at.vertexShader,me=at.fragmentShader}else pe=S.vertexShader,me=S.fragmentShader,l.update(S),Te=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const B=t.getRenderTarget(),fe=O.isInstancedMesh===!0,ne=!!S.map,xe=!!S.matcap,we=!!$,y=!!S.aoMap,U=!!S.lightMap,D=!!S.bumpMap,H=!!S.normalMap,V=!!S.displacementMap,ee=!!S.emissiveMap,ce=!!S.metalnessMap,J=!!S.roughnessMap,ue=S.anisotropy>0,ae=S.clearcoat>0,be=S.iridescence>0,T=S.sheen>0,E=S.transmission>0,F=ue&&!!S.anisotropyMap,ie=ae&&!!S.clearcoatMap,oe=ae&&!!S.clearcoatNormalMap,R=ae&&!!S.clearcoatRoughnessMap,Q=be&&!!S.iridescenceMap,he=be&&!!S.iridescenceThicknessMap,K=T&&!!S.sheenColorMap,Pe=T&&!!S.sheenRoughnessMap,Re=!!S.specularMap,Le=!!S.specularColorMap,ye=!!S.specularIntensityMap,_e=E&&!!S.transmissionMap,Ue=E&&!!S.thicknessMap,Je=!!S.gradientMap,N=!!S.alphaMap,Se=S.alphaTest>0,Z=!!S.extensions,ve=!!j.attributes.uv1,Ae=!!j.attributes.uv2,qe=!!j.attributes.uv3;return{isWebGL2:u,shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:pe,fragmentShader:me,defines:S.defines,customVertexShaderID:Te,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:fe,instancingColor:fe&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Sn,map:ne,matcap:xe,envMap:we,envMapMode:we&&$.mapping,envMapCubeUVHeight:Y,aoMap:y,lightMap:U,bumpMap:D,normalMap:H,displacementMap:h&&V,emissiveMap:ee,normalMapObjectSpace:H&&S.normalMapType===By,normalMapTangentSpace:H&&S.normalMapType===cp,metalnessMap:ce,roughnessMap:J,anisotropy:ue,anisotropyMap:F,clearcoat:ae,clearcoatMap:ie,clearcoatNormalMap:oe,clearcoatRoughnessMap:R,iridescence:be,iridescenceMap:Q,iridescenceThicknessMap:he,sheen:T,sheenColorMap:K,sheenRoughnessMap:Pe,specularMap:Re,specularColorMap:Le,specularIntensityMap:ye,transmission:E,transmissionMap:_e,thicknessMap:Ue,gradientMap:Je,opaque:S.transparent===!1&&S.blending===_r,alphaMap:N,alphaTest:Se,combine:S.combine,mapUv:ne&&v(S.map.channel),aoMapUv:y&&v(S.aoMap.channel),lightMapUv:U&&v(S.lightMap.channel),bumpMapUv:D&&v(S.bumpMap.channel),normalMapUv:H&&v(S.normalMap.channel),displacementMapUv:V&&v(S.displacementMap.channel),emissiveMapUv:ee&&v(S.emissiveMap.channel),metalnessMapUv:ce&&v(S.metalnessMap.channel),roughnessMapUv:J&&v(S.roughnessMap.channel),anisotropyMapUv:F&&v(S.anisotropyMap.channel),clearcoatMapUv:ie&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:K&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(S.sheenRoughnessMap.channel),specularMapUv:Re&&v(S.specularMap.channel),specularColorMapUv:Le&&v(S.specularColorMap.channel),specularIntensityMapUv:ye&&v(S.specularIntensityMap.channel),transmissionMapUv:_e&&v(S.transmissionMap.channel),thicknessMapUv:Ue&&v(S.thicknessMap.channel),alphaMapUv:N&&v(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(H||ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:Ae,vertexUv3s:qe,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(ne||N),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Hn,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nn,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Z&&S.extensions.derivatives===!0,extensionFragDepth:Z&&S.extensions.fragDepth===!0,extensionDrawBuffers:Z&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Z&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)A.push(k),A.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(_(A,S),x(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),S.push(a.mask)}function M(S){const A=g[S.type];let k;if(A){const G=vn[A];k=UM.clone(G.uniforms)}else k=S.uniforms;return k}function b(S,A){let k;for(let G=0,O=c.length;G<O;G++){const I=c[G];if(I.cacheKey===A){k=I,++k.usedTimes;break}}return k===void 0&&(k=new HT(t,A,S,s),c.push(k)),k}function C(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:b,releaseProgram:C,releaseShaderCache:L,programs:c,dispose:P}}function WT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function XT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $f(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,v,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||XT),i.length>1&&i.sort(h||$f),r.length>1&&r.sort(h||$f)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function jT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qf,t.set(i,[o])):r>=s.length?(o=new qf,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function $T(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ze};break;case"SpotLight":n={position:new X,direction:new X,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function qT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YT=0;function KT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZT(t,e){const n=new $T,i=qT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new X);const s=new X,o=new mt,a=new mt;function l(u,f){let h=0,p=0,g=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let v=0,m=0,d=0,_=0,x=0,M=0,b=0,C=0,L=0,P=0;u.sort(KT);const S=f===!0?Math.PI:1;for(let k=0,G=u.length;k<G;k++){const O=u[k],I=O.color,j=O.intensity,te=O.distance,$=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=I.r*j*S,p+=I.g*j*S,g+=I.b*j*S;else if(O.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(O.sh.coefficients[Y],j);else if(O.isDirectionalLight){const Y=n.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const le=O.shadow,de=i.get(O);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,r.directionalShadow[v]=de,r.directionalShadowMap[v]=$,r.directionalShadowMatrix[v]=O.shadow.matrix,M++}r.directional[v]=Y,v++}else if(O.isSpotLight){const Y=n.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(I).multiplyScalar(j*S),Y.distance=te,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,r.spot[d]=Y;const le=O.shadow;if(O.map&&(r.spotLightMap[L]=O.map,L++,le.updateMatrices(O),O.castShadow&&P++),r.spotLightMatrix[d]=le.matrix,O.castShadow){const de=i.get(O);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,r.spotShadow[d]=de,r.spotShadowMap[d]=$,C++}d++}else if(O.isRectAreaLight){const Y=n.get(O);Y.color.copy(I).multiplyScalar(j),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),r.rectArea[_]=Y,_++}else if(O.isPointLight){const Y=n.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*S),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const le=O.shadow,de=i.get(O);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,de.shadowCameraNear=le.camera.near,de.shadowCameraFar=le.camera.far,r.pointShadow[m]=de,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=O.shadow.matrix,b++}r.point[m]=Y,m++}else if(O.isHemisphereLight){const Y=n.get(O);Y.skyColor.copy(O.color).multiplyScalar(j*S),Y.groundColor.copy(O.groundColor).multiplyScalar(j*S),r.hemi[x]=Y,x++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==v||A.pointLength!==m||A.spotLength!==d||A.rectAreaLength!==_||A.hemiLength!==x||A.numDirectionalShadows!==M||A.numPointShadows!==b||A.numSpotShadows!==C||A.numSpotMaps!==L)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=_,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+L-P,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=P,A.directionalLength=v,A.pointLength=m,A.spotLength=d,A.rectAreaLength=_,A.hemiLength=x,A.numDirectionalShadows=M,A.numPointShadows=b,A.numSpotShadows=C,A.numSpotMaps=L,r.version=YT++)}function c(u,f){let h=0,p=0,g=0,v=0,m=0;const d=f.matrixWorldInverse;for(let _=0,x=u.length;_<x;_++){const M=u[_];if(M.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(M.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Yf(t,e){const n=new ZT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function JT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Yf(t,e),n.set(s,[l])):o>=a.length?(l=new Yf(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class QT extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eA extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iA(t,e,n){let i=new ac;const r=new ze,s=new ze,o=new yt,a=new QT({depthPacking:Fy}),l=new eA,c={},u=n.maxTextureSize,f={[li]:kt,[kt]:li,[Nn]:Nn},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:tA,fragmentShader:nA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bi;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ni(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let d=this.type;this.render=function(b,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const P=t.getRenderTarget(),S=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),k=t.state;k.setBlending(si),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const G=d!==Dn&&this.type===Dn,O=d===Dn&&this.type!==Dn;for(let I=0,j=b.length;I<j;I++){const te=b[I],$=te.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const Y=$.getFrameExtents();if(r.multiply(Y),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,$.mapSize.y=s.y)),$.map===null||G===!0||O===!0){const de=this.type!==Dn?{minFilter:Et,magFilter:Et}:{};$.map!==null&&$.map.dispose(),$.map=new Ii(r.x,r.y,de),$.map.texture.name=te.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const le=$.getViewportCount();for(let de=0;de<le;de++){const Ee=$.getViewport(de);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),k.viewport(o),$.updateMatrices(te,de),i=$.getFrustum(),M(C,L,$.camera,te,this.type)}$.isPointLightShadow!==!0&&this.type===Dn&&_($,L),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(P,S,A)};function _(b,C){const L=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ii(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,L,h,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,L,p,v,null)}function x(b,C,L,P){let S=null;const A=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)S=A;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=S.uuid,G=C.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let I=O[G];I===void 0&&(I=S.clone(),O[G]=I),S=I}if(S.visible=C.visible,S.wireframe=C.wireframe,P===Dn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=t.properties.get(S);k.light=L}return S}function M(b,C,L,P,S){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Dn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const G=e.update(b),O=b.material;if(Array.isArray(O)){const I=G.groups;for(let j=0,te=I.length;j<te;j++){const $=I[j],Y=O[$.materialIndex];if(Y&&Y.visible){const le=x(b,Y,P,S);t.renderBufferDirect(L,null,G,le,b,$)}}}else if(O.visible){const I=x(b,O,P,S);t.renderBufferDirect(L,null,G,I,b,null)}}const k=b.children;for(let G=0,O=k.length;G<O;G++)M(k[G],C,L,P,S)}}function rA(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const Se=new yt;let Z=null;const ve=new yt(0,0,0,0);return{setMask:function(Ae){Z!==Ae&&!N&&(t.colorMask(Ae,Ae,Ae,Ae),Z=Ae)},setLocked:function(Ae){N=Ae},setClear:function(Ae,qe,rt,at,ui){ui===!0&&(Ae*=at,qe*=at,rt*=at),Se.set(Ae,qe,rt,at),ve.equals(Se)===!1&&(t.clearColor(Ae,qe,rt,at),ve.copy(Se))},reset:function(){N=!1,Z=null,ve.set(-1,0,0,0)}}}function s(){let N=!1,Se=null,Z=null,ve=null;return{setTest:function(Ae){Ae?B(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(Ae){Se!==Ae&&!N&&(t.depthMask(Ae),Se=Ae)},setFunc:function(Ae){if(Z!==Ae){switch(Ae){case hy:t.depthFunc(t.NEVER);break;case dy:t.depthFunc(t.ALWAYS);break;case py:t.depthFunc(t.LESS);break;case Ml:t.depthFunc(t.LEQUAL);break;case my:t.depthFunc(t.EQUAL);break;case gy:t.depthFunc(t.GEQUAL);break;case _y:t.depthFunc(t.GREATER);break;case vy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=Ae}},setLocked:function(Ae){N=Ae},setClear:function(Ae){ve!==Ae&&(t.clearDepth(Ae),ve=Ae)},reset:function(){N=!1,Se=null,Z=null,ve=null}}}function o(){let N=!1,Se=null,Z=null,ve=null,Ae=null,qe=null,rt=null,at=null,ui=null;return{setTest:function(st){N||(st?B(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(st){Se!==st&&!N&&(t.stencilMask(st),Se=st)},setFunc:function(st,mn,Ct){(Z!==st||ve!==mn||Ae!==Ct)&&(t.stencilFunc(st,mn,Ct),Z=st,ve=mn,Ae=Ct)},setOp:function(st,mn,Ct){(qe!==st||rt!==mn||at!==Ct)&&(t.stencilOp(st,mn,Ct),qe=st,rt=mn,at=Ct)},setLocked:function(st){N=st},setClear:function(st){ui!==st&&(t.clearStencil(st),ui=st)},reset:function(){N=!1,Se=null,Z=null,ve=null,Ae=null,qe=null,rt=null,at=null,ui=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,v=[],m=null,d=!1,_=null,x=null,M=null,b=null,C=null,L=null,P=null,S=!1,A=null,k=null,G=null,O=null,I=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,$=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),te=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),te=$>=2);let le=null,de={};const Ee=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),pe=new yt().fromArray(Ee),me=new yt().fromArray(q);function Te(N,Se,Z,ve){const Ae=new Uint8Array(4),qe=t.createTexture();t.bindTexture(N,qe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<Z;rt++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(Se+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return qe}const ge={};ge[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(t.DEPTH_TEST),l.setFunc(Ml),V(!1),ee(Du),B(t.CULL_FACE),D(si);function B(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function fe(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function ne(N,Se){return p[N]!==Se?(t.bindFramebuffer(N,Se),p[N]=Se,i&&(N===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Se),N===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function xe(N,Se){let Z=v,ve=!1;if(N)if(Z=g.get(Se),Z===void 0&&(Z=[],g.set(Se,Z)),N.isWebGLMultipleRenderTargets){const Ae=N.texture;if(Z.length!==Ae.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,rt=Ae.length;qe<rt;qe++)Z[qe]=t.COLOR_ATTACHMENT0+qe;Z.length=Ae.length,ve=!0}}else Z[0]!==t.COLOR_ATTACHMENT0&&(Z[0]=t.COLOR_ATTACHMENT0,ve=!0);else Z[0]!==t.BACK&&(Z[0]=t.BACK,ve=!0);ve&&(n.isWebGL2?t.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function we(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const y={[sr]:t.FUNC_ADD,[ty]:t.FUNC_SUBTRACT,[ny]:t.FUNC_REVERSE_SUBTRACT};if(i)y[Fu]=t.MIN,y[Bu]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(y[Fu]=N.MIN_EXT,y[Bu]=N.MAX_EXT)}const U={[iy]:t.ZERO,[ry]:t.ONE,[sy]:t.SRC_COLOR,[Jd]:t.SRC_ALPHA,[fy]:t.SRC_ALPHA_SATURATE,[cy]:t.DST_COLOR,[ay]:t.DST_ALPHA,[oy]:t.ONE_MINUS_SRC_COLOR,[Qd]:t.ONE_MINUS_SRC_ALPHA,[uy]:t.ONE_MINUS_DST_COLOR,[ly]:t.ONE_MINUS_DST_ALPHA};function D(N,Se,Z,ve,Ae,qe,rt,at){if(N===si){d===!0&&(fe(t.BLEND),d=!1);return}if(d===!1&&(B(t.BLEND),d=!0),N!==ey){if(N!==_||at!==S){if((x!==sr||C!==sr)&&(t.blendEquation(t.FUNC_ADD),x=sr,C=sr),at)switch(N){case _r:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Iu:t.blendFunc(t.ONE,t.ONE);break;case Nu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ou:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _r:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Iu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Nu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ou:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,L=null,P=null,_=N,S=at}return}Ae=Ae||Se,qe=qe||Z,rt=rt||ve,(Se!==x||Ae!==C)&&(t.blendEquationSeparate(y[Se],y[Ae]),x=Se,C=Ae),(Z!==M||ve!==b||qe!==L||rt!==P)&&(t.blendFuncSeparate(U[Z],U[ve],U[qe],U[rt]),M=Z,b=ve,L=qe,P=rt),_=N,S=!1}function H(N,Se){N.side===Nn?fe(t.CULL_FACE):B(t.CULL_FACE);let Z=N.side===kt;Se&&(Z=!Z),V(Z),N.blending===_r&&N.transparent===!1?D(si):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const ve=N.stencilWrite;c.setTest(ve),ve&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),J(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){A!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),A=N)}function ee(N){N!==Zx?(B(t.CULL_FACE),N!==k&&(N===Du?t.cullFace(t.BACK):N===Jx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),k=N}function ce(N){N!==G&&(te&&t.lineWidth(N),G=N)}function J(N,Se,Z){N?(B(t.POLYGON_OFFSET_FILL),(O!==Se||I!==Z)&&(t.polygonOffset(Se,Z),O=Se,I=Z)):fe(t.POLYGON_OFFSET_FILL)}function ue(N){N?B(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function ae(N){N===void 0&&(N=t.TEXTURE0+j-1),le!==N&&(t.activeTexture(N),le=N)}function be(N,Se,Z){Z===void 0&&(le===null?Z=t.TEXTURE0+j-1:Z=le);let ve=de[Z];ve===void 0&&(ve={type:void 0,texture:void 0},de[Z]=ve),(ve.type!==N||ve.texture!==Se)&&(le!==Z&&(t.activeTexture(Z),le=Z),t.bindTexture(N,Se||ge[N]),ve.type=N,ve.texture=Se)}function T(){const N=de[le];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function R(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(N){pe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),pe.copy(N))}function ye(N){me.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function _e(N,Se){let Z=f.get(Se);Z===void 0&&(Z=new WeakMap,f.set(Se,Z));let ve=Z.get(N);ve===void 0&&(ve=t.getUniformBlockIndex(Se,N.name),Z.set(N,ve))}function Ue(N,Se){const ve=f.get(Se).get(N);u.get(Se)!==ve&&(t.uniformBlockBinding(Se,ve,N.__bindingPointIndex),u.set(Se,ve))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},le=null,de={},p={},g=new WeakMap,v=[],m=null,d=!1,_=null,x=null,M=null,b=null,C=null,L=null,P=null,S=!1,A=null,k=null,G=null,O=null,I=null,pe.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:B,disable:fe,bindFramebuffer:ne,drawBuffers:xe,useProgram:we,setBlending:D,setMaterial:H,setFlipSided:V,setCullFace:ee,setLineWidth:ce,setPolygonOffset:J,setScissorTest:ue,activeTexture:ae,bindTexture:be,unbindTexture:T,compressedTexImage2D:E,compressedTexImage3D:F,texImage2D:Pe,texImage3D:Re,updateUBOMapping:_e,uniformBlockBinding:Ue,texStorage2D:he,texStorage3D:K,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:R,compressedTexSubImage3D:Q,scissor:Le,viewport:ye,reset:Je}}function sA(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,E){return d?new OffscreenCanvas(T,E):Uo("canvas")}function x(T,E,F,ie){let oe=1;if((T.width>ie||T.height>ie)&&(oe=ie/Math.max(T.width,T.height)),oe<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const R=E?Lo:Math.floor,Q=R(oe*T.width),he=R(oe*T.height);v===void 0&&(v=_(Q,he));const K=F?_(Q,he):v;return K.width=Q,K.height=he,K.getContext("2d").drawImage(T,0,0,Q,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Q+"x"+he+")."),K}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return wl(T.width)&&wl(T.height)}function b(T){return a?!1:T.wrapS!==jt||T.wrapT!==jt||T.minFilter!==Et&&T.minFilter!==St}function C(T,E){return T.generateMipmaps&&E&&T.minFilter!==Et&&T.minFilter!==St}function L(T){t.generateMipmap(T)}function P(T,E,F,ie,oe=!1){if(a===!1)return E;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let R=E;return E===t.RED&&(F===t.FLOAT&&(R=t.R32F),F===t.HALF_FLOAT&&(R=t.R16F),F===t.UNSIGNED_BYTE&&(R=t.R8)),E===t.RG&&(F===t.FLOAT&&(R=t.RG32F),F===t.HALF_FLOAT&&(R=t.RG16F),F===t.UNSIGNED_BYTE&&(R=t.RG8)),E===t.RGBA&&(F===t.FLOAT&&(R=t.RGBA32F),F===t.HALF_FLOAT&&(R=t.RGBA16F),F===t.UNSIGNED_BYTE&&(R=ie===ke&&oe===!1?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(R=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(R=t.RGB5_A1)),(R===t.R16F||R===t.R32F||R===t.RG16F||R===t.RG32F||R===t.RGBA16F||R===t.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function S(T,E,F){return C(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==St?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function A(T){return T===Et||T===Hu||T===xa?t.NEAREST:t.LINEAR}function k(T){const E=T.target;E.removeEventListener("dispose",k),O(E),E.isVideoTexture&&g.delete(E)}function G(T){const E=T.target;E.removeEventListener("dispose",G),j(E)}function O(T){const E=i.get(T);if(E.__webglInit===void 0)return;const F=T.source,ie=m.get(F);if(ie){const oe=ie[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&I(T),Object.keys(ie).length===0&&m.delete(F)}i.remove(T)}function I(T){const E=i.get(T);t.deleteTexture(E.__webglTexture);const F=T.source,ie=m.get(F);delete ie[E.__cacheKey],o.memory.textures--}function j(T){const E=T.texture,F=i.get(T),ie=i.get(E);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)t.deleteFramebuffer(F.__webglFramebuffer[oe]),F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[oe]);else{if(t.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let oe=0;oe<F.__webglColorRenderbuffer.length;oe++)F.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[oe]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let oe=0,R=E.length;oe<R;oe++){const Q=i.get(E[oe]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(E[oe])}i.remove(E),i.remove(T)}let te=0;function $(){te=0}function Y(){const T=te;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),te+=1,T}function le(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function de(T,E){const F=i.get(T);if(T.isVideoTexture&&ae(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const ie=T.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(F,T,E);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+E)}function Ee(T,E){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ne(F,T,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+E)}function q(T,E){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ne(F,T,E);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+E)}function pe(T,E){const F=i.get(T);if(T.version>0&&F.__version!==T.version){xe(F,T,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+E)}const me={[bl]:t.REPEAT,[jt]:t.CLAMP_TO_EDGE,[Tl]:t.MIRRORED_REPEAT},Te={[Et]:t.NEAREST,[Hu]:t.NEAREST_MIPMAP_NEAREST,[xa]:t.NEAREST_MIPMAP_LINEAR,[St]:t.LINEAR,[Ay]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},ge={[ky]:t.NEVER,[$y]:t.ALWAYS,[zy]:t.LESS,[Gy]:t.LEQUAL,[Vy]:t.EQUAL,[jy]:t.GEQUAL,[Wy]:t.GREATER,[Xy]:t.NOTEQUAL};function B(T,E,F){if(F?(t.texParameteri(T,t.TEXTURE_WRAP_S,me[E.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,me[E.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,me[E.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Te[E.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Te[E.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==jt||E.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,A(E.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Et&&E.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Et||E.minFilter!==xa&&E.minFilter!==wr||E.type===ti&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===xs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(T,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function fe(T,E){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",k));const ie=E.source;let oe=m.get(ie);oe===void 0&&(oe={},m.set(ie,oe));const R=le(E);if(R!==T.__cacheKey){oe[R]===void 0&&(oe[R]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),oe[R].usedTimes++;const Q=oe[T.__cacheKey];Q!==void 0&&(oe[T.__cacheKey].usedTimes--,Q.usedTimes===0&&I(E)),T.__cacheKey=R,T.__webglTexture=oe[R].texture}return F}function ne(T,E,F){let ie=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=t.TEXTURE_3D);const oe=fe(T,E),R=E.source;n.bindTexture(ie,T.__webglTexture,t.TEXTURE0+F);const Q=i.get(R);if(R.version!==Q.__version||oe===!0){n.activeTexture(t.TEXTURE0+F),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const he=b(E)&&M(E.image)===!1;let K=x(E.image,he,!1,u);K=be(E,K);const Pe=M(K)||a,Re=s.convert(E.format,E.colorSpace);let Le=s.convert(E.type),ye=P(E.internalFormat,Re,Le,E.colorSpace);B(ie,E,Pe);let _e;const Ue=E.mipmaps,Je=a&&E.isVideoTexture!==!0,N=Q.__version===void 0||oe===!0,Se=S(E,K,Pe);if(E.isDepthTexture)ye=t.DEPTH_COMPONENT,a?E.type===ti?ye=t.DEPTH_COMPONENT32F:E.type===ei?ye=t.DEPTH_COMPONENT24:E.type===Ri?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:E.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ci&&ye===t.DEPTH_COMPONENT&&E.type!==rc&&E.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ei,Le=s.convert(E.type)),E.format===Rr&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,E.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ri,Le=s.convert(E.type))),N&&(Je?n.texStorage2D(t.TEXTURE_2D,1,ye,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,ye,K.width,K.height,0,Re,Le,null));else if(E.isDataTexture)if(Ue.length>0&&Pe){Je&&N&&n.texStorage2D(t.TEXTURE_2D,Se,ye,Ue[0].width,Ue[0].height);for(let Z=0,ve=Ue.length;Z<ve;Z++)_e=Ue[Z],Je?n.texSubImage2D(t.TEXTURE_2D,Z,0,0,_e.width,_e.height,Re,Le,_e.data):n.texImage2D(t.TEXTURE_2D,Z,ye,_e.width,_e.height,0,Re,Le,_e.data);E.generateMipmaps=!1}else Je?(N&&n.texStorage2D(t.TEXTURE_2D,Se,ye,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,Re,Le,K.data)):n.texImage2D(t.TEXTURE_2D,0,ye,K.width,K.height,0,Re,Le,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&N&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,ye,Ue[0].width,Ue[0].height,K.depth);for(let Z=0,ve=Ue.length;Z<ve;Z++)_e=Ue[Z],E.format!==un?Re!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,K.depth,Re,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,ye,_e.width,_e.height,K.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,_e.width,_e.height,K.depth,Re,Le,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,ye,_e.width,_e.height,K.depth,0,Re,Le,_e.data)}else{Je&&N&&n.texStorage2D(t.TEXTURE_2D,Se,ye,Ue[0].width,Ue[0].height);for(let Z=0,ve=Ue.length;Z<ve;Z++)_e=Ue[Z],E.format!==un?Re!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,_e.width,_e.height,Re,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,ye,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,Z,0,0,_e.width,_e.height,Re,Le,_e.data):n.texImage2D(t.TEXTURE_2D,Z,ye,_e.width,_e.height,0,Re,Le,_e.data)}else if(E.isDataArrayTexture)Je?(N&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,ye,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Re,Le,K.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,K.width,K.height,K.depth,0,Re,Le,K.data);else if(E.isData3DTexture)Je?(N&&n.texStorage3D(t.TEXTURE_3D,Se,ye,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Re,Le,K.data)):n.texImage3D(t.TEXTURE_3D,0,ye,K.width,K.height,K.depth,0,Re,Le,K.data);else if(E.isFramebufferTexture){if(N)if(Je)n.texStorage2D(t.TEXTURE_2D,Se,ye,K.width,K.height);else{let Z=K.width,ve=K.height;for(let Ae=0;Ae<Se;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,ye,Z,ve,0,Re,Le,null),Z>>=1,ve>>=1}}else if(Ue.length>0&&Pe){Je&&N&&n.texStorage2D(t.TEXTURE_2D,Se,ye,Ue[0].width,Ue[0].height);for(let Z=0,ve=Ue.length;Z<ve;Z++)_e=Ue[Z],Je?n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Re,Le,_e):n.texImage2D(t.TEXTURE_2D,Z,ye,Re,Le,_e);E.generateMipmaps=!1}else Je?(N&&n.texStorage2D(t.TEXTURE_2D,Se,ye,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Le,K)):n.texImage2D(t.TEXTURE_2D,0,ye,Re,Le,K);C(E,Pe)&&L(ie),Q.__version=R.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function xe(T,E,F){if(E.image.length!==6)return;const ie=fe(T,E),oe=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+F);const R=i.get(oe);if(oe.version!==R.__version||ie===!0){n.activeTexture(t.TEXTURE0+F),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Q=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,K=[];for(let Z=0;Z<6;Z++)!Q&&!he?K[Z]=x(E.image[Z],!1,!0,c):K[Z]=he?E.image[Z].image:E.image[Z],K[Z]=be(E,K[Z]);const Pe=K[0],Re=M(Pe)||a,Le=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),_e=P(E.internalFormat,Le,ye,E.colorSpace),Ue=a&&E.isVideoTexture!==!0,Je=R.__version===void 0||ie===!0;let N=S(E,Pe,Re);B(t.TEXTURE_CUBE_MAP,E,Re);let Se;if(Q){Ue&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,_e,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){Se=K[Z].mipmaps;for(let ve=0;ve<Se.length;ve++){const Ae=Se[ve];E.format!==un?Le!==null?Ue?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ae.width,Ae.height,Le,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,_e,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Ae.width,Ae.height,Le,ye,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,_e,Ae.width,Ae.height,0,Le,ye,Ae.data)}}}else{Se=E.mipmaps,Ue&&Je&&(Se.length>0&&N++,n.texStorage2D(t.TEXTURE_CUBE_MAP,N,_e,K[0].width,K[0].height));for(let Z=0;Z<6;Z++)if(he){Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,K[Z].width,K[Z].height,Le,ye,K[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,_e,K[Z].width,K[Z].height,0,Le,ye,K[Z].data);for(let ve=0;ve<Se.length;ve++){const qe=Se[ve].image[Z].image;Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,qe.width,qe.height,Le,ye,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,_e,qe.width,qe.height,0,Le,ye,qe.data)}}else{Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,ye,K[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,_e,Le,ye,K[Z]);for(let ve=0;ve<Se.length;ve++){const Ae=Se[ve];Ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Le,ye,Ae.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,_e,Le,ye,Ae.image[Z])}}}C(E,Re)&&L(t.TEXTURE_CUBE_MAP),R.__version=oe.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function we(T,E,F,ie,oe){const R=s.convert(F.format,F.colorSpace),Q=s.convert(F.type),he=P(F.internalFormat,R,Q,F.colorSpace);i.get(E).__hasExternalTextures||(oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,he,E.width,E.height,E.depth,0,R,Q,null):n.texImage2D(oe,0,he,E.width,E.height,0,R,Q,null)),n.bindFramebuffer(t.FRAMEBUFFER,T),ue(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,oe,i.get(F).__webglTexture,0,J(E)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,oe,i.get(F).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function y(T,E,F){if(t.bindRenderbuffer(t.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let ie=t.DEPTH_COMPONENT16;if(F||ue(E)){const oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ti?ie=t.DEPTH_COMPONENT32F:oe.type===ei&&(ie=t.DEPTH_COMPONENT24));const R=J(E);ue(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R,ie,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,R,ie,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const ie=J(E);F&&ue(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,E.width,E.height):ue(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const ie=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0;oe<ie.length;oe++){const R=ie[oe],Q=s.convert(R.format,R.colorSpace),he=s.convert(R.type),K=P(R.internalFormat,Q,he,R.colorSpace),Pe=J(E);F&&ue(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,K,E.width,E.height):ue(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,K,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,K,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function U(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de(E.depthTexture,0);const ie=i.get(E.depthTexture).__webglTexture,oe=J(E);if(E.depthTexture.format===Ci)ue(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Rr)ue(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function D(T){const E=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");U(E.__webglFramebuffer,T)}else if(F){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=t.createRenderbuffer(),y(E.__webglDepthbuffer[ie],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),y(E.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(T,E,F){const ie=i.get(T);E!==void 0&&we(ie.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),F!==void 0&&D(T)}function V(T){const E=T.texture,F=i.get(T),ie=i.get(E);T.addEventListener("dispose",G),T.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=E.version,o.memory.textures++);const oe=T.isWebGLCubeRenderTarget===!0,R=T.isWebGLMultipleRenderTargets===!0,Q=M(T)||a;if(oe){F.__webglFramebuffer=[];for(let he=0;he<6;he++)F.__webglFramebuffer[he]=t.createFramebuffer()}else{if(F.__webglFramebuffer=t.createFramebuffer(),R)if(r.drawBuffers){const he=T.texture;for(let K=0,Pe=he.length;K<Pe;K++){const Re=i.get(he[K]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ue(T)===!1){const he=R?E:[E];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<he.length;K++){const Pe=he[K];F.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const Re=s.convert(Pe.format,Pe.colorSpace),Le=s.convert(Pe.type),ye=P(Pe.internalFormat,Re,Le,Pe.colorSpace,T.isXRRenderTarget===!0),_e=J(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ye,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,F.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),y(F.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),B(t.TEXTURE_CUBE_MAP,E,Q);for(let he=0;he<6;he++)we(F.__webglFramebuffer[he],T,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he);C(E,Q)&&L(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(R){const he=T.texture;for(let K=0,Pe=he.length;K<Pe;K++){const Re=he[K],Le=i.get(Re);n.bindTexture(t.TEXTURE_2D,Le.__webglTexture),B(t.TEXTURE_2D,Re,Q),we(F.__webglFramebuffer,T,Re,t.COLOR_ATTACHMENT0+K,t.TEXTURE_2D),C(Re,Q)&&L(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?he=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,ie.__webglTexture),B(he,E,Q),we(F.__webglFramebuffer,T,E,t.COLOR_ATTACHMENT0,he),C(E,Q)&&L(he),n.unbindTexture()}T.depthBuffer&&D(T)}function ee(T){const E=M(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0,oe=F.length;ie<oe;ie++){const R=F[ie];if(C(R,E)){const Q=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(R).__webglTexture;n.bindTexture(Q,he),L(Q),n.unbindTexture()}}}function ce(T){if(a&&T.samples>0&&ue(T)===!1){const E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,ie=T.height;let oe=t.COLOR_BUFFER_BIT;const R=[],Q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(T),K=T.isWebGLMultipleRenderTargets===!0;if(K)for(let Pe=0;Pe<E.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){R.push(t.COLOR_ATTACHMENT0+Pe),T.depthBuffer&&R.push(Q);const Re=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Re===!1&&(T.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),K&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Pe]),Re===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Q]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Q])),K){const Le=i.get(E[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,F,ie,0,0,F,ie,oe,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,R)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let Pe=0;Pe<E.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,he.__webglColorRenderbuffer[Pe]);const Re=i.get(E[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function J(T){return Math.min(f,T.samples)}function ue(T){const E=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ae(T){const E=o.render.frame;g.get(T)!==E&&(g.set(T,E),T.update())}function be(T,E){const F=T.colorSpace,ie=T.format,oe=T.type;return T.isCompressedTexture===!0||T.format===Al||F!==Sn&&F!==Li&&(F===ke?a===!1?e.has("EXT_sRGB")===!0&&ie===un?(T.format=Al,T.minFilter=St,T.generateMipmaps=!1):E=hp.sRGBToLinear(E):(ie!==un||oe!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=Y,this.resetTextureUnits=$,this.setTexture2D=de,this.setTexture2DArray=Ee,this.setTexture3D=q,this.setTextureCube=pe,this.rebindTextures=H,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ue}function oA(t,e,n){const i=n.isWebGL2;function r(s,o=Li){let a;if(s===oi)return t.UNSIGNED_BYTE;if(s===ip)return t.UNSIGNED_SHORT_4_4_4_4;if(s===rp)return t.UNSIGNED_SHORT_5_5_5_1;if(s===wy)return t.BYTE;if(s===Ry)return t.SHORT;if(s===rc)return t.UNSIGNED_SHORT;if(s===np)return t.INT;if(s===ei)return t.UNSIGNED_INT;if(s===ti)return t.FLOAT;if(s===xs)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Cy)return t.ALPHA;if(s===un)return t.RGBA;if(s===Py)return t.LUMINANCE;if(s===Ly)return t.LUMINANCE_ALPHA;if(s===Ci)return t.DEPTH_COMPONENT;if(s===Rr)return t.DEPTH_STENCIL;if(s===Al)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Uy)return t.RED;if(s===sp)return t.RED_INTEGER;if(s===Dy)return t.RG;if(s===op)return t.RG_INTEGER;if(s===ap)return t.RGBA_INTEGER;if(s===ya||s===Ma||s===Ea||s===Sa)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ya)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ya)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ku||s===zu||s===Vu||s===Gu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ku)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Iy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wu||s===Xu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wu)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xu)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ju||s===$u||s===qu||s===Yu||s===Ku||s===Zu||s===Ju||s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf||s===of)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ju)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$u)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qu)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yu)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ku)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zu)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ju)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qu)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ef)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tf)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nf)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rf)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sf)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===of)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ba)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ba)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ny||s===af||s===lf||s===cf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ba)return a.COMPRESSED_RED_RGTC1_EXT;if(s===af)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ri?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class aA extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fo extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lA={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class cA extends Dt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ci&&(i=ei),i===void 0&&u===Rr&&(i=Ri),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class uA extends Fi{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const v=n.getContextAttributes();let m=null,d=null;const _=[],x=[];let M=null;const b=new Zt;b.layers.enable(1),b.viewport=new yt;const C=new Zt;C.layers.enable(2),C.viewport=new yt;const L=[b,C],P=new aA;P.layers.enable(1),P.layers.enable(2);let S=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(q){M=q},this.getController=function(q){let pe=_[q];return pe===void 0&&(pe=new ja,_[q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(q){let pe=_[q];return pe===void 0&&(pe=new ja,_[q]=pe),pe.getGripSpace()},this.getHand=function(q){let pe=_[q];return pe===void 0&&(pe=new ja,_[q]=pe),pe.getHandSpace()};function k(q){const pe=x.indexOf(q.inputSource);if(pe===-1)return;const me=_[pe];me!==void 0&&(me.update(q.inputSource,q.frame,c||o),me.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",O);for(let q=0;q<_.length;q++){const pe=x[q];pe!==null&&(x[q]=null,_[q].disconnect(pe))}S=null,A=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,Ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const pe={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:p}),d=new Ii(p.framebufferWidth,p.framebufferHeight,{format:un,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let pe=null,me=null,Te=null;v.depth&&(Te=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=v.stencil?Rr:Ci,me=v.stencil?Ri:ei);const ge={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),d=new Ii(h.textureWidth,h.textureHeight,{format:un,type:oi,depthTexture:new cA(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const B=e.properties.get(d);B.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(q){for(let pe=0;pe<q.removed.length;pe++){const me=q.removed[pe],Te=x.indexOf(me);Te>=0&&(x[Te]=null,_[Te].disconnect(me))}for(let pe=0;pe<q.added.length;pe++){const me=q.added[pe];let Te=x.indexOf(me);if(Te===-1){for(let B=0;B<_.length;B++)if(B>=x.length){x.push(me),Te=B;break}else if(x[B]===null){x[B]=me,Te=B;break}if(Te===-1)break}const ge=_[Te];ge&&ge.connect(me)}}const I=new X,j=new X;function te(q,pe,me){I.setFromMatrixPosition(pe.matrixWorld),j.setFromMatrixPosition(me.matrixWorld);const Te=I.distanceTo(j),ge=pe.projectionMatrix.elements,B=me.projectionMatrix.elements,fe=ge[14]/(ge[10]-1),ne=ge[14]/(ge[10]+1),xe=(ge[9]+1)/ge[5],we=(ge[9]-1)/ge[5],y=(ge[8]-1)/ge[0],U=(B[8]+1)/B[0],D=fe*y,H=fe*U,V=Te/(-y+U),ee=V*-y;pe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ee),q.translateZ(V),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const ce=fe+V,J=ne+V,ue=D-ee,ae=H+(Te-ee),be=xe*ne/J*ce,T=we*ne/J*ce;q.projectionMatrix.makePerspective(ue,ae,be,T,ce,J),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function $(q,pe){pe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCameraXR=function(q){if(r===null)return q;M&&(q=M),P.near=C.near=b.near=q.near,P.far=C.far=b.far=q.far,(S!==P.near||A!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),S=P.near,A=P.far);const pe=q.parent,me=P.cameras;$(P,pe);for(let Te=0;Te<me.length;Te++)$(me[Te],pe);return me.length===2?te(P,b,C):P.projectionMatrix.copy(b.projectionMatrix),M&&Y(P,pe),P};function Y(q,pe){const me=M;pe===null?me.matrix.copy(q.matrixWorld):(me.matrix.copy(pe.matrixWorld),me.matrix.invert(),me.matrix.multiply(q.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0);const Te=me.children;for(let ge=0,B=Te.length;ge<B;ge++)Te[ge].updateMatrixWorld(!0);me.projectionMatrix.copy(q.projectionMatrix),me.projectionMatrixInverse.copy(q.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=ys*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let le=null;function de(q,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Te=!1;me.length!==P.cameras.length&&(P.cameras.length=0,Te=!0);for(let ge=0;ge<me.length;ge++){const B=me[ge];let fe=null;if(p!==null)fe=p.getViewport(B);else{const xe=f.getViewSubImage(h,B);fe=xe.viewport,ge===0&&(e.setRenderTargetTextures(d,xe.colorTexture,h.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(d))}let ne=L[ge];ne===void 0&&(ne=new Zt,ne.layers.enable(ge),ne.viewport=new yt,L[ge]=ne),ne.matrix.fromArray(B.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(B.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(fe.x,fe.y,fe.width,fe.height),ge===0&&(P.matrix.copy(ne.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Te===!0&&P.cameras.push(ne)}}for(let me=0;me<_.length;me++){const Te=x[me],ge=_[me];Te!==null&&ge!==void 0&&ge.update(Te,pe,c||o)}le&&le(q,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Ee=new Sp;Ee.setAnimationLoop(de),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}}function fA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,yp(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const M=x.program;i.uniformBlockBinding(_,M)}function c(_,x){let M=r[_.id];M===void 0&&(g(_),M=u(_),r[_.id]=M,_.addEventListener("dispose",m));const b=x.program;i.updateUBOMapping(_,b);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function u(_){const x=f();_.__bindingPointIndex=x;const M=t.createBuffer(),b=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=r[_.id],M=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,L=M.length;C<L;C++){const P=M[C];if(p(P,C,b)===!0){const S=P.__offset,A=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let G=0;G<A.length;G++){const O=A[G],I=v(O);typeof O=="number"?(P.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,S+k,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=O.elements[0],P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=O.elements[0],P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=O.elements[0]):(O.toArray(P.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,M){const b=_.value;if(M[x]===void 0){if(typeof b=="number")M[x]=b;else{const C=Array.isArray(b)?b:[b],L=[];for(let P=0;P<C.length;P++)L.push(C[P].clone());M[x]=L}return!0}else if(typeof b=="number"){if(M[x]!==b)return M[x]=b,!0}else{const C=Array.isArray(M[x])?M[x]:[M[x]],L=Array.isArray(b)?b:[b];for(let P=0;P<C.length;P++){const S=C[P];if(S.equals(L[P])===!1)return S.copy(L[P]),!0}}return!1}function g(_){const x=_.uniforms;let M=0;const b=16;let C=0;for(let L=0,P=x.length;L<P;L++){const S=x[L],A={boundary:0,storage:0},k=Array.isArray(S.value)?S.value:[S.value];for(let G=0,O=k.length;G<O;G++){const I=k[G],j=v(I);A.boundary+=j.boundary,A.storage+=j.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,L>0){C=M%b;const G=b-C;C!==0&&G-A.boundary<0&&(M+=b-C,S.__offset=M)}M+=A.storage}return C=M%b,C>0&&(M+=b-C),_.__size=M,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function dA(){const t=Uo("canvas");return t.style.display="block",t}class Cp{constructor(e={}){const{canvas:n=dA(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=Hn,this.toneMappingExposure=1;const x=this;let M=!1,b=0,C=0,L=null,P=-1,S=null;const A=new yt,k=new yt;let G=null;const O=new Ze(0);let I=0,j=n.width,te=n.height,$=1,Y=null,le=null;const de=new yt(0,0,j,te),Ee=new yt(0,0,j,te);let q=!1;const pe=new ac;let me=!1,Te=!1,ge=null;const B=new mt,fe=new ze,ne=new X,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return L===null?$:1}let y=i;function U(w,W){for(let re=0;re<w.length;re++){const z=w[re],se=n.getContext(z,W);if(se!==null)return se}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ic}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",ve,!1),y===null){const W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),y=U(W,w),y===null)throw U(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let D,H,V,ee,ce,J,ue,ae,be,T,E,F,ie,oe,R,Q,he,K,Pe,Re,Le,ye,_e,Ue;function Je(){D=new bb(y),H=new vb(y,D,e),D.init(H),ye=new oA(y,D,H),V=new rA(y,D,H),ee=new wb(y),ce=new WT,J=new sA(y,D,V,ce,H,ye,ee),ue=new yb(x),ae=new Sb(x),be=new HM(y,H),_e=new gb(y,D,be,H),T=new Tb(y,be,ee,_e),E=new Lb(y,T,be,ee),Pe=new Pb(y,H,J),Q=new xb(ce),F=new GT(x,ue,ae,D,H,_e,Q),ie=new fA(x,ce),oe=new jT,R=new JT(D,H),K=new mb(x,ue,ae,V,E,h,l),he=new iA(x,E,H),Ue=new hA(y,ee,H,V),Re=new _b(y,D,ee,H),Le=new Ab(y,D,ee,H),ee.programs=F.programs,x.capabilities=H,x.extensions=D,x.properties=ce,x.renderLists=oe,x.shadowMap=he,x.state=V,x.info=ee}Je();const N=new uA(x,y);this.xr=N,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const w=D.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=D.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(j,te,!1))},this.getSize=function(w){return w.set(j,te)},this.setSize=function(w,W,re=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,te=W,n.width=Math.floor(w*$),n.height=Math.floor(W*$),re===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(j*$,te*$).floor()},this.setDrawingBufferSize=function(w,W,re){j=w,te=W,$=re,n.width=Math.floor(w*re),n.height=Math.floor(W*re),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,W,re,z){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,W,re,z),V.viewport(A.copy(de).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(Ee)},this.setScissor=function(w,W,re,z){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,W,re,z),V.scissor(k.copy(Ee).multiplyScalar($).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(w){V.setScissorTest(q=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(w=!0,W=!0,re=!0){let z=0;if(w){let se=!1;if(L!==null){const Ce=L.texture.format;se=Ce===ap||Ce===op||Ce===sp}if(se){const Ce=L.texture.type,De=Ce===oi||Ce===ei||Ce===rc||Ce===Ri||Ce===ip||Ce===rp,Ne=K.getClearColor(),Fe=K.getClearAlpha(),We=Ne.r,Be=Ne.g,He=Ne.b,et=ce.get(L).__webglFramebuffer;De?(p[0]=We,p[1]=Be,p[2]=He,p[3]=Fe,y.clearBufferuiv(y.COLOR,et,p)):(g[0]=We,g[1]=Be,g[2]=He,g[3]=Fe,y.clearBufferiv(y.COLOR,et,g))}else z|=y.COLOR_BUFFER_BIT}W&&(z|=y.DEPTH_BUFFER_BIT),re&&(z|=y.STENCIL_BUFFER_BIT),y.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),oe.dispose(),R.dispose(),ce.dispose(),ue.dispose(),ae.dispose(),E.dispose(),_e.dispose(),Ue.dispose(),F.dispose(),N.dispose(),N.removeEventListener("sessionstart",st),N.removeEventListener("sessionend",mn),ge&&(ge.dispose(),ge=null),Ct.stop()};function Se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=ee.autoReset,W=he.enabled,re=he.autoUpdate,z=he.needsUpdate,se=he.type;Je(),ee.autoReset=w,he.enabled=W,he.autoUpdate=re,he.needsUpdate=z,he.type=se}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ae(w){const W=w.target;W.removeEventListener("dispose",Ae),qe(W)}function qe(w){rt(w),ce.remove(w)}function rt(w){const W=ce.get(w).programs;W!==void 0&&(W.forEach(function(re){F.releaseProgram(re)}),w.isShaderMaterial&&F.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,re,z,se,Ce){W===null&&(W=xe);const De=se.isMesh&&se.matrixWorld.determinant()<0,Ne=Ip(w,W,re,z,se);V.setMaterial(z,De);let Fe=re.index,We=1;z.wireframe===!0&&(Fe=T.getWireframeAttribute(re),We=2);const Be=re.drawRange,He=re.attributes.position;let et=Be.start*We,ot=(Be.start+Be.count)*We;Ce!==null&&(et=Math.max(et,Ce.start*We),ot=Math.min(ot,(Ce.start+Ce.count)*We)),Fe!==null?(et=Math.max(et,0),ot=Math.min(ot,Fe.count)):He!=null&&(et=Math.max(et,0),ot=Math.min(ot,He.count));const tn=ot-et;if(tn<0||tn===1/0)return;_e.setup(se,z,Ne,re,Fe);let bn,lt=Re;if(Fe!==null&&(bn=be.get(Fe),lt=Le,lt.setIndex(bn)),se.isMesh)z.wireframe===!0?(V.setLineWidth(z.wireframeLinewidth*we()),lt.setMode(y.LINES)):lt.setMode(y.TRIANGLES);else if(se.isLine){let Xe=z.linewidth;Xe===void 0&&(Xe=1),V.setLineWidth(Xe*we()),se.isLineSegments?lt.setMode(y.LINES):se.isLineLoop?lt.setMode(y.LINE_LOOP):lt.setMode(y.LINE_STRIP)}else se.isPoints?lt.setMode(y.POINTS):se.isSprite&&lt.setMode(y.TRIANGLES);if(se.isInstancedMesh)lt.renderInstances(et,tn,se.count);else if(re.isInstancedBufferGeometry){const Xe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Jo=Math.min(re.instanceCount,Xe);lt.renderInstances(et,tn,Jo)}else lt.render(et,tn)},this.compile=function(w,W){function re(z,se,Ce){z.transparent===!0&&z.side===Nn&&z.forceSinglePass===!1?(z.side=kt,z.needsUpdate=!0,Ls(z,se,Ce),z.side=li,z.needsUpdate=!0,Ls(z,se,Ce),z.side=Nn):Ls(z,se,Ce)}m=R.get(w),m.init(),_.push(m),w.traverseVisible(function(z){z.isLight&&z.layers.test(W.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x.useLegacyLights),w.traverse(function(z){const se=z.material;if(se)if(Array.isArray(se))for(let Ce=0;Ce<se.length;Ce++){const De=se[Ce];re(De,w,z)}else re(se,w,z)}),_.pop(),m=null};let at=null;function ui(w){at&&at(w)}function st(){Ct.stop()}function mn(){Ct.start()}const Ct=new Sp;Ct.setAnimationLoop(ui),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(w){at=w,N.setAnimationLoop(w),w===null?Ct.stop():Ct.start()},N.addEventListener("sessionstart",st),N.addEventListener("sessionend",mn),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(W=N.updateCameraXR(W)),w.isScene===!0&&w.onBeforeRender(x,w,W,L),m=R.get(w,_.length),m.init(),_.push(m),B.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),pe.setFromProjectionMatrix(B),Te=this.localClippingEnabled,me=Q.init(this.clippingPlanes,Te),v=oe.get(w,d.length),v.init(),d.push(v),dc(w,W,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Y,le),me===!0&&Q.beginShadows();const re=m.state.shadowsArray;if(he.render(re,w,W),me===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,K.render(v,w),m.setupLights(x.useLegacyLights),W.isArrayCamera){const z=W.cameras;for(let se=0,Ce=z.length;se<Ce;se++){const De=z[se];pc(v,w,De,De.viewport)}}else pc(v,w,W);L!==null&&(J.updateMultisampleRenderTarget(L),J.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,W),_e.resetDefaultState(),P=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function dc(w,W,re,z){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pe.intersectsSprite(w)){z&&ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(B);const De=E.update(w),Ne=w.material;Ne.visible&&v.push(w,De,Ne,re,ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pe.intersectsObject(w))){w.isSkinnedMesh&&w.skeleton.frame!==ee.render.frame&&(w.skeleton.update(),w.skeleton.frame=ee.render.frame);const De=E.update(w),Ne=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ne.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ne.copy(De.boundingSphere.center)),ne.applyMatrix4(w.matrixWorld).applyMatrix4(B)),Array.isArray(Ne)){const Fe=De.groups;for(let We=0,Be=Fe.length;We<Be;We++){const He=Fe[We],et=Ne[He.materialIndex];et&&et.visible&&v.push(w,De,et,re,ne.z,He)}}else Ne.visible&&v.push(w,De,Ne,re,ne.z,null)}}const Ce=w.children;for(let De=0,Ne=Ce.length;De<Ne;De++)dc(Ce[De],W,re,z)}function pc(w,W,re,z){const se=w.opaque,Ce=w.transmissive,De=w.transparent;m.setupLightsView(re),me===!0&&Q.setGlobalState(x.clippingPlanes,re),Ce.length>0&&Dp(se,Ce,W,re),z&&V.viewport(A.copy(z)),se.length>0&&Ps(se,W,re),Ce.length>0&&Ps(Ce,W,re),De.length>0&&Ps(De,W,re),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Dp(w,W,re,z){const se=H.isWebGL2;ge===null&&(ge=new Ii(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?xs:oi,minFilter:wr,samples:se&&a===!0?4:0})),x.getDrawingBufferSize(fe),se?ge.setSize(fe.x,fe.y):ge.setSize(Lo(fe.x),Lo(fe.y));const Ce=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(O),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const De=x.toneMapping;x.toneMapping=Hn,Ps(w,re,z),J.updateMultisampleRenderTarget(ge),J.updateRenderTargetMipmap(ge);let Ne=!1;for(let Fe=0,We=W.length;Fe<We;Fe++){const Be=W[Fe],He=Be.object,et=Be.geometry,ot=Be.material,tn=Be.group;if(ot.side===Nn&&He.layers.test(z.layers)){const bn=ot.side;ot.side=kt,ot.needsUpdate=!0,mc(He,re,z,et,ot,tn),ot.side=bn,ot.needsUpdate=!0,Ne=!0}}Ne===!0&&(J.updateMultisampleRenderTarget(ge),J.updateRenderTargetMipmap(ge)),x.setRenderTarget(Ce),x.setClearColor(O,I),x.toneMapping=De}function Ps(w,W,re){const z=W.isScene===!0?W.overrideMaterial:null;for(let se=0,Ce=w.length;se<Ce;se++){const De=w[se],Ne=De.object,Fe=De.geometry,We=z===null?De.material:z,Be=De.group;Ne.layers.test(re.layers)&&mc(Ne,W,re,Fe,We,Be)}}function mc(w,W,re,z,se,Ce){w.onBeforeRender(x,W,re,z,se,Ce),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),se.onBeforeRender(x,W,re,z,w,Ce),se.transparent===!0&&se.side===Nn&&se.forceSinglePass===!1?(se.side=kt,se.needsUpdate=!0,x.renderBufferDirect(re,W,z,se,w,Ce),se.side=li,se.needsUpdate=!0,x.renderBufferDirect(re,W,z,se,w,Ce),se.side=Nn):x.renderBufferDirect(re,W,z,se,w,Ce),w.onAfterRender(x,W,re,z,se,Ce)}function Ls(w,W,re){W.isScene!==!0&&(W=xe);const z=ce.get(w),se=m.state.lights,Ce=m.state.shadowsArray,De=se.state.version,Ne=F.getParameters(w,se.state,Ce,W,re),Fe=F.getProgramCacheKey(Ne);let We=z.programs;z.environment=w.isMeshStandardMaterial?W.environment:null,z.fog=W.fog,z.envMap=(w.isMeshStandardMaterial?ae:ue).get(w.envMap||z.environment),We===void 0&&(w.addEventListener("dispose",Ae),We=new Map,z.programs=We);let Be=We.get(Fe);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===De)return gc(w,Ne),Be}else Ne.uniforms=F.getUniforms(w),w.onBuild(re,Ne,x),w.onBeforeCompile(Ne,x),Be=F.acquireProgram(Ne,Fe),We.set(Fe,Be),z.uniforms=Ne.uniforms;const He=z.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Q.uniform),gc(w,Ne),z.needsLights=Op(w),z.lightsStateVersion=De,z.needsLights&&(He.ambientLightColor.value=se.state.ambient,He.lightProbe.value=se.state.probe,He.directionalLights.value=se.state.directional,He.directionalLightShadows.value=se.state.directionalShadow,He.spotLights.value=se.state.spot,He.spotLightShadows.value=se.state.spotShadow,He.rectAreaLights.value=se.state.rectArea,He.ltc_1.value=se.state.rectAreaLTC1,He.ltc_2.value=se.state.rectAreaLTC2,He.pointLights.value=se.state.point,He.pointLightShadows.value=se.state.pointShadow,He.hemisphereLights.value=se.state.hemi,He.directionalShadowMap.value=se.state.directionalShadowMap,He.directionalShadowMatrix.value=se.state.directionalShadowMatrix,He.spotShadowMap.value=se.state.spotShadowMap,He.spotLightMatrix.value=se.state.spotLightMatrix,He.spotLightMap.value=se.state.spotLightMap,He.pointShadowMap.value=se.state.pointShadowMap,He.pointShadowMatrix.value=se.state.pointShadowMatrix);const et=Be.getUniforms(),ot=mo.seqWithValue(et.seq,He);return z.currentProgram=Be,z.uniformsList=ot,Be}function gc(w,W){const re=ce.get(w);re.outputColorSpace=W.outputColorSpace,re.instancing=W.instancing,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Ip(w,W,re,z,se){W.isScene!==!0&&(W=xe),J.resetTextureUnits();const Ce=W.fog,De=z.isMeshStandardMaterial?W.environment:null,Ne=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Sn,Fe=(z.isMeshStandardMaterial?ae:ue).get(z.envMap||De),We=z.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Be=!!re.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),He=!!re.morphAttributes.position,et=!!re.morphAttributes.normal,ot=!!re.morphAttributes.color,tn=z.toneMapped?x.toneMapping:Hn,bn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,lt=bn!==void 0?bn.length:0,Xe=ce.get(z),Jo=m.state.lights;if(me===!0&&(Te===!0||w!==S)){const Vt=w===S&&z.id===P;Q.setState(z,w,Vt)}let vt=!1;z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Jo.state.version||Xe.outputColorSpace!==Ne||se.isInstancedMesh&&Xe.instancing===!1||!se.isInstancedMesh&&Xe.instancing===!0||se.isSkinnedMesh&&Xe.skinning===!1||!se.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Fe||z.fog===!0&&Xe.fog!==Ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Q.numPlanes||Xe.numIntersection!==Q.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Be||Xe.morphTargets!==He||Xe.morphNormals!==et||Xe.morphColors!==ot||Xe.toneMapping!==tn||H.isWebGL2===!0&&Xe.morphTargetsCount!==lt)&&(vt=!0):(vt=!0,Xe.__version=z.version);let fi=Xe.currentProgram;vt===!0&&(fi=Ls(z,W,se));let _c=!1,Hr=!1,Qo=!1;const Pt=fi.getUniforms(),hi=Xe.uniforms;if(V.useProgram(fi.program)&&(_c=!0,Hr=!0,Qo=!0),z.id!==P&&(P=z.id,Hr=!0),_c||S!==w){if(Pt.setValue(y,"projectionMatrix",w.projectionMatrix),H.logarithmicDepthBuffer&&Pt.setValue(y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),S!==w&&(S=w,Hr=!0,Qo=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Vt=Pt.map.cameraPosition;Vt!==void 0&&Vt.setValue(y,ne.setFromMatrixPosition(w.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Pt.setValue(y,"isOrthographic",w.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||se.isSkinnedMesh)&&Pt.setValue(y,"viewMatrix",w.matrixWorldInverse)}if(se.isSkinnedMesh){Pt.setOptional(y,se,"bindMatrix"),Pt.setOptional(y,se,"bindMatrixInverse");const Vt=se.skeleton;Vt&&(H.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Pt.setValue(y,"boneTexture",Vt.boneTexture,J),Pt.setValue(y,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ea=re.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0&&H.isWebGL2===!0)&&Pe.update(se,re,fi),(Hr||Xe.receiveShadow!==se.receiveShadow)&&(Xe.receiveShadow=se.receiveShadow,Pt.setValue(y,"receiveShadow",se.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hi.envMap.value=Fe,hi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Hr&&(Pt.setValue(y,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Np(hi,Qo),Ce&&z.fog===!0&&ie.refreshFogUniforms(hi,Ce),ie.refreshMaterialUniforms(hi,z,$,te,ge),mo.upload(y,Xe.uniformsList,hi,J)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(mo.upload(y,Xe.uniformsList,hi,J),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Pt.setValue(y,"center",se.center),Pt.setValue(y,"modelViewMatrix",se.modelViewMatrix),Pt.setValue(y,"normalMatrix",se.normalMatrix),Pt.setValue(y,"modelMatrix",se.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Vt=z.uniformsGroups;for(let ta=0,Fp=Vt.length;ta<Fp;ta++)if(H.isWebGL2){const vc=Vt[ta];Ue.update(vc,fi),Ue.bind(vc,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Np(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Op(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,W,re){ce.get(w.texture).__webglTexture=W,ce.get(w.depthTexture).__webglTexture=re;const z=ce.get(w);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=re===void 0,z.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){const re=ce.get(w);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,re=0){L=w,b=W,C=re;let z=!0,se=null,Ce=!1,De=!1;if(w){const Fe=ce.get(w);Fe.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(y.FRAMEBUFFER,null),z=!1):Fe.__webglFramebuffer===void 0?J.setupRenderTarget(w):Fe.__hasExternalTextures&&J.rebindTextures(w,ce.get(w.texture).__webglTexture,ce.get(w.depthTexture).__webglTexture);const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const Be=ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(se=Be[W],Ce=!0):H.isWebGL2&&w.samples>0&&J.useMultisampledRTT(w)===!1?se=ce.get(w).__webglMultisampledFramebuffer:se=Be,A.copy(w.viewport),k.copy(w.scissor),G=w.scissorTest}else A.copy(de).multiplyScalar($).floor(),k.copy(Ee).multiplyScalar($).floor(),G=q;if(V.bindFramebuffer(y.FRAMEBUFFER,se)&&H.drawBuffers&&z&&V.drawBuffers(w,se),V.viewport(A),V.scissor(k),V.setScissorTest(G),Ce){const Fe=ce.get(w.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,re)}else if(De){const Fe=ce.get(w.texture),We=W||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Fe.__webglTexture,re||0,We)}P=-1},this.readRenderTargetPixels=function(w,W,re,z,se,Ce,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){V.bindFramebuffer(y.FRAMEBUFFER,Ne);try{const Fe=w.texture,We=Fe.format,Be=Fe.type;if(We!==un&&ye.convert(We)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===xs&&(D.has("EXT_color_buffer_half_float")||H.isWebGL2&&D.has("EXT_color_buffer_float"));if(Be!==oi&&ye.convert(Be)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===ti&&(H.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-z&&re>=0&&re<=w.height-se&&y.readPixels(W,re,z,se,ye.convert(We),ye.convert(Be),Ce)}finally{const Fe=L!==null?ce.get(L).__webglFramebuffer:null;V.bindFramebuffer(y.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(w,W,re=0){const z=Math.pow(2,-re),se=Math.floor(W.image.width*z),Ce=Math.floor(W.image.height*z);J.setTexture2D(W,0),y.copyTexSubImage2D(y.TEXTURE_2D,re,0,0,w.x,w.y,se,Ce),V.unbindTexture()},this.copyTextureToTexture=function(w,W,re,z=0){const se=W.image.width,Ce=W.image.height,De=ye.convert(re.format),Ne=ye.convert(re.type);J.setTexture2D(re,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,re.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,re.unpackAlignment),W.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,z,w.x,w.y,se,Ce,De,Ne,W.image.data):W.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,z,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,De,W.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,z,w.x,w.y,De,Ne,W.image),z===0&&re.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(w,W,re,z,se=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=w.max.x-w.min.x+1,De=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,Fe=ye.convert(z.format),We=ye.convert(z.type);let Be;if(z.isData3DTexture)J.setTexture3D(z,0),Be=y.TEXTURE_3D;else if(z.isDataArrayTexture)J.setTexture2DArray(z,0),Be=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,z.unpackAlignment);const He=y.getParameter(y.UNPACK_ROW_LENGTH),et=y.getParameter(y.UNPACK_IMAGE_HEIGHT),ot=y.getParameter(y.UNPACK_SKIP_PIXELS),tn=y.getParameter(y.UNPACK_SKIP_ROWS),bn=y.getParameter(y.UNPACK_SKIP_IMAGES),lt=re.isCompressedTexture?re.mipmaps[0]:re.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,lt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,lt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,w.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,w.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,w.min.z),re.isDataTexture||re.isData3DTexture?y.texSubImage3D(Be,se,W.x,W.y,W.z,Ce,De,Ne,Fe,We,lt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),y.compressedTexSubImage3D(Be,se,W.x,W.y,W.z,Ce,De,Ne,Fe,lt.data)):y.texSubImage3D(Be,se,W.x,W.y,W.z,Ce,De,Ne,Fe,We,lt),y.pixelStorei(y.UNPACK_ROW_LENGTH,He),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,et),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ot),y.pixelStorei(y.UNPACK_SKIP_ROWS,tn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,bn),se===0&&z.generateMipmaps&&y.generateMipmap(Be),V.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?J.setTextureCube(w,0):w.isData3DTexture?J.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?J.setTexture2DArray(w,0):J.setTexture2D(w,0),V.unbindTexture()},this.resetState=function(){b=0,C=0,L=null,V.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?Pi:lp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pi?ke:Sn}}class pA extends Cp{}pA.prototype.isWebGL1Renderer=!0;class mw extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class mA extends Dt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Et,u=Et,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gA extends Dt{constructor(e,n,i,r,s,o,a,l,c,u,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isCompressedTexture=!0,this.image={width:n,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class gw extends Rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Kf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class _A{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const vA=new _A;class uc{constructor(e){this.manager=e!==void 0?e:vA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Un={};class xA extends Error{constructor(e,n){super(e),this.response=n}}class Pp extends uc{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Kf.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Un[e]!==void 0){Un[e].push({onLoad:n,onProgress:i,onError:r});return}Un[e]=[],Un[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let v=0;const m=new ReadableStream({start(d){_();function _(){f.read().then(({done:x,value:M})=>{if(x)d.close();else{v+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let C=0,L=u.length;C<L;C++){const P=u[C];P.onProgress&&P.onProgress(b)}d.enqueue(M),_()}})}}});return new Response(m)}else throw new xA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Kf.add(e,c);const u=Un[e];delete Un[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _w extends uc{constructor(e){super(e)}load(e,n,i,r){const s=this,o=[],a=new gA,l=new Pp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(f){l.load(e[f],function(h){const p=s.parse(h,!0);o[f]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(a.minFilter=St),a.image=o,a.format=p.format,a.needsUpdate=!0,n&&n(a))},i,r)}if(Array.isArray(e))for(let f=0,h=e.length;f<h;++f)u(f);else l.load(e,function(f){const h=s.parse(f,!0);if(h.isCubemap){const p=h.mipmaps.length/h.mipmapCount;for(let g=0;g<p;g++){o[g]={mipmaps:[]};for(let v=0;v<h.mipmapCount;v++)o[g].mipmaps.push(h.mipmaps[g*h.mipmapCount+v]),o[g].format=h.format,o[g].width=h.width,o[g].height=h.height}a.image=o}else a.image.width=h.width,a.image.height=h.height,a.mipmaps=h.mipmaps;h.mipmapCount===1&&(a.minFilter=St),a.format=h.format,a.needsUpdate=!0,n&&n(a)},i,r);return a}}class vw extends uc{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new mA,a=new Pp(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:jt,o.wrapT=c.wrapT!==void 0?c.wrapT:jt,o.magFilter=c.magFilter!==void 0?c.magFilter:St,o.minFilter=c.minFilter!==void 0?c.minFilter:St,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=wr),c.mipmapCount===1&&(o.minFilter=St),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c))},i,r),o}}class Lp extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const $a=new mt,Zf=new X,Jf=new X;class yA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Zf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zf),Jf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jf),n.updateMatrixWorld(),$a.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class MA extends yA{constructor(){super(new bp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xw extends Lp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new MA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yw extends Lp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const fc="\\[\\]\\.:\\/",EA=new RegExp("["+fc+"]","g"),hc="[^"+fc+"]",SA="[^"+fc.replace("\\.","")+"]",bA=/((?:WC+[\/:])*)/.source.replace("WC",hc),TA=/(WCOD+)?/.source.replace("WCOD",SA),AA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),wA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),RA=new RegExp("^"+bA+TA+AA+wA+"$"),CA=["material","materials","bones","map"];class PA{constructor(e,n,i){const r=i||Ke.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class Ke{constructor(e,n,i){this.path=n,this.parsedPath=i||Ke.parseTrackName(n),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,n,i):new Ke(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(EA,"")}static parseTrackName(e){const n=RA.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);CA.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=PA;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Up{constructor(e){this.value=e}clone(){return new Up(this.value.clone===void 0?this.value:this.value.clone())}}class Qf{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);function LA(t){return new Zt(70,t,.1,1e4)}const eh={type:"change"},qa={type:"start"},th={type:"end"};class UA extends Fi{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",ue),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(eh),i.update(),s=r.NONE},this.update=function(){const R=new X,Q=new Ni().setFromUnitVectors(e.up,new X(0,1,0)),he=Q.clone().invert(),K=new X,Pe=new Ni,Re=new X,Le=2*Math.PI;return function(){const ye=i.object.position;R.copy(ye).sub(i.target),R.applyQuaternion(Q),a.setFromVector3(R),i.autoRotate&&s===r.NONE&&S(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let _e=i.minAzimuthAngle,Ue=i.maxAzimuthAngle;return isFinite(_e)&&isFinite(Ue)&&(_e<-Math.PI?_e+=Le:_e>Math.PI&&(_e-=Le),Ue<-Math.PI?Ue+=Le:Ue>Math.PI&&(Ue-=Le),_e<=Ue?a.theta=Math.max(_e,Math.min(Ue,a.theta)):a.theta=a.theta>(_e+Ue)/2?Math.max(_e,a.theta):Math.min(Ue,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),R.setFromSpherical(a),R.applyQuaternion(he),ye.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||K.distanceToSquared(i.object.position)>o||8*(1-Pe.dot(i.object.quaternion))>o||Re.distanceToSquared(i.target)>0?(i.dispatchEvent(eh),K.copy(i.object.position),Pe.copy(i.object.quaternion),Re.copy(i.target),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",T),i.domElement.removeEventListener("pointerdown",D),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",J),i.domElement.removeEventListener("pointermove",H),i.domElement.removeEventListener("pointerup",V),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ue),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Qf,l=new Qf;let c=1;const u=new X;let f=!1;const h=new ze,p=new ze,g=new ze,v=new ze,m=new ze,d=new ze,_=new ze,x=new ze,M=new ze,b=[],C={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function P(){return Math.pow(.95,i.zoomSpeed)}function S(R){l.theta-=R}function A(R){l.phi-=R}const k=function(){const R=new X;return function(Q,he){R.setFromMatrixColumn(he,0),R.multiplyScalar(-Q),u.add(R)}}(),G=function(){const R=new X;return function(Q,he){i.screenSpacePanning===!0?R.setFromMatrixColumn(he,1):(R.setFromMatrixColumn(he,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(Q),u.add(R)}}(),O=function(){const R=new X;return function(Q,he){const K=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;R.copy(Pe).sub(i.target);let Re=R.length();Re*=Math.tan(i.object.fov/2*Math.PI/180),k(2*Q*Re/K.clientHeight,i.object.matrix),G(2*he*Re/K.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(Q*(i.object.right-i.object.left)/i.object.zoom/K.clientWidth,i.object.matrix),G(he*(i.object.top-i.object.bottom)/i.object.zoom/K.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function I(R){i.object.isPerspectiveCamera?c/=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*R)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(R){i.object.isPerspectiveCamera?c*=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/R)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(R){h.set(R.clientX,R.clientY)}function $(R){_.set(R.clientX,R.clientY)}function Y(R){v.set(R.clientX,R.clientY)}function le(R){p.set(R.clientX,R.clientY),g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Q=i.domElement;S(2*Math.PI*g.x/Q.clientHeight),A(2*Math.PI*g.y/Q.clientHeight),h.copy(p),i.update()}function de(R){x.set(R.clientX,R.clientY),M.subVectors(x,_),M.y>0?I(P()):M.y<0&&j(P()),_.copy(x),i.update()}function Ee(R){m.set(R.clientX,R.clientY),d.subVectors(m,v).multiplyScalar(i.panSpeed),O(d.x,d.y),v.copy(m),i.update()}function q(R){R.deltaY<0?j(P()):R.deltaY>0&&I(P()),i.update()}function pe(R){let Q=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),Q=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),Q=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?S(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),Q=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?S(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),Q=!0;break}Q&&(R.preventDefault(),i.update())}function me(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),Q=.5*(b[0].pageY+b[1].pageY);h.set(R,Q)}}function Te(){if(b.length===1)v.set(b[0].pageX,b[0].pageY);else{const R=.5*(b[0].pageX+b[1].pageX),Q=.5*(b[0].pageY+b[1].pageY);v.set(R,Q)}}function ge(){const R=b[0].pageX-b[1].pageX,Q=b[0].pageY-b[1].pageY,he=Math.sqrt(R*R+Q*Q);_.set(0,he)}function B(){i.enableZoom&&ge(),i.enablePan&&Te()}function fe(){i.enableZoom&&ge(),i.enableRotate&&me()}function ne(R){if(b.length==1)p.set(R.pageX,R.pageY);else{const he=oe(R),K=.5*(R.pageX+he.x),Pe=.5*(R.pageY+he.y);p.set(K,Pe)}g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Q=i.domElement;S(2*Math.PI*g.x/Q.clientHeight),A(2*Math.PI*g.y/Q.clientHeight),h.copy(p)}function xe(R){if(b.length===1)m.set(R.pageX,R.pageY);else{const Q=oe(R),he=.5*(R.pageX+Q.x),K=.5*(R.pageY+Q.y);m.set(he,K)}d.subVectors(m,v).multiplyScalar(i.panSpeed),O(d.x,d.y),v.copy(m)}function we(R){const Q=oe(R),he=R.pageX-Q.x,K=R.pageY-Q.y,Pe=Math.sqrt(he*he+K*K);x.set(0,Pe),M.set(0,Math.pow(x.y/_.y,i.zoomSpeed)),I(M.y),_.copy(x)}function y(R){i.enableZoom&&we(R),i.enablePan&&xe(R)}function U(R){i.enableZoom&&we(R),i.enableRotate&&ne(R)}function D(R){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",H),i.domElement.addEventListener("pointerup",V)),E(R),R.pointerType==="touch"?ae(R):ee(R))}function H(R){i.enabled!==!1&&(R.pointerType==="touch"?be(R):ce(R))}function V(R){F(R),b.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",H),i.domElement.removeEventListener("pointerup",V)),i.dispatchEvent(th),s=r.NONE}function ee(R){let Q;switch(R.button){case 0:Q=i.mouseButtons.LEFT;break;case 1:Q=i.mouseButtons.MIDDLE;break;case 2:Q=i.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case ki.DOLLY:if(i.enableZoom===!1)return;$(R),s=r.DOLLY;break;case ki.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;Y(R),s=r.PAN}else{if(i.enableRotate===!1)return;te(R),s=r.ROTATE}break;case ki.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;te(R),s=r.ROTATE}else{if(i.enablePan===!1)return;Y(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qa)}function ce(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;le(R);break;case r.DOLLY:if(i.enableZoom===!1)return;de(R);break;case r.PAN:if(i.enablePan===!1)return;Ee(R);break}}function J(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(qa),q(R),i.dispatchEvent(th))}function ue(R){i.enabled===!1||i.enablePan===!1||pe(R)}function ae(R){switch(ie(R),b.length){case 1:switch(i.touches.ONE){case zi.ROTATE:if(i.enableRotate===!1)return;me(),s=r.TOUCH_ROTATE;break;case zi.PAN:if(i.enablePan===!1)return;Te(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case zi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(),s=r.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;fe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qa)}function be(R){switch(ie(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ne(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;y(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(R),i.update();break;default:s=r.NONE}}function T(R){i.enabled!==!1&&R.preventDefault()}function E(R){b.push(R)}function F(R){delete C[R.pointerId];for(let Q=0;Q<b.length;Q++)if(b[Q].pointerId==R.pointerId){b.splice(Q,1);return}}function ie(R){let Q=C[R.pointerId];Q===void 0&&(Q=new ze,C[R.pointerId]=Q),Q.set(R.pageX,R.pageY)}function oe(R){const Q=R.pointerId===b[0].pointerId?b[1]:b[0];return C[Q.pointerId]}i.domElement.addEventListener("contextmenu",T),i.domElement.addEventListener("pointerdown",D),i.domElement.addEventListener("pointercancel",V),i.domElement.addEventListener("wheel",J,{passive:!1}),this.update()}}function DA(t){const{scene:e,...n}=t,i=1,r=1,s=i/r,o=LA(s);o.position.set(-3,2,-4);const a=new Cp(n);a.setSize(i,r);const l=()=>a.render(e,o),c=new UA(o,a.domElement);return{camera:o,renderer:a,render:l,orbit:c}}const IA=Nr({__name:"perspective",props:{scene:{},antialias:{type:Boolean,default:!0},precision:{default:"highp"},powerPreference:{default:"default"}},setup(t,{expose:e}){const n=t,i=hn(),{orbit:r,render:s,camera:o,renderer:a}=DA(n);e({orbit:r,render:s,camera:o,renderer:a});let l;function c(u,f){const h=u[0],{width:p,height:g}=h.contentRect;o.aspect=p/g,o.updateProjectionMatrix(),a.setSize(p,g-0),s()}return Vo(()=>{if(!i.value)throw new Error("Missing HTMLDivElement!");i.value.appendChild(a.domElement),s(),r.addEventListener("change",s),l=new ResizeObserver(c),l.observe(i.value)}),Xl(()=>{r.removeEventListener("change",s),l==null||l.disconnect()}),(u,f)=>(yn(),Cg("div",{ref_key:"container",ref:i,class:"three-perspective-container"},null,512))}}),NA=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},OA=NA(IA,[["__scopeId","data-v-1903d6da"]]);const FA=ci(t=>{t.vueApp.component("Perspective",OA)}),BA=[N0,Wx,Xx,jx,$x,Yx,Kx,FA],HA=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var i;return((i=t.params[n.slice(1)])==null?void 0:i.toString())||""}),kA=(t,e)=>{const n=t.route.matched.find(r=>{var s;return((s=r.components)==null?void 0:s.default)===t.Component.type}),i=e??(n==null?void 0:n.meta.key)??(n&&HA(t.route,n));return typeof i=="function"?i(t.route):i},zA=(t,e)=>({default:()=>t?Bn(ig,t===!0?{}:t,e):e}),VA=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var i;return e?Bn(t,e,n):(i=n.default)==null?void 0:i.call(n)}}),GA=Symbol("layout-meta"),WA=Nr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const i=dt(),r=hn();n({pageRef:r});const s=en(GA,null);let o;return()=>Bn(Kd,{name:t.name,route:t.route,...e},{default:a=>{if(!a.Component)return;if(o&&s&&!s.isCurrent(a.route))return o;const l=kA(a,t.pageKey),c=i.deferHydration(),u=!!(t.transition??a.route.meta.pageTransition??dl),f=u&&jA([t.transition,a.route.meta.pageTransition,dl,{onAfterLeave:()=>{i.callHook("page:transition:finish",a.Component)}}].filter(Boolean));return o=VA(Zl,u&&f,zA(t.keepalive??a.route.meta.keepalive??v0,Bn(Fh,{suspensible:!0,onPending:()=>i.callHook("page:start",a.Component),onResolve:()=>{Ir(()=>i.callHook("page:finish",a.Component).finally(c))}},{default:()=>Bn($A,{key:l,routeProps:a,pageKey:l,hasTransition:u,pageRef:r})}))).default(),o}})}});function XA(t){return Array.isArray(t)?t:t?[t]:[]}function jA(t){const e=t.map(n=>({...n,onAfterLeave:XA(n.onAfterLeave)}));return A0(...e)}const $A=Nr({name:"RouteProvider",props:["routeProps","pageKey","hasTransition","pageRef"],setup(t){const e=t.pageKey,n=t.routeProps.route,i={};for(const r in t.routeProps.route)i[r]=Ft(()=>e===t.pageKey?t.routeProps.route[r]:n[r]);return mr("_route",dn(i)),()=>Bn(t.routeProps.Component,{ref:t.pageRef})}}),qA=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},YA={};function KA(t,e){const n=WA;return yn(),Qn(n)}const ZA=qA(YA,[["render",KA]]),JA={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=r?Lc(()=>gr(()=>import("./error-404.66032f4e.js"),["./error-404.66032f4e.js","./nuxt-link.dc2e43e3.js","./error-404.23f2309d.css"],import.meta.url).then(f=>f.default||f)):Lc(()=>gr(()=>import("./error-500.6f73c274.js"),["./error-500.6f73c274.js","./error-500.aa16ed4d.css"],import.meta.url).then(f=>f.default||f));return(f,h)=>(yn(),Qn(nt(u),Kp(ud({statusCode:nt(i),statusMessage:nt(s),description:nt(o),stack:nt(a)})),null,16))}},nh={__name:"nuxt-root",setup(t){const e=()=>null,n=dt(),i=n.deferHydration(),r=!1;mr("_route",L0()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const s=$o();$h((a,l,c)=>{if(n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),I0(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>or(a)),!1});const{islandContext:o}=!1;return(a,l)=>(yn(),Qn(Fh,{onResolve:nt(i)},{default:Nh(()=>[nt(s)?(yn(),Qn(nt(JA),{key:0,error:nt(s)},null,8,["error"])):nt(o)?(yn(),Qn(nt(e),{key:1,context:nt(o)},null,8,["context"])):nt(r)?(yn(),Qn(ug(nt(r)),{key:2})):(yn(),Qn(nt(ZA),{key:3}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=nv.create({baseURL:rv()}));let ih;{let t;ih=async function(){var s,o;if(t)return t;const i=!!((s=window.__NUXT__)!=null&&s.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?m_(nh):p_(nh),r=_v({vueApp:i});try{await xv(r,BA)}catch(a){await r.callHook("app:error",a),r.payload.error=r.payload.error||a}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount("#"+x0),await r.hooks.callHook("app:mounted",i),await Ir()}catch(a){await r.callHook("app:error",a),r.payload.error=r.payload.error||a}return i},t=ih().catch(e=>{console.error("Error while mounting app:",e)})}export{un as $,Qn as A,nt as B,sw as C,iw as D,lw as E,Yt as F,fo as G,Oo as H,ow as I,OA as J,No as K,ke as L,ni as M,Zt as N,mw as O,lc as P,Ze as Q,gA as R,Oi as S,Dt as T,Up as U,X as V,Cp as W,dp as X,Li as Y,dw as Z,qA as _,cd as a,Nn as a0,Mn as a1,Ke as a2,fw as a3,mt as a4,hw as a5,Et as a6,Hu as a7,xa as a8,St as a9,tm as aA,ew as aB,aw as aC,Ay as aa,wr as ab,jt as ac,bl as ad,Tl as ae,xw as af,OM as ag,xs as ah,NM as ai,vw as aj,ti as ak,pw as al,Sn as am,by as an,El as ao,Jl as ap,$e as aq,pt as ar,_w as as,yw as at,gw as au,mA as av,gr as aw,P0 as ax,Bi as ay,Ui as az,ft as b,Cg as c,fd as d,nw as e,dt as f,Or as g,Nr as h,Ft as i,Ts as j,Vo as k,Go as l,Bn as m,rw as n,yn as o,tw as p,jo as q,hn as r,L_ as s,QA as t,cw as u,B_ as v,Nh as w,yd as x,uw as y,dr as z};
