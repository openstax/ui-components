import{s as n,j as e,F as d,a as o}from"./index-e717459e.js";import{R as i}from"./Radio-9bcec667.js";import"./Tooltip-4fd3ffc7.js";import"./Button-3269081f.js";import"./useFocusRing-abe4deb6.js";import"./Hidden-d9cf3262.js";import"./useFocusable-8569acbe.js";import"./useButton-ed661356.js";import"./OverlayArrow-a5efea00.js";import"./context-43c1acb3.js";import"./Info-5ffd92ff.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
