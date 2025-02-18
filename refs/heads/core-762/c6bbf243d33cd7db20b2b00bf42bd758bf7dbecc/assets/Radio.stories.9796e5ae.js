import{s as d,a as e,F as i,j as n}from"./index.0bc7eaa6.js";import{R as o}from"./Radio.fcc60cf0.js";import"./theme.c64d2254.js";import"./palette.15e4d008.js";import"./Tooltip.fdc676d9.js";import"./OverlayArrow.module.3448a0ae.js";import"./context.module.df77b4f9.js";import"./Hidden.module.17aa5339.js";import"./useButton.module.8853fc49.js";import"./Info.2e11455b.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
