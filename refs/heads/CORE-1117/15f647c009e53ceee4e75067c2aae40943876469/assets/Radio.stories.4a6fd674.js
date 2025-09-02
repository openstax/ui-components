import{s as d,a as e,F as i,j as n}from"./index.4b36b55f.js";import{R as o}from"./Radio.b117063b.js";import"./theme.d87ac4c6.js";import"./palette.15e4d008.js";import"./Tooltip.f5c3c267.js";import"./Button.module.63b55d3e.js";import"./useFocusRing.module.6aba7ad5.js";import"./context.module.2a97766e.js";import"./useButton.module.5bf66407.js";import"./OverlayArrow.module.364ad344.js";import"./Info.1d1b97d5.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
