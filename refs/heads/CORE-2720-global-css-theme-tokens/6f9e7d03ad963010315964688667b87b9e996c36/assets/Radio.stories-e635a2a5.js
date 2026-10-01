import{s as n,j as e,F as d,a as o}from"./index-b07cf1ee.js";import{R as i}from"./Radio-f5b84f48.js";import"./Tooltip-92df281a.js";import"./Button-f6edc5ce.js";import"./useFocusRing-191f8b7d.js";import"./Hidden-94d00f79.js";import"./useFocusable-51a5db58.js";import"./useButton-a6b3f5b4.js";import"./OverlayArrow-2bb3b8e6.js";import"./context-b89d176e.js";import"./Info-cc165acb.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
