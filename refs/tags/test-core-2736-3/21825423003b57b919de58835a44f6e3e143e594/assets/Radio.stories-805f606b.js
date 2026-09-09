import{s as n,j as e,F as d,a as o}from"./index-5d8381fa.js";import{R as i}from"./Radio-72b3868e.js";import"./Tooltip-9c6e5ca8.js";import"./Button-b38cd737.js";import"./useFocusRing-00053998.js";import"./Hidden-a3b05456.js";import"./useButton-72d0cc9e.js";import"./OverlayArrow-84f53a0b.js";import"./context-f3b20c30.js";import"./Info-7030fced.js";/* empty css              */const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
