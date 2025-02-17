import{s as d,a as e,F as i,j as n}from"./index.85c6e245.js";import{R as o}from"./Radio.13810ad6.js";import"./theme.d30677e7.js";import"./palette.15e4d008.js";import"./Tooltip.d854bd3f.js";import"./OverlayArrow.module.df3fa228.js";import"./context.module.155f18e5.js";import"./Hidden.module.a39d2bec.js";import"./useButton.module.20943c4b.js";import"./Info.da6d40dd.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
