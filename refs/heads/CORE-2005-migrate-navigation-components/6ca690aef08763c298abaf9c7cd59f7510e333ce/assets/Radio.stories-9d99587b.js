import{s as n,j as e,F as d,a as o}from"./index-3d0a9b78.js";import{R as i}from"./Radio-998f7346.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-8fa37ab4.js";import"./Button-a5629a39.js";import"./useFocusRing-e6b2b871.js";import"./context-8a917c2e.js";import"./useButton-36b3396b.js";import"./OverlayArrow-4a1e9b62.js";import"./Info-6aedb7ee.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
