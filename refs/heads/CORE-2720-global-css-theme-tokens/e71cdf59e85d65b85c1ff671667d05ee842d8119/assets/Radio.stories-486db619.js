import{s as n,j as e,F as d,a as o}from"./index-6b0d950e.js";import{R as i}from"./Radio-bf9a2dcb.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-0e1d5eb4.js";import"./Button-1b57d465.js";import"./useFocusRing-5b7502c0.js";import"./Hidden-f10f926a.js";import"./useButton-be62c214.js";import"./OverlayArrow-e24f437c.js";import"./context-b2fcb141.js";import"./Info-bec11e09.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
