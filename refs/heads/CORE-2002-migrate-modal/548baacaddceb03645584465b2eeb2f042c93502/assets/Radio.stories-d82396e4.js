import{s as n,j as e,F as d,a as o}from"./index-6bfea2ef.js";import{R as i}from"./Radio-b9ac0f55.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-dfdafa78.js";import"./Button-27eb6d92.js";import"./useFocusRing-ee919d4b.js";import"./context-aaac409d.js";import"./useButton-6ca7a259.js";import"./OverlayArrow-8bd47e16.js";import"./Info-bd84d4ac.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
