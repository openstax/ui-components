import{s as r,a as e,F as i,j as n}from"./index.8039bd92.js";import{R as o}from"./Radio.e8f5e7b3.js";import"./theme.b985fb88.js";import"./palette.15e4d008.js";import"./Tooltip.66f7685e.js";import"./module.f17846d4.js";import"./Info.9cb9dcd6.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),f=()=>e(i,{children:d({name:"default"})}),b=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,b as WithTooltip};
