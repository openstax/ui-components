import{s as d,a as e,F as i,j as n}from"./index.f976ca7f.js";import{R as o}from"./Radio.6510702d.js";import"./theme.eeba9004.js";import"./palette.15e4d008.js";import"./Tooltip.b3d178db.js";import"./Button.module.02a87e59.js";import"./context.module.1b130b0b.js";import"./focusSafely.module.e0c62841.js";import"./useFocusRing.module.90eed152.js";import"./OverlayArrow.module.2e5ad5c5.js";import"./Info.9114d100.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
