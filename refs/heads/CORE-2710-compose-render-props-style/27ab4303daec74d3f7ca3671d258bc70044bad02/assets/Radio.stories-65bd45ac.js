import{s as n,j as e,F as d,a as o}from"./index-b5f085ea.js";import{R as i}from"./Radio-68f5f37c.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-3dd70e86.js";import"./Button-82b259a0.js";import"./useFocusRing-3bafb743.js";import"./context-7121fb22.js";import"./useButton-c7bbb411.js";import"./OverlayArrow-61d5883d.js";import"./Info-c93473d6.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
