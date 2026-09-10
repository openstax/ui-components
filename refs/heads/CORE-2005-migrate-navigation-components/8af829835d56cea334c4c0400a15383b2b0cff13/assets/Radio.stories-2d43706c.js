import{s as n,j as e,F as d,a as o}from"./index-c5146d77.js";import{R as i}from"./Radio-3e221c8f.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-74903d32.js";import"./Button-893193a2.js";import"./useFocusRing-b8ac5fc0.js";import"./Hidden-1fa43981.js";import"./useButton-b3914be9.js";import"./OverlayArrow-bf9b7bff.js";import"./context-cfb7df37.js";import"./Info-9ee6d1f7.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
