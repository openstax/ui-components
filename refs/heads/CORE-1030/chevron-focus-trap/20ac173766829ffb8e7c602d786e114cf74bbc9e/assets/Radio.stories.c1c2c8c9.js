import{s as d,a as e,F as i,j as n}from"./index.0868e1f8.js";import{R as o}from"./Radio.d68c4851.js";import"./theme.e53cbf2f.js";import"./palette.15e4d008.js";import"./Tooltip.188c595d.js";import"./Button.module.194ef162.js";import"./useFocusRing.module.b3ec30c8.js";import"./context.module.8d47dd9d.js";import"./useButton.module.dc3d1d5f.js";import"./OverlayArrow.module.a8a3d0d7.js";import"./Info.115acd95.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
