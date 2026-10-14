import{s as n,a as e,F as d,j as o}from"./index-5459c15c.js";import{R as i}from"./Radio-5a014038.js";import"./Tooltip-9cbac6eb.js";import"./Button-7c50ccf4.js";import"./useFocusRing-43d2fa30.js";import"./Hidden-385b2719.js";import"./useFocusable-192c5203.js";import"./useButton-5ab5ed6d.js";import"./OverlayArrow-f6f63f8a.js";import"./context-b520589a.js";import"./useControlledState-145a74d4.js";import"./Info-75d44493.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
