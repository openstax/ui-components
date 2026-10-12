import{s as n,a as e,F as d,j as o}from"./index-eb0e2a7b.js";import{R as i}from"./Radio-283dc4ab.js";import"./Tooltip-cc4385cf.js";import"./Button-a24e33d4.js";import"./useFocusRing-d65c5e5c.js";import"./Hidden-9ed10be4.js";import"./useFocusable-ed6315e2.js";import"./useButton-0413cd30.js";import"./OverlayArrow-2785d917.js";import"./context-89f6db8f.js";import"./useControlledState-10aa6d8c.js";import"./Info-57ba94ca.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
