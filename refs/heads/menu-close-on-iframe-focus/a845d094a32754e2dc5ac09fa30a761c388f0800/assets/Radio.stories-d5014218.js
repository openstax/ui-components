import{s as n,a as e,F as d,j as o}from"./index-01450b2c.js";import{R as i}from"./Radio-e0dabbb5.js";import"./Tooltip-7821c551.js";import"./Button-8d13f44b.js";import"./useFocusRing-8545f646.js";import"./Hidden-84ac152f.js";import"./useFocusable-2ddeaa53.js";import"./useButton-a558328a.js";import"./OverlayArrow-10098b8f.js";import"./context-93721291.js";import"./useControlledState-b543763c.js";import"./Info-cb8a9038.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
