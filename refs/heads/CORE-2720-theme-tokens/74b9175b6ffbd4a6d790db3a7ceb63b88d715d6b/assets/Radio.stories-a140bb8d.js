import{s as n,j as e,F as d,a as o}from"./index-e7b956bc.js";import{R as i}from"./Radio-5b122a37.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-4a8cdeb8.js";import"./Button-abe201fb.js";import"./useFocusRing-4aae80b4.js";import"./Hidden-37f46b48.js";import"./useButton-9c7e8bce.js";import"./OverlayArrow-0176614e.js";import"./context-8aa3223e.js";import"./Info-3a937618.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
