import{s as n,a as e,F as d,j as o}from"./index-ce96a072.js";import{R as i}from"./Radio-d5f4704f.js";import"./Tooltip-f6f95aa4.js";import"./Button-25be2b20.js";import"./useFocusRing-856485a0.js";import"./Hidden-d9f92955.js";import"./useFocusable-4234a52f.js";import"./useButton-39974807.js";import"./OverlayArrow-b4c1a784.js";import"./context-3ae1ee90.js";import"./useControlledState-627b6ee0.js";import"./Info-6b44ad06.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
