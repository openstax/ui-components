import{s as d,a as e,F as i,j as n}from"./index.8ee6cded.js";import{R as o}from"./Radio.526e78e7.js";import"./theme.13410593.js";import"./palette.15e4d008.js";import"./Tooltip.a5f5d892.js";import"./Button.module.3c6c6137.js";import"./context.module.d20ab0de.js";import"./useFocusRing.module.2847fd57.js";import"./OverlayArrow.module.69378247.js";import"./Info.f6d8db72.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
