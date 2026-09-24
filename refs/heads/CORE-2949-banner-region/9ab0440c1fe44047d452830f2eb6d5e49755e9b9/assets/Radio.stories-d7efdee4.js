import{s as n,j as e,F as d,a as o}from"./index-28a44004.js";import{R as i}from"./Radio-a68c96da.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-b7c6c69d.js";import"./Button-5fc80b46.js";import"./useFocusRing-c4472fd7.js";import"./Hidden-9b9025fd.js";import"./useButton-727e6d83.js";import"./OverlayArrow-1d1db8d3.js";import"./context-6ec3b506.js";import"./Info-64ec1e4f.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
