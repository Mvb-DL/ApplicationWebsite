const __vite__fileDeps=["assets/ParallaxMover-BA3YjaPM.js","assets/index-C1H52BjH.js","assets/index-CVYWMJna.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-C1H52BjH.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-BA3YjaPM.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};