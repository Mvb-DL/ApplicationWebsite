import{v as u}from"./index-C5yg28qj.js";import{j as g,t as h,e as D,i as v}from"./Utils-B52he1Wb.js";import{d as j}from"./NumberUtils-fSLHzFkB.js";import"./index-BtcOUWqf.js";import"./TypeUtils-BOyOcFPO.js";function y(d){const{context:o,particle:e,radius:n,opacity:a}=d,t=e.emojiData,l=2,m=n*l,c=o.globalAlpha;t&&(o.globalAlpha=a,o.drawImage(t,-n,-n,m,m),o.globalAlpha=c)}const x='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class C{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[o,e]of this._emojiShapeDict)e instanceof ImageBitmap&&(e==null||e.close(),this._emojiShapeDict.delete(o))}draw(o){y(o)}async init(o){const e=o.actualOptions;if(!u.find(t=>g(t,e.particles.shape.type)))return;const n=[h(x)],a=u.map(t=>e.particles.shape.options[t]).find(t=>!!t);a&&D(a,t=>{t.font&&n.push(h(t.font))}),await Promise.all(n)}particleDestroy(o){delete o.emojiData}particleInit(o,e){const a=e.shapeData;if(!(a!=null&&a.value))return;const t=v(a.value,e.randomIndexData),l=a.font??x;if(!t)return;const m=`${t}_${l}`,c=this._emojiShapeDict.get(m);if(c){e.emojiData=c;return}const p=j(e.size.value)*2;let f;const r=j(e.size.value);if(typeof OffscreenCanvas<"u"){const s=new OffscreenCanvas(p,p),i=s.getContext("2d");if(!i)return;i.font=`400 ${r*2}px ${l}`,i.textBaseline="middle",i.textAlign="center",i.fillText(t,r,r),f=s.transferToImageBitmap()}else{const s=document.createElement("canvas");s.width=p,s.height=p;const i=s.getContext("2d");if(!i)return;i.font=`400 ${r*2}px ${l}`,i.textBaseline="middle",i.textAlign="center",i.fillText(t,r,r),f=s}this._emojiShapeDict.set(m,f),e.emojiData=f}}export{C as EmojiDrawer};