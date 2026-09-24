import{s as n,j as e,F as d,a as o}from"./index-d7519afc.js";import{R as i}from"./Radio-e4a30e77.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-d9a5bb13.js";import"./Button-eebf1d14.js";import"./useFocusRing-49433bf0.js";import"./Hidden-f70030cb.js";import"./useButton-92a72785.js";import"./OverlayArrow-407c4ce3.js";import"./context-dd8ab28d.js";import"./Info-c1943850.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
