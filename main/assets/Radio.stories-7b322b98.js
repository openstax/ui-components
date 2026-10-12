import{s as n,a as e,F as d,j as o}from"./index-faeaa272.js";import{R as i}from"./Radio-c6942778.js";import"./Tooltip-79f23f8a.js";import"./Button-c86d8dbe.js";import"./useFocusRing-f08ae638.js";import"./Hidden-f9c1eed1.js";import"./useFocusable-23f4e5be.js";import"./useButton-b5753c49.js";import"./OverlayArrow-d9689ee2.js";import"./context-d99a1d75.js";import"./useControlledState-b6522f0b.js";import"./Info-e2a50c07.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
