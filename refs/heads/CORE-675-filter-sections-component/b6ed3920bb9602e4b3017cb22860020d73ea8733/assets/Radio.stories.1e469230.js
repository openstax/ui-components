import{s as d,a as e,F as i,j as n}from"./index.4d692fb5.js";import{R as o}from"./Radio.ebc95da1.js";import"./theme.ac00b3a8.js";import"./palette.15e4d008.js";import"./Tooltip.8619eb2f.js";import"./OverlayArrow.module.2c31857b.js";import"./context.module.992083d1.js";import"./Hidden.module.26b5b782.js";import"./useButton.module.1e8601a1.js";import"./Info.2739c8b2.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
