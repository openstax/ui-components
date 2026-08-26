import{s as n,j as e,F as d,a as o}from"./index-50c0161b.js";import{R as i}from"./Radio-45d9f6e9.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-eceedbc6.js";import"./Button-91bf7a11.js";import"./useFocusRing-c29523eb.js";import"./context-7291ac9e.js";import"./useButton-07ca1fe3.js";import"./OverlayArrow-2e4a3213.js";import"./Info-6b3f44d2.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
