import{s as n,j as e,F as d,a as o}from"./index-cd45fd1a.js";import{R as i}from"./Radio-1b97f79c.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-da27ff31.js";import"./Button-8c0cabc6.js";import"./useFocusRing-16f7cf48.js";import"./Hidden-a0845117.js";import"./useFocusable-ca23f472.js";import"./useButton-f6a5a81a.js";import"./OverlayArrow-ad5d0e54.js";import"./context-8c85b89a.js";import"./Info-beada5de.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
