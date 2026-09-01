import{s as n,j as e,F as d,a as o}from"./index-33dfc534.js";import{R as i}from"./Radio-99b902f3.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-08f4583a.js";import"./Button-8942e7f3.js";import"./useFocusRing-a9acb7d7.js";import"./Hidden-aa4d981a.js";import"./useButton-a7599e13.js";import"./OverlayArrow-f1f6457f.js";import"./context-4b1e3f2b.js";import"./Info-501a520f.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
