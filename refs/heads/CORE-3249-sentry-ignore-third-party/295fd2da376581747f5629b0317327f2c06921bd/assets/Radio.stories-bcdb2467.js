import{s as n,a as e,F as d,j as o}from"./index-0c280f7c.js";import{R as i}from"./Radio-e73c603b.js";import"./Tooltip-7e7c22cb.js";import"./Button-32f64c43.js";import"./useFocusRing-6b7e2460.js";import"./Hidden-0a744609.js";import"./useFocusable-5b2c2bba.js";import"./useButton-741d9e9f.js";import"./OverlayArrow-cc2d8b16.js";import"./context-92b4f1db.js";import"./useControlledState-9a4a028f.js";import"./Info-29bab7bd.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
