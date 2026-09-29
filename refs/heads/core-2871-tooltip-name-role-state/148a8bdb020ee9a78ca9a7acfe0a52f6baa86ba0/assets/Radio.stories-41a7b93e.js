import{s as n,j as e,F as d,a as o}from"./index-95f65afc.js";import{R as i}from"./Radio-fad15448.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-24081e31.js";import"./Button-3baeb4e1.js";import"./useFocusRing-1446a9a1.js";import"./Hidden-38e2c068.js";import"./useButton-44b10a18.js";import"./OverlayArrow-75e72406.js";import"./context-4a669151.js";import"./Info-8c431ad7.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
