import{s as d,a as e,F as i,j as n}from"./index.417789e7.js";import{R as o}from"./Radio.cf0631f1.js";import"./theme.11dcc8ad.js";import"./palette.15e4d008.js";import"./Tooltip.8e2c7ee9.js";import"./Button.module.b8257a02.js";import"./useFocusRing.module.1247a38a.js";import"./context.module.5c58119b.js";import"./useButton.module.e39520c6.js";import"./OverlayArrow.module.1a65dd6d.js";import"./Info.3048738e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
