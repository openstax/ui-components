import{s as n,j as e,F as d,a as o}from"./index-b3b079aa.js";import{R as i}from"./Radio-a25b6a99.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-0adfdaf0.js";import"./Button-ea421c75.js";import"./useFocusRing-cb19943c.js";import"./Hidden-e693f5c9.js";import"./useFocusable-e876d28e.js";import"./useButton-0c74c601.js";import"./OverlayArrow-cb5085ea.js";import"./context-e7cc9ad4.js";import"./Info-99affcdb.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
