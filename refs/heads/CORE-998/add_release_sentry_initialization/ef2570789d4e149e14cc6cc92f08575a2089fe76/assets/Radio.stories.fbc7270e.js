import{s as d,a as e,F as i,j as n}from"./index.b72de98d.js";import{R as o}from"./Radio.95366f1c.js";import"./theme.0c933903.js";import"./palette.15e4d008.js";import"./Tooltip.96777681.js";import"./Button.module.8f09dfc6.js";import"./useFocusRing.module.d931eb60.js";import"./context.module.586f6da9.js";import"./useButton.module.f0ff1b27.js";import"./OverlayArrow.module.39f052a4.js";import"./Info.9a0396d3.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
