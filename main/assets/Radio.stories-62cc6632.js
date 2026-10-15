import{s as n,a as e,F as d,j as o}from"./index-6797edcb.js";import{R as i}from"./Radio-f67aca17.js";import"./Tooltip-20bafabd.js";import"./Button-5bc7bb33.js";import"./useFocusRing-45d2af01.js";import"./Hidden-f939bee1.js";import"./useFocusable-b2da8519.js";import"./useButton-ae420482.js";import"./OverlayArrow-5fba0e85.js";import"./context-eb884c4f.js";import"./useControlledState-58ff23b9.js";import"./Info-9c9a63ca.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
