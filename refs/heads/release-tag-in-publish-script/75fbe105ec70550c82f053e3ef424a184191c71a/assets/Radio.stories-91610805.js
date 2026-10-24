import{s as n,a as e,F as d,j as o}from"./index-266ef8db.js";import{R as i}from"./Radio-eca6bf72.js";import"./Tooltip-bdb440cf.js";import"./Button-672f8f8b.js";import"./useFocusRing-ab7e78ca.js";import"./Hidden-b012efe4.js";import"./useFocusable-fa7bc260.js";import"./useButton-6dfea2de.js";import"./OverlayArrow-e5ecf46c.js";import"./context-2d520729.js";import"./useControlledState-7775b49e.js";import"./Info-a8f14644.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
