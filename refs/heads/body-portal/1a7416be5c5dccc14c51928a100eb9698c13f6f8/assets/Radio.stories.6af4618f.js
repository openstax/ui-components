import{s as r,a as e,F as i,j as n}from"./index.0ccb697b.js";import{R as o}from"./Radio.a4c8086f.js";import"./theme.3894496a.js";import"./palette.15e4d008.js";import"./Tooltip.3508a8a4.js";import"./module.2592d8cf.js";import"./Info.24cc1168.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),f=()=>e(i,{children:d({name:"default"})}),b=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,b as WithTooltip};
