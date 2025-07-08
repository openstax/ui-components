import{s as d,a as e,F as i,j as n}from"./index.90f9d8bf.js";import{R as o}from"./Radio.cc23fa99.js";import"./theme.f8c52f16.js";import"./palette.15e4d008.js";import"./Tooltip.6e1bb1fb.js";import"./Button.module.7f0229a9.js";import"./useFocusRing.module.920c953f.js";import"./context.module.ac2691c3.js";import"./useButton.module.d342bb85.js";import"./OverlayArrow.module.8a40d5a3.js";import"./Info.406b2012.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
