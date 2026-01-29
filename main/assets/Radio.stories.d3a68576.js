import{s as d,a as e,F as i,j as n}from"./index.fabca33b.js";import{R as o}from"./Radio.906acfb2.js";import"./theme.7d65ad6e.js";import"./palette.5e342580.js";import"./Tooltip.1c417679.js";import"./Button.module.996d8e2a.js";import"./useFocusRing.module.bf281d1a.js";import"./context.module.2924e6c2.js";import"./useButton.module.fbb9165d.js";import"./OverlayArrow.module.d1bc311a.js";import"./Info.3f11c4a0.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
