import{s as n,j as e,F as d,a as o}from"./index-771b0097.js";import{R as i}from"./Radio-208d8933.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-d3b80ee8.js";import"./Button-b04771e9.js";import"./useFocusRing-2ebcd9b7.js";import"./Hidden-1a6bb5c1.js";import"./useButton-b790afb2.js";import"./OverlayArrow-995268a8.js";import"./context-9d31b229.js";import"./Info-9834b286.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
