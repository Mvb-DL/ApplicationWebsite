const __vite__fileDeps=["assets/CircleDrawer-CkPxPPWb.js","assets/BackgroundEffect-BEyeqcNa.js","assets/index-gPoPG7Lh.js","assets/index-DqWpq2-8.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-gPoPG7Lh.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-CkPxPPWb.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};