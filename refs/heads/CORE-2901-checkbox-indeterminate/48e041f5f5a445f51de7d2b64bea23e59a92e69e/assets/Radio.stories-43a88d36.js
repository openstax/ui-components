import{s as n,j as e,F as d,a as o}from"./index-f0b53669.js";import{R as i}from"./Radio-2a13df66.js";import"./Tooltip-c447fd89.js";import"./Button-3e74280f.js";import"./useFocusRing-490b4e79.js";import"./Hidden-4f48b37a.js";import"./useFocusable-3955cbd6.js";import"./useButton-710678ed.js";import"./OverlayArrow-22c84e69.js";import"./context-b1891223.js";import"./Info-3e9bc1b8.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
