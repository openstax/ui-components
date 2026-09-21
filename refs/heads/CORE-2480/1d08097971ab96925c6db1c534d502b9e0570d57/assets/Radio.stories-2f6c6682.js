import{s as n,j as e,F as d,a as o}from"./index-78f56fc2.js";import{R as i}from"./Radio-3a8205e6.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-45ef7c0b.js";import"./Button-32d97aff.js";import"./useFocusRing-23c40bdc.js";import"./Hidden-30e6f676.js";import"./useFocusable-abff89ec.js";import"./useButton-a1e8c4b2.js";import"./OverlayArrow-f63ae629.js";import"./context-725730c4.js";import"./Info-1035bedb.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
