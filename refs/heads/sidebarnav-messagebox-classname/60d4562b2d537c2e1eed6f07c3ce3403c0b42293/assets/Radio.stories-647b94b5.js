import{s as n,a as e,F as d,j as o}from"./index-d3833305.js";import{R as i}from"./Radio-65ef7386.js";import"./Tooltip-d8ba57da.js";import"./Button-339ebe8d.js";import"./useFocusRing-60f1c3b9.js";import"./Hidden-7f95d112.js";import"./useFocusable-399780c8.js";import"./useButton-296ebca1.js";import"./OverlayArrow-1f9e14b9.js";import"./context-dfa91e1e.js";import"./useControlledState-38db85a4.js";import"./Info-a7757201.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
