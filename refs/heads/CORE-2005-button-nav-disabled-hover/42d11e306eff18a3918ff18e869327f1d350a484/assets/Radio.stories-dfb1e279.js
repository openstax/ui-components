import{s as n,a as e,F as d,j as o}from"./index-41ee68f3.js";import{R as i}from"./Radio-f9218278.js";import"./Tooltip-ff8530b5.js";import"./Button-be16b113.js";import"./useFocusRing-e91c9a87.js";import"./Hidden-60de14a2.js";import"./useFocusable-bcb58675.js";import"./useButton-85c8394b.js";import"./OverlayArrow-4a59dfc4.js";import"./context-277e74bc.js";import"./useControlledState-642a3e71.js";import"./Info-97717faa.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
