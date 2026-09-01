import{s as n,j as e,F as d,a as o}from"./index-c88d8e22.js";import{R as i}from"./Radio-05d5adee.js";import"./Tooltip-ede9a3df.js";import"./Button-74d06b37.js";import"./useFocusRing-8afad64a.js";import"./Hidden-1449fc0d.js";import"./useButton-085a8945.js";import"./OverlayArrow-19b57bcd.js";import"./context-6d799e86.js";import"./Info-46c0d846.js";/* empty css              */const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
