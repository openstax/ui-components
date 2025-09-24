import{s as d,a as e,F as i,j as n}from"./index.d75e0607.js";import{R as o}from"./Radio.4a52b052.js";import"./theme.5fee477c.js";import"./palette.15e4d008.js";import"./Tooltip.8cb79c56.js";import"./Button.module.03418106.js";import"./useFocusRing.module.d4d86887.js";import"./context.module.25743320.js";import"./useButton.module.86f36f81.js";import"./OverlayArrow.module.e2b47b46.js";import"./Info.94d6bbde.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
