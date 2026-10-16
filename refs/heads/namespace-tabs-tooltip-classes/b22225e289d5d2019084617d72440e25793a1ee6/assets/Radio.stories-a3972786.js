import{s as n,a as e,F as d,j as o}from"./index-d1b9dac7.js";import{R as i}from"./Radio-b9b00524.js";import"./Tooltip-bc455ba2.js";import"./Button-1848629c.js";import"./useFocusRing-8c71827a.js";import"./Hidden-96a19546.js";import"./useFocusable-7f7846c8.js";import"./useButton-c366fb83.js";import"./OverlayArrow-fea02f5c.js";import"./context-0ef3b196.js";import"./useControlledState-be069e43.js";import"./Info-ee4f1d7b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
