const __vite__fileDeps=["assets/Attractor-DzFS-Kek.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-Y3F_LogL.js","assets/index-CVYWMJna.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-Y3F_LogL.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-DzFS-Kek.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
