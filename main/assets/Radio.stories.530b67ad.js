import{s as d,a as e,F as i,j as n}from"./index.dab0bae4.js";import{R as o}from"./Radio.6dfc9c26.js";import"./theme.4c0514e2.js";import"./palette.15e4d008.js";import"./Tooltip.16c0fa6b.js";import"./Button.module.4dda79b4.js";import"./useFocusRing.module.186fe2c6.js";import"./context.module.6bb86195.js";import"./useButton.module.ce0a5871.js";import"./OverlayArrow.module.36ae93d0.js";import"./Info.c788044b.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
