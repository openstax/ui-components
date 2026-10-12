import{s as n,a as e,F as d,j as o}from"./index-f25db6dc.js";import{R as i}from"./Radio-431c7481.js";import"./Tooltip-def9175a.js";import"./Button-ed256d35.js";import"./useFocusRing-b01537ef.js";import"./Hidden-26992418.js";import"./useFocusable-1ba6c578.js";import"./useButton-4c626784.js";import"./OverlayArrow-9134ecc2.js";import"./context-8f59d9b9.js";import"./useControlledState-17b726ed.js";import"./Info-9495335c.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
