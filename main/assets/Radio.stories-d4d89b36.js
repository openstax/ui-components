import{s as n,a as e,F as d,j as o}from"./index-20fe01b9.js";import{R as i}from"./Radio-5ac846dd.js";import"./Tooltip-e95ff8b6.js";import"./Button-c6e9bbbe.js";import"./useFocusRing-a782d63a.js";import"./Hidden-f461d9fa.js";import"./useFocusable-61da6f43.js";import"./useButton-4f07e4a7.js";import"./OverlayArrow-d9a24e36.js";import"./context-494353b3.js";import"./useControlledState-233446bf.js";import"./Info-175b6630.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
