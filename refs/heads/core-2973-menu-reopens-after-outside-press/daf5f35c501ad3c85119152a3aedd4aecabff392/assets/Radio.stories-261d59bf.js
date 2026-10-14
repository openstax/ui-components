import{s as n,a as e,F as d,j as o}from"./index-81dae33e.js";import{R as i}from"./Radio-74c8a7af.js";import"./Tooltip-43366754.js";import"./Button-b228d368.js";import"./useFocusRing-933936c3.js";import"./Hidden-f8802454.js";import"./useFocusable-f5dbf1fd.js";import"./useButton-aae4f8ff.js";import"./OverlayArrow-ea069b73.js";import"./context-de6eb7bb.js";import"./useControlledState-afd0fc81.js";import"./Info-1b665283.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
