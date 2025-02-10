import{s as d,a as e,F as i,j as n}from"./index.8ff9e0cf.js";import{R as o}from"./Radio.171e2155.js";import"./theme.5b6f0461.js";import"./palette.15e4d008.js";import"./Tooltip.cd944473.js";import"./OverlayArrow.module.42ebf838.js";import"./context.module.aefde34a.js";import"./Hidden.module.85837774.js";import"./useButton.module.accd8fd1.js";import"./Info.b0c320da.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
