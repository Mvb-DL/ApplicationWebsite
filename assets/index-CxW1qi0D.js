const __vite__fileDeps=["assets/LifeUpdater-BRUqDYNC.js","assets/ValueWithRandom-CaDPcEra.js","assets/index-BMivTN-6.js","assets/index-D2Zd8V2T.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BMivTN-6.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BRUqDYNC.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};