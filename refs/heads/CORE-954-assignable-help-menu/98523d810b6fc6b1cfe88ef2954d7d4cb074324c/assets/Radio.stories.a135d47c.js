import{s as d,a as e,F as i,j as n}from"./index.5c74dffd.js";import{R as o}from"./Radio.93159066.js";import"./theme.41418f80.js";import"./palette.15e4d008.js";import"./Tooltip.492501f8.js";import"./Button.module.9b9b5188.js";import"./useFocusRing.module.e3a9d4d9.js";import"./context.module.c4073eef.js";import"./useButton.module.d6d66488.js";import"./OverlayArrow.module.f7d352e5.js";import"./Info.bf78a580.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
