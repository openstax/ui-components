import{s as n,a as e,F as i,j as r}from"./index.2656daaa.js";import{R as o}from"./Radio.0998d988.js";import"./theme.063d0398.js";import"./palette.15e4d008.js";import"./Tooltip.d3d16ac8.js";import"./module.f4fd91d8.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>r(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),p=()=>e(i,{children:d({name:"default"})}),f=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as Default,f as WithTooltip};
