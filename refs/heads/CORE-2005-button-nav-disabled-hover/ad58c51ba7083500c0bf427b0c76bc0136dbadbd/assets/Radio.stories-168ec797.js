import{s as n,a as e,F as d,j as o}from"./index-204ca62c.js";import{R as i}from"./Radio-382422ff.js";import"./Tooltip-90605597.js";import"./Button-cdbb1049.js";import"./useFocusRing-b817ff97.js";import"./Hidden-c6b25ad9.js";import"./useFocusable-d43aa2db.js";import"./useButton-d81a912c.js";import"./OverlayArrow-6c16d577.js";import"./context-aa650836.js";import"./useControlledState-87d5df81.js";import"./Info-1b472289.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
