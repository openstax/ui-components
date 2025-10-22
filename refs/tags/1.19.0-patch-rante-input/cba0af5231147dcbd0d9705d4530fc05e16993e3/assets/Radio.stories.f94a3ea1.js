import{s as d,a as e,F as i,j as n}from"./index.cbfa8774.js";import{R as o}from"./Radio.f2abd2a6.js";import"./theme.4163cde7.js";import"./palette.15e4d008.js";import"./Tooltip.7e0d6f82.js";import"./Button.module.0081712b.js";import"./useFocusRing.module.e3564eb8.js";import"./context.module.88bcfb75.js";import"./useButton.module.bddd2370.js";import"./OverlayArrow.module.6ec7fd9b.js";import"./Info.0ed086c9.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
