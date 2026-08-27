import{s as n,j as e,F as d,a as o}from"./index-94c190e1.js";import{R as i}from"./Radio-9d710300.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-5a63ad72.js";import"./Button-7a6b5a8d.js";import"./useFocusRing-49e0b8e3.js";import"./context-29cf9f11.js";import"./useButton-43fc9096.js";import"./OverlayArrow-54e23faf.js";import"./Info-2b3a956d.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
