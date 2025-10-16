import{s as d,a as e,F as i,j as n}from"./index.952a20c3.js";import{R as o}from"./Radio.1adc92a9.js";import"./theme.ecc09727.js";import"./palette.15e4d008.js";import"./Tooltip.b667ee5d.js";import"./Button.module.c1508317.js";import"./useFocusRing.module.ef43c21e.js";import"./context.module.dd9492c8.js";import"./useButton.module.b3a2ab02.js";import"./OverlayArrow.module.cfcd711d.js";import"./Info.febb4f61.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
