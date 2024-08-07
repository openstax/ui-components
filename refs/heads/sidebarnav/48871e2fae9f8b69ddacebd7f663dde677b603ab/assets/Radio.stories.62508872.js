import{s as d,a as e,F as i,j as n}from"./index.2880c38c.js";import{R as o}from"./Radio.2740a881.js";import"./theme.ba5e47a6.js";import"./palette.15e4d008.js";import"./Tooltip.c618e1e0.js";import"./Button.module.a27e555d.js";import"./context.module.37483a9d.js";import"./useFocusRing.module.7a42c35d.js";import"./OverlayArrow.module.4f7e2cfc.js";import"./Info.a9e5df67.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
