import{s as n,a as e,F as d,j as o}from"./index.d64a7b16.js";import{R as i}from"./Radio.52757b71.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.f34f674b.js";import"./Button.module.970e0ec6.js";import"./useFocusRing.module.7cc4433c.js";import"./context.module.6366e4b3.js";import"./useButton.module.d51b1bb6.js";import"./OverlayArrow.module.38855c55.js";import"./Info.c8f5bcf8.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
