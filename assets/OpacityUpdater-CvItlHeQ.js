import{h as a,u as s}from"./Utils-B52he1Wb.js";import{b as e,l as y,g as p}from"./NumberUtils-fSLHzFkB.js";import"./TypeUtils-BOyOcFPO.js";class r{constructor(o){this.container=o}init(o){const n=o.options.opacity,i=1;o.opacity=a(n,i);const t=n.animation;t.enable&&(o.opacity.velocity=e(t.speed)/y*this.container.retina.reduceFactor,t.sync||(o.opacity.velocity*=p()))}isEnabled(o){return!o.destroyed&&!o.spawning&&!!o.opacity&&o.opacity.enable&&((o.opacity.maxLoops??0)<=0||(o.opacity.maxLoops??0)>0&&(o.opacity.loops??0)<(o.opacity.maxLoops??0))}reset(o){o.opacity&&(o.opacity.time=0,o.opacity.loops=0)}update(o,n){!this.isEnabled(o)||!o.opacity||s(o,o.opacity,!0,o.options.opacity.animation.destroy,n)}}export{r as OpacityUpdater};
