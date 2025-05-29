import{s as d,a as e,F as i,j as n}from"./index.c4cdfe2f.js";import{R as o}from"./Radio.10a1d684.js";import"./theme.9f20467b.js";import"./palette.15e4d008.js";import"./Tooltip.519b678c.js";import"./Button.module.24e7dafc.js";import"./useFocusRing.module.2ef860e0.js";import"./useButton.module.cf61be06.js";import"./OverlayArrow.module.0f05df35.js";import"./Info.fa5982f4.js";import"./focusSafely.module.a7545491.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
