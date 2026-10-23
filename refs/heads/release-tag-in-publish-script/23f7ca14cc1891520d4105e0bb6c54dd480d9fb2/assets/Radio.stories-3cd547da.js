import{s as n,a as e,F as d,j as o}from"./index-80a2c051.js";import{R as i}from"./Radio-7392300c.js";import"./Tooltip-62df1a34.js";import"./Button-33a3c856.js";import"./useFocusRing-1afb1fbe.js";import"./Hidden-4fa899be.js";import"./useFocusable-7e2ad132.js";import"./useButton-3d87ffd3.js";import"./OverlayArrow-fda1bb8e.js";import"./context-63bf5325.js";import"./useControlledState-2eee5677.js";import"./Info-de958b82.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
