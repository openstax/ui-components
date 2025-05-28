import{s as d,a as e,F as i,j as n}from"./index.c68b4d2f.js";import{R as o}from"./Radio.c3f699ef.js";import"./theme.b2bae99d.js";import"./palette.15e4d008.js";import"./Tooltip.5b0dac27.js";import"./Button.module.6d0c5574.js";import"./useFocusRing.module.148955a4.js";import"./useButton.module.7040ca1b.js";import"./OverlayArrow.module.51144fca.js";import"./Info.04e10bc0.js";import"./focusSafely.module.2832ea5c.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
