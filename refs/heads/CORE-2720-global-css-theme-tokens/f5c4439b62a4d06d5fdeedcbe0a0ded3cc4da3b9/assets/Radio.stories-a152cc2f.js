import{s as n,j as e,F as d,a as o}from"./index-0ccca12e.js";import{R as i}from"./Radio-ec4b32fc.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-ebbdf70f.js";import"./Button-647574cb.js";import"./useFocusRing-b182c07a.js";import"./Hidden-c75239a6.js";import"./useFocusable-48927e42.js";import"./useButton-2de02fca.js";import"./OverlayArrow-17e0710e.js";import"./context-79f85f88.js";import"./Info-a747f8d8.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
