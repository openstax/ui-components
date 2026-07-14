import{c as f,a as u}from"./sharedCheckboxStyles.a0c2d325.js";import{s as t,j as s,a}from"./index.4e69b304.js";import{u as S}from"./Tooltip.15ace4ed.js";const b=t.label`
  ${f}
`,h=t.input`
  ${u}
`,D=t.div`
  display: inline-block;
  position: relative;
  font-size: 1.6rem;
`,z=({children:c,disabled:e,variant:o="primary",bold:i=!1,size:r=1.6,labelProps:l,tooltipText:p,...n})=>{const{triggerRef:x,triggerProps:y,labelDescription:k,tooltip:m}=S(p);return p?s(D,{children:[s(b,{ref:x,bold:i,variant:o,isDisabled:e,...l,...y,children:[a(h,{...n,type:"checkbox",variant:o,checkboxSize:r,isDisabled:e,disabled:e}),c,k]}),m]}):s(b,{bold:i,variant:o,isDisabled:e,...l,children:[a(h,{...n,type:"checkbox",variant:o,checkboxSize:r,isDisabled:e,disabled:e}),c]})};export{z as C};
