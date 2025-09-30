import{s as d,a as e,F as i,j as n}from"./index.3d4d9294.js";import{R as o}from"./Radio.e7ebe3d4.js";import"./theme.28440579.js";import"./palette.15e4d008.js";import"./Tooltip.e6eea3a8.js";import"./Button.module.d65d22f7.js";import"./useFocusRing.module.acfe7bfa.js";import"./context.module.3d004b19.js";import"./useButton.module.72c7363a.js";import"./OverlayArrow.module.db48e8a3.js";import"./Info.1170c0f1.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
