import{s as n,a as e,F as d,j as o}from"./index-a6a90855.js";import{R as i}from"./Radio-27a89288.js";import"./Tooltip-c3adc249.js";import"./Button-df33454e.js";import"./useFocusRing-0e591b14.js";import"./Hidden-1a968270.js";import"./useFocusable-e32e6f9f.js";import"./useButton-538983e3.js";import"./OverlayArrow-b463f484.js";import"./context-856ff208.js";import"./useControlledState-44b37627.js";import"./Info-7d1c0a2f.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
