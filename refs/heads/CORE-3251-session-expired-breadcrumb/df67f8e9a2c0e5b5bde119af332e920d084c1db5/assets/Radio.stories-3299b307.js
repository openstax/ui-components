import{s as n,a as e,F as d,j as o}from"./index-7008f58e.js";import{R as i}from"./Radio-5bca6a3d.js";import"./Tooltip-0f842324.js";import"./Button-2e77ce5f.js";import"./useFocusRing-a145b4f7.js";import"./Hidden-1e1aa6c7.js";import"./useFocusable-fe8e4572.js";import"./useButton-72573b7d.js";import"./OverlayArrow-f803ac5b.js";import"./context-ed4bbdd4.js";import"./useControlledState-1dfe739a.js";import"./Info-9891677b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
