import{s as n,j as e,F as d,a as o}from"./index-de148dac.js";import{R as i}from"./Radio-b6f82407.js";import"./Tooltip-ae3c3100.js";import"./Button-d55d6056.js";import"./useFocusRing-e62db5dc.js";import"./Hidden-83927821.js";import"./useFocusable-ce3aa423.js";import"./useButton-b4292c4f.js";import"./OverlayArrow-7455fbc0.js";import"./context-e075e21b.js";import"./Info-19c19e06.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
