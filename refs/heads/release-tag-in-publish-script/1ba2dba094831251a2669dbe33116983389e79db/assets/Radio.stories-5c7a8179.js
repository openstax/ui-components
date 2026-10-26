import{s as n,a as e,F as d,j as o}from"./index-26e4c9a7.js";import{R as i}from"./Radio-6b76be78.js";import"./Tooltip-d6a86463.js";import"./Button-13894f65.js";import"./useFocusRing-19544422.js";import"./Hidden-5c1450a3.js";import"./useFocusable-808e8d2e.js";import"./useButton-0f32f5bc.js";import"./OverlayArrow-9bc6736b.js";import"./context-e6b2471f.js";import"./useControlledState-d866a8a9.js";import"./Info-28c24963.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
