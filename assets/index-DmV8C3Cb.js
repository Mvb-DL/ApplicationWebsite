const __vite__fileDeps=["assets/LifeUpdater-7tiNXTlE.js","assets/ValueWithRandom-DTnwBmf9.js","assets/index-DrpaQ4TG.js","assets/index-CVYWMJna.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-DrpaQ4TG.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-7tiNXTlE.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
