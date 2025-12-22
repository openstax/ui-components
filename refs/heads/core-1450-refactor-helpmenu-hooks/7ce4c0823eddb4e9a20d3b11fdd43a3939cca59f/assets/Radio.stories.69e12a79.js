import{s as d,a as e,F as i,j as n}from"./index.1940b973.js";import{R as o}from"./Radio.81ed1aae.js";import"./theme.8cb4384f.js";import"./palette.15e4d008.js";import"./Tooltip.56f68507.js";import"./Button.module.d9f07fbe.js";import"./useFocusRing.module.b1754a57.js";import"./context.module.cf91de77.js";import"./useButton.module.6b9c1eb2.js";import"./OverlayArrow.module.9694790e.js";import"./Info.c3d10e47.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
