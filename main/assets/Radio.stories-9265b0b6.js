import{s as n,a as e,F as d,j as o}from"./index-6acc4f7b.js";import{R as i}from"./Radio-2456f294.js";import"./Tooltip-48c38a9f.js";import"./Button-e2664bef.js";import"./useFocusRing-cd88d2a6.js";import"./Hidden-3605fa22.js";import"./useFocusable-6043aeb9.js";import"./useButton-7dc7f274.js";import"./OverlayArrow-319f4114.js";import"./context-3784d79d.js";import"./Info-bf2f541b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
