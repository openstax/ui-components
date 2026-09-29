import{s as n,j as e,F as d,a as o}from"./index-a936e27b.js";import{R as i}from"./Radio-7ae61742.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-e3cabd62.js";import"./Button-98f0b032.js";import"./useFocusRing-f4f796d0.js";import"./Hidden-724d29b3.js";import"./useButton-9e503eee.js";import"./OverlayArrow-77d1f7c6.js";import"./context-790c492a.js";import"./Info-757b6b2c.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
