import{s as n,a as e,F as d,j as o}from"./index.c0e0bfab.js";import{R as i}from"./Radio.5dfdb41c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.6b829ea5.js";import"./Button.module.0c0d1fc9.js";import"./useFocusRing.module.62850908.js";import"./context.module.b9f04e20.js";import"./useButton.module.e1ea5697.js";import"./OverlayArrow.module.305a3da9.js";import"./Info.f96eddeb.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
