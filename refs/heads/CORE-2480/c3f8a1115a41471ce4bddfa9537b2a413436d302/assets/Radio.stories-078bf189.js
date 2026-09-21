import{s as n,j as e,F as d,a as o}from"./index-763a0973.js";import{R as i}from"./Radio-293ab1d0.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-cff7512b.js";import"./Button-1fb652d3.js";import"./useFocusRing-7ced4797.js";import"./Hidden-d4236f7c.js";import"./useFocusable-51c425c7.js";import"./useButton-a3cf34aa.js";import"./OverlayArrow-6ca53be9.js";import"./context-323ac398.js";import"./Info-8700f734.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
