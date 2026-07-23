import{s as n,a as e,F as d,j as o}from"./index.b57afb2c.js";import{R as i}from"./Radio.571181b8.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.036c55ca.js";import"./Button.module.e2ab8ead.js";import"./useFocusRing.module.3a317c65.js";import"./context.module.889f177d.js";import"./useButton.module.0ab174e5.js";import"./OverlayArrow.module.d3b35e6d.js";import"./Info.ff5cc5d5.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
