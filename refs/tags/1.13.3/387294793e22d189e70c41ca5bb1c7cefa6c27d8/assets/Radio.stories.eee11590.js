import{s as d,a as e,F as i,j as n}from"./index.7cd3446d.js";import{R as o}from"./Radio.4cfa6fac.js";import"./theme.b86b84e0.js";import"./palette.15e4d008.js";import"./Tooltip.559b9000.js";import"./OverlayArrow.module.9e9efbce.js";import"./context.module.ac0a08ec.js";import"./Hidden.module.62cac3d8.js";import"./useButton.module.f0ac53cc.js";import"./Info.e202d1a7.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
