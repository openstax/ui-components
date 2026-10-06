import{s as n,j as e,F as d,a as o}from"./index-498102b8.js";import{R as i}from"./Radio-c339eaca.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-cbcf395e.js";import"./Button-47926c77.js";import"./useFocusRing-fbd22f75.js";import"./Hidden-7e43645b.js";import"./useFocusable-825edfbb.js";import"./useButton-2d2af185.js";import"./OverlayArrow-cc0ed6a0.js";import"./context-1d0a19f0.js";import"./Info-9b225a17.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
