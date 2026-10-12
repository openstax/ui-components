import{s as n,a as e,F as d,j as o}from"./index-2cbd6bb1.js";import{R as i}from"./Radio-3e74a889.js";import"./Tooltip-9bc55d30.js";import"./Button-e5bde036.js";import"./useFocusRing-d048c8ef.js";import"./Hidden-e58a571c.js";import"./useFocusable-5b8b260f.js";import"./useButton-d2bf02b7.js";import"./OverlayArrow-fa3be30b.js";import"./context-1c0d232e.js";import"./useControlledState-da326e8c.js";import"./Info-907290e7.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
