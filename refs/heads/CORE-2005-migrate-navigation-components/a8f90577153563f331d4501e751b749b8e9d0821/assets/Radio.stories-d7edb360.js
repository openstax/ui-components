import{s as n,j as e,F as d,a as o}from"./index-5d39a9cf.js";import{R as i}from"./Radio-f2d008b9.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-bd337999.js";import"./Button-d58a7e99.js";import"./useFocusRing-780d41a8.js";import"./Hidden-c4846879.js";import"./useButton-e62d34d0.js";import"./OverlayArrow-5fb699dd.js";import"./context-7591c634.js";import"./Info-6ccd7d93.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
