const __vite__fileDeps=["assets/OpacityUpdater-B-jnuWSh.js","assets/index-BlTp_d4S.js","assets/index-CGDM_fCz.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BlTp_d4S.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-B-jnuWSh.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};