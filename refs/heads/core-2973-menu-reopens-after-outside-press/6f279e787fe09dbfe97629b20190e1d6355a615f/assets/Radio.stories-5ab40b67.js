import{s as n,a as e,F as d,j as o}from"./index-75fe0fb6.js";import{R as i}from"./Radio-9105529e.js";import"./Tooltip-1ee32a36.js";import"./Button-74647113.js";import"./useFocusRing-1bad8349.js";import"./Hidden-ae4331c9.js";import"./useFocusable-33259c04.js";import"./useButton-87370bb6.js";import"./OverlayArrow-6181c923.js";import"./context-e92ebf32.js";import"./useControlledState-e72ddbd6.js";import"./Info-571445eb.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
