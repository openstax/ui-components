import{s as d,a as e,F as i,j as n}from"./index.e0283a51.js";import{R as o}from"./Radio.ffc96394.js";import"./theme.78c9163a.js";import"./palette.15e4d008.js";import"./Tooltip.35180cdd.js";import"./OverlayArrow.module.2c1cc475.js";import"./context.module.601201c6.js";import"./Hidden.module.16d7996d.js";import"./useButton.module.698a374a.js";import"./Info.b18c4360.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
