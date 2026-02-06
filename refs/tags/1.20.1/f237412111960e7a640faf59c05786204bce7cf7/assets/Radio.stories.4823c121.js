import{s as n,a as e,F as d,j as o}from"./index.7f352088.js";import{R as i}from"./Radio.f8282243.js";import"./theme.cc28a4ee.js";import"./palette.5e342580.js";import"./Tooltip.81f01dbd.js";import"./Button.module.c825950a.js";import"./useFocusRing.module.036f809c.js";import"./context.module.d43e93cd.js";import"./useButton.module.816184ba.js";import"./OverlayArrow.module.5bf4d33b.js";import"./Info.e8b67ae7.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
