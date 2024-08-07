import{s as d,a as e,F as i,j as n}from"./index.cbfa7628.js";import{R as o}from"./Radio.e6a13087.js";import"./theme.9e35745b.js";import"./palette.15e4d008.js";import"./Tooltip.b117ebd3.js";import"./Button.module.02682a6d.js";import"./context.module.b68994a2.js";import"./useFocusRing.module.7cf0f223.js";import"./OverlayArrow.module.b0d7d5f7.js";import"./Info.a5cca106.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
