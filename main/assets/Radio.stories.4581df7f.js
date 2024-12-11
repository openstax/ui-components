import{s as d,a as e,F as i,j as n}from"./index.069edce0.js";import{R as o}from"./Radio.5ec3483a.js";import"./theme.7690d78e.js";import"./palette.15e4d008.js";import"./Tooltip.e2da12b1.js";import"./Button.module.ed04d4f1.js";import"./context.module.f7ec4f70.js";import"./focusSafely.module.e4ff997f.js";import"./useFocusRing.module.188870d8.js";import"./OverlayArrow.module.86837da0.js";import"./Info.abed83cd.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
