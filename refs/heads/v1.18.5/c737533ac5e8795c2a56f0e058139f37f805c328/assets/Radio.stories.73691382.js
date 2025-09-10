import{s as d,a as e,F as i,j as n}from"./index.515a76d5.js";import{R as o}from"./Radio.89004d91.js";import"./theme.3b0839ab.js";import"./palette.15e4d008.js";import"./Tooltip.785e02d2.js";import"./Button.module.6fc2d186.js";import"./useFocusRing.module.6f1818ac.js";import"./context.module.44c41772.js";import"./useButton.module.68bb9fb5.js";import"./OverlayArrow.module.e9a026ed.js";import"./Info.8fcc3637.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
