import{s as d,a as e,F as i,j as n}from"./index.7f4708a9.js";import{R as o}from"./Radio.c387f816.js";import"./theme.167f6352.js";import"./palette.15e4d008.js";import"./Tooltip.9b7a8369.js";import"./Button.module.54f9d076.js";import"./useFocusRing.module.c278eff0.js";import"./context.module.08242fd6.js";import"./useButton.module.58d6885b.js";import"./OverlayArrow.module.b6e8b209.js";import"./Info.22376c2c.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
