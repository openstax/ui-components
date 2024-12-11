import{s as d,a as e,F as i,j as n}from"./index.34b63593.js";import{R as o}from"./Radio.a08c4bb4.js";import"./theme.59a636b2.js";import"./palette.15e4d008.js";import"./Tooltip.089662d3.js";import"./Button.module.d9227393.js";import"./context.module.37646704.js";import"./focusSafely.module.efb1ea5c.js";import"./useFocusRing.module.aa8fcde2.js";import"./OverlayArrow.module.13e21131.js";import"./Info.fdd8de28.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
