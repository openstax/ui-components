import{s as n,j as e,F as d,a as o}from"./index-a20739c8.js";import{R as i}from"./Radio-0eda2d6d.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-435dc70e.js";import"./Button-a2420e85.js";import"./useFocusRing-f123a228.js";import"./Hidden-d9084126.js";import"./useFocusable-51c83c00.js";import"./useButton-13d8d03b.js";import"./OverlayArrow-c99c4098.js";import"./context-e305dfce.js";import"./Info-0b5cb341.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
