import{s as d,a as e,F as i,j as n}from"./index.a26443a1.js";import{R as o}from"./Radio.ec607257.js";import"./theme.639ccfb1.js";import"./palette.15e4d008.js";import"./Tooltip.47b3c12e.js";import"./Button.module.79e98d99.js";import"./context.module.70441d41.js";import"./useFocusRing.module.8a43e948.js";import"./OverlayArrow.module.38a5cd0d.js";import"./Info.dfc17f53.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
