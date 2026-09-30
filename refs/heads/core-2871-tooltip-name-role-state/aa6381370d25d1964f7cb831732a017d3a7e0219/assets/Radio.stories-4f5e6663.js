import{s as n,j as e,F as d,a as o}from"./index-67da3d90.js";import{R as i}from"./Radio-d3388591.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-9d5d0cf1.js";import"./Button-e6f97bf6.js";import"./useFocusRing-06e96683.js";import"./Hidden-a512ccc2.js";import"./useFocusable-2993afc6.js";import"./useButton-da00c26a.js";import"./OverlayArrow-aaada6e3.js";import"./context-00361e80.js";import"./Info-178e0d76.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
