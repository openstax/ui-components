import{s as d,a as e,F as i,j as n}from"./index.01c0db81.js";import{R as o}from"./Radio.3340473a.js";import"./theme.ab1bbf07.js";import"./palette.15e4d008.js";import"./Tooltip.149fdaed.js";import"./OverlayArrow.module.5b8202c5.js";import"./context.module.cf25de0a.js";import"./Hidden.module.217ec4fb.js";import"./useButton.module.ed9fc12f.js";import"./Info.a5c3f2d4.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
