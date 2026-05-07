import{s as n,a as e,F as d,j as o}from"./index.9115a955.js";import{R as i}from"./Radio.fd7e3ad0.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.af756aa0.js";import"./Button.module.e3695140.js";import"./useFocusRing.module.c9b8a772.js";import"./context.module.adeb208d.js";import"./useButton.module.023abfb6.js";import"./OverlayArrow.module.3862a325.js";import"./Info.71057e16.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
