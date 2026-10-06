import{s as n,j as e,F as d,a as o}from"./index-8f9ae97c.js";import{R as i}from"./Radio-13e47a07.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-57caaf6a.js";import"./Button-4448ebf3.js";import"./useFocusRing-baa6b2a5.js";import"./Hidden-b16e4fcc.js";import"./useFocusable-10a50f45.js";import"./useButton-00251999.js";import"./OverlayArrow-474e4399.js";import"./context-986dc0a3.js";import"./Info-d7a3b6be.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
