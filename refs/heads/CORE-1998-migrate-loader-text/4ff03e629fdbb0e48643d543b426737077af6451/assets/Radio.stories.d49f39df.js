import{s as n,a as e,F as d,j as o}from"./index.d6a31b4c.js";import{R as i}from"./Radio.5f0e2846.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.7a270122.js";import"./Button.module.0055a9d4.js";import"./useFocusRing.module.51137961.js";import"./context.module.e798d41c.js";import"./useButton.module.5235f49f.js";import"./OverlayArrow.module.8c515fc1.js";import"./Info.06cc2934.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
