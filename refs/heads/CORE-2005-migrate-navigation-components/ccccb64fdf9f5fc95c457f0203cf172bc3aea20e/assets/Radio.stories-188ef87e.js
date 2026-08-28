import{s as n,j as e,F as d,a as o}from"./index-1c4517cb.js";import{R as i}from"./Radio-1dbfdcf7.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-bfb4916b.js";import"./Button-899e193f.js";import"./useFocusRing-fa44e90f.js";import"./context-9d4dcb09.js";import"./useButton-8bfef6cb.js";import"./OverlayArrow-0a1f0e60.js";import"./Info-cf6859e8.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
