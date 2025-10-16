import{s as d,a as e,F as i,j as n}from"./index.18776f80.js";import{R as o}from"./Radio.55059ea9.js";import"./theme.a62307c5.js";import"./palette.15e4d008.js";import"./Tooltip.21517bf1.js";import"./Button.module.b1042289.js";import"./useFocusRing.module.147020b3.js";import"./context.module.1c0a0698.js";import"./useButton.module.5c0bb359.js";import"./OverlayArrow.module.1f9b8717.js";import"./Info.79f0125f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
