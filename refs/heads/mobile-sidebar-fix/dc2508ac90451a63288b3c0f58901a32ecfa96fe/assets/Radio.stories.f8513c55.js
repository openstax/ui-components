import{s as d,a as e,F as i,j as n}from"./index.b9c09adb.js";import{R as o}from"./Radio.9a55d097.js";import"./theme.c264535b.js";import"./palette.15e4d008.js";import"./Tooltip.a210f850.js";import"./Button.module.4da4e84c.js";import"./context.module.5c42d2ed.js";import"./useFocusRing.module.9e820a97.js";import"./OverlayArrow.module.a48c5059.js";import"./Info.6afe1d93.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
