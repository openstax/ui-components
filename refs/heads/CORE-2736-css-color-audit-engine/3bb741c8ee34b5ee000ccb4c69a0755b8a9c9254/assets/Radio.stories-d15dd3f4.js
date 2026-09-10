import{s as n,j as e,F as d,a as o}from"./index-daf63fe9.js";import{R as i}from"./Radio-1daef44e.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-11ae2adf.js";import"./Button-54358581.js";import"./useFocusRing-ffd3bf59.js";import"./Hidden-29910d3e.js";import"./useButton-e224df17.js";import"./OverlayArrow-d95b806c.js";import"./context-6b65b76b.js";import"./Info-c1e71696.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
