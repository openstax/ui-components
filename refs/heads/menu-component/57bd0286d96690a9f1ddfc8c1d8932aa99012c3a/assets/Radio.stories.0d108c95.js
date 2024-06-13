import{s as r,a as e,F as i,j as n}from"./index.b5a386a9.js";import{R as o}from"./Radio.fb050d2b.js";import"./theme.0ea1d579.js";import"./palette.15e4d008.js";import"./Tooltip.d96620c2.js";import"./module.a3bd3840.js";import"./Info.c62aef26.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),f=()=>e(i,{children:d({name:"default"})}),b=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,b as WithTooltip};
