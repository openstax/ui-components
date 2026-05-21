import{s as n,a as e,F as d,j as o}from"./index.a333fe6c.js";import{R as i}from"./Radio.d798a959.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.8235c27b.js";import"./Button.module.d51f0b2c.js";import"./useFocusRing.module.ee1fc797.js";import"./context.module.ce413104.js";import"./useButton.module.11c6fdaf.js";import"./OverlayArrow.module.94c36aec.js";import"./Info.b909fbf4.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
