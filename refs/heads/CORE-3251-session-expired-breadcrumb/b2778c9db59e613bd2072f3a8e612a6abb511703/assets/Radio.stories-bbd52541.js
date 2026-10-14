import{s as n,a as e,F as d,j as o}from"./index-44b735c3.js";import{R as i}from"./Radio-28408d9d.js";import"./Tooltip-a8ec8deb.js";import"./Button-595a013e.js";import"./useFocusRing-5e04559d.js";import"./Hidden-bcf524e1.js";import"./useFocusable-1ec3f4f5.js";import"./useButton-18fb014c.js";import"./OverlayArrow-8222371f.js";import"./context-32859d2c.js";import"./useControlledState-d18a0eb0.js";import"./Info-a7c88e14.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
