import{s as d,a as e,F as i,j as n}from"./index.5ae6b948.js";import{R as o}from"./Radio.0fb3015d.js";import"./theme.2eb635e8.js";import"./palette.15e4d008.js";import"./Tooltip.b01e0210.js";import"./Button.module.2d5a902b.js";import"./useFocusRing.module.1d4a7783.js";import"./context.module.2c259688.js";import"./useButton.module.fa606007.js";import"./OverlayArrow.module.e926dbff.js";import"./Info.57be7655.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
