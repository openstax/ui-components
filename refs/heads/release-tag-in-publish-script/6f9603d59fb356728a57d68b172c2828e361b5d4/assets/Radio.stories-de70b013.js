import{s as n,a as e,F as d,j as o}from"./index-eb3199b3.js";import{R as i}from"./Radio-419e7c1b.js";import"./Tooltip-e1fe19ee.js";import"./Button-889d0f85.js";import"./useFocusRing-5d483f1e.js";import"./Hidden-e35fdb80.js";import"./useFocusable-2b250a66.js";import"./useButton-0f1f9a46.js";import"./OverlayArrow-cb4082c5.js";import"./context-359725ed.js";import"./useControlledState-7b99286f.js";import"./Info-e952651b.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
