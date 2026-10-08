import{s as n,j as e,F as d,a as o}from"./index-7ae62d53.js";import{R as i}from"./Radio-32a3d550.js";import"./Tooltip-b9a57d6b.js";import"./Button-a928b47a.js";import"./useFocusRing-bce9904c.js";import"./Hidden-85700279.js";import"./useFocusable-b917bc9b.js";import"./useButton-19e51b7f.js";import"./OverlayArrow-56eb920f.js";import"./context-5028cb43.js";import"./Info-cb749878.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
