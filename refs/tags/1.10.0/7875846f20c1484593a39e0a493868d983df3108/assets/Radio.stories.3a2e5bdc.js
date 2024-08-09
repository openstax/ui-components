import{s as d,a as e,F as i,j as n}from"./index.21f9ba6f.js";import{R as o}from"./Radio.43836c90.js";import"./theme.9e31fdfa.js";import"./palette.15e4d008.js";import"./Tooltip.2545a9b1.js";import"./Button.module.04477929.js";import"./context.module.07203c7a.js";import"./useFocusRing.module.efaef9c9.js";import"./OverlayArrow.module.e4630699.js";import"./Info.3dda1d34.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
