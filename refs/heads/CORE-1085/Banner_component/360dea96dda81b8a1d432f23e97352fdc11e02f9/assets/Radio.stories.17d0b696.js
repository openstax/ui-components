import{s as d,a as e,F as i,j as n}from"./index.ebaf06cd.js";import{R as o}from"./Radio.ea0fb3f4.js";import"./theme.a2ab34a0.js";import"./palette.15e4d008.js";import"./Tooltip.86c79eb0.js";import"./Button.module.342a93e4.js";import"./useFocusRing.module.78ddc1fa.js";import"./context.module.a7db674c.js";import"./useButton.module.4da3d446.js";import"./OverlayArrow.module.f2e5990e.js";import"./Info.54bb14e5.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
