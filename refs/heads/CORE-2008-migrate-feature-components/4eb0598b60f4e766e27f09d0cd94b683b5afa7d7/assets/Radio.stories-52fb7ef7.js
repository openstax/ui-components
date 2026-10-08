import{s as n,j as e,F as d,a as o}from"./index-3d25242c.js";import{R as i}from"./Radio-d2f47637.js";import"./Tooltip-162d83bb.js";import"./Button-66d62005.js";import"./useFocusRing-b5d84eb3.js";import"./Hidden-6562e3a6.js";import"./useFocusable-63c830c9.js";import"./useButton-fa008ffb.js";import"./OverlayArrow-cc21711d.js";import"./context-bd1db7c4.js";import"./Info-915a3ddc.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
