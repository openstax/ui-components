import{s as d,a as e,F as i,j as n}from"./index.040b9f37.js";import{R as o}from"./Radio.b2a238b6.js";import"./theme.08015d47.js";import"./palette.15e4d008.js";import"./Tooltip.f2e0eac9.js";import"./Button.module.df0878e7.js";import"./useFocusRing.module.70f6d498.js";import"./context.module.ac019fcc.js";import"./useButton.module.ef125a5e.js";import"./OverlayArrow.module.83362056.js";import"./Info.fa1ec60c.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
