import{s as n,j as e,F as d,a as o}from"./index-465937a0.js";import{R as i}from"./Radio-0c5c20e6.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-772c7c96.js";import"./Button-e8801a15.js";import"./useFocusRing-36be91e7.js";import"./context-b686fbb5.js";import"./useButton-6ce4abf3.js";import"./OverlayArrow-c4600e30.js";import"./Info-5fb6b5f6.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
