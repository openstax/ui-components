import{s as d,a as e,F as i,j as n}from"./index.d9b1cd26.js";import{R as o}from"./Radio.6a074a81.js";import"./theme.949ce14b.js";import"./palette.15e4d008.js";import"./Tooltip.8c6abe51.js";import"./OverlayArrow.module.e2127d40.js";import"./context.module.f04d4e5b.js";import"./Hidden.module.de8936a7.js";import"./useButton.module.ef025766.js";import"./Info.39b4eb84.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
