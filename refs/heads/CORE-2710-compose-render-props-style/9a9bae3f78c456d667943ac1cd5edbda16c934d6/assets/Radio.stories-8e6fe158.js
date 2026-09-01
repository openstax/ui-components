import{s as n,j as e,F as d,a as o}from"./index-7ecb918d.js";import{R as i}from"./Radio-8443559d.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-55f0b1b7.js";import"./Button-5fdb87c2.js";import"./useFocusRing-9972232d.js";import"./Hidden-11bef63e.js";import"./useButton-2e6cfc05.js";import"./OverlayArrow-97f54a6c.js";import"./context-0d5ee5cf.js";import"./Info-c836d42c.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
