import{s as d,a as e,F as i,j as n}from"./index.52210f8f.js";import{R as o}from"./Radio.c95d0856.js";import"./theme.a2fe6e85.js";import"./palette.15e4d008.js";import"./Tooltip.ec647b38.js";import"./Button.module.52706f79.js";import"./context.module.2e90d596.js";import"./focusSafely.module.6462c9ae.js";import"./useFocusRing.module.9b3ecc29.js";import"./OverlayArrow.module.0971d0b0.js";import"./Info.64cfcd54.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};