import{s as n,j as e,F as d,a as o}from"./index-b20d9a9a.js";import{R as i}from"./Radio-a0562148.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-863cea96.js";import"./Button-bd85cfed.js";import"./useFocusRing-6e287732.js";import"./Hidden-cfe8ff9e.js";import"./useButton-036e8a82.js";import"./OverlayArrow-a0a57366.js";import"./context-a36cecb2.js";import"./Info-7844466d.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
