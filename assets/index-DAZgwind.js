const __vite__fileDeps=["assets/OpacityUpdater-B3IS4CuK.js","assets/index-BMivTN-6.js","assets/index-D2Zd8V2T.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BMivTN-6.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-B3IS4CuK.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};