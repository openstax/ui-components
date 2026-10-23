import{s as n,a as e,F as d,j as o}from"./index-5e66f678.js";import{R as i}from"./Radio-e790ef43.js";import"./Tooltip-a19164c9.js";import"./Button-52383308.js";import"./useFocusRing-43eae5fe.js";import"./Hidden-eecd9fc1.js";import"./useFocusable-58d3cebe.js";import"./useButton-97ef3e57.js";import"./OverlayArrow-db869afb.js";import"./context-60e33871.js";import"./useControlledState-23f79d4d.js";import"./Info-4831eb43.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
