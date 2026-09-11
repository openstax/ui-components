import{s as n,j as e,F as d,a as o}from"./index-4213ba27.js";import{R as i}from"./Radio-d9d1806d.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-07fd4bbe.js";import"./Button-92f2a88f.js";import"./useFocusRing-1b72058d.js";import"./Hidden-6efa0f33.js";import"./useButton-0d0ec44f.js";import"./OverlayArrow-39b94806.js";import"./context-fd76b7f3.js";import"./Info-c8c8b924.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
