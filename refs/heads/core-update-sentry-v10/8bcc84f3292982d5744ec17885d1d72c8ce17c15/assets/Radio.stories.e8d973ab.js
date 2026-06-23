import{s as n,a as e,F as d,j as o}from"./index.54cd7210.js";import{R as i}from"./Radio.6c99d50e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.85dcf69d.js";import"./Button.module.3d870523.js";import"./useFocusRing.module.fd0ed14b.js";import"./context.module.45ce6e97.js";import"./useButton.module.1112498c.js";import"./OverlayArrow.module.392e3596.js";import"./Info.c431c012.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
