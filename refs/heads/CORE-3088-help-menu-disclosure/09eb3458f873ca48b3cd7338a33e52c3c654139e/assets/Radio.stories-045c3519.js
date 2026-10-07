import{s as n,j as e,F as d,a as o}from"./index-bd92b255.js";import{R as i}from"./Radio-d69ba0bf.js";import"./Tooltip-0e4f8743.js";import"./Button-4af6cff0.js";import"./useFocusRing-cbdcb9a8.js";import"./Hidden-f034e07e.js";import"./useFocusable-0fec7d9c.js";import"./useButton-05c5631a.js";import"./OverlayArrow-963bac52.js";import"./context-457cfff1.js";import"./useControlledState-bacb7a53.js";import"./Info-c1b32c2a.js";import"./palette-97ed00c9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
