import{s as d,a as e,F as i,j as n}from"./index.96928e17.js";import{R as o}from"./Radio.4328b1cb.js";import"./theme.e4769a80.js";import"./palette.15e4d008.js";import"./Tooltip.21d9a12f.js";import"./Button.module.211a1013.js";import"./useFocusRing.module.c891d4bf.js";import"./context.module.e7fa66f3.js";import"./useButton.module.eeaa7f20.js";import"./OverlayArrow.module.7cdad0c9.js";import"./Info.69e41f39.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
