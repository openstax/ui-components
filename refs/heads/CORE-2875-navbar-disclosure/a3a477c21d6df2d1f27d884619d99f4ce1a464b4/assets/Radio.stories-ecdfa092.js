import{s as n,j as e,F as d,a as o}from"./index-d1d1fded.js";import{R as i}from"./Radio-36caabc1.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-7177a56e.js";import"./Button-2715773e.js";import"./useFocusRing-4386dd52.js";import"./Hidden-c368feb1.js";import"./useFocusable-b3b8ee37.js";import"./useButton-0522c372.js";import"./OverlayArrow-2c169799.js";import"./context-930e22b4.js";import"./useControlledState-288176eb.js";import"./Info-2b9d1ee1.js";const l=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(l,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),j=()=>e(d,{children:a({name:"default"})}),y=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),r=t=>o(l,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),L=()=>o(d,{children:[r({name:"disabled"}),r({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{j as Default,L as Disabled,y as WithTooltip};
