import{s as r,a as e,F as i,j as n}from"./index.7b00a96b.js";import{R as o}from"./Radio.0791fbaa.js";import"./theme.284ae27b.js";import"./palette.15e4d008.js";import"./Tooltip.e0f8cd4f.js";import"./OverlayArrow.module.277aed3e.js";import"./focusSafely.module.a0243702.js";import"./context.module.31d3f641.js";import"./Info.8aa2a9c0.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
