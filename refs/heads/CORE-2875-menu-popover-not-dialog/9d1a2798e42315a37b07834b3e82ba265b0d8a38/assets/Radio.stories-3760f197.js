import{s as n,j as e,F as d,a as o}from"./index-cf1c6d5f.js";import{R as i}from"./Radio-62b1b774.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-fab89863.js";import"./Button-f6fd2919.js";import"./useFocusRing-a987dc19.js";import"./Hidden-5c7b0413.js";import"./useButton-2d56cb9e.js";import"./OverlayArrow-645479df.js";import"./context-738af7f3.js";import"./Info-7e0a3b18.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
