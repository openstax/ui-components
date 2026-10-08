import{s as n,a as e,F as d,j as o}from"./index-27a37ae4.js";import{R as i}from"./Radio-8080d692.js";import"./Tooltip-451a2c5d.js";import"./Button-a0e42173.js";import"./useFocusRing-992a72ab.js";import"./Hidden-5f062f40.js";import"./useFocusable-1f85ae3d.js";import"./useButton-4b50a776.js";import"./OverlayArrow-0581deb9.js";import"./context-74b30e95.js";import"./Info-dc3d3cb8.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
