const __vite__fileDeps=["assets/Attractor-BvQHbtqC.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/BackgroundEffect-DCHiqXNv.js","assets/index-DzlpJNBj.js","assets/react-vendor-C9MIrxUJ.js","assets/index-DaWaz3S7.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-DzlpJNBj.js";import"./react-vendor-C9MIrxUJ.js";async function n(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-BvQHbtqC.js"),__vite__mapDeps([0,1,2,3,4,5]));return new o(a)},r)}export{n as loadParticlesAttractInteraction};
