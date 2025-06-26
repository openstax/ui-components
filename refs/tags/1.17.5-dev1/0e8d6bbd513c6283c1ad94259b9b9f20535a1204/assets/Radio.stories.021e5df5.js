import{s as d,a as e,F as i,j as n}from"./index.25aec46f.js";import{R as o}from"./Radio.7ba07400.js";import"./theme.dc3599a9.js";import"./palette.15e4d008.js";import"./Tooltip.435cab53.js";import"./Button.module.8477d730.js";import"./useFocusRing.module.5ba3a1ea.js";import"./context.module.8c30aefe.js";import"./useButton.module.fdf4c4da.js";import"./OverlayArrow.module.7c602be9.js";import"./Info.63c6ea85.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
