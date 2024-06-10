import{s as r,a as e,F as i,j as n}from"./index.797e391e.js";import{R as o}from"./Radio.31e346f1.js";import"./theme.47ec46e0.js";import"./palette.15e4d008.js";import"./Tooltip.c4f60d0f.js";import"./module.494d0d7a.js";import"./Info.b1a239e0.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),f=()=>e(i,{children:d({name:"default"})}),b=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,b as WithTooltip};
