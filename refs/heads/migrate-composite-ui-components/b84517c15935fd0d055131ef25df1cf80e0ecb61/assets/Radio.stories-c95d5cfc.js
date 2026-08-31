import{s as n,j as e,F as d,a as o}from"./index-7b5cc3ce.js";import{R as i}from"./Radio-c4ec92a7.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-25e97d9e.js";import"./Button-977c23d0.js";import"./useFocusRing-1998ec8f.js";import"./Hidden-3f516dcd.js";import"./useButton-7ecf3fae.js";import"./OverlayArrow-21e8528c.js";import"./context-a98c0383.js";import"./Info-8716f49f.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
