import{s as n,j as e,F as d,a as o}from"./index-3cc9c786.js";import{R as i}from"./Radio-a96670c0.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-c1df892d.js";import"./Button-e3ad5626.js";import"./useFocusRing-fc027e0e.js";import"./Hidden-453f41bc.js";import"./useButton-a51c2f63.js";import"./OverlayArrow-0ac292b5.js";import"./context-28a935ee.js";import"./Info-ad264065.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
