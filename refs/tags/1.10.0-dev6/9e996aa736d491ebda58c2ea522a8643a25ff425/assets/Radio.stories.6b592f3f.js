import{s as d,a as e,F as i,j as n}from"./index.2b45137a.js";import{R as o}from"./Radio.d8bf2ce9.js";import"./theme.a7eebc93.js";import"./palette.15e4d008.js";import"./Tooltip.86b5a58e.js";import"./Button.module.fd32e1a5.js";import"./context.module.ec4ac92e.js";import"./useFocusRing.module.86ed4121.js";import"./OverlayArrow.module.63e72576.js";import"./Info.0a6a824e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
