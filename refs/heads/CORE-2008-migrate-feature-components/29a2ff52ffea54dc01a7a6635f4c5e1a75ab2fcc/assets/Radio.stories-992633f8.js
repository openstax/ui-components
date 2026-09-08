import{s as n,j as e,F as d,a as o}from"./index-1912049b.js";import{R as i}from"./Radio-b549dac7.js";import"./Tooltip-173c8c3b.js";import"./Button-ecc9a0a1.js";import"./useFocusRing-c92e3d1f.js";import"./Hidden-832715c7.js";import"./useButton-8b79c930.js";import"./OverlayArrow-e6409473.js";import"./context-ca482b50.js";import"./Info-e2e01a22.js";/* empty css              */const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
