import{s as r,a as e,F as i,j as n}from"./index.63ffee46.js";import{R as o}from"./Radio.e2953e83.js";import"./theme.be1878ae.js";import"./palette.15e4d008.js";import"./Tooltip.2f0c9f4d.js";import"./module.e9f43d36.js";import"./Info.fabe18c9.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),f=()=>e(i,{children:d({name:"default"})}),b=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,b as WithTooltip};
