import{s as n,a as e,F as d,j as o}from"./index-54670b2e.js";import{R as i}from"./Radio-67f9bb51.js";import"./Tooltip-6597d400.js";import"./Button-65af75a1.js";import"./useFocusRing-01dbbdd0.js";import"./Hidden-f268abe8.js";import"./useFocusable-c1e83ff2.js";import"./useButton-fddd35d4.js";import"./OverlayArrow-1715f477.js";import"./context-cd34325f.js";import"./useControlledState-a99ac04c.js";import"./Info-ca58d2ed.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
