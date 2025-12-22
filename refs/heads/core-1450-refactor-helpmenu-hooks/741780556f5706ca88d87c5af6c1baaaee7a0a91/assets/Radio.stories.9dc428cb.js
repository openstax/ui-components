import{s as d,a as e,F as i,j as n}from"./index.69bc1b29.js";import{R as o}from"./Radio.a7cd26fa.js";import"./theme.63b39195.js";import"./palette.15e4d008.js";import"./Tooltip.3e014fe6.js";import"./Button.module.9f0fcf69.js";import"./useFocusRing.module.0cb66c74.js";import"./context.module.e740236e.js";import"./useButton.module.f34ab1dc.js";import"./OverlayArrow.module.f49e0587.js";import"./Info.7e384a32.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
