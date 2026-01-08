import{s as d,a as e,F as i,j as n}from"./index.d8d8debb.js";import{R as o}from"./Radio.75e32d45.js";import"./theme.80f39061.js";import"./palette.15e4d008.js";import"./Tooltip.1b850e36.js";import"./Button.module.d4db665e.js";import"./useFocusRing.module.d9a5a371.js";import"./context.module.4d983a65.js";import"./useButton.module.93ddb8e0.js";import"./OverlayArrow.module.61aed297.js";import"./Info.332d8310.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
