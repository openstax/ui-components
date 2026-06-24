import{s as n,a as e,F as d,j as o}from"./index.7d6fb05c.js";import{R as i}from"./Radio.712e4584.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.f115c074.js";import"./Button.module.b9cc9ba4.js";import"./useFocusRing.module.73981b35.js";import"./context.module.b8d439b6.js";import"./useButton.module.a8b62ecc.js";import"./OverlayArrow.module.a0e25414.js";import"./Info.9e739e2e.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
