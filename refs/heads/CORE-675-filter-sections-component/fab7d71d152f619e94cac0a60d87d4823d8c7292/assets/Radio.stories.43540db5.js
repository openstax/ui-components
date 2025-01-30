import{s as d,a as e,F as i,j as n}from"./index.71d8124c.js";import{R as o}from"./Radio.54457cc8.js";import"./theme.ce452560.js";import"./palette.15e4d008.js";import"./Tooltip.854e844f.js";import"./OverlayArrow.module.2e474dec.js";import"./context.module.7af12a6a.js";import"./Hidden.module.91a19e06.js";import"./useButton.module.373eac7c.js";import"./Info.035f6266.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
