import{s as d,a as e,F as i,j as n}from"./index.dccd3f26.js";import{R as o}from"./Radio.6eab9e0d.js";import"./theme.8adfa14c.js";import"./palette.15e4d008.js";import"./Tooltip.ca392137.js";import"./Button.module.3a5a2b56.js";import"./useFocusRing.module.75b16bd8.js";import"./context.module.9e75aead.js";import"./useButton.module.51f7691a.js";import"./OverlayArrow.module.0b8d6312.js";import"./Info.810cc9b6.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
