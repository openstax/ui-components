import{s as n,j as e,F as d,a as o}from"./index-622c4348.js";import{R as i}from"./Radio-b73582ed.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-6e32d885.js";import"./Button-a0ce8241.js";import"./useFocusRing-c92a64e9.js";import"./context-381ba8f5.js";import"./useButton-99d838a5.js";import"./OverlayArrow-8cd3bb56.js";import"./Info-951dbf71.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
