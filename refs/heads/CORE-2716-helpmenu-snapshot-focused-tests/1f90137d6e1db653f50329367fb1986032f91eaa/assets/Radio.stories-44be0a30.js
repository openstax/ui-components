import{s as n,j as e,F as d,a as o}from"./index-1dcb9487.js";import{R as i}from"./Radio-17ab8014.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-b93f6b59.js";import"./Button-2b030ead.js";import"./useFocusRing-014af88c.js";import"./context-2d612fa7.js";import"./useButton-afea6930.js";import"./OverlayArrow-d9d73e07.js";import"./Info-c719a923.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
