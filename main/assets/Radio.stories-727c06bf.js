import{s as n,a as e,F as d,j as o}from"./index-ac4b064a.js";import{R as i}from"./Radio-9f3c66ba.js";import"./Tooltip-baa5735b.js";import"./Button-a97cc25b.js";import"./useFocusRing-88d16fde.js";import"./Hidden-6f1474db.js";import"./useFocusable-4c832661.js";import"./useButton-8e1f7d6b.js";import"./OverlayArrow-dc55500a.js";import"./context-871c5de7.js";import"./useControlledState-e33b985e.js";import"./Info-10f3066e.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
