import{s as n,j as e,F as d,a as o}from"./index-24599a65.js";import{R as i}from"./Radio-99b0dd54.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-e92d8c80.js";import"./Button-4adae6f2.js";import"./useFocusRing-ec63e2ee.js";import"./Hidden-e4df40c4.js";import"./useButton-7808b1fa.js";import"./OverlayArrow-ecf5f0a7.js";import"./context-a7cb0a40.js";import"./Info-c25f0cb7.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
