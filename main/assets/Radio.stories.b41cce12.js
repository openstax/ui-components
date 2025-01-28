import{s as d,a as e,F as i,j as n}from"./index.9b638a39.js";import{R as o}from"./Radio.9d715ee8.js";import"./theme.e81936ef.js";import"./palette.15e4d008.js";import"./Tooltip.cd6e4670.js";import"./Button.module.729f9492.js";import"./context.module.ee8a93fc.js";import"./useFocusRing.module.ada377a3.js";import"./OverlayArrow.module.40f35c5e.js";import"./Info.013df92a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
