const __vite__fileDeps=["assets/PolygonDrawer-BNC5m0hf.js","assets/PolygonDrawerBase-DaEzi61e.js","assets/index-ix8b0gpF.js","assets/index-S4i7RY7d.css","assets/TriangleDrawer-DJdIrq12.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-ix8b0gpF.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-BNC5m0hf.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-DJdIrq12.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
