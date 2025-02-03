import{s as d,a as e,F as i,j as n}from"./index.adb3824b.js";import{R as o}from"./Radio.7fa96eea.js";import"./theme.bd0fead7.js";import"./palette.15e4d008.js";import"./Tooltip.0a4a5483.js";import"./OverlayArrow.module.96c0329a.js";import"./context.module.8a6c92e2.js";import"./Hidden.module.0eacf102.js";import"./useButton.module.590035a4.js";import"./Info.0d4df870.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
