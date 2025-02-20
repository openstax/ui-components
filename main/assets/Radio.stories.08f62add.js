import{s as d,a as e,F as i,j as n}from"./index.fa43fba7.js";import{R as o}from"./Radio.d28209ec.js";import"./theme.ab406f57.js";import"./palette.15e4d008.js";import"./Tooltip.37af1728.js";import"./OverlayArrow.module.f1af7b3a.js";import"./context.module.742a2143.js";import"./Hidden.module.6bee436d.js";import"./useButton.module.b601f8f1.js";import"./Info.ae6c3103.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
