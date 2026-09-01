import{s as n,j as e,F as d,a as o}from"./index-92cb9a38.js";import{R as i}from"./Radio-8cf456bb.js";import"./theme-a67f9953.js";import"./palette-12edeb86.js";import"./Tooltip-634a2ec0.js";import"./Button-310cf512.js";import"./useFocusRing-fa3214a0.js";import"./Hidden-f48c7e99.js";import"./useButton-eea976f2.js";import"./OverlayArrow-f1c48456.js";import"./context-2b4760a4.js";import"./Info-2066c16a.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
