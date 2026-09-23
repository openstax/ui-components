import{s as n,j as e,F as d,a as o}from"./index-3d226d98.js";import{R as i}from"./Radio-e47f8e96.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-7b61eed5.js";import"./Button-61077671.js";import"./useFocusRing-25a349b3.js";import"./Hidden-6e382400.js";import"./useFocusable-f2be1e35.js";import"./useButton-7d15dca2.js";import"./OverlayArrow-3d818583.js";import"./context-a82a8fff.js";import"./Info-4b9166fb.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
