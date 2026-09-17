import{s as n,j as e,F as d,a as o}from"./index-0469ff16.js";import{R as i}from"./Radio-9c64d10d.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-78e0fb22.js";import"./Button-5ba2cf29.js";import"./useFocusRing-27bb6ddc.js";import"./Hidden-0ba783c3.js";import"./useButton-4e82abba.js";import"./OverlayArrow-b2d94b53.js";import"./context-e96184e4.js";import"./Info-0bf9426f.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
