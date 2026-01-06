import{s as d,a as e,F as i,j as n}from"./index.4c7c9e65.js";import{R as o}from"./Radio.c8478cc1.js";import"./theme.87efd615.js";import"./palette.15e4d008.js";import"./Tooltip.419c7d17.js";import"./Button.module.2cafa3c8.js";import"./useFocusRing.module.3bafb37c.js";import"./context.module.11e486e1.js";import"./useButton.module.2b22df95.js";import"./OverlayArrow.module.c429c505.js";import"./Info.09ce4a5a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
