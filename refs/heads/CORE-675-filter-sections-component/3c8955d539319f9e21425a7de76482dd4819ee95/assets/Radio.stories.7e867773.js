import{s as d,a as e,F as i,j as n}from"./index.6311e692.js";import{R as o}from"./Radio.1b573e4d.js";import"./theme.eb75eac4.js";import"./palette.15e4d008.js";import"./Tooltip.8a2ebbb6.js";import"./OverlayArrow.module.d46f9749.js";import"./context.module.e7c01591.js";import"./Hidden.module.8f8e3ef0.js";import"./useButton.module.5ef4911e.js";import"./Info.acaaa249.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
