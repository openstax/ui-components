import{s as n,j as e,F as d,a as o}from"./index-227b3044.js";import{R as i}from"./Radio-6a43e68b.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-fea436e5.js";import"./Button-4e35eab5.js";import"./useFocusRing-190fa8e6.js";import"./Hidden-4f2eec60.js";import"./useButton-f5ef4e1a.js";import"./OverlayArrow-76dcb88f.js";import"./context-24948818.js";import"./Info-4e969331.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
