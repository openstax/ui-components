import{s as n,j as e,F as d,a as o}from"./index-44170a33.js";import{R as i}from"./Radio-b89db7cb.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-decac8f3.js";import"./Button-4f2a95f2.js";import"./useFocusRing-a4821759.js";import"./Hidden-3aa0c2ca.js";import"./useButton-ea6a22ef.js";import"./OverlayArrow-55c226cb.js";import"./context-95adfa68.js";import"./Info-a27ff1e9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
