import{s as n,a as e,F as d,j as o}from"./index-f374ba2d.js";import{R as i}from"./Radio-94d3dd0f.js";import"./Tooltip-f064e53b.js";import"./Button-9f770b51.js";import"./useFocusRing-ccf85242.js";import"./Hidden-e488aa45.js";import"./useFocusable-466db065.js";import"./useButton-deb6abe8.js";import"./OverlayArrow-9d62b9b8.js";import"./context-748a829a.js";import"./useControlledState-758aaab8.js";import"./Info-5692dcd6.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
