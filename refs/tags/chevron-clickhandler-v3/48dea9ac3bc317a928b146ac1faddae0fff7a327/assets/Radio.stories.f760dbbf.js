import{s as d,a as e,F as i,j as n}from"./index.3f42f478.js";import{R as o}from"./Radio.6fa59719.js";import"./theme.78dc4d32.js";import"./palette.15e4d008.js";import"./Tooltip.8fb6796e.js";import"./Button.module.fa97bf0d.js";import"./useFocusRing.module.30a8faa1.js";import"./useButton.module.78402594.js";import"./OverlayArrow.module.470e3934.js";import"./Info.8d43affc.js";import"./focusSafely.module.5857692d.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
