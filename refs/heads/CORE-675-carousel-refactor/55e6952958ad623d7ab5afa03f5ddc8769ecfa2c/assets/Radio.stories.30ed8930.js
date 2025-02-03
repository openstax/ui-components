import{s as d,a as e,F as i,j as n}from"./index.6fd16f1d.js";import{R as o}from"./Radio.f7ca7b9a.js";import"./theme.6704b98c.js";import"./palette.15e4d008.js";import"./Tooltip.1f1e2141.js";import"./OverlayArrow.module.b9015ac3.js";import"./context.module.e28c74c6.js";import"./Hidden.module.5cc1bccd.js";import"./useButton.module.a23993e8.js";import"./Info.e0a80427.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
