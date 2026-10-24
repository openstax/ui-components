import{s as n,a as e,F as d,j as o}from"./index-6095f590.js";import{R as i}from"./Radio-bb25e924.js";import"./Tooltip-88ba22b2.js";import"./Button-57e79939.js";import"./useFocusRing-b3ec163a.js";import"./Hidden-09e5a876.js";import"./useFocusable-3d566331.js";import"./useButton-874e781a.js";import"./OverlayArrow-27bc34ee.js";import"./context-4e1e3f9a.js";import"./useControlledState-79473a02.js";import"./Info-3b25748f.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
