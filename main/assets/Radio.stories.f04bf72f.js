import{s as d,a as e,F as i,j as n}from"./index.8a38cd12.js";import{R as o}from"./Radio.e06ab28f.js";import"./theme.b5a405fc.js";import"./palette.15e4d008.js";import"./Tooltip.617ef495.js";import"./OverlayArrow.module.7ec6895c.js";import"./context.module.3ec39813.js";import"./Hidden.module.68538019.js";import"./useButton.module.23a57d54.js";import"./Info.fdb8351d.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
