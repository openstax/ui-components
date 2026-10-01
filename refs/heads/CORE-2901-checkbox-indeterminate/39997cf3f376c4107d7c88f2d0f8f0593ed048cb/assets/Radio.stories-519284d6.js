import{s as n,j as e,F as d,a as o}from"./index-82c6c802.js";import{R as i}from"./Radio-626b4cff.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-d5e0ab7b.js";import"./Button-8ee15ccf.js";import"./useFocusRing-0bc16314.js";import"./Hidden-20449589.js";import"./useFocusable-4d7c26c2.js";import"./useButton-4354ed71.js";import"./OverlayArrow-5a5502c6.js";import"./context-d1653f45.js";import"./Info-9a7c1d85.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
