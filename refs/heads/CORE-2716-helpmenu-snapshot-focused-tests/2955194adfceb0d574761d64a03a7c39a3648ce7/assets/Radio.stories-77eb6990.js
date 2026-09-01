import{s as n,j as e,F as d,a as o}from"./index-9fb4cd63.js";import{R as i}from"./Radio-33f2e4e5.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-a045b126.js";import"./Button-823a2086.js";import"./useFocusRing-c352cff4.js";import"./Hidden-b631cc33.js";import"./useButton-c7e0e558.js";import"./OverlayArrow-78bbfe23.js";import"./context-8b078936.js";import"./Info-1397b870.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
