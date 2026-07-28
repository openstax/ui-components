import{s as n,j as e,F as d,a as o}from"./index-bfa6cfd8.js";import{R as i}from"./Radio-bab47907.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-c08db464.js";import"./Button-4c2531af.js";import"./useFocusRing-e7a07748.js";import"./context-62f02d8d.js";import"./useButton-38f19fa3.js";import"./OverlayArrow-d0b6551d.js";import"./Info-b19b7b9f.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
