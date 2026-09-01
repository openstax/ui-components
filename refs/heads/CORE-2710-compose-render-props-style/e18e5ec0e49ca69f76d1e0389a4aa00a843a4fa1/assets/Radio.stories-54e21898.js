import{s as n,j as e,F as d,a as o}from"./index-f5c32e7c.js";import{R as i}from"./Radio-1d0bb7f0.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-f7b55f83.js";import"./Button-86c1e656.js";import"./useFocusRing-e6223fce.js";import"./Hidden-7c879882.js";import"./useButton-e53c231d.js";import"./OverlayArrow-a0e1406d.js";import"./context-6d802a82.js";import"./Info-0388ec23.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
