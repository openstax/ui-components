import{s as n,a as e,F as d,j as o}from"./index-0eb0246a.js";import{R as i}from"./Radio-6efdb3df.js";import"./Tooltip-bced8a28.js";import"./Button-ea77891c.js";import"./useFocusRing-a7a14601.js";import"./Hidden-9e7fb7b1.js";import"./useFocusable-c9b3857e.js";import"./useButton-95bd0ffc.js";import"./OverlayArrow-ed7c0864.js";import"./context-91859994.js";import"./useControlledState-92eb449a.js";import"./Info-a689757b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
