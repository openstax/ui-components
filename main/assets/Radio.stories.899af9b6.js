import{s as d,a as e,F as i,j as n}from"./index.56f7f4f0.js";import{R as o}from"./Radio.008d2a35.js";import"./theme.7c2850be.js";import"./palette.15e4d008.js";import"./Tooltip.b2f5599e.js";import"./Button.module.cbb8ec07.js";import"./context.module.9782951c.js";import"./focusSafely.module.c0485436.js";import"./useFocusRing.module.43611164.js";import"./OverlayArrow.module.41ca31fa.js";import"./Info.98a02d38.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
