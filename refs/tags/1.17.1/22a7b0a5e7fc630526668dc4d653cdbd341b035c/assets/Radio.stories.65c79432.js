import{s as d,a as e,F as i,j as n}from"./index.40ca4ef0.js";import{R as o}from"./Radio.92b12eab.js";import"./theme.21d7e301.js";import"./palette.15e4d008.js";import"./Tooltip.9093e2ec.js";import"./Button.module.e79344d2.js";import"./useFocusRing.module.dd225e63.js";import"./useButton.module.b3bb057b.js";import"./OverlayArrow.module.30892b24.js";import"./Info.b079cba1.js";import"./focusSafely.module.07fcabd8.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
