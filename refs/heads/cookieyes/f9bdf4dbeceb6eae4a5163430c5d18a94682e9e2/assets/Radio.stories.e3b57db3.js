import{s as d,a as e,F as i,j as n}from"./index.77ce5760.js";import{R as o}from"./Radio.085842c9.js";import"./theme.403f74bd.js";import"./palette.15e4d008.js";import"./Tooltip.0fee3e4a.js";import"./OverlayArrow.module.c17b83e7.js";import"./context.module.8546d439.js";import"./Hidden.module.6c528480.js";import"./useButton.module.3ef2f14c.js";import"./Info.cdd2ef13.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
