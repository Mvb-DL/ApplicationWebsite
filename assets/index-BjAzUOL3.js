const __vite__fileDeps=["assets/ColorUpdater-BWsMwGVc.js","assets/index-1tFRC0uM.js","assets/index-D2Zd8V2T.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-1tFRC0uM.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-BWsMwGVc.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
