import{s as n,j as e,F as d,a as o}from"./index-496f6db0.js";import{R as i}from"./Radio-789acca1.js";import"./Tooltip-1e6e4e7c.js";import"./Button-daf65346.js";import"./useFocusRing-6c24074e.js";import"./Hidden-b4434b8d.js";import"./useFocusable-c78b504f.js";import"./useButton-adc8cf45.js";import"./OverlayArrow-575df714.js";import"./context-a77db222.js";import"./Info-01b9b6dc.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
