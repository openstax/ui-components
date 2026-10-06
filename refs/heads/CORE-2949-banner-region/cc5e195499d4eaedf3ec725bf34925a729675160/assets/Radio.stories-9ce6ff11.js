import{s as n,a as e,F as d,j as o}from"./index-9c04b4c7.js";import{R as i}from"./Radio-e944f2c2.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-e6a0952f.js";import"./Button-3993b322.js";import"./useFocusRing-6fa5e94c.js";import"./Hidden-db2cdcfa.js";import"./useFocusable-d717dcb0.js";import"./useButton-21c3a2dc.js";import"./OverlayArrow-3a118172.js";import"./context-7bf58f6a.js";import"./Info-deaa4d99.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
