import{s as d,a as e,F as i,j as n}from"./index.5180d244.js";import{R as o}from"./Radio.480fc869.js";import"./theme.2a1e6d28.js";import"./palette.15e4d008.js";import"./Tooltip.59c80ac5.js";import"./Button.module.899623f8.js";import"./context.module.2dcdcc98.js";import"./useFocusRing.module.88b80d85.js";import"./OverlayArrow.module.a70a5cad.js";import"./Info.07ff7f88.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
