import{s as n,j as e,F as d,a as o}from"./index-fe37af2f.js";import{R as i}from"./Radio-d9345279.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-a12b000a.js";import"./Button-52a5a137.js";import"./useFocusRing-c790c602.js";import"./Hidden-03238e07.js";import"./useFocusable-12f46272.js";import"./useButton-8b3b93d4.js";import"./OverlayArrow-6002e21d.js";import"./context-1de52094.js";import"./Info-ff5cc7f3.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
