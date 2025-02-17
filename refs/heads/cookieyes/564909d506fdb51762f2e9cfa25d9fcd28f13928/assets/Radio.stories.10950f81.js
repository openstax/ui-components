import{s as d,a as e,F as i,j as n}from"./index.2b07e954.js";import{R as o}from"./Radio.bcdd0f09.js";import"./theme.51edf3d2.js";import"./palette.15e4d008.js";import"./Tooltip.0d0dddfb.js";import"./OverlayArrow.module.73e2b2ff.js";import"./context.module.8dcbc6b0.js";import"./Hidden.module.319d2457.js";import"./useButton.module.df8386e3.js";import"./Info.27e2b784.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
