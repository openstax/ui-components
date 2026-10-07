import{s as n,j as e,F as d,a as o}from"./index-3e5a2201.js";import{R as i}from"./Radio-d649c0ad.js";import"./Tooltip-ee7b4559.js";import"./Button-1b1b5b25.js";import"./useFocusRing-a1a54916.js";import"./Hidden-cbc6510c.js";import"./useFocusable-33170651.js";import"./useButton-b9b913ac.js";import"./OverlayArrow-4c76af55.js";import"./context-b921e199.js";import"./Info-1736273b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
