import{s as d,a as e,F as i,j as n}from"./index.5d096266.js";import{R as o}from"./Radio.d59d1a5c.js";import"./theme.9debd24b.js";import"./palette.15e4d008.js";import"./Tooltip.b400257c.js";import"./Button.module.d98b5b5c.js";import"./useFocusRing.module.5bb2c18b.js";import"./context.module.974e2ab0.js";import"./useButton.module.47477d6b.js";import"./OverlayArrow.module.a3b31ea5.js";import"./Info.1737eeb1.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
