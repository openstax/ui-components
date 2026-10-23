import{s as n,a as e,F as d,j as o}from"./index-1e01fbdd.js";import{R as i}from"./Radio-90e3f746.js";import"./Tooltip-cee76a46.js";import"./Button-fcbaeefd.js";import"./useFocusRing-d80d6e1e.js";import"./Hidden-6fadf26e.js";import"./useFocusable-44df4c74.js";import"./useButton-4de269ed.js";import"./OverlayArrow-27eabfee.js";import"./context-e0238528.js";import"./useControlledState-759b02f5.js";import"./Info-bd5ec63b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
