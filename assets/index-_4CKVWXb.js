const __vite__fileDeps=["assets/ColorUpdater-CuMdlMB2.js","assets/index-C1H52BjH.js","assets/index-CVYWMJna.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-C1H52BjH.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-CuMdlMB2.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
