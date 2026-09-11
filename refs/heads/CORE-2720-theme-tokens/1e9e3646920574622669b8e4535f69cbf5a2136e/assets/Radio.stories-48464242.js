import{s as n,j as e,F as d,a as o}from"./index-36157f95.js";import{R as i}from"./Radio-f8559908.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-a8a07422.js";import"./Button-c9936696.js";import"./useFocusRing-9548e559.js";import"./Hidden-8cb80b19.js";import"./useButton-7d4d9c9d.js";import"./OverlayArrow-4ab98306.js";import"./context-f69c089a.js";import"./Info-939e31c1.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
