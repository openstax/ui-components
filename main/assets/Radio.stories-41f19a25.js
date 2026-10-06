import{s as n,j as e,F as d,a as o}from"./index-58355721.js";import{R as i}from"./Radio-6d45eaeb.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-c874a47f.js";import"./Button-bc499d05.js";import"./useFocusRing-bcd9ea7a.js";import"./Hidden-c50db482.js";import"./useFocusable-34bb8cb5.js";import"./useButton-1a729c92.js";import"./OverlayArrow-a9941bd6.js";import"./context-7dc19fa0.js";import"./Info-25033117.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
