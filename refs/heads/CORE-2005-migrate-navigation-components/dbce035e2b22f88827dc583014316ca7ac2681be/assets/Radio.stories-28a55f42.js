import{s as n,j as e,F as d,a as o}from"./index-48a22ada.js";import{R as i}from"./Radio-fe17d7e5.js";import"./Tooltip-f451e883.js";import"./Button-20f9376f.js";import"./useFocusRing-a9eaccac.js";import"./Hidden-bb45d810.js";import"./useFocusable-2a6e9f1c.js";import"./useButton-20987226.js";import"./OverlayArrow-f3d2c316.js";import"./context-007e99e0.js";import"./Info-d2750b9e.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
