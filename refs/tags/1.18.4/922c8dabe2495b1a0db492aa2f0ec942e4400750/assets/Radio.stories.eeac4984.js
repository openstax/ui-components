import{s as d,a as e,F as i,j as n}from"./index.03ab0112.js";import{R as o}from"./Radio.c454c67c.js";import"./theme.1525060c.js";import"./palette.15e4d008.js";import"./Tooltip.74397ac5.js";import"./Button.module.29fd3463.js";import"./useFocusRing.module.04e76e0f.js";import"./context.module.5af9bce0.js";import"./useButton.module.a590e806.js";import"./OverlayArrow.module.5a883969.js";import"./Info.9a347dd2.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
