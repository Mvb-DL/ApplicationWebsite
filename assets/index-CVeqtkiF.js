const __vite__fileDeps=["assets/PolygonDrawer-BFUq4e79.js","assets/PolygonDrawerBase-BywxslXO.js","assets/BackgroundEffect-BEyeqcNa.js","assets/index-gPoPG7Lh.js","assets/index-DqWpq2-8.css","assets/TriangleDrawer-Bjpp9cF6.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-gPoPG7Lh.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-BFUq4e79.js"),__vite__mapDeps([0,1,2,3,4]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-Bjpp9cF6.js"),__vite__mapDeps([5,1,2,3,4]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};