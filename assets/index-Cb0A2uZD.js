const __vite__fileDeps=["assets/ParallaxMover-BIjwM-XH.js","assets/BackgroundEffect-7r5zXCCU.js","assets/index-DuIESn84.js","assets/index-DaWaz3S7.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-DuIESn84.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-BIjwM-XH.js"),__vite__mapDeps([0,1,2,3]));return new o},r)}export{l as loadParallaxMover};
