import{s as d,a as e,F as i,j as n}from"./index.e30e1bf8.js";import{R as o}from"./Radio.c2ce66f2.js";import"./theme.c41f28b7.js";import"./palette.15e4d008.js";import"./Tooltip.69b32aa0.js";import"./Button.module.967d94d5.js";import"./useFocusRing.module.6894b1ca.js";import"./context.module.f6278275.js";import"./useButton.module.559d36a4.js";import"./OverlayArrow.module.08cc89a8.js";import"./Info.0e6cd97a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
