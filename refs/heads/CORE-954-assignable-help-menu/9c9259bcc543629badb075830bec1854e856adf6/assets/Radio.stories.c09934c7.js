import{s as d,a as e,F as i,j as n}from"./index.275c3d05.js";import{R as o}from"./Radio.c63e535d.js";import"./theme.f1eeab5d.js";import"./palette.15e4d008.js";import"./Tooltip.ae4d4b59.js";import"./Button.module.45864509.js";import"./useFocusRing.module.eef34ac4.js";import"./context.module.123aa522.js";import"./useButton.module.39b3eef1.js";import"./OverlayArrow.module.06d04c30.js";import"./Info.decc1574.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
