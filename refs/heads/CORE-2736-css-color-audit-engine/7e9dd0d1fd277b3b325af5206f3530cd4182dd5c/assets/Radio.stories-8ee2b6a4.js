import{s as n,j as e,F as d,a as o}from"./index-7df39650.js";import{R as i}from"./Radio-df356fce.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-d8db14b1.js";import"./Button-2d79c751.js";import"./useFocusRing-e2e6766b.js";import"./Hidden-0de357a1.js";import"./useButton-6f9e6e27.js";import"./OverlayArrow-7323af13.js";import"./context-eabef428.js";import"./Info-66085b6e.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
