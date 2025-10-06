import{s as d,a as e,F as i,j as n}from"./index.5ca01709.js";import{R as o}from"./Radio.8c236c30.js";import"./theme.20697340.js";import"./palette.15e4d008.js";import"./Tooltip.15c9a7e8.js";import"./Button.module.28c8767b.js";import"./useFocusRing.module.f2434f88.js";import"./context.module.8b93c3b3.js";import"./useButton.module.190adffb.js";import"./OverlayArrow.module.81104e25.js";import"./Info.005e8d43.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
