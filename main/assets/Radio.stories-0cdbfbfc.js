import{s as n,a as e,F as d,j as o}from"./index-db9fa2de.js";import{R as i}from"./Radio-26288ba1.js";import"./Tooltip-98b7a7ed.js";import"./Button-e1403399.js";import"./useFocusRing-2d6e1895.js";import"./Hidden-655b8231.js";import"./useFocusable-bf24590d.js";import"./useButton-9f058b00.js";import"./OverlayArrow-8edc8392.js";import"./context-10b6bf7c.js";import"./useControlledState-58ca2ecf.js";import"./Info-92732426.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
