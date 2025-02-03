import{s as d,a as e,F as i,j as n}from"./index.8b9683f6.js";import{R as o}from"./Radio.ba1e0e83.js";import"./theme.e2d3c68c.js";import"./palette.15e4d008.js";import"./Tooltip.55c9962a.js";import"./OverlayArrow.module.7c2c35c9.js";import"./context.module.e19714eb.js";import"./Hidden.module.0e02f2b4.js";import"./useButton.module.196cbd5b.js";import"./Info.0324b253.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
