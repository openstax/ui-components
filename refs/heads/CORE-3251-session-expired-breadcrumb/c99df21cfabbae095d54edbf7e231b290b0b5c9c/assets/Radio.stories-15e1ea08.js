import{s as n,a as e,F as d,j as o}from"./index-8c3a927e.js";import{R as i}from"./Radio-9b27b3bf.js";import"./Tooltip-5bbe618d.js";import"./Button-1f848c96.js";import"./useFocusRing-7a876f02.js";import"./Hidden-59717a59.js";import"./useFocusable-79ef381e.js";import"./useButton-4c383c6e.js";import"./OverlayArrow-8311ed5e.js";import"./context-5ade2b37.js";import"./useControlledState-416143c4.js";import"./Info-5e9e00ee.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
