import{s as d,a as e,F as i,j as n}from"./index.4b2278d7.js";import{R as o}from"./Radio.8cf85659.js";import"./theme.a9e0c4d9.js";import"./palette.15e4d008.js";import"./Tooltip.de159ee0.js";import"./OverlayArrow.module.4ac5d027.js";import"./context.module.f6086f8f.js";import"./Hidden.module.9fba73d0.js";import"./useButton.module.3bcd7eba.js";import"./Info.8b79ff67.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
