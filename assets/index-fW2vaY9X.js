const __vite__fileDeps=["assets/LifeUpdater-Cg1BFD6V.js","assets/ValueWithRandom-C1JOAsy4.js","assets/index-C1H52BjH.js","assets/index-CVYWMJna.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-C1H52BjH.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Cg1BFD6V.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
