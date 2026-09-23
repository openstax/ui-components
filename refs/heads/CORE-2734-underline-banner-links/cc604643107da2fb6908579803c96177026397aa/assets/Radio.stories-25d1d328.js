import{s as n,j as e,F as d,a as o}from"./index-d304d79a.js";import{R as i}from"./Radio-910d9d90.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-81d0495b.js";import"./Button-5636cdd8.js";import"./useFocusRing-5bae2d4b.js";import"./Hidden-6eac4031.js";import"./useButton-63bd539a.js";import"./OverlayArrow-d13056ca.js";import"./context-4a7f49b0.js";import"./Info-421c4965.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
