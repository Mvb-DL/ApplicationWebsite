const __vite__fileDeps=["assets/SizeUpdater-Cj3CIfne.js","assets/index-BlTp_d4S.js","assets/index-CGDM_fCz.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-BlTp_d4S.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-Cj3CIfne.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};