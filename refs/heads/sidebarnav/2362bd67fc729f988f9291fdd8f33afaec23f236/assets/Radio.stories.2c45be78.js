import{s as d,a as e,F as i,j as n}from"./index.577b36d5.js";import{R as o}from"./Radio.af92e9d4.js";import"./theme.a5986cca.js";import"./palette.15e4d008.js";import"./Tooltip.8671447c.js";import"./Button.module.7589dc1e.js";import"./context.module.4e8283eb.js";import"./useFocusRing.module.735b87f1.js";import"./OverlayArrow.module.b715b313.js";import"./Info.623e2a4f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
