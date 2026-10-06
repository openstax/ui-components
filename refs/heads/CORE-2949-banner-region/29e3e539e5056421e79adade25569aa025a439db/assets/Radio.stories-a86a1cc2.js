import{s as n,a as e,F as d,j as o}from"./index-ebb5fb7d.js";import{R as i}from"./Radio-a95c9a3e.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-1c386bbf.js";import"./Button-334b0f03.js";import"./useFocusRing-13614e66.js";import"./Hidden-f152aa71.js";import"./useFocusable-bfd4a7e6.js";import"./useButton-10a854c4.js";import"./OverlayArrow-d7702333.js";import"./context-48f8f79b.js";import"./Info-63644805.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
