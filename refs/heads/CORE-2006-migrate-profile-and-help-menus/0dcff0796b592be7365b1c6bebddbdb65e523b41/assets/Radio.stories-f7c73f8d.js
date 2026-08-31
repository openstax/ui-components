import{s as n,j as e,F as d,a as o}from"./index-902f1469.js";import{R as i}from"./Radio-62b892fe.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./Tooltip-25e87a3a.js";import"./Button-3c404b9a.js";import"./useFocusRing-66f2b1cb.js";import"./context-5ec8525c.js";import"./useButton-7d405c6c.js";import"./OverlayArrow-af645a22.js";import"./Info-a935cdf2.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
