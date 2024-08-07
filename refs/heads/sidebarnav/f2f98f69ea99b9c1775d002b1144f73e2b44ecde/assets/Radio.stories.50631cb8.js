import{s as d,a as e,F as i,j as n}from"./index.8b248e8d.js";import{R as o}from"./Radio.36235b90.js";import"./theme.c5c687aa.js";import"./palette.15e4d008.js";import"./Tooltip.ca00e196.js";import"./Button.module.6de1fda6.js";import"./context.module.fcd29e30.js";import"./useFocusRing.module.33ad2167.js";import"./OverlayArrow.module.05873ece.js";import"./Info.e7681c1a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
