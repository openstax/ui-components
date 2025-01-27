import{s as d,a as e,F as i,j as n}from"./index.3f26f4ee.js";import{R as o}from"./Radio.782726a3.js";import"./theme.7ecc0110.js";import"./palette.15e4d008.js";import"./Tooltip.60c502a4.js";import"./Button.module.4ebc644d.js";import"./context.module.a4a5e91f.js";import"./useFocusRing.module.857bced1.js";import"./OverlayArrow.module.e80dcae8.js";import"./Info.471bedb1.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
