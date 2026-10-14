import{s as n,a as e,F as d,j as o}from"./index-5950e146.js";import{R as i}from"./Radio-42b2ba0a.js";import"./Tooltip-c9145c5e.js";import"./Button-cf4a82bb.js";import"./useFocusRing-40463e44.js";import"./Hidden-cb6025e9.js";import"./useFocusable-c3fe0d4d.js";import"./useButton-f5548b59.js";import"./OverlayArrow-7cd4c080.js";import"./context-0af5abaa.js";import"./useControlledState-3927e483.js";import"./Info-ec32894b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
