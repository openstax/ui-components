import{s as d,a as e,F as i,j as n}from"./index.9517b6b6.js";import{R as o}from"./Radio.a357d49f.js";import"./theme.ea3df0c5.js";import"./palette.15e4d008.js";import"./Tooltip.3b3e6afd.js";import"./OverlayArrow.module.64ffe563.js";import"./context.module.eddded96.js";import"./Hidden.module.3346244f.js";import"./useButton.module.97a108aa.js";import"./Info.f7dc2fc2.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
