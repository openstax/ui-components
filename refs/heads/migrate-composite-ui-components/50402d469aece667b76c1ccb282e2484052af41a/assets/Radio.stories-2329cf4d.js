import{s as n,j as e,F as d,a as o}from"./index-5e423046.js";import{R as i}from"./Radio-9d61e990.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-d3e0727b.js";import"./Button-7a3fe4cf.js";import"./useFocusRing-31641249.js";import"./Hidden-6d040365.js";import"./useButton-4c14a3ca.js";import"./OverlayArrow-cd60ecfd.js";import"./context-9bbca4cd.js";import"./Info-f915080b.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
