import{s as n,a as e,F as d,j as o}from"./index-39374954.js";import{R as i}from"./Radio-ea79e340.js";import"./Tooltip-d72f6a4e.js";import"./Button-145e8075.js";import"./useFocusRing-d027a49b.js";import"./Hidden-1f47b864.js";import"./useFocusable-7bad8d9d.js";import"./useButton-e2c0b9c7.js";import"./OverlayArrow-d0ff76bc.js";import"./context-f4336b6c.js";import"./useControlledState-75701df8.js";import"./Info-544e0b0a.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
