import{s as n,j as e,F as d,a as o}from"./index-cb716086.js";import{R as i}from"./Radio-bcccf513.js";import"./theme-a67f9953.js";import"./palette-12edeb86.js";import"./Tooltip-f0278a81.js";import"./Button-1d24eea0.js";import"./useFocusRing-542370d3.js";import"./Hidden-a5c4455c.js";import"./useButton-905038c9.js";import"./OverlayArrow-b0696a51.js";import"./context-1f2cc649.js";import"./Info-60139c5e.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
