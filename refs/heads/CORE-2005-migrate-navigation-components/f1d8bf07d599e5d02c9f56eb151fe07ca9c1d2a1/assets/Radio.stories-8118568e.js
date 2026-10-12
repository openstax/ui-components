import{s as n,a as e,F as d,j as o}from"./index-dbfd0ad9.js";import{R as i}from"./Radio-8ff236f5.js";import"./Tooltip-b52d5d00.js";import"./Button-b15de4c3.js";import"./useFocusRing-d79144d6.js";import"./Hidden-ba206709.js";import"./useFocusable-d2a8521a.js";import"./useButton-1446b439.js";import"./OverlayArrow-ac27701f.js";import"./context-80916188.js";import"./useControlledState-ac3c8719.js";import"./Info-9fba71bc.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
