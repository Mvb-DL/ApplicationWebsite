const __vite__fileDeps=["assets/Remover-E1kbg3WF.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/NumberUtils-fSLHzFkB.js","assets/TypeUtils-BOyOcFPO.js","assets/index-C8ffGILs.js","assets/index-DqWpq2-8.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./index-C8ffGILs.js";import{s as a}from"./NumberUtils-fSLHzFkB.js";import"./TypeUtils-BOyOcFPO.js";class c{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=a(e))}}async function m(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:o}=await r(()=>import("./Remover-E1kbg3WF.js"),__vite__mapDeps([0,1,2,3,4,5]));return new o(e)},t)}export{c as Remove,m as loadExternalRemoveInteraction};