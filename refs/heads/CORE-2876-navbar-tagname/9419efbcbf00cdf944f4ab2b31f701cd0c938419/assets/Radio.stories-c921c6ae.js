import{s as n,j as e,F as d,a as o}from"./index-8be1906f.js";import{R as i}from"./Radio-ec36fa44.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-42c3daba.js";import"./Button-f2c3514f.js";import"./useFocusRing-4675d8b1.js";import"./Hidden-f30e54ca.js";import"./useButton-bc729b89.js";import"./OverlayArrow-5e6f0c79.js";import"./context-57ada82f.js";import"./Info-a502adbd.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
