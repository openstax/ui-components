import{s as n,j as e,F as d,a as o}from"./index-5734254e.js";import{R as i}from"./Radio-464a4ee5.js";import"./theme-a67f9953.js";import"./palette-12edeb86.js";import"./Tooltip-cd51f69a.js";import"./Button-345f468f.js";import"./useFocusRing-806159a4.js";import"./Hidden-b2f24860.js";import"./useButton-c6544dee.js";import"./OverlayArrow-e5a11290.js";import"./context-34338731.js";import"./Info-22738544.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
