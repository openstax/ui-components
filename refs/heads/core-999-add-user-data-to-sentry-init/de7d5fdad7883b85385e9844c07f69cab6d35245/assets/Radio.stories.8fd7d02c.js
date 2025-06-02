import{s as d,a as e,F as i,j as n}from"./index.cac12bbc.js";import{R as o}from"./Radio.0bb79271.js";import"./theme.9f91f243.js";import"./palette.15e4d008.js";import"./Tooltip.3b564416.js";import"./Button.module.3632d609.js";import"./useFocusRing.module.0ef0d940.js";import"./useButton.module.2fc10783.js";import"./OverlayArrow.module.e21935d3.js";import"./Info.32a8c354.js";import"./focusSafely.module.353b3b3e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
