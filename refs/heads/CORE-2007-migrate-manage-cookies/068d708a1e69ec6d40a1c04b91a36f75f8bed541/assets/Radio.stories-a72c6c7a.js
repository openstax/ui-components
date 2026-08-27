import{s as n,j as e,F as d,a as o}from"./index-eb83cddb.js";import{R as i}from"./Radio-60781d1a.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-4757bbae.js";import"./Button-b4e93eb8.js";import"./useFocusRing-36033347.js";import"./context-e9c2fce8.js";import"./useButton-e22d0ffe.js";import"./OverlayArrow-303da9e8.js";import"./Info-298c0fad.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
