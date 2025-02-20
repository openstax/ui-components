import{s as d,a as e,F as i,j as n}from"./index.f09e7bf3.js";import{R as o}from"./Radio.90fed76c.js";import"./theme.18fe5a74.js";import"./palette.15e4d008.js";import"./Tooltip.91790c86.js";import"./OverlayArrow.module.7c1f8c9b.js";import"./context.module.86edc84f.js";import"./Hidden.module.9a7d5e7b.js";import"./useButton.module.a1a7d796.js";import"./Info.3be3d95b.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
