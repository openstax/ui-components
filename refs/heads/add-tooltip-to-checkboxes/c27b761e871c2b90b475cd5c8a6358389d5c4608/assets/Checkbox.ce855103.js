import{s as t,R as k,a as c,j as h}from"./index.005ed882.js";import{c as u,a as f}from"./sharedCheckboxStyles.a055ce2c.js";import{$ as S,a as d,C}from"./Tooltip.ebca4810.js";const x=t.label`
  ${u}
`,y=t.input`
  ${f}
`,D=t.div`
  display: inline-block;
  position: relative;
`,R=({children:a,disabled:e,variant:s="primary",bold:i=!1,size:l=1.6,labelProps:p,tooltipText:r,...n})=>{const o=S({delay:0}),b=k.useRef(null),{triggerProps:m,tooltipProps:$}=d({delay:0},o,b);return r?c(D,{children:h(x,{ref:b,bold:i,variant:s,isDisabled:e,...m,...p,children:[c(y,{...n,type:"checkbox",onFocus:()=>o.open(),variant:s,checkboxSize:l,isDisabled:e,disabled:e}),a,o.isOpen&&c(C,{state:o,...$,placement:"right",children:r})]})}):h(x,{bold:i,variant:s,isDisabled:e,...p,children:[c(y,{...n,type:"checkbox",variant:s,checkboxSize:l,isDisabled:e,disabled:e}),a]})};export{R as C};
