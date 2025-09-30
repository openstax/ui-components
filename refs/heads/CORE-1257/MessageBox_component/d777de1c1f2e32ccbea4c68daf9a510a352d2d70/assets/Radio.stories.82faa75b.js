import{s as d,a as e,F as i,j as n}from"./index.4091d793.js";import{R as o}from"./Radio.196b4ce0.js";import"./theme.e7090325.js";import"./palette.15e4d008.js";import"./Tooltip.c73e631a.js";import"./Button.module.8a5a2079.js";import"./useFocusRing.module.fa1c8d10.js";import"./context.module.2dea785b.js";import"./useButton.module.661318e7.js";import"./OverlayArrow.module.e0ba7ed5.js";import"./Info.aa381c1d.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
