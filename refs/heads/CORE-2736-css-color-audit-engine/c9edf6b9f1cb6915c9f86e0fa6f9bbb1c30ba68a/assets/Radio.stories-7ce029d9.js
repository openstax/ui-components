import{s as n,j as e,F as d,a as o}from"./index-c0d8c15d.js";import{R as i}from"./Radio-2b26beb8.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-59ecec99.js";import"./Button-ebfae897.js";import"./useFocusRing-62213e35.js";import"./Hidden-2c72bde7.js";import"./useButton-6f5e42ce.js";import"./OverlayArrow-1b1ab786.js";import"./context-ed9b31b0.js";import"./Info-c11f7b3b.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
