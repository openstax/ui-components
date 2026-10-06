import{s as n,j as e,F as d,a as o}from"./index-d0eeff93.js";import{R as i}from"./Radio-5dd5b5fd.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-7ee8aa4e.js";import"./Button-62b42310.js";import"./useFocusRing-c035528e.js";import"./Hidden-b412fcc7.js";import"./useFocusable-ef53625b.js";import"./useButton-a32c83ad.js";import"./OverlayArrow-d4739839.js";import"./context-9c95bfe4.js";import"./Info-4d89f43f.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
