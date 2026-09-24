import{s as n,j as e,F as d,a as o}from"./index-76e7c673.js";import{R as i}from"./Radio-d2dffdb2.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-b779a8a2.js";import"./Button-1ec03cdb.js";import"./useFocusRing-e407b6dd.js";import"./Hidden-ff2c73c7.js";import"./useButton-93ba0cc4.js";import"./OverlayArrow-4959e14a.js";import"./context-0a641ab3.js";import"./Info-45c68f5a.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
