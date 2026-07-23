import{s as n,a as e,F as d,j as o}from"./index.d9384ca4.js";import{R as i}from"./Radio.fb07eef8.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.9cd052b5.js";import"./Button.module.7bae6b4c.js";import"./useFocusRing.module.77bb5a5a.js";import"./context.module.7b6fd9a1.js";import"./useButton.module.c84be9ec.js";import"./OverlayArrow.module.f794e854.js";import"./Info.556aa394.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
