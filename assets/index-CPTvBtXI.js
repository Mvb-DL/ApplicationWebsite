const __vite__fileDeps=["assets/ParallaxMover-BTCrXP8a.js","assets/index-BAwhuyHf.js","assets/index-GXIN5EEy.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-BAwhuyHf.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-BTCrXP8a.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
