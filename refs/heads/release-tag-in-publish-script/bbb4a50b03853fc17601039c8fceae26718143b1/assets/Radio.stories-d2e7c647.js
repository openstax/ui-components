import{s as n,a as e,F as d,j as o}from"./index-95baafca.js";import{R as i}from"./Radio-b55310bd.js";import"./Tooltip-44aed743.js";import"./Button-e39f65f9.js";import"./useFocusRing-f9f4a01b.js";import"./Hidden-b9734d08.js";import"./useFocusable-07f6b51a.js";import"./useButton-26c6fdc4.js";import"./OverlayArrow-9d151112.js";import"./context-6436d33a.js";import"./useControlledState-bd0e6bef.js";import"./Info-cc082ee1.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
