const __vite__fileDeps=["assets/LifeUpdater-gf4EXSab.js","assets/ValueWithRandom-wtDSijyg.js","assets/index-Wwl8T3Su.js","assets/index-D2Zd8V2T.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-Wwl8T3Su.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-gf4EXSab.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
