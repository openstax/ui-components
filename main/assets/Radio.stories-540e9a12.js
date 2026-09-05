import{s as n,j as e,F as d,a as o}from"./index-44d0765e.js";import{R as i}from"./Radio-3c623dfb.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-b3a56601.js";import"./Button-f54b170f.js";import"./useFocusRing-8b9f947e.js";import"./Hidden-0957b4c4.js";import"./useButton-7ae62fcb.js";import"./OverlayArrow-99a027b8.js";import"./context-0c282fac.js";import"./Info-50cf8bc7.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
