import{s as n,j as e,F as d,a as o}from"./index-d00e6a0b.js";import{R as i}from"./Radio-8ecd2935.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-42c18614.js";import"./Button-fb77a954.js";import"./useFocusRing-e57e70e0.js";import"./Hidden-b5892ea3.js";import"./useButton-ec57215e.js";import"./OverlayArrow-7591bdcc.js";import"./context-5f53686b.js";import"./Info-bf87b57d.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
