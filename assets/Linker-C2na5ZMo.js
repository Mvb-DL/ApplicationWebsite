import{C as y,R as g}from"./Ranges-CMAAAWST.js";import{Links as b}from"./index-CfSZhfR-.js";import{P as z}from"./ParticlesInteractorBase-vfDeBun3.js";import{a6 as D,W as P}from"./BackgroundEffect-7r5zXCCU.js";import"./index-DuIESn84.js";import"./OptionsColor-7G3uaeHD.js";const k=2;class M extends y{constructor(i,n,s,t){super(i,n,s),this.canvasSize=t,this.canvasSize={...t}}contains(i){const{width:n,height:s}=this.canvasSize,{x:t,y:e}=i;return super.contains(i)||super.contains({x:t-n,y:e})||super.contains({x:t-n,y:e-s})||super.contains({x:t,y:e-s})}intersects(i){if(super.intersects(i))return!0;const n=i,s=i,t={x:i.position.x-this.canvasSize.width,y:i.position.y-this.canvasSize.height};if(s.radius!==void 0){const e=new y(t.x,t.y,s.radius*k);return super.intersects(e)}else if(n.size!==void 0){const e=new g(t.x,t.y,n.size.width*k,n.size.height*k);return super.intersects(e)}return!1}}const w=2,q=1,p={x:0,y:0},v=0;function L(h,i,n,s,t){const{dx:e,dy:l,distance:r}=P(h,i);if(!t||r<=n)return r;const a={x:Math.abs(e),y:Math.abs(l)},c={x:Math.min(a.x,s.width-a.x),y:Math.min(a.y,s.height-a.y)};return Math.sqrt(c.x**w+c.y**w)}class E extends z{constructor(i){super(i),this._setColor=n=>{if(!n.options.links)return;const s=this.linkContainer,t=n.options.links;let e=t.id===void 0?s.particles.linksColor:s.particles.linksColors.get(t.id);if(e)return;const l=t.color;e=D(l,t.blink,t.consent),t.id===void 0?s.particles.linksColor=e:s.particles.linksColors.set(t.id,e)},this.linkContainer=i}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}interact(i){if(!i.options.links)return;i.links=[];const n=i.getPosition(),s=this.container,t=s.canvas.size;if(n.x<p.x||n.y<p.y||n.x>t.width||n.y>t.height)return;const e=i.options.links,l=e.opacity,r=i.retina.linksDistance??v,a=e.warp;let c;a?c=new M(n.x,n.y,r,t):c=new y(n.x,n.y,r);const C=s.particles.quadTree.query(c);for(const o of C){const d=o.options.links;if(i===o||!(d!=null&&d.enable)||e.id!==d.id||o.spawning||o.destroyed||!o.links||i.links.some(f=>f.destination===o)||o.links.some(f=>f.destination===i))continue;const u=o.getPosition();if(u.x<p.x||u.y<p.y||u.x>t.width||u.y>t.height)continue;const x=L(n,u,r,t,a&&d.warp);if(x>r)continue;const m=(q-x/r)*l;this._setColor(i),i.links.push({destination:o,opacity:m})}}isEnabled(i){var n;return!!((n=i.options.links)!=null&&n.enable)}loadParticlesOptions(i,...n){i.links||(i.links=new b);for(const s of n)i.links.load(s==null?void 0:s.links)}reset(){}}export{E as Linker};
