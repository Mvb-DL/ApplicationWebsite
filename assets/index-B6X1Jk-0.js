const __vite__fileDeps=["assets/interaction-Cv4QLKql.js","assets/index-ByAddleP.js","assets/index-DqWpq2-8.css","assets/plugin-BIA7f6uZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as s}from"./index-ByAddleP.js";import{O as n}from"./OptionsColor-BU8TyMFV.js";import"./TypeUtils-BOyOcFPO.js";class t{constructor(){this.blur=5,this.color=new n,this.color.value="#000",this.enable=!1}load(i){i&&(i.blur!==void 0&&(this.blur=i.blur),this.color=n.create(this.color,i.color),i.enable!==void 0&&(this.enable=i.enable))}}class l{constructor(){this.enable=!1,this.frequency=1}load(i){i&&(i.color!==void 0&&(this.color=n.create(this.color,i.color)),i.enable!==void 0&&(this.enable=i.enable),i.frequency!==void 0&&(this.frequency=i.frequency),i.opacity!==void 0&&(this.opacity=i.opacity))}}class u{constructor(){this.blink=!1,this.color=new n,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new t,this.triangles=new l,this.width=1,this.warp=!1}load(i){i&&(i.id!==void 0&&(this.id=i.id),i.blink!==void 0&&(this.blink=i.blink),this.color=n.create(this.color,i.color),i.consent!==void 0&&(this.consent=i.consent),i.distance!==void 0&&(this.distance=i.distance),i.enable!==void 0&&(this.enable=i.enable),i.frequency!==void 0&&(this.frequency=i.frequency),i.opacity!==void 0&&(this.opacity=i.opacity),this.shadow.load(i.shadow),this.triangles.load(i.triangles),i.width!==void 0&&(this.width=i.width),i.warp!==void 0&&(this.warp=i.warp))}}async function d(e,i=!0){const{loadLinksInteraction:o}=await s(()=>import("./interaction-Cv4QLKql.js"),__vite__mapDeps([0,1,2])),{loadLinksPlugin:r}=await s(()=>import("./plugin-BIA7f6uZ.js"),__vite__mapDeps([3,1,2]));await o(e,i),await r(e,i)}export{u as Links,t as LinksShadow,l as LinksTriangle,d as loadParticlesLinksInteraction};
