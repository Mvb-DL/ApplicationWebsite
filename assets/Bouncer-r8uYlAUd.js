import{l as E,m as M,n as R,r as g,o as q,j as v,p as D}from"./Utils-B52he1Wb.js";import{C as d,R as b}from"./Ranges-DArkZDAG.js";import{V as p,o as H}from"./NumberUtils-fSLHzFkB.js";import{Bounce as w}from"./index-D_08SOLm.js";import{E as I}from"./ExternalInteractorBase-CIi3zRdK.js";import"./TypeUtils-BOyOcFPO.js";import"./index-ByAddleP.js";const O=2,l=.5,P=Math.PI*l,h=2,y=10,S=0;function x(c,e,o,t,s){const i=c.particles.quadTree.query(t,s);for(const n of i)t instanceof d?M(R(n),{position:e,radius:o,mass:o**O*P,velocity:p.origin,factor:p.origin}):t instanceof b&&g(n,q(e,o))}function T(c,e,o,t){const s=document.querySelectorAll(e);s.length&&s.forEach(i=>{const n=i,r=c.retina.pixelRatio,a={x:(n.offsetLeft+n.offsetWidth*l)*r,y:(n.offsetTop+n.offsetHeight*l)*r},m=n.offsetWidth*l*r,u=y*r,B=o.type==="circle"?new d(a.x,a.y,m+u):new b(n.offsetLeft*r-u,n.offsetTop*r-u,n.offsetWidth*r+u*h,n.offsetHeight*r+u*h);t(a,m,B)})}function W(c,e,o,t){E(o,e,(s,i)=>T(c,s,i,(n,r,a)=>x(c,n,r,a,t)))}function A(c,e){const o=c.retina.pixelRatio,t=y*o,s=c.interactivity.mouse.position,i=c.retina.bounceModeDistance;!i||i<S||!s||x(c,s,i,new d(s.x,s.y,i+t),e)}const f="bounce";class G extends I{constructor(e){super(e)}clear(){}init(){const e=this.container,o=e.actualOptions.interactivity.modes.bounce;o&&(e.retina.bounceModeDistance=o.distance*e.retina.pixelRatio)}interact(){const e=this.container,o=e.actualOptions,t=o.interactivity.events,s=e.interactivity.status===H,i=t.onHover.enable,n=t.onHover.mode,r=t.onDiv;s&&i&&v(f,n)?A(this.container,a=>this.isEnabled(a)):W(this.container,r,f,a=>this.isEnabled(a))}isEnabled(e){const o=this.container,t=o.actualOptions,s=o.interactivity.mouse,i=((e==null?void 0:e.interactivity)??t.interactivity).events,n=i.onDiv;return!!s.position&&i.onHover.enable&&v(f,i.onHover.mode)||D(f,n)}loadModeOptions(e,...o){e.bounce||(e.bounce=new w);for(const t of o)e.bounce.load(t==null?void 0:t.bounce)}reset(){}}export{G as Bouncer};
