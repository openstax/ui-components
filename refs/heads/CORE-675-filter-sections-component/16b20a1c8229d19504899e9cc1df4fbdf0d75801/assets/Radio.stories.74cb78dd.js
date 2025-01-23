import{s as d,a as e,F as i,j as n}from"./index.1b9b4ac1.js";import{R as o}from"./Radio.6533eea9.js";import"./theme.aa5cf5ba.js";import"./palette.15e4d008.js";import"./Tooltip.d4f6d425.js";import"./OverlayArrow.module.9e2e5740.js";import"./context.module.bd5d5f40.js";import"./Hidden.module.c899cf57.js";import"./useButton.module.99fa2919.js";import"./Info.a5b1960d.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
