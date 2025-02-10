import{s as d,a as e,F as i,j as n}from"./index.c8dc9ec8.js";import{R as o}from"./Radio.20f304b4.js";import"./theme.257d9bc4.js";import"./palette.15e4d008.js";import"./Tooltip.6d927cd8.js";import"./OverlayArrow.module.baafd6f9.js";import"./context.module.5112510d.js";import"./Hidden.module.49e48360.js";import"./useButton.module.8c51044f.js";import"./Info.6cfc9204.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
