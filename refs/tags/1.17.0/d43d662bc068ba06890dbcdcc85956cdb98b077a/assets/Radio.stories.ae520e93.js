import{s as d,a as e,F as i,j as n}from"./index.54140804.js";import{R as o}from"./Radio.31c91045.js";import"./theme.169dad05.js";import"./palette.15e4d008.js";import"./Tooltip.5e7a74e2.js";import"./Button.module.debedefc.js";import"./useFocusRing.module.85ed5b1e.js";import"./useButton.module.37fc617f.js";import"./OverlayArrow.module.83ca7b8d.js";import"./Info.7e355b2b.js";import"./focusSafely.module.41786cd7.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
