const __vite__fileDeps=["assets/Attractor-D4n_TqjE.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-BMivTN-6.js","assets/index-D2Zd8V2T.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-BMivTN-6.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-D4n_TqjE.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};