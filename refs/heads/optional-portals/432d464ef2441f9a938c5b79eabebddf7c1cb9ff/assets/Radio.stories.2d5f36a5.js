import{s as d,a as e,F as i,j as n}from"./index.ab5ff1f7.js";import{R as o}from"./Radio.0d8c58a6.js";import"./theme.75f8fe72.js";import"./palette.15e4d008.js";import"./Tooltip.e0a1065f.js";import"./Button.module.cb4fdf60.js";import"./context.module.9d54f9e8.js";import"./useFocusRing.module.507dd03a.js";import"./OverlayArrow.module.c35148d0.js";import"./Info.20c67f3c.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
