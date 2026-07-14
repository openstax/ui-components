import{c as f,a as u}from"./sharedCheckboxStyles.f429918a.js";import{s as t,j as s,a}from"./index.e55df2cc.js";import{u as S}from"./Tooltip.e725d540.js";const b=t.label`
  ${f}
`,h=t.input`
  ${u}
`,g=t.div`
  display: inline-block;
  position: relative;
  font-size: 1.6rem;
`,z=({children:c,disabled:e,variant:o="primary",bold:i=!1,size:r=1.6,labelProps:l,tooltipText:p,...n})=>{const{triggerRef:x,triggerProps:y,inputProps:k,tooltip:m}=S(p);return p?s(g,{children:[s(b,{ref:x,bold:i,variant:o,isDisabled:e,...y,...l,children:[a(h,{...n,type:"checkbox",...k,variant:o,checkboxSize:r,isDisabled:e,disabled:e}),c]}),m]}):s(b,{bold:i,variant:o,isDisabled:e,...l,children:[a(h,{...n,type:"checkbox",variant:o,checkboxSize:r,isDisabled:e,disabled:e}),c]})};export{z as C};
