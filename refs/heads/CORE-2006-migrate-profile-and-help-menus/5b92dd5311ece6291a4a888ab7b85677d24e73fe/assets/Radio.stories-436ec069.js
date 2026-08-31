import{s as n,j as e,F as d,a as o}from"./index-2a2117df.js";import{R as i}from"./Radio-77729c7f.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./Tooltip-91712aeb.js";import"./Button-56fe4b5b.js";import"./useFocusRing-fadb0d4c.js";import"./context-574cfb1c.js";import"./useButton-b9f6d9dd.js";import"./OverlayArrow-35dbceee.js";import"./Info-06dcd2cc.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
