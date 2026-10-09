import{s as n,j as e,F as d,a as o}from"./index-0ae673e4.js";import{R as i}from"./Radio-b5836278.js";import"./Tooltip-63245750.js";import"./Button-56a55526.js";import"./useFocusRing-061382fd.js";import"./Hidden-2ff2282e.js";import"./useFocusable-d32fa393.js";import"./useButton-4830784e.js";import"./OverlayArrow-5e23b7b2.js";import"./context-222c6b14.js";import"./Info-c4e24a9b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
