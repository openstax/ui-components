import{s as n,a as e,F as d,j as o}from"./index-81100b9e.js";import{R as i}from"./Radio-ad0ab77e.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-2889e734.js";import"./Button-0821f9c6.js";import"./useFocusRing-3b11e1d4.js";import"./Hidden-9436c453.js";import"./useFocusable-51b32f4d.js";import"./useButton-9fa66393.js";import"./OverlayArrow-a4d50627.js";import"./context-7274409b.js";import"./Info-c57723b4.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
