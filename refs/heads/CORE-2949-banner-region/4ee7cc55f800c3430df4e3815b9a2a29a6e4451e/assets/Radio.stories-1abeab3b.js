import{s as n,j as e,F as d,a as o}from"./index-c5c4f151.js";import{R as i}from"./Radio-c4199e26.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-3f5fb360.js";import"./Button-586f8bee.js";import"./useFocusRing-0f193f3b.js";import"./Hidden-9957d589.js";import"./useFocusable-a67b4384.js";import"./useButton-cc602a37.js";import"./OverlayArrow-f14acea4.js";import"./context-b5987f00.js";import"./Info-a2b0882c.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
