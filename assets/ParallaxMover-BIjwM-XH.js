import{T as x}from"./BackgroundEffect-7r5zXCCU.js";import"./index-DuIESn84.js";const v=.5;class h{init(){}isEnabled(a){return!x()&&!a.destroyed&&a.container.actualOptions.interactivity.events.onHover.parallax.enable}move(a){const e=a.container,y=e.actualOptions,o=y.interactivity.events.onHover.parallax;if(x()||!o.enable)return;const p=o.force,n=e.interactivity.mouse.position;if(!n)return;const i=e.canvas.size,r={x:i.width*v,y:i.height*v},s=o.smooth,c=a.getRadius()/p,l={x:(n.x-r.x)*c,y:(n.y-r.y)*c},{offset:t}=a;t.x+=(l.x-t.x)/s,t.y+=(l.y-t.y)/s}}export{h as ParallaxMover};
