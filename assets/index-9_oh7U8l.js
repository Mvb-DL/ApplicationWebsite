const __vite__fileDeps=["assets/PolygonDrawer-B8BvqobS.js","assets/PolygonDrawerBase-C_kMljb8.js","assets/index-Y3F_LogL.js","assets/index-CVYWMJna.css","assets/TriangleDrawer-DPNbzql2.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-Y3F_LogL.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-B8BvqobS.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-DPNbzql2.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
