import{s as d,a as e,F as i,j as n}from"./index.b8f03196.js";import{R as o}from"./Radio.574d668f.js";import"./theme.d553a56d.js";import"./palette.15e4d008.js";import"./Tooltip.aff3161d.js";import"./OverlayArrow.module.32d5bf76.js";import"./context.module.3f75ddd5.js";import"./Hidden.module.6436f3b0.js";import"./useButton.module.c9435f91.js";import"./Info.f33bbe8a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
