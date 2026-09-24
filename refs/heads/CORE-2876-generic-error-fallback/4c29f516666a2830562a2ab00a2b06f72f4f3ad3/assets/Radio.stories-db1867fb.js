import{s as n,j as e,F as d,a as o}from"./index-baa1678f.js";import{R as i}from"./Radio-07906e69.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-ac0bc5ed.js";import"./Button-acc6425b.js";import"./useFocusRing-89dbf7cd.js";import"./Hidden-96973bd1.js";import"./useButton-32f43ea5.js";import"./OverlayArrow-f1c721ce.js";import"./context-bf11ea20.js";import"./Info-b8c8ebbf.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
