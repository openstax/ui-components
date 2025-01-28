import{s as d,a as e,F as i,j as n}from"./index.6a47a421.js";import{R as o}from"./Radio.827b28f0.js";import"./theme.5cf850c5.js";import"./palette.15e4d008.js";import"./Tooltip.72676dc0.js";import"./OverlayArrow.module.6c609626.js";import"./context.module.882e1a52.js";import"./Hidden.module.1997c474.js";import"./useButton.module.6460a040.js";import"./Info.db3999d6.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
