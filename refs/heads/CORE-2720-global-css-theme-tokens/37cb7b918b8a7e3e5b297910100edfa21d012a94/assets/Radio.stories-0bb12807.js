import{s as n,j as e,F as d,a as o}from"./index-32a2a8d8.js";import{R as i}from"./Radio-e060911c.js";import"./Tooltip-9127ad7c.js";import"./Button-41c19099.js";import"./useFocusRing-97a1e14c.js";import"./Hidden-c99c870e.js";import"./useFocusable-1a8bec85.js";import"./useButton-ae8df2d3.js";import"./OverlayArrow-9fcff4a2.js";import"./context-20fbd935.js";import"./Info-4b353a2c.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
