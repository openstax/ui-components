import{s as d,a as e,F as i,j as n}from"./index.5eeca385.js";import{R as o}from"./Radio.e750c0e6.js";import"./theme.0dad3fd4.js";import"./palette.15e4d008.js";import"./Tooltip.16d7905b.js";import"./Button.module.e8cabd4e.js";import"./context.module.6355ca2c.js";import"./useFocusRing.module.6f98d58c.js";import"./OverlayArrow.module.aeb45026.js";import"./Info.e89a4858.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
