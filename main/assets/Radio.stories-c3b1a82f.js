import{s as n,j as e,F as d,a as o}from"./index-564ba12b.js";import{R as i}from"./Radio-c20183d4.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-9abe456b.js";import"./Button-deeedf6e.js";import"./useFocusRing-74b940f2.js";import"./Hidden-473dc9fd.js";import"./useFocusable-5eff6fb2.js";import"./useButton-bf0045c8.js";import"./OverlayArrow-75fc64b0.js";import"./context-27c2eb22.js";import"./Info-e32ef9db.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
