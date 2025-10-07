import{s as d,a as e,F as i,j as n}from"./index.73d4fe07.js";import{R as o}from"./Radio.a177d8ba.js";import"./theme.492f6a78.js";import"./palette.15e4d008.js";import"./Tooltip.60fc5115.js";import"./Button.module.3f0cc27b.js";import"./useFocusRing.module.aa02cab0.js";import"./context.module.e9becb0e.js";import"./useButton.module.8a0b42f3.js";import"./OverlayArrow.module.6b3727d6.js";import"./Info.311c7333.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
