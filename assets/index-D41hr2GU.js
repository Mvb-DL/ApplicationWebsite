const __vite__fileDeps=["assets/OutOfCanvasUpdater-Bcs7_u4N.js","assets/index-C3vo0IuU.js","assets/index-GXIN5EEy.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-C3vo0IuU.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-Bcs7_u4N.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
