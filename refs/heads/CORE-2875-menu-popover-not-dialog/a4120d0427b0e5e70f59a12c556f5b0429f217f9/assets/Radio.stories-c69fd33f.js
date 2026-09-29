import{s as n,j as e,F as d,a as o}from"./index-82f5fe56.js";import{R as i}from"./Radio-a6de1682.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-688403fe.js";import"./Button-f4d5d6e4.js";import"./useFocusRing-c70b944e.js";import"./Hidden-61d42590.js";import"./useButton-09974b53.js";import"./OverlayArrow-c3db191f.js";import"./context-b75d7417.js";import"./Info-0d4c8601.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
