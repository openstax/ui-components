import{s as n,j as e,F as d,a as o}from"./index-04a71309.js";import{R as i}from"./Radio-c932b2a6.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-c662801a.js";import"./Button-9f091e71.js";import"./useFocusRing-bd0baa32.js";import"./Hidden-ea9aea49.js";import"./useButton-aef27423.js";import"./OverlayArrow-06fc1956.js";import"./context-64cf9a79.js";import"./Info-262bf7de.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
