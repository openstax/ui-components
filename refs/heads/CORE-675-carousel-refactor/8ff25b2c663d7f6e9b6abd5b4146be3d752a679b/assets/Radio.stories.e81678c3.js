import{s as d,a as e,F as i,j as n}from"./index.bb4c28cd.js";import{R as o}from"./Radio.ae67432a.js";import"./theme.c08f2576.js";import"./palette.15e4d008.js";import"./Tooltip.dbcadb94.js";import"./OverlayArrow.module.9f0429fb.js";import"./context.module.0a3334fa.js";import"./Hidden.module.f1b41a70.js";import"./useButton.module.5a68f188.js";import"./Info.f43e0b2d.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
