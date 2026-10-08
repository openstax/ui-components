import{s as n,j as e,F as d,a as o}from"./index-0ec533db.js";import{R as i}from"./Radio-c9216b49.js";import"./Tooltip-1639a296.js";import"./Button-e59b6048.js";import"./useFocusRing-3818e8f4.js";import"./Hidden-b9e7a86a.js";import"./useFocusable-f9e73eaa.js";import"./useButton-9ed9d95c.js";import"./OverlayArrow-a4b3383c.js";import"./context-13d3a0b3.js";import"./Info-76f6b4f7.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
