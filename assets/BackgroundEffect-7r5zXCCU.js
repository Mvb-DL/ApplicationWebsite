const __vite__fileDeps=["assets/Container-B42-Ycqv.js","assets/CanvasUtils-BNC9hoP0.js","assets/OptionsColor-7G3uaeHD.js","assets/ValueWithRandom-CfkmxJTM.js","assets/Ranges-CMAAAWST.js","assets/index-DuIESn84.js","assets/index-DaWaz3S7.css","assets/index-Cb0A2uZD.js","assets/index-BRisRWbl.js","assets/index-dc2yXc6T.js","assets/index-DS6EYa-D.js","assets/index-DpvKUOMA.js","assets/index-Cd8XLRmk.js","assets/index-CoYXEUd0.js","assets/index-DEygoy59.js","assets/index-VeEzubqM.js","assets/index-BRNe8IKL.js","assets/index-e7CSPW72.js","assets/index-D1R-nIns.js","assets/index-CJ076S5j.js","assets/index-CfSZhfR-.js","assets/index-BXFhtHBo.js","assets/index-D-kwm12D.js","assets/index-COFEgiyr.js","assets/index-BqVyXbPP.js","assets/index-DOqWBsKx.js","assets/index-DWX_sx2u.js","assets/index-D03L4F1h.js","assets/index-DwDYzAo1.js","assets/index-yF40954w.js","assets/index-NSW84cv6.js","assets/index-Bdexrd99.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as h,r as $,j as N}from"./index-DuIESn84.js";const Y="generated",it="pointerdown",st="pointerup",rt="pointerleave",at="pointerout",ot="pointermove",lt="touchstart",ut="touchend",ct="touchmove",ft="touchcancel",ht="resize",dt="visibilitychange",se="tsParticles - Error",L=100,le=.5,me=1e3;function mt(t){return typeof t=="boolean"}function z(t){return typeof t=="string"}function T(t){return typeof t=="number"}function F(t){return typeof t=="object"&&t!==null}function P(t){return Array.isArray(t)}const w={x:0,y:0,z:0},ue=2,Ee=1;class M{constructor(e,n,i){if(this._updateFromAngle=(s,r)=>{this.x=Math.cos(s)*r,this.y=Math.sin(s)*r},!T(e)&&e){this.x=e.x,this.y=e.y;const s=e;this.z=s.z?s.z:w.z}else if(e!==void 0&&n!==void 0)this.x=e,this.y=n,this.z=i??w.z;else throw new Error(`${se} Vector3d not initialized correctly`)}static get origin(){return M.create(w.x,w.y,w.z)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return M.create(e.x,e.y,e.z)}static create(e,n,i){return new M(e,n,i)}add(e){return M.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return M.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return M.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**ue+this.y**ue}mult(e){return M.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;e!=0&&this.multTo(Ee/e)}rotate(e){return M.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),w.z)}setTo(e){this.x=e.x,this.y=e.y;const n=e;this.z=n.z?n.z:w.z}sub(e){return M.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}class I extends M{constructor(e,n){super(e,n,w.z)}static get origin(){return I.create(w.x,w.y)}static clone(e){return I.create(e.x,e.y)}static create(e,n){return new I(e,n)}}let Ie=Math.random;const ie=new Map,Pe=2,De=Math.PI*Pe;function gt(t,e){ie.get(t)||ie.set(t,e)}function yt(t){return ie.get(t)??(e=>e)}function b(){return re(Ie(),0,1-Number.EPSILON)}function re(t,e,n){return Math.min(Math.max(t,e),n)}function Z(t,e,n,i){return Math.floor((t*n+e*i)/(n+i))}function R(t){const e=U(t),n=0;let i=G(t);return e===i&&(i=n),b()*(e-i)+i}function p(t){return T(t)?t:R(t)}function G(t){return T(t)?t:t.min}function U(t){return T(t)?t:t.max}function C(t,e){if(t===e||e===void 0&&T(t))return t;const n=G(t),i=U(t);return e!==void 0?{min:Math.min(n,e),max:Math.max(i,e)}:C(n,i)}function ge(t,e){const n=t.x-e.x,i=t.y-e.y,s=2;return{dx:n,dy:i,distance:Math.sqrt(n**s+i**s)}}function xt(t,e){return ge(t,e).distance}function Le(t){return t*Math.PI/180}function pt(t,e,n){if(T(t))return Le(t);const i=0,s=.5,r=.25,a=s+r;switch(t){case"top":return-Math.PI*s;case"top-right":return-Math.PI*r;case"right":return i;case"bottom-right":return Math.PI*r;case"bottom":return Math.PI*s;case"bottom-left":return Math.PI*a;case"left":return Math.PI;case"top-left":return-Math.PI*a;case"inside":return Math.atan2(n.y-e.y,n.x-e.x);case"outside":return Math.atan2(e.y-n.y,e.x-n.x);default:return b()*De}}function vt(t){const e=I.origin;return e.length=1,e.angle=t,e}function ce(t,e,n,i){return I.create(t.x*(n-i)/(n+i)+e.x*2*i/(n+i),t.y)}function _t(t){var e,n;return{x:((e=t.position)==null?void 0:e.x)??b()*t.size.width,y:((n=t.position)==null?void 0:n.y)??b()*t.size.height}}function ye(t){return t?t.endsWith("%")?parseFloat(t)/L:parseFloat(t):1}const Re={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function Ae(){return Re}function fe(t){const e={bounced:!1},{pSide:n,pOtherSide:i,rectSide:s,rectOtherSide:r,velocity:a,factor:l}=t,y=.5,m=0;return i.min<r.min||i.min>r.max||i.max<r.min||i.max>r.max||(n.max>=s.min&&n.max<=(s.max+s.min)*y&&a>m||n.min<=s.max&&n.min>(s.max+s.min)*y&&a<m)&&(e.velocity=a*-l,e.bounced=!0),e}function Te(t,e){const n=k(e,i=>t.matches(i));return P(n)?n.some(i=>i):n}function j(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function Oe(){return!j()&&typeof matchMedia<"u"}function Mt(t){if(Oe())return matchMedia(t)}function wt(t){if(!(j()||typeof IntersectionObserver>"u"))return new IntersectionObserver(t)}function bt(t){if(!(j()||typeof MutationObserver>"u"))return new MutationObserver(t)}function xe(t,e){return t===e||P(e)&&e.indexOf(t)>-1}async function Et(t,e){try{await document.fonts.load(`${e??"400"} 36px '${t??"Verdana"}'`)}catch{}}function Se(t){return Math.floor(b()*t.length)}function ae(t,e,n=!0){return t[e!==void 0&&n?e%t.length:Se(t)]}function It(t,e,n,i,s){return Ce(pe(t,i??0),e,n,s)}function Ce(t,e,n,i){let s=!0;return(!i||i==="bottom")&&(s=t.top<e.height+n.x),s&&(!i||i==="left")&&(s=t.right>n.x),s&&(!i||i==="right")&&(s=t.left<e.width+n.y),s&&(!i||i==="top")&&(s=t.bottom>n.y),s}function pe(t,e){return{bottom:t.y+e,left:t.x-e,right:t.x+e,top:t.y-e}}function he(t,...e){for(const n of e){if(n==null)continue;if(!F(n)){t=n;continue}const i=Array.isArray(n);i&&(F(t)||!t||!Array.isArray(t))?t=[]:!i&&(F(t)||!t||Array.isArray(t))&&(t={});for(const s in n){if(s==="__proto__")continue;const r=n,a=r[s],l=t;l[s]=F(a)&&Array.isArray(a)?a.map(y=>he(l[s],y)):he(l[s],a)}}return t}function Pt(t,e){return!!_e(e,n=>n.enable&&xe(t,n.mode))}function Dt(t,e,n){k(e,i=>{const s=i.mode;i.enable&&xe(t,s)&&ze(i,n)})}function ze(t,e){const n=t.selectors;k(n,i=>{e(i,t)})}function Lt(t,e){if(!(!e||!t))return _e(t,n=>Te(e,n.selectors))}function Rt(t){return{position:t.getPosition(),radius:t.getRadius(),mass:t.getMass(),velocity:t.velocity,factor:I.create(p(t.options.bounce.horizontal.value),p(t.options.bounce.vertical.value))}}function At(t,e){const{x:n,y:i}=t.velocity.sub(e.velocity),[s,r]=[t.position,e.position],{dx:a,dy:l}=ge(r,s);if(n*a+i*l<0)return;const m=-Math.atan2(l,a),f=t.mass,u=e.mass,o=t.velocity.rotate(m),c=e.velocity.rotate(m),g=ce(o,c,f,u),d=ce(c,o,f,u),x=g.rotate(-m),E=d.rotate(-m);t.velocity.x=x.x*t.factor.x,t.velocity.y=x.y*t.factor.y,e.velocity.x=E.x*e.factor.x,e.velocity.y=E.y*e.factor.y}function Tt(t,e){const n=t.getPosition(),i=t.getRadius(),s=pe(n,i),r=t.options.bounce,a=fe({pSide:{min:s.left,max:s.right},pOtherSide:{min:s.top,max:s.bottom},rectSide:{min:e.left,max:e.right},rectOtherSide:{min:e.top,max:e.bottom},velocity:t.velocity.x,factor:p(r.horizontal.value)});a.bounced&&(a.velocity!==void 0&&(t.velocity.x=a.velocity),a.position!==void 0&&(t.position.x=a.position));const l=fe({pSide:{min:s.top,max:s.bottom},pOtherSide:{min:s.left,max:s.right},rectSide:{min:e.top,max:e.bottom},rectOtherSide:{min:e.left,max:e.right},velocity:t.velocity.y,factor:p(r.vertical.value)});l.bounced&&(l.velocity!==void 0&&(t.velocity.y=l.velocity),l.position!==void 0&&(t.position.y=l.position))}function k(t,e){return P(t)?t.map((i,s)=>e(i,s)):e(t,0)}function ve(t,e,n){return P(t)?ae(t,e,n):t}function _e(t,e){return P(t)?t.find((i,s)=>e(i,s)):e(t,0)?t:void 0}function Ot(t,e){const n=t.value,i=t.animation,s={delayTime:p(i.delay)*me,enable:i.enable,value:p(t.value)*e,max:U(n)*e,min:G(n)*e,loops:0,maxLoops:p(i.count),time:0},r=1;if(i.enable){switch(s.decay=r-p(i.decay),i.mode){case"increase":s.status="increasing";break;case"decrease":s.status="decreasing";break;case"random":s.status=b()>=le?"increasing":"decreasing";break}const a=i.mode==="auto";switch(i.startValue){case"min":s.value=s.min,a&&(s.status="increasing");break;case"max":s.value=s.max,a&&(s.status="decreasing");break;case"random":default:s.value=R(s),a&&(s.status=b()>=le?"increasing":"decreasing");break}}return s.initialValue=s.value,s}function ke(t,e){if(!(t.mode==="percent")){const{mode:s,...r}=t;return r}return"x"in t?{x:t.x/L*e.width,y:t.y/L*e.height}:{width:t.width/L*e.width,height:t.height/L*e.height}}function St(t,e){return ke(t,e)}function Ve(t,e,n,i,s){switch(e){case"max":n>=s&&t.destroy();break;case"min":n<=i&&t.destroy();break}}function Ct(t,e,n,i,s){if(t.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const f=(e.velocity??0)*s.factor,u=e.min,o=e.max,c=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=s.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case"increasing":e.value>=o?(n?e.status="decreasing":e.value-=o,e.loops||(e.loops=0),e.loops++):e.value+=f;break;case"decreasing":e.value<=u?(n?e.status="increasing":e.value+=o,e.loops||(e.loops=0),e.loops++):e.value-=f}e.velocity&&c!==1&&(e.velocity*=c),Ve(t,i,e.value,u,o),t.destroyed||(e.value=re(e.value,u,o))}}class Fe{constructor(){this._listeners=new Map}addEventListener(e,n){this.removeEventListener(e,n);let i=this._listeners.get(e);i||(i=[],this._listeners.set(e,i)),i.push(n)}dispatchEvent(e,n){const i=this._listeners.get(e);i==null||i.forEach(s=>s(n))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,n){const i=this._listeners.get(e);if(!i)return;const s=i.length,r=i.indexOf(n);if(r<0)return;const l=1;s===l?this._listeners.delete(e):i.splice(r,l)}}async function ee(t,e,n,i=!1){let s=e.get(t);return(!s||i)&&(s=await Promise.all([...n.values()].map(r=>r(t))),e.set(t,s)),s}async function $e(t){const e=ve(t.url,t.index);if(!e)return t.fallback;const n=await fetch(e);return n.ok?await n.json():(Ae().error(`${se} ${n.status} while retrieving config file`),t.fallback)}class Ne{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new Fe,this._initialized=!1,this.plugins=[],this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this.pathGenerators=new Map}get configs(){const e={};for(const[n,i]of this._configs)e[n]=i;return e}get version(){return"3.3.0"}addConfig(e){const n=e.key??e.name??"default";this._configs.set(n,e),this._eventDispatcher.dispatchEvent("configAdded",{data:{name:n,config:e}})}async addEffect(e,n,i=!0){k(e,s=>{this.getEffectDrawer(s)||this.effectDrawers.set(s,n)}),await this.refresh(i)}addEventListener(e,n){this._eventDispatcher.addEventListener(e,n)}async addInteractor(e,n,i=!0){this._initializers.interactors.set(e,n),await this.refresh(i)}async addMover(e,n,i=!0){this._initializers.movers.set(e,n),await this.refresh(i)}async addParticleUpdater(e,n,i=!0){this._initializers.updaters.set(e,n),await this.refresh(i)}async addPathGenerator(e,n,i=!0){this.getPathGenerator(e)||this.pathGenerators.set(e,n),await this.refresh(i)}async addPlugin(e,n=!0){this.getPlugin(e.id)||this.plugins.push(e),await this.refresh(n)}async addPreset(e,n,i=!1,s=!0){(i||!this.getPreset(e))&&this.presets.set(e,n),await this.refresh(s)}async addShape(e,n,i=!0){k(e,s=>{this.getShapeDrawer(s)||this.shapeDrawers.set(s,n)}),await this.refresh(i)}clearPlugins(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}dispatchEvent(e,n){this._eventDispatcher.dispatchEvent(e,n)}dom(){return this._domArray}domItem(e){const n=this.dom(),i=n[e];if(!i||i.destroyed){n.splice(e,1);return}return i}async getAvailablePlugins(e){const n=new Map;for(const i of this.plugins)i.needsPlugin(e.actualOptions)&&n.set(i.id,await i.getPlugin(e));return n}getEffectDrawer(e){return this.effectDrawers.get(e)}async getInteractors(e,n=!1){return await ee(e,this.interactors,this._initializers.interactors,n)}async getMovers(e,n=!1){return await ee(e,this.movers,this._initializers.movers,n)}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(n=>n.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.shapeDrawers.get(e)}getSupportedEffects(){return this.effectDrawers.keys()}getSupportedShapes(){return this.shapeDrawers.keys()}async getUpdaters(e,n=!1){return await ee(e,this.updaters,this._initializers.updaters,n)}init(){this._initialized||(this._initialized=!0)}async load(e){var d;const i=e.id??((d=e.element)==null?void 0:d.id)??`tsparticles${Math.floor(b()*1e4)}`,{index:s,url:r}=e,a=r?await $e({fallback:e.options,url:r,index:s}):e.options;let l=e.element??document.getElementById(i);l||(l=document.createElement("div"),l.id=i,document.body.append(l));const y=ve(a,s),m=this.dom(),f=m.findIndex(x=>x.id.description===i),u=0;if(f>=u){const x=this.domItem(f);x&&!x.destroyed&&(x.destroy(),m.splice(f,1))}let o;if(l.tagName.toLowerCase()==="canvas")o=l,o.dataset[Y]="false";else{const x=l.getElementsByTagName("canvas");x.length?(o=x[0],o.dataset[Y]="false"):(o=document.createElement("canvas"),o.dataset[Y]="true",l.appendChild(o))}o.style.width||(o.style.width="100%"),o.style.height||(o.style.height="100%");const{Container:c}=await h(()=>import("./Container-B42-Ycqv.js"),__vite__mapDeps([0,1,2,3,4,5,6])),g=new c(this,i,y);return f>=u?m.splice(f,0,g):m.push(g),g.canvas.loadCanvas(o),await g.start(),g}loadOptions(e,n){for(const i of this.plugins)i.loadOptions(e,n)}loadParticlesOptions(e,n,...i){var r;const s=this.updaters.get(e);if(s)for(const a of s)(r=a.loadOptions)==null||r.call(a,n,...i)}async refresh(e=!0){e&&await Promise.all(this.dom().map(n=>n.refresh()))}removeEventListener(e,n){this._eventDispatcher.removeEventListener(e,n)}setOnClickHandler(e){const n=this.dom();if(!n.length)throw new Error(`${se} can only set click handlers after calling tsParticles.load()`);for(const i of n)i.addClickHandler(e)}}const H="random",q="mid",W=new Map;function de(t){W.set(t.key,t)}function qe(t){for(const[,y]of W)if(t.startsWith(y.stringPrefix))return y.parseString(t);const e=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,n=t.replace(e,(y,m,f,u,o)=>m+m+f+f+u+u+(o!==void 0?o+o:"")),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,s=i.exec(n),r=16;return s?{a:s[4]!==void 0?parseInt(s[4],r)/255:1,b:parseInt(s[3],r),g:parseInt(s[2],r),r:parseInt(s[1],r)}:void 0}function B(t,e,n=!0){if(!t)return;const i=z(t)?{value:t}:t;if(z(i.value))return Me(i.value,e,n);if(P(i.value))return B({value:ae(i.value,e,n)});for(const[,s]of W){const r=s.handleRangeColor(i);if(r)return r}}function Me(t,e,n=!0){if(!t)return;const i=z(t)?{value:t}:t;if(z(i.value))return i.value===H?we():Be(i.value);if(P(i.value))return Me({value:ae(i.value,e,n)});for(const[,s]of W){const r=s.handleColor(i);if(r)return r}}function zt(t,e,n=!0){const i=B(t,e,n);return i?He(i):void 0}function He(t){const f=t.r/255,u=t.g/255,o=t.b/255,c=Math.max(f,u,o),g=Math.min(f,u,o),d={h:0,l:(c+g)*.5,s:0};return c!==g&&(d.s=d.l<.5?(c-g)/(c+g):(c-g)/(2-c-g),d.h=f===c?(u-o)/(c-g):d.h=u===c?2+(o-f)/(c-g):2*2+(f-u)/(c-g)),d.l*=100,d.s*=100,d.h*=60,d.h<0&&(d.h+=360),d.h>=360&&(d.h-=360),d}function Be(t){return qe(t)}function A(t){const a=(t.h%360+360)%360,l=Math.max(0,Math.min(100,t.s)),y=Math.max(0,Math.min(100,t.l)),m=a/360,f=l/100,u=y/100,o=255,c=3;if(l===0){const _=Math.round(u*o);return{r:_,g:_,b:_}}const g=.5,d=2,x=(_,S,v)=>{if(v<0&&v++,v>1&&v--,v*6<1)return _+(S-_)*6*v;if(v*d<1)return S;if(v*c<1*d){const be=d/c;return _+(S-_)*(be-v)*6}return _},E=1,D=u<g?u*(E+f):u+f-u*f,O=d*u-D,Q=1,V=Q/c,J=Math.min(o,o*x(O,D,m+V)),K=Math.min(o,o*x(O,D,m)),X=Math.min(o,o*x(O,D,m-V));return{r:Math.round(J),g:Math.round(K),b:Math.round(X)}}function Ge(t){const e=A(t);return{a:t.a,b:e.b,g:e.g,r:e.r}}function we(t){return{b:Math.floor(R(C(0,256))),g:Math.floor(R(C(0,256))),r:Math.floor(R(C(0,256)))}}function kt(t,e){return`rgba(${t.r}, ${t.g}, ${t.b}, ${e??1})`}function Vt(t,e){return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??1})`}function Ue(t,e,n,i){let s=t,r=e;return s.r===void 0&&(s=A(t)),r.r===void 0&&(r=A(e)),{b:Z(s.b,r.b,n,i),g:Z(s.g,r.g,n,i),r:Z(s.r,r.r,n,i)}}function Ft(t,e,n){if(n===H)return we();if(n===q){const i=t.getFillColor()??t.getStrokeColor(),s=(e==null?void 0:e.getFillColor())??(e==null?void 0:e.getStrokeColor());if(i&&s&&e)return Ue(i,s,t.getRadius(),e.getRadius());{const r=i??s;if(r)return A(r)}}else return n}function $t(t,e,n){const i=z(t)?t:t.value;return i===H?n?B({value:i}):e?H:q:i===q?q:B({value:i})}function Nt(t){return t!==void 0?{h:t.h.value,s:t.s.value,l:t.l.value}:void 0}function qt(t,e,n){const i={h:{enable:!1,value:t.h},s:{enable:!1,value:t.s},l:{enable:!1,value:t.l}};return e&&(te(i.h,e.h,n),te(i.s,e.s,n),te(i.l,e.l,n)),i}function te(t,e,n){t.enable=e.enable;const i=0,s=1,r=0,a=0;t.enable?(t.velocity=p(e.speed)/L*n,t.decay=s-p(e.decay),t.status="increasing",t.loops=r,t.maxLoops=p(e.count),t.time=a,t.delayTime=p(e.delay)*me,e.sync||(t.velocity*=b(),t.value*=b()),t.initialValue=t.value,t.offset=C(e.offset)):t.velocity=i}function ne(t,e,n,i){if(!t||!t.enable||(t.maxLoops??0)>0&&(t.loops??0)>(t.maxLoops??0)||(t.time||(t.time=0),(t.delayTime??0)>0&&t.time<(t.delayTime??0)&&(t.time+=i.value),(t.delayTime??0)>0&&t.time<(t.delayTime??0)))return;const f=t.offset?R(t.offset):0,u=(t.velocity??0)*i.factor+f*3.6,o=t.decay??1,c=U(e),g=G(e);!n||t.status==="increasing"?(t.value+=u,t.value>c&&(t.loops||(t.loops=0),t.loops++,n?t.status="decreasing":t.value-=c)):(t.value-=u,t.value<0&&(t.loops||(t.loops=0),t.loops++,t.status="increasing")),t.velocity&&o!==1&&(t.velocity*=o),t.value=re(t.value,g,c)}function Ht(t,e){if(!t)return;const{h:n,s:i,l:s}=t,r={h:{min:0,max:360},s:{min:0,max:100},l:{min:0,max:100}};n&&ne(n,r.h,!1,e),i&&ne(i,r.s,!0,e),s&&ne(s,r.l,!0,e)}class je{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return A(i)}handleRangeColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.l!==void 0)return A({h:p(i.h),l:p(i.l),s:p(i.s)})}parseString(e){if(!e.startsWith("hsl"))return;const n=/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e),s=4,r=1,a=10;return i?Ge({a:i.length>s?ye(i[5]):r,h:parseInt(i[1],a),l:parseInt(i[3],a),s:parseInt(i[2],a)}):void 0}}class We{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return i}handleRangeColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return{r:p(i.r),g:p(i.g),b:p(i.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;const n=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e),s=10;return i?{a:i.length>4?ye(i[5]):1,b:parseInt(i[3],s),g:parseInt(i[2],s),r:parseInt(i[1],s)}:void 0}}function Qe(){const t=new We,e=new je;de(t),de(e);const n=new Ne;return n.init(),n}const oe=Qe();j()||(window.tsParticles=oe);const Je=t=>{const e=t.id??"tsparticles";return $.useEffect(()=>{let n;return oe.load({id:e,url:t.url,options:t.options}).then(i=>{var s;n=i,(s=t.particlesLoaded)==null||s.call(t,i)}),()=>{n==null||n.destroy()}},[e,t,t.url,t.options]),N.jsx("div",{id:e,className:t.className})};async function Ke(t){await t(oe)}async function Xe(t,e=!0){const{loadParallaxMover:n}=await h(()=>import("./index-Cb0A2uZD.js"),__vite__mapDeps([7,5,6])),{loadExternalAttractInteraction:i}=await h(()=>import("./index-BRisRWbl.js"),__vite__mapDeps([8,5,6])),{loadExternalBounceInteraction:s}=await h(()=>import("./index-dc2yXc6T.js"),__vite__mapDeps([9,5,6])),{loadExternalBubbleInteraction:r}=await h(()=>import("./index-DS6EYa-D.js"),__vite__mapDeps([10,5,6,2])),{loadExternalConnectInteraction:a}=await h(()=>import("./index-DpvKUOMA.js"),__vite__mapDeps([11,5,6])),{loadExternalGrabInteraction:l}=await h(()=>import("./index-Cd8XLRmk.js"),__vite__mapDeps([12,5,6,2])),{loadExternalPauseInteraction:y}=await h(()=>import("./index-CoYXEUd0.js"),__vite__mapDeps([13,5,6])),{loadExternalPushInteraction:m}=await h(()=>import("./index-DEygoy59.js"),__vite__mapDeps([14,5,6])),{loadExternalRemoveInteraction:f}=await h(()=>import("./index-VeEzubqM.js"),__vite__mapDeps([15,5,6])),{loadExternalRepulseInteraction:u}=await h(()=>import("./index-BRNe8IKL.js"),__vite__mapDeps([16,5,6])),{loadExternalSlowInteraction:o}=await h(()=>import("./index-e7CSPW72.js"),__vite__mapDeps([17,5,6])),{loadParticlesAttractInteraction:c}=await h(()=>import("./index-D1R-nIns.js"),__vite__mapDeps([18,5,6])),{loadParticlesCollisionsInteraction:g}=await h(()=>import("./index-CJ076S5j.js"),__vite__mapDeps([19,5,6])),{loadParticlesLinksInteraction:d}=await h(()=>import("./index-CfSZhfR-.js"),__vite__mapDeps([20,5,6,2])),{loadEasingQuadPlugin:x}=await h(()=>import("./index-BXFhtHBo.js"),__vite__mapDeps([21,5,6])),{loadEmojiShape:E}=await h(()=>import("./index-D-kwm12D.js").then(v=>v.i),__vite__mapDeps([22,5,6])),{loadImageShape:D}=await h(()=>import("./index-COFEgiyr.js").then(v=>v.i),__vite__mapDeps([23,5,6])),{loadLineShape:O}=await h(()=>import("./index-BqVyXbPP.js"),__vite__mapDeps([24,5,6])),{loadPolygonShape:Q}=await h(()=>import("./index-DOqWBsKx.js"),__vite__mapDeps([25,5,6])),{loadSquareShape:V}=await h(()=>import("./index-DWX_sx2u.js"),__vite__mapDeps([26,5,6])),{loadStarShape:J}=await h(()=>import("./index-D03L4F1h.js"),__vite__mapDeps([27,5,6])),{loadLifeUpdater:K}=await h(()=>import("./index-DwDYzAo1.js"),__vite__mapDeps([28,5,6])),{loadRotateUpdater:X}=await h(()=>import("./index-yF40954w.js"),__vite__mapDeps([29,5,6])),{loadStrokeColorUpdater:_}=await h(()=>import("./index-NSW84cv6.js"),__vite__mapDeps([30,5,6])),{loadBasic:S}=await h(()=>import("./index-Bdexrd99.js"),__vite__mapDeps([31,5,6]));await n(t,!1),await i(t,!1),await s(t,!1),await r(t,!1),await a(t,!1),await l(t,!1),await y(t,!1),await m(t,!1),await f(t,!1),await u(t,!1),await o(t,!1),await c(t,!1),await g(t,!1),await d(t,!1),await x(),await E(t,!1),await D(t,!1),await O(t,!1),await Q(t,!1),await V(t,!1),await J(t,!1),await K(t,!1),await X(t,!1),await _(t,!1),await S(t,e)}const Ye=()=>{const[t,e]=$.useState(!1);$.useEffect(()=>{Ke(async s=>{await Xe(s)}).then(()=>{e(!0)})},[]);const n=s=>{},i=$.useMemo(()=>({background:{color:{value:"#202226"}},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"push"}},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#6225e6"},links:{color:"#6225e6",distance:300,enable:!0,opacity:.7,width:1},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:1.3,straight:!1},number:{density:{enable:!0},value:140},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}),[]);if(t)return N.jsx("div",{children:N.jsx("div",{className:"background-effect",children:N.jsx(Je,{id:"tsparticles",particlesLoaded:n,options:i})})})},Bt=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"}));export{Tt as $,dt as A,ht as B,rt as C,at as D,_t as E,vt as F,Le as G,p as H,R as I,b as J,xt as K,re as L,St as M,pt as N,I as O,Nt as P,ve as Q,Ot as R,xe as S,j as T,wt as U,M as V,ge as W,yt as X,Dt as Y,At as Z,Rt as _,gt as a,pe as a0,Pt as a1,U as a2,He as a3,Ue as a4,Lt as a5,$t as a6,Ft as a7,ae as a8,Et as a9,Ct as aa,qt as ab,Ht as ac,L as ad,It as ae,Bt as af,Ae as b,se as c,z as d,k as e,he as f,Vt as g,T as h,P as i,F as j,mt as k,Mt as l,B as m,kt as n,bt as o,Y as p,me as q,zt as r,C as s,ot as t,lt as u,ct as v,ut as w,st as x,it as y,ft as z};
