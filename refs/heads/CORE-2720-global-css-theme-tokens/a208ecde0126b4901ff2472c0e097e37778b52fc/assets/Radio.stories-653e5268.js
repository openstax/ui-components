import{s as n,j as e,F as d,a as o}from"./index-94041605.js";import{R as i}from"./Radio-93814900.js";import"./Tooltip-76d484b2.js";import"./Button-6052709e.js";import"./useFocusRing-3acd48dc.js";import"./Hidden-d9178a04.js";import"./useFocusable-7a3f2343.js";import"./useButton-d6bc1b85.js";import"./OverlayArrow-ee6903d5.js";import"./context-9c204017.js";import"./Info-ec173c59.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
