import{s as n,j as e,F as d,a as o}from"./index-4bf0fe39.js";import{R as i}from"./Radio-2737df45.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-aaa8dbd9.js";import"./Button-518a766e.js";import"./useFocusRing-5099f795.js";import"./Hidden-f9649c51.js";import"./useFocusable-8961e2c2.js";import"./useButton-cee424d5.js";import"./OverlayArrow-4425e510.js";import"./context-13fc5389.js";import"./Info-e94728ba.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
