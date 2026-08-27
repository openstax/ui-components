import{s as n,j as e,F as d,a as o}from"./index-226744e2.js";import{R as i}from"./Radio-ebc22caa.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-13b588d2.js";import"./Button-b4b5c161.js";import"./useFocusRing-b8be1973.js";import"./context-2b9145be.js";import"./useButton-3e2b2aae.js";import"./OverlayArrow-56f8c5aa.js";import"./Info-a474189c.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
