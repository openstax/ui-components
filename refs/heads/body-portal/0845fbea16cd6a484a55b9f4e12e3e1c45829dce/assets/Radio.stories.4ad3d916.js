import{s as r,a as e,F as i,j as n}from"./index.12ab52f0.js";import{R as o}from"./Radio.b8d9d99d.js";import"./theme.9efe0972.js";import"./palette.15e4d008.js";import"./Tooltip.c28dc610.js";import"./module.5e80496e.js";import"./Info.5070b5af.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),f=()=>e(i,{children:d({name:"default"})}),b=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,b as WithTooltip};
