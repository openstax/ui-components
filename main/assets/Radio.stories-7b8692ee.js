import{s as n,a as e,F as d,j as o}from"./index-79f2e90d.js";import{R as i}from"./Radio-ddd40a9d.js";import"./Tooltip-9900f414.js";import"./Button-9151465b.js";import"./useFocusRing-837e13db.js";import"./Hidden-da76a2e4.js";import"./useFocusable-94559aeb.js";import"./useButton-9345d12f.js";import"./OverlayArrow-f822de1b.js";import"./context-25ada928.js";import"./useControlledState-2a09ea9e.js";import"./Info-0f354631.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
