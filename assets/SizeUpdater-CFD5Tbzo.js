import{ad as t,J as a,aa as z}from"./BackgroundEffect-BEyeqcNa.js";import"./index-gPoPG7Lh.js";const o=0;class p{init(n){const s=n.container,i=n.options.size,e=i.animation;e.enable&&(n.size.velocity=(n.retina.sizeAnimationSpeed??s.retina.sizeAnimationSpeed)/t*s.retina.reduceFactor,e.sync||(n.size.velocity*=a()))}isEnabled(n){return!n.destroyed&&!n.spawning&&n.size.enable&&((n.size.maxLoops??o)<=o||(n.size.maxLoops??o)>o&&(n.size.loops??o)<(n.size.maxLoops??o))}reset(n){n.size.loops=o}update(n,s){this.isEnabled(n)&&z(n,n.size,!0,n.options.size.animation.destroy,s)}}export{p as SizeUpdater};
