const __vite__fileDeps=["assets/Slower-DCfTYkY1.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/Utils-B52he1Wb.js","assets/NumberUtils-fSLHzFkB.js","assets/TypeUtils-BOyOcFPO.js","assets/index-C8ffGILs.js","assets/index-DqWpq2-8.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-C8ffGILs.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-DCfTYkY1.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};