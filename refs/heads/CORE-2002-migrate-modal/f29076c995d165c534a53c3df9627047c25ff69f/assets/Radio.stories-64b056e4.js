import{s as n,j as e,F as d,a as o}from"./index-f0758dee.js";import{R as i}from"./Radio-c26aa387.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-f9c6cbe6.js";import"./Button-a6752855.js";import"./useFocusRing-3e3041a4.js";import"./Hidden-3175ed19.js";import"./useButton-e96b671e.js";import"./OverlayArrow-ccb75d87.js";import"./context-26e13ead.js";import"./Info-0e522e94.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
