import{i as y,b as R,G as h}from"./NumberUtils-fSLHzFkB.js";import{m as x,n as l}from"./Utils-B52he1Wb.js";import{P}from"./ParticlesInteractorBase-vfDeBun3.js";import"./TypeUtils-BOyOcFPO.js";const M=.5,v=10,S=0;function u(e,i,s,t,o,n){const d=y(e.options.collisions.absorb.speed*o.factor/v,S,t);e.size.value+=d*M,s.size.value-=d,t<=n&&(s.size.value=0,s.destroy())}function k(e,i,s,t){const o=e.getRadius(),n=i.getRadius();o===void 0&&n!==void 0?e.destroy():o!==void 0&&n===void 0?i.destroy():o!==void 0&&n!==void 0&&(o>=n?u(e,o,i,n,s,t):u(i,n,e,o,s,t))}const f=e=>{e.collisionMaxSpeed===void 0&&(e.collisionMaxSpeed=R(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function b(e,i){x(l(e),l(i)),f(e),f(i)}function z(e,i){!e.unbreakable&&!i.unbreakable&&b(e,i),e.getRadius()===void 0&&i.getRadius()!==void 0?e.destroy():e.getRadius()!==void 0&&i.getRadius()===void 0?i.destroy():e.getRadius()!==void 0&&i.getRadius()!==void 0&&(e.getRadius()>=i.getRadius()?i:e).destroy()}function B(e,i,s,t){switch(e.options.collisions.mode){case"absorb":{k(e,i,s,t);break}case"bounce":{b(e,i);break}case"destroy":{z(e,i);break}}}const q=2;class D extends P{constructor(i){super(i)}clear(){}init(){}interact(i,s){if(i.destroyed||i.spawning)return;const t=this.container,o=i.getPosition(),n=i.getRadius(),d=t.particles.quadTree.queryCircle(o,n*q);for(const a of d){if(i===a||!a.options.collisions.enable||i.options.collisions.mode!==a.options.collisions.mode||a.destroyed||a.spawning)continue;const r=a.getPosition(),c=a.getRadius();if(Math.abs(Math.round(o.z)-Math.round(r.z))>n+c)continue;const g=h(o,r),m=n+c;g>m||B(i,a,s,t.retina.pixelRatio)}}isEnabled(i){return i.options.collisions.enable}reset(){}}export{D as Collider};