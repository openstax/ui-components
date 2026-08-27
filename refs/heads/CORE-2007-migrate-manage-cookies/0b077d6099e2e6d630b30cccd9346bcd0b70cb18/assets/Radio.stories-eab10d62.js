import{s as n,j as e,F as d,a as o}from"./index-2712b3cb.js";import{R as i}from"./Radio-504a7394.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-3f1d2027.js";import"./Button-4935ba7e.js";import"./useFocusRing-5b5e1e4e.js";import"./context-1a71db3d.js";import"./useButton-45780e55.js";import"./OverlayArrow-fb2f07be.js";import"./Info-777efcab.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
