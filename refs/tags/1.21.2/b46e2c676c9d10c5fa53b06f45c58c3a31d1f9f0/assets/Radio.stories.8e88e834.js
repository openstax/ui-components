import{s as n,a as e,F as d,j as o}from"./index.36f5dfba.js";import{R as i}from"./Radio.57834dc6.js";import"./theme.1b1f074d.js";import"./palette.5e342580.js";import"./Tooltip.0a1352e9.js";import"./Button.module.9fd0a508.js";import"./useFocusRing.module.0f4434a8.js";import"./context.module.e7d75cc4.js";import"./useButton.module.d5dc0645.js";import"./OverlayArrow.module.dad026c2.js";import"./Info.681efd86.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
