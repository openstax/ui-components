import{s as d,a as e,F as i,j as n}from"./index.fe78f6c2.js";import{R as o}from"./Radio.c6fcaf33.js";import"./theme.e8feacdb.js";import"./palette.15e4d008.js";import"./Tooltip.17f93d1a.js";import"./Button.module.faf48828.js";import"./useFocusRing.module.7cd19e02.js";import"./context.module.fde96bd9.js";import"./useButton.module.8b4bd82a.js";import"./OverlayArrow.module.0b0bde23.js";import"./Info.67635f1a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
