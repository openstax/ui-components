import{s as n,a as e,F as d,j as o}from"./index-ee8f85d8.js";import{R as i}from"./Radio-f8045b9e.js";import"./Tooltip-de0ef1e2.js";import"./Button-2a4e2371.js";import"./useFocusRing-ecc66b24.js";import"./Hidden-7d3bd3ff.js";import"./useFocusable-661bbd4a.js";import"./useButton-2612e899.js";import"./OverlayArrow-21c5b688.js";import"./context-1657acc9.js";import"./useControlledState-2cf3e814.js";import"./Info-561f2896.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
