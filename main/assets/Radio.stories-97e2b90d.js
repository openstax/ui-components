import{s as n,j as e,F as d,a as o}from"./index-0944ceb3.js";import{R as i}from"./Radio-51b5e6d2.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-f0861ee3.js";import"./Button-b0a7b830.js";import"./useFocusRing-a7d93656.js";import"./Hidden-23110ebb.js";import"./useButton-12eee667.js";import"./OverlayArrow-66bf5bbd.js";import"./context-5a208b0c.js";import"./Info-11dfcd7c.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
