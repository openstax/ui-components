import{s as n,j as e,F as d,a as o}from"./index-1367334a.js";import{R as i}from"./Radio-8dc74166.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-973d4f06.js";import"./Button-a30ea8bc.js";import"./useFocusRing-600f5fb0.js";import"./context-766a570b.js";import"./useButton-10ff610f.js";import"./OverlayArrow-f2f29fdd.js";import"./Info-4c2ede82.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
