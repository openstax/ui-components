import{s as n,j as e,F as d,a as o}from"./index-2fab6fd0.js";import{R as i}from"./Radio-0974c9ad.js";import"./Tooltip-a2d32f4d.js";import"./Button-b6afdcc0.js";import"./useFocusRing-37100d60.js";import"./Hidden-a9520704.js";import"./useFocusable-8b6c3a25.js";import"./useButton-6ae0c938.js";import"./OverlayArrow-be68ec23.js";import"./context-2a26ca7e.js";import"./Info-ef32f855.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
