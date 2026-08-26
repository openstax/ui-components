import{s as n,j as e,F as d,a as o}from"./index-f0add398.js";import{R as i}from"./Radio-85d82f0b.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-0bb2028b.js";import"./Button-292b7e53.js";import"./useFocusRing-ac7f6a4f.js";import"./context-1e6d14eb.js";import"./useButton-63415e35.js";import"./OverlayArrow-a727c75d.js";import"./Info-cff59b6f.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
