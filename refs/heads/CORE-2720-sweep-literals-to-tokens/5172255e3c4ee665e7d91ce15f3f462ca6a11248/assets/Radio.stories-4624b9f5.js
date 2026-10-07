import{s as n,j as e,F as d,a as o}from"./index-5c4a7fe3.js";import{R as i}from"./Radio-eef3af96.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-71f558fc.js";import"./Button-7b3bdb0a.js";import"./useFocusRing-f616c5c6.js";import"./Hidden-4f6ef5b8.js";import"./useFocusable-0a7b6916.js";import"./useButton-cb4c8120.js";import"./OverlayArrow-466bbc91.js";import"./context-562d9161.js";import"./Info-fa7877c4.js";/* empty css              */const l=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(l,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),j=()=>e(d,{children:a({name:"default"})}),y=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),r=t=>o(l,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),L=()=>o(d,{children:[r({name:"disabled"}),r({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{j as Default,L as Disabled,y as WithTooltip};
