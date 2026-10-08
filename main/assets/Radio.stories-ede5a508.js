import{s as n,j as e,F as d,a as o}from"./index-ca130553.js";import{R as i}from"./Radio-4f90c86f.js";import"./Tooltip-9e689023.js";import"./Button-9e6b4983.js";import"./useFocusRing-1bfe340b.js";import"./Hidden-75806909.js";import"./useFocusable-4c549905.js";import"./useButton-c7a7e3df.js";import"./OverlayArrow-aadf3c4a.js";import"./context-08ebc9d2.js";import"./Info-52780cbf.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
