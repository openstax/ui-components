import{s as r,a as e,F as i,j as n}from"./index.0def020e.js";import{R as o}from"./Radio.e2827978.js";import"./theme.00a415e3.js";import"./palette.15e4d008.js";import"./Tooltip.1d6f5e85.js";import"./OverlayArrow.module.23beaa47.js";import"./context.module.756113a8.js";import"./useButton.module.544ad40e.js";import"./Info.14901c4b.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
