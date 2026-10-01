import{s as n,j as e,F as d,a as o}from"./index-d111eead.js";import{R as i}from"./Radio-59ef441e.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-7f34eb17.js";import"./Button-ac4835cf.js";import"./useFocusRing-7ab4da3a.js";import"./Hidden-f313aff2.js";import"./useFocusable-ce5f4563.js";import"./useButton-9c332c5f.js";import"./OverlayArrow-74d87d95.js";import"./context-a6142a90.js";import"./Info-c951f121.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
