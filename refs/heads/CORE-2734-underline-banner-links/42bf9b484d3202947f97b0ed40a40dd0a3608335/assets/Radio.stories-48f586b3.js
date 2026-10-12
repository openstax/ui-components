import{s as n,a as e,F as d,j as o}from"./index-173fa00c.js";import{R as i}from"./Radio-60cebd6e.js";import"./Tooltip-3abcaf1b.js";import"./Button-1dd132a4.js";import"./useFocusRing-e5dac280.js";import"./Hidden-f2b2b35e.js";import"./useFocusable-053595b4.js";import"./useButton-d11634f5.js";import"./OverlayArrow-2a5544ab.js";import"./context-0a384f31.js";import"./useControlledState-0ba2d9a9.js";import"./Info-4569101a.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
