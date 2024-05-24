import{s as n,a as e,F as i,j as r}from"./index.37c2728e.js";import{R as o}from"./Radio.4d0a0c37.js";import"./theme.47e7b6ab.js";import"./palette.15e4d008.js";import"./Tooltip.d9d3186a.js";import"./module.71b67aa4.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>r(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),p=()=>e(i,{children:d({name:"default"})}),f=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as Default,f as WithTooltip};
