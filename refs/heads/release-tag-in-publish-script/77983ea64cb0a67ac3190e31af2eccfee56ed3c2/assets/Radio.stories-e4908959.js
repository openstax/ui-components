import{s as n,a as e,F as d,j as o}from"./index-e3c652a5.js";import{R as i}from"./Radio-7d37f23b.js";import"./Tooltip-cb59412b.js";import"./Button-6eb4f2c3.js";import"./useFocusRing-498b294f.js";import"./Hidden-7c8d7410.js";import"./useFocusable-5019118a.js";import"./useButton-c4368a2c.js";import"./OverlayArrow-45d81623.js";import"./context-c12ccf2b.js";import"./useControlledState-68f08f2c.js";import"./Info-9578afc0.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
