import{s as n,a as e,F as d,j as o}from"./index.6f35693e.js";import{R as i}from"./Radio.37f7d934.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.554525a4.js";import"./Button.module.5f7fcee0.js";import"./useFocusRing.module.1ac3e3f9.js";import"./context.module.50eacd10.js";import"./useButton.module.d57c7840.js";import"./OverlayArrow.module.7b0c8ab5.js";import"./Info.9750f703.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
