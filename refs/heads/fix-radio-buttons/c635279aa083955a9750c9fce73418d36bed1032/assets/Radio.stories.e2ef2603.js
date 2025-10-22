import{s as d,a as e,F as i,j as n}from"./index.221f68d3.js";import{R as o}from"./Radio.85327203.js";import"./theme.412e53c9.js";import"./palette.15e4d008.js";import"./Tooltip.26caee5b.js";import"./Button.module.a1258f8d.js";import"./useFocusRing.module.359a7211.js";import"./context.module.116ede5a.js";import"./useButton.module.02e5a16f.js";import"./OverlayArrow.module.980bfb5a.js";import"./Info.8bebec40.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
