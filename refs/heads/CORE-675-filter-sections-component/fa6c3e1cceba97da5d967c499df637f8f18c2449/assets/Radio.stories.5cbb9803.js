import{s as d,a as e,F as i,j as n}from"./index.86720895.js";import{R as o}from"./Radio.83048045.js";import"./theme.a2192d42.js";import"./palette.15e4d008.js";import"./Tooltip.3b611b45.js";import"./OverlayArrow.module.68c51fdc.js";import"./context.module.5d10c37a.js";import"./Hidden.module.baabe725.js";import"./useButton.module.95a2d6f1.js";import"./Info.46565f25.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
