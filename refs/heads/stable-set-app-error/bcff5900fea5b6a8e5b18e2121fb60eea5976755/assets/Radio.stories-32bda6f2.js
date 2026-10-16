import{s as n,a as e,F as d,j as o}from"./index-a36676d6.js";import{R as i}from"./Radio-95cf2275.js";import"./Tooltip-07ace294.js";import"./Button-cb32ff15.js";import"./useFocusRing-ea71f727.js";import"./Hidden-98f7d6d3.js";import"./useFocusable-fdf2a87e.js";import"./useButton-52314a3c.js";import"./OverlayArrow-8649f437.js";import"./context-36927df7.js";import"./useControlledState-edd0cea3.js";import"./Info-a3ab1d53.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
