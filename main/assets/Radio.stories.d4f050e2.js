import{s as d,a as e,F as i,j as n}from"./index.9f75885e.js";import{R as o}from"./Radio.d7f52481.js";import"./theme.3498a614.js";import"./palette.15e4d008.js";import"./Tooltip.75b74b14.js";import"./Button.module.e3b60100.js";import"./useFocusRing.module.830a3750.js";import"./context.module.071f2970.js";import"./useButton.module.a4fcef34.js";import"./OverlayArrow.module.559603b3.js";import"./Info.e999f3c8.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
