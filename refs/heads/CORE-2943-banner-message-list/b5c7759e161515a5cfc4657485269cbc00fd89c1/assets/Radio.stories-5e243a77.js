import{s as n,a as e,F as d,j as o}from"./index-ce98c68e.js";import{R as i}from"./Radio-85ed41e3.js";import"./Tooltip-299863f9.js";import"./Button-49b4fae4.js";import"./useFocusRing-c24f9b1a.js";import"./Hidden-1dff1183.js";import"./useFocusable-c5d2db78.js";import"./useButton-5cf8e74b.js";import"./OverlayArrow-745fb663.js";import"./context-8eee1b68.js";import"./useControlledState-c7e0ea39.js";import"./Info-229e6365.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
