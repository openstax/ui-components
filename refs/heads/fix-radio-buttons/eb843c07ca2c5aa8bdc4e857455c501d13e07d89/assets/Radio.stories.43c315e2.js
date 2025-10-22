import{s as d,a as e,F as i,j as n}from"./index.d239ade3.js";import{R as o}from"./Radio.255e5e44.js";import"./theme.c713de35.js";import"./palette.15e4d008.js";import"./Tooltip.d1bde843.js";import"./Button.module.611b3131.js";import"./useFocusRing.module.851ea9a1.js";import"./context.module.a3f0af25.js";import"./useButton.module.b4155631.js";import"./OverlayArrow.module.0f2f3170.js";import"./Info.08c59840.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
