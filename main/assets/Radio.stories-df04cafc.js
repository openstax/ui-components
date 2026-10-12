import{s as n,a as e,F as d,j as o}from"./index-2dbb6519.js";import{R as i}from"./Radio-6e29cbfd.js";import"./Tooltip-e1336bcb.js";import"./Button-b9b61518.js";import"./useFocusRing-08ff0628.js";import"./Hidden-5eec95d8.js";import"./useFocusable-1c77d520.js";import"./useButton-5579bc6e.js";import"./OverlayArrow-60ac834a.js";import"./context-a1d4a505.js";import"./useControlledState-a45cec16.js";import"./Info-18073dd2.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
