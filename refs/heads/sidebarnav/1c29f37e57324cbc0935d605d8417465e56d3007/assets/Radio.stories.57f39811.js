import{s as d,a as e,F as i,j as n}from"./index.9ead4d17.js";import{R as o}from"./Radio.d5663c7a.js";import"./theme.4d324ff0.js";import"./palette.15e4d008.js";import"./Tooltip.761be85c.js";import"./Button.module.44a1faad.js";import"./context.module.18b5dce2.js";import"./useFocusRing.module.3dba2959.js";import"./OverlayArrow.module.83652a52.js";import"./Info.16adc5ff.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
