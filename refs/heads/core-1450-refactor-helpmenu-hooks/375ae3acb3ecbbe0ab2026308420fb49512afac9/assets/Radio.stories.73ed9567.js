import{s as d,a as e,F as i,j as n}from"./index.0958d440.js";import{R as o}from"./Radio.48cf471b.js";import"./theme.48d111e7.js";import"./palette.15e4d008.js";import"./Tooltip.c90259e2.js";import"./Button.module.1481a788.js";import"./useFocusRing.module.5faf7d13.js";import"./context.module.1c33aef1.js";import"./useButton.module.a97ddd89.js";import"./OverlayArrow.module.332d0eb0.js";import"./Info.5bc1ddd9.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
