import{s as d,a as e,F as i,j as n}from"./index.5d82df8f.js";import{R as o}from"./Radio.f7b765d2.js";import"./theme.0144476e.js";import"./palette.15e4d008.js";import"./Tooltip.b22cc370.js";import"./Button.module.979ca885.js";import"./context.module.375a2896.js";import"./useFocusRing.module.327dbd58.js";import"./OverlayArrow.module.6706fdbe.js";import"./Info.97772dc9.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};