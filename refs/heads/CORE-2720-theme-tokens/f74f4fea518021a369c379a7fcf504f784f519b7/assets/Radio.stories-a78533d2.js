import{s as n,j as e,F as d,a as o}from"./index-999e77ed.js";import{R as i}from"./Radio-51e0559e.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-740257f3.js";import"./Button-b43f686d.js";import"./useFocusRing-55667517.js";import"./Hidden-3d2dba0f.js";import"./useButton-25f6cf0a.js";import"./OverlayArrow-fd26ae4b.js";import"./context-cbd97d6e.js";import"./Info-2572de84.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
