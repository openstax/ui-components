import{s as d,a as e,F as i,j as n}from"./index.b2621a8a.js";import{R as o}from"./Radio.610db0f3.js";import"./theme.4b70bcd5.js";import"./palette.15e4d008.js";import"./Tooltip.1152632a.js";import"./Button.module.51829b69.js";import"./useFocusRing.module.f1baf383.js";import"./context.module.8c2030d1.js";import"./useButton.module.4bab03b2.js";import"./OverlayArrow.module.f66f286a.js";import"./Info.0e8d1f0f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
