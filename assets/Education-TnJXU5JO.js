import{u as o,j as s,P as i}from"./index-DzlpJNBj.js";import{r as c}from"./react-vendor-C9MIrxUJ.js";import{T as l}from"./Title-BqvOz5iO.js";const g=c.forwardRef((e,t)=>{var d;const{data:r}=o();return s.jsx("div",{ref:t,className:"education-sc resume-block",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"education-content dotted-border-left",children:[s.jsx(l,{titleText:r.titles.title_two}),s.jsx("div",{className:"education-list grid",children:(d=r.educationalExperiences)==null?void 0:d.map(n=>s.jsx(a,{item:n},n.id))})]})})})}),a=({item:e})=>{const t=()=>{if(e.position==="begin")return"education-item begin";if(e.position==="middle")return"education-item middle";if(e.position==="end")return"education-item end"};return s.jsxs("div",{className:t(),id:"box",style:{border:"solid 2px white",borderRadius:"15px",padding:"2%"},children:[s.jsxs("div",{className:"edu-title flex items-center",children:[s.jsx("h3",{className:"edu-course",children:e.course}),s.jsx("img",{src:e.icon,className:"edu-icon",alt:e.course})]}),s.jsxs("p",{className:"edu-info text",children:[e.institution,", ",e.startDate," - ",e.endDate||"Present","",s.jsx("br",{}),e.degree&&`(${e.degree})`]})]},e.id)};a.propTypes={item:i.shape({id:i.string.isRequired,icon:i.string.isRequired,course:i.string.isRequired,institution:i.string,startDate:i.string.isRequired,endDate:i.string,degree:i.string}).isRequired};export{g as default};
