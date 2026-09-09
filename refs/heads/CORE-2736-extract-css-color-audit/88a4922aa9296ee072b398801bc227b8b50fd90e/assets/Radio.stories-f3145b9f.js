import{s as n,j as e,F as d,a as o}from"./index-577d0a5a.js";import{R as i}from"./Radio-83a7c33b.js";import"./Tooltip-281fcf9d.js";import"./Button-7c6f3ab8.js";import"./useFocusRing-7bbbd5d4.js";import"./Hidden-085b841a.js";import"./useButton-824a4808.js";import"./OverlayArrow-6cc77e74.js";import"./context-c4ef1062.js";import"./Info-1006e5f0.js";/* empty css              */const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
