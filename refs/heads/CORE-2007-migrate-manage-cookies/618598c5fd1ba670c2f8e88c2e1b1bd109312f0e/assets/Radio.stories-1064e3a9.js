import{s as n,j as e,F as d,a as o}from"./index-39bc29f6.js";import{R as i}from"./Radio-8f7fa868.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-ed993714.js";import"./Button-a8f6b79a.js";import"./useFocusRing-6cc1ca05.js";import"./context-53995cf9.js";import"./useButton-bf552268.js";import"./OverlayArrow-93b3184b.js";import"./Info-2f2bd25d.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
