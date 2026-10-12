import{s as n,a as e,F as d,j as o}from"./index-60b6f9c9.js";import{R as i}from"./Radio-34b81b71.js";import"./Tooltip-8e994b6b.js";import"./Button-15bb915a.js";import"./useFocusRing-b6e01360.js";import"./Hidden-0ceb1aee.js";import"./useFocusable-295c9130.js";import"./useButton-9134060f.js";import"./OverlayArrow-3dd4812e.js";import"./context-6034f8b3.js";import"./useControlledState-4437c678.js";import"./Info-8abc388f.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
