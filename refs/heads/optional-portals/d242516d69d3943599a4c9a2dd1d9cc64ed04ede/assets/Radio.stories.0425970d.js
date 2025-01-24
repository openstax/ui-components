import{s as d,a as e,F as i,j as n}from"./index.9701bee5.js";import{R as o}from"./Radio.3a2def1d.js";import"./theme.282d57fd.js";import"./palette.15e4d008.js";import"./Tooltip.0fdb3527.js";import"./Button.module.700556b0.js";import"./context.module.61e0360d.js";import"./useFocusRing.module.358e6989.js";import"./OverlayArrow.module.6668f390.js";import"./Info.aa7b869a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
