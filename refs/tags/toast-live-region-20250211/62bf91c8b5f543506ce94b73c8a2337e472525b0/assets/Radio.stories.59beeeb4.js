import{s as d,a as e,F as i,j as n}from"./index.b1193cf1.js";import{R as o}from"./Radio.a61c0668.js";import"./theme.89304e3c.js";import"./palette.15e4d008.js";import"./Tooltip.1d153611.js";import"./OverlayArrow.module.001f6f05.js";import"./context.module.122447a6.js";import"./Hidden.module.10a47570.js";import"./useButton.module.c025c117.js";import"./Info.e4d6b9f3.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
