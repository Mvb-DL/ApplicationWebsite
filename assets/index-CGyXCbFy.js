const __vite__fileDeps=["assets/Attractor-DJgkHU54.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-BflH9rbh.js","assets/index-DrB3BuJP.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-BflH9rbh.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DJgkHU54.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
