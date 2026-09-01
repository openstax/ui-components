import{s as n,j as e,F as d,a as o}from"./index-469574e6.js";import{R as i}from"./Radio-4149c594.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-b4a5d5f7.js";import"./Button-587fb9de.js";import"./useFocusRing-ea55d817.js";import"./Hidden-43588595.js";import"./useButton-66e58125.js";import"./OverlayArrow-7316f37a.js";import"./context-ee644a14.js";import"./Info-294d9565.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
