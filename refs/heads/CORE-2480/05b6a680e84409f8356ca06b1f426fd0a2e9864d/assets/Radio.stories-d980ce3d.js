import{s as n,j as e,F as d,a as o}from"./index-a4575406.js";import{R as i}from"./Radio-fd8df445.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-053d658d.js";import"./Button-96627a8e.js";import"./useFocusRing-1050d8be.js";import"./Hidden-4251ac3c.js";import"./useFocusable-3e37605e.js";import"./useButton-e78ffb32.js";import"./OverlayArrow-cf6fab05.js";import"./context-d841ad98.js";import"./Info-b27ce3f3.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
