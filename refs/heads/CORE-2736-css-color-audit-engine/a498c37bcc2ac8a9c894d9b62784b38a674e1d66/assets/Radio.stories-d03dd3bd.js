import{s as n,j as e,F as d,a as o}from"./index-33306e4c.js";import{R as i}from"./Radio-827faa7c.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-b490d976.js";import"./Button-e2cb7a01.js";import"./useFocusRing-4040c01d.js";import"./Hidden-96e1c22d.js";import"./useButton-0ef69dfa.js";import"./OverlayArrow-08bbeeec.js";import"./context-e939feaa.js";import"./Info-8b6443bd.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
