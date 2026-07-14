import{c as k,a as u}from"./sharedCheckboxStyles.d2b3a694.js";import{s as t,j as s,a as b}from"./index.2acaa006.js";import{u as S}from"./Tooltip.d5b17e2c.js";import{c as D}from"./useFocusRing.module.6c3036f9.js";const n=t.label`
  ${k}
`,f=t.input`
  ${u}
`,$=t.div`
  display: inline-block;
  position: relative;
  font-size: 1.6rem;
`,z=({children:c,disabled:e,variant:o="primary",bold:i=!1,size:r=1.6,labelProps:l,tooltipText:p,...a})=>{const{triggerRef:h,triggerProps:m,labelDescription:x,tooltip:y}=S(p);return p?s($,{children:[s(n,{ref:h,bold:i,variant:o,isDisabled:e,...D(m,l),children:[b(f,{...a,type:"checkbox",variant:o,checkboxSize:r,isDisabled:e,disabled:e}),c,x]}),y]}):s(n,{bold:i,variant:o,isDisabled:e,...l,children:[b(f,{...a,type:"checkbox",variant:o,checkboxSize:r,isDisabled:e,disabled:e}),c]})};export{z as C};
