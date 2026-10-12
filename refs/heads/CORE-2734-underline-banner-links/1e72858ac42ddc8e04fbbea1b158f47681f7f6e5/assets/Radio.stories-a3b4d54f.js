import{s as n,a as e,F as d,j as o}from"./index-66a26920.js";import{R as i}from"./Radio-aeb4100c.js";import"./Tooltip-a9a3d63e.js";import"./Button-34510a07.js";import"./useFocusRing-990ce471.js";import"./Hidden-20b05c83.js";import"./useFocusable-30896c60.js";import"./useButton-d30272f0.js";import"./OverlayArrow-fa74d023.js";import"./context-977f68b2.js";import"./useControlledState-648466f9.js";import"./Info-fad419e4.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
