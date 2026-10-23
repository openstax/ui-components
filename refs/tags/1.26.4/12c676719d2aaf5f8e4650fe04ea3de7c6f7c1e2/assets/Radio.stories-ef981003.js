import{s as n,a as e,F as d,j as o}from"./index-5bc33caa.js";import{R as i}from"./Radio-0a71b2b6.js";import"./Tooltip-7d87c3e7.js";import"./Button-ae0df760.js";import"./useFocusRing-a7446604.js";import"./Hidden-d2c6b565.js";import"./useFocusable-00649e91.js";import"./useButton-4bb42bf9.js";import"./OverlayArrow-bc8dd68d.js";import"./context-db335624.js";import"./useControlledState-7b58ae83.js";import"./Info-1c78682d.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
