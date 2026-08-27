import{s as n,j as e,F as d,a as o}from"./index-401d3572.js";import{R as i}from"./Radio-7e2ca0f0.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-385346d2.js";import"./Button-c95043ee.js";import"./useFocusRing-9cbfdfd7.js";import"./Hidden-1c73929c.js";import"./useButton-3af8ea51.js";import"./OverlayArrow-58ac7133.js";import"./context-129c94fe.js";import"./Info-c13baae7.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
