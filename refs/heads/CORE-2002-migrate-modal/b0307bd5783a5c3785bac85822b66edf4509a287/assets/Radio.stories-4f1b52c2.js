import{s as n,j as e,F as d,a as o}from"./index-440830f5.js";import{R as i}from"./Radio-432ad044.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-b875aaab.js";import"./Button-06c74855.js";import"./useFocusRing-9cdb6345.js";import"./context-b520289c.js";import"./useButton-f01b5560.js";import"./OverlayArrow-d4ec99dc.js";import"./Info-fab2eb45.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
