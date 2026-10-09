import{s as n,a as e,F as d,j as o}from"./index-786b2cbe.js";import{R as i}from"./Radio-bf041de1.js";import"./Tooltip-fc0505ff.js";import"./Button-94706f6e.js";import"./useFocusRing-d158eae7.js";import"./Hidden-3a55633b.js";import"./useFocusable-d2295fbb.js";import"./useButton-7a278c33.js";import"./OverlayArrow-ce5ed694.js";import"./context-bc24a389.js";import"./useControlledState-cf16fa82.js";import"./Info-0d02f1ef.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
