import{s as n,a as e,F as d,j as o}from"./index-b8fecdff.js";import{R as i}from"./Radio-15ef4682.js";import"./Tooltip-30b78e0a.js";import"./Button-53c3df22.js";import"./useFocusRing-8b6330ef.js";import"./Hidden-67b3a137.js";import"./useFocusable-01bf876d.js";import"./useButton-f758c6e3.js";import"./OverlayArrow-7fb5ef0b.js";import"./context-1decece7.js";import"./useControlledState-13c08256.js";import"./Info-8bb291b8.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
