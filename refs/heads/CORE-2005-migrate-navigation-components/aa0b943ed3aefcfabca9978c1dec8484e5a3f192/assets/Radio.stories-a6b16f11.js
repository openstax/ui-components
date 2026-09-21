import{s as n,j as e,F as d,a as o}from"./index-1148d1b3.js";import{R as i}from"./Radio-abd648d3.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-8814be58.js";import"./Button-c60fcf49.js";import"./useFocusRing-0593752c.js";import"./Hidden-d2f1bd99.js";import"./useButton-e6f10b9f.js";import"./OverlayArrow-a0e253c9.js";import"./context-cf676c38.js";import"./Info-618d11e1.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
