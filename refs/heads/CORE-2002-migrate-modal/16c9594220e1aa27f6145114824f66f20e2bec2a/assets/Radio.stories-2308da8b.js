import{s as n,j as e,F as d,a as o}from"./index-c16f90e6.js";import{R as i}from"./Radio-ad37078d.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-cda2a5b8.js";import"./Button-a3aebc50.js";import"./useFocusRing-162d2dd0.js";import"./context-1f83f68f.js";import"./useButton-2abd7d1a.js";import"./OverlayArrow-0a03578a.js";import"./Info-cf068ffb.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
