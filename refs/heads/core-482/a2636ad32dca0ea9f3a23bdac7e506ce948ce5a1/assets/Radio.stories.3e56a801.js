import{s as d,a as e,F as i,j as n}from"./index.0a27c5ce.js";import{R as o}from"./Radio.3aa65a69.js";import"./theme.3d34f3e6.js";import"./palette.15e4d008.js";import"./Tooltip.c842fc95.js";import"./Button.module.b78edd68.js";import"./context.module.cbef6687.js";import"./focusSafely.module.baee9b88.js";import"./useFocusRing.module.b05559ad.js";import"./OverlayArrow.module.af6871ce.js";import"./Info.c7a3507e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
