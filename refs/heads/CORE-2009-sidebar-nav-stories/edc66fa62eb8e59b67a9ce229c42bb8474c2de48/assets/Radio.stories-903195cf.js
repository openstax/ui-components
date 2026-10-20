import{s as n,a as e,F as d,j as o}from"./index-0f6c71b1.js";import{R as i}from"./Radio-e8b00f95.js";import"./Tooltip-c98f2b8d.js";import"./Button-b14534ec.js";import"./useFocusRing-4957b81f.js";import"./Hidden-1ee42925.js";import"./useFocusable-c1dd99f1.js";import"./useButton-4903bada.js";import"./OverlayArrow-bbb9d3b5.js";import"./context-cf006a04.js";import"./useControlledState-188e0ac0.js";import"./Info-12aae361.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
