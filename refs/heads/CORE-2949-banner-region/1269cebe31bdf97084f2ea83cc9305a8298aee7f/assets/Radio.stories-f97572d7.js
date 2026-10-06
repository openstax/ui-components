import{s as n,a as e,F as d,j as o}from"./index-71cf49a2.js";import{R as i}from"./Radio-9f6809f0.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-28e50ef4.js";import"./Button-a03708ad.js";import"./useFocusRing-12289b3e.js";import"./Hidden-ceb4dd1f.js";import"./useFocusable-31c562a2.js";import"./useButton-dc5febb2.js";import"./OverlayArrow-94eb4bb8.js";import"./context-6e43649b.js";import"./Info-8b9eb34c.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
