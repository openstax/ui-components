import{s as d,a as e,F as i,j as n}from"./index.b539d75f.js";import{R as o}from"./Radio.614b25c4.js";import"./theme.cfb29cae.js";import"./palette.15e4d008.js";import"./Tooltip.091cbccc.js";import"./OverlayArrow.module.ea561ea8.js";import"./context.module.ae95c2b3.js";import"./Hidden.module.8e14e3fe.js";import"./useButton.module.35dc5e83.js";import"./Info.1cd7a926.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
