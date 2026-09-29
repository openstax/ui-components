import{s as n,j as e,F as d,a as o}from"./index-f6a02c4c.js";import{R as i}from"./Radio-4b33ccf0.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-3e7aafbf.js";import"./Button-b4a76a80.js";import"./useFocusRing-e05b2c6c.js";import"./Hidden-9352d9cd.js";import"./useButton-b2d4cd0d.js";import"./OverlayArrow-b05a19b9.js";import"./context-73d85a53.js";import"./Info-906382dc.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
