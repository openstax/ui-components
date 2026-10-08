import{s as n,j as e,F as d,a as o}from"./index-2b3cee5d.js";import{R as i}from"./Radio-b98fb1c3.js";import"./Tooltip-d09ee1c5.js";import"./Button-fdb234db.js";import"./useFocusRing-9339b8c0.js";import"./Hidden-0ff76fc0.js";import"./useFocusable-81f53fdf.js";import"./useButton-726bf612.js";import"./OverlayArrow-787b2113.js";import"./context-03cc8480.js";import"./Info-075ea88d.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
