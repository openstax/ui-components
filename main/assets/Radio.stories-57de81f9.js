import{s as n,a as e,F as d,j as o}from"./index-117e0f76.js";import{R as i}from"./Radio-f10bc685.js";import"./Tooltip-b846925c.js";import"./Button-7993b2a6.js";import"./useFocusRing-8126d61d.js";import"./Hidden-7934663d.js";import"./useFocusable-9499235a.js";import"./useButton-cdbaf336.js";import"./OverlayArrow-2f614c76.js";import"./context-0a5cca6b.js";import"./useControlledState-cfd1d50d.js";import"./Info-0b0f7610.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
