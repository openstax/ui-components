import{s as n,j as e,F as d,a as o}from"./index-87130c24.js";import{R as i}from"./Radio-3da1f356.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-5fc781f8.js";import"./Button-54ff0f13.js";import"./useFocusRing-fdc8b9a6.js";import"./Hidden-b262045f.js";import"./useButton-837d32f5.js";import"./OverlayArrow-7c28895e.js";import"./context-f0ec1d82.js";import"./Info-6cca72c2.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
