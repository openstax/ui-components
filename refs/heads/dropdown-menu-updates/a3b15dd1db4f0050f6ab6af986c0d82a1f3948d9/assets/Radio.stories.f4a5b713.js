import{s as r,a as e,F as i,j as n}from"./index.3043e4ed.js";import{R as o}from"./Radio.3bd997e2.js";import"./theme.3da1f3f1.js";import"./palette.15e4d008.js";import"./Tooltip.5e6d61f4.js";import"./OverlayArrow.module.ba1cfd28.js";import"./context.module.413e1b5c.js";import"./Info.767b35b4.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),b=()=>e(i,{children:d({name:"default"})}),w=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default,w as WithTooltip};
