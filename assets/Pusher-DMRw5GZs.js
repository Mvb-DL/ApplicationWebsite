import{Push as a}from"./index-CSoj6IEq.js";import{b as p}from"./NumberUtils-fSLHzFkB.js";import{b as c}from"./Utils-B52he1Wb.js";import{E as d}from"./ExternalInteractorBase-CIi3zRdK.js";import"./index-C8ffGILs.js";import"./TypeUtils-BOyOcFPO.js";const m="push",h=0;class x extends d{constructor(r){super(r),this.handleClickMode=e=>{if(e!==m)return;const t=this.container,s=t.actualOptions,i=s.interactivity.modes.push;if(!i)return;const o=p(i.quantity);if(o<=h)return;const n=c([void 0,...i.groups]),u=n!==void 0?t.actualOptions.particles.groups[n]:void 0;t.particles.push(o,t.interactivity.mouse,u,n)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(r,...e){r.push||(r.push=new a);for(const t of e)r.push.load(t==null?void 0:t.push)}reset(){}}export{x as Pusher};