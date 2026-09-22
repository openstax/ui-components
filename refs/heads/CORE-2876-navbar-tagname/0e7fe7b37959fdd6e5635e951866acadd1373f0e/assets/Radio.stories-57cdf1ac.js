import{s as n,j as e,F as d,a as o}from"./index-5749e66f.js";import{R as i}from"./Radio-adc4a47b.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-40d0c247.js";import"./Button-ae3a29eb.js";import"./useFocusRing-0edc27cd.js";import"./Hidden-cffe9fec.js";import"./useButton-5e1d9653.js";import"./OverlayArrow-db7106de.js";import"./context-81fcc5b1.js";import"./Info-e43aa0e5.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
