import{C as y,R as g}from"./Ranges-DArkZDAG.js";import{Links as b}from"./index-DU2sqN2d.js";import{P as z}from"./ParticlesInteractorBase-vfDeBun3.js";import{j as D}from"./ColorUtils-Cn7nrMWp.js";import{j as P}from"./NumberUtils-fSLHzFkB.js";import"./index-C8ffGILs.js";import"./OptionsColor-BU8TyMFV.js";import"./TypeUtils-BOyOcFPO.js";import"./Utils-B52he1Wb.js";const k=2;class M extends y{constructor(i,t,s,n){super(i,t,s),this.canvasSize=n,this.canvasSize={...n}}contains(i){const{width:t,height:s}=this.canvasSize,{x:n,y:e}=i;return super.contains(i)||super.contains({x:n-t,y:e})||super.contains({x:n-t,y:e-s})||super.contains({x:n,y:e-s})}intersects(i){if(super.intersects(i))return!0;const t=i,s=i,n={x:i.position.x-this.canvasSize.width,y:i.position.y-this.canvasSize.height};if(s.radius!==void 0){const e=new y(n.x,n.y,s.radius*k);return super.intersects(e)}else if(t.size!==void 0){const e=new g(n.x,n.y,t.size.width*k,t.size.height*k);return super.intersects(e)}return!1}}const m=2,q=1,u={x:0,y:0},v=0;function L(h,i,t,s,n){const{dx:e,dy:l,distance:r}=P(h,i);if(!n||r<=t)return r;const a={x:Math.abs(e),y:Math.abs(l)},c={x:Math.min(a.x,s.width-a.x),y:Math.min(a.y,s.height-a.y)};return Math.sqrt(c.x**m+c.y**m)}class T extends z{constructor(i){super(i),this._setColor=t=>{if(!t.options.links)return;const s=this.linkContainer,n=t.options.links;let e=n.id===void 0?s.particles.linksColor:s.particles.linksColors.get(n.id);if(e)return;const l=n.color;e=D(l,n.blink,n.consent),n.id===void 0?s.particles.linksColor=e:s.particles.linksColors.set(n.id,e)},this.linkContainer=i}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}interact(i){if(!i.options.links)return;i.links=[];const t=i.getPosition(),s=this.container,n=s.canvas.size;if(t.x<u.x||t.y<u.y||t.x>n.width||t.y>n.height)return;const e=i.options.links,l=e.opacity,r=i.retina.linksDistance??v,a=e.warp;let c;a?c=new M(t.x,t.y,r,n):c=new y(t.x,t.y,r);const w=s.particles.quadTree.query(c);for(const o of w){const p=o.options.links;if(i===o||!(p!=null&&p.enable)||e.id!==p.id||o.spawning||o.destroyed||!o.links||i.links.some(f=>f.destination===o)||o.links.some(f=>f.destination===i))continue;const d=o.getPosition();if(d.x<u.x||d.y<u.y||d.x>n.width||d.y>n.height)continue;const x=L(t,d,r,n,a&&p.warp);if(x>r)continue;const C=(q-x/r)*l;this._setColor(i),i.links.push({destination:o,opacity:C})}}isEnabled(i){var t;return!!((t=i.options.links)!=null&&t.enable)}loadParticlesOptions(i,...t){i.links||(i.links=new b);for(const s of t)i.links.load(s==null?void 0:s.links)}reset(){}}export{T as Linker};