import{s as n,a as e,F as d,j as o}from"./index.122c3292.js";import{R as i}from"./Radio.1c4fca6c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.0358dd42.js";import"./Button.module.514102e3.js";import"./useFocusRing.module.554ac6ad.js";import"./context.module.20fb0481.js";import"./useButton.module.b9611756.js";import"./OverlayArrow.module.058b4121.js";import"./Info.4f96a986.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
