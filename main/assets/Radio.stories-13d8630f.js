import{s as n,j as e,F as d,a as o}from"./index-4403cc3b.js";import{R as i}from"./Radio-494095b9.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-972e4a28.js";import"./Button-5de3c1ac.js";import"./useFocusRing-052e896c.js";import"./Hidden-8b6ecea4.js";import"./useButton-14a39305.js";import"./OverlayArrow-ff9b5d25.js";import"./context-bf86e0a3.js";import"./Info-c57aa2c3.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
