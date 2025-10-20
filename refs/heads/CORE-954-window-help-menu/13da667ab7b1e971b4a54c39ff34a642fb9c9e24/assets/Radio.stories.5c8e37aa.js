import{s as d,a as e,F as i,j as n}from"./index.54a18bae.js";import{R as o}from"./Radio.e8c00be9.js";import"./theme.fe159d0f.js";import"./palette.15e4d008.js";import"./Tooltip.d62efcad.js";import"./Button.module.075ec6d4.js";import"./useFocusRing.module.120f0503.js";import"./context.module.667d7e0e.js";import"./useButton.module.a6db1dff.js";import"./OverlayArrow.module.c9add2b9.js";import"./Info.7c86e131.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
