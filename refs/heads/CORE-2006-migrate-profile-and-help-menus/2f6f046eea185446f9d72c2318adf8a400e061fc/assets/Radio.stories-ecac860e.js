import{s as n,j as e,F as d,a as o}from"./index-6cdbf030.js";import{R as i}from"./Radio-efcbe0ba.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./Tooltip-6943920a.js";import"./Button-fb23e0bb.js";import"./useFocusRing-ab45b441.js";import"./context-2579df2b.js";import"./useButton-fcb28e67.js";import"./OverlayArrow-ad9eaade.js";import"./Info-1851eedf.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
