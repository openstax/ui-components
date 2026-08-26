import{s as n,j as e,F as d,a as o}from"./index-bae51aee.js";import{R as i}from"./Radio-bf1e2a30.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-51380402.js";import"./Button-adb1df59.js";import"./useFocusRing-a4fca5a3.js";import"./context-0ad5bf8e.js";import"./useButton-22b589a2.js";import"./OverlayArrow-392c612d.js";import"./Info-05704d2d.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
