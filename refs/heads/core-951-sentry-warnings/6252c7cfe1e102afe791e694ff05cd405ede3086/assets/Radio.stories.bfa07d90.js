import{s as d,a as e,F as i,j as n}from"./index.f54093e7.js";import{R as o}from"./Radio.12e36285.js";import"./theme.d2122246.js";import"./palette.15e4d008.js";import"./Tooltip.4d97491c.js";import"./Button.module.9a5ea9a6.js";import"./useFocusRing.module.dadb4a17.js";import"./useButton.module.fe26e510.js";import"./OverlayArrow.module.7de0bc43.js";import"./Info.1c073d75.js";import"./focusSafely.module.e8545c1e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
