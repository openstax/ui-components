import{s as d,a as e,F as i,j as n}from"./index.97ecd76e.js";import{R as o}from"./Radio.45a93cd2.js";import"./theme.77988faf.js";import"./palette.15e4d008.js";import"./Tooltip.527b3884.js";import"./Button.module.28087eeb.js";import"./useFocusRing.module.e0fe8a29.js";import"./context.module.c932fb5c.js";import"./useButton.module.39ab81c2.js";import"./OverlayArrow.module.2fa7a07c.js";import"./Info.47eb4016.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
