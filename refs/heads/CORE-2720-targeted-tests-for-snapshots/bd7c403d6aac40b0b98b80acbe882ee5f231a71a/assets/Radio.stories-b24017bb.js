import{s as n,j as e,F as d,a as o}from"./index-c04b4447.js";import{R as i}from"./Radio-3eb5b09c.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-e1c73166.js";import"./Button-d9826ded.js";import"./useFocusRing-d4c292bc.js";import"./Hidden-3a34ca40.js";import"./useFocusable-d89abb9a.js";import"./useButton-445f8282.js";import"./OverlayArrow-f36853b7.js";import"./context-fc69c589.js";import"./Info-847963a2.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
