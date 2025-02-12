import{s as d,a as e,F as i,j as n}from"./index.7adb08c3.js";import{R as o}from"./Radio.f1c824d9.js";import"./theme.c7880208.js";import"./palette.15e4d008.js";import"./Tooltip.8d6baa92.js";import"./OverlayArrow.module.568759c5.js";import"./context.module.d8400951.js";import"./Hidden.module.a5775082.js";import"./useButton.module.dce0d8f2.js";import"./Info.b2c0a163.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
