import{s as d,a as e,F as i,j as n}from"./index.fb959489.js";import{R as o}from"./Radio.1dceef33.js";import"./theme.0336608a.js";import"./palette.15e4d008.js";import"./Tooltip.92edf888.js";import"./OverlayArrow.module.690c2210.js";import"./context.module.ef808172.js";import"./Hidden.module.ba18ed70.js";import"./useButton.module.5e1178f2.js";import"./Info.55fe3a40.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
