import{s as d,a as e,F as i,j as n}from"./index.c12c6b71.js";import{R as o}from"./Radio.83271c92.js";import"./theme.3a9da181.js";import"./palette.15e4d008.js";import"./Tooltip.6c740132.js";import"./Button.module.5144c528.js";import"./context.module.044c4642.js";import"./useFocusRing.module.5a970fce.js";import"./OverlayArrow.module.e2a3c1b5.js";import"./Info.55357163.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
