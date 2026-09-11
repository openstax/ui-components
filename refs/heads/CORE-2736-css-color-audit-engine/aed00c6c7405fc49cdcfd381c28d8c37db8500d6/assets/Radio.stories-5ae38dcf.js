import{s as n,j as e,F as d,a as o}from"./index-16ec9eb7.js";import{R as i}from"./Radio-f9b48778.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-559c98aa.js";import"./Button-7238c2b4.js";import"./useFocusRing-8f3cf6f0.js";import"./Hidden-a07f4dba.js";import"./useButton-f2f6150a.js";import"./OverlayArrow-bf66e5b9.js";import"./context-d50e6430.js";import"./Info-a61cb52a.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
