import{s as n,j as e,F as d,a as o}from"./index-cc867f2c.js";import{R as i}from"./Radio-5d941be4.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-ba184b09.js";import"./Button-c72ad133.js";import"./useFocusRing-7a1d70fb.js";import"./Hidden-04de7ccd.js";import"./useButton-6ae46e7a.js";import"./OverlayArrow-34e88066.js";import"./context-28314663.js";import"./Info-3eaa18ca.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
