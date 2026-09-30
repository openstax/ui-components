import{s as n,j as e,F as d,a as o}from"./index-d6fe054b.js";import{R as i}from"./Radio-8d0bcede.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-69291c7e.js";import"./Button-626a7020.js";import"./useFocusRing-077a2d60.js";import"./Hidden-4488e1dc.js";import"./useButton-1de02850.js";import"./OverlayArrow-b96eab31.js";import"./context-8f09d34e.js";import"./Info-c8e6b9f5.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
