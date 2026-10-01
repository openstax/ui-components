import{s as n,j as e,F as d,a as o}from"./index-04c65cdc.js";import{R as i}from"./Radio-3062a4dc.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-c0414d84.js";import"./Button-d62e32aa.js";import"./useFocusRing-0eecc572.js";import"./Hidden-303ed19e.js";import"./useFocusable-c1702599.js";import"./useButton-5d0cc150.js";import"./OverlayArrow-243f8df5.js";import"./context-80f560e2.js";import"./Info-08ddb67e.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
