const __vite__fileDeps=["assets/SizeUpdater-CFD5Tbzo.js","assets/BackgroundEffect-BEyeqcNa.js","assets/index-gPoPG7Lh.js","assets/index-DqWpq2-8.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-gPoPG7Lh.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CFD5Tbzo.js"),__vite__mapDeps([0,1,2,3]));return new e},a)}export{o as loadSizeUpdater};
