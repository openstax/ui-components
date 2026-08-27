import{s as n,j as e,F as d,a as o}from"./index-82ae8bbf.js";import{R as i}from"./Radio-b736e186.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-14ec4110.js";import"./Button-6aeeda0e.js";import"./useFocusRing-6af8ce7d.js";import"./Hidden-a42d9e9a.js";import"./useButton-9098b094.js";import"./OverlayArrow-4d99f132.js";import"./context-48143e3d.js";import"./Info-414bc9f7.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
