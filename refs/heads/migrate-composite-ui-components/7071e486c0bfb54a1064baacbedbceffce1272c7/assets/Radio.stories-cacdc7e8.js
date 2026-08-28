import{s as n,j as e,F as d,a as o}from"./index-2e18f280.js";import{R as i}from"./Radio-9a1b3105.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-fcca2c4a.js";import"./Button-cccfa484.js";import"./useFocusRing-c07143c7.js";import"./Hidden-110ca2c9.js";import"./useButton-1a7cb8e4.js";import"./OverlayArrow-9806f204.js";import"./context-2c2a4cb4.js";import"./Info-5b60084b.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
