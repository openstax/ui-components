import{s as n,a as e,F as d,j as o}from"./index.0fef33ed.js";import{R as i}from"./Radio.4d03a181.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.ec3df1a5.js";import"./Button.module.2f23a0f3.js";import"./useFocusRing.module.449c36c0.js";import"./context.module.0ea94d10.js";import"./useButton.module.bf096ed8.js";import"./OverlayArrow.module.0f2e0f9a.js";import"./Info.586e51b5.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
