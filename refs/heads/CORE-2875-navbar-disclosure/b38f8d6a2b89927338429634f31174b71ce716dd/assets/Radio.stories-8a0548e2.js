import{s as n,j as e,F as d,a as o}from"./index-88ed11a1.js";import{R as i}from"./Radio-93a3cd73.js";import"./Tooltip-f933eab7.js";import"./Button-c202e547.js";import"./useFocusRing-4970aa21.js";import"./Hidden-13fa9646.js";import"./useFocusable-088edd17.js";import"./useButton-1677fed7.js";import"./OverlayArrow-392ef6cb.js";import"./context-a06f9f97.js";import"./useControlledState-a278819c.js";import"./Info-33a5878b.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
