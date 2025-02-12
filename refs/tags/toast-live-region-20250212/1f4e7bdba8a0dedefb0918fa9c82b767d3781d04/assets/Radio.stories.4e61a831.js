import{s as d,a as e,F as i,j as n}from"./index.c70a9853.js";import{R as o}from"./Radio.a1bd8d64.js";import"./theme.3411db3d.js";import"./palette.15e4d008.js";import"./Tooltip.dcbc3e59.js";import"./OverlayArrow.module.a50259bf.js";import"./context.module.c347cc93.js";import"./Hidden.module.dfcf3216.js";import"./useButton.module.f078f3d4.js";import"./Info.c40ffd4e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
