const __vite__fileDeps=["assets/Grabber-DzDy0r0S.js","assets/CanvasUtils-CK-y67v4.js","assets/BackgroundEffect-BsdbFE56.js","assets/index-Bk9Mi_33.js","assets/index-DqWpq2-8.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-6vAJBcDt.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-Bk9Mi_33.js";import{O as s}from"./OptionsColor-6vAJBcDt.js";import"./BackgroundEffect-BsdbFE56.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class a{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function u(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-DzDy0r0S.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new t(o)},i)}export{a as Grab,r as GrabLinks,u as loadExternalGrabInteraction};
