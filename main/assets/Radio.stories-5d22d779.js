import{s as n,j as e,F as d,a as o}from"./index-5d5ecec5.js";import{R as i}from"./Radio-878c3fd7.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-c0b3b02a.js";import"./Button-0d114c95.js";import"./useFocusRing-0597b27e.js";import"./Hidden-4d907325.js";import"./useButton-7eb0e240.js";import"./OverlayArrow-e83b25a8.js";import"./context-438509ae.js";import"./Info-f23e2c96.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
