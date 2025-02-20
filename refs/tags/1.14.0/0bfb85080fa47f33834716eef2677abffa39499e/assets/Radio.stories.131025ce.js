import{s as d,a as e,F as i,j as n}from"./index.68e5c861.js";import{R as o}from"./Radio.8961fac7.js";import"./theme.c9e78a0d.js";import"./palette.15e4d008.js";import"./Tooltip.ffe2a060.js";import"./OverlayArrow.module.dd666a8f.js";import"./context.module.725cfac0.js";import"./Hidden.module.a26f812d.js";import"./useButton.module.b9fbf560.js";import"./Info.ccdeb0d5.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
