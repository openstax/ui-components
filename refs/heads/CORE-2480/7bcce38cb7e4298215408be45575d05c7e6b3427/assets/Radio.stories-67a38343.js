import{s as n,j as e,F as d,a as o}from"./index-247519cd.js";import{R as i}from"./Radio-c6dde025.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-e8f6bdc3.js";import"./Button-d1709670.js";import"./useFocusRing-7bb3bea8.js";import"./Hidden-7174d28c.js";import"./useFocusable-fe993404.js";import"./useButton-b2dbc196.js";import"./OverlayArrow-aa974deb.js";import"./context-4c5e90e1.js";import"./Info-019784a3.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
