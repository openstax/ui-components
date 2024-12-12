import{s as d,a as e,F as i,j as n}from"./index.b00fac09.js";import{R as o}from"./Radio.23ea8d6b.js";import"./theme.165950be.js";import"./palette.15e4d008.js";import"./Tooltip.6f33966d.js";import"./Button.module.fc55542b.js";import"./context.module.40f7a861.js";import"./useFocusRing.module.6b354afb.js";import"./OverlayArrow.module.e28af6fa.js";import"./Info.80e37d7e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
