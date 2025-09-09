import{s as d,a as e,F as i,j as n}from"./index.a66d3dbe.js";import{R as o}from"./Radio.2d9fd8d6.js";import"./theme.65cc65bc.js";import"./palette.15e4d008.js";import"./Tooltip.395b9a5e.js";import"./Button.module.f480ae02.js";import"./useFocusRing.module.d3d4f3f4.js";import"./context.module.a3e5fc2c.js";import"./useButton.module.f889ca35.js";import"./OverlayArrow.module.17a5e29f.js";import"./Info.d8a3314e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
