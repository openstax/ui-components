import{c as u,a as f}from"./sharedCheckboxStyles.6dbfd3f8.js";import{s as t,a as s,j as a}from"./index.dc15c21a.js";import{u as S}from"./Tooltip.43c83908.js";const b=t.label`
  ${u}
`,h=t.input`
  ${f}
`,g=t.div`
  display: inline-block;
  position: relative;
`,C=({children:c,disabled:e,variant:o="primary",bold:i=!1,size:l=1.6,labelProps:r,tooltipText:p,...n})=>{const{triggerRef:x,triggerProps:y,openTooltip:k,tooltip:m}=S(p);return p?s(g,{children:a(b,{ref:x,bold:i,variant:o,isDisabled:e,...y,...r,children:[s(h,{...n,type:"checkbox",onFocus:k,variant:o,checkboxSize:l,isDisabled:e,disabled:e}),c,m]})}):a(b,{bold:i,variant:o,isDisabled:e,...r,children:[s(h,{...n,type:"checkbox",variant:o,checkboxSize:l,isDisabled:e,disabled:e}),c]})};export{C};
