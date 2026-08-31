import{s as n,j as e,F as d,a as o}from"./index-788b202e.js";import{R as i}from"./Radio-8a05ba88.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-39ad58c3.js";import"./Button-ca8ea009.js";import"./useFocusRing-fbe4d19f.js";import"./context-373662f9.js";import"./useButton-56df494a.js";import"./OverlayArrow-651a8f8c.js";import"./Info-8dd1c313.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
