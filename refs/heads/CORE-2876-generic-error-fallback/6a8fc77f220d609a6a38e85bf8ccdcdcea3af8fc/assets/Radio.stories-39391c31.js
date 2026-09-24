import{s as n,j as e,F as d,a as o}from"./index-105cf361.js";import{R as i}from"./Radio-d5bafcc8.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-cf0d8448.js";import"./Button-c216bf22.js";import"./useFocusRing-08846fa7.js";import"./Hidden-543c64b4.js";import"./useButton-55de3365.js";import"./OverlayArrow-8502c593.js";import"./context-537903f1.js";import"./Info-27972f05.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
