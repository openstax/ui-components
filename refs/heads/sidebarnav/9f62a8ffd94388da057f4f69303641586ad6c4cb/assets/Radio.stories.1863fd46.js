import{s as d,a as e,F as i,j as n}from"./index.b5936662.js";import{R as o}from"./Radio.3179f969.js";import"./theme.343d49f9.js";import"./palette.15e4d008.js";import"./Tooltip.4f4c83f0.js";import"./Button.module.78e0fdc5.js";import"./context.module.555bfae0.js";import"./useFocusRing.module.6cb18829.js";import"./OverlayArrow.module.0a6f87d4.js";import"./Info.f163fa7e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
