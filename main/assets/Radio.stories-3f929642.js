import{s as n,j as e,F as d,a as o}from"./index-3aa08829.js";import{R as i}from"./Radio-249ca993.js";import"./Tooltip-c26c80a4.js";import"./Button-e802d63c.js";import"./useFocusRing-a467b081.js";import"./Hidden-aac42237.js";import"./useFocusable-3330bcd6.js";import"./useButton-0d750b61.js";import"./OverlayArrow-ec665fe4.js";import"./context-bd2d7cc5.js";import"./Info-1654d4c9.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
