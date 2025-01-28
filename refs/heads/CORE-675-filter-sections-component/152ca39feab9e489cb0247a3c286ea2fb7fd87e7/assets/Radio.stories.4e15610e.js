import{s as d,a as e,F as i,j as n}from"./index.cf96068e.js";import{R as o}from"./Radio.758394e4.js";import"./theme.86ecbb1f.js";import"./palette.15e4d008.js";import"./Tooltip.28b79902.js";import"./OverlayArrow.module.389d8ae7.js";import"./context.module.9a4939e0.js";import"./Hidden.module.83cf58fd.js";import"./useButton.module.26af66a5.js";import"./Info.0e38b7a7.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
