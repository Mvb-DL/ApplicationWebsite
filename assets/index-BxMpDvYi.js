const __vite__fileDeps=["assets/Attractor-BN5VZJ3W.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-BbEq0kam.js","assets/index-BKP5_BBO.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-BbEq0kam.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-BN5VZJ3W.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
