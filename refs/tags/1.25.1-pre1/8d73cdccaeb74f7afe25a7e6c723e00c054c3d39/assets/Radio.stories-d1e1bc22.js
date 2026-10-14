import{s as n,a as e,F as d,j as o}from"./index-74c98c0d.js";import{R as i}from"./Radio-819a2a0e.js";import"./Tooltip-c28171ca.js";import"./Button-401ee79f.js";import"./useFocusRing-3d844a79.js";import"./Hidden-29f48d17.js";import"./useFocusable-cfecd327.js";import"./useButton-560d34e3.js";import"./OverlayArrow-9064a05e.js";import"./context-47174a68.js";import"./useControlledState-18a3cd1d.js";import"./Info-c6b72858.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
