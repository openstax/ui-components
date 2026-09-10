import{s as n,j as e,F as d,a as o}from"./index-45a59036.js";import{R as i}from"./Radio-a8b1fdba.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-2752473b.js";import"./Button-9b2d43f9.js";import"./useFocusRing-76b7caf7.js";import"./Hidden-033ed3e2.js";import"./useButton-c6925f2a.js";import"./OverlayArrow-77ca687c.js";import"./context-9f25fc9c.js";import"./Info-abf61787.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
