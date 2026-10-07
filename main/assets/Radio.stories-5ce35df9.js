import{s as n,j as e,F as d,a as o}from"./index-89f0057f.js";import{R as i}from"./Radio-833d96d1.js";import"./Tooltip-1ab9786b.js";import"./Button-d2a9785f.js";import"./useFocusRing-6a2857f1.js";import"./Hidden-13350c24.js";import"./useFocusable-c9d9f24a.js";import"./useButton-77cc8ec9.js";import"./OverlayArrow-a57d3c31.js";import"./context-d9609410.js";import"./Info-c2ae72bf.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
