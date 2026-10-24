import{s as n,a as e,F as d,j as o}from"./index-ebab9b31.js";import{R as i}from"./Radio-2cd59a77.js";import"./Tooltip-559f7736.js";import"./Button-c04ed012.js";import"./useFocusRing-fda99018.js";import"./Hidden-0366e376.js";import"./useFocusable-33513cc0.js";import"./useButton-1a98e685.js";import"./OverlayArrow-d3acb35f.js";import"./context-3b8ae380.js";import"./useControlledState-21871dde.js";import"./Info-c86c8213.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
