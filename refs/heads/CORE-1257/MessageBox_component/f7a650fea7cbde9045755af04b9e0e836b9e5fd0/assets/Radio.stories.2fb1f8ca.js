import{s as d,a as e,F as i,j as n}from"./index.64eca7f9.js";import{R as o}from"./Radio.39051f87.js";import"./theme.fb46484b.js";import"./palette.15e4d008.js";import"./Tooltip.b2e98352.js";import"./Button.module.8055a418.js";import"./useFocusRing.module.c45c12b7.js";import"./context.module.0a16dcb7.js";import"./useButton.module.732dc45d.js";import"./OverlayArrow.module.4989e243.js";import"./Info.0e25a6a8.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
