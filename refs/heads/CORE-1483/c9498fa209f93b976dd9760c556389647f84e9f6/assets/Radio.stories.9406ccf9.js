import{s as d,a as e,F as i,j as n}from"./index.51d91d8e.js";import{R as o}from"./Radio.2ce077fe.js";import"./theme.93d2d472.js";import"./palette.5e342580.js";import"./Tooltip.11f832a3.js";import"./Button.module.e9f9d388.js";import"./useFocusRing.module.9f1e7692.js";import"./context.module.ece2d1fe.js";import"./useButton.module.f793ca07.js";import"./OverlayArrow.module.8e0d79ff.js";import"./Info.4ae7c581.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
