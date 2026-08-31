import{s as n,j as e,F as d,a as o}from"./index-1ab005b2.js";import{R as i}from"./Radio-19239cb4.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-b81a15f2.js";import"./Button-892f7afd.js";import"./useFocusRing-c624b421.js";import"./Hidden-71ad45c6.js";import"./useButton-dd11312a.js";import"./OverlayArrow-352b6b03.js";import"./context-dd2a1838.js";import"./Info-ebd4909d.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
