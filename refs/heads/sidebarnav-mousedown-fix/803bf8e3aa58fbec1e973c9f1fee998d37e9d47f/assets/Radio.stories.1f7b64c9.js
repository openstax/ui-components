import{s as r,a as e,F as i,j as n}from"./index.f350c878.js";import{R as o}from"./Radio.d2b9c730.js";import"./theme.b725fa60.js";import"./palette.15e4d008.js";import"./Tooltip.58cd18c2.js";import"./OverlayArrow.module.f9c1b9d4.js";import"./focusSafely.module.11d247d0.js";import"./context.module.13429728.js";import"./Info.f03c0b97.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
