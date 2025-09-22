import{s as d,a as e,F as i,j as n}from"./index.02056440.js";import{R as o}from"./Radio.db07e072.js";import"./theme.8ae5fa1c.js";import"./palette.15e4d008.js";import"./Tooltip.c7828088.js";import"./Button.module.d5b0a6c5.js";import"./useFocusRing.module.6cc71912.js";import"./context.module.8659e4bd.js";import"./useButton.module.7e3b4491.js";import"./OverlayArrow.module.7639f1de.js";import"./Info.e85448e4.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
