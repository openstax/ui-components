import{s as d,a as e,F as i,j as n}from"./index.31ec41c5.js";import{R as o}from"./Radio.1a28cd40.js";import"./theme.455e3fb8.js";import"./palette.15e4d008.js";import"./Tooltip.a67a8499.js";import"./Button.module.5ebc7e98.js";import"./useFocusRing.module.620dc375.js";import"./context.module.b256b1a9.js";import"./useButton.module.d4983e58.js";import"./OverlayArrow.module.08672efe.js";import"./Info.74b4cf73.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
