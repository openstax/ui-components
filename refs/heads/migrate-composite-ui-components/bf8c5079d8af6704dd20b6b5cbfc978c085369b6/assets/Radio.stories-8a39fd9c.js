import{s as n,j as e,F as d,a as o}from"./index-889390ef.js";import{R as i}from"./Radio-4c6cbac1.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-012e4a09.js";import"./Button-1efdd9ad.js";import"./useFocusRing-346b2f5a.js";import"./Hidden-fc318b56.js";import"./useButton-a5bd1574.js";import"./OverlayArrow-5b4a2467.js";import"./context-250399c4.js";import"./Info-b08530a0.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
