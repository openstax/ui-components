import{s as n,j as e,F as d,a as o}from"./index-2209e7c5.js";import{R as i}from"./Radio-231d5cb7.js";import"./Tooltip-af428ed8.js";import"./Button-c9d14711.js";import"./useFocusRing-5e731e0c.js";import"./Hidden-c3c5ede1.js";import"./useFocusable-e6cf46b8.js";import"./useButton-91c414db.js";import"./OverlayArrow-583d90cc.js";import"./context-43eff3d8.js";import"./Info-ea8f8b5e.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
