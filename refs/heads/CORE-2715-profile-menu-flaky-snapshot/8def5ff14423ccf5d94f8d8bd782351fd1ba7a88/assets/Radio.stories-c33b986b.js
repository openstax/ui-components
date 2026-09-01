import{s as n,j as e,F as d,a as o}from"./index-2c7a4860.js";import{R as i}from"./Radio-f7a36440.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-9fda1fb8.js";import"./Button-2e22acd4.js";import"./useFocusRing-f66a4aa9.js";import"./Hidden-c78039e2.js";import"./useButton-181c1197.js";import"./OverlayArrow-e9360c7f.js";import"./context-a8c5ea83.js";import"./Info-9a2b5957.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
