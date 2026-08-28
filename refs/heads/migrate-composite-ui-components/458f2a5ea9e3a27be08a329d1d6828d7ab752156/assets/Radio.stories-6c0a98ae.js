import{s as n,j as e,F as d,a as o}from"./index-a305f466.js";import{R as i}from"./Radio-ef363daf.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-87a6237a.js";import"./Button-e6f775e0.js";import"./useFocusRing-de446a71.js";import"./Hidden-16cd4541.js";import"./useButton-cfcf508f.js";import"./OverlayArrow-c0a58211.js";import"./context-1e96466a.js";import"./Info-2d4c2f1a.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
