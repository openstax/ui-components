import{s as n,j as e,F as d,a as o}from"./index-c5fec281.js";import{R as i}from"./Radio-dfa9fd04.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-e650a7a1.js";import"./Button-56122d06.js";import"./useFocusRing-3318340f.js";import"./context-e8998d0f.js";import"./useButton-8ec990f5.js";import"./OverlayArrow-c8ef7d9e.js";import"./Info-7ced8f0b.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
