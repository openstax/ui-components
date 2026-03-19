import{s as n,a as e,F as d,j as o}from"./index.1c254316.js";import{R as i}from"./Radio.c6d15e63.js";import"./theme.35d65827.js";import"./palette.5e342580.js";import"./Tooltip.0e9e9793.js";import"./Button.module.4c5a3a02.js";import"./useFocusRing.module.89ab0dde.js";import"./context.module.afe9b63c.js";import"./useButton.module.46106dc2.js";import"./OverlayArrow.module.a50b1bfc.js";import"./Info.c82ed963.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
