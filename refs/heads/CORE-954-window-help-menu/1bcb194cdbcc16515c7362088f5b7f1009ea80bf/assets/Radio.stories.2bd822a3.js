import{s as d,a as e,F as i,j as n}from"./index.518083e7.js";import{R as o}from"./Radio.00d0ceb7.js";import"./theme.f311a2da.js";import"./palette.15e4d008.js";import"./Tooltip.a585a259.js";import"./Button.module.850e3dfe.js";import"./useFocusRing.module.64931f0a.js";import"./context.module.1c5c4981.js";import"./useButton.module.8af71f18.js";import"./OverlayArrow.module.029abaf3.js";import"./Info.adb85390.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
