import{r as a,j as s}from"./react-vendor-CFcjCD0X.js";import{T as c}from"./Title-CVoJdGGT.js";import{P as i}from"./vendor-Byf-Bchw.js";import{u as l}from"./index-FJ8vm-Ai.js";import"./three-vendor-DfF6V1nq.js";const j=a.forwardRef((e,t)=>{var d;const{data:r}=l();return s.jsx("div",{ref:t,className:"education-sc resume-block",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"education-content dotted-border-left",children:[s.jsx(c,{titleText:r.titles.title_two}),s.jsx("div",{className:"education-list grid",children:(d=r.educationalExperiences)==null?void 0:d.map(n=>s.jsx(o,{item:n},n.id))})]})})})}),o=({item:e})=>{const t=()=>{if(e.position==="begin")return"education-item begin";if(e.position==="middle")return"education-item middle";if(e.position==="end")return"education-item end"};return s.jsxs("div",{className:t(),id:"box",style:{border:"solid 2px white",borderRadius:"15px",padding:"2%"},children:[s.jsxs("div",{className:"edu-title flex items-center",children:[s.jsx("h3",{className:"edu-course",children:e.course}),s.jsx("img",{src:e.icon,className:"edu-icon",alt:e.course})]}),s.jsxs("p",{className:"edu-info text",children:[e.institution,", ",e.startDate," - ",e.endDate||"Present","",s.jsx("br",{}),e.degree&&`(${e.degree})`]})]},e.id)};o.propTypes={item:i.shape({id:i.string.isRequired,icon:i.string.isRequired,course:i.string.isRequired,institution:i.string,startDate:i.string.isRequired,endDate:i.string,degree:i.string}).isRequired};export{j as default};
