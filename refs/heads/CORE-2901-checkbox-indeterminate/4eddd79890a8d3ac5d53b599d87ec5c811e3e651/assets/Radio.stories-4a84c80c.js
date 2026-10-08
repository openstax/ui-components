import{s as n,j as e,F as d,a as o}from"./index-e4caf523.js";import{R as i}from"./Radio-a227c297.js";import"./Tooltip-43bdce77.js";import"./Button-04adc989.js";import"./useFocusRing-1266b8d0.js";import"./Hidden-b8160308.js";import"./useFocusable-eb742270.js";import"./useButton-ccf95ed3.js";import"./OverlayArrow-a31e9a4f.js";import"./context-c127f537.js";import"./Info-1595558c.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
