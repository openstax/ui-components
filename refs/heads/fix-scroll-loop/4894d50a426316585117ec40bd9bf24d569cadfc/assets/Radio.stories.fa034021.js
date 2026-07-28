import{s as n,a as e,F as d,j as o}from"./index.0f552bb7.js";import{R as i}from"./Radio.3af57fdc.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.22e1dec5.js";import"./Button.module.7d779fc1.js";import"./useFocusRing.module.6be01e39.js";import"./context.module.4490ff1e.js";import"./useButton.module.41d66f7f.js";import"./OverlayArrow.module.c47d6744.js";import"./Info.19bf3ef7.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
