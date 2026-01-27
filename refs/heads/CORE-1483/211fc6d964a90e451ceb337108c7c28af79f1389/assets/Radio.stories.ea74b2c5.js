import{s as d,a as e,F as i,j as n}from"./index.007141e8.js";import{R as o}from"./Radio.4a5ba810.js";import"./theme.e1533d60.js";import"./palette.5e342580.js";import"./Tooltip.058133d1.js";import"./Button.module.6d763fb0.js";import"./useFocusRing.module.06540f0a.js";import"./context.module.a2fa50fb.js";import"./useButton.module.fce5d8c1.js";import"./OverlayArrow.module.67080155.js";import"./Info.1ff490d0.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
