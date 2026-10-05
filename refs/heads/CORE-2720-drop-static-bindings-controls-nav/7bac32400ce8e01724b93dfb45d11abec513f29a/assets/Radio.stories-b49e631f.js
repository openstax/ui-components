import{s as n,j as e,F as d,a as o}from"./index-42b5f5b1.js";import{R as i}from"./Radio-891d63e4.js";import"./Tooltip-fc5b469b.js";import"./Button-8a07c9f1.js";import"./useFocusRing-70ab3480.js";import"./Hidden-cf0d224c.js";import"./useFocusable-078882e4.js";import"./useButton-fcda04db.js";import"./OverlayArrow-31c946c5.js";import"./context-86f6238f.js";import"./Info-a475407c.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
