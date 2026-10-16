import{s as n,a as e,F as d,j as o}from"./index-b6a40e04.js";import{R as i}from"./Radio-22d3d110.js";import"./Tooltip-94f10e90.js";import"./Button-0d6a3cc6.js";import"./useFocusRing-2e117f97.js";import"./Hidden-361583b4.js";import"./useFocusable-feb18afd.js";import"./useButton-57a15964.js";import"./OverlayArrow-deaf31df.js";import"./context-3ce56cb0.js";import"./useControlledState-191dc725.js";import"./Info-f7436d5b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
