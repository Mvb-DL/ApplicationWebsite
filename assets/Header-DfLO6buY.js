import{R as x,j as e,r as i,e as b,h as f,i as C,k as N,l as M}from"./react-vendor-CFcjCD0X.js";import{u as k}from"./index-FJ8vm-Ai.js";import"./vendor-Byf-Bchw.js";import"./three-vendor-DfF6V1nq.js";const y="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16'%20cy='16'%20r='16'%20fill='%230A66C2'/%3e%3cpath%20d='M24.665%2023.3334H21.3522V18.1363C21.3522%2016.897%2021.3301%2015.3017%2019.6293%2015.3017C17.9038%2015.3017%2017.6398%2016.6519%2017.6398%2018.0461V23.333H14.3271V12.6458H17.5073V14.1063H17.5519C18.1994%2012.9972%2019.4079%2012.3323%2020.6897%2012.38C24.0473%2012.38%2024.6664%2014.5924%2024.6664%2017.4706L24.665%2023.3334Z'%20fill='white'/%3e%3cpath%20d='M10.5894%2011.1849C10.5892%2011.1849%2010.5891%2011.1849%2010.589%2011.1849C9.53433%2011.1849%208.6665%2010.3156%208.6665%209.25916C8.6665%208.20269%209.53433%207.33334%2010.589%207.33334C11.6435%207.33334%2012.5112%208.20249%2012.5114%209.25876C12.5114%209.25886%2012.5114%209.25896%2012.5114%209.25916C12.5114%2010.3154%2011.6438%2011.1848%2010.5894%2011.1849Z'%20fill='white'/%3e%3cpath%20d='M12.2459%2023.3333H8.92969V12.6458H12.2459V23.3333Z'%20fill='white'/%3e%3c/svg%3e",L="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='38px'%20height='38px'%3e%3cpath%20d='M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39%20c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2%20c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975%20c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714%20c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999%20c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6%20c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5%20c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999%20c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689%20c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33%20c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25%20C2,35.164,8.63,43.804,17.791,46.836z'/%3e%3c/svg%3e";class E extends x.Component{constructor(n){super(n),this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0}}render(){return this.state.hasError?e.jsx("div",{children:"Leider kannst du mit deinem Browser keine 3D Modelle laden, daher ist die Experience auf dieser Seite low :/"}):this.props.children}}const R=i.memo(E),z=i.memo(x.forwardRef((r,n)=>{const{camera:o}=b(),{scene:s}=f("./head2.glb","/draco-gltf/");s.scale.set(2.4,2.2,2.2),s.position.set(.6,2.315,.9),o.position.set(.6,2.75,1.6),s.rotation.x=.1;const t=i.useRef(),c=i.useCallback(a=>{const{clientX:u,clientY:p}=a,{innerWidth:v,innerHeight:j}=window,g=u/v*2-1,w=-(p/j)*2+1,m=Math.PI/4;let d=g*Math.PI;d=Math.max(-m,Math.min(m,d)),t.current.rotation.y+=(d-t.current.rotation.y)*.3;const h=Math.PI/8;let l=w*Math.PI;l=Math.max(-h,Math.min(h,l)),t.current.rotation.x+=(l+t.current.rotation.x)*-.007,t.current.rotation.z+=(l+t.current.rotation.z)*-.001},[]);return i.useEffect(()=>(window.addEventListener("mousemove",c),()=>{window.removeEventListener("mousemove",c)}),[c]),e.jsx("primitive",{object:s,ref:t})})),G=()=>{const[r,n]=i.useState({x:0,y:0}),o=i.useCallback(a=>{n({x:a.clientX,y:a.clientY})},[]),s={x:.5,y:2.2,z:.9},t={x:-.05,y:.75,z:.4};return i.useCallback(()=>{try{const a=document.createElement("canvas");return!!window.WebGLRenderingContext&&!!(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch{return!1}},[])()?e.jsx("div",{className:"resume-block model-container-sc",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"canva_first",children:e.jsxs(C,{onMouseMove:o,children:[e.jsx("pointLight",{position:[s.x+t.x,s.y+t.y,s.z+t.z],intensity:.6}),e.jsx(R,{children:e.jsx(z,{mouse:r})})]})})})}):e.jsx("div",{children:"Es scheint, dass du mit deinem Browser leider keine 3D Modelle laden kannst :/"})},V=i.memo(G),W=()=>{var s;const{data:r}=k(),n="+49 1577 3633756",o=t=>{navigator.clipboard.writeText(t).then(()=>{}).catch(c=>{console.error("Unable to copy text to clipboard:",c)})};return e.jsx("header",{className:"header",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"header-content grid items-center",children:[e.jsxs("div",{className:"header-intro",children:[e.jsx("div",{className:"flex items-end header-intro-wrapper",children:e.jsxs("h1",{className:"header-name",children:["Mario von Bassen ",e.jsx("br",{}),"Who says IT rules out creativity?"]})}),e.jsx("p",{className:"header-text text-white",children:(s=r.headerText)==null?void 0:s.map(t=>t.header_text)}),e.jsx("br",{}),e.jsxs("ul",{className:"contact-info-list grid text-white",children:[e.jsxs("li",{className:"grid items-start info-item",children:[e.jsx("span",{className:"info-item-icon",children:e.jsx(N,{size:13})}),e.jsx("p",{className:"info-item-text",children:e.jsx("span",{className:"text",children:e.jsx("a",{href:"mailto:mariovonbassen@gmail.com",children:"mariovonbassen@gmail.com"})})})]}),e.jsxs("li",{className:"grid items-start info-item",children:[e.jsx("span",{className:"info-item-icon",children:e.jsx(M,{size:13})}),e.jsx("p",{className:"info-item-text",children:e.jsx("span",{className:"text",onClick:()=>o(n),children:"+49 1577 3633756"})})]})]}),e.jsxs("ul",{className:"contact-social-list flex items-center",children:[e.jsx("li",{className:"social-item",children:e.jsxs("a",{href:"https://www.linkedin.com/in/mario-von-bassen-3797831ba/",target:"_blank",children:[e.jsx("img",{src:y,alt:"LinkedIn Icon"}),e.jsx("span",{className:"tooltip text",children:"Linkedin"})]})}),e.jsx("li",{className:"social-item",children:e.jsxs("a",{href:"https://github.com/Mvb-DL",target:"_blank",children:[e.jsx("img",{src:L,alt:"GitHub Icon"}),e.jsx("span",{className:"tooltip text",children:"Github"})]})}),e.jsx("li",{className:"social-item",children:e.jsx("a",{className:"website-code",target:"_blank",href:"https://github.com/Mvb-DL/ApplicationWebsite/tree/main",children:"Website-Code"})})]})]}),e.jsx("div",{className:"header-contact",children:e.jsx(V,{})})]})})})};export{W as default};