import{s as d,a as e,F as i,j as n}from"./index.4a767a68.js";import{R as o}from"./Radio.a6da55d2.js";import"./theme.0ce87b94.js";import"./palette.15e4d008.js";import"./Tooltip.5868b153.js";import"./Button.module.fac53c94.js";import"./useFocusRing.module.cf123900.js";import"./context.module.decc80c8.js";import"./useButton.module.ccf73a97.js";import"./OverlayArrow.module.51f6ac2a.js";import"./Info.a108d4ea.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
