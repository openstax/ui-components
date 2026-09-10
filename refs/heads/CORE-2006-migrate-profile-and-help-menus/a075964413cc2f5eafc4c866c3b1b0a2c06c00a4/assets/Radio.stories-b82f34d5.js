import{s as n,j as e,F as d,a as o}from"./index-83b5d49b.js";import{R as i}from"./Radio-82999fc0.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-fa2ca9fc.js";import"./Button-306b018a.js";import"./useFocusRing-8a3d9744.js";import"./Hidden-7c25d3e5.js";import"./useButton-7bafb022.js";import"./OverlayArrow-00a9d371.js";import"./context-5d5ce8c8.js";import"./Info-b79082d1.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
