import{H as P,a0 as R,W as M,ae as O,O as c,J as g,I as b}from"./BackgroundEffect-BEyeqcNa.js";import"./index-gPoPG7Lh.js";const C=0,v=0;function S(i){if(i.outMode!=="bounce"&&i.outMode!=="split"||i.direction!=="left"&&i.direction!=="right")return;i.bounds.right<v&&i.direction==="left"?i.particle.position.x=i.size+i.offset.x:i.bounds.left>i.canvasSize.width&&i.direction==="right"&&(i.particle.position.x=i.canvasSize.width-i.size-i.offset.x);const o=i.particle.velocity.x;let s=!1;if(i.direction==="right"&&i.bounds.right>=i.canvasSize.width&&o>C||i.direction==="left"&&i.bounds.left<=v&&o<C){const h=P(i.particle.options.bounce.horizontal.value);i.particle.velocity.x*=-h,s=!0}if(!s)return;const u=i.offset.x+i.size;i.bounds.right>=i.canvasSize.width&&i.direction==="right"?i.particle.position.x=i.canvasSize.width-u:i.bounds.left<=v&&i.direction==="left"&&(i.particle.position.x=u),i.outMode==="split"&&i.particle.destroy()}function V(i){if(i.outMode!=="bounce"&&i.outMode!=="split"||i.direction!=="bottom"&&i.direction!=="top")return;i.bounds.bottom<v&&i.direction==="top"?i.particle.position.y=i.size+i.offset.y:i.bounds.top>i.canvasSize.height&&i.direction==="bottom"&&(i.particle.position.y=i.canvasSize.height-i.size-i.offset.y);const o=i.particle.velocity.y;let s=!1;if(i.direction==="bottom"&&i.bounds.bottom>=i.canvasSize.height&&o>C||i.direction==="top"&&i.bounds.top<=v&&o<C){const h=P(i.particle.options.bounce.vertical.value);i.particle.velocity.y*=-h,s=!0}if(!s)return;const u=i.offset.y+i.size;i.bounds.bottom>=i.canvasSize.height&&i.direction==="bottom"?i.particle.position.y=i.canvasSize.height-u:i.bounds.top<=v&&i.direction==="top"&&(i.particle.position.y=u),i.outMode==="split"&&i.particle.destroy()}class k{constructor(o){this.container=o,this.modes=["bounce","split"]}update(o,s,u,h){if(!this.modes.includes(h))return;const f=this.container;let n=!1;for(const[,d]of f.plugins)if(d.particleBounce!==void 0&&(n=d.particleBounce(o,u,s)),n)break;if(n)return;const t=o.getPosition(),e=o.offset,r=o.getRadius(),y=R(t,r),m=f.canvas.size;S({particle:o,outMode:h,direction:s,bounds:y,canvasSize:m,offset:e,size:r}),V({particle:o,outMode:h,direction:s,bounds:y,canvasSize:m,offset:e,size:r})}}const x=0;class _{constructor(o){this.container=o,this.modes=["destroy"]}update(o,s,u,h){if(!this.modes.includes(h))return;const f=this.container;switch(o.outType){case"normal":case"outside":if(O(o.position,f.canvas.size,c.origin,o.getRadius(),s))return;break;case"inside":{const{dx:n,dy:t}=M(o.position,o.moveCenter),{x:e,y:r}=o.velocity;if(e<x&&n>o.moveCenter.radius||r<x&&t>o.moveCenter.radius||e>=x&&n<-o.moveCenter.radius||r>=x&&t<-o.moveCenter.radius)return;break}}f.particles.remove(o,void 0,!0)}}const z=0;class B{constructor(o){this.container=o,this.modes=["none"]}update(o,s,u,h){if(!this.modes.includes(h)||((o.options.move.distance.horizontal&&(s==="left"||s==="right"))??(o.options.move.distance.vertical&&(s==="top"||s==="bottom"))))return;const f=o.options.move.gravity,n=this.container,t=n.canvas.size,e=o.getRadius();if(f.enable){const r=o.position;(!f.inverse&&r.y>t.height+e&&s==="bottom"||f.inverse&&r.y<-e&&s==="top")&&n.particles.remove(o)}else{if(o.velocity.y>z&&o.position.y<=t.height+e||o.velocity.y<z&&o.position.y>=-e||o.velocity.x>z&&o.position.x<=t.width+e||o.velocity.x<z&&o.position.x>=-e)return;O(o.position,n.canvas.size,c.origin,e,s)||n.particles.remove(o)}}}const p=0,l=0;class D{constructor(o){this.container=o,this.modes=["out"]}update(o,s,u,h){if(!this.modes.includes(h))return;const f=this.container;switch(o.outType){case"inside":{const{x:n,y:t}=o.velocity,e=c.origin;e.length=o.moveCenter.radius,e.angle=o.velocity.angle+Math.PI,e.addTo(c.create(o.moveCenter));const{dx:r,dy:y}=M(o.position,e);if(n<=p&&r>=l||t<=p&&y>=l||n>=p&&r<=l||t>=p&&y<=l)return;o.position.x=Math.floor(b({min:0,max:f.canvas.size.width})),o.position.y=Math.floor(b({min:0,max:f.canvas.size.height}));const{dx:m,dy:d}=M(o.position,o.moveCenter);o.direction=Math.atan2(-d,-m),o.velocity.angle=o.direction;break}default:{if(O(o.position,f.canvas.size,c.origin,o.getRadius(),s))return;switch(o.outType){case"outside":{o.position.x=Math.floor(b({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.x,o.position.y=Math.floor(b({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.y;const{dx:n,dy:t}=M(o.position,o.moveCenter);o.moveCenter.radius&&(o.direction=Math.atan2(t,n),o.velocity.angle=o.direction);break}case"normal":{const n=o.options.move.warp,t=f.canvas.size,e={bottom:t.height+o.getRadius()+o.offset.y,left:-o.getRadius()-o.offset.x,right:t.width+o.getRadius()+o.offset.x,top:-o.getRadius()-o.offset.y},r=o.getRadius(),y=R(o.position,r);s==="right"&&y.left>t.width+o.offset.x?(o.position.x=e.left,o.initialPosition.x=o.position.x,n||(o.position.y=g()*t.height,o.initialPosition.y=o.position.y)):s==="left"&&y.right<-o.offset.x&&(o.position.x=e.right,o.initialPosition.x=o.position.x,n||(o.position.y=g()*t.height,o.initialPosition.y=o.position.y)),s==="bottom"&&y.top>t.height+o.offset.y?(n||(o.position.x=g()*t.width,o.initialPosition.x=o.position.x),o.position.y=e.top,o.initialPosition.y=o.position.y):s==="top"&&y.bottom<-o.offset.y&&(n||(o.position.x=g()*t.width,o.initialPosition.x=o.position.x),o.position.y=e.bottom,o.initialPosition.y=o.position.y);break}}break}}}}const w=(i,o)=>i.default===o||i.bottom===o||i.left===o||i.right===o||i.top===o;class ${constructor(o){this._updateOutMode=(s,u,h,f)=>{for(const n of this.updaters)n.update(s,f,u,h)},this.container=o,this.updaters=[]}init(o){this.updaters=[];const s=o.options.move.outModes;w(s,"bounce")?this.updaters.push(new k(this.container)):w(s,"out")?this.updaters.push(new D(this.container)):w(s,"destroy")?this.updaters.push(new _(this.container)):w(s,"none")&&this.updaters.push(new B(this.container))}isEnabled(o){return!o.destroyed&&!o.spawning}update(o,s){const u=o.options.move.outModes;this._updateOutMode(o,s,u.bottom??u.default,"bottom"),this._updateOutMode(o,s,u.left??u.default,"left"),this._updateOutMode(o,s,u.right??u.default,"right"),this._updateOutMode(o,s,u.top??u.default,"top")}}export{$ as OutOfCanvasUpdater};
