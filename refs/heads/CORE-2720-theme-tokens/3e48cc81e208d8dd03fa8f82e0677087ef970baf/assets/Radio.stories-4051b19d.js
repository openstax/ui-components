import{s as n,j as e,F as d,a as o}from"./index-d726e26d.js";import{R as i}from"./Radio-389a18fa.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-60595e02.js";import"./Button-de956351.js";import"./useFocusRing-b366c49b.js";import"./Hidden-3fb10087.js";import"./useButton-c3bd62fb.js";import"./OverlayArrow-972b09f7.js";import"./context-d6984892.js";import"./Info-19f0f8ed.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
