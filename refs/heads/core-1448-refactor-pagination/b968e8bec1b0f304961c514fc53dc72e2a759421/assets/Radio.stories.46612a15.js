import{s as d,a as e,F as i,j as n}from"./index.2111f8e4.js";import{R as o}from"./Radio.c5eabd0c.js";import"./theme.937d8d2b.js";import"./palette.15e4d008.js";import"./Tooltip.292d6f3a.js";import"./Button.module.b49ec1ac.js";import"./useFocusRing.module.ae39e878.js";import"./context.module.6ae65def.js";import"./useButton.module.2d6879f1.js";import"./OverlayArrow.module.a738aa22.js";import"./Info.beed6ea0.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
