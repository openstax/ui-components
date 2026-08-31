import{s as n,j as e,F as d,a as o}from"./index-4f7e923e.js";import{R as i}from"./Radio-194a4efe.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./Tooltip-2bb6b438.js";import"./Button-cbd6e0a7.js";import"./useFocusRing-dcf6ca9b.js";import"./context-3464ed93.js";import"./useButton-c6632430.js";import"./OverlayArrow-30014d30.js";import"./Info-5c4ff5cb.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
