import{s as n,j as e,F as d,a as o}from"./index-8213ebad.js";import{R as i}from"./Radio-bec37464.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-8e13b486.js";import"./Button-76b815ee.js";import"./useFocusRing-bc6ad164.js";import"./Hidden-c66cdf4b.js";import"./useButton-dabc3721.js";import"./OverlayArrow-22e8f685.js";import"./context-71bdb8cb.js";import"./Info-8467f822.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
