import{s as d,a as e,F as i,j as n}from"./index.88aa9f22.js";import{R as o}from"./Radio.d17a9f76.js";import"./theme.9bd14cce.js";import"./palette.15e4d008.js";import"./Tooltip.583e9240.js";import"./OverlayArrow.module.b58ced2e.js";import"./context.module.6eb2c600.js";import"./Hidden.module.fa9cb266.js";import"./useButton.module.fdfb5ada.js";import"./Info.0d0572c2.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
