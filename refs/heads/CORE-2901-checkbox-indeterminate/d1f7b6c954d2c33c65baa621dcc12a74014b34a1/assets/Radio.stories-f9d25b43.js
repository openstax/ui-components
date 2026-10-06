import{s as n,j as e,F as d,a as o}from"./index-21813e06.js";import{R as i}from"./Radio-eebecae8.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-f78d6d9b.js";import"./Button-3e68bc5c.js";import"./useFocusRing-98c7385b.js";import"./Hidden-79b9eeda.js";import"./useFocusable-deb04c4f.js";import"./useButton-a41308b6.js";import"./OverlayArrow-29775889.js";import"./context-b9bbbb55.js";import"./Info-8f94749c.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
