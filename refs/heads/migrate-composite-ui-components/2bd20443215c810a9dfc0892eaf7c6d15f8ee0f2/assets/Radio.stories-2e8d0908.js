import{s as n,j as e,F as d,a as o}from"./index-036ffbd0.js";import{R as i}from"./Radio-91d02a23.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-206deb3c.js";import"./Button-b63937fa.js";import"./useFocusRing-fea1e67b.js";import"./Hidden-25112f20.js";import"./useButton-7f90f243.js";import"./OverlayArrow-e300baea.js";import"./context-1f577250.js";import"./Info-285a0d9f.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
