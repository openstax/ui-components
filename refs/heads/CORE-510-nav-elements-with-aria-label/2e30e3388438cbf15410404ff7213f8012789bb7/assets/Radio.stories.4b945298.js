import{s as d,a as e,F as i,j as n}from"./index.b3e7ac0c.js";import{R as o}from"./Radio.a053336c.js";import"./theme.e68be389.js";import"./palette.15e4d008.js";import"./Tooltip.09b0456e.js";import"./OverlayArrow.module.7eab0bd8.js";import"./context.module.ee06a185.js";import"./Hidden.module.664f188e.js";import"./useButton.module.1458d218.js";import"./Info.07a8bbc9.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
